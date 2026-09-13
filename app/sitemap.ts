import { projectsConfig } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries: MetadataRoute.Sitemap = [
    ...siteConfig.meta.sitemap.map((item) => ({
      ...item,
      lastModified: new Date(),
    })),
    {
      url: "https://liproductions.dev/whoami",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://liproductions.dev/work",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const projectEntries: MetadataRoute.Sitemap = projectsConfig
    .filter((p) => p.enabled !== false)
    .map((p) => ({
      url: `${siteConfig.meta.url}/project/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...baseEntries, ...projectEntries];
}
