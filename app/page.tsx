import styles from "./page.module.scss";
import Hero from "@/components/hero";
import News from "@/components/news";
import Courses from "@/components/courses";
import Counter from "@/components/counter";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
// import AdvisoryCouncil from "@/components/advisory-council";
import GovernanceBoard from "@/components/governing-council";
import Leadership from "@/components/leadership";
import SocialMedia from "@/components/social-media";
import { ProgramAdvisory } from "@/components/program-advisory";
import { AboutIITMZanzibar } from "@/components/about-iitmz";
import Img from "@/components/image";

export const metadata = {
  alternates: {
    canonical: `/`,
  },
};

export default async function Home() {
  return (
    <main>
      <Hero />
      <News />
      <AboutIITMZanzibar />
      <Courses layout="HORIZONTAL" />
      <Counter />
      <Leadership />
      <GovernanceBoard />
      {/* <AdvisoryCouncil /> */}
      <ProgramAdvisory />
       <section className={styles.events_testimonials_section}>
        <div className="container">
          <h2 className="section-title center line">Student Feedback</h2>
          <div className={styles.row}>
            <Img
            height={400}
            width={580}
            className={styles.feedback_image}
              src="/testimonial.jpeg"
              alt=""
            />
            <div className={styles.testimonials}>
              <Testimonials type="PRIMARY" />
            </div>
          </div>
        </div>
      </section>
      <SocialMedia kind="FULL" />
      <Gallery />
    </main>
  );
}
