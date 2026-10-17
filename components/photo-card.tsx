"use client";

import { cn } from "cn";
import Image from "next/image";
import type { CSSProperties } from "react";

interface PhotoCardProps {
  src: string;
  alt: string;
  caption: string;
  badge?: string;
  rotate?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function PhotoCard({
  src,
  alt,
  caption,
  badge,
  rotate = -1.5,
  sizes = "(min-width: 640px) 320px, 90vw",
  priority,
  className,
}: PhotoCardProps) {
  return (
    <figure
      className={cn("group relative w-full max-w-72", className)}
      style={{ "--rotate": `${rotate}deg` } as CSSProperties}
    >
      <div className="relative rotate-[var(--rotate)] rounded-lg border border-dashed border-border/50 bg-card p-2 pb-2 shadow-sm transition-all duration-300 ease-[var(--motion-ease-standard)] group-hover:-translate-y-1.5 group-hover:rotate-0 group-hover:border-foreground/25 group-hover:shadow-lg group-hover:shadow-black/5">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-2.5 left-5 z-10 h-5 w-16 -rotate-3 rounded-[1px] border border-foreground/10 bg-foreground/15 backdrop-blur-[1px] transition-colors duration-300 group-hover:bg-foreground/20"
        />
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-muted">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-500 ease-[var(--motion-ease-standard)] group-hover:scale-[1.04]"
          />
        </div>
        <figcaption className="mt-2 flex items-center justify-between gap-2 px-0.5">
          <span className="font-mono text-[11px] leading-tight text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
            {caption}
          </span>
          {badge ? (
            <span className="shrink-0 rounded border border-dashed border-foreground/25 px-1.5 py-0.5 font-mono text-[9px] tracking-widest uppercase text-muted-foreground transition-colors duration-200 group-hover:border-foreground/40 group-hover:text-foreground">
              {badge}
            </span>
          ) : null}
        </figcaption>
      </div>
    </figure>
  );
}
