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
    "inline-flex items-center justify-center px-6 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.2em] transition-colors";
  const styles =
    variant === "primary"
      ? "bg-navy text-ivory border border-navy hover:bg-oxblood hover:border-oxblood"
      : "border border-navy/35 text-navy hover:border-oxblood hover:text-oxblood";

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
