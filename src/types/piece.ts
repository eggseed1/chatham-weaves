/**
 * Product / Piece types — presentation-layer agnostic.
 * Structured so Shopify (or another ecommerce source) can map into these
 * interfaces later without redesigning frontend components.
 */

export type PieceCategory =
  | "baskets"
  | "jewelry"
  | "accessories"
  | "one-of-a-kind";

export type PieceStatus =
  | "available"
  | "sold"
  | "made-to-order"
  | "commission-example";

export interface PieceImage {
  src: string;
  alt: string;
}

export interface Piece {
  id: string;
  slug: string;
  name: string;
  category: PieceCategory;
  /** Optional display price in USD. Omit when price is by inquiry. */
  price?: number;
  status: PieceStatus;
  description: string;
  materials?: string;
  dimensions?: string;
  details?: string;
  images: PieceImage[];
  featured?: boolean;
  /** Direct Instagram post URL for this piece, if available */
  instagramUrl?: string;
}

export const CATEGORY_LABELS: Record<PieceCategory, string> = {
  baskets: "Nantucket Baskets",
  jewelry: "Jewelry",
  accessories: "Accessories",
  "one-of-a-kind": "One of a Kind",
};

export const STATUS_LABELS: Record<PieceStatus, string> = {
  available: "Available",
  sold: "Sold",
  "made-to-order": "Made to Order",
  "commission-example": "Commission Example",
};

export const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "baskets", label: "Baskets" },
  { value: "jewelry", label: "Jewelry" },
  { value: "accessories", label: "Accessories" },
  { value: "one-of-a-kind", label: "One of a Kind" },
] as const;

export type FilterValue = (typeof FILTER_OPTIONS)[number]["value"];
