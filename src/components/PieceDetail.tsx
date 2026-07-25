import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { Piece } from "@/types/piece";
import { CATEGORY_LABELS, STATUS_LABELS } from "@/types/piece";
import { formatPrice } from "@/lib/pieces";
import { PieceGallery } from "@/components/PieceGallery";
import { InquireButton } from "@/components/InquireButton";

interface PieceDetailProps {
  piece: Piece;
}

export function PieceDetail({ piece }: PieceDetailProps) {
  const price = formatPrice(piece.price);
  const isSold = piece.status === "sold";
  const isAvailable =
    piece.status === "available" || piece.status === "made-to-order";

  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-24">
      <div className="lg:col-span-7">
        <PieceGallery images={piece.images} name={piece.name} />
      </div>

      <div className="lg:col-span-5 lg:pt-4">
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-warm-gray">
          {CATEGORY_LABELS[piece.category]}
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-navy md:text-5xl">
          {piece.name}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-coastal">
            {STATUS_LABELS[piece.status]}
          </span>
          {price && (
            <span className="font-sans text-lg text-charcoal">{price}</span>
          )}
        </div>

        <p className="mt-8 font-sans text-base leading-relaxed text-charcoal-soft">
          {piece.description}
        </p>

        <dl className="mt-10 space-y-5 border-t border-border pt-8">
          {piece.materials && (
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-[0.18em] text-warm-gray">
                Materials
              </dt>
              <dd className="mt-1.5 font-sans text-sm leading-relaxed text-charcoal">
                {piece.materials}
              </dd>
            </div>
          )}
          {piece.dimensions && (
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-[0.18em] text-warm-gray">
                Dimensions
              </dt>
              <dd className="mt-1.5 font-sans text-sm leading-relaxed text-charcoal">
                {piece.dimensions}
              </dd>
            </div>
          )}
          {piece.details && (
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-[0.18em] text-warm-gray">
                Craftsmanship
              </dt>
              <dd className="mt-1.5 font-sans text-sm leading-relaxed text-charcoal">
                {piece.details}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-12 space-y-4">
          {isSold ? (
            <>
              <p className="font-sans text-sm leading-relaxed text-charcoal-soft">
                Interested in something similar? We&apos;d love to weave a
                custom piece inspired by this one.
              </p>
              <InquireButton
                href="/commissions"
                label="Ask About a Custom Piece"
                variant="primary"
              />
              <InquireButton
                href={siteConfig.social.instagram.url}
                label="Message on Instagram"
                variant="secondary"
                external
              />
            </>
          ) : (
            <>
              <p className="font-sans text-sm leading-relaxed text-charcoal-soft">
                Interested in this piece? Send us a message on Instagram for
                availability, purchasing, or questions.
              </p>
              <InquireButton
                href={siteConfig.social.instagram.url}
                label={
                  isAvailable ? "Message to Purchase" : "Inquire on Instagram"
                }
                variant="primary"
                external
              />
              <p className="font-sans text-xs text-warm-gray">
                Messaging does not reserve or purchase the piece — we&apos;ll
                confirm availability personally.
              </p>
            </>
          )}
        </div>

        {piece.instagramUrl && (
          <p className="mt-8">
            <a
              href={piece.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[11px] uppercase tracking-[0.18em] text-coastal transition-colors hover:text-navy"
            >
              View original post →
            </a>
          </p>
        )}

        <p className="mt-10">
          <Link
            href="/collection"
            className="font-sans text-[11px] uppercase tracking-[0.18em] text-warm-gray transition-colors hover:text-navy"
          >
            ← Back to Collection
          </Link>
        </p>
      </div>
    </div>
  );
}
