import { Footer } from "@/components/footer";
import { ProjectExplorer } from "@/components/project-explorer";
import { projectsConfig, projectsSectionConfig } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "lucide-react";

export default function WorkPage() {
  return (
    <main
      id="main-content"
      className="relative min-h-dvh gap-y-6 flex flex-col max-w-3xl mx-auto border-x border-b-2 overflow-x-clip"
    >
      <div className="px-6 pt-16">
        <a
          href={`https://github.com/${siteConfig.personal.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-lg border border-border/60 p-4 transition-colors hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border/60 bg-background/60">
            <GithubIcon className="h-6 w-6" />
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">View my projects on GitHub</span>
              <span className="text-xs text-muted-foreground font-mono">→</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Open source tools, experiments, and more.
            </p>
          </div>
        </a>
      </div>

      <ProjectExplorer
        projects={projectsConfig}
        title={projectsSectionConfig.title}
      />
      <Footer />
    </main>
  );
}
