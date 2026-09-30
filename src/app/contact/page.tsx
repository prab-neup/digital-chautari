import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { pageOpenGraph } from "@/lib/site";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Hero from "@/components/blocks/Hero";
import ContactForm from "@/components/blocks/ContactForm";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import GradientText from "@/components/ui/GradientText";
import IconChip, { chipToneFor } from "@/components/ui/IconChip";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "./contact.module.css";

const description =
  "Get in touch with Digital Chautari in Kathmandu, Nepal - by email, phone or the enquiry form.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph({
    title: "Let's start a conversation",
    description,
    path: "/contact",
  }),
};

const INFO = [
  {
    icon: "📍",
    title: "Address",
    lines: ["Kathmandu, Nepal", "Bagmati Province"],
  },
  {
    icon: "✉️",
    title: "Email",
    lines: ["hello@digitalchautari.com"],
  },
  {
    icon: "📞",
    title: "Phone",
    lines: ["+977 1 4000 000", "+977 980 000 0000"],
  },
  {
    icon: "🕘",
    title: "Business Hours",
    lines: ["Sun to Fri, 10am - 6pm", "Saturday closed"],
  },
];

const DEPARTMENTS = [
  {
    icon: "📣",
    title: "Marketing",
    body: "Campaigns, media planning and performance accounts.",
    email: "marketing@digitalchautari.com",
  },
  {
    icon: "🎬",
    title: "Content Studio",
    body: "Shoot bookings, production schedules and edits.",
    email: "studio@digitalchautari.com",
  },
  {
    icon: "💻",
    title: "Software Dev",
    body: "Product scoping, technical questions and support.",
    email: "dev@digitalchautari.com",
  },
  {
    icon: "💼",
    title: "Business Dev",
    body: "Partnerships, vendor enquiries and press.",
    email: "partners@digitalchautari.com",
  },
];

const RESPONSE_TIMES = [
  { label: "Email enquiries", value: "Within 24 hours" },
  { label: "Proposals & quotes", value: "2 to 3 business days" },
  { label: "Urgent client issues", value: "Same day" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <Hero
        eyebrow="Get in Touch"
        title={
          <>
            Let&rsquo;s start a <GradientText>conversation</GradientText>
          </>
        }
        lede="Tell us what you are building. We will come back with an honest read on whether we are the right team, and what it would take."
      />

      {/* 2 - Contact info cards */}
      <Section spacing="tight">
        <Grid cols={4}>
          {INFO.map((item, i) => (
            <Reveal key={item.title} index={i}>
              <Card className={styles.infoCard}>
                <IconChip tone={chipToneFor(i)} size="md" className="chipScale">
                  {item.icon}
                </IconChip>
                <h3>{item.title}</h3>
                <div>
                  {item.lines.map((line) => (
                    <p key={line} className={styles.infoLine}>
                      {line}
                    </p>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 3 - Direct lines */}
      <Section spacing="tight">
        <SectionHeading
          eyebrow="Direct Lines"
          title="Reach the right team"
          lede="Skip the front desk and write to the people who will actually do the work."
        />
        <Grid cols={4}>
          {DEPARTMENTS.map((dept, i) => (
            <Reveal key={dept.title} index={i}>
              <Card className={styles.deptCard}>
                <IconChip tone={chipToneFor(i)} size="md" className="chipScale">
                  {dept.icon}
                </IconChip>
                <h3>{dept.title}</h3>
                <p className={styles.smallBody}>{dept.body}</p>
                <a href={`mailto:${dept.email}`} className={styles.deptEmail}>
                  {dept.email}
                </a>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* 4 - Form + supporting column */}
      <Section>
        <div className={styles.split}>
          <Reveal>
            <Card interactive={false} className={styles.formCard}>
              <h2 className={styles.formTitle}>Send us a message</h2>
              <p className={styles.smallBody}>
                Every enquiry is read by a person, usually within a day.
              </p>
              <ContactForm />
            </Card>
          </Reveal>

          <div className={styles.aside}>
            <Reveal index={1}>
              <Card interactive={false} className={styles.mapCard}>
                <div className={styles.map} aria-hidden="true">
                  <span className={styles.pin}>📍</span>
                </div>
                <div className={styles.mapMeta}>
                  <h3>Our office</h3>
                  <p className={styles.smallBody}>
                    Kathmandu, Bagmati Province, Nepal
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal index={2}>
              <div className={styles.faqCard}>
                <h3 className={styles.faqTitle}>Need quick answers?</h3>
                <p className={styles.faqBody}>
                  Pricing, timelines and how we scope projects are covered in
                  our frequently asked questions.
                </p>
                <Link href="/services" className={styles.faqLink}>
                  Visit FAQ page <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </Reveal>

            <Reveal index={3}>
              <Card interactive={false} className={styles.responseCard}>
                <h3>Response time</h3>
                <ul className={styles.responseList}>
                  {RESPONSE_TIMES.map((item) => (
                    <li key={item.label} className={styles.responseRow}>
                      <span className={styles.smallBody}>{item.label}</span>
                      <span className={styles.responseValue}>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
