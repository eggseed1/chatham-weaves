import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { historyImages, historyNotes } from "@/data/history";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Janene Marie of Chatham Weaves — Nantucket basket weaving learned through East Coast tutelage and conferences, handwoven in Chatham, Cape Cod.",
};

const sections = [
  {
    id: "beginning",
    title: "A Promise on Nantucket",
    body: `Janene Marie has been interested in the art of Nantucket Basket Weaving since her youth, when she first recognized their beauty while vacationing on the island of Nantucket. Not only did she continue to return to Nantucket, but her interest in the history, tradition, and technique of Nantucket Baskets has only grown. She promised herself that one day she would learn how to weave and honor that special tradition.`,
  },
  {
    id: "craft",
    title: "From Hobby to Calling",
    body: `Through many years of tutelage and traveling to various weaving conferences throughout the East Coast, her hobby has now become a thriving business. What began as a personal vow has become Chatham Weaves — a full-time studio practice rooted in respect for the craft and care for every client.`,
  },
  {
    id: "work",
    title: "What She Creates",
    body: `Janene Marie is able to create almost anything a client desires. The ivory hardware, the variations in weave patterns, the many types of totes and baskets, and the beauty in creating custom bracelets and other accessories truly excite her.

Highlights of the work include Nantucket baskets and bracelets, ivory and scrimshaw details, whale tails, leather accents, wedding pieces, and finishes in gold and silver — alongside classic Nantucket totes.`,
  },
  {
    id: "philosophy",
    title: "Every Weave Is an Act of Love",
    body: `Janene Marie finds joy in trying to make exquisite, meaningful, and original pieces for all her clients. Every weave is an act of love — whether it is a bridal tote, a memorial cuff, a kitchen staple, or a one-of-a-kind commission shaped around a single story.`,
  },
  {
    id: "studio",
    title: "The Studio",
    body: `Janene weaves full time from her home studio in Chatham, Cape Cod. She is always available for a conversation — text is best. From first idea to finished piece, the process stays personal, unhurried, and handmade.`,
  },
];

const studioPhotos = [
  {
    src: "/images/studio/studio-18.jpeg",
    alt: "Nantucket basket totes with shell and whale-tail ivory accents",
    className: "aspect-[5/4]",
  },
  {
    src: "/images/studio/studio-08.jpeg",
    alt: "Black Nantucket clutch with ivory shell ornament",
    className: "aspect-[4/5]",
  },
  {
    src: "/images/studio/studio-14.jpeg",
    alt: "Nantucket lightship basket bowl among rhododendrons",
    className: "aspect-square",
  },
  {
    src: "/images/studio/studio-05.jpeg",
    alt: "Flower girls carrying handwoven Nantucket baskets at a wedding",
    className: "aspect-[5/4]",
  },
  {
    src: "/images/studio/studio-11.jpeg",
    alt: "Custom engraved wooden basket base for a wedding commission",
    className: "aspect-square",
  },
  {
    src: "/images/studio/studio-19.jpeg",
    alt: "Archival illustration of classic Nantucket basket forms",
    className: "aspect-[5/4]",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:pb-6">
              <p className="label-archival text-oxblood">About the Maker</p>
              <hr className="rule-short mt-4" />
              <h1 className="mt-5 font-serif text-[2.35rem] tracking-tight text-navy md:text-5xl">
                {siteConfig.maker}
              </h1>
              <p className="mt-2 font-serif text-lg italic text-charcoal-soft">
                {siteConfig.fullName}
              </p>
              <p className="mt-5 max-w-md font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
                Handwoven Nantucket baskets, jewelry, and accessories — created
                with reverence for island tradition and joy for every client.
              </p>
              <p className="mt-6 font-script text-xl text-oxblood-faded">
                every weave is an act of love
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="photo-plate photo-natural rotate-[-0.45deg]">
                <div className="relative aspect-[16/11] overflow-hidden bg-linen">
                  <Image
                    src="/images/studio/studio-18.jpeg"
                    alt="Handwoven Nantucket basket totes by Chatham Weaves"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-20">
        <div className="lg:col-span-5">
          <div className="relative lg:sticky lg:top-28 space-y-5">
            <div className="photo-plate photo-natural rotate-[0.4deg]">
              <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                <Image
                  src="/images/studio/studio-08.jpeg"
                  alt="Close-up of a black Nantucket clutch with ivory shell detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="photo-plate rotate-[-0.35deg] !p-1.5 !pb-1.5">
              <div className="relative aspect-[5/4] overflow-hidden bg-linen">
                <Image
                  src="/images/history/south-shoal-lightship.jpg"
                  alt="Historic Nantucket New South Shoal Lightship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover sepia-[0.4]"
                />
              </div>
              <p className="mt-2 px-1 font-script text-base text-oxblood-faded">
                where the craft began
              </p>
            </div>
            <div className="texture-weave border border-border px-4 py-4">
              <p className="label-archival text-oxblood">Studio Hours</p>
              <p className="mt-3 font-serif text-sm leading-relaxed text-charcoal-soft">
                {siteConfig.contact.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-14 lg:col-span-7">
          {sections.map((section) => (
            <article key={section.id} id={section.id}>
              <h2 className="font-serif text-xl tracking-tight text-navy md:text-2xl">
                {section.title}
              </h2>
              <hr className="rule-short mt-3" />
              <div className="mt-4 space-y-4">
                {section.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="font-serif text-[0.98rem] leading-relaxed text-charcoal-soft"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}

          <article id="tradition">
            <h2 className="font-serif text-xl tracking-tight text-navy md:text-2xl">
              The Lightship Tradition
            </h2>
            <hr className="rule-short mt-3" />
            <p className="mt-4 font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
              {historyNotes.intro}
            </p>
            <p className="mt-4 font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
              {historyNotes.paragraphs[0]}
            </p>
            <p className="mt-4 font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
              {historyNotes.paragraphs[1]}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {historyNotes.hallmarks.map((h) => (
                <li
                  key={h.label}
                  className="border border-dashed border-seafoam/35 bg-cream/60 px-3 py-3"
                >
                  <p className="label-archival text-seafoam">{h.label}</p>
                  <p className="mt-1 font-serif text-sm text-charcoal-soft">
                    {h.detail}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {historyImages.slice(0, 4).map((img) => (
                <figure key={img.id} className="photo-plate !p-1 !pb-1">
                  <div className="relative aspect-square overflow-hidden bg-linen">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="20vw"
                      className="object-cover sepia-[0.35]"
                      loading="lazy"
                    />
                  </div>
                </figure>
              ))}
            </div>
            <p className="mt-3 font-serif text-[0.65rem] italic text-warm-gray">
              Archival images are public domain or openly licensed.
            </p>
          </article>

          <article id="showcase">
            <h2 className="font-serif text-xl tracking-tight text-navy md:text-2xl">
              Currently Showcasing
            </h2>
            <hr className="rule-short mt-3" />
            <ul className="mt-6 space-y-0">
              {siteConfig.showcase.map((place) => (
                <li
                  key={place.name}
                  className="border-b border-rule py-4 font-serif text-sm text-navy"
                >
                  <span className="block">{place.name}</span>
                  <span className="mt-1 block text-charcoal-soft italic">
                    {place.location}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <div className="flex flex-col gap-4 border-t border-rule pt-10 sm:flex-row sm:items-center">
            <Link
              href="/commissions"
              className="inline-flex border border-navy/40 bg-navy px-6 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-oxblood hover:border-oxblood"
            >
              Commission a Piece
            </Link>
            <a
              href={siteConfig.social.chamber.url}
              target="_blank"
              rel="noopener noreferrer"
              className="label-archival transition-colors hover:text-oxblood"
            >
              Chatham Chamber listing →
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 max-w-lg">
            <p className="label-archival text-oxblood">From the Studio</p>
            <h2 className="mt-3 font-serif text-[1.65rem] tracking-tight text-navy md:text-[1.85rem]">
              A closer look at the work
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {studioPhotos.map((photo, i) => (
              <div
                key={photo.src}
                className={`photo-plate photo-natural !p-1.5 !pb-1.5 ${
                  i % 2 === 0 ? "rotate-[-0.3deg]" : "rotate-[0.35deg]"
                } ${i === 1 || i === 4 ? "md:translate-y-4" : ""}`}
              >
                <div className={`relative overflow-hidden bg-linen ${photo.className}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
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
