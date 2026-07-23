export type Attendee = {
  name: string;
  initial: string;
};

export type Visit = {
  slug: string;
  title: string;
  image: string;
  date?: string;
  description?: string;
  attendees?: Attendee[];
};

export const visits: Visit[] = [
  {
    slug: "president-visit-iitm",
    title: "President of Zanzibar Visits IIT Madras for the 63rd Convocation",
    description: "H.E. Dr. Hussein Ali Mwinyi, President of Zanzibar, attended the 63rd Convocation of IIT Madras, reaffirming the shared vision between India and Zanzibar and highlighting the continued growth and impact of IIT Madras Zanzibar as India's first international IIT campus.",
    date: "July 17, 2026",
    image: "/63-convocation.jpeg",
  },
  {
    slug: "state-house",
    title: "Visit to the State House, Zanzibar",
    description: "Prof. Prabhu Rajagopal, Director-in-Charge of IITM Zanzibar, accompanied the High Commissioner of India to Tanzania, H.E. Bishwadip Dey, and the Consul General of India in Zanzibar, Shri Sarjeet Kajla, on a courtesy visit to H.E. Dr. Hussein Ali Mwinyi, President of Zanzibar. During the meeting, the High Commissioner presented an invitation from the Vice President of India, H.E. C. P. Radhakrishnan, for an official visit to India in July 2026, which is expected to include a visit to the IIT Madras campus in Chennai.",
    date: "July 2, 2026",
    image: "/courtesy-visit.jpeg",
  },
  {
    slug: "ai-basics",
    title: "AI Basics Session for the East African Commission",
    description: "The IITM Zanzibar team delivered a session on AI Basics for officials of the East African Commission, facilitated by the Indian Embassy in Tanzania. Dr. Hope McCoy also presented on Ethics, Bias, and Fairness in AI for e-governance, drawing on her research in these areas.",
    date: "June 12, 2026",
    attendees: [
      { name: "Prof. Prabhu Rajagopal", initial: "P" },
      { name: "Dr. Idrissa Said", initial: "I" },
      { name: "Prof. A.K. Suresh", initial: "S" },
      { name: "Dr. Hope McCoy", initial: "H" },
    ],
    image: "/ai-gov.png",
  },
  {
    slug: "cgi",
    title: "Visit by the Incoming Consul General of India in Zanzibar",
    description: "The incoming Consul General of India in Zanzibar, H.E. Sarjeet Kajla, visited the IITM Zanzibar campus and interacted with students and staff, followed by a shared meal.",
    date: "June 8, 2026",
    image: "/CGI.jpeg",
  },
  {
    slug: "visit-me",
    title: "Visit by the Ministry of Electronics, IT & Innovation and Sahara Ventures",
    description: "Mr. Samora Chacha, Director of Innovation at the Ministry of Electronics, IT & Innovation, visited IITM Zanzibar along with Ikram Soraga, CEO of the Zanzibar Startup Association, and Jumanne Mtambalike, CEO of Sahara Ventures. Discussions focused on collaboration for Sahara Sparks 2026, the Sahara Accelerator Startup School Program, and exploring partnership opportunities in innovation, research, entrepreneurship, commercialization, and startup ecosystem development.",
    date: "June 3, 2026",
    image: "/ministry-electronics-visit.png",
  },
  {
    slug: "budget-visit",
    title: "Visit to the House of Representatives, Revolutionary Government of Zanzibar",
    description: "The IITM Zanzibar team attended the Ministry of Education and Vocational Training's 2026/2027 Budget Speech delivered by Hon. Minister Lela Mohamed Mussa and met with Hon. Minister Lela Mohamed Mussa and Deputy Minister Mrs. Khadija Salum Ali following the presentation of the annual budget.",
    date: "June 1, 2026",
    image: "/budget-session-visit.jpeg",
  },
  {
    slug: "seaweed-processing-visit",
    title: "Chemical Process Engineering Students Visit Seaweed Processing Facility",
    description: "Prof. A.K. Suresh, Vice President and Professor-in-Charge (Academic Administration), accompanied the first batch of Chemical Process Engineering (BS) students on an industrial visit to the seaweed processing facility managed by Ukweli na Njia Safi in Bweleo, highlighting the importance of industry exposure in IIT education.",
    date: "May 21, 2026",
    image: "/seaweed.png",
  },
  {
    slug: "iitmz-vigor-group-visit",
    title: "IIT Madras Zanzibar Delegation Visits Vigor Group",
    description: "Led by Prof. A.K. Suresh, Vice President and Professor-in-Charge (Academic Administration), the IIT Madras Zanzibar delegation visited Vigor Group to explore a long-term partnership focused on industrial exposure, education sponsorships, executive learning, and community engagement.",
    date: "May 20, 2026",
    image: "/vigor-group.png",
  },
  {
    slug: "iitm-visit",
    title: "Visit to IIT Madras, Chennai",
    description: "The IITM Zanzibar team visited IIT Madras, hosted by Prof. Prabhu Rajagopal, and met with the Dean (Global Engagement). The visit included tours of the main campus, laboratories, classrooms, workshops, lecture halls, the Innovation Hub, IITM Research Park, and the Discovery Campus in Thaiyur, Chennai.",
    date: "May 6, 2026",
    attendees: [
      { name: "Dr. Idrissa", initial: "I" },
      { name: "Mr. Hassan", initial: "H" },
    ],
    image: "/director-iitm-visit.jpeg",
  },
  {
    slug: "india-accelerator-visit",
    title: "Visit to India Accelerator, Delhi",
    date: "April 27, 2026",
    description: "A visit to India Accelerator (IA), Delhi, explored opportunities for strategic partnership and collaboration to strengthen IITM Zanzibar's startup and innovation ecosystem.",
    image: "/india-accelerator.png",
  },
  {
    slug: "bhashini-visit",
    title: "Visit to BHASHINI",
    date: "April 27, 2026",
    description: "A visit to BHASHINI, the Indian Government's acclaimed Indian language LLM initiative, explored the creation of Swahili language datasets for AI training.",
    image: "/bhashini.png",
  },
  {
    slug: "foreign-office-visit",
    title: "Foreign Office Team from the Controller & Auditor General of India",
    date: "April 16, 2026",
    description: "A delegation from the Foreign Office of the Controller & Auditor General of India, Nairobi, along with the Consul General of India in Zanzibar and the Head of Chancery, High Commission of India, Dar es Salaam, visited IITM Zanzibar to discuss organizing an AI training programme for African auditors, proposed to be held at IITM Zanzibar in June 2026.",
    image: "/foreign-office-visit.png",
  },
  {
    slug: "zambia-visit",
    title: "Zambia University of Technology visit to IITM Zanzibar",
    date: "April 15-16, 2026",
    description: "A delegation from Zambia University of Technology, one of Zambia's leading technology-focused universities, visited IITM Zanzibar to explore further collaboration opportunities with IITM Zanzibar",
    image: "/zambia.png",
  },
  {
    slug: "mbeya-visit",
    title: "Mbeya University Visit to IITM Zanzibar",
    date: "April 8, 2026",
    description: "MoU Partner of IITM Zanzibar, Deepening Strategic Engagement. A delegation from Mbeya University visited IITM Zanzibar to explore collaboration opportunities with IITM Zanzibar and strengthen the strategic partnership between the two institutions.",
    image: "/mbeya-visit.png",
  },
  {
    slug: "cphk-visit",
    title: "IITM Zanzibar team visited CPHK Labs on Pemba island",
    date: "April 5-6, 2026",
    description: "The visit included a walkthrough of CPHK's facilities and discussions on potential areas of collaboration. Following these engagements, IITM Zanzibar and CPHK jointly submitted four collaborative proposals to funding calls from Google and the Gates Foundation.",
    image: "/cphk-visit.png",
  },
  {
    slug: "iitmz-itec",
    title: "IITM Zanzibar to ITEC Day by High Commissioner of India",
    date: "March 28, 2026",
    description: "The High Commission of India in Dar es Salaam celebrated ITEC Day 2026, bringing together ITEC alumni and partners to commemorate India's long-standing developmental partnership with Tanzania and reaffirm its commitment to South-South cooperation under the philosophy of 'Vasudhaiva Kutumbakam' (The World is One Family).",
    image: "/itec.png",
  },
  {
    slug: "zaliri",
    title: "ZALIRI",
    date: "March 26, 2026",
    description: "Collaborative team meeting.",
    image: "/zaliri.png",
    attendees: [
      { name: "Prof. Prabhu Rajagopal", initial: "P" },
      { name: "Dr. Hope Katherine McCoy", initial: "H" },
    ],
  },
  {
    slug: "moevt-visit",
    title: "MOEVT visit to IITM Zanzibar and interaction with Innovation teams",
    date: "March 18, 2026",
    description: "The visit highlights the strategic alliance aligns advanced research with Zanzibar's blue economy to build a highly skilled, high-tech workforce.",
    image: "/moevt-visit.png",
  },
];
