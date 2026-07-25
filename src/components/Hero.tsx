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
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-navy">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-navy/40" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 lg:px-10 lg:pb-28">
        <p className="animate-fade-up font-sans text-[11px] uppercase tracking-[0.28em] text-linen/90">
          {siteConfig.fullName}
        </p>
        <h1 className="animate-fade-up delay-100 mt-5 max-w-2xl font-serif text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="animate-fade-up delay-200 mt-5 max-w-md font-sans text-base leading-relaxed text-linen/90 md:text-lg">
          {siteConfig.tagline}
        </p>
        <div className="animate-fade-up delay-300 mt-10">
          <Link
            href="/collection"
            className="inline-flex items-center border border-linen/70 px-8 py-3.5 font-sans text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-navy"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
