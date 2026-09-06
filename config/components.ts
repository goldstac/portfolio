import type { ComponentDoc } from "./types";

export const componentsSectionConfig = {
  title: "Components",
  previewCount: 4,
  seeMoreLabel: "see all",
};

export const componentRegistry: ComponentDoc[] = [
  {
    id: "copy-command-block",
    title: "Copy Command Block",
    description:
      "Terminal command box with package manager tabs, copy feedback, and blueprint styling.",
    icon: "terminal",
    demoPath: "app/components/[id]/demos/copy-command-block-demo.tsx",
    docPath: "content/components/copy-command-block.md",
    order: 1,
    enabled: true,
  },
  {
    id: "github-map",
    title: "GitHub Heatmap",
    description:
      "Interactive 52-week contribution graph with date tooltips and theme-aware colors.",
    icon: "git",
    demoPath: "app/components/[id]/demos/github-map-demo.tsx",
    docPath: "content/components/github-map.md",
    order: 2,
    enabled: true,
  },
  {
    id: "project-explorer",
    title: "Project Explorer",
    description:
      "IDE-style project list with collapsible year folders, status badges, and hover previews.",
    icon: "folder",
    demoPath: "app/components/[id]/demos/project-explorer-demo.tsx",
    docPath: "content/components/project-explorer.md",
    order: 3,
    enabled: true,
  },
  {
    id: "section-rail",
    title: "Section Rail",
    description:
      "Responsive section navigation with scroll tracking and smooth anchor jumps.",
    icon: "rail",
    demoPath: "app/components/[id]/demos/section-rail-demo.tsx",
    docPath: "content/components/section-rail.md",
    order: 4,
    enabled: true,
  },
  {
    id: "mode-toggler",
    title: "Mode Toggler",
    description:
      "Minimal theme toggle with sound feedback and dynamic aria-label.",
    icon: "theme",
    demoPath: "app/components/[id]/demos/mode-toggler-demo.tsx",
    docPath: "content/components/mode-toggler.md",
    order: 5,
    enabled: true,
  },
  {
    id: "dotted-world-map",
    title: "Dotted World Map",
    description:
      "Lightweight SVG world map made of dots for analytics and hero sections.",
    icon: "globe",
    demoPath: "app/components/[id]/demos/dotted-world-map-demo.tsx",
    docPath: "content/components/dotted-world-map.md",
    order: 6,
    enabled: true,
  },
];

export function findComponent(id: string): ComponentDoc | undefined {
  return componentRegistry
    .filter((c) => c.enabled !== false)
    .find((c) => c.id === id);
}

export function getEnabledComponents(): ComponentDoc[] {
  return [...componentRegistry]
    .filter((c) => c.enabled !== false)
    .sort((a, b) => a.order - b.order);
}
