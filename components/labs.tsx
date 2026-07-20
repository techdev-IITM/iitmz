import Link from "next/link";
import styles from "./labs.module.scss";
// import InquirySection from "./admissions-enquiry";
import Img from "./image";

type TeamMember = {
  name: string;
  role: string;
  img: string;
};

const saailFaculty: TeamMember = {
  name: "Dr. Innocent Nyalala",
  role: "",
  img: "/innocent-nyalala.jpg",
};
const insightFaculty: TeamMember = {
  name: "Dr. Manoj Kumar",
  role: "",
  img: "/k-manoj.jpeg",
};
const midasFaculty: TeamMember = {
  name: "Dr. Tushar Shinde",
  role: "",
  img: "/tushar.JPG",
};

const bioNexusFaculty: TeamMember[] = [
  {
  name: "Dr. Sunil Sazawal",
  role: "",
  img: "/sunil.jpeg",
  },
  {
    name: "Dr. Nirav Bhatt",
    role: "",
    img: "/nirav-1.jpg",
  },
];

function LabFaculty({ member }: { member: TeamMember }) {
  return (
    <div className={styles.teamGrid}>
      <div className={styles.teamMember}>
        <Img width={100} height={100} src={member.img} alt={member.name} />
        <div className={styles.teamInfo}>
          <p className={styles.teamName}>{member.name}</p>
          <p className={styles.teamRole}>PRINCIPAL INVESTIGATOR</p>
        </div>
      </div>
    </div>
  );
}

// rendering multiple LabFaculty members

function LabFacultyList({ members }: { members: TeamMember[] }) {
  return (
    <div className={styles.teamGrid}>
      {members.map((member) => (
        <div className={styles.teamMember} key={member.name}>
          <Img width={100} height={100} src={member.img} alt={member.name} />
          <div className={styles.teamInfo}>
            <p className={styles.teamName}>{member.name}</p>
            <p className={styles.teamRole}>PRINCIPAL INVESTIGATOR</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LabsComp() {
  return (
    <section className={styles.section}>
      {/*<div className={styles.header}>
        <h1>Our Labs</h1>
      </div>*/}
      <div className={styles.programGrid}>

        {/* BioNexus Lab */}

        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Img
                src="/lab-logos/bionexus.png"
                alt="BioNexus Logo"
                className={styles.logo}
                width={100}
                height={140}
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}>BioNexus Lab</h2>
              <h3 className={styles.cardSubtitle}>
                {/*Center for Artificial Intelligence, Data Sciences and Computational
                Biology in Health*/}
                Connecting Data, Biology & Health through AI
              </h3>
              <div className={styles.cardMeta}>
                <Link
                  href="/"
                  className={styles.cardLink}
                  target="_blank"
                >
                  Visit BioNexus Lab
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.description}>
              BioNexus AI is a multidisciplinary center that integrates artificial intelligence, data science, computational biology, biomedical research, and public health to address complex healthcare challenges. Guided by the motto &apos;Where Biology Meets Intelligence,&apos; it fosters collaborative research, innovation, and education. The center connects research and academic partners across India, Zanzibar, Bangladesh, Zambia, and the United States, creating a global network that develops scalable, data-driven solutions for precision health and public health.
            </p>
          </div>
          <LabFacultyList members={bioNexusFaculty} />
        </article>

        {/* Insights Lab */}
        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Img
                src="/lab-logos/insight-1.png"
                alt="Spoken Tutorial Logo"
                className={styles.logo}
                width={100}
                height={140}
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}>INSIGHT Lab</h2>
              <h3 className={styles.cardSubtitle}>
                Intelligent Systems for Health, Inference, and Global
                Technology{" "}
              </h3>
              <div className={styles.cardMeta}>
                <Link
                  href="https://sites.google.com/view/hansat/home"
                  className={styles.cardLink}
                  target="_blank"
                >
                  Visit INSIGHT Lab
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.description}>
              Our lab focuses on the development of physics-informed,
              data-driven, and hybrid machine learning frameworks for modeling
              complex dynamical systems. We work at the intersection of machine
              learning, applied mathematics, and domain sciences, with strong
              emphasis on Neural ODEs, physics-informed machine learning (PIML),
              sequence-aware modeling, and multimodal AI.
            </p>
          </div>
          <LabFaculty member={insightFaculty} />
        </article>

        {/* MIDAS Lab */}
        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Img
                src="/lab-logos/midas-1.png"
                alt="CERT TDS Logo"
                className={styles.logo}
                width={100}
                height={140}
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}>MIDAS Lab</h2>
              <h3 className={styles.cardSubtitle}>
                Multimedia Intelligence, Data Analysis & compreSsion
              </h3>
              <div
                className={`${styles.cardMeta} ${styles.certButtonsContainer}`}
              >
                <Link
                  href="https://sites.google.com/view/tushar-shinde/midas-lab"
                  className={styles.cardLink}
                  target="_blank"
                >
                  Visit MIDAS Lab
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.description}>
              Our research builds on prior work in model compression, coreset
              selection, generative AI, and resource-efficient multimedia/video
              processing, aiming to drive innovation in applications spanning
              AI-driven vision, healthcare, and speech.
            </p>
          </div>
          <LabFaculty member={midasFaculty} />
        </article>

        {/* SAAIL Lab */}
        <article className={styles.programCard}>
          <div className={styles.cardHeader}>
            <div className={styles.logoContainer}>
              <Img
                src="/lab-logos/saail-1.png"
                alt="GITAA Logo"
                className={styles.logo}
                width={100}
                height={140}
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={styles.cardTitle}>SAAIL Lab</h2>
              <h3 className={styles.cardSubtitle}>
                Sustainable AI for Agriculture & Intelligent Livelihoods
              </h3>
              <div className={styles.cardMeta}>
                <Link
                  href="https://saaillab.github.io/"
                  className={styles.cardLink}
                  target="_blank"
                >
                  Visit SAAIL Lab
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.description}>
              The SAAIL Lab (Sustainable AI for Agriculture & Intelligent
              Livelihoods), develops responsible artificial intelligence
              solutions addressing challenges in agriculture, healthcare, and
              sustainable development in East Africa and the Global South. Our
              research combines technical rigor with practical impact, ensuring
              AI technologies serve communities sustainably and equitably.
            </p>
          </div>
          <LabFaculty member={saailFaculty} />
        </article>
      </div>
    </section>
  );
}
