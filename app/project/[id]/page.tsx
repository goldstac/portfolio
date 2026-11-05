import { projectsConfig } from "@/config/projects";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectContent } from "./project-content";

export async function generateStaticParams() {
  return projectsConfig.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsConfig.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const url = `${siteConfig.meta.url}/project/${project.id}`;
  const ogImage = project.image
    ? project.image.startsWith("http")
      ? project.image
      : `${siteConfig.meta.url}${project.image}`
    : `${siteConfig.meta.url}${siteConfig.meta.ogImage.url}`;
  const imageWidth = project.image
    ? project.imageWidth ?? siteConfig.meta.ogImage.width
    : siteConfig.meta.ogImage.width;
  const imageHeight = project.image
    ? project.imageHeight ?? siteConfig.meta.ogImage.height
    : siteConfig.meta.ogImage.height;

  return {
    title: project.title,
    description: project.description,
    keywords: [
      ...siteConfig.meta.keywords,
      ...project.tags,
      "portfolio project",
      "developer project",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.description,
      siteName: siteConfig.meta.shortTitle,
      images: [
        {
          url: ogImage,
          width: imageWidth,
          height: imageHeight,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [ogImage],
      creator: siteConfig.meta.twitterCreator,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projectsConfig.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
