import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PieceCard } from "@/components/PieceCard";
import { StorySection } from "@/components/StorySection";
import { CollectionSection } from "@/components/CollectionSection";
import { CommissionCTA } from "@/components/CommissionCTA";
import { InstagramGallery } from "@/components/InstagramGallery";
import { DecorativeRule, SectionEyebrow, Wave } from "@/components/Accents";
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

      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <DecorativeRule motif="wave" className="mb-10 max-w-sm" />
          <div className="mb-10 flex flex-col gap-3 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionEyebrow accent="seafoam">Fresh from the studio</SectionEyebrow>
              <h2 className="mt-3 font-serif text-[1.85rem] tracking-tight text-navy md:text-[2.15rem]">
                Featured Pieces
              </h2>
              <p className="mt-2 font-script text-lg text-oxblood-faded">
                little treasures, woven one by one
              </p>
            </div>
            <Link
              href="/collection"
              className="label-archival transition-colors hover:text-seafoam"
            >
              View Full Collection →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-7 sm:gap-y-16 md:grid-cols-3">
            {featured.map((piece, i) => (
              <PieceCard
                key={piece.id}
                piece={piece}
                priority={i < 3}
                featuredSpan={i === 0}
                className={
                  i === 1
                    ? "md:translate-y-6"
                    : i === 4
                      ? "md:-translate-y-3"
                      : ""
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-dashed border-seafoam/30 bg-cream/80 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 text-center">
          <p className="font-script text-xl text-seafoam">Cape Cod summers</p>
          <Wave className="ornament-coral hidden sm:block" size={30} />
          <p className="font-script text-xl text-oxblood-faded">
            Nantucket tradition
          </p>
          <Wave className="ornament-sky hidden sm:block" size={30} />
          <p className="font-script text-xl text-sky">made just for you</p>
        </div>
      </section>

      <StorySection
        imageSrc="/images/studio/studio-14.jpeg"
        imageAlt="Nantucket lightship basket by Chatham Weaves among Cape Cod flowers"
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
