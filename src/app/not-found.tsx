import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-warm-gray">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl text-navy">Page not found</h1>
      <p className="mt-4 font-sans text-sm text-charcoal-soft">
        This page doesn&apos;t exist. Perhaps browse the collection instead.
      </p>
      <Link
        href="/collection"
        className="mt-8 font-sans text-[11px] uppercase tracking-[0.22em] text-coastal hover:text-navy"
      >
        View Collection →
      </Link>
    </div>
  );
}
