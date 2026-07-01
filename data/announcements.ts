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
    activeTill: "2026-07-04",
    content: "Second MTech Degree Distribution Ceremony 2026",
    linkText: "View program schedule",
    linkUrl: "/second-degree-distribution-schedule.jpeg",
  },
  {
    activeTill: "2026-07-06",
    content:
      "Data Science for Epidemiology and Public Health Analytics – Registrations Open Until 5 July 2026",
    linkText: "Click here to register",
    linkUrl: "https://forms.gle/KiEY8GzJHDV3GWuL6",
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
  {
    activeTill: "2026-05-31",
    content: "Tutoring sessions are ongoing until 31 May 2026",
    linkText: "Join Tutoring session",
    linkUrl:
      "https://us06web.zoom.us/webinar/register/WN_njBcNJ2ASA67T6_RZXoU-g",
  },
  {
    activeTill: "2026-06-06",
    content: "BS Admit card has been released",
    linkText: "Click Here to Download",
    linkUrl: "https://admissions.iitmz.ac.in/bs",
  },
  {
    activeTill: "2026-06-06",
    content: "BS Examination is scheduled for 06 June 2026",
    linkText: "Know More",
    linkUrl: "https://www.iitmz.ac.in/admission",
  },
];
