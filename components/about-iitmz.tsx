// import styles from "./about-iitmz.module.scss";
// import Img from "./image";

// export function AboutIITMZanzibar() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         {/* About Section */}
//         <section>
//           <div className={styles.sectionHeader}>
//             <div className={styles.sectionIndicator}></div>
//             <h2 className="section-title center line">
//               About IIT Madras Zanzibar
//             </h2>
//             <h2 className={styles.sectionTitle}>About IIT Madras Zanzibar</h2>
//           </div>
//           <div className={styles.twoColumn}>
//             <div className={styles.textColumn}>
//               <p className={styles.textLarge}>
//                 The Indian Institute of Technology Madras (IIT Madras), an
//                 Institute of National Importance established in 1959, has
//                 extended its legacy of academic rigor and research excellence to
//                 Africa with the establishment of IIT Madras Zanzibar in 2023.
//                 This pioneering international IIT campus is a premier science
//                 and engineering institution that advances technical education
//                 and research across the continent. Located in Zanzibar,
//                 Tanzania, it offers cutting-edge programs in engineering and
//                 science, fostering innovation and leadership in a vibrant,
//                 multicultural environment that brings together students from
//                 India, Nepal, Tanzania, Kenya, and the Middle East. The
//                 institute is known for upholding IIT Madras's rigorous academic
//                 standards, providing an exceptional educational experience, and
//                 significantly contributing to the human resource development and
//                 technological advancement of Africa. As India's first
//                 international IIT campus, it awards IIT Madras academic degrees
//                 and is committed to fostering academic excellence and
//                 technological advancements in Africa and across the world.
//               </p>
//             </div>
//             <div className={styles.imageColumn}>
//               <Img src="/about-iitmz.png" width={600} height={400} alt="" />
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

import styles from "./about-iitmz.module.scss";
import Img from "./image";

export function AboutIITMZanzibar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* About Section */}
        <section>
          <h2 className="section-title center line">About IITM Zanzibar</h2>
          <div className={styles.twoColumn}>
            <div className={styles.textColumn}>
              <p className={styles.textLarge}>
                The Indian Institute of Technology Madras (IIT Madras), an
                Institute of National Importance established in 1959, has
                extended its legacy of academic rigor and research excellence to
                Africa with the establishment of IIT Madras Zanzibar in 2023.
                This pioneering international IIT campus is a premier science
                and engineering institution that advances technical education
                and research across the continent. Located in Zanzibar,
                Tanzania, it offers cutting-edge programs in engineering and
                science, fostering innovation and leadership in a vibrant,
                multicultural environment that brings together students from
                India, Nepal, Tanzania, Kenya, and the Middle East. The
                institute is known for upholding IIT Madras&apos;s rigorous
                academic standards, providing an exceptional educational
                experience, and significantly contributing to the human resource
                development and technological advancement of Africa. As
                India&apos;s first international IIT campus, it awards IIT
                Madras academic degrees and is committed to fostering academic
                excellence and technological advancements in Africa and across
                the world.
              </p>
            </div>
            <div className={styles.imageColumn}>
              <Img src="/about-iitmz.png" width={600} height={400} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
