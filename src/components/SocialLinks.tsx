import { siteConfig } from "@/config/site";

interface IconProps {
  className?: string;
  size?: number;
}

export function InstagramIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M14.5 8.5V6.8c0-.7.4-1.3 1.3-1.3H17V3h-2c-2.3 0-3.8 1.6-3.8 4v1.5H9V11h2.2v10h3.3V11h2.3l.5-2.5h-2.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  onNavigate?: () => void;
}

/** Instagram + Facebook icon links for header / footer / mobile menu. */
export function SocialLinks({
  className = "",
  iconSize = 18,
  onNavigate,
}: SocialLinksProps) {
  const linkClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-seafoam/35 text-seafoam transition-colors hover:border-oxblood/40 hover:bg-oxblood/10 hover:text-oxblood";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={siteConfig.social.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={linkClass}
        aria-label="Instagram"
      >
        <InstagramIcon size={iconSize} />
      </a>
      <a
        href={siteConfig.social.facebook.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={linkClass}
        aria-label="Facebook"
      >
        <FacebookIcon size={iconSize} />
      </a>
    </div>
  );
}
