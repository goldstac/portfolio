# Agents

## Git

- Use conventional commits when pushing: `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`, `test:`, `ci:`
- Example: `feat: add Omarchy to want-to-try section`
- Never commit secrets or API keys

## Workflow

- Do all dev work on the `testing` branch, never on `main`
- Commit with conventional commits (`feat:`, `fix:`, etc.)
- When work is ready, open a PR from `testing` → `main`

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
