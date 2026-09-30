import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { cx } from "@/lib/cx";
import styles from "./Hero.module.css";

export default function Hero({
  eyebrow,
  title,
  lede,
  actions,
  children,
  align = "center",
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
  actions?: React.ReactNode;
  /** Extra content below the actions, e.g. the stat bar on the home page. */
  children?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <Container>
        <div className={cx(styles.inner, styles[align])}>
          {eyebrow ? (
            <Reveal index={0}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          ) : null}
          <Reveal index={1}>
            <h1 className={styles.title}>{title}</h1>
          </Reveal>
          {lede ? (
            <Reveal index={2}>
              <p className={styles.lede}>{lede}</p>
            </Reveal>
          ) : null}
          {actions ? (
            <Reveal index={3} className={styles.actions}>
              {actions}
            </Reveal>
          ) : null}
        </div>
        {children ? (
          <Reveal index={4} className={styles.extra}>
            {children}
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
