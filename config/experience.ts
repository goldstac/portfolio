import type { ExperienceItem } from "@/config/types";

export const experienceSectionConfig = {
  title: "Experience",
};


export const experienceConfig: ExperienceItem[] = [
  {
    id: "indie-builder",
    role: "Independent Full-Stack Developer",
    company: "Self-employed",
    period: "2023 — Present",
    summary:
      "Building and shipping products end-to-end with rapid iteration and strong product feedback loops.",
    highlights: [
      "Designed auth and data architecture for SaaS products, CLI tools, and full-stack systems",
      "Shipped MVPs in weeks with production deployments",
    ],
    order: 1,
    enabled: true,
  },
];
