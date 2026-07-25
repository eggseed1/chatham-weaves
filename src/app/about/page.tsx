import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Janene Marie of Chatham Weaves — handmade Nantucket basket weaving, jewelry, and coastal craftsmanship from Chatham, Cape Cod.",
};

const sections = [
  {
    id: "maker",
    title: "The Maker",
    body: `[PLACEHOLDER: Introduce Janene Marie in her own voice — a warm, personal paragraph about who she is and how Chatham Weaves began.]

Chatham Weaves is the studio practice of Janene Marie, creating handmade Nantucket baskets, jewelry, and accessories from Chatham, Cape Cod.`,
  },
  {
    id: "story",
    title: "Background",
    body: `[PLACEHOLDER: Share how Janene learned to weave, mentors, or formative moments. Keep it personal and boutique — not corporate biography.]

What began as a love of traditional New England craft has grown into a collection of pieces worn and carried through Cape Cod summers, weddings, and quiet everyday rituals.`,
  },
  {
    id: "inspiration",
    title: "Cape Cod Inspiration",
    body: `Chatham’s fishing village character, lighthouse mornings, and coastal gatherings shape the work — not through literal nautical motifs, but through materials, palette, and the pace of handmade making.

[PLACEHOLDER: Add Janene’s personal connection to Chatham / Nantucket weaving tradition.]`,
  },
  {
    id: "craft",
    title: "Craftsmanship",
    body: `Every piece is woven by hand using time-honored Nantucket basket techniques. The process is slow and deliberate — cane and hardwood shaped into forms meant to be held, worn, and passed down.`,
  },
  {
    id: "materials",
    title: "Materials",
    body: `Cherry, walnut, ebony, ivory and ivory alternatives, bleached weaves, shell end caps, leather accents, and custom name plates appear throughout the collection.

[PLACEHOLDER: Confirm preferred material language and any ethical/sourcing notes Janene wants shared.]`,
  },
  {
    id: "process",
    title: "Process",
    body: `From first conversation to finished weave, each commission is shaped around the wearer or the occasion. Sizing, wood selection, and finishing details are considered carefully before a single strand is set.`,
  },
  {
    id: "philosophy",
    title: "Philosophy",
    body: `These pieces are meant to be lived with — carried to luncheons, worn stacked at beach clubs, gifted at birthdays, and kept as quiet heirlooms. Beauty and usefulness belong together.`,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-ivory">
      <section className="relative min-h-[70vh] overflow-hidden bg-navy">
        <Image
          src="/images/lifestyle/about.jpg"
          alt="Chatham, Cape Cod — home of Chatham Weaves"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-navy/45" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-20">
          <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-linen/90">
            About
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl tracking-tight text-white md:text-6xl">
            {siteConfig.fullName}
          </h1>
          <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-linen/90">
            Artisan Nantucket weaves from a small fishing village on Cape Cod.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-linen lg:sticky lg:top-28">
            <Image
              src="/images/lifestyle/story.jpg"
              alt="Coastal Chatham inspiration for handmade weaves"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-16 lg:col-span-7">
          {sections.map((section) => (
            <article key={section.id} id={section.id}>
              <h2 className="font-serif text-2xl tracking-tight text-navy md:text-3xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className={`font-sans text-base leading-relaxed ${
                      para.includes("[PLACEHOLDER")
                        ? "text-warm-gray italic"
                        : "text-charcoal-soft"
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}

          <div className="border-t border-border pt-10">
            <Link
              href="/commissions"
              className="inline-flex bg-navy px-8 py-3.5 font-sans text-[11px] uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-coastal"
            >
              Commission a Piece
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
