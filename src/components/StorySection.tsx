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
    <section className="relative bg-ivory py-20 lg:py-28">
      <hr className="rule mx-auto max-w-7xl px-6 lg:px-10" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pt-20">
        <div className="relative lg:col-span-6 lg:translate-x-2">
          <div className="photo-plate photo-natural rotate-[0.5deg]">
            <div className="relative aspect-[4/5] overflow-hidden bg-linen">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-3 ml-2 font-script text-xl text-oxblood-faded -rotate-1">
            from Nantucket summers
          </p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:-translate-y-6">
          <p className="label-archival text-oxblood">The Maker</p>
          <hr className="rule-short mt-4" />
          <h2 className="mt-5 font-serif text-[1.85rem] tracking-tight text-navy md:text-[2.15rem] md:leading-snug">
            Honoring a tradition first loved on Nantucket
          </h2>
          <p className="mt-6 font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
            Janene Marie first recognized the beauty of Nantucket baskets while
            vacationing on the island as a youth. She promised herself she would
            one day learn to weave — and after years of tutelage and East Coast
            weaving conferences, that promise became Chatham Weaves.
          </p>
          <p className="mt-4 font-serif text-[0.98rem] italic leading-relaxed text-charcoal-soft">
            Every weave is an act of love.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex border-b border-oxblood/50 pb-0.5 font-sans text-[0.68rem] uppercase tracking-[0.2em] text-oxblood transition-colors hover:border-oxblood"
          >
            Read the Story
          </Link>
        </div>
      </div>
    </section>
  );
}
