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
    mdTitle: "Tutoring Session Cohort 3",
    lgTitle: "",
    smTitle: "April 20, 2026 - May 30, 2026 | 05:00 PM IST",
    img: "/banner_front.jpg",
    linkText: "Register Now",
    linkURL:
      "https://us06web.zoom.us/webinar/register/WN_njBcNJ2ASA67T6_RZXoU-g",
  },
];
