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
    activeTill: "2026-04-04",
    content:
      "Join Our Upcoming BS Webinar on 04 April'26 at 5PM to 6:30 PM IST",
    linkText: "Register Now",
    linkUrl: "https://forms.gle/mEEYkAEr31XdeAFJ7",
  },
];
