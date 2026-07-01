import styles from "./governing-council.module.scss";
import Img from "./image";

export const governanceBoardMember = [
  {
    name: "Prof. Prabhu Rajagopal",
    title:
      "Director-in-Charge, Dean of the School of Engineering & Science, IITMZ",
    img: "/prajagopal.png",
  },
  {
    name: "Prof. Mohammed Ali Sheikh",
    title:
      "Chairperson, Deputy Permanent Secretary (Fisheries), Ministry of Livestock and Fisheries, United Republic of Tanzania",
    img: "/council/Ali-Sheikh.png",
  },
  {
    name: "Prof. Preeti Aghalayam",
    title:
      "Former Director-in-Charge, IITMZ, Dean (Office of Global Engagement), IIT Madras",
    img: "/preeti.jpg",
  },
  {
    name: "Prof. Raghunathan Rengaswamy",
    title:
      "Prof., Department Chemical Engg. IIT Madras , Board Member IITM Global",
    img: "/prof-raghu.jpg",
  },

  {
    name: "Prof. Hamed R. H. Hikmany",
    title:
      "Principal, Zanzibar School of Health; Chairman, Board of Directors Zanzibar Revenue Authority(ZRA); Chairman, Council of the State University of Zanzibar (SUZA)",
    img: "/council/Hamed.png",
  },
  {
    name: "Prof. Ligy Philip",
    title:
      "Nita and KG Ganapathy Institute Chair Professor, Department of Civil Engineering, IIT Madras",
    img: "/ligy-1.png",
  },
  {
    name: "Dr. Maryam Jaffar Ismail",
    title:
      "Assistant Director, Department of Higher Education ( Coordination ), Ministry of Education, Science and Technology",
    img: "/council/maryam.png",
  },
  {
    name: "Prof. Elisante Ole Gabriel",
    title: "Tanzania Chief Court Administrator",
    img: "/council/elisante-ole.png",
  },
  {
    name: "Prof. Maulilio John Kipanyula",
    title:
      "Vice Chancellor of the Nelson Mandela Africa Institute of Science and Technology",
    img: "/council/Maulilio.png",
  },
  {
    name: "Prof. Said Ally Mohamed",
    title: "Executive Secretary - National Examination Council Tanzania(NECTA)",
    img: "/council/Said-Ally.png",
  },
  {
    name: "Dr. Pramath Sinha",
    title:
      "Founder & Chairperson, Board of Trustees, Ashoka University; Founding Senior Partner, Jetri",
    img: "/council/pramath-sinha.png",
  },
  {
    name: "Prof. Ravindra Gettu",
    title:
      "VS Raju Chair Professor, Department of Civil Engineering, IIT Madras",
    img: "/council/Ravindra-Gettu.png",
  },
  {
    name: "Prof. Abdi Talib Abdalla",
    title:
      "Deputy Vice Chancellor (Academic Affairs, Research and Consultancy), The State University of Zanzibar (SUZA)",
    img: "/council/abdi-talib.png",
  },
];

export default function GovernanceBoard() {
  return (
    <div className={styles.section}>
      <h2 className="section-title center">Governing Council</h2>
      <div className="container">
        <div className={styles.flex_grid}>
          {governanceBoardMember.map((member) => (
            <div key={member.img} className={styles.card}>
              <Img
                src={member.img}
                alt={`Picture of ${member.name}`}
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <div className={styles.body}>
                <h2>{member.name}</h2>
                <h4>{member.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
