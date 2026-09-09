"use client";

import { motion } from "motion/react";
import Link from "next/link";

const entryTransition = {
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function WhoAmI() {
  return (
    <section className="border-t border-dashed pt-6 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.2 }}
        className="no-js-visible section-heading mb-4"
      >
        who am i
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={entryTransition}
        className="space-y-3"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold">Li Productions</span>
          <span className="text-xs text-muted-foreground font-mono border border-dashed border-border/40 rounded px-2 py-0.5">
            Luhaidan Ibraheem
          </span>
          <span className="text-xs text-muted-foreground font-mono border border-dashed border-border/40 rounded px-2 py-0.5">
            @LiProductions_
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          I code, I build, I ship. Mostly CLI tools, web apps, and whatever
          else keeps me up at 3am. Arch Linux user. Cybersecurity tinkerer.
          I break things so I can figure out how they work.
        </p>
        <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground/60">
          <span>C</span>
          <span className="text-border">·</span>
          <span>C++</span>
          <span className="text-border">·</span>
          <span>Python</span>
          <span className="text-border">·</span>
          <span>AI</span>
          <span className="text-border">·</span>
          <span>Cybersecurity</span>
          <span className="text-border">·</span>
          <span>Web3</span>
          <span className="text-border">·</span>
          <span>Arch btw</span>
        </div>
        <Link
          href="/whoami"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors font-mono mt-1"
        >
          read more →
        </Link>
      </motion.div>
    </section>
  );
}
