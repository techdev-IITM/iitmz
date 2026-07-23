import styles from "./page.module.scss";
import Img from "@/components/image";
import {
  FaCode,
  FaRobot,
  FaHandsHelping,
  FaUsers,
  FaRocket,
  FaStar,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";
import { IconType } from "react-icons";
import Slider from "@/components/slider";
import Link from "next/link";

export const metadata = {
  title: "Center for Innovation and Entrepreneurship",
  description:
    "Student-led innovation hub at IIT Madras Zanzibar Campus, inspired by CFI IIT Madras. Build, Validate, Startup through CIPHER, IBot, and Sahaay clubs. Learn More.",
  alternates: {
    canonical: `center-for-innovation-and-entrepreneurship`,
  },
};

type Club = {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  focus: string[];
  projects: number;
  Icon: IconType;
};

const clubs: Club[] = [
  {
    slug: "cipher",
    name: "CIPHER",
    tagline: "Tech Club",
    desc: "Building with AI, ML, and software — from hackathons to full product teams.",
    focus: [
      "AI & ML Projects",
      "App & Software Dev",
      "Hackathons & Workshops",
      "Coding & Innovation",
    ],
    projects: 4,
    Icon: FaCode,
  },
  {
    slug: "ibot",
    name: "IBot",
    tagline: "Robotics Club",
    desc: "Designing autonomous robots and smart devices for competitions and real-world use.",
    focus: [
      "Autonomous Robots",
      "Smart Devices",
      "Competition Teams",
      "Engineering Skills",
    ],
    projects: 3,
    Icon: FaRobot,
  },
  {
    slug: "sahaay",
    name: "Sahaay",
    tagline: "Social Impact",
    desc: "Driving community outreach and awareness through technology for social good.",
    focus: [
      "Community Outreach",
      "Donation Drives",
      "Awareness Campaigns",
      "Social Responsibility",
    ],
    projects: 3,
    Icon: FaHandsHelping,
  },
];

const stats = [
  { value: "3", label: "Active Clubs", Icon: FaUsers },
  { value: "10", label: "Selected Projects", Icon: FaRocket },
  { value: "40+", label: "Student Innovators", Icon: FaStar },
];

const team = [
  { name: "Achyut", img: "/cie-members/Achyut.jpg" },
  { name: "Anubhav", img: "/cie-members/Anubhav.jpg" },
  { name: "Anurag", img: "/cie-members/Anurag.png" },
  { name: "Arunya", img: "/cie-members/Arunya.jpg" },
  { name: "Edwin", img: "/cie-members/Edwin.jpg" },
  { name: "Ismail", img: "/cie-members/Ismail.jpg" },
  { name: "Nidheesh", img: "/cie-members/Nidheesh-1.png" },
  { name: "Raghav", img: "/cie-members/Raghav-1.jpg" },
  { name: "Rohan", img: "/cie-members/Rohan.png" },
];

function ClubCard({ club }: { club: Club }) {
  const { Icon } = club;
  return (
    <div className={styles.clubCard}>
      <div className={styles.clubCardHead}>
        <div className={styles.clubCardHeadLeft}>
          <div className={styles.clubIcon}>
            <Icon size={20} color="#fff" />
          </div>
          <div>
            <h3 className={styles.clubTitle}>{club.name}</h3>
            <p className={styles.clubSub}>{club.tagline}</p>
          </div>
        </div>
        <div className={styles.projectBadge}>{club.projects} PROJECTS</div>
      </div>

      <p className={styles.clubDesc}>{club.desc}</p>

      <ul className={styles.focusList}>
        {club.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CenterForInnovation() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* About Section */}
          {/*<section>
            <h2 className="section-title center line">About CIE</h2>
            <div className={styles.twoColumn}>
              <div className={styles.textColumn}>
                <p className={styles.textLarge}>
                  The <b>Center for Innovation and Entrepreneurship (CIE)</b> is
                  a student-led innovation hub at IIT Madras Zanzibar Campus,
                  inspired by and connected to CFI, IIT Madras — our parent
                  organization. <br /> <br /> CIE operates on a simple
                  framework: Build, Validate, Startup — taking student ideas
                  from first prototype to real-world impact. Today, three active
                  clubs power this ecosystem: CIPHER, IBot, and Sahaay, covering
                  Tech, Robotics, and Social Impact respectively.
                </p>
              </div>
              <div className={styles.videoColumn}>
                <video
                  className={styles.aboutVideo}
                  src="/cie-logo-intro.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </section>*/}

          {/* About Section */}
          <section>
            <h2 className="section-title center line">About CIE</h2>
            <div className={styles.twoColumn}>
              <div className={styles.textColumn}>
                <p className={styles.textLarge}>
                  The <b>Center for Innovation and Entrepreneurship (CIE)</b> is
                  a student-led innovation hub at IIT Madras Zanzibar Campus,
                  inspired by and connected to CFI, IIT Madras — our parent
                  organization. <br /> <br /> CIE operates on a simple
                  framework: Build, Validate, Startup — taking student ideas
                  from first prototype to real-world impact. Today, three active
                  clubs power this ecosystem: CIPHER, IBot, and Sahaay, covering
                  Tech, Robotics, and Social Impact respectively.
                </p>

                <div className={styles.statsGrid}>
                  {stats.map((stat) => (
                    <div className={styles.statCard} key={stat.label}>
                      <div className={styles.statIcon}>
                        <stat.Icon size={20} color="#fff" />
                      </div>
                      <div className={styles.statText}>
                        <div className={styles.statValue}>{stat.value}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.videoColumn}>
                <video
                  className={styles.aboutVideo}
                  src="/cie-logo-intro.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </section>

          {/* Stats Section */}
          {/*<section>
            <h2 className="section-title center line">Key Highlights</h2>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                // <div className={styles.statCard} key={stat.label}>
                //   <div className={styles.statIcon}>
                //     <stat.Icon size={22} color="#fff" />
                //   </div>
                //   <div className={styles.statValue}>{stat.value}</div>
                //   <div className={styles.statLabel}>{stat.label}</div>
                // </div>
                //
                <div className={styles.statCard} key={stat.label}>
                  <div className={styles.statIcon}>
                    <stat.Icon size={20} color="#fff" />
                  </div>
                  <div className={styles.statText}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>*/}

          {/* Clubs Section */}
          <section>
            <h2 className="section-title center line">Our Clubs</h2>
            <div className={styles.clubsGrid}>
              {clubs.map((club) => (
                <ClubCard club={club} key={club.slug} />
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="section-title center line">Our Team</h2>
            <div className={styles.teamGrid}>
              {team.map((member) => (
                <div className={styles.teamMember} key={member.name}>
                  <Img
                    width={140}
                    height={140}
                    src={member.img}
                    alt={member.name}
                  />
                  <p className={styles.teamName}>{member.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className={styles.visitStrip}>
          <div className={styles.visitLeft}>
            <div className={styles.visitIcon}>
              <FaGlobe size={18} color="#fff" />
            </div>
            <p className={styles.visitText}>Want to know more about CIE?</p>
          </div>
          <Link
            href="https://cie-iitmz.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitButton}
          >
            Visit Website
            <span className={styles.visitArrow}>
              <FaArrowRight size={14} />
            </span>
          </Link>
        </div>
        {/* Highlights Section */}
        <section>
          <div className={styles.fullBleed}>
            <Slider slidesToShow={4}>
              {Array.from({ length: 5 }, (_, index) => (
                <div className={styles.item} key={`highlight__${index}`}>
                  <Img
                    src={`/highlights/${index + 1}.jpg`}
                    width={260}
                    height={290}
                    style={{ objectFit: "cover" }}
                    alt="CIE highlight moment"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
}
