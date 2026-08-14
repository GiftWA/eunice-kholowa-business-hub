import Link from "next/link";

/**
 * Brand logo — SVG monogram + text treatment.
 * To replace with actual logo file: swap the <svg> block
 * with <Image src="/images/logo.png" ... /> and remove the text.
 */
export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group flex-shrink-0"
      aria-label="Eunice Kholowa Business Hub — Home"
    >
      {/* EK Monogram Mark */}
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Purple background */}
        <rect width="52" height="52" rx="5" fill="#3B1F7A" />

        {/* Gold "E" — vertical bar */}
        <rect x="7" y="10" width="5" height="32" fill="#D4A017" />
        {/* Gold "E" — top horizontal */}
        <rect x="7" y="10" width="15" height="4" fill="#D4A017" />
        {/* Gold "E" — middle horizontal */}
        <rect x="7" y="24" width="12" height="4" fill="#D4A017" />
        {/* Gold "E" — bottom horizontal */}
        <rect x="7" y="38" width="15" height="4" fill="#D4A017" />

        {/* Divider */}
        <rect x="25" y="10" width="1" height="32" fill="rgba(255,255,255,0.25)" />

        {/* White "K" — vertical bar */}
        <rect x="28" y="10" width="4" height="32" fill="white" />
        {/* White "K" — top diagonal */}
        <path
          d="M32 26 L44 10"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* White "K" — bottom diagonal */}
        <path
          d="M32 26 L44 42"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Text */}
      <div className="leading-none">
        <span className="block text-base font-extrabold text-brand-purple tracking-wide leading-tight">
          EUNICE KHOLOWA
        </span>
        <span className="block text-sm font-bold text-brand-gold tracking-wider leading-tight mt-0.5">
          — BUSINESS HUB —
        </span>
        <span className="block text-[10px] text-gray-500 font-medium tracking-wide mt-1">
          Learn. Create. Start. Grow.
        </span>
      </div>
    </Link>
  );
}