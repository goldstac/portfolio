---
title: Writing blogs with plain markdown
date: 2026-09-28
description: Drop a .md file in content/blogs and it shows up on the site — no CMS, no admin panel.
tags: [meta, markdown]
draft: false
---

Every post on this blog is a single markdown file in `content/blogs/`. Create
one, push, and it goes live on the next deploy.

## Frontmatter

Each file starts with a small header:

```yaml
---
title: Your title here
date: 2026-09-28
description: One line for the index and link previews.
tags: [cli, linux]
draft: false
---
```

- **title** — the post title.
- **date** — `yyyy-mm-dd`. Controls sorting, newest first.
- **description** — optional; if you leave it out, the first paragraph is used.
- **tags** — optional list.
- **draft** — set `true` to keep a post off the home page, the blog index, and
  the sitemap. The page still builds, so you can preview it at its URL while
  you write.

## The filename is the URL

`content/blogs/my-first-post.md` serves at `/blog/my-first-post`.

## What renders

Standard markdown: headings, lists, links, blockquotes, tables, and fenced
code blocks with a copy button. Want images? Drop them in `public/` and
reference them normally.

```bash
cp content/blogs/writing-blogs.md content/blogs/my-first-post.md
```

Then edit, flip `draft` to `false` when it's ready, and push.
