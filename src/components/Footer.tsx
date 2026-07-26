import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";
import { DecorativeRule, Hydrangea } from "@/components/Accents";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream">
      <DecorativeRule motif="hydrangea" className="mx-auto max-w-xs pt-10 opacity-80" />
      <div className="site-container py-12 lg:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex transition-opacity hover:opacity-85"
            >
              <Logo size="sm" />
            </Link>
            <p className="mt-4 font-serif text-sm italic leading-relaxed text-charcoal-soft">
              Nantucket baskets and jewelry woven by hand by {siteConfig.maker}{" "}
              in Chatham, Cape Cod.
            </p>
            <p className="mt-4 flex items-center gap-2 font-script text-lg text-oxblood-faded">
              with care <Hydrangea className="ornament-sky" size={16} />
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-7 gap-y-3"
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
            <SocialLinks />
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
