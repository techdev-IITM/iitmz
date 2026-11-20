"""Shrink PDFs without visible quality loss.

Two methods are tried on each file and the smallest result that still looks
the same is kept:

  photos  Re-encode losslessly stored photos as high-quality JPEG. Only image
          streams are touched: text, vector art, existing JPEGs and
          transparency masks stay exactly as they are. Best for image-heavy
          PDFs (newsletters, posters).
  gs      Rebuild the whole file with Ghostscript (font subsetting, clean-up,
          recompression). Best for text-heavy PDFs, but it can drop or flatten
          artwork in files with transparency, which is why it is never trusted
          without the check below.

Every candidate is rendered page by page and compared with the original
(SSIM); anything below MIN_SSIM on any page is rejected. If nothing passes,
the original is kept. Processed files are marked so they are never compressed
twice.

usage:
  python compress_pdfs.py FILE.pdf [FILE.pdf ...]
  python compress_pdfs.py --from-file changed.txt   # NUL-separated paths (git diff -z)

Exit code is 1 if any PDF is still over the size limit afterwards.
"""

import argparse
import io
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import numpy as np
import pikepdf
from PIL import Image
from pikepdf import Name, PdfImage
from skimage.metrics import structural_similarity

MARK = Name("/IITMZCompressed")

JPEG_QUALITY = 85           # photos method
JPEG_QUALITY_FALLBACK = 92  # retried if the 85 version doesn't pass the check
MIN_SSIM = 0.97             # every page must be at least this similar to the original
MIN_IMAGE_SAVING = 0.20     # only replace a photo if it gets at least 20% smaller
MIN_FILE_SAVING = 0.10      # only replace the file if it gets at least 10% smaller
SIZE_LIMIT_MB = 15          # fail the run if a PDF is still bigger than this
RENDER_DPI = 150
GS_TIMEOUT = 300            # seconds


# --- photos method ---------------------------------------------------------

def to_pil(obj: pikepdf.Stream) -> Image.Image | None:
    """Plain 8-bit RGB or grey pixels of an image, or None if it's anything else.

    Reads the colour data directly, so an image's soft mask (transparency) is
    not baked in: the mask is a separate stream and stays lossless.
    """
    try:
        img = PdfImage(obj)
        if img.indexed or img.mode not in ("RGB", "L"):
            return None
        mode, channels = ("RGB", 3) if img.mode == "RGB" else ("L", 1)
        w, h = int(obj.Width), int(obj.Height)
        data = obj.read_bytes()
        if len(data) != w * h * channels:
            return None
        return Image.frombytes(mode, (w, h), data)
    except Exception:
        return None  # unusual colour space: leave it alone


def photos(src: Path, dst: Path, quality: int) -> bool:
    """Write a copy of src with eligible photos re-encoded. False if nothing changed."""
    with pikepdf.open(src) as pdf:
        # images used as (soft) masks must stay lossless
        mask_ids = set()
        for obj in pdf.objects:
            if isinstance(obj, pikepdf.Stream):
                for key in ("/SMask", "/Mask"):
                    m = obj.get(key)
                    if isinstance(m, pikepdf.Stream):
                        mask_ids.add(m.objgen)

        changed = 0
        for obj in pdf.objects:
            if not isinstance(obj, pikepdf.Stream) or obj.get("/Subtype") != Name.Image:
                continue
            if obj.objgen in mask_ids or obj.get("/ImageMask") or obj.get("/Decode") is not None:
                continue
            if obj.get("/Filter") != Name.FlateDecode or obj.get("/BitsPerComponent") != 8:
                continue
            pil = to_pil(obj)
            if pil is None or pil.width * pil.height < 64 * 64:
                continue

            buf = io.BytesIO()
            pil.save(buf, "JPEG", quality=quality, subsampling=0, optimize=True)
            new = buf.getvalue()
            if len(new) > len(obj.read_raw_bytes()) * (1 - MIN_IMAGE_SAVING):
                continue  # flat graphics etc.: JPEG doesn't help
            obj.write(new, filter=Name.DCTDecode)
            if "/DecodeParms" in obj:
                del obj["/DecodeParms"]
            changed += 1

        if not changed:
            return False
        pdf.save(dst, compress_streams=True,
                 object_stream_mode=pikepdf.ObjectStreamMode.generate)
    return True


# --- gs method -------------------------------------------------------------

def ghostscript(src: Path, dst: Path) -> bool:
    try:
        subprocess.run(
            ["gs", "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.7",
             "-dPDFSETTINGS=/printer", "-dDetectDuplicateImages=true",
             "-dNOPAUSE", "-dBATCH", "-dQUIET", "-dSAFER",
             f"-sOutputFile={dst}", str(src)],
            check=True, timeout=GS_TIMEOUT,
            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        )
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired):
        return False
    return dst.exists() and dst.stat().st_size > 0


# --- quality check -----------------------------------------------------------

def render(pdf: Path, outdir: Path) -> list[Path]:
    outdir.mkdir()
    subprocess.run(
        ["gs", "-q", "-dNOPAUSE", "-dBATCH", "-dSAFER", "-sDEVICE=png16m",
         f"-r{RENDER_DPI}", "-dTextAlphaBits=4", "-dGraphicsAlphaBits=4",
         f"-sOutputFile={outdir}/p%04d.png", str(pdf)],
        check=True, timeout=GS_TIMEOUT,
    )
    return sorted(outdir.glob("p*.png"))


def worst_page_ssim(original_pages: list[Path], candidate: Path, tmp: Path) -> tuple[float, int]:
    pages = render(candidate, tmp / f"r_{candidate.stem}")
    if len(pages) != len(original_pages):
        return 0.0, 0
    worst, worst_page = 1.0, 0
    for i, (x, y) in enumerate(zip(original_pages, pages), 1):
        ia = np.asarray(Image.open(x).convert("RGB"))
        ib = np.asarray(Image.open(y).convert("RGB"))
        if ia.shape != ib.shape:
            return 0.0, i
        s = structural_similarity(ia, ib, channel_axis=2, data_range=255)
        if s < worst:
            worst, worst_page = s, i
    return worst, worst_page


# --- driver ------------------------------------------------------------------

def process(path: Path) -> None:
    with pikepdf.open(path) as pdf:
        if MARK in pdf.docinfo:
            print("  already compressed, skipping")
            return
    before = path.stat().st_size

    with tempfile.TemporaryDirectory() as t:
        tmp = Path(t)
        original_pages = None
        winner = None

        def try_candidate(name: str, make) -> str:
            """Returns 'ok', 'rejected' (failed the quality check) or 'skip'."""
            nonlocal original_pages, winner
            out = tmp / f"{name}.pdf"
            if not make(out):
                print(f"  {name}: nothing to do")
                return "skip"
            after = out.stat().st_size
            if after > before * (1 - MIN_FILE_SAVING):
                print(f"  {name}: {before/1e6:.2f} -> {after/1e6:.2f} MB, not worth it")
                return "skip"
            if original_pages is None:
                original_pages = render(path, tmp / "r_original")
            ssim, page = worst_page_ssim(original_pages, out, tmp)
            ok = ssim >= MIN_SSIM
            print(f"  {name}: {before/1e6:.2f} -> {after/1e6:.2f} MB, "
                  f"worst page SSIM {ssim:.4f} (page {page}) {'ok' if ok else 'REJECTED'}")
            if ok and (winner is None or after < winner.stat().st_size):
                winner = out
            return "ok" if ok else "rejected"

        if try_candidate(f"photos-q{JPEG_QUALITY}",
                         lambda o: photos(path, o, JPEG_QUALITY)) == "rejected":
            try_candidate(f"photos-q{JPEG_QUALITY_FALLBACK}",
                          lambda o: photos(path, o, JPEG_QUALITY_FALLBACK))
        try_candidate("gs", lambda o: ghostscript(path, o))

        if winner is None:
            print("  keeping the original")
            return

        # mark it so it's never compressed twice (gs drops custom metadata)
        with pikepdf.open(winner) as pdf:
            pdf.docinfo[MARK] = "true"
            pdf.save(tmp / "final.pdf", compress_streams=True,
                     object_stream_mode=pikepdf.ObjectStreamMode.generate)
        shutil.move(tmp / "final.pdf", path)
        print(f"  using {winner.stem}: {before/1e6:.2f} -> {path.stat().st_size/1e6:.2f} MB")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="*")
    ap.add_argument("--from-file", help="file with NUL-separated paths")
    args = ap.parse_args()

    files = list(args.files)
    if args.from_file:
        files += [f for f in Path(args.from_file).read_text().split("\0") if f]
    files = [Path(f) for f in files if f.lower().endswith(".pdf") and os.path.isfile(f)]

    too_big = []
    for f in files:
        print(f"{f}")
        try:
            process(f)
        except Exception as e:  # a broken PDF shouldn't block the others
            print(f"::warning file={f}::Could not compress: {e}")
        mb = f.stat().st_size / 1e6
        if mb > SIZE_LIMIT_MB:
            too_big.append(f)
            print(f"::error file={f}::{f.name} is {mb:.1f} MB (limit {SIZE_LIMIT_MB} MB). "
                  "Re-export it with smaller images.")
    return 1 if too_big else 0


if __name__ == "__main__":
    sys.exit(main())
