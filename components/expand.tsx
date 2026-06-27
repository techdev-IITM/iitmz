"use client";

import { useState, ReactNode } from "react";
import { BsChevronDown } from "react-icons/bs";
import styles from "./expand.module.scss";

interface ExpandProps {
  children: ReactNode[] | string;
  previewChars?: number;
  previewItems?: number;
}

export default function Expand({
  children,
  previewChars = 300,
  previewItems = 1,
}: ExpandProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setIsExpanded(!isExpanded)}
      aria-expanded={isExpanded}
    >
      {isExpanded ? "Read less" : "Read more"}
      <BsChevronDown
        className={`${styles.toggleIcon} ${
          isExpanded ? styles.toggleIconOpen : ""
        }`}
        aria-hidden="true"
      />
    </button>
  );

  if (typeof children === "string") {
    const shouldTrim = children.length > previewChars;
    return (
      <div className={styles.expandContainer}>
        {shouldTrim ? (
          <>
            <p className={styles.textRegular}>
              {isExpanded ? children : children.slice(0, previewChars) + "..."}
            </p>
            {toggle}
          </>
        ) : (
          <p className={styles.textRegular}>{children}</p>
        )}
      </div>
    );
  }

  const shouldTrim = children.length > previewItems;

  return (
    <div className={styles.expandContainer}>
      {shouldTrim ? (
        <>
          {isExpanded ? children : children.slice(0, previewItems)}
          {toggle}
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
}
