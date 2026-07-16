import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isExternalUrl(url: string): boolean {
  return url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:");
}

export function isTodoPlaceholder(value?: string): boolean {
  return !value || value.startsWith("TODO:");
}
