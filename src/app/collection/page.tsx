import type { Metadata } from "next";
import { CollectionFilter } from "@/components/CollectionFilter";
import { getAllPieces } from "@/lib/pieces";
import type { FilterValue } from "@/types/piece";
import { FILTER_OPTIONS } from "@/types/piece";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Browse handmade Nantucket baskets, jewelry, accessories, and one-of-a-kind pieces by Chatham Weaves. Inquire on Instagram to purchase.",
};

interface CollectionPageProps {
  searchParams: Promise<{ category?: string }>;
}

function parseFilter(value?: string): FilterValue {
  const match = FILTER_OPTIONS.find((o) => o.value === value);
  return match ? match.value : "all";
}

export default async function CollectionPage({
  searchParams,
}: CollectionPageProps) {
  const params = await searchParams;
  const initialFilter = parseFilter(params.category);
  const pieces = getAllPieces();

  return (
    <div className="bg-ivory pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <header className="mb-14 max-w-2xl">
          <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-warm-gray">
            Portfolio & Catalog
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight text-navy md:text-5xl">
            Collection
          </h1>
          <p className="mt-5 font-sans text-base leading-relaxed text-charcoal-soft">
            An editorial gallery of available work, past pieces, and commission
            examples. Sold pieces remain here as inspiration — inquire about
            creating something similar.
          </p>
        </header>

        <CollectionFilter pieces={pieces} initialFilter={initialFilter} />
      </div>
    </div>
  );
}
