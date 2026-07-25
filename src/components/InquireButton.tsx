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
    "inline-flex items-center justify-center rounded-full px-6 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.18em] transition-colors";
  const styles =
    variant === "primary"
      ? "bg-seafoam text-white border border-seafoam hover:bg-navy hover:border-navy"
      : "border border-dashed border-oxblood/45 text-oxblood hover:bg-oxblood hover:text-white hover:border-oxblood";

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
