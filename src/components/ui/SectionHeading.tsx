import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
  align?: "left" | "center" | "right";
  withUnderline?: boolean;
}

/**
 * Consistent section heading used throughout the homepage.
 * Includes the gold underline accent that appears in the reference design.
 */
export default function SectionHeading({
  title,
  className,
  align = "left",
  withUnderline = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-6",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2 className="text-2xl font-extrabold text-brand-purple uppercase tracking-wide">
        {title}
      </h2>
      {withUnderline && (
        <div
          className={cn("mt-2 h-1 w-16 bg-brand-gold rounded-full", {
            "mx-auto": align === "center",
            "ml-auto": align === "right",
          })}
        />
      )}
    </div>
  );
}