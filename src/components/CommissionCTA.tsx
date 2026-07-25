import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface CommissionCTAProps {
  imageSrc?: string;
  imageAlt?: string;
}

export function CommissionCTA({
  imageSrc = "/images/lifestyle/commissions.jpg",
  imageAlt = "Custom commissioned Chatham Weaves piece",
}: CommissionCTAProps) {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 border border-rule bg-cream/60 p-6 md:grid-cols-12 md:gap-10 md:p-10 lg:p-12">
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
            <p className="label-archival text-oxblood">Made for You</p>
            <hr className="rule-short mt-4" />
            <h2 className="mt-5 font-serif text-[1.85rem] tracking-tight text-navy md:text-[2.35rem] md:leading-snug">
              Commission a Piece
            </h2>
            <p className="mt-5 max-w-md font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
              Custom Nantucket baskets, jewelry, and heirloom pieces designed
              around your story — weddings, gifts, memorials, and everyday
              treasures.
            </p>
            <p className="mt-4 font-script text-xl text-oxblood-faded">
              tell us what you imagine
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/commissions"
                className="inline-flex border border-navy/40 bg-navy px-6 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-oxblood hover:border-oxblood"
              >
                Commission a Piece
              </Link>
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-sm italic text-charcoal-soft transition-colors hover:text-oxblood"
              >
                or message on Instagram →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
