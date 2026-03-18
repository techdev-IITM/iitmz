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
      "BS & M.Tech. Admissions for the academic year 2026–27 are open now",
    linkText: "Apply Now",
    linkUrl: "https://admissions.iitmz.ac.in/",
  },
  {
    activeTill: "2026-03-25",
    content:
      "Join Our Upcoming Webinar on M.Tech. in DS & AI on 25 March'26 at 7PM to 8 PM IST | 4.30 PM - 5.30 PM EAT",
    linkText: "Register Now",
    linkUrl: "/",
  },
];
