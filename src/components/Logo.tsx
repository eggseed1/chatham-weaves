import Image from "next/image";

interface LogoProps {
  /** Invert colors for dark hero backgrounds */
  light?: boolean;
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md";
}

/**
 * Cute Chatham Weaves logo — basket mark + serif wordmark.
 */
export function Logo({
  light = false,
  className = "",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const markPx = size === "sm" ? 34 : 40;
  const titleClass =
    size === "sm"
      ? "text-lg md:text-xl"
      : "text-xl md:text-2xl";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`relative shrink-0 overflow-hidden rounded-full border ${
          light ? "border-white/35 bg-white/95" : "border-border bg-cream"
        }`}
        style={{ width: markPx, height: markPx }}
      >
        <Image
          src="/brand/logo-mark.png"
          alt=""
          width={markPx}
          height={markPx}
          className="object-cover"
          priority
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif tracking-[0.04em] ${titleClass} ${
              light ? "text-white" : "text-navy"
            }`}
          >
            Chatham Weaves
          </span>
          <span
            className={`mt-1 font-sans text-[0.55rem] uppercase tracking-[0.22em] ${
              light ? "text-linen/80" : "text-coastal"
            }`}
          >
            by Janene Marie
          </span>
        </span>
      )}
    </span>
  );
}

/** Inline SVG mark for favicon-sized uses */
export function LogoMarkSvg({
  className = "",
  title = "Chatham Weaves",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <circle cx="32" cy="32" r="30" fill="#F3EBDD" />
      <circle
        cx="32"
        cy="32"
        r="29"
        fill="none"
        stroke="#7FA8A0"
        strokeWidth="1.25"
        opacity="0.55"
      />
      {/* handle */}
      <path
        d="M20 28c0-9 5.5-14 12-14s12 5 12 14"
        fill="none"
        stroke="#C45C5C"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* basket body */}
      <path
        d="M16 30h32l-2.5 22a4 4 0 0 1-4 3.5H22.5a4 4 0 0 1-4-3.5L16 30Z"
        fill="#E8D5B5"
        stroke="#8B6F4E"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* weave lines */}
      <path
        d="M18 35.5h28M19 40.5h26M20 45.5h24M21.5 50.5h21"
        stroke="#B8956A"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* tiny scallop */}
      <path
        d="M32 41.5c-2.4 0-4.2-1.3-5-3 1.2-1.2 3-2 5-2s3.8.8 5 2c-.8 1.7-2.6 3-5 3Z"
        fill="#F7F0E6"
        stroke="#C45C5C"
        strokeWidth="1"
      />
      <path
        d="M32 36.5v5M28.8 37.8l3.2 3.7M35.2 37.8 32 41.5"
        stroke="#C45C5C"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
