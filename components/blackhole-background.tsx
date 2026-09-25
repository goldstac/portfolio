"use client";

import { BlackholeBackground } from "@junhoyeo/blackhole";
import { useEffect, useState } from "react";

export function BlackHoleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    >
      <BlackholeBackground
        quality="low"
        cameraDistance={20}
        fieldOfView={60}
        enableOrbit
        orbitSpeed={0.05}
        showAccretionDisk
        useDiskTexture={false}
        enableLorentzTransform
        enableDopplerShift
        enableBeaming
        bloomStrength={0.3}
        bloomRadius={0.4}
        bloomThreshold={0.8}
        resolutionScale={0.4}
        className="h-full w-full opacity-30 dark:opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
    </div>
  );
}
