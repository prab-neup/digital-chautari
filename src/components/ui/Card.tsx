import { cx } from "@/lib/cx";
import styles from "./Card.module.css";

/**
 * White card, 1px border, 12px radius, 22px padding.
 * `tone="navy"` swaps in the navy-card treatment for dark sections.
 * `interactive` adds the -5px hover lift and scales any nested icon chip.
 */
export default function Card({
  children,
  tone = "light",
  interactive = true,
  className,
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  tone?: "light" | "navy";
  interactive?: boolean;
  className?: string;
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag
      className={cx(
        styles.card,
        styles[tone],
        interactive && styles.interactive,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
