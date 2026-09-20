"use client";

import { AskAI } from "@/components/ui/ask-ai";
import { WritingUnderline } from "./writing-underline";
import { heroConfig } from "@/config/hero";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const entryTransition = {
  duration: 0.24,
  ease: [0.22, 1, 0.36, 1] as const,
};

const roles = [
  "CLI tools",
  "web apps",
  "cybersecurity",
  "AI experiments",
  "full-stack systems",
  "anything that ships",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.slice(0, displayText.length - 1)
              : current.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <motion.section
      className="no-js-visible relative z-20 px-6 pt-24 pb-10"
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
            <div className="absolute -inset-x-32 -inset-y-20 bg-gradient-to-br from-muted/40 via-transparent to-muted/20 blur-3xl pointer-events-none" />
            <h1 className="no-js-visible text-7xl sm:text-8xl font-bold tracking-[-0.05em] relative leading-[0.9]">
              {heroConfig.greeting}
            </h1>
          </motion.div>
          <motion.p
            className="no-js-visible text-sm text-muted-foreground font-mono mt-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...entryTransition, delay: 0.14 }}
          >
            <WritingUnderline delay={0.4}>
              Luhaidan Ibraheem
            </WritingUnderline>
          </motion.p>
        </div>

        <motion.div
          className="no-js-visible text-xl sm:text-2xl font-medium text-muted-foreground/80 leading-snug text-balance"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...entryTransition, delay: 0.18 }}
        >
          I build{" "}
          <span className="text-foreground font-semibold">
            <WritingUnderline delay={0.8}>
              {heroConfig.highlightedPhrases[0]}
            </WritingUnderline>
          </span>
        </motion.div>

        <motion.div
          className="no-js-visible h-8 flex items-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...entryTransition, delay: 0.22 }}
        >
          <span className="text-sm text-muted-foreground/60 font-mono">
            currently obsessing over{" "}
            <span className="text-foreground font-medium">
              {displayText}
              <span className="inline-block w-[2px] h-4 bg-foreground/60 ml-0.5 animate-pulse" />
            </span>
          </span>
        </motion.div>

        <motion.p
          className="no-js-visible text-sm text-muted-foreground/60 leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...entryTransition, delay: 0.26 }}
        >
          {heroConfig.description}
        </motion.p>

        <motion.div
          className="no-js-visible flex items-center gap-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...entryTransition, delay: 0.32 }}
        >
          <span className="text-xs text-muted-foreground/30 font-mono tracking-widest">2024 — 2026</span>
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
