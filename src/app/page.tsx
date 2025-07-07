// import MatchTable from "./components/table";
import AggregateTable from "./components/aggregateTable";
import styles from "./page.module.css";
import Image from "next/image";
import { matchData } from "./mockJSON/matchData";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image
        alt="logo"
        src="/logo.png"
        height={800}
        width={1000}
        className={styles.image}
      />
      <div className={styles.pageContent}>
        <h1>Jim Bet</h1>
        <div className={styles.tableContainer}>
          <div className={styles.table}>
            <AggregateTable data={matchData} />
          </div>
        </div>
      </div>
    </div>
  );
}
