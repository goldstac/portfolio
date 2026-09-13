import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Li Productions — a builder who codes in C, C++, and Python, explores AI, and dabbles in cybersecurity.",
  alternates: {
    canonical: "https://liproductions.vercel.app/whoami",
  },
};

export default function WhoAmILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
