import { siteConfig } from "@/config/site";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt =
  "Li Productions — building tools, apps, and systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function handler() {
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
        <div
          style={{
            fontSize: "18px",
            color: "#666666",
            fontFamily: "monospace",
            marginTop: "8px",
          }}
        >
          building tools, apps, and systems
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
