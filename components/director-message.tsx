import styles from "./student-placement.module.scss";
import Img from "./image";
import Link from "next/link";
import Expand from "./expand";

export default function DirectorMessage() {
  return (
    <div className="container">
      <div className={styles.content}>
        <section>
          <div className={`${styles.sectionHeader} ${styles.directorHeader}`}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Director&apos;s Message</h2>
          </div>

          <div className={styles.directorSection}>
            {/* Director Profile */}
            <div className={styles.directorProfile}>
              <Img
                src="/prajagopal.png"
                alt="Prof. Prabhu Rajagopal"
                width={100}
                height={100}
                className={styles.directorImage}
              />
              <Link
                href="https://www.iitmz.ac.in/schools/engineering-and-science/faculty/prof-prabhu-rajagopal"
                target="_blank"
              >
                <h3 className={styles.directorName}>Prof. Prabhu Rajagopal</h3>
                <p className={styles.directorTitle}>
                  Dean - School of Engg. & Science
                  <br />
                  Director-in-Charge, IITMZ
                </p>
              </Link>
            </div>

            {/* Director Message */}
            <div className={styles.directorMessage}>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.messageContent}>
                    <Expand previewItems={1}>
                      <p className={styles.textRegular}>
                        Glad to share this message as IIT Madras Zanzibar (IITM Zanzibar) continues its journey of academic excellence, innovation, and global engagement. Over the past few years, IITM Zanzibar has steadily expanded its academic programmes and strengthened its engagement with students, faculty, industry, and the wider academic community.

                      </p>
                      <p className={styles.textRegular}>
                        Our students and faculty have actively participated in conferences, workshops, internships, hackathons, and collaborative research projects, creating opportunities for learning and meaningful academic and industry engagement. The institute has also strengthened its focus on research, innovation, entrepreneurship, and translational research through initiatives such as the Centre for Innovation & Entrepreneurship and the Office for Translational Research, along with collaborations with leading organisations.

                      </p>

                      <p className={styles.textRegular}>
                        A well-rounded educational experience remains central to the IITM Zanzibar vision, with a vibrant calendar of technical, cultural, and sports activities that encourages students to explore their interests beyond the classroom. The development of the permanent campus at Fumba Peninsula, along with new residential facilities, marks another important step in the continued growth of the institute.

                      </p>

                      <p className={styles.textRegular}>
                       As IIT Madras Zanzibar moves forward, we remain committed to nurturing curiosity, innovation, leadership, and a spirit of collaboration, while creating meaningful opportunities for our students and strengthening connections between India, Tanzania, and the global academic community.
                      </p>

                    </Expand>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
