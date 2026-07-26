import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { DecorativeRule, SectionEyebrow } from "@/components/Accents";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Janene Marie of Chatham Weaves. Nantucket baskets and jewelry woven by hand in Chatham, Cape Cod.",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <section className="page-top pb-16 lg:pb-20">
        <div className="site-container grid items-center gap-split lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow accent="coral">About the Maker</SectionEyebrow>
            <DecorativeRule motif="hydrangea" className="mt-4 max-w-[11rem]" />
            <h1 className="mt-5 font-serif text-[2.35rem] tracking-tight text-navy md:text-5xl">
              {siteConfig.maker}
            </h1>
            <p className="mt-2 font-serif text-lg italic text-charcoal-soft">
              {siteConfig.fullName}
            </p>
            <p className="mt-5 max-w-md font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
              Janene first fell in love with Nantucket baskets while vacationing
              on the island as a youth. She promised herself she would one day
              learn to weave, and after years of tutelage and East Coast weaving
              conferences, that promise became this Chatham studio.
            </p>
            <p className="mt-4 max-w-md font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
              Today she weaves full time by hand: baskets, bracelets, wedding
              pieces, memorials, and custom commissions. Every weave is an act
              of love.
            </p>
            <p className="mt-6 font-script text-xl text-oxblood-faded">
              handmade on Cape Cod
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="photo-plate photo-natural rotate-[-0.4deg]">
              <div className="relative aspect-[16/11] overflow-hidden bg-linen">
                <Image
                  src="/images/studio/studio-18.jpeg"
                  alt="Handwoven Nantucket basket totes by Chatham Weaves"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-dashed border-seafoam/30 bg-cream/70 section-y-sm">
        <div className="site-container grid gap-split lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="photo-plate photo-natural rotate-[0.45deg]">
              <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                <Image
                  src="/images/studio/studio-08.jpeg"
                  alt="Black Nantucket clutch with ivory shell detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionEyebrow accent="seafoam">The Studio</SectionEyebrow>
            <h2 className="mt-3 font-serif text-[1.65rem] tracking-tight text-navy md:text-[1.85rem]">
              Weaving from Chatham
            </h2>
            <p className="mt-4 font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
              {siteConfig.contact.hours}
            </p>

            <h3 className="mt-8 label-archival text-oxblood">
              Currently Showcasing
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.showcase.map((place) => (
                <li key={place.name} className="font-serif text-sm text-navy">
                  <span className="block">{place.name}</span>
                  <span className="text-charcoal-soft italic">
                    {place.location}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/commissions"
                className="inline-flex rounded-full border border-oxblood/40 bg-oxblood px-6 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-white transition-colors hover:bg-navy hover:border-navy"
              >
                Commission a Piece
              </Link>
              <Link
                href="/collection"
                className="inline-flex rounded-full border border-dashed border-seafoam/50 px-6 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-seafoam transition-colors hover:bg-seafoam hover:text-white"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y-sm">
        <div className="site-container">
          <div className="mb-8 text-center">
            <p className="font-script text-xl text-seafoam">from the studio</p>
          </div>
          <div className="grid grid-cols-3 gap-thumbs">
            {[
              {
                src: "/images/studio/studio-14.jpeg",
                alt: "Nantucket lightship basket among flowers",
              },
              {
                src: "/images/studio/studio-05.jpeg",
                alt: "Flower girls with handwoven Nantucket baskets",
              },
              {
                src: "/images/studio/studio-11.jpeg",
                alt: "Custom engraved wooden basket base",
              },
            ].map((photo, i) => (
              <div
                key={photo.src}
                className={`photo-plate photo-natural !p-1.5 !pb-1.5 ${
                  i % 2 === 0 ? "rotate-[-0.35deg]" : "rotate-[0.35deg]"
                }`}
              >
                <div className="relative aspect-square overflow-hidden bg-linen">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
