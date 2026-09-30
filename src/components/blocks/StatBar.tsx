import IconChip, { chipToneFor } from "@/components/ui/IconChip";
import styles from "./StatBar.module.css";

export type Stat = {
  icon: string;
  value: string;
  label: string;
};

/** One bordered white card split into 3-4 equal segments by vertical dividers. */
export default function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <div className={styles.bar}>
      {stats.map((stat, i) => (
        <div key={stat.label} className={styles.segment}>
          <IconChip tone={chipToneFor(i)} size="md">
            {stat.icon}
          </IconChip>
          <div>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
