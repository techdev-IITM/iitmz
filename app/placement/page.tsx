import { PlacementComp } from "@/components/student-placement";
import styles from "./page.module.scss";
import Img from "@/components/image";
import Button from "@/components/button";
import Link from "next/link";

export const metadata = {
  title: "Student Placement",
  description: "Check Out The Student Placement.",
  alternates: {
    canonical: `student-placement`,
  },
};

export default function PlacementPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Student Placement</h1>
          <p>
            Partner with IIT Madras Zanzibar to recruit from a globally diverse
            cohort of engineering and science talent. Explore our programs and
            connect with our placement team.
          </p>
        </div>
        <div className={styles.images}>
          <Img
            width={1200}
            height={600}
            src="/degree-distribution/8.jpeg"
            alt="IIT Madras Zanzibar student placement overview"
            loading="eager"
          />
        </div>
        <div className={styles.cta}>
          <Link target="_blank" href="/IITMZ-PlacementBrochure-2026.pdf" rel="noreferrer">
            <Button kind="SECONDARY">Download Placement Brochure</Button>
          </Link>
          <Link target="_blank" href="https://forms.gle/J18cXSru9XEt7bcE7">
            <Button kind="PRIMARY">Recruiter Registration Form</Button>
          </Link>
        </div>
        {/*<div className={styles.body}>
          <p>Information will be updated soon. Stay tuned for more details !</p>
        </div>*/}
        <PlacementComp />
      </div>
    </div>
  );
}
