import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { GitHubSection } from "@/components/github-section";
import { Hero } from "@/components/hero";
import { SectionRail } from "@/components/section-rail";
import { GitSkeleton } from "@/components/skeletons/github-skeleton";
import { Skills } from "@/components/skills";
import Social from "@/components/social";
import { Timeline } from "@/components/timeline";
import { WantToTry } from "@/components/want-to-try";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { siteConfig } from "@/config/site";
import { Suspense } from "react";

export default function Home() {
  const showGithub =
    siteConfig.sectionFlags.github && Boolean(process.env.GITHUB_TOKEN);

  return (
    <>
      <main
        id="main-content"
        className="relative min-h-dvh gap-y-6 flex flex-col max-w-3xl mx-auto border-x border-b-2 overflow-x-clip"
      >
        <div id="hero" className="bg-background scroll-mt-20">
          <Hero />
        </div>

        {siteConfig.sectionFlags.about && (
          <div id="about" className="bg-background scroll-mt-20">
            <About />
          </div>
        )}

        {siteConfig.sectionFlags.skills && (
          <div id="skills" className="bg-background scroll-mt-20">
            <Skills />
          </div>
        )}

        <div id="want-to-try" className="bg-background scroll-mt-20">
          <WantToTry />
        </div>

        {showGithub && (
          <div id="github" className="bg-background scroll-mt-20">
            <Suspense fallback={<GitSkeleton />}>
              <GitHubSection />
            </Suspense>
          </div>
        )}

        <div id="timeline" className="bg-background scroll-mt-20">
          <Timeline />
        </div>

        {siteConfig.sectionFlags.socials && (
          <div id="socials" className="bg-background scroll-mt-20">
            <Social />
          </div>
        )}

        <Footer />
      </main>

      <SectionRail
        items={[
          { id: "hero", label: "top" },
          { id: "about", label: "about" },
          { id: "skills", label: "stack" },
          { id: "want-to-try", label: "try" },
          ...(showGithub ? [{ id: "github", label: "github" }] : []),
          { id: "timeline", label: "timeline" },
          { id: "socials", label: "elsewhere" },
        ]}
      />

      <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-3xl pointer-events-none">
        <ProgressiveBlur
          position="bottom"
          height="calc(100px + env(safe-area-inset-bottom))"
        />
      </div>
    </>
  );
}
