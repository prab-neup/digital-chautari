export type Product = {
  id: string;
  tab: string;
  icon: string;
  category: string;
  title: string;
  body: string;
  stats: { value: string; label: string }[];
  tags: string[];
  cta: string;
  /** Rows rendered inside the mock UI preview panel. */
  preview: {
    windowTitle: string;
    rows: { label: string; value: string }[];
  };
};

export const products: Product[] = [
  {
    id: "eco-creative",
    tab: "Eco Creative",
    icon: "🌱",
    category: "Marketing Agency",
    title: "Eco Creative Marketing Agency",
    body: "Our full-service agency arm. Eco Creative runs strategy, media buying and reporting for brands that want measurable growth without inflated retainers or vanity dashboards. Every account gets a named manager and a monthly review you can actually follow.",
    stats: [
      { value: "40+", label: "Active Clients" },
      { value: "1M+", label: "Monthly Reach" },
      { value: "4.2x", label: "Average ROAS" },
    ],
    tags: ["SEO", "Paid Media", "Social", "Analytics"],
    cta: "Work with Eco Creative",
    preview: {
      windowTitle: "Campaign Dashboard",
      rows: [
        { label: "Impressions", value: "1,284,920" },
        { label: "Click-through rate", value: "3.8%" },
        { label: "Cost per lead", value: "Rs 214" },
        { label: "Return on ad spend", value: "4.2x" },
      ],
    },
  },
  {
    id: "one-content",
    tab: "One Content",
    icon: "🎥",
    category: "Content Studio",
    title: "One Content Creation Studio",
    body: "A production studio built as a single pipeline: scripting, shooting, editing and distribution handled by one crew. Founders and creators get a month of publishable content from a single shoot day, cut for every channel they actually post on.",
    stats: [
      { value: "600+", label: "Videos Produced" },
      { value: "12", label: "Brand Partners" },
      { value: "72h", label: "Average Turnaround" },
    ],
    tags: ["Video", "Photography", "Copywriting", "Distribution"],
    cta: "Book a Shoot Day",
    preview: {
      windowTitle: "Production Pipeline",
      rows: [
        { label: "Scripts in review", value: "6" },
        { label: "Shoots this week", value: "3" },
        { label: "Edits in progress", value: "11" },
        { label: "Scheduled to publish", value: "24" },
      ],
    },
  },
  {
    id: "physio-at-home",
    tab: "Physio@Home",
    icon: "🩺",
    category: "Health-Tech",
    title: "Physio@Home",
    body: "On-demand physiotherapy booked to your door. Patients schedule a licensed practitioner in a few taps; clinics get a practitioner app, session notes and patient records designed around how Nepali practices already work, not how software wishes they did.",
    stats: [
      { value: "1,800+", label: "Sessions Booked" },
      { value: "35", label: "Practitioners" },
      { value: "4.9", label: "Patient Rating" },
    ],
    tags: ["Booking", "Practitioner App", "Patient Records", "Payments"],
    cta: "Explore Physio@Home",
    preview: {
      windowTitle: "Today's Schedule",
      rows: [
        { label: "09:30 - Lalitpur", value: "Post-op knee" },
        { label: "11:00 - Baneshwor", value: "Lower back" },
        { label: "14:15 - Chabahil", value: "Frozen shoulder" },
        { label: "16:00 - Patan", value: "Sports injury" },
      ],
    },
  },
];
