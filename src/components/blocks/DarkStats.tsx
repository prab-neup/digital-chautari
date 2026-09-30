import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";
import type { Stat } from "./StatBar";
import styles from "./DarkStats.module.css";

export default function DarkStats({ stats }: { stats: Stat[] }) {
  return (
    <Section tone="navy" spacing="tight">
      <div className={styles.grid}>
        {stats.map((stat, i) => (
          <Reveal key={stat.label} index={i} className={styles.item}>
            <span className={styles.icon} aria-hidden="true">
              {stat.icon}
            </span>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
