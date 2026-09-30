import styles from "./GradientText.module.css";

/** Teal -> Gold -> Leaf gradient clipped to the text, for H1 key phrases. */
export default function GradientText({ children }: { children: React.ReactNode }) {
  return <span className={styles.gradient}>{children}</span>;
}
