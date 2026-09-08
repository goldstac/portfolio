import { socialsConfig } from "@/config/socials";
import type { PortfolioConfig } from "@/config/types";
import BrandNextjs from "@/public/stacks/nextjs";
import { BookmarkCheckIcon } from "lucide-react";
export const siteConfig: PortfolioConfig = {
  meta: {
    url: "https://liproductions.dev",
    title: "Li Productions — Building Tools",
    titleTemplate: "%s | Li Productions",
    shortTitle: "Li Productions",
    description:
      "Li Productions codes in C, C++, and Python, plays around with AI, builds CLI tools, GUI apps, and full-stack systems. Dabbles in cybersecurity. Arch Linux user.",
    keywords: [
      "Builder",
      "CLI Tools",
      "GUI Apps",
      "Cybersecurity",
      "Next.js",
      "React",
      "TypeScript",
      "C",
      "C++",
      "Python",
      "Arch Linux",
      "Li Productions",
      "Li Productions",
    ],
    authors: [{ name: "Li Productions", url: "https://liproductions.dev" }],
    creator: "Li Productions",
    publisher: "Li Productions",
    classification: "Portfolio",
    category: "technology",
    locale: "en_US",
    ogImage: {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Li Productions — building tools and systems",
    },
    twitterCreator: "@LiProductions_",
    icon: "/favicon.svg",
    appleIcon: "/apple-touch-icon.png",
    googleVerification: "",
    manifest: {
      name: "Li Productions — Building Tools",
      short_name: "Li Productions",
      description: "Li Productions builds CLI tools, GUI apps, and full-stack systems.",
      start_url: "/",
      display: "standalone",
      background_color: "#fafafa",
      theme_color: "#18181b",
      icons: [
        {
          src: "/favicon.ico",
          sizes: "any",
          type: "image/x-icon",
        },
      ],
    },
    robots: {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: "https://liproductions.dev/sitemap.xml",
    },
    sitemap: [
      { url: "https://liproductions.dev", changeFrequency: "monthly", priority: 1 },
    ],
  },
  personal: {
    fullName: "Li Productions",
    firstName: "Li",
    avatar: {
      src: "/profile.avif",
      alt: "@LiProductions_",
      fallback: "LI",
    },
    location: {
      label: "",
      timezone: "",
    },
    githubUsername: "goldstac",
  },
  sectionOrder: [
    "skills",
    "about",
    "github",
    "testimonials",
    "socials",
  ],
  sectionFlags: {
    socials: true,
    skills: true,
    components: false,
    about: true,
    testimonials: true,
    projects: false,
    bookmarks: false,
    certifications: false,
    experience: false,
    services: false,
    workflow: false,
    github: true,
    contact: false,
  },
  banner: {
    imageSrc: "",
    imageAlt: "",
    openSourceUrl: "",
    openSourceTooltip: "",
    themeToggleLabel: "toggle theme",
    themeShortcut: "D",
    themeTooltip: "toggle theme",
    switchAudioSrc: "",
  },
  about: {
    title: "What I do",
    body: "I code in C, C++, and Python — CLI tools, GUI apps, full-stack systems, and web3 projects. I play around with AI a lot. I also dabble in cybersecurity. I use Arch Linux. I like making things that are useful, fast, and well put together. I share what I learn — the technical decisions, the mistakes, and the parts that only show up after shipping.",
  },
  services: {
    title: "What I build",
    items: [
      "Full-stack systems — SaaS products, CLI tools, GUI apps, web3 projects, and anything that needs clean architecture.",
      "Developer tools and internal workflows that prioritize clarity and speed.",
      "AI-enhanced products where the model enhances a structured system rather than replacing it.",
    ],
  },
  workflow: {
    title: "How I work",
    items: [
      {
        label: "Scope",
        description: "One core workflow, fixed deliverables, and clear boundaries.",
      },
      {
        label: "Ship",
        description: "Short cycles, working demos, honest blockers.",
      },
      {
        label: "Learn",
        description: "Real user feedback shapes the next iteration.",
      },
    ],
  },
  contact: {
    title: "Let's build something",
    description:
      "I'm always open to conversations about code, AI tools, cybersecurity, and building things that work.",
    pricing: [],
    channels: socialsConfig.filter((item) =>
      ["x", "instagram"].includes(item.id),
    ),
  },
  bookmarks: {
    title: "Learning",
    items: [
      {
        id: "1",
        url: "https://arxiv.org/abs/1706.03762",
        title: "Attention Is All You Need",
        domain: "arxiv.org",
        icon: BookmarkCheckIcon,
      },
    ],
  },
  certifications: {
    title: "Foundations",
    items: [
      {
        id: "certificate-1",
        url: "https://nextjs.org/learn",
        title: "Next.js",
        domain: "nextjs.org",
        date: "2025",
        icon: BrandNextjs,
      },
    ],
  },
  timeline: {
    title: "What I do",
    items: [
      {
        id: "tl-1",
        date: "2026",
        title: "Shipping everything",
        description: "CLI tools, SaaS products, full-stack systems, web3 projects — the year of building at full speed.",
        type: "milestone",
      },
      {
        id: "tl-2",
        date: "2025",
        title: "Started building for real",
        description: "Shipped first projects, learned by doing — auth, billing, data models, deployment.",
        type: "shipping",
      },
      {
        id: "tl-3",
        date: "2025",
        title: "Went deep on the stack",
        description: "C, C++, Python by hand. Full-stack systems, cybersecurity, web3.",
        type: "learning",
      },
      {
        id: "tl-4",
        date: "2024",
        title: "Got started",
        description: "First lines of code. Figured out what to build.",
        type: "milestone",
      },
    ],
  },
};
