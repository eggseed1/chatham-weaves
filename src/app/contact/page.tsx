import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { InquireButton } from "@/components/InquireButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Chatham Weaves — Janene weaves full time from her Chatham home studio. Text or Instagram message is best.",
};

export default function ContactPage() {
  return (
    <div className="bg-ivory pt-28 pb-24 lg:pt-32 lg:pb-28">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <p className="label-archival text-oxblood">Get in Touch</p>
        <hr className="rule-short mx-auto mt-4" />
        <h1 className="mt-5 font-serif text-[2.35rem] tracking-tight text-navy md:text-5xl">
          Contact
        </h1>
        <p className="mx-auto mt-6 max-w-lg font-serif text-[0.98rem] leading-relaxed text-charcoal-soft">
          Always available for a conversation. Janene weaves full time at her
          home studio in Chatham — text is best. Instagram messages are welcome
          for availability, purchasing, and commissions.
        </p>
        <p className="mt-4 font-script text-xl text-oxblood-faded">
          text is best
        </p>

        <div className="mt-10">
          <InquireButton
            href={siteConfig.social.instagram.url}
            label="Message Us on Instagram"
            external
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-16 grid gap-10 border-t border-rule pt-12 text-left sm:grid-cols-2">
          <div>
            <h2 className="label-archival">Instagram</h2>
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-serif text-xl text-navy transition-colors hover:text-oxblood"
            >
              {siteConfig.social.instagram.handle}
            </a>
          </div>

          <div>
            <h2 className="label-archival">Hours</h2>
            <p className="mt-2 font-serif text-base leading-relaxed text-navy">
              {siteConfig.contact.hours}
            </p>
          </div>

          <div>
            <h2 className="label-archival">Studio</h2>
            <p className="mt-2 font-serif text-xl text-navy">
              {siteConfig.contact.location}
            </p>
            <p className="mt-2 font-serif text-sm italic text-charcoal-soft">
              Full-time home studio
            </p>
          </div>

          <div>
            <h2 className="label-archival">Commissions</h2>
            <Link
              href="/commissions"
              className="mt-2 block font-serif text-xl text-navy transition-colors hover:text-oxblood"
            >
              Start a custom piece →
            </Link>
          </div>

          <div className="sm:col-span-2">
            <h2 className="label-archival">Currently Showcasing</h2>
            <ul className="mt-3 space-y-2">
              {siteConfig.showcase.map((place) => (
                <li key={place.name} className="font-serif text-sm text-navy">
                  {place.name}
                  <span className="text-charcoal-soft"> — {place.location}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 border-t border-rule pt-8">
            <h2 className="label-archival">Email</h2>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-2 block font-serif text-xl text-navy transition-colors hover:text-oxblood"
            >
              {siteConfig.contact.email}
            </a>
            <p className="mt-2 font-serif text-xs italic text-warm-gray">
              [PLACEHOLDER: confirm email / phone for texting with client]
            </p>
            <a
              href={siteConfig.social.chamber.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block label-archival text-oxblood transition-colors hover:text-navy"
            >
              Chatham Chamber of Commerce listing →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
