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

const AggregateTable: React.FC<MatchTableProps> = ({ data }) => {
  //   const stake = 10;
  const [stake, setStake] = useState<number>(0);
  const aggregatedData = data.reduce<
    Record<
      string,
      {
        team: string;
        totalMatches: number;
        wins: number;
        losses: number;
        totalProfit: number;
        totalLoss: number;
        profitLoss: number;
      }
    >
  >((acc, match) => {
    const { team, result, odds } = match;

    if (!acc[team]) {
      acc[team] = {
        team,
        totalMatches: 0,
        wins: 0,
        losses: 0,
        totalProfit: 0,
        totalLoss: 0,
        profitLoss: 0,
      };
    }

    acc[team].totalMatches += 1;
    if (result === "WIN") {
      acc[team].wins += 1;
      acc[team].totalProfit += stake * odds - stake;
    }
    if (result === "LOSS") {
      acc[team].losses += 1;
      acc[team].totalLoss += stake;
    }

    acc[team].profitLoss = acc[team].totalProfit - acc[team].totalLoss;

    return acc;
  }, {});

  // Convert from object map to array if needed
  const aggregatedArray = Object.values(aggregatedData);

  return (
    <>
      <input type="number" onChange={(e) => setStake(Number(e.target.value))} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Team</th>
            <th className={styles.th}>Total Bets</th>
            <th className={styles.th}>Wins</th>
            <th className={styles.th}>Losses</th>
            <th className={styles.th}>Total Profit</th>
            <th className={styles.th}>Total Loss</th>
            <th className={styles.th}>P&L</th>
          </tr>
        </thead>
        <tbody>
          {aggregatedArray.map((match, idx) => (
            <tr key={idx} className={styles.row}>
              <td className={styles.td}>{match.team}</td>
              <td className={styles.td}>{match.totalMatches}</td>
              <td className={styles.td}>{match.wins}</td>
              <td className={styles.td}>{match.losses}</td>
              <td className={styles.td}>{match.totalProfit.toFixed(1)}</td>
              <td className={styles.td}>{match.totalLoss.toFixed(1)}</td>
              <td className={styles.td}>{match.profitLoss.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AggregateTable;
