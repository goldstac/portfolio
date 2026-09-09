"use client";

import { Footer } from "@/components/footer";
import { WhoAmIName } from "@/components/whoami-name";
import { siteConfig } from "@/config/site";
import { motion } from "motion/react";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] as const },
};

export default function WhoAmIPage() {
  return (
    <main
      id="main-content"
      className="relative min-h-dvh flex flex-col max-w-3xl mx-auto border-x border-b-2 overflow-x-clip"
    >
      <div className="px-6 pt-16 pb-4">
        <Link
          href="/"
          className="text-xs text-muted-foreground font-mono hover:text-foreground transition-colors"
        >
          ← back
        </Link>
      </div>

      <div className="px-6 flex-1 space-y-8">
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }}>
          <WhoAmIName />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="relative border border-dashed border-border/40 rounded-lg p-5 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-muted/40 to-transparent rounded-bl-full" />
          <p className="text-sm leading-relaxed text-muted-foreground relative z-10">
            I code, I build, I ship. Mostly CLI tools, web apps, and whatever
            else keeps me up at 3am. I break things so I can figure out how
            they work.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mt-3 relative z-10">
            I write C, C++, and Python by hand, play around with AI a lot,
            and dabble in cybersecurity. Arch Linux user.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.18 }}
        >
          <div className="border border-dashed border-border/40 rounded-lg p-4">
            <h3 className="text-[10px] font-mono text-muted-foreground/50 tracking-widest mb-3">
              INTERESTS
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {["AI", "Cybersecurity", "Web3", "Linux"].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded border border-dashed border-foreground/20 px-2 py-0.5 text-[11px] text-muted-foreground font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.24 }}
          className="border border-dashed border-border/40 rounded-lg p-5"
        >
          <h3 className="text-[10px] font-mono text-muted-foreground/50 tracking-widest mb-2">
            NOW
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building CLI tools and web apps. Shipping fast, breaking things,
            learning in public. Running Arch btw.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.30 }}
          className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground pt-2 pb-4"
        >
          <a
            href={`https://github.com/${siteConfig.personal.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <span className="text-muted-foreground/40">01.</span> github
          </a>
          <a
            href="https://x.com/LiProductions_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <span className="text-muted-foreground/40">02.</span> x
          </a>
          <a
            href="https://instagram.com/liproductions.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <span className="text-muted-foreground/40">03.</span> instagram
          </a>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
