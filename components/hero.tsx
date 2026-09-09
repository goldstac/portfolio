"use client";

import { AskAI } from "@/components/ui/ask-ai";
import { WritingUnderline } from "./writing-underline";
import { heroConfig } from "@/config/hero";
import { motion } from "motion/react";

const entryTransition = {
  duration: 0.24,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Hero() {
  return (
    <motion.section
      className="no-js-visible relative z-20 px-6 pt-16 pb-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={entryTransition}
    >
      <div className="space-y-6">
        <div>
          <motion.h1
            className="no-js-visible text-4xl sm:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...entryTransition, delay: 0.1 }}
          >
            {heroConfig.greeting}
          </motion.h1>
          <motion.p
            className="no-js-visible text-sm text-muted-foreground font-mono mt-1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...entryTransition, delay: 0.14 }}
          >
            <WritingUnderline delay={0.4}>
              Luhaidan Ibraheem
            </WritingUnderline>
          </motion.p>
        </div>

        <motion.p
          className="no-js-visible text-xl sm:text-2xl font-medium text-muted-foreground leading-snug text-balance"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...entryTransition, delay: 0.18 }}
        >
          I build{" "}
          <span className="underline decoration-border/50 underline-offset-4">
            <WritingUnderline delay={0.8}>
              {heroConfig.highlightedPhrases[0]}
            </WritingUnderline>
          </span>
          {heroConfig.highlightedPhrases[1] && (
            <>
              {" "}
              <WritingUnderline delay={1.2}>
                {heroConfig.highlightedPhrases[1]}
              </WritingUnderline>
            </>
          )}
        </motion.p>

        <motion.p
          className="no-js-visible text-sm text-muted-foreground leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...entryTransition, delay: 0.24 }}
        >
          {heroConfig.description}
        </motion.p>

        <motion.div
          className="no-js-visible flex items-center gap-4 text-xs text-muted-foreground font-mono"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...entryTransition, delay: 0.32 }}
        >
          <span>2024 — 2026</span>
        </motion.div>

        <motion.div
          className="no-js-visible"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...entryTransition, delay: 0.4 }}
        >
          <AskAI
            prompt="Hi! I'm on Li Productions' portfolio (https://liproductions.vercel.app). Based on this page, introduce them: what they build, their stack, and what they're about."
            title="Ask an AI about me"
            description="A fresh perspective, from your favorite assistant."
            label="Ask an AI"
            blobOnly
            size="default"
            side="top"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
