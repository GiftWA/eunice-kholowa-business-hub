import Image from "next/image";
import Link from "next/link";

/**
 * Brand logo using the actual logo file.
 * Transparent PNG required for correct display on all backgrounds.
 */
export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Eunice Kholowa Business Hub — Home"
      className="flex items-center shrink-0"
    >
      <Image
        src="/images/logo.png"
        alt="Eunice Kholowa Business Hub — Learn. Create. Start. Grow."
        width={220}
        height={60}
        priority
        className="h-20 w-auto object-contain"
      />
    </Link>
  );
}