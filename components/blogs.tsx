"use client";

import type { BlogMeta } from "@/lib/blogs";
import { blogDate } from "@/lib/blog-date";
import { format } from "date-fns";
import { motion } from "motion/react";
import Link from "next/link";

const entryTransition = { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const };

export function Blogs({ posts }: { posts: BlogMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={entryTransition}
      className="no-js-visible px-6 border-t border-dashed pt-6"
    >
      <h2 className="section-heading mb-4">Blogs</h2>

      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-1 rounded-lg border border-dashed border-border/40 p-4 transition-all duration-300 hover:border-border/60 hover:bg-muted/20 card-glow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
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
              <p className="text-sm text-muted-foreground">{post.description}</p>
            )}
          </Link>
        ))}
      </div>

      <div className="mt-4">
        <Link
          href="/blog"
          className="text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          all posts →
        </Link>
      </div>
    </motion.section>
  );
}
