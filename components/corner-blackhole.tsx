"use client";

import { BlackholeRenderer } from "@junhoyeo/blackhole";
import { useEffect, useRef } from "react";

type Corner = "bottom-right" | "top-left";

const CORNER_CLASSES: Record<Corner, string> = {
  "bottom-right": "bottom-0 right-0",
  "top-left": "top-0 left-0",
};

/** Radial mask fades the canvas into the page so it never reads as a rectangle. */
const CORNER_MASK: Record<Corner, string> = {
  "bottom-right":
    "radial-gradient(ellipse 85% 85% at 75% 75%, black 35%, transparent 100%)",
  "top-left":
    "radial-gradient(ellipse 85% 85% at 25% 25%, black 35%, transparent 100%)",
};

/**
 * A real Schwarzschild black hole (ray-marched gravitational lensing,
 * accretion disk, Doppler beaming) tucked into a page corner. Sits behind
 * the content column, so it lives in the viewport margins; the radial mask
 * dissolves its edges and the blend mode drops it onto the page background
 * (multiply on light, screen on dark) instead of floating as an image.
 */
export function CornerBlackHole({ corner = "bottom-right" }: { corner?: Corner }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new BlackholeRenderer({
      canvas,
      quality: "medium",
      cameraDistance: 8,
      fieldOfView: 75,
      enableOrbit: true,
      orbitSpeed: 0.1,
      showAccretionDisk: true,
      useDiskTexture: false,
      enableLorentzTransform: true,
      enableDopplerShift: true,
      enableBeaming: true,
      bloomStrength: 0.6,
      bloomRadius: 0.4,
      bloomThreshold: 0.6,
      resolutionScale: 1.0,
    });

    renderer.start();
    return () => {
      renderer.stop();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed z-[35] h-[260px] w-[260px] overflow-hidden mix-blend-multiply dark:mix-blend-screen sm:h-[340px] sm:w-[340px] ${CORNER_CLASSES[corner]}`}
      style={{
        maskImage: CORNER_MASK[corner],
        WebkitMaskImage: CORNER_MASK[corner],
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
