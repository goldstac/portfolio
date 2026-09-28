import { projectsConfig } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { blogDate, getBlogPosts } from "@/lib/blogs";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseEntries: MetadataRoute.Sitemap = [
    ...siteConfig.meta.sitemap.map((item) => ({
      ...item,
      lastModified: new Date(),
    })),
    {
      url: "https://liproductions.vercel.app/whoami",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://liproductions.vercel.app/work",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.meta.url}/blog`,
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

  const blogEntries: MetadataRoute.Sitemap = (await getBlogPosts()).map(
    (post) => ({
      url: `${siteConfig.meta.url}/blog/${post.slug}`,
      lastModified: blogDate(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }),
  );

  return [...baseEntries, ...projectEntries, ...blogEntries];
}
