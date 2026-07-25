import Image from "next/image";
import { siteConfig } from "@/config/site";
import type { InstagramPost } from "@/data/instagram";
import { DecorativeRule, SectionEyebrow } from "@/components/Accents";

interface InstagramGalleryProps {
  posts: InstagramPost[];
}

export function InstagramGallery({ posts }: InstagramGalleryProps) {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow accent="coral">
              {siteConfig.social.instagram.handle}
            </SectionEyebrow>
            <h2 className="mt-3 font-serif text-[1.85rem] tracking-tight text-navy md:text-[2.15rem]">
              Follow Along on Instagram
            </h2>
            <p className="mt-2 font-script text-lg text-seafoam">
              sunny days, sweet stacks & studio moments
            </p>
          </div>
          <a
            href={siteConfig.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="chip chip-coral !normal-case !tracking-normal !text-[0.8rem] !font-script"
          >
            Visit the shop roll →
          </a>
        </div>

        <DecorativeRule motif="wave" className="mb-8 max-w-xs" />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
          {posts.slice(0, 8).map((post, i) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden rounded-sm border border-border bg-linen shadow-[2px_3px_0_rgba(127,168,160,0.12)] ${
                i === 1 || i === 5 ? "md:translate-y-3" : ""
              } ${i === 3 ? "md:-translate-y-2" : ""}`}
            >
              <div className="relative aspect-square photo-natural">
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
