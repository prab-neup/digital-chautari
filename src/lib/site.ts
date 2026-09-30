import type { Metadata } from "next";

/**
 * Single source of truth for canonical URLs and organisation details.
 * The production domain is a placeholder until one is registered - override
 * it with NEXT_PUBLIC_SITE_URL at build time.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://digitalchautari.com";

export const siteName = "Digital Chautari";

export const siteDescription =
  "Digital Chautari is a creative technology company in Kathmandu, Nepal, offering digital marketing, content creation and health-tech software.";

export const organisation = {
  name: siteName,
  legalName: "Digital Chautari Pvt. Ltd.",
  email: "hello@digitalchautari.com",
  telephone: "+977-1-4000000",
  foundingDate: "2025",
  address: {
    locality: "Kathmandu",
    region: "Bagmati Province",
    country: "NP",
  },
  /** Sun-Fri, 10:00-18:00 - the business hours shown on the contact page. */
  openingHours: {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "18:00",
  },
  departments: [
    { name: "Marketing", email: "marketing@digitalchautari.com" },
    { name: "Content Studio", email: "studio@digitalchautari.com" },
    { name: "Software Development", email: "dev@digitalchautari.com" },
    { name: "Business Development", email: "partners@digitalchautari.com" },
  ],
  services: [
    "Digital Marketing",
    "Content Creation",
    "Software Development",
    "Branding & Design",
  ],
};

/** Every indexable route, used by both the sitemap and internal linking. */
export const routes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
] as const;

/**
 * Builds a page-level openGraph block.
 *
 * Metadata is shallowly merged across segments, so a page that declares its
 * own `openGraph` replaces the root layout's entirely - including the image
 * contributed by app/opengraph-image.tsx. This re-attaches it so every page
 * keeps a share card.
 */
export function pageOpenGraph({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata["openGraph"] {
  return {
    title,
    description,
    url: path,
    type: "website",
    siteName,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteName} — Creative Technology in Kathmandu`,
      },
    ],
  };
}
