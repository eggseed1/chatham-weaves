import type { ReactNode } from "react";

interface AccentProps {
  className?: string;
  size?: number;
}

/** Tiny hand-drawn coastal flourishes — used sparingly for small-shop charm */

export function Scallop({ className = "", size = 22 }: AccentProps) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 24 18"
      fill="none"
      aria-hidden
      className={`ornament ${className}`}
    >
      <path
        d="M12 16.5c-4.2 0-7.6-2.4-9.2-5.8C4.2 8.2 7.6 6 12 6s7.8 2.2 9.2 4.7C19.6 14.1 16.2 16.5 12 16.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M12 6v10.5M7.2 7.8l4.8 8.7M16.8 7.8l-4.8 8.7M4.5 10.8h15"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wave({ className = "", size = 28 }: AccentProps) {
  return (
    <svg
      width={size}
      height={size * 0.4}
      viewBox="0 0 32 12"
      fill="none"
      aria-hidden
      className={`ornament ${className}`}
    >
      <path
        d="M1 7.5c2.5-3 5-3 7.5 0s5 3 7.5 0 5-3 7.5 0 5 3 7.5 0"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hydrangea({ className = "", size = 20 }: AccentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={`ornament ${className}`}
    >
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="8.2" cy="12.2" r="2" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="15.8" cy="12.2" r="2" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="9.5" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="14.5" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12" cy="14.5" r="1.8" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M12 16.5v4M10 20.5h4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarBurst({ className = "", size = 14 }: AccentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`ornament ${className}`}
    >
      <path
        d="M8 1.5v13M1.5 8h13M3.4 3.4l9.2 9.2M12.6 3.4 3.4 12.6"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TinyBasket({ className = "", size = 18 }: AccentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={`ornament ${className}`}
    >
      <path
        d="M4 9h12l-1.2 7.2a1 1 0 0 1-1 .8H6.2a1 1 0 0 1-1-.8L4 9Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 9c0-3 1.5-5 3.5-5s3.5 2 3.5 5"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path d="M5.5 12h9M6 14.5h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function DecorativeRule({
  motif = "scallop",
  className = "",
}: {
  motif?: "scallop" | "wave" | "hydrangea" | "star";
  className?: string;
}) {
  const Motif =
    motif === "wave"
      ? Wave
      : motif === "hydrangea"
        ? Hydrangea
        : motif === "star"
          ? StarBurst
          : Scallop;

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-hidden
    >
      <span className="h-px flex-1 bg-rule" />
      <Motif
        className={
          motif === "hydrangea"
            ? "ornament-sky"
            : motif === "star"
              ? "ornament-coral"
              : ""
        }
        size={motif === "wave" ? 34 : motif === "star" ? 12 : 18}
      />
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}

export function SectionEyebrow({
  children,
  accent = "seafoam",
}: {
  children: ReactNode;
  accent?: "seafoam" | "coral" | "sky";
}) {
  const color =
    accent === "coral"
      ? "text-oxblood"
      : accent === "sky"
        ? "text-sky"
        : "text-seafoam";

  return (
    <p className={`label-archival flex items-center gap-2 ${color}`}>
      <StarBurst size={10} className={accent === "coral" ? "ornament-coral" : accent === "sky" ? "ornament-sky" : ""} />
      {children}
    </p>
  );
}
