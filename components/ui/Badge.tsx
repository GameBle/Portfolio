"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  index?: number;
  className?: string;
}

export function Badge({ label, index = 0, className }: BadgeProps) {
  const isTodo = label.startsWith("TODO:");

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-muted/60 px-3 py-1.5 text-sm text-foreground",
        isTodo && "border-dashed text-muted-foreground",
        className,
      )}
    >
      {label}
    </motion.span>
  );
}
