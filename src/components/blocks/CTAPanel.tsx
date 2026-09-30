import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import styles from "./CTAPanel.module.css";

/** Teal-to-blue gradient rounded panel used to close every page. */
export default function CTAPanel({
  title,
  lede,
  actions,
}: {
  title: React.ReactNode;
  lede?: React.ReactNode;
  actions: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal className={styles.panel}>
          <h2 className={styles.title}>{title}</h2>
          {lede ? <p className={styles.lede}>{lede}</p> : null}
          <div className={styles.actions}>{actions}</div>
        </Reveal>
      </Container>
    </section>
  );
}
