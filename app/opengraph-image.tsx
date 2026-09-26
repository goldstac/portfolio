import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt =
  "Li Productions — building tools, apps, and systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function handler() {
  try {
    // Read from the build's own copy — fetching siteConfig.meta.url would
    // return the *previous* deployment's banner during a build.
    const buffer = await readFile(join(process.cwd(), "public", "images", "banner.png"));
    const base64 = buffer.toString("base64");
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
      { ...size },
    );
  } catch {}

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            letterSpacing: "-2px",
          }}
        >
          Li Productions
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#888888",
            fontFamily: "monospace",
          }}
        >
          Luhaidan Ibraheem
        </div>
      </div>
    </div>,
    { ...size },
  );
}
