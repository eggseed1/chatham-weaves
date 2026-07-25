import Link from "next/link";

interface InquireButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export function InquireButton({
  href,
  label,
  variant = "primary",
  external = false,
  className = "",
}: InquireButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 font-sans text-[11px] uppercase tracking-[0.22em] transition-colors";
  const styles =
    variant === "primary"
      ? "bg-navy text-ivory hover:bg-coastal"
      : "border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-ivory";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {label}
    </Link>
  );
}
