import { cx } from "@/lib/cx";
import styles from "./Eyebrow.module.css";

export default function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  /** "gold" is the dark-section variant called for by the spec. */
  tone?: "light" | "gold";
  className?: string;
}) {
  return (
    <span className={cx(styles.eyebrow, styles[tone], className)}>{children}</span>
  );
}
