import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes safely, resolving conflicts.
 * Use this in every component that accepts a className prop.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}