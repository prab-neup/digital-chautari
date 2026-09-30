import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { pageOpenGraph } from "@/lib/site";
import Section from "@/components/layout/Section";
import Hero from "@/components/blocks/Hero";
import ProductTabs from "@/components/blocks/ProductTabs";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import GradientText from "@/components/ui/GradientText";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/content/products";
import styles from "./products.module.css";

const description =
  "Eco Creative Marketing Agency, One Content Creation Studio and Physio@Home - three ventures from Digital Chautari.";

export const metadata: Metadata = {
  title: "Products",
  description,
  alternates: { canonical: "/products" },
  openGraph: pageOpenGraph({
    title: "Three ventures, one vision",
    description,
    path: "/products",
  }),
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Products", path: "/products" }])} />
      <Hero
        eyebrow="Our Ventures"
        title={
          <>
            Three ventures, <GradientText>one vision</GradientText>
          </>
        }
        lede="Each one began as a client problem we could not solve with a campaign alone, so we built the product instead."
      />

      {/* 2 - Tabbed product switcher */}
      <Section spacing="tight">
        <ProductTabs products={products} />
      </Section>

      {/* 3 - Dark spotlight banner */}
      <Section tone="navy">
        <Reveal className={styles.spotlight}>
          <Eyebrow tone="gold">Spotlight</Eyebrow>
          <h2 className={styles.spotlightTitle}>
            Physio@Home &mdash; healthcare reimagined
          </h2>
          <p className={styles.spotlightBody}>
            Physiotherapy in Nepal still runs on travel time and paper notes.
            Physio@Home removes the first and replaces the second, bringing
            licensed practitioners to the patient and giving clinics the records
            system they were never going to build themselves.
          </p>
          <div className={styles.spotlightActions}>
            <Button href="/contact">
              Request a Demo <span aria-hidden="true">&rarr;</span>
            </Button>
            <Button href="/about" variant="onNavy">
              Read Our Story
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
