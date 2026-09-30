import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { pageOpenGraph } from "@/lib/site";
import Section from "@/components/layout/Section";
import Hero from "@/components/blocks/Hero";
import CTAPanel from "@/components/blocks/CTAPanel";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import GradientText from "@/components/ui/GradientText";
import IconChip, { chipToneFor } from "@/components/ui/IconChip";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { cx } from "@/lib/cx";
import { categories, industries, tiers, whyWorkWithUs } from "@/content/services";
import styles from "./services.module.css";

const description =
  "Digital marketing, content creation and software development from one team in Kathmandu. Retainers from Rs 15,000 per month.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: pageOpenGraph({
    title: "Services that drive growth",
    description,
    path: "/services",
  }),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      <Hero
        eyebrow="What We Do"
        title={
          <>
            Services that <GradientText>drive growth</GradientText>
          </>
        }
        lede="Three practices, one team. Whether you need an audience, a story or a working product, the people building it sit in the same room."
        actions={
          <>
            <Button href="/contact">
              Book a Consultation <span aria-hidden="true">&rarr;</span>
            </Button>
            <Button href="/products" variant="ghost">
              See Our Products
            </Button>
          </>
        }
      />

      {/* 2 - Service categories */}
      <Section>
        {categories.map((category, i) => (
          <div key={category.title} className={styles.row}>
            <Reveal className={styles.rowIntro}>
              <IconChip tone={chipToneFor(i)} size="lg">
                {category.icon}
              </IconChip>
              <h2>{category.title}</h2>
              <p className={styles.rowBody}>{category.body}</p>
            </Reveal>

            <Grid cols={2}>
              {category.subServices.map((sub, j) => (
                <Reveal key={sub.title} index={j}>
                  <Card className={styles.subCard}>
                    <h3>{sub.title}</h3>
                    <p className={styles.subBody}>{sub.body}</p>
                  </Card>
                </Reveal>
              ))}
            </Grid>
          </div>
        ))}
      </Section>

      {/* 3 - Pricing */}
      <Section spacing="tight">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with you"
          lede="Retainers in Nepali rupees, billed monthly, cancellable with 30 days notice."
        />
        <Grid cols={3} className={styles.pricingGrid}>
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} index={i} className={styles.tierWrap}>
              <Card
                tone={tier.featured ? "navy" : "light"}
                className={cx(styles.tier, tier.featured && styles.tierFeatured)}
              >
                {tier.featured ? (
                  <span className={styles.badge}>Most Popular</span>
                ) : null}
                <h3 className={styles.tierName}>{tier.name}</h3>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{tier.price}</span>
                  {tier.period ? (
                    <span className={styles.period}>{tier.period}</span>
                  ) : null}
                </div>
                <p className={styles.tierBody}>{tier.body}</p>
                <ul className={styles.features}>
                  {tier.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <span className={styles.tick} aria-hidden="true">
                        &#10003;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={tier.featured ? "onGradient" : "ghost"}
                  className={styles.tierCta}
                >
                  {tier.cta}
                </Button>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 4 - Industries */}
      <Section spacing="tight">
        <SectionHeading
          eyebrow="Industries"
          title="Who we work with"
          lede="Sectors where we already know the buyer, the season and the regulation."
        />
        <Grid cols={3}>
          {industries.map((industry, i) => (
            <Reveal key={industry.title} index={i}>
              <Card className={styles.industryCard}>
                <IconChip tone={chipToneFor(i)} size="md" className="chipScale">
                  {industry.icon}
                </IconChip>
                <h3>{industry.title}</h3>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 5 - Dark why work with us */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Why Us"
          title="Why work with us"
          lede="The operating commitments behind every engagement, written down."
          tone="navy"
        />
        <Grid cols={3}>
          {whyWorkWithUs.map((item, i) => (
            <Reveal key={item.title} index={i}>
              <Card tone="navy" className={styles.whyCard}>
                <span className={styles.whyTick} aria-hidden="true">
                  &#10003;
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p className={styles.whyBody}>{item.body}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 6 - Closing CTA */}
      <CTAPanel
        title="Let's find the right service for you"
        lede="A 30-minute call is usually enough to tell whether we can help and what it would cost."
        actions={
          <Button href="/contact" variant="onGradient">
            Book a Consultation <span aria-hidden="true">&rarr;</span>
          </Button>
        }
      />
    </>
  );
}
