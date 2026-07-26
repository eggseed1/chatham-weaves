import Link from "next/link";
import Image from "next/image";
import { DecorativeRule, SectionEyebrow } from "@/components/Accents";

interface StorySectionProps {
  imageSrc: string;
  imageAlt?: string;
}

export function StorySection({
  imageSrc,
  imageAlt = "The maker at work weaving Nantucket baskets",
}: StorySectionProps) {
  return (
    <section className="relative bg-ivory section-y">
      <div className="site-container grid items-center gap-split lg:grid-cols-12">
        <div className="relative lg:col-span-6">
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
            from Nantucket summers ♡
          </p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <SectionEyebrow accent="coral">Meet Janene</SectionEyebrow>
          <DecorativeRule motif="hydrangea" className="mt-4 max-w-[12rem]" />
          <h2 className="mt-5 font-serif text-[1.85rem] tracking-tight text-navy md:text-[2.15rem] md:leading-snug">
            Honoring a tradition first loved on Nantucket
          </h2>
          <p className="mt-6 font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
            Janene Marie first recognized the beauty of Nantucket baskets while
            vacationing on the island as a youth. She promised herself she would
            one day learn to weave, and after years of tutelage and East Coast
            weaving conferences, that promise became this little Chatham studio.
          </p>
          <p className="mt-4 font-script text-xl text-seafoam">
            Every weave is an act of love.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex rounded-full border border-dashed border-oxblood/40 px-5 py-2 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-oxblood transition-colors hover:bg-oxblood hover:text-white"
          >
            Read the Story
          </Link>
        </div>
      </div>
    </section>
  );
}
