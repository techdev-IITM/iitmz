import styles from "./page.module.scss";
import { teachingAssistants } from "@/data/teaching-assistants";
import Img from "@/components/image";

export const metadata = {
  title: "Teaching Assistants",
  description: "Teaching Assistants at IIT Madras Zanzibar. Learn More.",
  alternates: {
    canonical: `teaching-assistants`,
  },
};

const batches = teachingAssistants.reduce<
  { duration: string; members: typeof teachingAssistants }[]
>((acc, ta) => {
  const batch = acc.find((b) => b.duration === ta.duration);
  if (batch) {
    batch.members.push(ta);
  } else {
    acc.push({ duration: ta.duration, members: [ta] });
  }
  return acc;
}, []);

export default function TeachingAssistantsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Teaching Assistants</h1>
        </div>
        {batches.map((batch) => (
          <div className={styles.batchBlock} key={batch.duration}>
            <h3 className={styles.batchTitle}>{batch.duration}</h3>
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
