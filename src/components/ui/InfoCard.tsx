import Link from "next/link";
import Card from "./Card";
import IconChip, { chipToneFor } from "./IconChip";
import Reveal from "./Reveal";
import { cx } from "@/lib/cx";
import styles from "./InfoCard.module.css";

export type InfoCardData = {
  icon: string;
  title: string;
  body?: string;
  /** Small label above the title, e.g. a product category. */
  kicker?: string;
  link?: { label: string; href: string };
};

export default function InfoCard({
  data,
  index = 0,
  tone = "light",
  compact = false,
}: {
  data: InfoCardData;
  index?: number;
  tone?: "light" | "navy";
  compact?: boolean;
}) {
  return (
    <Reveal index={index}>
      <Card tone={tone} className={cx(styles.card, compact && styles.compact)}>
        <IconChip
          tone={chipToneFor(index)}
          size={compact ? "sm" : "md"}
          className="chipScale"
        >
          {data.icon}
        </IconChip>
        {data.kicker ? <span className={styles.kicker}>{data.kicker}</span> : null}
        <h3>{data.title}</h3>
        {data.body ? <p className={styles.body}>{data.body}</p> : null}
        {data.link ? (
          <Link href={data.link.href} className={styles.link}>
            {data.link.label} <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </Card>
    </Reveal>
  );
}
