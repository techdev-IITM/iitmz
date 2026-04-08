export interface Banner {
  mdTitle: string;
  lgTitle: string;
  smTitle: string;
  img: string;
  linkText: string;
  linkURL: string;
}

export const banners: Banner[] = [
  {
    mdTitle: "Welcome To",
    lgTitle: "IITM Zanzibar",
    smTitle: "Empowering Africa: Shaping Next-Gen Tech Leaders and Innovators",
    img: "/banner_default.jpg",
    linkText: "",
    linkURL: "",
  },
  {
    mdTitle:
      "BS & M.Tech. Admissions for the academic year 2026–27 are open now",
    lgTitle: "",
    smTitle: "",
    img: "/banner_front.jpg",
    linkText: "Apply Now",
    linkURL: "https://admissions.iitmz.ac.in/",
  },
  {
    mdTitle:
      "Join Our Upcoming BS Webinar with Allen Career Institute on 11 April'26 at 5PM to 6:30 PM IST | 2:30 - 3:30 PM EAT",
    lgTitle: "",
    smTitle: "",
    img: "/banner_front.jpg",
    linkText: "Register Now",
    // linkURL: "https://youtube.com/live/dEpVgYIdirs?feature=share",
    linkURL: "https://forms.gle/mEubr2vzZTZ34RS69",
  },
];
