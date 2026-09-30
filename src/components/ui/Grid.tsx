import { cx } from "@/lib/cx";
import styles from "./Grid.module.css";

/** Equal-column card grid with the standard 20px gap. Collapses at 760px. */
export default function Grid({
  children,
  cols = 3,
  className,
}: {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <div className={cx(styles.grid, styles[`c${cols}`], className)}>{children}</div>
  );
}
