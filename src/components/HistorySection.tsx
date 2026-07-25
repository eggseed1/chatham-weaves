import Image from "next/image";
import Link from "next/link";
import {
  DecorativeRule,
  Scallop,
  SectionEyebrow,
  Wave,
} from "@/components/Accents";
import { historyImages, historyNotes } from "@/data/history";

/**
 * Archival Nantucket history block for the small-business site —
 * old photographs + lightship basket tradition.
 */
export function HistorySection() {
  const hero = historyImages[0];
  const lightship = historyImages.find((i) => i.id === "south-shoal-lightship");
  const street = historyImages.find((i) => i.id === "main-street-kilburn");
  const lighthouse = historyImages.find((i) => i.id === "brant-point-1880");
  const chart = historyImages.find((i) => i.id === "chart-1860");
  const woodcut = historyImages.find((i) => i.id === "sherburne-1811");

  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 texture-weave opacity-40"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow accent="coral">Island Tradition</SectionEyebrow>
          <DecorativeRule motif="scallop" className="mx-auto mt-4 max-w-xs" />
          <h2 className="mt-5 font-serif text-[1.85rem] tracking-tight text-navy md:text-[2.35rem]">
            {historyNotes.title}
          </h2>
          <p className="mt-4 font-serif text-[0.98rem] italic leading-relaxed text-charcoal-soft">
            {historyNotes.intro}
          </p>
          <p className="mt-3 font-script text-xl text-oxblood-faded">
            from lightship watches to heirloom weaves
          </p>
        </div>

        {/* Featured archival plate + story */}
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            {hero && (
              <figure className="photo-plate rotate-[-0.5deg]">
                <div className="relative aspect-[5/4] overflow-hidden bg-linen">
                  <Image
                    src={hero.src}
                    alt={hero.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover sepia-[0.35] contrast-[1.05]"
                  />
                </div>
                <figcaption className="mt-3 space-y-1 px-1">
                  <p className="font-serif text-sm text-navy">{hero.caption}</p>
                  <p className="font-serif text-[0.65rem] italic text-warm-gray">
                    {hero.credit}
                  </p>
                </figcaption>
              </figure>
            )}
          </div>

          <div className="space-y-5 lg:col-span-6 lg:pt-4">
            {historyNotes.paragraphs.map((para) => (
              <p
                key={para.slice(0, 32)}
                className="font-serif text-[0.98rem] leading-relaxed text-charcoal-soft"
              >
                {para}
              </p>
            ))}

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              {historyNotes.hallmarks.map((h) => (
                <div
                  key={h.label}
                  className="rounded-sm border border-dashed border-seafoam/40 bg-ivory/80 px-4 py-3"
                >
                  <p className="label-archival text-seafoam">{h.label}</p>
                  <p className="mt-1 font-serif text-sm text-charcoal-soft">
                    {h.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo strip — old Nantucket */}
        <div className="mt-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="label-archival flex items-center gap-2 text-oxblood">
              <Wave size={26} className="ornament-coral" />
              Old Nantucket
            </p>
            <p className="font-script text-lg text-seafoam">
              lights, streets & shoals
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[lightship, street, lighthouse, woodcut].filter(Boolean).map((img, i) =>
              img ? (
                <figure
                  key={img.id}
                  className={`photo-plate !p-1.5 !pb-1.5 ${
                    i % 2 === 0 ? "rotate-[-0.4deg]" : "rotate-[0.4deg]"
                  } ${i === 1 || i === 3 ? "md:translate-y-4" : ""}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover sepia-[0.4] contrast-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-2 px-0.5">
                    <p className="font-serif text-[0.7rem] leading-snug text-navy">
                      {img.caption}
                    </p>
                  </figcaption>
                </figure>
              ) : null,
            )}
          </div>
        </div>

        {/* Timeline + chart */}
        <div className="mt-16 grid gap-10 border border-dashed border-seafoam/35 bg-ivory/70 p-6 md:grid-cols-12 md:p-10">
          <div className="md:col-span-5">
            {chart && (
              <figure className="photo-plate rotate-[0.35deg] !p-2 !pb-2">
                <div className="relative aspect-[5/4] overflow-hidden bg-linen">
                  <Image
                    src={chart.src}
                    alt={chart.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center sepia-[0.25]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2 px-1">
                  <p className="font-serif text-xs text-navy">{chart.caption}</p>
                  <p className="font-serif text-[0.6rem] italic text-warm-gray">
                    {chart.credit}
                  </p>
                </figcaption>
              </figure>
            )}
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <SectionEyebrow accent="seafoam">A living timeline</SectionEyebrow>
            <ol className="mt-6 space-y-6">
              {historyNotes.timeline.map((item) => (
                <li key={item.year} className="flex gap-4">
                  <span className="label-archival shrink-0 pt-0.5 text-oxblood">
                    {item.year}
                  </span>
                  <p className="font-serif text-sm leading-relaxed text-charcoal-soft">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Scallop className="ornament-coral" size={20} />
              <Link
                href="/about"
                className="rounded-full border border-dashed border-oxblood/40 px-5 py-2 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-oxblood transition-colors hover:bg-oxblood hover:text-white"
              >
                Read Janene&apos;s Story
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center font-serif text-[0.65rem] italic text-warm-gray">
          Historical photographs & charts are public domain or openly licensed;
          credits appear with each image.
        </p>
      </div>
    </section>
  );
}
