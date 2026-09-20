"use client";

import { siteConfig } from "@/config/site";
import { motion } from "motion/react";

export function Timeline() {
  const items = siteConfig.timeline.items;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="no-js-visible px-6 border-t border-dashed pt-6"
      id="timeline"
    >
      <h2 className="section-heading mb-4">{siteConfig.timeline.title}</h2>

      <div className="relative">
        <div className="absolute left-[19px] top-1 bottom-1 w-px bg-gradient-to-b from-border/60 via-border/30 to-transparent" />
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.06 }}
              className="relative flex items-start gap-3 group"
            >
              <div className="relative z-10 mt-1 h-2 w-2 shrink-0 rounded-full bg-border group-hover:bg-foreground/40 transition-all duration-300 group-hover:scale-125" />
              <span className="text-sm text-muted-foreground">
                <span className="font-mono text-[11px] text-muted-foreground/60 mr-2">
                  {item.date}
                </span>
                <span className="text-foreground font-medium">{item.title}</span>
                {" — "}
                {item.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
