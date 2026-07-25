import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PieceCard } from "@/components/PieceCard";
import { StorySection } from "@/components/StorySection";
import { CollectionSection } from "@/components/CollectionSection";
import { CommissionCTA } from "@/components/CommissionCTA";
import { InstagramGallery } from "@/components/InstagramGallery";
import { getFeaturedPieces } from "@/lib/pieces";
import { instagramPosts } from "@/data/instagram";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Handmade Nantucket Baskets & Jewelry`,
  },
  description: siteConfig.description,
};

export default function HomePage() {
  const featured = getFeaturedPieces(6);

  return (
    <>
      <Hero
        imageSrc="/images/lifestyle/hero.jpg"
        imageAlt="Chatham Weaves handmade Nantucket basket lifestyle"
      />

      <section className="bg-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-warm-gray">
                Selected Work
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy md:text-4xl">
                Featured Pieces
              </h2>
            </div>
            <Link
              href="/collection"
              className="font-sans text-[11px] uppercase tracking-[0.22em] text-coastal transition-colors hover:text-navy"
            >
              View Full Collection →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-14 md:grid-cols-3">
            {featured.map((piece, i) => (
              <PieceCard
                key={piece.id}
                piece={piece}
                priority={i < 3}
                featuredSpan={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <StorySection
        imageSrc="/images/lifestyle/workshop.jpg"
        imageAlt="Chatham Weaves workshop and handwoven pieces"
      />

      <CollectionSection
        categories={[
          {
            category: "baskets",
            href: "/collection?category=baskets",
            imageSrc: "/images/pieces/summer-bucket-bag-1.jpg",
            imageAlt: "Nantucket baskets by Chatham Weaves",
          },
          {
            category: "jewelry",
            href: "/collection?category=jewelry",
            imageSrc: "/images/pieces/shell-end-cap-bracelet-1.jpg",
            imageAlt: "Handmade Nantucket jewelry",
          },
          {
            category: "accessories",
            href: "/collection?category=accessories",
            imageSrc: "/images/pieces/cherry-coaster-1.jpg",
            imageAlt: "Handcrafted woven accessories",
          },
          {
            category: "one-of-a-kind",
            href: "/collection?category=one-of-a-kind",
            imageSrc: "/images/pieces/mermaid-weave-1.jpg",
            imageAlt: "One-of-a-kind Chatham Weaves piece",
          },
        ]}
      />

      <CommissionCTA />

      <InstagramGallery posts={instagramPosts} />
    </>
  );
}
