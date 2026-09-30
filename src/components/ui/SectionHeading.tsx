import { cx } from "@/lib/cx";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  tone = "light",
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "navy";
}) {
  return (
    <Reveal className={cx(styles.wrap, styles[align], tone === "navy" && styles.navy)}>
      {eyebrow ? (
        <Eyebrow tone={tone === "navy" ? "gold" : "light"}>{eyebrow}</Eyebrow>
      ) : null}
      <h2 className={styles.title}>{title}</h2>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </Reveal>
  );
}
