import { readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";

export interface BlogPost {
  /** Filename without `.md` — becomes the `/blog/<slug>` URL. */
  slug: string;
  title: string;
  /** ISO `yyyy-mm-dd`, always safe to sort and compare. */
  date: string;
  description: string;
  tags: string[];
  /** Drafts stay off lists and the sitemap but still build for previewing. */
  draft: boolean;
  readingTime: number;
  content: string;
}

export type BlogMeta = Omit<BlogPost, "content">;

const BLOGS_DIR = join(process.cwd(), "content", "blogs");
const WORDS_PER_MINUTE = 200;

function humanize(slug: string): string {
  return slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\*\*([^*]*)\*\*/g, "$1")
    .replace(/\*([^*]*)\*/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function deriveDescription(body: string): string {
  for (const block of body.split(/\n\s*\n/)) {
    const trimmed = block.trim();
    if (
      !trimmed ||
      trimmed.startsWith("#") ||
      trimmed.startsWith("```") ||
      trimmed.startsWith("---") ||
      trimmed.startsWith("![")
    ) {
      continue;
    }
    const text = stripInlineMarkdown(trimmed.replace(/^\s*>\s?/, ""));
    if (!text) continue;
    return text.length > 160 ? `${text.slice(0, 157).trimEnd()}…` : text;
  }
  return "";
}

async function resolveDate(value: unknown, filePath: string): Promise<string> {
  if (typeof value === "string" || value instanceof Date) {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString().slice(0, 10);
    }
  }
  const info = await stat(filePath);
  return info.mtime.toISOString().slice(0, 10);
}

async function parsePost(fileName: string): Promise<BlogPost> {
  const filePath = join(BLOGS_DIR, fileName);
  const raw = await readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = fileName.replace(/\.md$/, "");
  const body = content.trim();
  const words = body ? body.split(/\s+/).filter(Boolean).length : 0;

  return {
    slug,
    title:
      typeof data.title === "string" && data.title.trim()
        ? data.title.trim()
        : humanize(slug),
    date: await resolveDate(data.date, filePath),
    description:
      typeof data.description === "string" && data.description.trim()
        ? data.description.trim()
        : deriveDescription(body),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: data.draft === true,
    readingTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    content: body,
  };
}

export async function getBlogPosts(
  options: { includeDrafts?: boolean } = {},
): Promise<BlogPost[]> {
  let files: string[];
  try {
    files = await readdir(BLOGS_DIR);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md") && !file.startsWith("_") && !file.startsWith("."))
      .map(parsePost),
  );

  const visible = options.includeDrafts ? posts : posts.filter((post) => !post.draft);
  return visible.sort((a, b) =>
    a.date === b.date ? b.slug.localeCompare(a.slug) : b.date.localeCompare(a.date),
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!/^[a-z0-9][a-z0-9._-]*$/i.test(slug)) return null;
  try {
    return await parsePost(`${slug}.md`);
  } catch {
    return null;
  }
}

export function toBlogMeta(post: BlogPost): BlogMeta {
  const { slug, title, date, description, tags, draft, readingTime } = post;
  return { slug, title, date, description, tags, draft, readingTime };
}

export { blogDate } from "@/lib/blog-date";
