export function isDriveResourceUrl(url: string): boolean {
  // Simple regex to check if the URL starts with "/drive-resources/"
  const driveResourceRegex = /^\/drive-resources\//;
  return driveResourceRegex.test(url);
}

// Next.js prefetches <Link> targets that scroll into view. For static files
// (PDFs, images) Amplify answers that prefetch with the entire file, so links
// to files must not be prefetched.
export function isFileHref(href: string): boolean {
  const path = href.split(/[?#]/)[0];
  return /\.[a-z0-9]+$/i.test(path.split("/").pop() ?? "");
}
