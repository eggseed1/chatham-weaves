import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { DecorativeRule, Scallop, SectionEyebrow } from "@/components/Accents";

interface CommissionCTAProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function CommissionCTA({
  imageSrc = "/images/lifestyle/commissions.jpg",
  imageAlt = "Custom commissioned Chatham Weaves piece",
}: CommissionCTAProps) {
  return (
    <section className="bg-ivory section-y">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-sm border border-dashed border-seafoam/40 bg-cream/70 p-6 md:p-10">
          <Scallop
            className="pointer-events-none absolute right-6 top-6 ornament-coral opacity-50"
            size={28}
          />
          <div className="grid items-center gap-split md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="photo-plate photo-natural rotate-[-0.5deg] !p-2 !pb-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <SectionEyebrow accent="coral">Something just for you</SectionEyebrow>
              <DecorativeRule motif="star" className="mt-4 max-w-[10rem]" />
              <h2 className="mt-5 font-serif text-[1.85rem] tracking-tight text-navy md:text-[2.35rem] md:leading-snug">
                Commission a Piece
              </h2>
              <p className="mt-5 max-w-md font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
                Bridal totes, memorial cuffs, stacked bracelets, kitchen
                staples. Janene loves making the piece you&apos;ve been
                imagining.
              </p>
              <p className="mt-4 font-script text-xl text-seafoam">
                tell me what you dream up
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/commissions"
                  className="inline-flex rounded-full border border-oxblood/40 bg-oxblood px-6 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-white transition-colors hover:bg-navy hover:border-navy"
                >
                  Commission a Piece
                </Link>
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-sm italic text-charcoal-soft transition-colors hover:text-seafoam"
                >
                  or message on Instagram →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
