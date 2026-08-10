import styles from "./leadership.module.scss";
import Img from "./image";
import Link from "next/link";

export default function ZanzibarTeam() {
  return (
    <div className={styles.section}>
      <h2 className="section-title center">IITM Zanzibar - Madras Campus Team</h2>
      <div className="container">

          <div className={styles.card}>
            <Img
              src="/team/mohana-1.png"
              height={200}
              width={200}
              alt="Image of Professor Mohanapriya"
            />
            <h3>C. K. Mohanapriya</h3>
            <p>Academic Coordinator</p>
          </div>

          <div className={styles.card}>
            <Img
              src="/team/abhi.png"
              height={200}
              width={200}
              alt="Image of Professor Abhilasha"
            />
            <h3>Abhilasha</h3>
            <p>Academic Liasion & Social Media Engagements</p>
          </div>


          <div className={styles.card}>
            <Img
              src="/team/paviv2.jpeg"
              height={200}
              width={200}
              alt="Image of Pavithra"
            />
            <h3>Pavithra. C</h3>
            <p>Web Developer</p>
          </div>


          <div className={styles.card}>
            <Img
              src="/team/alfred.png"
              height={200}
              width={200}
              alt="Image of Alfred"
            />
            <h3>Alfred Jeevan. W</h3>
            <p>Communications</p>
          </div>

      </div>
    </div>
  );
}
