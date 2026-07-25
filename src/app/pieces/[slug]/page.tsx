import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PieceDetail } from "@/components/PieceDetail";
import { PieceCard } from "@/components/PieceCard";
import { getAllPieces, getPieceBySlug, getRelatedPieces } from "@/lib/pieces";
import { siteConfig } from "@/config/site";

interface PiecePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPieces().map((piece) => ({ slug: piece.slug }));
}

export async function generateMetadata({
  params,
}: PiecePageProps): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPieceBySlug(slug);
  if (!piece) return { title: "Piece Not Found" };

  return {
    title: piece.name,
    description: piece.description,
    openGraph: {
      title: `${piece.name} | ${siteConfig.name}`,
      description: piece.description,
      images: piece.images[0] ? [{ url: piece.images[0].src }] : undefined,
    },
  };
}

export default async function PiecePage({ params }: PiecePageProps) {
  const { slug } = await params;
  const piece = getPieceBySlug(slug);
  if (!piece) notFound();

  const related = getRelatedPieces(piece, 3);

  return (
    <div className="bg-ivory pt-20 lg:pt-24">
      <PieceDetail piece={piece} />

      {related.length > 0 && (
        <section className="border-t border-border bg-cream py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="mb-10 font-serif text-2xl tracking-tight text-navy md:text-3xl">
              Related Pieces
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
              {related.map((p) => (
                <PieceCard key={p.id} piece={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
