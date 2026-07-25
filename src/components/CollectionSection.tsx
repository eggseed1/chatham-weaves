import Link from "next/link";
import Image from "next/image";
import { CATEGORY_LABELS, type PieceCategory } from "@/types/piece";

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
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-xl">
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-warm-gray">
            Browse by Category
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy md:text-4xl">
            The Collection
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.category}
              href={cat.href}
              className="group relative block aspect-[16/10] overflow-hidden bg-linen"
            >
              <Image
                src={cat.imageSrc}
                alt={cat.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-navy/30 transition-colors group-hover:bg-navy/40" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <h3 className="font-serif text-2xl text-white tracking-tight md:text-3xl">
                  {CATEGORY_LABELS[cat.category]}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
