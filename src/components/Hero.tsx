import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface HeroProps {
  imageSrc: string;
  imageAlt?: string;
}

export function Hero({
  imageSrc,
  imageAlt = "Handmade Nantucket weave by Chatham Weaves",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-ivory pt-24 pb-16 md:pt-28 md:pb-24">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 texture-weave opacity-60 lg:block"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
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
            <p className="mt-3 px-1 font-script text-[1.15rem] text-oxblood-faded/90">
              woven by hand, Chatham
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 lg:mb-8 lg:translate-y-4">
          <p className="label-archival animate-fade-up text-oxblood">
            Est. Chatham · Cape Cod
          </p>
          <hr className="rule-short mt-4 animate-fade-up delay-100" />
          <h1 className="animate-fade-up delay-100 mt-5 font-serif text-[2.35rem] leading-[1.15] tracking-tight text-navy md:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="animate-fade-up delay-200 mt-5 max-w-sm font-serif text-[0.98rem] italic leading-relaxed text-charcoal-soft">
            {siteConfig.tagline}
          </p>
          <div className="animate-fade-up delay-300 mt-8">
            <Link
              href="/collection"
              className="inline-flex items-center border border-navy/40 px-6 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-navy transition-colors hover:border-oxblood hover:text-oxblood"
            >
              Explore the Collection
            </Link>
          </div>
          <p className="animate-fade-up delay-400 mt-10 max-w-[14rem] font-serif text-xs leading-relaxed text-warm-gray">
            {siteConfig.fullName}
          </p>
        </div>
      </div>
    </section>
  );
}
