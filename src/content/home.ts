import type { InfoCardData } from "@/components/ui/InfoCard";
import type { Stat } from "@/components/blocks/StatBar";

export const heroStats: Stat[] = [
  { icon: "📦", value: "3", label: "Products" },
  { icon: "👥", value: "6+", label: "Team Members" },
  { icon: "🎯", value: "100%", label: "Commitment" },
];

export const features: InfoCardData[] = [
  {
    icon: "📈",
    title: "Growth-Driven",
    body: "Every campaign, page and product decision is tied to a number we agreed on before we started.",
  },
  {
    icon: "🎨",
    title: "Creative-First",
    body: "Strategy is nothing without craft. Our work is made to be remembered, not just measured.",
  },
  {
    icon: "⚙️",
    title: "Tech-Powered",
    body: "Full-stack engineering in-house means ideas ship as working software, not slide decks.",
  },
  {
    icon: "🤝",
    title: "Client-Centric",
    body: "One dedicated point of contact, transparent pricing and updates you never have to chase.",
  },
];

export const whoWeAreChecklist = [
  "Creative Strategy",
  "Brand Storytelling",
  "Full-Stack Engineering",
  "Health-Tech Expertise",
];

export const serviceTeasers: InfoCardData[] = [
  {
    icon: "📣",
    title: "Digital Marketing",
    body: "SEO, paid media and social that compound month over month.",
  },
  {
    icon: "🎬",
    title: "Content Creation",
    body: "Video, photography and copy produced end to end in Kathmandu.",
  },
  {
    icon: "💻",
    title: "Software Development",
    body: "Web, mobile and health-tech platforms built to scale.",
  },
  {
    icon: "✨",
    title: "Branding & Design",
    body: "Identity systems that make small teams look established.",
  },
];

export const darkStats: Stat[] = [
  { icon: "🚀", value: "250+", label: "Projects Delivered" },
  { icon: "😊", value: "40+", label: "Happy Clients" },
  { icon: "👁️", value: "1M+", label: "Content Views" },
  { icon: "🔁", value: "98%", label: "Client Retention" },
];

export const products: InfoCardData[] = [
  {
    icon: "🌱",
    kicker: "Marketing",
    title: "Eco Creative Marketing Agency",
    body: "A full-service agency arm for brands that want growth without the greenwashing — strategy, media buying and reporting under one roof.",
    link: { label: "Learn more", href: "/products" },
  },
  {
    icon: "🎥",
    kicker: "Content",
    title: "One Content Creation Studio",
    body: "A production studio for founders and creators: scripting, shooting, editing and distribution handled as a single pipeline.",
    link: { label: "Learn more", href: "/products" },
  },
  {
    icon: "🩺",
    kicker: "Health-Tech",
    title: "Physio@Home",
    body: "On-demand physiotherapy booked to your door, with a practitioner app and patient records built for Nepal's clinics.",
    link: { label: "Learn more", href: "/products" },
  },
];

export const sectors: InfoCardData[] = [
  { icon: "🏥", title: "Healthcare", body: "Clinics, practitioners and health platforms." },
  { icon: "🛒", title: "E-Commerce", body: "Storefronts, catalogues and performance media." },
  { icon: "🏠", title: "Real Estate", body: "Listings, launches and buyer-side campaigns." },
  { icon: "🎓", title: "Education", body: "Institutions, courses and admissions funnels." },
  { icon: "🏔️", title: "Tourism & Hospitality", body: "Trekking, hotels and destination brands." },
  { icon: "📰", title: "Media & Publishing", body: "Newsrooms, creators and content networks." },
];

export const process = [
  {
    step: "01",
    icon: "🔍",
    title: "Discover",
    body: "We map your goals, audience and constraints before a single pixel or line of code is written.",
  },
  {
    step: "02",
    icon: "✏️",
    title: "Design",
    body: "Wireframes, identity and messaging come together into something you can review and react to.",
  },
  {
    step: "03",
    icon: "🛠️",
    title: "Develop",
    body: "Agile build cycles with working previews at the end of every sprint — no black boxes.",
  },
  {
    step: "04",
    icon: "🚀",
    title: "Deliver",
    body: "Launch, measure and iterate. Post-launch support is part of the engagement, not an upsell.",
  },
];

export const testimonials = [
  {
    quote:
      "Digital Chautari rebuilt our booking flow and our online appointments doubled in a quarter. They understood the clinic side, not just the code.",
    name: "Dr. Anisha Shrestha",
    title: "Clinic Director, Nirvana Physio",
  },
  {
    quote:
      "They ran our launch campaign end to end — content, media and landing pages. First time an agency in Kathmandu showed us numbers we could actually act on.",
    name: "Bibek Adhikari",
    title: "Founder, Himal Outdoors",
  },
  {
    quote:
      "The team is small, fast and honest about trade-offs. We got a production app in ten weeks for what a bigger shop quoted us for discovery alone.",
    name: "Sneha Karki",
    title: "Product Lead, EduNepal",
  },
];

export const posts = [
  {
    tone: "mint",
    category: "Marketing",
    date: "12 Sep 2026",
    readTime: "6 min read",
    title: "What actually moves the needle for Nepali SMEs online",
    excerpt:
      "We looked back at 40 campaigns to find the handful of levers that reliably produced growth — and the ones that never did.",
  },
  {
    tone: "gold",
    category: "Health-Tech",
    date: "28 Aug 2026",
    readTime: "8 min read",
    title: "Designing Physio@Home for clinics that still run on paper",
    excerpt:
      "Building health software in a low-digitisation market means designing for the transition, not the end state.",
  },
  {
    tone: "lilac",
    category: "Engineering",
    date: "14 Aug 2026",
    readTime: "5 min read",
    title: "Why we ship a working preview every single sprint",
    excerpt:
      "Long silent build phases are where client trust goes to die. Here is the cadence we use instead.",
  },
];
