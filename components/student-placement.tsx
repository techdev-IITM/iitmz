import styles from "./student-placement.module.scss";
import Img from "./image";
import Button from "./button";
import Link from "next/link";
import Expand from "./expand";

export function PlacementComp() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* About Section */}
        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>About IIT Madras Zanzibar</h2>
          </div>
          <div>
            <p className={styles.textLarge}>
              The Indian Institute of Technology Madras (IIT Madras), an
              Institute of National Importance established in 1959, has extended
              its legacy of academic rigor and research excellence to Africa
              with the establishment of IIT Madras Zanzibar in 2023. This
              pioneering international IIT campus is a premier science and
              engineering institution that advances technical education and
              research across the continent.
            </p>
            <p className={styles.textMuted}>
              Located in Zanzibar, Tanzania, it offers cutting-edge programs in
              engineering and science, fostering innovation and leadership in a
              vibrant, multicultural environment that brings together students
              from India, Nepal, Tanzania, Kenya, and the Middle East.
            </p>
          </div>
        </section>

        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Our Philosophy</h2>
          </div>
          <div>
            <p className={styles.textLarge}>
              At IIT Madras Zanzibar, our philosophy is deeply rooted in the
              core values of academic rigor, innovation, and societal impact
              that define IIT Madras. We believe in providing a transformative
              educational experience that not only imparts cutting-edge
              knowledge in STEM fields but also cultivates critical thinking,
              problem-solving skills, and a strong sense of social
              responsibility. Our approach emphasizes interdisciplinary
              learning, fostering a dynamic environment where diverse
              perspectives converge to address complex global and regional
              challenges. We are committed to nurturing future leaders and
              innovators who will drive sustainable development and
              technological progress across Africa and beyond.
            </p>
          </div>
        </section>

        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Our vision</h2>
          </div>
          <div>
            <p className={styles.textLarge}>
              Our vision for IIT Madras Zanzibar is to establish ourselves as a
              leading international hub for science, engineering, and
              technology, serving the evolving needs of Africa and the world. We
              aspire to be a beacon of academic excellence and research
              innovation, continuously expanding our program offerings to meet
              emerging demands in areas such as sustainability, advanced
              manufacturing, and digital transformation. We envision a vibrant,
              diverse, and inclusive campus that attracts top talent from across
              the globe, fostering a rich tapestry of cultures and ideas. In the
              long term, IIT Madras Zanzibar aims to be a catalyst for regional
              development, contributing significantly to human resource capacity
              building, fostering entrepreneurship, and driving impactful
              research that leads to real-world solutions for nation- building
              and global prosperity. We are committed to sustained growth, with
              plans for a permanent, state-of-the-art campus that embodies our
              commitment to sustainability and cutting-edge learning
              environments.
            </p>
          </div>
        </section>

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
                        {/*As we embark on the third year of our journey, it is my
                        pleasure to welcome you to IITM&apos;s offshore campus
                        in Zanzibar, Tanzania. IITM Zanzibar was conceived in
                        July 2023, via a tripartite agreement between the Govts.
                        of India and Zanzibar, and India&apos;s top academic
                        institution, IIT Madras.*/}
                        I am happy to share my message as IIT Madras (IITM) celebrates its third year of operations at Zanzibar, our first International campus location. Established through the visionary joint efforts of the governments of India, Tanzania and Zanzibar, IITMZ commenced operations at our temporary campus in 2023 with the first batch of 4-year BS degree in Data Sciences & AI (DSAI).
                      </p>
                      <p className={styles.textRegular}>
                        As an offshore campus of IITM, one of the world’s leading technological universities and India’s top engineering institution as per NIRF rankings for 10 years in a row, IITMZ offers IITM degrees and is envisioned to bring pedagogy of international standards, and the promise of technology-led transformation to the East African region. The academics and teaching at IITMZ are handled by a mix of permanent international faculty members fully employed at IITMZ or on deputation from the Chennai campus and those visiting from various other IITs in India.
                      </p>

                      <p className={styles.textRegular}>
                        Over the past 2.5+ years, IITMZ has made steady strides: adding 1 more BS programme in Chemical Process Engineering in 2025, focussed on developing human capacity for the burgeoning process industry in the resource-rich continent of African. IITMZ today has over 129 students on roll across various programs, with significant features including having almost 51% students from Tanzania, a strong female participation across the disciplines, and enrolment of about 8% students from other African countries (Ethiopia, Zambia, Kenya, etc.).
                      </p>

                      <p className={styles.textRegular}>
                        At IITM Zanzibar, we exemplify the ‘IITM Way’ every single day. The four year Bachelor of Science program requires over 430 credits, including both core and elective subjects. Internships and industrial engagements, within the umbrella of academic credit requirements are strongly encouraged. We aim to foster experiential learning through a culture of ‘building’. The two year M.Tech in Data Science and Artificial Intelligence is our flagship program at the master’s level, and requires over 190 credits of course and project work. Starting with intensive training in core subjects during the first semester, students are exposed to advanced topics in the second semester and beyond. Course-related projects provide s a flavour of innovative research, whereas the final two semesters are dedicated to a thesis project, augmenting student skills to solve real world problems innovatively. The evaluation of the course and project work is stringent, ensuring advancement in skills, aptitude and an attitude attuned to solving problems.
                      </p>

                      <p className={styles.textRegular}>
                        Providing a well-rounded education is a highlight of the IIT system, and IITMZ has a year-long calendar of technical, cultural and sports events that support this mission.  The diverse and international settings make our students globally adaptable. Our students and faculty members engage extensively with societal, academic and industrial communities, both in Tanzania and across the world through hackathons, conferences, workshops, internships,  and joint research projects. The first batch of MTech in DSAI graduated last year, in what was our first graduation ceremony, and we are about to commence our first batch of PhD students shortly.  The graduating MTech batch in 2025 saw 100% placement, while our current  students have interned with top companies in India, West Asia and East Africa.
                      </p>

                      <p className={styles.textRegular}>
                        I am thrilled to welcome you to IITM Zanzibar, interact with our students and faculty, explore  emerging oppetunities together.
                      </p>

                    </Expand>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Our Team</h2>
          </div>
          <div className={styles.teamGrid}>
            <div className={styles.card}>
              <div className={styles.cardContentTeam}>
                <div className={styles.teamAvatar}>
                  <Img
                    src="/innocent-nyalala.jpg"
                    alt="Innocent Nyalala"
                    className={styles.teamImage}
                    width={84}
                    height={84}
                  />
                </div>
                <h3 className={styles.teamName}>Innocent Nyalala</h3>
                <p className={styles.teamRole}>
                  Faculty - School of Engg. & Science
                </p>
                <Link
                  target="_blank"
                  href="https://www.iitmz.ac.in/schools/engineering-and-science/faculty/prof-innocent-nyalala"
                >
                  <Button kind="SECONDARY">Know More</Button>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardContentTeam}>
                <div className={styles.teamAvatar}>
                  <Img
                    src="/appu-vinod.jpg"
                    alt="Nirav Bhatt"
                    className={styles.teamImage}
                    width={84}
                    height={84}
                  />
                </div>
                <h3 className={styles.teamName}>Appu Vinod</h3>
                <p className={styles.teamRole}>
                  Faculty - School of Engg. & Science
                </p>
                <Link
                  target="_blank"
                  href="https://www.iitmz.ac.in/schools/engineering-and-science/faculty/prof-appu-vinod"
                >
                  <Button kind="SECONDARY">Know More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Past Recruiters Section */}
        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Past Recruiters</h2>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <p className={styles.recruitersDescription}>
                Placements & Internships
              </p>
              <div className={styles.recruitersGrid}>
                <div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoBlue}`}>
                    <Img
                      src="/recuriter-logo/superdoll.jpg"
                      alt="TechCorp Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>SuperDoll</span>
                </div>

                <div className={styles.recruiterItem}>
                  <div
                    className={`${styles.recruiterLogo} ${styles.logoGreen}`}
                  >
                    <Img
                      src="/recuriter-logo/bosch.jpg"
                      alt="DataSys Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>Bosch</span>
                </div>

                <div className={styles.recruiterItem}>
                  <div
                    className={`${styles.recruiterLogo} ${styles.logoPurple}`}
                  >
                    <Img
                      src="/recuriter-logo/logo.jpg"
                      alt="AI Labs Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>
                    Gyan Data Pvt. Ltd
                  </span>
                </div>

                <div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoGray}`}>
                    <Img
                      src="/recuriter-logo/netweb.jpg"
                      alt="GlobalTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>Netweb</span>
                </div>

                <div className={styles.recruiterItem}>
                  <div
                    className={`${styles.recruiterLogo} ${styles.logoOrange}`}
                  >
                    <Img
                      src="/recuriter-logo/systech.jpg"
                      alt="InnoTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>SysTech</span>
                </div>

                <div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoGray}`}>
                    <Img
                      src="/recuriter-logo/Soft Tech.png"
                      alt="SoftTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>SoftTech</span>
                </div>
                <div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoGray}`}>
                    <Img
                      src="/recuriter-logo/agl.png"
                      alt="GlobalTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>
                    Africa Global Logistics
                  </span>
                </div>
                <div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoGray}`}>
                    <Img
                      src="/recuriter-logo/liquid.png"
                      alt="GlobalTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>
                    Liquid Intelligent Technologies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
