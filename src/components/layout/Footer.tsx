import Link from "next/link";
import Container from "./Container";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Careers", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Digital Marketing", href: "/services" },
      { label: "Content Creation", href: "/services" },
      { label: "Software Development", href: "/services" },
      { label: "Branding and Design", href: "/services" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/contact" },
      { label: "Terms of Service", href: "/contact" },
      { label: "Cookie Policy", href: "/contact" },
      { label: "FAQ", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <span className={styles.mark}>DC</span>
              <span className={styles.wordmark}>Digital Chautari</span>
            </div>
            <p className={styles.blurb}>
              A creative technology company in Kathmandu building digital
              marketing, content and health-tech products that move real
              businesses forward.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className={styles.colHeading}>{col.heading}</h3>
              <ul className={styles.list}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.divider} />
        <p className={styles.copyright}>
          {"\u00A9"} {new Date().getFullYear()} Digital Chautari. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
