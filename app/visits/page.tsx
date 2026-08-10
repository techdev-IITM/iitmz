import Img from "@/components/image";
import { FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import styles from "./page.module.scss";
import { visits, Visit } from "@/data/visits";
import MonthFilter, { MonthOption } from "@/components/month-filter";

function VisitCard({ visit }: { visit: Visit }) {
  const hasTopContent = Boolean(visit.date || visit.description);
  const hasAttendees = Boolean(visit.attendees && visit.attendees.length > 0);

  return (
    <div className={styles.visitCard}>
      <div className={styles.visitImageCol}>
        <Img
          src={visit.image}
          width={640}
          height={480}
          style={{ objectFit: "cover" }}
          alt={visit.title}
        />
      </div>

      <div className={styles.visitContentCol}>
        <h3 className={styles.visitTitle}>{visit.title}</h3>

        {visit.date && (
          <div className={styles.visitDateRow}>
            <div className={styles.visitDateIcon}>
              <FaRegCalendarAlt size={18} />
            </div>
            <div>
              <p className={styles.visitDateLabel}>DATE</p>
              <p className={styles.visitDateValue}>{visit.date}</p>
            </div>
          </div>
        )}

        {visit.description && (
          <p className={styles.visitDesc}>{visit.description}</p>
        )}

        {hasTopContent && hasAttendees && (
          <div className={styles.visitDivider} />
        )}

        {hasAttendees && (
          <>
            <div className={styles.visitAttendeesHead}>
              <FaUsers size={18} color="#913429" />
              <span>DELEGATES ({visit.attendees!.length})</span>
            </div>

            <div className={styles.visitAttendeesGrid}>
              {visit.attendees!.map((person) => (
                <div className={styles.attendeeChip} key={person.name}>
                  <span className={styles.attendeeAvatar}>
                    {person.initial}
                  </span>
                  {person.name}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Extracts a "Month Year" key from a date string like "April 15-16, 2026"
function getMonthKey(dateStr?: string): string {
  if (!dateStr) return "Other";
  const match = dateStr.match(/^([A-Za-z]+)\s.*?(\d{4})\s*$/);
  return match ? `${match[1]} ${match[2]}` : "Other";
}

type MonthGroup = {
  key: string;
  visits: Visit[];
};

// Groups visits by month while preserving the order they appear in
// (so if `visits` is newest-first, groups come out newest-month-first)
function groupByMonth(items: Visit[]): MonthGroup[] {
  const order: string[] = [];
  const map = new Map<string, Visit[]>();

  items.forEach((visit) => {
    const key = getMonthKey(visit.date);
    if (!map.has(key)) {
      map.set(key, []);
      order.push(key);
    }
    map.get(key)!.push(visit);
  });

  return order.map((key) => ({ key, visits: map.get(key)! }));
}

export default function VisitsPage() {
  const groups = groupByMonth(visits);
  const latestKey = groups[0]?.key ?? "";

  // VisitCard (and the Img it uses) is rendered here on the server.
  // We only ever pass the *rendered* JSX down to the client filter —
  // the client bundle never needs to import VisitCard/Img itself.
  const monthOptions: MonthOption[] = groups.map((group) => ({
    key: group.key,
    content: group.visits.map((visit) => (
      <VisitCard visit={visit} key={visit.slug} />
    )),
  }));

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Visits</h1>
        </div>

        <div className={styles.body}>
          <MonthFilter
            groups={monthOptions}
            defaultKey={latestKey}
            listClassName={styles.visitsList}
          />
        </div>
      </div>
    </div>
  );
}
