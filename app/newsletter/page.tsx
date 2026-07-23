import styles from "./page.module.scss";
import { newsletters, type Newsletter } from "@/data/newsletters";
import Img from "@/components/image";

function NewsletterCard({ item }: { item: Newsletter }) {
  return (
    <a className={styles.newsletterCard} href={item.href} target="_blank" rel="noopener noreferrer">
      <div className={styles.newsletterThumb}>
        <Img
          src={item.thumbnail}
          width={400}
          height={560}
          style={{ objectFit: "cover" }}
          alt={`${item.quarter} Newsletter`}
        />
      </div>
      <div className={styles.newsletterMeta}>
        <p className={styles.newsletterQuarter}>{item.quarter}</p>
        <p className={styles.newsletterDate}>{item.date}</p>
      </div>
    </a>
  );
}

export default function NewsletterPage (){
    return (
      <div className={styles.page}>
        <div className="container">
          <div className={styles.header}>
            <h1>Newsletter</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.newsletterGrid}>
              {newsletters.map((item) => (
                <NewsletterCard item={item} key={item.quarter} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
