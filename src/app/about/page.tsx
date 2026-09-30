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
import {
  commitments,
  missionVision,
  roadmap,
  storyTiles,
  team,
  values,
} from "@/content/about";
import styles from "./about.module.css";

const description =
  "The team, story and values behind Digital Chautari in Kathmandu, Nepal.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: pageOpenGraph({
    title: "The people behind Digital Chautari",
    description,
    path: "/about",
  }),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <Hero
        eyebrow="Who We Are"
        title={
          <>
            The people behind <GradientText>Digital Chautari</GradientText>
          </>
        }
        lede="A small team in Kathmandu that would rather build the thing than write a deck about building the thing."
      />

      {/* 2 - Story block */}
      <Section>
        <div className={styles.split}>
          <Reveal className={styles.storyText}>
            <h2>
              From a chautari to a <GradientText>digital powerhouse</GradientText>
            </h2>
            <p className={styles.body}>
              Digital Chautari started in 2025 with three people, one laptop
              each and a shared frustration: Nepali businesses were paying
              agency prices for work that stopped at the slide deck. Campaigns
              got planned. Products never got built.
            </p>
            <p className={styles.body}>
              So we put the marketers and the engineers on the same team. The
              first year paid for itself on client work, the second gave us
              three products of our own, and somewhere in there we stopped
              being a side project and became a company.
            </p>
            <p className={styles.body}>
              The name stuck because it is honest about what we do. A chautari
              is where people stop, compare notes and decide which way to go.
              That is the whole job.
            </p>
          </Reveal>

          <div className={styles.tiles}>
            {storyTiles.map((tile, i) => (
              <Reveal key={tile.label} index={i}>
                <div className={cx(styles.tile, styles[tile.tone])}>
                  <div className={styles.tileValue}>{tile.value}</div>
                  <div className={styles.tileLabel}>{tile.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 3 - Mission & vision */}
      <Section spacing="tight">
        <Grid cols={2}>
          {missionVision.map((item, i) => (
            <Reveal key={item.title} index={i}>
              <Card className={styles.mvCard}>
                <IconChip tone={chipToneFor(i)} size="lg" className="chipScale">
                  {item.icon}
                </IconChip>
                <h3 className={styles.mvTitle}>{item.title}</h3>
                <p className={styles.body}>{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 4 - Values */}
      <Section spacing="tight">
        <SectionHeading
          eyebrow="Values"
          title="What we hold to"
          lede="Four things we check our own work against."
        />
        <Grid cols={4}>
          {values.map((item, i) => (
            <Reveal key={item.title} index={i}>
              <Card className={styles.valueCard}>
                <IconChip tone={chipToneFor(i)} size="md" className="chipScale">
                  {item.icon}
                </IconChip>
                <h3>{item.title}</h3>
                <p className={styles.smallBody}>{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 5 - Dark commitments */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Trust"
          title="Committed to quality & trust"
          lede="The operational guarantees that come with working with us."
          tone="navy"
        />
        <Grid cols={4}>
          {commitments.map((item, i) => (
            <Reveal key={item.title} index={i}>
              <Card tone="navy" className={styles.valueCard}>
                <IconChip tone={chipToneFor(i)} size="md" className="chipScale">
                  {item.icon}
                </IconChip>
                <h3>{item.title}</h3>
                <p className={styles.bodyOnNavy}>{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 6 - Team roles */}
      <Section>
        <SectionHeading
          eyebrow="The Team"
          title="Seven people, three ventures"
          lede="Small enough that you will know everyone working on your account."
        />
        <Grid cols={3}>
          {team.map((member, i) => (
            <Reveal key={member.role} index={i}>
              <Card className={styles.teamCard}>
                <IconChip tone={chipToneFor(i)} size="lg" className="chipScale">
                  {member.icon}
                </IconChip>
                <div>
                  <h3>{member.role}</h3>
                  <p className={styles.smallBody}>{member.body}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 7 - Dark roadmap */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Roadmap"
          title="How we got here"
          lede="Two years, four turning points."
          tone="navy"
        />
        <ol className={styles.timeline}>
          {roadmap.map((item, i) => (
            <Reveal
              key={item.title}
              index={i}
              as="li"
              className={cx(styles.milestone, i % 2 === 1 && styles.right)}
            >
              <span className={styles.dot} aria-hidden="true" />
              <div className={styles.milestoneCard}>
                <span className={styles.yearPill}>{item.year}</span>
                <h3>{item.title}</h3>
                <p className={styles.bodyOnNavy}>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* 8 - Closing CTA */}
      <CTAPanel
        title="Want to join our journey?"
        lede="Whether you are hiring us or looking to be hired, the conversation starts the same way."
        actions={
          <Button href="/contact" variant="onGradient">
            Get in Touch <span aria-hidden="true">&rarr;</span>
          </Button>
        }
      />
    </>
  );
}
