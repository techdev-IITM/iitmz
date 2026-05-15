export interface Announcement {
  activeTill: string;
  content: string;
  linkText?: string;
  linkUrl?: string;
}

export type Announcements = Announcement[];

export const announcements: Announcements = [
  // {
  //   activeTill: "2026-04-21",
  //   content:
  //     "M.Tech. applications has been extended to Monday, 20 April 2026, until 12:30 PM IST (10:00 AM EAT)",
  //   linkText: "Apply Now",
  //   linkUrl: "https://admissions.iitmz.ac.in/mtechdsai",
  // },
  {
    activeTill: "2026-04-30",
    content: "M.Tech applications closed",
  },
  {
    activeTill: "2026-05-15",
    content:
      "To know more about the BS admissions process, download the brochure",
    linkText: "BS Info Brochure",
    linkUrl: "/IB_BS_2026_updated.pdf",
  },
  {
    activeTill: "2026-04-30",
    content:
      "To know more about the M.Tech. admissions process, download the brochure",
    linkText: "M.Tech. Info Brochure",
    linkUrl: "/IB_MTech_2026.pdf",
  },
  {
    activeTill: "2026-05-16",
    content: "BS Applications closing soon 15 May'26. Apply now",
    linkText: "Apply Now",
    linkUrl: "https://admissions.iitmz.ac.in/",
  },
];
