import Link from "next/link";
import Image from "next/image";
import { CATEGORY_LABELS, type PieceCategory } from "@/types/piece";
import { SectionEyebrow, TinyBasket } from "@/components/Accents";

interface CollectionCategory {
  category: PieceCategory;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

interface CollectionSectionProps {
  categories: CollectionCategory[];
}

export function CollectionSection({ categories }: CollectionSectionProps) {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-3 md:mb-16 md:max-w-md">
          <SectionEyebrow accent="sky">Peek inside the shop</SectionEyebrow>
          <h2 className="font-serif text-[1.85rem] tracking-tight text-navy md:text-[2.15rem]">
            The Collection
          </h2>
          <p className="font-script text-lg text-oxblood-faded">
            baskets, sparkle & one-of-a-kinds
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-14">
          {categories.map((cat, i) => (
            <Link
              key={cat.category}
              href={cat.href}
              className={`group block ${
                i % 2 === 1 ? "sm:translate-y-8" : ""
              } ${i === 2 ? "sm:-translate-y-2" : ""}`}
            >
              <div
                className={`photo-plate photo-natural ${
                  i % 2 === 0 ? "rotate-[-0.4deg]" : "rotate-[0.45deg]"
                }`}
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-linen">
                  <Image
                    src={cat.imageSrc}
                    alt={cat.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3 px-1">
                <h3 className="flex items-center gap-2 font-serif text-xl text-navy transition-colors group-hover:text-seafoam">
                  <TinyBasket size={16} className="text-seafoam opacity-70" />
                  {CATEGORY_LABELS[cat.category]}
                </h3>
                <span className="chip !py-1">View</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
