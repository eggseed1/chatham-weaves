import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream">
      <div className="rule-double" aria-hidden />
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-serif text-xl tracking-wide text-navy hover:text-oxblood transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 font-serif text-sm italic leading-relaxed text-charcoal-soft">
              Handmade Nantucket baskets, jewelry, and accessories woven in
              Chatham, Cape Cod.
            </p>
            <p className="mt-4 font-script text-lg text-oxblood-faded">
              with care
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label-archival transition-colors hover:text-oxblood"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="label-archival text-oxblood transition-colors hover:text-navy"
            >
              Instagram
            </a>
          </nav>
        </div>

        <hr className="rule mt-12" />
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xs text-warm-gray">
            © {year} {siteConfig.fullName}
          </p>
          <p className="font-serif text-xs text-warm-gray">
            Purchases by inquiry via Instagram
          </p>
        </div>
      </div>
    </footer>
  );
}
