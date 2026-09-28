/**
 * Shared blog date helpers — safe to import from client components
 * (keep this file free of `node:` imports so it can cross the boundary).
 */

/** Midnight *local* on the post date — avoids off-by-one from UTC parsing. */
export function blogDate(date: string): Date {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1);
}
