"use client";

import { WritingUnderline } from "@/components/writing-underline";

export function WhoAmIName() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Li Productions
      </h1>
      <p className="mt-2 text-muted-foreground font-mono text-sm">
        <WritingUnderline delay={0.3}>
          Luhaidan Ibraheem
        </WritingUnderline>
      </p>
    </div>
  );
}
