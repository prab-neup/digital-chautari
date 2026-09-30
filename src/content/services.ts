import type { InfoCardData } from "@/components/ui/InfoCard";

export type ServiceCategory = {
  icon: string;
  title: string;
  body: string;
  subServices: { title: string; body: string }[];
};

export const categories: ServiceCategory[] = [
  {
    icon: "📣",
    title: "Digital Marketing",
    body: "Acquisition that compounds. We build the measurement first, then spend against it — so every rupee has a job and a number attached to it.",
    subServices: [
      {
        title: "SEO & SEM",
        body: "Technical fixes, content architecture and search campaigns that hold position.",
      },
      {
        title: "Social Media Marketing",
        body: "Channel strategy, calendars and community management in Nepali and English.",
      },
      {
        title: "Paid Advertising",
        body: "Meta, Google and TikTok buying with creative testing built into the cycle.",
      },
      {
        title: "Analytics & Reporting",
        body: "Dashboards you can read in a minute, reviewed with you every month.",
      },
    ],
  },
  {
    icon: "🎬",
    title: "Content Creation",
    body: "A full production line in Kathmandu. Scripting, shooting, editing and distribution handled by one team, so nothing gets lost in the hand-off.",
    subServices: [
      {
        title: "Video Production",
        body: "Brand films, product explainers and short-form built for the feed.",
      },
      {
        title: "Photography",
        body: "Product, lifestyle and location shoots with same-week turnaround.",
      },
      {
        title: "Copywriting",
        body: "Landing pages, ad copy and long-form that sounds like a person wrote it.",
      },
      {
        title: "Content Strategy",
        body: "Pillars, calendars and repurposing systems that survive a busy quarter.",
      },
    ],
  },
  {
    icon: "💻",
    title: "Software Development",
    body: "Full-stack engineering for teams that need working software, not a prototype. We ship a reviewable build at the end of every sprint.",
    subServices: [
      {
        title: "Web Applications",
        body: "Next.js and Node platforms built to scale past the first thousand users.",
      },
      {
        title: "Mobile Apps",
        body: "Cross-platform apps for Android-first markets, released to both stores.",
      },
      {
        title: "Health-Tech Systems",
        body: "Booking, records and practitioner tooling designed around real clinic workflow.",
      },
      {
        title: "API & Integrations",
        body: "Payments, messaging and third-party systems wired together and monitored.",
      },
    ],
  },
];

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  body: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Rs 15,000",
    period: "/mo",
    body: "For small businesses establishing a credible presence online.",
    features: [
      "Social media management, 2 channels",
      "8 content pieces per month",
      "Basic SEO setup and monitoring",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "Rs 45,000",
    period: "/mo",
    body: "For growing teams running paid acquisition alongside content.",
    features: [
      "Social media management, 4 channels",
      "20 content pieces per month",
      "Paid ad management up to Rs 200k spend",
      "Landing page design and testing",
      "Dedicated project manager",
      "Bi-weekly strategy calls",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    body: "For organisations needing software, content and media as one programme.",
    features: [
      "Everything in Professional",
      "Custom software development",
      "Dedicated cross-functional team",
      "Priority support and SLAs",
      "Quarterly business reviews",
      "On-site workshops in Kathmandu",
    ],
    cta: "Talk to Sales",
  },
];

export const industries: InfoCardData[] = [
  { icon: "🏥", title: "Healthcare" },
  { icon: "🛒", title: "E-Commerce" },
  { icon: "🏠", title: "Real Estate" },
  { icon: "🎓", title: "Education" },
  { icon: "🏔️", title: "Tourism" },
  { icon: "📰", title: "Media" },
];

export const whyWorkWithUs = [
  {
    title: "Dedicated project manager",
    body: "One name, one number. You never explain your project twice.",
  },
  {
    title: "Agile development cycle",
    body: "Two-week sprints with a working preview at the end of each one.",
  },
  {
    title: "Transparent pricing",
    body: "Fixed scope, fixed price. Change requests are quoted before work starts.",
  },
  {
    title: "Post-launch support",
    body: "Thirty days of fixes included, with maintenance retainers if you want them.",
  },
  {
    title: "Scalable architecture",
    body: "Built so your second year of growth does not require a rewrite.",
  },
  {
    title: "Cross-platform expertise",
    body: "Web, mobile and backend handled by the same team, not three vendors.",
  },
];
