"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

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
        className="space-y-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold">Li Productions</span>
          <span className="text-xs text-muted-foreground font-mono border border-dashed border-border/40 rounded px-2 py-0.5 transition-all duration-200 hover:border-foreground/20 hover:text-foreground hover:bg-muted/30">
            Luhaidan Ibraheem
          </span>
          <span className="text-xs text-muted-foreground font-mono border border-dashed border-border/40 rounded px-2 py-0.5 transition-all duration-200 hover:border-foreground/20 hover:text-foreground hover:bg-muted/30">
            @LiProductions_
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          I code, I build, I ship. Mostly CLI tools, web apps, and whatever
          else keeps me up at 3am. I break things so I can figure out how
          they work.
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          I write C, C++, and Python by hand, play around with AI a lot,
          and dabble in cybersecurity. Arch Linux user.
        </p>

        <div className="border border-dashed border-border/40 rounded-lg p-4 hover:border-border/60 transition-colors">
          <h3 className="text-[10px] font-mono text-muted-foreground/50 tracking-widest mb-3">
            INTERESTS
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {["AI", "Cybersecurity", "Web3", "Linux"].map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded border border-dashed border-foreground/20 px-2 py-0.5 text-[11px] text-muted-foreground font-mono transition-all duration-200 hover:border-foreground/40 hover:text-foreground hover:bg-muted/20 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-dashed border-border/40 rounded-lg p-4 hover:border-border/60 transition-colors">
          <h3 className="text-[10px] font-mono text-muted-foreground/50 tracking-widest mb-2">
            NOW
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building CLI tools and web apps. Shipping fast, breaking things,
            learning in public. Running Arch btw.
          </p>
        </div>

        <Link
          href="/whoami"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-all duration-200 font-mono mt-1 hover:gap-2"
        >
          full profile →
        </Link>
      </motion.div>
    </section>
  );
}
