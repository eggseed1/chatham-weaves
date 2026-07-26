import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  DecorativeRule,
  Hydrangea,
  Scallop,
  Wave,
} from "@/components/Accents";

interface HeroProps {
  imageSrc: string;
  imageAlt?: string;
}

export function Hero({
  imageSrc,
  imageAlt = "Handmade Nantucket weave by Chatham Weaves",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-ivory page-top pb-16 lg:pb-24">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] texture-coastal opacity-80 lg:block"
        aria-hidden
      />
      <Hydrangea
        className="pointer-events-none absolute right-[8%] top-28 hidden animate-float ornament-sky opacity-70 lg:block"
        size={28}
      />
      <Scallop
        className="pointer-events-none absolute bottom-16 right-[18%] hidden ornament-coral opacity-60 lg:block"
        size={26}
      />

      <div className="site-container relative grid items-end gap-split lg:grid-cols-12">
        <div className="lg:col-span-8 lg:pr-4">
          <div className="photo-plate photo-natural rotate-[-0.4deg] md:rotate-[-0.6deg]">
            <div className="relative aspect-[5/4] overflow-hidden bg-linen md:aspect-[16/11]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 px-1">
              <p className="font-script text-[1.2rem] text-oxblood-faded">
                woven by hand by Janene
              </p>
              <Wave className="ornament-sky" size={32} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 lg:mb-6">
          <DecorativeRule motif="scallop" className="max-w-[11rem] animate-fade-up" />
          <h1 className="animate-fade-up delay-100 mt-5 font-serif text-[2.35rem] leading-[1.15] tracking-tight text-navy md:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="animate-fade-up delay-200 mt-5 max-w-sm font-serif text-[0.98rem] italic leading-relaxed text-charcoal-soft">
            {siteConfig.tagline}
          </p>
          <p className="animate-fade-up delay-200 mt-3 font-script text-lg text-seafoam">
            baskets, bracelets & commissions by Janene Marie
          </p>
          <div className="animate-fade-up delay-300 mt-8">
            <Link
              href="/collection"
              className="inline-flex items-center gap-2 rounded-full border border-seafoam/50 bg-seafoam px-6 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-white transition-colors hover:bg-navy hover:border-navy"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
