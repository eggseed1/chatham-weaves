"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";

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
      <div className="flex items-center justify-between px-6 py-5 border-b border-border">
        <Link
          href="/"
          onClick={onClose}
          className="transition-opacity hover:opacity-80"
        >
          <Logo size="sm" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal-soft hover:text-navy transition-colors"
          aria-label="Close menu"
        >
          Close
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center px-8 gap-8">
        {siteConfig.nav.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="font-serif text-4xl text-navy tracking-tight animate-fade-up"
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
          className="font-serif text-4xl text-coastal tracking-tight animate-fade-up"
          style={{ animationDelay: `${siteConfig.nav.length * 60}ms` }}
        >
          Instagram
        </a>
      </nav>

      <p className="px-8 pb-10 font-sans text-sm text-warm-gray">
        {siteConfig.tagline}
      </p>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDarkHero = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-[2px] border-b border-border"
            : onDarkHero
              ? "bg-navy/45"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="transition-opacity hover:opacity-85">
            <Logo light={onDarkHero} size="md" />
          </Link>

          <nav
            className="hidden md:flex items-center gap-10"
            aria-label="Primary"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  onDarkHero
                    ? "text-white/85 hover:text-white"
                    : "text-charcoal-soft hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-sans text-[11px] uppercase tracking-[0.22em] transition-colors ${
                onDarkHero
                  ? "text-linen hover:text-white"
                  : "text-coastal hover:text-navy"
              }`}
            >
              Instagram
            </a>
          </nav>

          <button
            type="button"
            className={`md:hidden font-sans text-[11px] uppercase tracking-[0.22em] ${
              onDarkHero ? "text-white" : "text-charcoal-soft"
            }`}
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
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
