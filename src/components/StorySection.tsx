import Link from "next/link";
import Image from "next/image";

interface StorySectionProps {
  imageSrc: string;
  imageAlt?: string;
}

export function StorySection({
  imageSrc,
  imageAlt = "The maker at work weaving Nantucket baskets",
}: StorySectionProps) {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative aspect-[4/5] overflow-hidden bg-linen">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="lg:py-8">
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-warm-gray">
            The Craft
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Handwoven with patience, meant to be lived with
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-charcoal-soft">
            Each Chatham Weaves piece begins with traditional Nantucket
            basket-weaving techniques and ends as something deeply personal —
            a tote for a bride, a cuff worn in memory, a coaster gifted at a
            summer gathering. The work is slow, intentional, and shaped by the
            light and lifestyle of Cape Cod.
          </p>
          <p className="mt-4 font-sans text-base leading-relaxed text-charcoal-soft">
            {/* PLACEHOLDER: refine with maker's own words */}
            [PLACEHOLDER: Add a short personal note from Janene about why she
            weaves.]
          </p>
          <Link
            href="/about"
            className="mt-10 inline-flex font-sans text-[11px] uppercase tracking-[0.22em] text-navy transition-colors hover:text-coastal"
          >
            Read the Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
