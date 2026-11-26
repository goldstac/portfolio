import {
  ArrowUpRight,
  Atom,
  AtSign,
  Braces,
  Database,
  Globe,
  Layers,
  MapPin,
  PenTool,
  Triangle,
  Wind,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { GitHubCalendar } from "@/components/ui/github-map";
import {
  InteractiveSkillCloud,
  type SkillCloudItem,
} from "@/components/ui/interactive-skill-cloud";
import {
  contributionTotal,
  githubContributions,
  newRepositoryCount,
} from "@/lib/github-contributions";
import { cn } from "@/lib/utils";

const stack: SkillCloudItem[] = [
  { id: "nextjs", name: "Next.js", icon: <Triangle className="size-3.5" />, accent: "#a1a1aa" },
  { id: "react", name: "React", icon: <Atom className="size-3.5" />, accent: "#61dafb" },
  { id: "typescript", name: "TypeScript", icon: <Braces className="size-3.5" />, accent: "#60a5fa" },
  { id: "tailwind", name: "Tailwind", icon: <Wind className="size-3.5" />, accent: "#38bdf8" },
  { id: "shadcn", name: "shadcn/ui", icon: <Layers className="size-3.5" />, accent: "#c4b5fd" },
  { id: "motion", name: "Motion", icon: <Zap className="size-3.5" />, accent: "#f472b6" },
  { id: "postgres", name: "Postgres", icon: <Database className="size-3.5" />, accent: "#818cf8" },
  { id: "design", name: "Design", icon: <PenTool className="size-3.5" />, accent: "#c084fc" },
];

const bars = [38, 52, 44, 68, 56, 84, 72, 92];

const heatmapColors = [
  "oklch(0.24 0.01 265)",
  "oklch(0.38 0.07 278)",
  "oklch(0.52 0.11 278)",
  "oklch(0.66 0.14 278)",
  "oklch(0.78 0.13 278)",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div id="top" className="hero-surface relative overflow-hidden">
        <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />

        <nav className="relative z-10 mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-border/70 px-6">
          <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
            <span className="grid size-7 place-items-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
              li
            </span>
            <span>
              li productions <span className="font-normal text-muted-foreground">/ portfolio</span>
            </span>
          </a>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#work">Work</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#stack">Stack</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="mailto:hello@example.com"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            Contact
          </a>
        </nav>

        <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Luhaidan Ibraheem / Portfolio 2026
              </span>
              <span className="h-px w-10 bg-border" />
            </div>

            <h1 className="mt-6 max-w-2xl text-balance text-5xl font-semibold leading-[1.06] tracking-[-0.05em] sm:text-6xl lg:text-[4.25rem]">
              I build digital products with <span className="text-primary">care</span> and precision.
            </h1>

            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
              I&apos;m Luhaidan, a full-stack developer focused on clean interfaces, thoughtful
              motion, and the details people feel but rarely notice.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" nativeButton={false} render={<a href="#work" />}>
                View selected work <ArrowUpRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="mailto:hello@example.com" />}
              >
                Get in touch
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" /> Dubai, UAE · Remote
              </span>
              <Badge variant="secondary" className="gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-500" /> Open to work
              </Badge>
              <span className="inline-flex items-center gap-1">
                <a
                  href="#"
                  aria-label="Website"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }))}
                >
                  <Globe className="size-4" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  aria-label="Email"
                  className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }))}
                >
                  <AtSign className="size-4" />
                </a>
              </span>
            </div>
          </div>

          <div className="relative">
            <Card id="work" className="overflow-hidden border-border/70 bg-card/80 shadow-xl shadow-black/20">
              <div className="relative h-44 border-b border-border/70 bg-muted/25">
                <div className="absolute inset-x-6 top-6 rounded-lg border border-border/70 bg-background/95 p-4 shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-border" />
                    <span className="size-2 rounded-full bg-border" />
                    <span className="size-2 rounded-full bg-border" />
                    <span className="ml-2 h-2 w-20 rounded-full bg-muted" />
                  </div>
                  <div className="mt-5 flex h-16 items-end gap-2">
                    {bars.map((height, i) => (
                      <span
                        key={i}
                        className={cn(
                          "flex-1 rounded-sm bg-primary/25",
                          i === bars.length - 1 && "bg-primary",
                        )}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <CardHeader className="gap-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Featured work</Badge>
                  <span className="font-mono text-[11px] text-muted-foreground">01 / 03</span>
                </div>
                <CardTitle className="text-xl tracking-tight">Northstar Analytics</CardTitle>
                <CardDescription>
                  A dashboard that turns messy product data into a clear daily story.
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-1.5">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">D3</Badge>
              </CardContent>

              <CardFooter className="justify-between">
                <span className="text-xs text-muted-foreground">2026 · Personal project</span>
                <Button variant="ghost" size="sm" nativeButton={false} render={<a href="#work" />}>
                  Case study <ArrowUpRight className="size-3.5" />
                </Button>
              </CardFooter>
            </Card>

            <Card id="stack" className="mt-4 border-border/70 bg-card/60">
              <CardHeader className="gap-1 pb-0">
                <CardTitle className="text-sm">The stack</CardTitle>
                <CardDescription className="text-xs">Go on, drag the chips.</CardDescription>
              </CardHeader>
              <CardContent className="px-3 pb-3 pt-1">
                <InteractiveSkillCloud
                  items={stack}
                  height={132}
                  gravity={0.2}
                  pillClassName="skill-pill"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Separator />

      <section id="activity" className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              GitHub activity
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A year of showing up.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {contributionTotal.toLocaleString()} contributions and {newRepositoryCount} new
            repositories in the last year on{" "}
            <a
              href="https://github.com/goldstac"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              @goldstac
            </a>
            .
          </p>
        </div>

        <Card className="mt-10 overflow-hidden border-border/70 bg-card/50 p-5 sm:p-6">
          <GitHubCalendar
            data={githubContributions}
            colors={heatmapColors}
            minWeeks={53}
            showCounts={false}
          />
        </Card>
      </section>

      <Separator />
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground">
        <span>© 2026 Luhaidan Ibraheem · li productions · Built with Next.js and shadcn/ui.</span>
        <a href="mailto:hello@example.com" className="transition-colors hover:text-foreground">
          hello@example.com
        </a>
      </footer>
    </main>
  );
}
