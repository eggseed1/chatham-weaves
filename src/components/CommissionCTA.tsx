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
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 opacity-30">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-navy/70" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-linen/80">
          Made for You
        </p>
        <h2 className="mt-4 font-serif text-3xl tracking-tight text-white md:text-5xl">
          Commission a Piece
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-linen/90">
          Custom Nantucket baskets, jewelry, and heirloom pieces designed around
          your story — weddings, gifts, memorials, and everyday treasures.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/commissions"
            className="inline-flex border border-linen/70 px-8 py-3.5 font-sans text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-navy"
          >
            Commission a Piece
          </Link>
          <a
            href={siteConfig.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] uppercase tracking-[0.22em] text-linen/80 transition-colors hover:text-white"
          >
            Or message on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
