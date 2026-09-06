"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Check, Copy, Instagram } from "lucide-react";
import { socialSectionConfig, socialsConfig } from "@/config/socials";
import type { SocialIcon, SocialLink } from "@/config/types";
import X from "@/public/x-icon";
import { Kbd } from "./ui/kbd";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const sortedSocials = socialsConfig
  .filter((item) => item.enabled !== false)
  .sort((a, b) => a.order - b.order);

function SocialIconNode({
  icon,
  size = 14,
}: {
  icon: SocialIcon;
  size?: number;
}) {
  switch (icon) {
    case "github":
      return (
        <Image src="/github.svg" alt="GitHub" width={size} height={size} />
      );
    case "x":
      return <X size={String(size)} color="currentColor" />;
    case "instagram":
      return <Instagram size={size} />;
    default:
      return null;
  }
}

const Social = () => {
  const [copied, setCopied] = useState<Record<string, boolean>>({});

  const copyEnabled = useMemo(
    () =>
      sortedSocials.filter((item) => item.action === "copy" && item.copyValue),
    [],
  );

  const handleCopy = (social: SocialLink) => {
    if (!social.copyValue) return;
    navigator.clipboard.writeText(social.copyValue);
    setCopied((prev) => ({ ...prev, [social.id]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [social.id]: false })), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) return;
      const target = copyEnabled.find(
        (item) => item.shortcutKey?.toLowerCase() === e.key.toLowerCase(),
      );
      if (!target) return;
      e.preventDefault();
      handleCopy(target);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [copyEnabled]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="no-js-visible border-t border-dashed pt-6"
    >
      <h2 className="section-heading mb-3">{socialSectionConfig.title}</h2>

      <div className="px-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {sortedSocials.map((social) => {
            const isCopyAction = social.action === "copy";

            if (isCopyAction) {
              return (
                <Tooltip key={social.id}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleCopy(social)}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20"
                    >
                      <SocialIconNode icon={social.icon} />
                      <span>{social.handle}</span>
                      {copied[social.id] ? (
                        <Check className="h-3 w-3 text-green-500" />
                      ) : (
                        <Copy className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                      {social.shortcutKey && <Kbd>{social.shortcutKey}</Kbd>}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copied[social.id] ? "copied!" : social.tooltipDefault}</p>
                  </TooltipContent>
                </Tooltip>
              );
            }

            return (
              <Tooltip key={social.id}>
                <TooltipTrigger asChild>
                  <Link
                    href={social.href ?? "#"}
                    target={social.action === "external" ? "_blank" : undefined}
                    rel={social.action === "external" ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/20"
                  >
                    <SocialIconNode icon={social.icon} />
                    <span>{social.handle}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.tooltipDefault ?? social.platform}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Social;
