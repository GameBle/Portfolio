"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  disabled,
  ariaLabel,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.15);
    y.set(offsetY * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border bg-muted/50 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-muted",
    className,
  );

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
