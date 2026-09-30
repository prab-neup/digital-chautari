import { organisation, siteDescription, siteName, siteUrl } from "./site";

/**
 * JSON-LD graph describing the company. LocalBusiness (rather than plain
 * Organization) is used because the business is tied to a physical city and
 * has opening hours, which is what earns the richer search treatment.
 */
export function organisationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${siteUrl}#organization`,
        name: organisation.name,
        legalName: organisation.legalName,
        url: siteUrl,
        description: siteDescription,
        foundingDate: organisation.foundingDate,
        email: organisation.email,
        telephone: organisation.telephone,
        address: {
          "@type": "PostalAddress",
          addressLocality: organisation.address.locality,
          addressRegion: organisation.address.region,
          addressCountry: organisation.address.country,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: organisation.openingHours.days,
            opens: organisation.openingHours.opens,
            closes: organisation.openingHours.closes,
          },
        ],
        contactPoint: organisation.departments.map((dept) => ({
          "@type": "ContactPoint",
          contactType: dept.name,
          email: dept.email,
          areaServed: "NP",
          availableLanguage: ["en", "ne"],
        })),
        makesOffer: organisation.services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: { "@id": `${siteUrl}#organization` },
        inLanguage: "en",
      },
    ],
  };
}

/** Breadcrumb trail for a single page, relative to the home page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${item.path}`,
      })
    ),
  };
}
