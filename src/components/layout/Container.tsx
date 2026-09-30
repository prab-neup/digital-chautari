import { cx } from "@/lib/cx";
import styles from "./Container.module.css";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cx(styles.container, className)}>{children}</div>;
}
