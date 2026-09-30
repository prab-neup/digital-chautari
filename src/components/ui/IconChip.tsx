import { cx } from "@/lib/cx";
import styles from "./IconChip.module.css";

export const CHIP_TONES = ["mint", "teal", "gold", "lilac", "pink"] as const;
export type ChipTone = (typeof CHIP_TONES)[number];

/** Rotates the five pastel backgrounds across a repeating grid. */
export function chipToneFor(index: number): ChipTone {
  return CHIP_TONES[index % CHIP_TONES.length];
}

export default function IconChip({
  children,
  tone = "mint",
  size = "md",
  className,
}: {
  children: React.ReactNode;
  tone?: ChipTone;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cx(styles.chip, styles[tone], styles[size], className)}
    >
      {children}
    </span>
  );
}
