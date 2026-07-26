interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md";
}

/** Simple basket + scallop mark, evenly padded in the circle. */
export function LogoMark({
  size = 56,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle cx="24" cy="24" r="22.5" fill="#EFE4D2" />

      {/* Artwork centered: handle top ~10.5, basket bottom ~37.5 */}
      <path
        d="M16 21.5c0-7.2 3.6-11 8-11s8 3.8 8 11"
        stroke="#C45C5C"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M13.5 23h21l-1.5 12.5a2 2 0 0 1-2 1.8H17a2 2 0 0 1-2-1.8L13.5 23Z"
        fill="#F6EEE3"
        stroke="#7FA8A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M15 27.2h18M15.6 31.8h16.8"
        stroke="#7FA8A0"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />

      <path
        d="M24 28c-2.4 0-4.2 1.25-4.9 2.9 1.2 1 2.9 1.65 4.9 1.65s3.7-.65 4.9-1.65C28.2 29.25 26.4 28 24 28Z"
        fill="#FFFAF3"
        stroke="#D4847A"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M24 28.3v4"
        stroke="#D4847A"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Larger simplified mark + serif wordmark.
 */
export function Logo({
  className = "",
  showWordmark = true,
  size = "md",
}: LogoProps) {
  const markPx = size === "sm" ? 48 : 58;
  const titleClass =
    size === "sm" ? "text-lg md:text-xl" : "text-xl md:text-2xl";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark size={markPx} className="shrink-0" />
      {showWordmark && (
        <span className="flex flex-col justify-center leading-none">
          <span
            className={`font-serif tracking-[0.03em] text-navy ${titleClass}`}
          >
            Chatham Weaves
          </span>
          <span className="mt-1.5 font-script text-[1.05rem] leading-none text-oxblood-faded">
            by Janene Marie
          </span>
        </span>
      )}
    </span>
  );
}
