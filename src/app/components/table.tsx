"use client";

import React, { useState } from "react";
import styles from "./table.module.css";

interface MatchResult {
  team: string;
  result: "WIN" | "LOSS";
  odds: number;
}

interface MatchTableProps {
  data: MatchResult[];
}

const MatchTable: React.FC<MatchTableProps> = ({ data }) => {
  const [sortKey, setSortKey] = useState<keyof MatchResult | null>(null); // Defaults to null so table is unsorted
  const [ascending, setAscending] = useState(true);

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) {
      return 0;
    }
    const valA = a[sortKey];
    const valB = b[sortKey];

    if (typeof valA === "string" && typeof valB === "string") {
      return ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }

    if (typeof valA === "number" && typeof valB === "number") {
      return ascending ? valA - valB : valB - valA;
    }

    return 0;
  });

  const handleSort = (key: keyof MatchResult) => {
    if (key === sortKey) {
      setAscending(!ascending); // Toggle sort order
    } else {
      setSortKey(key);
      setAscending(true); // Set to ascending by default when a new key is selected
    }
  };

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th} onClick={() => handleSort("team")}>
              Team
            </th>
            <th className={styles.th} onClick={() => handleSort("result")}>
              Result
            </th>
            <th className={styles.th} onClick={() => handleSort("odds")}>
              Odds
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((match, idx) => (
            <tr key={idx} className={styles.row}>
              <td className={styles.td}>{match.team}</td>
              <td
                className={`${styles.td} ${
                  match.result === "WIN" ? styles.win : styles.loss
                }`}
              >
                {match.result}
              </td>
              <td className={styles.td}>{match.odds.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MatchTable;
