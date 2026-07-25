"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Scallop, TinyBasket } from "@/components/Accents";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-ivory animate-fade-in md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex items-center justify-between px-6 py-5 border-b border-rule">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2 font-serif text-lg tracking-wide text-navy"
        >
          <TinyBasket className="text-seafoam" size={18} />
          {siteConfig.name}
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="label-archival hover:text-oxblood transition-colors"
          aria-label="Close menu"
        >
          Close
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center px-8 gap-7">
        {siteConfig.nav.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="font-serif text-3xl text-navy tracking-tight animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={siteConfig.social.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="font-serif text-3xl text-oxblood tracking-tight animate-fade-up"
          style={{ animationDelay: `${siteConfig.nav.length * 60}ms` }}
        >
          Instagram
        </a>
      </nav>

      <div className="flex items-center gap-3 px-8 pb-10">
        <Scallop className="ornament-coral" size={20} />
        <p className="font-script text-xl text-seafoam">by hand, always</p>
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled ? "bg-ivory/97 border-b border-rule" : "bg-transparent"
        }`}
      >
        {!scrolled && (
          <div className="hidden border-b border-dashed border-seafoam/25 bg-cream/70 md:block">
            <p className="mx-auto max-w-7xl px-6 py-1.5 text-center font-script text-[0.95rem] text-seafoam lg:px-10">
              handmade on Cape Cod · text Janene anytime · every weave is an act of love
            </p>
          </div>
        )}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-lg md:text-xl tracking-[0.02em] text-navy transition-colors hover:text-oxblood"
          >
            <TinyBasket className="text-seafoam" size={18} />
            {siteConfig.name}
          </Link>

          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Primary"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label-archival transition-colors hover:text-seafoam"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="chip chip-coral !normal-case !tracking-normal !text-[0.72rem] !font-script !px-3"
            >
              Instagram ♡
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden label-archival"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
