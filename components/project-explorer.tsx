"use client";

import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  FolderClosedIcon,
  FolderOpenIcon,
  ImageIcon,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useSpring,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";

export type ProjectStatus = "building" | "new" | "shipped";

export interface ProjectExplorerItem {
  id: string;
  title: string;
  year: number;
  description?: string;
  category?: string;
  status?: ProjectStatus;
  href?: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  imageAlt?: string;
  showImage?: boolean;
  enabled?: boolean;
  order?: number;
  tags?: string[];
}

const defaultSampleProjects: ProjectExplorerItem[] = [];

const HOVER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeHoverCapability(callback: () => void) {
  const mql = window.matchMedia(HOVER_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

const getHoverSnapshot = () => window.matchMedia(HOVER_QUERY).matches;
const getServerSnapshot = () => false;

const folderColors = [
  {
    icon: "fill-muted-foreground/20 text-foreground",
    text: "text-foreground",
  },
  {
    icon: "fill-muted-foreground/20 text-muted-foreground",
    text: "text-muted-foreground",
  },
  {
    icon: "fill-muted-foreground/20 text-foreground",
    text: "text-foreground",
  },
  {
    icon: "fill-muted-foreground/20 text-muted-foreground",
    text: "text-muted-foreground",
  },
];

const PREVIEW_WIDTH = 300;
const PREVIEW_HEIGHT = 210;

function StatusBadge({ status }: { status: ProjectStatus }) {
  if (status === "shipped") return null;

  if (status === "building") {
    return (
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-sm px-1.5 py-0.5 font-mono text-[10px] leading-none text-muted-foreground">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-40 motion-reduce:animate-none" />
          <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
        </span>
        building
      </span>
    );
  }

  return (
    <span className="inline-flex shrink-0 items-center rounded-sm px-1.5 py-0.5 font-mono text-[10px] leading-none text-muted-foreground">
      new
    </span>
  );
}

interface PreviewHandlers {
  onPreviewStart: (project: ProjectExplorerItem, anchor?: DOMRect) => void;
  onPreviewEnd: () => void;
  showHoverPreview: boolean;
}

function WorkRow({
  project,
  index,
  onPreviewStart,
  onPreviewEnd,
  showHoverPreview,
}: { project: ProjectExplorerItem; index: number } & PreviewHandlers) {
  const [expanded, setExpanded] = useState(false);
  const href = project.href ?? project.liveUrl ?? (project.id ? `/project/${project.id}` : "#");
  const isExternal = Boolean(
    project.liveUrl ||
      (project.href &&
        (project.href.startsWith("http://") ||
          project.href.startsWith("https://"))),
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.24, delay: index * 0.045 }}
      className="relative border border-dashed border-border/40 rounded-md"
    >
      <div className="px-3 py-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{project.title}</span>
              {project.status ? <StatusBadge status={project.status} /> : null}
            </div>
            {project.description && (
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {project.description}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {project.category ? (
              <span className="font-mono text-[10px] text-muted-foreground/50">
                {project.category}
              </span>
            ) : null}
            <ArrowUpRight
              aria-hidden="true"
              className="size-3.5 text-muted-foreground/30"
            />
          </div>
        </div>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded border border-border/40 bg-muted/30 px-1.5 py-0.5 text-[10px] text-muted-foreground font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 mt-2">
          <Link
            href={href}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="text-[11px] text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            {project.liveUrl ? "view live →" : project.githubUrl ? "view on github →" : "read more →"}
          </Link>
          {project.githubUrl && project.liveUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              github →
            </Link>
          )}
        </div>
      </div>
    </motion.li>
  );
}

export type ProjectExplorerProps = {
  /** The list of projects to display. If omitted, sample projects will be shown. */
  projects?: ProjectExplorerItem[];
  /** Section heading text. Default: "Featured Projects". */
  title?: string;
  /** Hide the section label when the explorer lives inside an already-labelled surface.
   *  Also drops the section's top rule. */
  showHeading?: boolean;
  /** Choose whether every year or only the most recent year starts expanded. */
  defaultOpen?: "all" | "latest";
  /** Enable or disable the floating cursor hover image preview card. Default: true */
  showHoverPreview?: boolean;
  /** Additional classes for the container section */
  className?: string;
};

export function ProjectExplorer({
  projects = defaultSampleProjects,
  title = "Featured Projects",
  showHeading = true,
  defaultOpen = "all",
  showHoverPreview = true,
  className,
}: ProjectExplorerProps) {
  const [activeProject, setActiveProject] = useState<ProjectExplorerItem | null>(null);

  const projectsByYear = useMemo(() => {
    const enabledProjects = projects
      .filter((item) => item.enabled !== false)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    return enabledProjects
      .reduce<{ year: number; projects: ProjectExplorerItem[] }[]>((groups, project) => {
        const group = groups.find((g) => g.year === project.year);
        if (group) {
          group.projects.push(project);
        } else {
          groups.push({ year: project.year, projects: [project] });
        }
        return groups;
      }, [])
      .sort((a, b) => b.year - a.year);
  }, [projects]);

  const [openYears, setOpenYears] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    projectsByYear.forEach((group, index) => {
      initial[group.year] = defaultOpen === "all" || index === 0;
    });
    return initial;
  });

  const toggleYear = useCallback((year: number) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  }, []);

  const canHover = useSyncExternalStore(
    subscribeHoverCapability,
    getHoverSnapshot,
    getServerSnapshot,
  );
  const prefersReducedMotion = useReducedMotion();

  const springX = useSpring(0, { stiffness: 260, damping: 26, mass: 0.6 });
  const springY = useSpring(0, { stiffness: 260, damping: 26, mass: 0.6 });

  useEffect(() => {
    const hide = () => setActiveProject(null);
    window.addEventListener("scroll", hide, { passive: true });
    return () => window.removeEventListener("scroll", hide);
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (!showHoverPreview) return;
      const flip = event.clientX > window.innerWidth - PREVIEW_WIDTH - 48;
      springX.set(event.clientX + (flip ? -(PREVIEW_WIDTH + 24) : 24));
      springY.set(
        Math.max(
          16,
          Math.min(
            event.clientY - PREVIEW_HEIGHT / 2,
            window.innerHeight - PREVIEW_HEIGHT - 24,
          ),
        ),
      );
    },
    [springX, springY, showHoverPreview],
  );

  const handlePreviewStart = useCallback(
    (project: ProjectExplorerItem, anchor?: DOMRect) => {
      if (!showHoverPreview) return;
      setActiveProject(project);
      if (anchor) {
        const flip = anchor.right > window.innerWidth - PREVIEW_WIDTH - 48;
        springX.set(
          flip ? anchor.left - PREVIEW_WIDTH - 16 : anchor.right + 16,
        );
        springY.set(
          Math.max(
            16,
            Math.min(anchor.top, window.innerHeight - PREVIEW_HEIGHT - 24),
          ),
        );
      }
    },
    [springX, springY, showHoverPreview],
  );

  const handlePreviewEnd = useCallback(() => setActiveProject(null), []);

  const showPreview = showHoverPreview && canHover && !prefersReducedMotion && Boolean(activeProject);

  const hasImage = Boolean(
    activeProject?.image && activeProject?.showImage !== false,
  );

  return (
    <section
      id="projects"
      className={cn(showHeading && "border-t border-dashed", "pt-6", className)}
    >
      {showHeading ? (
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2 }}
          className="no-js-visible section-heading mb-3"
        >
          {title}
        </motion.h2>
      ) : null}

      <div
        className="flex flex-col gap-5 px-4 sm:px-6"
        onMouseMove={handleMouseMove}
        onMouseLeave={handlePreviewEnd}
      >
        {projectsByYear.length === 0 && (
          <p className="text-sm text-muted-foreground font-mono py-8">
            No projects yet. Check back soon.
          </p>
        )}
        {projectsByYear.map((group, groupIndex) => {
          const isOpen = openYears[group.year] ?? true;
          const FolderIcon = isOpen ? FolderOpenIcon : FolderClosedIcon;

          return (
            <motion.div
              key={group.year}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <button
                type="button"
                onClick={() => toggleYear(group.year)}
                aria-expanded={isOpen}
                className="group mb-1 flex items-center gap-2 rounded-sm px-1 py-0.5 font-pixel text-sm hover:bg-muted/30 focus-visible:bg-muted/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20 transition-colors cursor-pointer select-none"
              >
                <FolderIcon
                  aria-hidden="true"
                  className={cn(
                    "size-4 transition-transform",
                    folderColors[groupIndex % folderColors.length].icon,
                  )}
                />
                <span
                  className={folderColors[groupIndex % folderColors.length].text}
                >
                  {group.year}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="ml-2 overflow-hidden"
                  >
                    {group.projects.map((project, index) => (
                      <WorkRow
                        key={project.id}
                        project={project}
                        index={index}
                        onPreviewStart={handlePreviewStart}
                        onPreviewEnd={handlePreviewEnd}
                        showHoverPreview={showHoverPreview}
                      />
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {showPreview && activeProject ? (
          <motion.div
            key={activeProject.id}
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
            exit={{ opacity: 0, scale: 0.95, rotate: 0 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: springX, y: springY }}
            className="pointer-events-none fixed left-0 top-0 z-50 w-[300px]"
          >
            <div className="overflow-hidden rounded-md border bg-background shadow-xl shadow-black/10">
              {hasImage ? (
                <Image
                  src={activeProject.image!}
                  alt={activeProject.imageAlt ?? ""}
                  width={600}
                  height={338}
                  className="aspect-video w-full object-cover"
                />
              ) : (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-1.5 bg-muted/40 text-muted-foreground">
                  <ImageIcon className="size-8 stroke-[1.25] text-muted-foreground/60" />
                </div>
              )}
              <div className="border-t px-3 py-1.5 font-mono text-[11px] text-muted-foreground">
                {activeProject.title}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default ProjectExplorer;
