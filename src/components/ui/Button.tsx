import Link from "next/link";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost" | "onNavy" | "onGradient";

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

type Props = BaseProps &
  (
    | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  );

export default function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: Props) {
  const classes = cx(styles.button, styles[variant], className);

  if (rest.href) {
    const { href, ...linkProps } = rest as { href: string };
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
