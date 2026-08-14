import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
}

/**
 * Brand button component.
 * variant="primary"   → deep purple fill (main CTAs)
 * variant="secondary" → purple outline (secondary actions)
 * variant="outline"   → white border on dark backgrounds
 * variant="gold"      → gold fill (phone/WhatsApp actions)
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base
          "inline-flex items-center justify-center gap-2 font-semibold rounded-full",
          "transition-all duration-200 cursor-pointer",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // Size
          size === "sm" && "px-4 py-2 text-xs",
          size === "md" && "px-6 py-3 text-sm",
          size === "lg" && "px-8 py-4 text-base",
          // Variant
          variant === "primary" &&
            "bg-brand-purple text-white hover:bg-brand-purple-dark focus:ring-brand-purple",
          variant === "secondary" &&
            "border-2 border-brand-purple text-brand-purple hover:bg-brand-lavender focus:ring-brand-purple",
          variant === "outline" &&
            "border-2 border-white text-white hover:bg-white hover:text-brand-purple focus:ring-white",
          variant === "gold" &&
            "bg-brand-gold text-white hover:bg-brand-gold-dark focus:ring-brand-gold",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;