import type { Piece } from "@/types/piece";
import { PieceCard } from "@/components/PieceCard";

interface PieceGridProps {
  pieces: Piece[];
  columns?: 2 | 3 | 4;
  /** First N cards get priority image loading */
  priorityCount?: number;
}

export function PieceGrid({
  pieces,
  columns = 3,
  priorityCount = 3,
}: PieceGridProps) {
  const colClass =
    columns === 4
      ? "md:grid-cols-3 lg:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 ${colClass}`}>
      {pieces.map((piece, i) => (
        <PieceCard
          key={piece.id}
          piece={piece}
          priority={i < priorityCount}
          featuredSpan={i === 0 && pieces.length > 2}
        />
      ))}
    </div>
  );
}
