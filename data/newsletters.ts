export type Newsletter = {
  quarter: string;
  date?: string;
  thumbnail: string;
  href: string;
};

export const newsletters: Newsletter[] = [
  {
    quarter: "June 2026",
    // date: "June 2026",
    thumbnail: "/newsletter-june.png",
    href: "/june.pdf",
  },
  {
    quarter: "May 2026",
    // date: "May 2026",
    thumbnail: "/may.jpeg",
    href: "/may-newsletter.pdf",
  },
  {
    quarter: "April 2026",
    // date: "April 2026",
    thumbnail: "/april-newsletter.png",
    href: "/april-newsletter.pdf",
  },
  {
    quarter: "March 2026",
    // date: "March 2026",
    thumbnail: "/march.png",
    href: "/",
  },
];
