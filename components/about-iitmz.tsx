import styles from "./about-iitmz.module.scss";
import Img from "./image";
import Slider from "./slider";

const aboutImages = [
  "/cover-about.jpg",
  "/about-scroll/1.png",
  "/about-scroll/2.jpg",
  "/about-scroll/4.jpg",
  "/about-scroll/5.jpg",
  "/about-scroll/6.jpg",
  "/about-scroll/7.jpg",
  "/about-scroll/8.png",
  "/about-scroll/9.jpg",
];

export function AboutIITMZanzibar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* About Section */}
        <section>
          <h2 className="section-title center line">About IITM Zanzibar</h2>
          <div className={styles.itemGrid}>
            <div className={styles.itemSection}>
              <div className={styles.itemInfo}>
                <p>
                  Established in 2023, IIT Madras Zanzibar marks a historic milestone as India’s first international IIT campus, extending the academic legacy and excellence of IIT Madras to the African continent. The campus was established through a landmark Memorandum of Understanding (MoU) signed on 6 July 2023 between the Ministry of Education, Government of India, IIT Madras, and the Ministry of Education and Vocational Training, Zanzibar–Tanzania. The MoU was signed in the presence of distinguished leaders from India and Zanzibar, reflecting the strong commitment of both nations towards advancing higher education and academic collaboration.
                </p>
                <p>
                  Located in Zanzibar, Tanzania, IIT Madras Zanzibar offers a vibrant and multicultural academic environment, bringing together students and faculty from across Africa, India, and other parts of the world. The campus offers programmes in engineering, science, and technology, following the rigorous academic standards of IIT Madras while responding to the evolving educational and technological needs of the region. Students benefit from opportunities for interdisciplinary learning, research, innovation, and collaboration in a globally connected environment.
                </p>
                <p>
                  As an international extension of IIT Madras, IIT Madras Zanzibar awards IIT Madras academic degrees while fostering excellence in education, research, and innovation. It contributes to human resource development and technological advancement, strengthening global academic collaboration.
                </p>
              </div>
              <div className={styles.itemImages}>
                <Slider slidesToShow={1} showTracks={true}>
                  {aboutImages.map((src, index) => (
                    <Img
                      key={`about-image__${index}`}
                      src={src}
                      width={450}
                      height={350}
                      alt="Image of IITM Zanzibar Campus"
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
