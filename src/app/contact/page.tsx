import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { InquireButton } from "@/components/InquireButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Chatham Weaves on Instagram for purchasing, commissions, and questions about handmade Nantucket baskets and jewelry.",
};

export default function ContactPage() {
  return (
    <div className="bg-ivory pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-warm-gray">
          Get in Touch
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-navy md:text-5xl">
          Contact
        </h1>
        <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-charcoal-soft">
          Instagram is the best way to reach us for availability, purchasing,
          commissions, and questions. We love hearing about the piece you have
          in mind.
        </p>

        <div className="mt-12">
          <InquireButton
            href={siteConfig.social.instagram.url}
            label="Message Us on Instagram"
            external
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-16 grid gap-10 border-t border-border pt-14 text-left sm:grid-cols-2">
          <div>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.18em] text-warm-gray">
              Instagram
            </h2>
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-serif text-2xl text-navy transition-colors hover:text-coastal"
            >
              {siteConfig.social.instagram.handle}
            </a>
          </div>

          <div>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.18em] text-warm-gray">
              Email
            </h2>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-2 block font-serif text-2xl text-navy transition-colors hover:text-coastal"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-2 font-sans text-xs italic text-warm-gray">
              [PLACEHOLDER: confirm email with client]
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.18em] text-warm-gray">
              Studio
            </h2>
            <p className="mt-2 font-serif text-2xl text-navy">
              {siteConfig.contact.location}
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[11px] uppercase tracking-[0.18em] text-warm-gray">
              Commissions
            </h2>
            <Link
              href="/commissions"
              className="mt-2 block font-serif text-2xl text-navy transition-colors hover:text-coastal"
            >
              Start a custom piece →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
