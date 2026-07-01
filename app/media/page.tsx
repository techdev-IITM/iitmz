import styles from "./page.module.scss";
import media from "@/data/media";
import MediaCard from "@/components/media-card";

export const metadata = {
  title: "News",
  description:
    "Check Out The Latest News About IIT Madras Zanzibar Campus Here.",
  alternates: {
    canonical: `media`,
  },
};

export default function MediaPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>News &amp; Media</h1>
          <p>
            IIT Madras Zanzibar in the press, and the latest stories from our
            campus.
          </p>
        </div>
        <div className={styles.grid}>
          {media.articles.map((article) => (
            <MediaCard
              key={article.link}
              image={article.image.url}
              alt={article.image.alt}
              title={article.title}
              desc={article.desc}
              link={article.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
