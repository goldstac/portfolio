import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";
import { blogDate, getBlogPosts } from "@/lib/blogs";
import { format } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from Li Productions — building tools, Linux, and agentic engineering.",
  alternates: {
    canonical: `${siteConfig.meta.url}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main
      id="main-content"
      className="relative min-h-dvh flex flex-col max-w-3xl mx-auto border-x border-b-2 overflow-x-clip"
    >
      <div className="px-6 pt-16 pb-4">
        <Link
          href="/"
          className="text-xs text-muted-foreground font-mono hover:text-foreground transition-colors"
        >
          ← back
        </Link>
      </div>

      <div className="px-6 flex-1 space-y-6 pb-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Blogs
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            notes on building tools, linux, and agentic engineering.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="font-mono text-sm text-muted-foreground">
            nothing published yet.
          </p>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 rounded-lg border border-dashed border-border/40 p-4 transition-all duration-300 hover:border-border/60 hover:bg-muted/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted-foreground">
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
                <span className="text-sm font-medium transition-transform duration-200 group-hover:translate-x-1">
                  {post.title}
                </span>
                {post.description && (
                  <p className="text-sm text-muted-foreground">
                    {post.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
