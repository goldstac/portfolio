import type { Testimonial } from "@/config/types";

export const testimonialsConfig: Testimonial[] = [
  {
    id: "builder-1",
    name: "Alex Chen",
    role: "Builder",
    content:
      "Clean code, clear thinking. Li Productions ships products that actually work, not just demos.",
    avatar: "AC",
    image: "",
    order: 1,
    enabled: true,
  },
  {
    id: "builder-2",
    name: "Sarah Kim",
    role: "Product Designer",
    content:
      "The kind of developer who makes design easier. Technical decisions that make sense, every time.",
    avatar: "SK",
    image: "",
    order: 2,
    enabled: true,
  },
  {
    id: "builder-3",
    name: "Marcus Webb",
    role: "Indie Hacker",
    content:
      "Codes by hand, builds fast. Honest about the process, generous with the learnings.",
    avatar: "MW",
    image: "",
    order: 3,
    enabled: true,
  },
  {
    id: "builder-4",
    name: "Priya Patel",
    role: "DevRel Engineer",
    content:
      "Technical depth without the ego. Every project shows real thought about what matters.",
    avatar: "PP",
    image: "",
    order: 4,
    enabled: true,
  },
];
