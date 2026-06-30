import styles from "./media-card.module.scss";
import Img from "./image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { isDriveResourceUrl } from "@/utils/url";

type MediaCardProps = {
  link: string;
  image: string;
  alt?: string;
  title: string;
  desc: string;
};

export default function MediaCard({
  link,
  image,
  alt,
  title,
  desc,
}: MediaCardProps) {
  const imageURL = isDriveResourceUrl(image) ? `/api/resource?id=${image}` : image;
  const linkURL = isDriveResourceUrl(link) ? `/api/resource?id=${link}` : link;
  const hasLink = Boolean(link && link !== "#");

  return (
    <article className={styles.card}>
      <Link
        className={styles.media}
        target="_blank"
        href={linkURL || "#"}
        aria-label={title}
        tabIndex={-1}
      >
        <Img
          src={`${imageURL}`}
          width={400}
          height={240}
          alt={alt || `IITM Zanzibar: ${title}`}
        />
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link target="_blank" href={linkURL || "#"}>
            {title}
          </Link>
        </h3>
        <p className={styles.desc}>{desc}</p>
        {hasLink && (
          <Link className={styles.read} target="_blank" href={linkURL}>
            Read article <BsArrowUpRight aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
