export interface Announcement {
  activeTill: string;
  content: string;
  linkText: string;
  linkUrl: string;
}

export type Announcements = Announcement[];

export const announcements: Announcements = [
  {
    activeTill: "2026-04-30",
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
    activeTill: "2026-04-30",
    content:
      "BS & M.Tech. Admissions for the academic year 2026–27 are open now",
    linkText: "Apply Now",
    linkUrl: "https://admissions.iitmz.ac.in/",
  },
  {
    activeTill: "2026-04-11",
    content:
      "Join Our Upcoming BS Admissions 2026 - 27 webinar on 15 April'26 at 5PM to 6:30 PM IST | 2:30 - 4:00 PM EAT",
    linkText: "Register Now",
    linkUrl: "https://forms.gle/n6UzMLg4o4p9mwmW7",
  },
];
