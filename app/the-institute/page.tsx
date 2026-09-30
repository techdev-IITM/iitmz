import styles from "./page.module.scss";
import GovernanceBoard from "@/components/governing-council";
import Leadership from "@/components/leadership";
import SocialMedia from "@/components/social-media";
import { ProgramAdvisory } from "@/components/program-advisory";
import { AboutIITMZanzibar } from "@/components/about-iitmz";
import Img from "@/components/image";


export const metadata = {
  title: "The Institute",
  description:
    "About at IIT Madras Zanzibar. Learn More.",
  alternates: {
    canonical: `student-alumni`,
  },
};

export default function StudentAlumniPage() {
  return (
    <div className={styles.page}>
          <div className="container">
            {/*<div className={styles.header}>
              <h1>Student Alumni</h1>
            </div>*/}
            <AboutIITMZanzibar />
        <Leadership />
          </div>
            <GovernanceBoard />
            {/* <AdvisoryCouncil /> */}
            <ProgramAdvisory />
          </div>

  );
}
