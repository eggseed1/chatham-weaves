import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { InquireButton } from "@/components/InquireButton";

export const metadata: Metadata = {
  title: "Commissions",
  description:
    "Commission a custom Nantucket basket, jewelry piece, or heirloom gift from Chatham Weaves. Message on Instagram to begin.",
};

const categories = [
  "Custom Nantucket baskets",
  "Custom jewelry & cuffs",
  "Personalized name plates",
  "Bridal & wedding pieces",
  "Memorial & tribute weaves",
  "Gifts & special occasions",
  "Heirloom home accessories",
];

const steps = [
  {
    n: "01",
    title: "Get in touch",
    body: "Send a message on Instagram with your idea, occasion, and any inspiration photos.",
  },
  {
    n: "02",
    title: "Discuss the idea",
    body: "We’ll talk through form, size, palette, and how the piece will be worn or used.",
  },
  {
    n: "03",
    title: "Design & materials",
    body: "Wood, weave finish, accents, and personal details are selected together.",
  },
  {
    n: "04",
    title: "Handmade",
    body: "Your piece is woven by hand — patiently, carefully, one strand at a time.",
  },
  {
    n: "05",
    title: "Delivery",
    body: "Finished pieces are arranged for pickup or shipping, ready to be lived with.",
  },
];

export default function CommissionsPage() {
  return (
    <div className="bg-ivory">
      <section className="relative min-h-[60vh] overflow-hidden bg-navy">
        <Image
          src="/images/lifestyle/commissions.jpg"
          alt="Custom commissioned Chatham Weaves bridal tote"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-navy/50" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-linen/90">
            Custom Work
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl tracking-tight text-white md:text-6xl">
            Commissions
          </h1>
          <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-linen/90">
            Custom Nantucket baskets and jewelry made for your story —
            weddings, gifts, memorials, and everyday heirlooms.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="font-serif text-3xl tracking-tight text-navy">
              What we create
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-charcoal-soft">
              From bridal totes to memorial cuffs, each commission is shaped
              around the person who will carry or wear it. No two pieces are
              identical.
            </p>
            <ul className="mt-10 space-y-4">
              {categories.map((item) => (
                <li
                  key={item}
                  className="border-b border-border pb-4 font-sans text-sm text-charcoal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-3xl tracking-tight text-navy">
              The process
            </h2>
            <ol className="mt-10 space-y-10">
              {steps.map((step) => (
                <li key={step.n} className="flex gap-5">
                  <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-coastal pt-1">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-navy">{step.title}</h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal-soft">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-16 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-navy md:text-4xl">
            Start a Commission
          </h2>
          <p className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-charcoal-soft">
            Message {siteConfig.social.instagram.handle} to begin. Share your
            ideas, timing, and any inspiration — we&apos;ll take it from there.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <InquireButton
              href={siteConfig.social.instagram.url}
              label="Start a Commission"
              external
            />
            <InquireButton
              href="/contact"
              label="Other Contact Options"
              variant="secondary"
            />
          </div>
          <p className="mt-8 font-sans text-xs text-warm-gray">
            {/* Optional inquiry form can be added later */}
            A simple inquiry form can be added here in a future update.
          </p>
        </div>
      </section>
    </div>
  );
}
