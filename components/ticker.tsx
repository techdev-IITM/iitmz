"use client";
import styles from "./ticker.module.scss";
import Marquee from "react-fast-marquee";
import { BsArrowRight, BsMegaphone } from "react-icons/bs";
import stringReplacer from "./string-replacer";
import { Announcement, Announcements } from "@/data/announcements";

type TickerProps = {
  announcements: Announcements;
};

export default function Ticker({ announcements }: TickerProps) {
  if (announcements.length === 0) return null;
  const currentDate = new Date();
  const activeAnnouncements = announcements.filter(
    (announcement) => new Date(announcement.activeTill) >= currentDate,
  );

  if (activeAnnouncements.length === 0) return null;

  // No auto-scrolling marquee for visitors who prefer reduced motion.
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const renderAnnouncementContent = (announcement: Announcement) => {
    const content = typeof announcement.content === "string" ? stringReplacer(announcement.content) : "";

    return (
      <p key={announcement.content}>
        <span>{content}</span>
        {announcement.linkUrl && announcement.linkText && (
          <a
            className={styles.link}
            href={announcement.linkUrl}
            target="_blank"
            rel="noreferrer"
          >
            {announcement.linkText}
            <BsArrowRight className={styles.arrow} aria-hidden="true" />
          </a>
        )}
      </p>
    );
  };

  return (
    <div className={styles.section}>
      <div className={styles.head}>
        <BsMegaphone className={styles.headIcon} aria-hidden="true" />
        Announcements
      </div>
      <div className={styles.body}>
        <Marquee pauseOnHover speed={45} play={!prefersReducedMotion}>
          {activeAnnouncements.map(renderAnnouncementContent)}
        </Marquee>
      </div>
    </div>
  );
}
