import type { Project } from "@/config/types";

export const projectsSectionConfig = {
  title: "Work",
  liveButtonLabel: "View Product",
  liveTooltip: "Open project",
};

export const projectsConfig: Project[] = [
  {
    id: "lightweight-qa-bot",
    title: "Lightweight QA Bot",
    description:
      "A CPU-friendly chatbot that learns from your Q&A pairs and responds in real-time. Runs locally without heavy dependencies.",
    content: "## What it does\nTakes a set of question-answer pairs, learns the patterns, and responds to new questions using lightweight matching. No GPU required.\n\n## How it works\nBuilt with Python for the NLP logic and C++ for the fast matching core. Uses TF-IDF for similarity scoring and a simple intent-matching system.\n\n## Why\nMost chatbot frameworks are bloated. This one runs on a potato and still gives useful answers.",
    image: "",
    imageAlt: "Lightweight QA Bot",
    liveUrl: "",
    githubUrl: "https://github.com/goldstac/Lightweight-QA-Bot",
    tags: ["Python", "C++", "NLP", "Chatbot"],
    metrics: [
      { icon: "chart", label: "CPU-friendly" },
      { icon: "users", label: "No GPU needed" },
    ],
    year: 2025,
    status: "shipped",
    category: "AI",
    order: 1,
    enabled: true,
  },
  {
    id: "syntheraqr",
    title: "SyntheraQR",
    description:
      "Ultra-modern QR code generator with a web app and CLI. Customize colors, styles, gradients, and export in multiple formats.",
    content: "## What it does\nGenerate QR codes from any text or URL with full customization — foreground/background colors, transparent backgrounds, rounded or dot styles, and gradients.\n\n## CLI version\nThe same rendering engine runs in your terminal. Kitty graphics protocol for inline preview, save as PNG/JPG/SVG/WebP, and decode QR codes back to text. Fully offline.\n\n```bash\ncurl -fsSL https://syntheraqr.netlify.app/install | bash\n```\n\n## Stack\nWeb: HTML, CSS, JS. CLI: built for speed, works offline.",
    image: "",
    imageAlt: "SyntheraQR",
    liveUrl: "https://syntheraqr.netlify.app",
    githubUrl: "https://github.com/Synthera-Qr/synthera-qr-cli",
    tags: ["QR Code", "CLI", "Web", "Offline"],
    metrics: [
      { icon: "chart", label: "100% offline-ready" },
      { icon: "users", label: "Web + CLI" },
    ],
    year: 2025,
    status: "shipped",
    category: "Tools",
    order: 2,
    enabled: true,
  },
];
