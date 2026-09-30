import { cx } from "@/lib/cx";
import Container from "./Container";
import styles from "./Section.module.css";

type SectionProps = {
  children: React.ReactNode;
  /** "tight" drops vertical padding 64px -> 48px. */
  spacing?: "standard" | "tight" | "none";
  /** Navy background treatment used by stats / process / CTA breaks. */
  tone?: "paper" | "navy";
  id?: string;
  className?: string;
  /** Skip the inner Container when a section needs to bleed full width. */
  bleed?: boolean;
};

export default function Section({
  children,
  spacing = "standard",
  tone = "paper",
  id,
  className,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx(
        styles.section,
        styles[spacing],
        tone === "navy" && styles.navy,
        className
      )}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
