import { pieces } from "@/data/pieces";
import type { FilterValue, Piece, PieceCategory } from "@/types/piece";

export function getAllPieces(): Piece[] {
  return pieces;
}

export function getFeaturedPieces(limit = 6): Piece[] {
  return pieces.filter((p) => p.featured).slice(0, limit);
}

export function getPieceBySlug(slug: string): Piece | undefined {
  return pieces.find((p) => p.slug === slug);
}

export function getPiecesByCategory(category: PieceCategory): Piece[] {
  return pieces.filter((p) => p.category === category);
}

export function filterPieces(filter: FilterValue): Piece[] {
  if (filter === "all") return pieces;
  return pieces.filter((p) => p.category === filter);
}

export function getRelatedPieces(piece: Piece, limit = 3): Piece[] {
  return pieces
    .filter((p) => p.id !== piece.id && p.category === piece.category)
    .slice(0, limit);
}

export function formatPrice(price?: number): string | null {
  if (price == null) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
