import styles from "./page.module.scss";
import Img from "@/components/image";
import Slider from "@/components/slider";
import {
  FaMusic,
  FaPalette,
  FaShoePrints,
  FaCamera,
  FaFutbol,
  FaRunning,
  FaFeatherAlt,
  FaVolleyballBall,
  FaChess,
  FaTheaterMasks,
} from "react-icons/fa";
import { IconType } from "react-icons";

export const metadata = {
  title: "Astra - Cultural and Sports Clubs",
  description:
    "Empowering student life and building a dynamic campus community at the Indian Institute of Technology Madras, Zanzibar Campus. Learn More.",
  alternates: {
    canonical: `astra`,
  },
};

type Coordinator = {
  name: string;
  img: string;
};

type ClubData = {
  slug: string;
  name: string;
  tagline?: string;
  desc: string;
  coordinators: Coordinator[];
  imageCount: number;
  Icon: IconType;
};

const culturalClubs: ClubData[] = [
  {
    slug: "aperture",
    name: "Aperture",
    tagline: "Photography Club",
    // desc: "Street walks, studio lighting workshops, and monthly portfolio reviews.",
    desc: "Capturing the spirit of IITMZ through photography and visual storytelling, documenting campus events, student life, and memorable moments.",
    coordinators: [
      { name: "Amina", img: "/astra-members/Amina.jpg" },
      { name: "Arunya", img: "/astra-members/Arunya.jpg" },
    ],
    imageCount: 2,
    Icon: FaCamera,
  },
  {
    slug: "choreography",
    name: "Choreography",
    tagline: "Dance Club",
    // desc: "Contemporary, classical, and street styles, training for inter-college competitions.",
    desc: "Celebrating movement and expression through energetic performances, workshops, and collaborations that add vibrance to campus events.",
    coordinators: [{ name: "Nithila", img: "/astra-members/Nithila.png" }],
    imageCount: 2,
    Icon: FaShoePrints,
  },
  {
    slug: "dramatics",
    name: "Dramatics",
    tagline: "Drama Club",
    // desc: "Contemporary, classical, and street styles, training for inter-college competitions.",
    desc: "A stage for creativity and storytelling, Encore brings students together through acting, improvisation, and original productions, fostering confidence, collaboration, and artistic expression across campus.",
    coordinators: [{ name: "Aradhya", img: "/astra-members/Aradhya.jpg" }],
    imageCount: 2,
    Icon: FaTheaterMasks,
  },
  {
    slug: "fine-arts",
    name: "Fine Arts",
    tagline: "Art Club",
    // desc: "Painting, sketching, and sculpture, with weekly critiques and a yearly exhibition.",
    desc: "A creative space for artists to explore, create, and inspire through painting, crafts, design, and themed activities that enrich campus life.",
    coordinators: [{ name: "Sakina", img: "/astra-members/Sakina.jpg" }],
    imageCount: 3,
    Icon: FaPalette,
  },
  {
    slug: "symphony",
    name: "Symphony",
    tagline: "Music Club",
    // desc: "Ensembles, bands, and open jam sessions — auditions held every semester.",
    desc: "Bringing the campus to life through music, Symphony unites students with diverse musical interests and performs at cultural events and celebrations across IITMZ.",
    coordinators: [{ name: "Sri Advaita", img: "/clubs/symphony/1.jpg" }],
    imageCount: 3,
    Icon: FaMusic,
  },
];

const sportsClubs: ClubData[] = [
  {
    slug: "badminton",
    name: "Badminton",
    desc: "Singles and doubles play with structured drills, open to all skill levels.",
    coordinators: [{ name: "Puneeth", img: "/astra-members/Puneeth.jpg" }],
    imageCount: 2,
    Icon: FaFeatherAlt,
  },
  {
    slug: "chess",
    name: "Chess",
    desc: "Weekly matches and tournaments sharpen strategy, patience, and focus.",
    coordinators: [{ name: "Tarun", img: "/astra-members/Tarun.jpg" }],
    imageCount: 2,
    Icon: FaChess,
  },
  {
    slug: "football",
    name: "Football",
    desc: "Competitive matches and weekend training sessions build teamwork and stamina on the field.",
    coordinators: [{ name: "Nelson", img: "/astra-members/Nelson.jpg" }],
    imageCount: 2,
    Icon: FaFutbol,
  },
  {
    slug: "running",
    name: "Running",
    desc: "Track and cross-country sessions for students chasing endurance, speed, and personal bests.",
    coordinators: [
      { name: "Given", img: "/astra-members/Given.jpg" },
      { name: "Snigdha", img: "/astra-members/Snigdha.jpg" },
    ],
    imageCount: 2,
    Icon: FaRunning,
  },
  {
    slug: "volleyball",
    name: "Volleyball",
    desc: "Fast-paced rallies and regular practice matches sharpen coordination and team spirit.",
    coordinators: [{ name: "Anurag", img: "/astra-members/Anurag.png" }],
    imageCount: 2,
    Icon: FaVolleyballBall,
  },
];

function ClubCard({ club }: { club: ClubData }) {
  const { Icon } = club;
  return (
    <div className={styles.clubCard}>
      <Slider slidesToShow={1} showTracks={false}>
        {Array.from({ length: club.imageCount }, (_, index) => (
          <Img
            key={`${club.slug}__${index}`}
            src={`/clubs/${club.slug}/${index + 1}.jpg`}
            width={450}
            height={280}
            alt={`${club.name} club activity`}
          />
        ))}
      </Slider>

      <div className={styles.clubCardBody}>
        <div className={styles.clubCardHead}>
          <div className={styles.clubIcon}>
            <Icon size={20} color="#fff" />
          </div>
          <div>
            <h3 className={styles.clubTitle}>{club.name}</h3>
            {club.tagline && <p className={styles.clubSub}>{club.tagline}</p>}
          </div>
        </div>

        <p className={styles.clubDesc}>{club.desc}</p>

        <div className={styles.coordinatorGroup}>
          {club.coordinators.map((coordinator) => (
            <div className={styles.coordinator} key={coordinator.name}>
              <Img
                width={50}
                height={50}
                src={coordinator.img}
                alt={coordinator.name}
              />
              <div>
                <div className={styles.coordName}>{coordinator.name}</div>
                <div className={styles.coordRole}>Coordinator</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AstraClub() {
  return (
    <>
      <section className={styles.campus}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.heading}>
              <h1>ASTRA</h1>
              <h4>Cultural and Sports Clubs</h4>
            </div>
            <div>
              <p>
                ASTRA stands as the central pillar for all extracurricular
                pursuits at IITM Zanzibar. We cultivate talent, passion, and
                synergy outside the traditional classroom environment. Our
                activities connect international standards with rich local
                talent to celebrate diverse creative expressions and athletic
                excellence.
              </p>

              <div className={styles.astraCoordinator}>
                <Img
                  width={56}
                  height={56}
                  src="/astra-members/Achyut.jpg"
                  alt="ASTRA Coordinator"
                />
                <div>
                  <div className={styles.astraCoordName}>Achyut</div>
                  <div className={styles.astraCoordRole}>ASTRA Coordinator</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.astraGrid}>
            <div className={styles.images}>
              <Img
                width={1200}
                height={600}
                src="/astra-grp.jpg"
                alt="ASTRA Group photograph"
                loading="eager"
              />
            </div>

            {/*<div className={styles.astraCoordinatorCenter}>
              <Img
                width={56}
                height={56}
                src="/astra-members/Achyut.jpg"
                alt="ASTRA Coordinator"
              />
              <div>
                <div className={styles.astraCoordName}>Achyut</div>
                <div className={styles.astraCoordRole}>ASTRA Coordinator</div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
      <section className={styles.divisionSection}>
        <div className="container">
          <div className={styles.divisionHead}>
            <h2>Cultural Club Divisions</h2>
            <p>
              Nurturing creative expression and celebrating global diversity
              across campus.
            </p>
          </div>

          <div className={styles.clubsGrid}>
            {culturalClubs.map((club) => (
              <ClubCard club={club} key={club.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.divisionSection}>
        <div className="container">
          <div className={styles.divisionHead}>
            <h2>Sports Club Divisions</h2>
            <p>
              Under the leadership of Sports Coordinator Abdul, campus athletics
              is managed by dedicated activity leaders:
            </p>
          </div>

          <div className={styles.clubsGrid}>
            {sportsClubs.map((club) => (
              <ClubCard club={club} key={club.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
