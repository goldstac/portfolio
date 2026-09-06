import type { SocialLink } from "@/config/types";

export const socialSectionConfig = {
  title: "Elsewhere",
};

export const socialsConfig: SocialLink[] = [
  {
    id: "github",
    platform: "GitHub",
    handle: "@goldstac",
    href: "https://github.com/goldstac",
    icon: "github",
    action: "external",
    order: 1,
    enabled: true,
  },
  {
    id: "x",
    platform: "X (Twitter)",
    handle: "@LiProductions_",
    href: "https://x.com/LiProductions_",
    icon: "x",
    action: "external",
    tooltipDefault: "Follow on X",
    order: 2,
    enabled: true,
  },
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@liproductions.dev",
    href: "https://instagram.com/liproductions.dev",
    icon: "instagram",
    action: "external",
    tooltipDefault: "Follow on Instagram",
    order: 3,
    enabled: true,
  },
];
