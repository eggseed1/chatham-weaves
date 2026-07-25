import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-serif text-2xl tracking-wide text-navy"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal-soft">
              Handmade Nantucket baskets, jewelry, and accessories woven in
              Chatham, Cape Cod.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3"
            aria-label="Footer"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal-soft transition-colors hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] uppercase tracking-[0.2em] text-coastal transition-colors hover:text-navy"
            >
              Instagram
            </a>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-warm-gray">
            © {year} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-warm-gray">
            Purchases by inquiry via Instagram.
          </p>
        </div>
      </div>
    </footer>
  );
}
