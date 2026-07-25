import Link from "next/link";
import Image from "next/image";
import type { Piece } from "@/types/piece";
import { CATEGORY_LABELS, STATUS_LABELS } from "@/types/piece";
import { formatPrice } from "@/lib/pieces";

interface PieceCardProps {
  piece: Piece;
  priority?: boolean;
  className?: string;
  featuredSpan?: boolean;
}

export function PieceCard({
  piece,
  priority = false,
  className = "",
  featuredSpan = false,
}: PieceCardProps) {
  const price = formatPrice(piece.price);
  const image = piece.images[0];
  const live =
    piece.status === "available" || piece.status === "made-to-order";

  return (
    <article
      className={`group ${featuredSpan ? "col-span-2 md:col-span-1" : ""} ${className}`}
    >
      <Link href={`/pieces/${piece.slug}`} className="block">
        <div className="photo-plate photo-natural !pb-3">
          <div className="relative aspect-[4/5] overflow-hidden bg-linen">
            {image && (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={priority}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            )}
          </div>
        </div>
        <div className="mt-3 space-y-1.5 px-0.5">
          <h3 className="font-serif text-lg text-navy tracking-tight transition-colors group-hover:text-seafoam md:text-[1.15rem]">
            {piece.name}
          </h3>
          <p className="label-archival !text-[0.6rem]">
            {CATEGORY_LABELS[piece.category]}
          </p>
          <div className="pt-0.5">
            <span className={`chip ${live ? "chip-coral" : ""} !py-1`}>
              {STATUS_LABELS[piece.status]}
            </span>
          </div>
          {price && (
            <p className="font-serif text-sm text-charcoal-soft">{price}</p>
          )}
        </div>
      </Link>
    </article>
  );
}
