"use client";

import { motion } from "motion/react";
import Image from "next/image";

const entryTransition = {
  duration: 0.2,
  ease: [0.22, 1, 0.36, 1] as const,
};

interface ToolBadge {
  src: string;
  alt: string;
  label: string;
}

interface Tool {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: string;
  iconAlt: string;
  badge?: ToolBadge;
}

const tools: Tool[] = [
  {
    id: "t3-code",
    name: "T3 Code",
    description: "The coding agent I use every day.",
    href: "https://github.com/pingdotgg/t3code",
    icon: "/stacks/t3code.png",
    iconAlt: "T3 Code",
    badge: {
      src: "/stacks/t3code-nightly.png",
      alt: "T3 Code Nightly",
      label: "nightly",
    },
  },
  {
    id: "zeron",
    name: "Zeron",
    description: "Control your coding agents from any device.",
    href: "https://zeron.sh/",
    icon: "/stacks/zeron.png",
    iconAlt: "Zeron",
  },
];

export function Tools() {
  return (
    <section className="border-t border-dashed pt-6 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.2 }}
        className="no-js-visible section-heading mb-4"
      >
        Tools I use
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ ...entryTransition, delay: index * 0.05 }}
          >
            <a
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center gap-4 rounded-lg border border-dashed border-border/40 p-4 transition-all duration-300 hover:border-border/60 hover:bg-muted/20 hover:shadow-lg hover:shadow-black/[0.03] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring card-glow"
            >
              <div className="relative shrink-0">
                <Image
                  src={tool.icon}
                  alt={tool.iconAlt}
                  width={48}
                  height={48}
                  className="rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                {tool.badge && (
                  <span
                    aria-hidden
                    className="absolute -bottom-1.5 -right-1.5 block rounded-lg bg-background p-[2px] ring-1 ring-border/60"
                  >
                    <Image
                      src={tool.badge.src}
                      alt=""
                      width={18}
                      height={18}
                      className="block rounded-[5px]"
                    />
                  </span>
                )}
              </div>

              <div className="flex-1 min-w-0 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium tracking-tight">
                    {tool.name}
                  </span>
                  {tool.badge && (
                    <span className="border border-dashed border-border/60 px-1.5 py-px font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70 transition-colors group-hover:text-foreground">
                      {tool.badge.label}
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground font-mono transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground">
                    →
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 truncate">
                  {tool.description}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
