import styles from "./page.module.scss";
import LabsComp from "@/components/labs";

export const metadata = {
  title: "Labs",
  description:
    "Discover Advanced Laboratories Driving Innovation and Hands-on Learning at IIT Madras Zanzibar. Learn More.",
  alternates: {
    canonical: `labs`,
  },
};

export default function ResearchPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Our Labs</h1>
        </div>
        <LabsComp />
      </div>
    </div>
  );
}
