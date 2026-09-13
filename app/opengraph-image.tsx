import { siteConfig } from "@/config/site";
import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

export const alt =
  "Li Productions — building tools, apps, and systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function handler() {
  const banner = readFileSync(
    path.join(process.cwd(), "public", "images", "banner.png"),
  );
  const base64 = banner.toString("base64");

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundImage: `url(data:image/png;base64,${base64})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />,
    {
      ...size,
    },
  );
}
