import Section from "@/components/layout/Section";
import Hero from "@/components/blocks/Hero";
import StatBar from "@/components/blocks/StatBar";
import DarkStats from "@/components/blocks/DarkStats";
import CTAPanel from "@/components/blocks/CTAPanel";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import GradientText from "@/components/ui/GradientText";
import IconChip, { chipToneFor } from "@/components/ui/IconChip";
import InfoCard from "@/components/ui/InfoCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  darkStats,
  features,
  heroStats,
  posts,
  process,
  products,
  sectors,
  serviceTeasers,
  testimonials,
  whoWeAreChecklist,
} from "@/content/home";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="&#128640; Welcome to Digital Chautari"
        title={
          <>
            We build <GradientText>digital bridges</GradientText> between ideas
            and impact
          </>
        }
        lede="Digital Chautari is a creative technology company in Kathmandu bringing marketing, content and engineering under one roof, so the idea you start with is the product your customers actually meet."
        actions={
          <>
            <Button href="/services">
              Explore Services <span aria-hidden="true">&rarr;</span>
            </Button>
            <Button href="/products" variant="ghost">
              View Products
            </Button>
          </>
        }
      >
        <StatBar stats={heroStats} />
      </Hero>

      {/* 2 - Feature strip */}
      <Section spacing="tight">
        <Grid cols={4}>
          {features.map((item, i) => (
            <InfoCard key={item.title} data={item} index={i} />
          ))}
        </Grid>
      </Section>

      {/* 3 - Who we are */}
      <Section>
        <div className={styles.split}>
          <Reveal className={styles.splitText}>
            <h2>
              A <GradientText>Chautari</GradientText> where ideas meet execution
            </h2>
            <p className={styles.body}>
              A chautari is the shaded resting place at the centre of every
              Nepali village, where travellers stop, trade news and decide where
              to go next. We took the name because that is what good agencies
              actually are: a place ideas pass through and leave sharper than
              they arrived.
            </p>
            <p className={styles.body}>
              We are marketers, producers and engineers who got tired of handing
              work across agency walls. Strategy, craft and code sit at the same
              table here, which is why our campaigns ship as products and our
              products arrive with an audience already waiting.
            </p>
            <ul className={styles.checklist}>
              {whoWeAreChecklist.map((item) => (
                <li key={item} className={styles.check}>
                  <span className={styles.tick} aria-hidden="true">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/about" variant="ghost">
              Meet the Team <span aria-hidden="true">&rarr;</span>
            </Button>
          </Reveal>

          <Grid cols={2} className={styles.splitCards}>
            {serviceTeasers.map((item, i) => (
              <InfoCard key={item.title} data={item} index={i} compact />
            ))}
          </Grid>
        </div>
      </Section>

      {/* 4 - Dark stats banner */}
      <DarkStats stats={darkStats} />

      {/* 5 - Products teaser */}
      <Section>
        <SectionHeading
          eyebrow="Our Ventures"
          title={
            <>
              Three ventures, <GradientText>one vision</GradientText>
            </>
          }
          lede="Each product started as a client problem we could not solve with a campaign alone."
        />
        <Grid cols={3}>
          {products.map((item, i) => (
            <InfoCard key={item.title} data={item} index={i} />
          ))}
        </Grid>
      </Section>

      {/* 6 - Sectors */}
      <Section spacing="tight">
        <SectionHeading
          eyebrow="Industries"
          title="Sectors we serve"
          lede="Six industries where we have shipped enough work to know what actually converts."
        />
        <Grid cols={3}>
          {sectors.map((item, i) => (
            <InfoCard key={item.title} data={item} index={i} compact />
          ))}
        </Grid>
      </Section>

      {/* 7 - Dark process */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="How We Work"
          title="Our 4-step process"
          lede="The same rhythm on a two-week campaign and a six-month platform build."
          tone="navy"
        />
        <Grid cols={4}>
          {process.map((item, i) => (
            <Reveal key={item.title} index={i}>
              <Card tone="navy" className={styles.processCard}>
                <div className={styles.processTop}>
                  <IconChip tone={chipToneFor(i)} size="md" className="chipScale">
                    {item.icon}
                  </IconChip>
                  <span className={styles.step}>{item.step}</span>
                </div>
                <h3>{item.title}</h3>
                <p className={styles.bodyOnNavy}>{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 8 - Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          lede="A few words from teams we have worked alongside."
        />
        <Grid cols={3}>
          {testimonials.map((item, i) => (
            <Reveal key={item.name} index={i}>
              <Card className={styles.quoteCard}>
                <div className={styles.stars} aria-label="Rated 5 out of 5">
                  <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                </div>
                <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                <div className={styles.author}>
                  <div className={styles.authorName}>{item.name}</div>
                  <div className={styles.authorTitle}>{item.title}</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 9 - Blog teaser */}
      <Section spacing="tight">
        <SectionHeading
          eyebrow="Journal"
          title="Latest from our blog"
          lede="Notes on marketing, health-tech and building software in Nepal."
        />
        <Grid cols={3}>
          {posts.map((post, i) => (
            <Reveal key={post.title} index={i}>
              <Card className={styles.postCard}>
                <div
                  className={styles.thumb}
                  data-tone={post.tone}
                  aria-hidden="true"
                />
                <div className={styles.postBody}>
                  <span className={styles.tag}>{post.category}</span>
                  <div className={styles.postMeta}>
                    {post.date} &middot; {post.readTime}
                  </div>
                  <h3>{post.title}</h3>
                  <p className={styles.body}>{post.excerpt}</p>
                  <span className={styles.readMore}>
                    Read more <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 10 - Closing CTA */}
      <CTAPanel
        title="Ready to build something extraordinary together?"
        lede="Tell us what you are working on. We will tell you honestly whether we are the right team for it."
        actions={
          <>
            <Button href="/contact" variant="onGradient">
              Start a Project <span aria-hidden="true">&rarr;</span>
            </Button>
            <Button href="/services" variant="onNavy">
              View Services
            </Button>
          </>
        }
      />
    </>
  );
}
