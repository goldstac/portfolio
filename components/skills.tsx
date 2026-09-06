"use client";

import { skillsConfig, skillsSectionConfig } from "@/config/skills";
import type { SkillIcon } from "@/config/types";
import NextjsIcon from "@/public/stacks/nextjs";
import ReactIcon from "@/public/stacks/react";
import ShadcnIcon from "@/public/stacks/shadcn";
import TailwindIcon from "@/public/stacks/tailwind";
import TSIcon from "@/public/stacks/ts";
import JSIcon from "@/public/stacks/js";
import OpenCodeIcon from "@/public/stacks/opencode";
import { motion } from "motion/react";
import type { ComponentType } from "react";
import { BsClaude } from "react-icons/bs";
import { SiGoogle, SiOpenai, SiSupabase, SiSqlite, SiPostgresql, SiRust, SiPython, SiSvelte, SiCplusplus, SiHtml5, SiCss, SiC, SiArchlinux, SiWeb3Dotjs } from "react-icons/si";
import { FaWindows } from "react-icons/fa";

function LetterIcon({ letter, className }: { letter: string; className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center font-mono font-bold text-[10px] ${className ?? ""}`}>
      {letter}
    </span>
  );
}

const skillIconMap: Record<SkillIcon, ComponentType<any>> = {
  nextjs: NextjsIcon,
  react: ReactIcon,
  typescript: TSIcon,
  javascript: JSIcon,
  tailwind: TailwindIcon,
  shadcn: ShadcnIcon,
  prisma: ({ size }) => <LetterIcon letter="P" />,
  claude: BsClaude,
  c: SiC,
  cpp: SiCplusplus,
  python: SiPython,
  rust: SiRust,
  html: SiHtml5,
  css: SiCss,
  svelte: SiSvelte,
  supabase: SiSupabase,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,
  chatgpt: SiOpenai,
  gemini: SiGoogle,
  opencode: OpenCodeIcon,
  archlinux: SiArchlinux,
  windows: FaWindows,
  web3: SiWeb3Dotjs,
  everything: ({ size }: { size?: number }) => <LetterIcon letter="*" className={`w-[${size ?? 14}px] h-[${size ?? 14}px]`} />,
};

const enabledSkills = skillsConfig
  .filter((skill) => skill.enabled !== false)
  .sort((a, b) => a.order - b.order);

export function Skills() {
  const categories = skillsSectionConfig.categories;

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="border-t border-dashed pt-6"
    >
      <h2 className="section-heading mb-3">{skillsSectionConfig.title}</h2>

      <div className="px-6 space-y-4">
        {categories.map((category) => {
          const categorySkills = enabledSkills.filter(
            (skill) => skill.category === category.id
          );
          if (categorySkills.length === 0) return null;

          return (
            <div key={category.id} className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="shrink-0 w-28 font-mono text-[11px] text-muted-foreground">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {categorySkills.map((skill) => {
                  const Icon = skillIconMap[skill.icon];
                  return (
                    <span
                      key={skill.id}
                      className={`inline-flex items-center gap-1 border px-2 py-0.5 text-xs text-muted-foreground ${
                        skill.id === "everything"
                          ? "border-solid border-foreground/30 bg-foreground/5 font-semibold tracking-wider text-foreground"
                          : "border-dashed"
                      }`}
                      aria-label={skill.name}
                    >
                      {Icon && <Icon size={14} />}
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
