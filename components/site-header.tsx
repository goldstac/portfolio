"use client";

import { HeaderActions } from "@/components/header-actions";
import Link from "next/link";

/**
 * Sticky floating header shared by every route.
 *
 * Lives at the layout level so the brand logo (left) and actions (right) —
 * GitHub star pill + theme toggle — appear on `/`, `/project/[id]`, and
 * `/components/[id]`. The `max-w-3xl mx-auto` keeps it aligned with the
 * centered main column.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-3 sm:top-4 z-40 mx-auto -mb-8 flex max-w-3xl items-center justify-between px-6 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2">
        <Link
          href="/"
          className="flex h-8 items-center rounded-md border border-border/60 bg-background/60 backdrop-blur-md shadow-xs px-3 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          home
        </Link>
        <Link
          href="/work"
          className="flex h-8 items-center rounded-md border border-border/60 bg-background/60 backdrop-blur-md shadow-xs px-3 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          work
        </Link>
        <Link
          href="/whoami"
          className="flex h-8 items-center rounded-md border border-border/60 bg-background/60 backdrop-blur-md shadow-xs px-3 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          who am i
        </Link>
      </div>

      <HeaderActions />
    </header>
  );
}
