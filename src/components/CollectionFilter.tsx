"use client";

import { useMemo, useState } from "react";
import type { FilterValue, Piece } from "@/types/piece";
import { FILTER_OPTIONS } from "@/types/piece";
import { PieceGrid } from "@/components/PieceGrid";

interface CollectionFilterProps {
  pieces: Piece[];
  initialFilter?: FilterValue;
}

export function CollectionFilter({
  pieces,
  initialFilter = "all",
}: CollectionFilterProps) {
  const [filter, setFilter] = useState<FilterValue>(initialFilter);

  const filtered = useMemo(() => {
    if (filter === "all") return pieces;
    return pieces.filter((p) => p.category === filter);
  }, [pieces, filter]);

  return (
    <div>
      <div
        className="mb-12 flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-6"
        role="tablist"
        aria-label="Filter collection"
      >
        {FILTER_OPTIONS.map((opt) => {
          const active = filter === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(opt.value)}
              className={`font-sans text-[11px] uppercase tracking-[0.2em] transition-colors ${
                active
                  ? "text-navy"
                  : "text-warm-gray hover:text-charcoal"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="font-sans text-sm text-warm-gray">
          No pieces in this category yet.
        </p>
      ) : (
        <PieceGrid pieces={filtered} columns={4} />
      )}
    </div>
  );
}
