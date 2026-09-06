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
      className="no-js-visible border-t border-dashed pt-6"
      id="timeline"
    >
      <h2 className="section-heading mb-3">{siteConfig.timeline.title}</h2>

      <div className="px-6">
        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.06 }}
              className="flex items-baseline gap-3"
            >
              <span className="font-mono text-[11px] text-muted-foreground shrink-0 w-10">
                {item.date}
              </span>
              <span className="text-sm text-muted-foreground">
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
