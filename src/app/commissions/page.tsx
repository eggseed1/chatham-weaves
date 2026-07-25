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
      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="mx-auto grid max-w-7xl items-end gap-10 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5 lg:pb-4">
            <p className="label-archival text-oxblood">Custom Work</p>
            <hr className="rule-short mt-4" />
            <h1 className="mt-5 font-serif text-[2.35rem] tracking-tight text-navy md:text-5xl">
              Commissions
            </h1>
            <p className="mt-5 max-w-md font-serif text-[0.98rem] italic leading-relaxed text-charcoal-soft">
              Custom Nantucket baskets and jewelry made for your story —
              weddings, gifts, memorials, and everyday heirlooms.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="photo-plate photo-natural rotate-[0.4deg]">
              <div className="relative aspect-[16/11] overflow-hidden bg-linen">
                <Image
                  src="/images/lifestyle/commissions.jpg"
                  alt="Custom commissioned Chatham Weaves bridal tote"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-serif text-[1.65rem] tracking-tight text-navy">
              What we create
            </h2>
            <hr className="rule-short mt-4" />
            <p className="mt-5 font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
              From bridal totes to memorial cuffs, each commission is shaped
              around the person who will carry or wear it. No two pieces are
              identical.
            </p>
            <ul className="mt-10 space-y-0">
              {categories.map((item) => (
                <li
                  key={item}
                  className="border-b border-rule py-3.5 font-serif text-sm text-navy"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-[1.65rem] tracking-tight text-navy">
              The process
            </h2>
            <hr className="rule-short mt-4" />
            <ol className="mt-10 space-y-9">
              {steps.map((step) => (
                <li key={step.n} className="flex gap-5">
                  <span className="label-archival pt-1 text-oxblood">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-navy">{step.title}</h3>
                    <p className="mt-2 font-serif text-sm leading-relaxed text-charcoal-soft">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20 border border-rule bg-cream/70 px-6 py-14 text-center md:px-12">
          <p className="label-archival text-oxblood">Begin Here</p>
          <h2 className="mt-4 font-serif text-[1.85rem] tracking-tight text-navy md:text-[2.15rem]">
            Start a Commission
          </h2>
          <p className="mx-auto mt-5 max-w-md font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
            Message {siteConfig.social.instagram.handle} to begin. Share your
            ideas, timing, and any inspiration — we&apos;ll take it from there.
          </p>
          <p className="mt-4 font-script text-xl text-oxblood-faded">
            made for one person only
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
        </div>
      </section>
    </div>
  );
}
