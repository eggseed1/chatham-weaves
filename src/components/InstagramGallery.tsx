import Image from "next/image";
import { siteConfig } from "@/config/site";
import type { InstagramPost } from "@/data/instagram";

interface InstagramGalleryProps {
  posts: InstagramPost[];
}

/**
 * Manually curated Instagram gallery.
 * Swap `posts` for an automated feed later without changing this layout.
 */
export function InstagramGallery({ posts }: InstagramGalleryProps) {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-warm-gray">
              {siteConfig.social.instagram.handle}
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-navy md:text-4xl">
              Follow Along on Instagram
            </h2>
          </div>
          <a
            href={siteConfig.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] uppercase tracking-[0.22em] text-coastal transition-colors hover:text-navy"
          >
            Visit Profile →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3">
          {posts.slice(0, 8).map((post, i) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden bg-linen ${
                i === 0 ? "aspect-square sm:col-span-1" : "aspect-square"
              }`}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/15" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
