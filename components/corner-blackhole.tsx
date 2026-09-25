"use client";

import { BlackholeRenderer } from "@junhoyeo/blackhole";
import { useEffect, useRef } from "react";

type Corner = "bottom-right" | "top-left";

/**
 * Anchored off-screen so only the inner half is visible — a circle that fits
 * inside the viewport reads as a sticker, one that bleeds past the edges reads
 * as part of the page.
 */
const CORNER_STYLE: Record<Corner, { className: string; mask: string }> = {
  "bottom-right": {
    className: "-bottom-24 -right-24 h-[440px] w-[440px] sm:-bottom-28 sm:-right-28 sm:h-[560px] sm:w-[560px]",
    mask: "linear-gradient(315deg, black 45%, transparent 85%)",
  },
  "top-left": {
    className: "-top-24 -left-24 h-[440px] w-[440px] sm:-top-28 sm:-left-28 sm:h-[560px] sm:w-[560px]",
    mask: "linear-gradient(135deg, black 45%, transparent 85%)",
  },
};

/**
 * A real Schwarzschild black hole (ray-marched lensing, accretion disk,
 * Doppler beaming) anchored to a viewport corner and bleeding off-screen.
 * Plain compositing — blend modes flattened the disk into the page and made
 * it read as a static image.
 */
export function CornerBlackHole({ corner = "bottom-right" }: { corner?: Corner }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { className, mask } = CORNER_STYLE[corner];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new BlackholeRenderer({
      canvas,
      quality: "medium",
      cameraDistance: 7,
      fieldOfView: 80,
      enableOrbit: true,
      orbitSpeed: 0.18,
      showAccretionDisk: true,
      useDiskTexture: false,
      enableLorentzTransform: true,
      enableDopplerShift: true,
      enableBeaming: true,
      bloomStrength: 0.8,
      bloomRadius: 0.5,
      bloomThreshold: 0.5,
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
      className={`pointer-events-none fixed z-[35] overflow-hidden ${className}`}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
