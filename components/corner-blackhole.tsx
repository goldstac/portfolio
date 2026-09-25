"use client";

import { BlackholeBackground } from "@junhoyeo/blackhole";
import { useEffect, useState } from "react";

export function CornerBlackHole() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 right-0 z-10 h-[300px] w-[300px] opacity-60 mix-blend-multiply dark:mix-blend-screen"
    >
      <BlackholeBackground
        quality="low"
        cameraDistance={12}
        fieldOfView={70}
        enableOrbit
        orbitSpeed={0.08}
        showAccretionDisk
        useDiskTexture={false}
        enableLorentzTransform
        enableDopplerShift
        enableBeaming
        bloomStrength={0.4}
        bloomRadius={0.3}
        bloomThreshold={0.7}
        resolutionScale={0.5}
        className="h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-l from-background/40 via-transparent to-transparent" />
    </div>
  );
}
