"use client";

import { motion } from "motion/react";
import Image from "next/image";

const entryTransition = {
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function WantToTry() {
  return (
    <section className="border-t border-dashed pt-6 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.2 }}
        className="no-js-visible section-heading mb-4"
      >
        Want to try
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={entryTransition}
      >
        <a
          href="https://omarchy.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-lg border border-border/60 p-4 transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <Image
            src="/stacks/omarchy-logo.svg"
            alt="Omarchy"
            width={48}
            height={48}
            className="shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <Image
                src="/stacks/omarchy-wordmark.svg"
                alt="Omarchy"
                width={100}
                height={20}
                className="h-5 w-auto"
              />
              <span className="text-xs text-muted-foreground font-mono">→</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Beautiful, fun &amp; agentic Linux by DHH.
            </p>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
