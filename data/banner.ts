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
      "Join Our Upcoming BS Admissions 2026 - 27 webinar on 15 April'26 at 5PM to 6:30 PM IST | 2:30 - 4:00 PM EAT",
    lgTitle: "",
    smTitle: "",
    img: "/banner_front.jpg",
    linkText: "Register Now",
    // linkURL: "https://youtube.com/live/dEpVgYIdirs?feature=share",
    linkURL: "https://forms.gle/n6UzMLg4o4p9mwmW7",
  },
];
