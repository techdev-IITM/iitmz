import styles from "./testimonials.module.scss";
import { AiTwotoneStar } from "react-icons/ai";
import Img from "./image";
import Slider, { SliderProps } from "./slider";

type TestimonialsProps = Omit<SliderProps, "children"> & {
  type: "PRIMARY" | "SECONDARY";
};

export default function Testimonials({ ...props }: TestimonialsProps) {
  return (
    <section className={props.type === "PRIMARY" ? `` : styles.secondary}>
      <Slider {...props}>
        {/* testimonial 1*/}
        <div className={styles.item}>
          <div className={styles.quote}>
            <Img
              src="/img/testimonial/quotes.png"
              height={36}
              width={50}
              alt=""
            />
          </div>
          <div className={styles.header}>
            <Img
              src="/feedback/Kudraat.png"
              height={52}
              width={52}
              alt="Testimonial Reviewer Picture"
            />
            <div>
              <h4>Kudraat Aboud Suleiman Jumbe</h4>
              <span>BS</span>
            </div>
          </div>

          <div className={styles.body}>

            <p>
              Studying at IITM Zanzibar has been a journey since day one. As is the case with any journey, there have been lots of twists and turns, and the road was some-times rough, but the memories I have made here are precious and invaluable. It's more than just a campus, it's a home-away-from-home, a place filled with peo-ple from different cultures and settings - all here to work towards building something magical, and I be-lieve that is what makes IITM Zanzibar so beautiful.

            </p>
             <h3>As a wise sage once said - IITM Zanzibar is small, but mighty!</h3>
          </div>
        </div>
       {/* testimonial 2 */}
        <div className={styles.item}>
          <div className={styles.quote}>
            <Img
              src="/img/testimonial/quotes.png"
              height={36}
              width={50}
              alt=""
            />
          </div>
          <div className={styles.header}>
            <Img
              src="/feedback/kelivin.png"
              height={52}
              width={52}
              alt="Testimonial Reviewer Picture"
            />
            <div>
              <h4>Kelivin Dickson</h4>
              <span>BS</span>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              IITM Zanzibar feels like a small tech society surround-ed by very smart and driven people. Students here think differently and look at problems from many sides. Each semester we learn from lecturers from different cultures, which makes the experience richer. Being part of such an innovative community is amaz-ing.

            </p>
            <h3>At IITM Zanzibar, great minds come together, and ideas grow.</h3>
          </div>
          {/*<div className={styles.icon}>
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>*/}
        </div>
        {/* testimonial 3 */}
        <div className={styles.item}>
          <div className={styles.quote}>
            <Img
              src="/img/testimonial/quotes.png"
              height={36}
              width={50}
              alt=""
            />
          </div>
          <div className={styles.header}>
            <Img
              src="/feedback/Advaita.png"
              height={52}
              width={52}
              alt="Testimonial Reviewer Picture"
            />
            <div>
              <h4>Sri Advaita Varakavi</h4>
              <span>BS </span>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              IIT Madras Zanzibar has been one of those rare, life-changing opportunities for me. From the moment I arrived, I was welcomed into a community that is as intellectually stimulating as it is warm and inclusive. Academics at IITM Zanzibar are rigorous, yet deeply rewarding. The curriculum pushes us beyond mem-orization and into critical thinking, creativity, and re-al-world problem-solving.
              <br />
              Beyond academics, extracurricular activities and clubs have added so much colour to my experience. One of the most incredible aspects of studying here is the op-portunity to lead, inspire, and innovate. In my opinion, the network you build here is unparalleled.

            </p>
            <h3>Some opportunities knock gently. Others burst through the door and turn your life around.</h3>
          </div>
          {/*<div className={styles.icon}>
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>*/}
        </div>
        {/* testimonial 4 */}
        <div className={styles.item}>
          <div className={styles.quote}>
            <Img
              src="/img/testimonial/quotes.png"
              height={36}
              width={50}
              alt=""
            />
          </div>
          <div className={styles.header}>
            <Img
              src="/feedback/Faraja.png"
              height={52}
              width={52}
              alt="Testimonial Reviewer Picture"
            />
            <div>
              <h4>Faraja Alnoor Ahmed</h4>
              <span>BS</span>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              My time at IITMZ has been a valuable and enriching experience. Being part of such a diverse and dynamic environment has created opportunities to learn from different perspectives and engage with people from various backgrounds.
              <br />
              The experience has contributed to both academic growth and personal development while also high-lighting the importance of collaboration, adaptability, and continuous learning. Each moment has added to a broader understanding of new ideas and possibilities.

            </p>
            <h3>Some experiences don&apos;t just shape what you learn, they shape how you move forward.</h3>
          </div>
          {/*<div className={styles.icon}>
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>*/}
        </div>
        {/* testimonial 5 */}
        <div className={styles.item}>
          <div className={styles.quote}>
            <Img
              src="/img/testimonial/quotes.png"
              height={36}
              width={50}
              alt=""
            />
          </div>
          <div className={styles.header}>
            <Img
              src="/feedback/Saleh.png"
              height={52}
              width={52}
              alt="Testimonial Reviewer Picture"
            />
            <div>
              <h4>Saleh Abdillahi Saleh</h4>
              <span>BS</span>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              From the moment I arrived on campus,I knew my time at IIT Madras Zanzibar would lead to more than an academic journey. It has been a journey of growth, strength, and exploration. IIT Madras Zanzibar has that feeling of home, where the faculty, staff, and col-leagues become family and you will never face any challenge alone. The rigorous academics pushed me further than I thought was possible, The real-world ex-periences turned concepts into outcomes and showed me possibilities I never thought were possible. The late-night energy of campus life, shared experienc-es, and unforgettable moments shaped me into who I am today. IIT Madras Zanzibar is not just an institute, it also serves as a place to develop, lead, and dream even bigger than I thought possible.

            </p>
            <h3>IIT Madras Zanzibar is where dreams become re-ality, and futures begin.</h3>
          </div>
          {/*<div className={styles.icon}>
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>*/}
        </div>
        {/* testimonial 6 */}
        {/*<div className={styles.item}>
          <div className={styles.quote}>
            <Img
              src="/img/testimonial/quotes.png"
              height={36}
              width={50}
              alt=""
            />
          </div>
          <div className={styles.header}>
            <Img
              src="/feedback/Khamis.png"
              height={52}
              width={52}
              alt="Testimonial Reviewer Picture"
            />
            <div>
              <h4>Khamis Kali Haji</h4>
              <span>MTech</span>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              IITMZ is more than a centre for academic excellence; it is a vibrant intersection of cultures, ideas, and ambi-tion. As a leading institution where the majority of the students come from abroad, I am truly excited to be among the diverse group of learners here

            </p>
            <h3>Let&apos;s be together as one to build a future per-spective through science and technology</h3>
          </div>
        </div>*/}

      </Slider>
    </section>
  );
}
