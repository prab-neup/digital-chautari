"use client";

import { usePathname } from "next/navigation";
import styles from "./PageTransition.module.css";

/**
 * Re-keying on pathname restarts the fade+slide animation on every route
 * change. The keyframes are disabled under prefers-reduced-motion.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main key={pathname} className={styles.main}>
      {children}
    </main>
  );
}
