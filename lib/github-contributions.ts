import type {
  ContributionDay,
  NewRepository,
} from "@/components/ui/github-map";

/** Daily contributions for @goldstac (2025-11-23 to 2026-11-26), fetched 2026-11-26. */
const START_DATE = "2025-11-23";

const DAILY_COUNTS = [
  0, 0, 2, 3, 0, 0, 0, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 13, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 34,
  2, 0, 0, 6, 6, 0, 0, 0, 6, 14, 5, 4, 6, 0, 0, 0, 7, 0, 10, 9,
  8, 0, 0, 40, 71, 125, 1, 7, 0, 140, 0, 3, 5, 9, 49, 5, 2, 39, 43, 13,
  28, 2, 27, 23, 6, 10, 11, 2, 8, 1, 13, 8, 3, 1, 13, 29, 0, 5, 7, 0,
  3, 5, 5, 0, 0, 0, 13, 0, 9, 12, 33, 8, 8, 3, 5, 1, 4, 8, 9, 15,
  12, 4, 3, 5, 0, 14, 16, 4, 19, 39, 1, 0, 0, 0, 3, 1, 16, 25, 16, 8,
  9, 2, 0, 7, 5, 6, 10, 6, 0, 4, 0, 4, 0, 0, 11, 3, 1, 14, 11, 3,
  10, 6, 3, 2, 0, 1, 0, 26, 0, 4, 3, 8, 2, 1, 0, 4, 0, 0, 0, 14,
  0, 0, 0, 0, 0, 0, 0, 3, 12, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0,
  1, 5, 0, 2, 0, 1, 0, 0, 0,
];

/** Public repositories launched on each day, with their current star counts. */
const NEW_REPOSITORIES: Readonly<Record<string, NewRepository[]>> = {
  "2025-11-26": [{ name: "c-python-ctypes-example", stars: 0 }],
  "2025-12-01": [{ name: "My-First-Program-In-Go", stars: 1 }],
  "2026-02-24": [{ name: "Protect-Punch", stars: 1 }],
  "2026-06-09": [{ name: "goldstac", stars: 0 }],
  "2026-06-10": [{ name: "cliculator", stars: 0 }],
  "2026-06-14": [{ name: "pytop", stars: 1 }],
  "2026-06-19": [{ name: "arch-init", stars: 1 }],
  "2026-06-22": [{ name: "waybar-dotfile", stars: 0 }],
  "2026-06-23": [{ name: "pacman-wrapper", stars: 0 }],
  "2026-06-29": [{ name: "arch-simulator", stars: 0 }],
  "2026-07-04": [{ name: "talon-os-simulation", stars: 3 }],
  "2026-07-08": [{ name: "omarchy", stars: 0 }],
  "2026-07-18": [{ name: "Trying-Rust", stars: 1 }],
  "2026-07-19": [{ name: "n8n-self-hosted-docker", stars: 1 }],
  "2026-07-20": [{ name: "VibeVim", stars: 0 }, { name: "quantum-nvim", stars: 2 }, { name: "dotfiles", stars: 0 }],
  "2026-07-21": [{ name: "quantum-theme-website", stars: 2 }],
  "2026-07-22": [{ name: "loadstringfile.nvim", stars: 1 }],
  "2026-07-23": [{ name: "Webview-Test", stars: 0 }, { name: "writestringfile.nvim", stars: 1 }],
  "2026-07-25": [{ name: "createstringfile.nvim", stars: 1 }, { name: "stringfile.nvim", stars: 0 }],
  "2026-07-29": [{ name: "donations", stars: 0 }],
  "2026-07-31": [{ name: "rael", stars: 1 }],
  "2026-08-01": [{ name: "bubbletea-go-practice", stars: 0 }, { name: ".github", stars: 1 }],
  "2026-08-04": [{ name: "bgit", stars: 1 }],
  "2026-08-05": [{ name: "trying-zig", stars: 0 }, { name: "trying-odin", stars: 0 }],
  "2026-08-07": [{ name: "fast-type", stars: 0 }],
  "2026-08-08": [{ name: "dogetothemoon-sim", stars: 0 }],
  "2026-08-10": [{ name: "vibe-discord", stars: 0 }],
  "2026-08-11": [{ name: "shine-kernel", stars: 0 }],
  "2026-08-12": [{ name: "SkullVension-Auth", stars: 0 }],
  "2026-08-16": [{ name: "snippad", stars: 0 }],
  "2026-08-18": [{ name: "libadwaita-notes-app", stars: 1 }],
  "2026-08-20": [{ name: "website", stars: 0 }, { name: "pandabot", stars: 0 }, { name: "taskman", stars: 1 }],
  "2026-08-26": [{ name: "metro-gate", stars: 0 }],
  "2026-08-28": [{ name: "studydump", stars: 0 }],
  "2026-08-29": [{ name: "bonkerus-study-hub", stars: 0 }, { name: "testing-claude-web", stars: 0 }],
  "2026-09-04": [{ name: "discord-clone", stars: 0 }],
  "2026-09-06": [{ name: "portfolio", stars: 3 }],
  "2026-09-07": [{ name: "su-bot", stars: 1 }],
  "2026-09-22": [{ name: "quran", stars: 1 }],
  "2026-09-28": [{ name: "talon-apex-simulation", stars: 2 }],
  "2026-10-04": [{ name: "Miku", stars: 0 }],
  "2026-10-14": [{ name: "signed", stars: 0 }],
  "2026-10-20": [{ name: "quran-app-website", stars: 1 }],
  "2026-11-05": [{ name: ".github-codeverse", stars: 0 }],
  "2026-11-23": [{ name: "incoming", stars: 0 }],
};

export const contributionTotal = 1437;
export const newRepositoryCount = 54;

export const githubContributions: ContributionDay[] = DAILY_COUNTS.map(
  (count, index) => {
    const date = new Date(Date.parse(`${START_DATE}T00:00:00Z`) + index * 86_400_000)
      .toISOString()
      .slice(0, 10);
    const newRepositories = NEW_REPOSITORIES[date];
    return newRepositories ? { date, count, newRepositories } : { date, count };
  },
);
