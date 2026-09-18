import styles from "./page.module.scss";
import { alumniBatches } from "@/data/alumni";
import Img from "@/components/image";


export const metadata = {
  title: "Student Alumni",
  description:
    "Student Alumni at IIT Madras Zanzibar. Learn More.",
  alternates: {
    canonical: `student-alumni`,
  },
};

export default function StudentAlumniPage() {
  return (
    <div className={styles.page}>
          <div className="container">
            <div className={styles.header}>
              <h1>Student Alumni</h1>
            </div>
            {alumniBatches.map((batch) => (
              <div className={styles.batchBlock} key={batch.title}>
                <h3 className={styles.batchTitle}>{batch.title}</h3>
                <div className={styles.teamGrid}>
                  {batch.members.map((member) => (
                    <div className={styles.teamMember} key={member.name}>
                      <Img
                        width={140}
                        height={140}
                        src={member.img}
                        alt={member.name}
                      />
                      <p className={styles.teamName}>{member.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
  );
}
