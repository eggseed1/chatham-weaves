import Link from "next/link";
import { siteConfig } from "@/config/site";
import { DecorativeRule, Hydrangea, TinyBasket } from "@/components/Accents";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream">
      <DecorativeRule motif="hydrangea" className="mx-auto max-w-xs pt-8 opacity-80" />
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-serif text-xl tracking-wide text-navy hover:text-oxblood transition-colors"
            >
              <TinyBasket className="text-seafoam" size={18} />
              {siteConfig.name}
            </Link>
            <p className="mt-3 font-serif text-sm italic leading-relaxed text-charcoal-soft">
              A little Cape Cod weaving studio for Nantucket baskets, bracelets,
              and pieces made with love.
            </p>
            <p className="mt-4 flex items-center gap-2 font-script text-lg text-oxblood-faded">
              with care <Hydrangea className="ornament-sky" size={16} />
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-7 gap-y-3"
            aria-label="Footer"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label-archival transition-colors hover:text-seafoam"
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

        <hr className="rule mt-12 border-dashed" />
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xs text-warm-gray">
            © {year} {siteConfig.fullName}
          </p>
          <p className="font-serif text-xs text-warm-gray">
            Message on Instagram to purchase · text is best
          </p>
        </div>
      </div>
    </footer>
  );
}
