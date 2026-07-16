"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CursorGlow() {
  const isDesktop = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 28 });
  const springY = useSpring(y, { stiffness: 180, damping: 28 });

  useEffect(() => {
    if (!isDesktop) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isDesktop, x, y]);

  if (!isDesktop) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      style={{ x: springX, y: springY }}
    />
  );
}
