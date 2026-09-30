"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import Button from "@/components/ui/Button";
import { cx } from "@/lib/cx";
import styles from "./Header.module.css";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Digital Chautari home">
          <span className={styles.mark}>DC</span>
          <span className={styles.brandText}>
            <span className={styles.wordmark}>Digital Chautari</span>
            <span className={styles.tagline}>Ideas meet execution</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cx(styles.link, pathname === item.href && styles.active)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.cta}>
          <Button href="/contact">Contact Us</Button>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cx(styles.bar, open && styles.barTop)} />
          <span className={cx(styles.bar, open && styles.barMid)} />
          <span className={cx(styles.bar, open && styles.barBottom)} />
        </button>
      </Container>

      {open ? (
        <div className={styles.dropdown}>
          <Container>
            <nav className={styles.dropdownNav} aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    styles.dropdownLink,
                    pathname === item.href && styles.active
                  )}
                  onClick={close}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href="/contact"
                className={styles.dropdownCta}
                onClick={close}
              >
                Contact Us
              </Button>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
