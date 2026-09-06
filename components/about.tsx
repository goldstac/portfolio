"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site";

export const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="no-js-visible border-t border-dashed pt-6"
      id="about"
    >
      <h2 className="section-heading mb-3">{siteConfig.about.title}</h2>
      <div className="px-6">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          {siteConfig.about.body}
        </p>
      </div>
    </motion.section>
  );
};
