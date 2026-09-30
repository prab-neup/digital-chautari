"use client";

import { useId, useState } from "react";
import Button from "@/components/ui/Button";
import IconChip, { chipToneFor } from "@/components/ui/IconChip";
import { cx } from "@/lib/cx";
import type { Product } from "@/content/products";
import styles from "./ProductTabs.module.css";

/**
 * Pill tab switcher. Implements the WAI-ARIA tabs pattern, including
 * arrow-key roving focus, since the tabs are the main way into the content.
 *
 * All panels are rendered into the HTML and inactive ones are hidden, rather
 * than rendering only the active panel. That keeps every product's copy in
 * the server-rendered markup where crawlers can read it, and means the
 * content is still present if JavaScript never runs.
 */
export default function ProductTabs({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const last = products.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next !== null) {
      event.preventDefault();
      setActive(next);
      document.getElementById(`${baseId}-tab-${next}`)?.focus();
    }
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Our products"
        className={styles.tablist}
        onKeyDown={onKeyDown}
      >
        {products.map((item, i) => (
          <button
            key={item.id}
            id={`${baseId}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`${baseId}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={cx(styles.tab, i === active && styles.tabActive)}
            onClick={() => setActive(i)}
          >
            <span aria-hidden="true">{item.icon}</span>
            {item.tab}
          </button>
        ))}
      </div>

      {products.map((product, index) => {
        const isActive = index === active;

        return (
          <div
            key={product.id}
            role="tabpanel"
            id={`${baseId}-panel-${index}`}
            aria-labelledby={`${baseId}-tab-${index}`}
            hidden={!isActive}
            className={cx(styles.panel, isActive && styles.panelActive)}
          >
            <div className={styles.copy}>
              <div className={styles.head}>
                <IconChip tone={chipToneFor(index)} size="lg">
                  {product.icon}
                </IconChip>
                <span className={styles.category}>{product.category}</span>
              </div>
              <h2>{product.title}</h2>
              <p className={styles.body}>{product.body}</p>

              <div className={styles.stats}>
                {product.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <ul className={styles.tags}>
                {product.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <Button href="/contact" tabIndex={isActive ? undefined : -1}>
                {product.cta} <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>

            {/* Mock UI preview panel */}
            <div className={styles.mock} aria-hidden="true">
              <div className={styles.mockBar}>
                <span className={styles.dot} data-dot="red" />
                <span className={styles.dot} data-dot="amber" />
                <span className={styles.dot} data-dot="green" />
                <span className={styles.mockTitle}>
                  {product.preview.windowTitle}
                </span>
              </div>
              <div className={styles.mockBody}>
                {product.preview.rows.map((row) => (
                  <div key={row.label} className={styles.mockRow}>
                    <span className={styles.mockLabel}>{row.label}</span>
                    <span className={styles.mockValue}>{row.value}</span>
                  </div>
                ))}
                <div className={styles.mockChart}>
                  {[38, 52, 44, 68, 60, 82, 74].map((height, i) => (
                    <span
                      key={i}
                      className={styles.bar}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
