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
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-20">
      <div className="lg:col-span-7">
        <PieceGallery images={piece.images} name={piece.name} />
      </div>

      <div className="lg:col-span-5 lg:pt-2 lg:translate-y-2">
        <p className="label-archival text-oxblood">
          {CATEGORY_LABELS[piece.category]}
        </p>
        <hr className="rule-short mt-4" />
        <h1 className="mt-5 font-serif text-[2.15rem] tracking-tight text-navy md:text-4xl">
          {piece.name}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="label-archival !text-[0.62rem] text-oxblood">
            {STATUS_LABELS[piece.status]}
          </span>
          {price && (
            <span className="font-serif text-lg text-navy">{price}</span>
          )}
        </div>

        <p className="mt-8 font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
          {piece.description}
        </p>

        <dl className="mt-10 space-y-5 border-t border-rule pt-8">
          {piece.materials && (
            <div>
              <dt className="label-archival !text-[0.62rem]">Materials</dt>
              <dd className="mt-1.5 font-serif text-sm leading-relaxed text-navy">
                {piece.materials}
              </dd>
            </div>
          )}
          {piece.dimensions && (
            <div>
              <dt className="label-archival !text-[0.62rem]">Dimensions</dt>
              <dd className="mt-1.5 font-serif text-sm leading-relaxed text-navy">
                {piece.dimensions}
              </dd>
            </div>
          )}
          {piece.details && (
            <div>
              <dt className="label-archival !text-[0.62rem]">Craftsmanship</dt>
              <dd className="mt-1.5 font-serif text-sm leading-relaxed text-navy">
                {piece.details}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-12 space-y-4">
          {isSold ? (
            <>
              <p className="font-serif text-sm leading-relaxed text-charcoal-soft">
                Interested in something similar? We&apos;d love to weave a
                custom piece inspired by this one.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              </div>
            </>
          ) : (
            <>
              <p className="font-serif text-sm leading-relaxed text-charcoal-soft">
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
              <p className="font-serif text-xs italic text-warm-gray">
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
              className="label-archival text-oxblood transition-colors hover:text-navy"
            >
              View original post →
            </a>
          </p>
        )}

        <p className="mt-10">
          <Link
            href="/collection"
            className="label-archival transition-colors hover:text-oxblood"
          >
            ← Back to Collection
          </Link>
        </p>
      </div>
    </div>
  );
}
