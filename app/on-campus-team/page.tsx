import StaffList from "@/components/staff";
import styles from "./page.module.scss";

export const metadata = {
  title: "Administrative & Support Staff",
  description:
    "Administrative & Support Staff at IIT Madras Zanzibar. Learn More.",
  alternates: {
    canonical: `on-campus-team`,
  },
};

export default function StaffPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Administrative & Support Staff</h1>
        </div>
        <StaffList />
      </div>
    </div>
  );
}
