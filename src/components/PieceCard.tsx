import Link from "next/link";
import Image from "next/image";
import type { Piece } from "@/types/piece";
import { CATEGORY_LABELS, STATUS_LABELS } from "@/types/piece";
import { formatPrice } from "@/lib/pieces";

interface PieceCardProps {
  piece: Piece;
  priority?: boolean;
  className?: string;
  /** Allow featured pieces to span full width on mobile grids */
  featuredSpan?: boolean;
}

/**
 * Editorial piece presentation — props-driven for future ecommerce data sources.
 * No cart / checkout affordances.
 */
export function PieceCard({
  piece,
  priority = false,
  className = "",
  featuredSpan = false,
}: PieceCardProps) {
  const price = formatPrice(piece.price);
  const image = piece.images[0];

  return (
    <article
      className={`group ${featuredSpan ? "col-span-2 md:col-span-1" : ""} ${className}`}
    >
      <Link href={`/pieces/${piece.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-linen">
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          )}
        </div>
        <div className="mt-4 space-y-1.5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-xl text-navy tracking-tight transition-colors group-hover:text-coastal md:text-[1.35rem]">
              {piece.name}
            </h3>
          </div>
          <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-warm-gray">
            {CATEGORY_LABELS[piece.category]}
            <span className="mx-2 text-sand" aria-hidden>
              ·
            </span>
            {STATUS_LABELS[piece.status]}
          </p>
          {price && (
            <p className="font-sans text-sm text-charcoal-soft">{price}</p>
          )}
        </div>
      </Link>
    </article>
  );
}
