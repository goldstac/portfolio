"use client";

import { motion, useReducedMotion } from "motion/react";

/* ------------------------------------------------------------------ */
/* Garden palette — olive stems with colored blooms that read well on  */
/* the theme-aware secondary surface in both light and dark mode.      */
/* ------------------------------------------------------------------ */

const STEM = "text-[#98a265]";
const BLOOM_PINK = "text-[#e06c9f]";
const BLOOM_RED = "text-[#d9502b]";
const BLOOM_BLUE = "text-[#82a9cc]";
const BLOOM_CREAM = "text-[#cfc98d]";

type Tone = "bloom" | "stem";

type PlantLine = { t: string; tone: Tone };

/* ASCII plant shapes, one inner array per visual line. */
const KINDS = {
  tulip: [
    [{ t: " ,,,", tone: "bloom" }],
    [{ t: "{({})}", tone: "bloom" }],
    [{ t: " -Y-", tone: "stem" }],
    [{ t: " \\|/", tone: "stem" }],
    [{ t: " \\|/", tone: "stem" }],
    [{ t: "^^^^^", tone: "stem" }],
  ],
  tulipTall: [
    [{ t: " ,,,", tone: "bloom" }],
    [{ t: "{({})}", tone: "bloom" }],
    [{ t: " -Y-", tone: "stem" }],
    [{ t: " \\|/", tone: "stem" }],
    [{ t: " \\|/", tone: "stem" }],
    [{ t: " \\|/", tone: "stem" }],
    [{ t: "^^^^^", tone: "stem" }],
  ],
  pot: [
    [{ t: "UUUUU", tone: "bloom" }],
    [{ t: "(___)", tone: "bloom" }],
    [{ t: "\\-Y-/", tone: "stem" }],
    [{ t: " \\|/", tone: "stem" }],
    [{ t: " \\|/", tone: "stem" }],
    [{ t: "^^^^^", tone: "stem" }],
  ],
  smallPot: [
    [{ t: "UUU", tone: "bloom" }],
    [{ t: "(_)", tone: "bloom" }],
    [{ t: " \\|", tone: "stem" }],
    [{ t: "^^^^^", tone: "stem" }],
  ],
  star: [
    [{ t: "(*)", tone: "bloom" }],
    [{ t: ">/", tone: "stem" }],
  ],
  bud: [
    [{ t: "(o)", tone: "bloom" }],
    [{ t: "\\|/", tone: "stem" }],
  ],
  sprout: [[{ t: "\\ |/", tone: "stem" }]],
  dotSprout: [
    [{ t: " .", tone: "bloom" }],
    [{ t: "\\|", tone: "stem" }],
  ],
  dotSproutHill: [
    [{ t: " .", tone: "bloom" }],
    [{ t: "\\|", tone: "stem" }],
    [{ t: "^^^", tone: "stem" }],
  ],
  dots: [[{ t: "..", tone: "bloom" }]],
  hillDot: [
    [{ t: " .", tone: "bloom" }],
    [{ t: "^^^", tone: "stem" }],
  ],
  tinyBloom: [
    [{ t: "UUU", tone: "bloom" }],
    [{ t: " Y", tone: "stem" }],
    [{ t: "^^^^^", tone: "stem" }],
  ],
  fallen: [
    [{ t: "\\( | ,-", tone: "stem" }],
    [{ t: " \\|/", tone: "stem" }],
  ],
  at: [
    [{ t: "@", tone: "bloom" }],
    [{ t: "\\|/", tone: "stem" }],
    [{ t: "^^^", tone: "stem" }],
  ],
} satisfies Record<string, PlantLine[][]>;

type Plant = {
  kind: keyof typeof KINDS;
  left: number; // % of garden width
  top: number; // % of garden height
  bloom?: string; // tailwind text color for the bloom lines
};

/* Hardcoded scatter (no randomness) so SSR and client always match. */
const PLANTS: Plant[] = [
  { kind: "star", left: 4, top: 14, bloom: BLOOM_CREAM },
  { kind: "dotSprout", left: 10, top: 52, bloom: BLOOM_PINK },
  { kind: "sprout", left: 4, top: 70 },
  { kind: "bud", left: 14, top: 70, bloom: BLOOM_RED },
  { kind: "tulip", left: 9, top: 82, bloom: BLOOM_PINK },
  { kind: "pot", left: 20, top: 40, bloom: BLOOM_BLUE },
  { kind: "dots", left: 29, top: 8, bloom: BLOOM_PINK },
  { kind: "tulipTall", left: 34, top: 10, bloom: BLOOM_PINK },
  { kind: "dotSprout", left: 29, top: 55, bloom: BLOOM_RED },
  { kind: "smallPot", left: 23, top: 66, bloom: BLOOM_PINK },
  { kind: "sprout", left: 30, top: 84 },
  { kind: "fallen", left: 22, top: 90 },
  { kind: "hillDot", left: 40, top: 4, bloom: BLOOM_PINK },
  { kind: "sprout", left: 46, top: 42 },
  { kind: "tulipTall", left: 53, top: 42, bloom: BLOOM_RED },
  { kind: "dotSproutHill", left: 47, top: 62, bloom: BLOOM_PINK },
  { kind: "dots", left: 36, top: 68, bloom: BLOOM_PINK },
  { kind: "tinyBloom", left: 41, top: 82, bloom: BLOOM_BLUE },
  { kind: "sprout", left: 45, top: 94 },
  { kind: "tulip", left: 62, top: 50, bloom: BLOOM_PINK },
  { kind: "pot", left: 71, top: 36, bloom: BLOOM_BLUE },
  { kind: "sprout", left: 72, top: 66 },
  { kind: "star", left: 55, top: 74, bloom: BLOOM_CREAM },
  { kind: "at", left: 56, top: 88, bloom: BLOOM_PINK },
  { kind: "fallen", left: 67, top: 82 },
  { kind: "sprout", left: 72, top: 93 },
  { kind: "dots", left: 84, top: 50, bloom: BLOOM_PINK },
  { kind: "star", left: 90, top: 38, bloom: BLOOM_CREAM },
  { kind: "sprout", left: 93, top: 55 },
  { kind: "smallPot", left: 94, top: 68, bloom: BLOOM_PINK },
  { kind: "bud", left: 83, top: 62, bloom: BLOOM_RED },
  { kind: "star", left: 86, top: 78, bloom: BLOOM_CREAM },
  { kind: "bud", left: 79, top: 86, bloom: BLOOM_RED },
  { kind: "tulip", left: 89, top: 86, bloom: BLOOM_PINK },
];

export function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="overflow-hidden border-t border-dashed bg-muted/10">
      <div className="px-6 pb-8 pt-12 md:px-8 md:pb-10 md:pt-16">
        <motion.figure
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <span
            aria-hidden="true"
            className="font-serif text-[4rem] leading-[0.7] text-muted-foreground/20 select-none md:text-[5rem]"
          >
            &ldquo;
          </span>
          <blockquote className="mt-4 max-w-xl font-serif text-2xl text-balance italic leading-[1.4] tracking-tight text-foreground md:text-[2.125rem]">
            I have never regretted my silence, as for my speech I’ve regretted it
            many times.
          </blockquote>
          <figcaption className="mt-7 flex flex-col items-center gap-2.5">
            <span className="flex items-center gap-3 md:gap-4">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-gradient-to-r from-transparent to-border/80 md:w-14"
              />
              <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/60 uppercase">
                Umar ibn al-Khattab
              </span>
              <span
                aria-hidden="true"
                className="h-px w-8 bg-gradient-to-l from-transparent to-border/80 md:w-14"
              />
            </span>
            <span
              lang="ar"
              dir="rtl"
              title="ʿUmar ibn al-Khaṭṭāb"
              className="text-lg leading-[1.9] font-normal text-muted-foreground/55 md:text-xl"
            >
              عُمَرُ بْنُ الْخَطَّابِ
            </span>
          </figcaption>
        </motion.figure>
        <div className="mt-10 flex items-center gap-3 md:mt-12">
          <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground/40">
            &lt;3
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-border/60 to-transparent" />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="group/garden relative h-[310px] cursor-default select-none overflow-hidden md:h-[390px]"
      >
        {PLANTS.map((plant, index) => (
          <pre
            key={`${plant.kind}-${plant.left}-${plant.top}`}
            style={{
              left: `${plant.left}%`,
              top: `${plant.top}%`,
              transitionDelay: `${(index % 10) * 45}ms`,
            }}
            className="absolute font-mono text-[9px] leading-[1.3] transition-transform duration-500 ease-out group-hover/garden:-translate-y-1.5 motion-reduce:transition-none md:text-[10px]"
          >
            {KINDS[plant.kind].map((line, lineIndex) => (
              <span
                key={lineIndex}
                className={line[0].tone === "bloom" ? plant.bloom ?? STEM : STEM}
              >
                {line[0].t}
                {"\n"}
              </span>
            ))}
          </pre>
        ))}
      </div>
    </footer>
  );
}
