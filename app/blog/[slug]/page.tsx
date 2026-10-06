import { Footer } from "@/components/footer";
import { markdownComponents } from "@/components/markdown-components";
import { siteConfig } from "@/config/site";
import { blogDate, getBlogPost, getBlogPosts } from "@/lib/blogs";
import { format } from "date-fns";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts({ includeDrafts: true });
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Post not found" };

  const url = `${siteConfig.meta.url}/blog/${post.slug}`;
  const ogImage = `${siteConfig.meta.url}${siteConfig.meta.ogImage.url}`;

  return {
    title: post.title,
    description: post.description,
    keywords: [...siteConfig.meta.keywords, ...post.tags],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      siteName: siteConfig.meta.shortTitle,
      publishedTime: blogDate(post.date).toISOString(),
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
      creator: siteConfig.meta.twitterCreator,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <main
      id="main-content"
      className="relative min-h-dvh flex flex-col max-w-3xl mx-auto border-x border-b-2 overflow-x-clip"
    >
      <div className="px-6 pt-16 pb-4">
        <Link
          href="/blog"
          className="text-xs text-muted-foreground font-mono hover:text-foreground transition-colors"
        >
          ← all posts
        </Link>
      </div>

      <article className="px-6 flex-1 pb-10">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted-foreground">
          <time dateTime={post.date}>
            {format(blogDate(post.date), "MMM d, yyyy")}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime} min read</span>
          {post.tags.length > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-muted-foreground/60">
                {post.tags.join(", ")}
              </span>
            </>
          )}
        </div>

        <div className="mt-8 prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      <Footer />
    </main>
  );
}
