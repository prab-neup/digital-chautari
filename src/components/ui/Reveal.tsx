"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/cx";
import styles from "./Reveal.module.css";

/**
 * Fades + slides its child upward once it scrolls into view.
 * `index` staggers siblings by 70ms each, per the motion spec.
 * Reduced motion is handled in the stylesheet, which pins the content
 * visible so the observer never has anything to animate.
 */
export default function Reveal({
  children,
  index = 0,
  as: Tag = "div",
  className,
}: {
  children: React.ReactNode;
  index?: number;
  as?: React.ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cx(styles.reveal, shown && styles.shown, className)}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {children}
    </Tag>
  );
}
