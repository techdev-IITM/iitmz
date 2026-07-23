"use client";

import { ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./month-filter.module.scss";

export type MonthOption = {
  key: string;
  content: ReactNode;
};

export default function MonthFilter({
  groups,
  defaultKey,
  listClassName,
}: {
  groups: MonthOption[];
  defaultKey: string;
  /** className applied to the wrapper around the active month's content
   *  (e.g. the page's own `.visitsList` styles for spacing/dividers) */
  listClassName?: string;
}) {
  const [selectedMonth, setSelectedMonth] = useState(defaultKey);

  const active = groups.find((g) => g.key === selectedMonth) ?? groups[0];

  return (
    <>
      <div className={styles.controlsRow}>
        <div className={styles.monthDropdown}>
          <select
            className={styles.monthSelect}
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            aria-label="Filter visits by month"
          >
            {groups.map((group) => (
              <option key={group.key} value={group.key}>
                {group.key}
              </option>
            ))}
          </select>
          <FaChevronDown className={styles.monthSelectIcon} size={14} />
        </div>
      </div>

      <div className={listClassName}>{active?.content}</div>
    </>
  );
}
