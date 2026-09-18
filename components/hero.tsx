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
      className="no-js-visible relative z-20 px-6 pt-20 pb-6"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={entryTransition}
    >
      <div className="space-y-8">
        <div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...entryTransition, delay: 0.1 }}
          >
            <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-transparent via-muted/30 to-transparent blur-3xl pointer-events-none" />
            <h1 className="no-js-visible text-5xl sm:text-6xl font-bold tracking-tighter relative">
              {heroConfig.greeting}
            </h1>
          </motion.div>
          <motion.p
            className="no-js-visible text-sm text-muted-foreground font-mono mt-2"
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
          className="no-js-visible flex items-center gap-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...entryTransition, delay: 0.32 }}
        >
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground font-mono">available for work</span>
          </div>
          <span className="text-xs text-muted-foreground/40 font-mono">2024 — 2026</span>
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
