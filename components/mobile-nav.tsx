"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

export function MobileNav({ links }: { links: NavItem[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="sm:hidden flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-background/80 backdrop-blur-md shadow-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
        >
          <Menu className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-40">
        {links.map((link) => (
          <DropdownMenuItem key={link.href} asChild>
            <Link
              href={link.href}
              className="cursor-pointer font-mono text-xs"
            >
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
