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
    <div className="bg-ivory page-shell">
      <div className="site-container">
        <header className="section-head max-w-xl">
          <p className="label-archival text-oxblood">Portfolio & Catalog</p>
          <hr className="rule-short mt-4" />
          <h1 className="mt-5 font-serif text-[2.35rem] tracking-tight text-navy md:text-5xl">
            Collection
          </h1>
          <p className="mt-5 font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
            An editorial gallery of available work, past pieces, and commission
            examples. Sold pieces remain here as inspiration. Inquire about
            creating something similar.
          </p>
        </header>

        <CollectionFilter pieces={pieces} initialFilter={initialFilter} />
      </div>
    </div>
  );
}
