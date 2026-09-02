import StaffList from "@/components/staff";
import styles from "./page.module.scss";
import ZanzibarTeam from "@/components/zanzibar-team";

export const metadata = {
  title: "Offshore Campus Team",
  description:
    "Offshore Campus Team at IIT Madras Zanzibar. Learn More.",
  alternates: {
    canonical: `offshore-campus-team`,
  },
};

export default function StaffPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>IITM Zanzibar - Madras Campus Team</h1>
        </div>
        <ZanzibarTeam />
      </div>
    </div>
  );
}
