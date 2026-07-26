"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";
import { Scallop } from "@/components/Accents";
import { SocialLinks } from "@/components/SocialLinks";

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
          className="transition-opacity hover:opacity-80"
        >
          <Logo size="sm" />
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

      <nav className="flex flex-1 flex-col justify-center px-6 gap-7">
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
        <div
          className="animate-fade-up pt-2"
          style={{ animationDelay: `${siteConfig.nav.length * 60}ms` }}
        >
          <SocialLinks onNavigate={onClose} iconSize={20} />
        </div>
      </nav>

      <div className="flex items-center gap-3 px-6 pb-10">
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
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        // Hysteresis so the bar doesn't flicker around the threshold
        setScrolled((prev) => {
          if (prev && y < 8) return false;
          if (!prev && y > 24) return true;
          return prev;
        });
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 bg-ivory/95 backdrop-blur-[2px]">
        <div className="hidden border-b border-dashed border-seafoam/25 bg-cream/70 md:block">
          <p className="site-container py-1.5 text-center font-script text-[0.95rem] text-seafoam">
            handmade on Cape Cod · woven by Janene
          </p>
        </div>
        <div
          className={`site-container flex items-center justify-between py-3 ${
            scrolled ? "border-b border-rule" : "border-b border-transparent"
          }`}
        >
          <Link href="/" className="transition-opacity hover:opacity-85">
            <Logo size="md" />
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
            <SocialLinks />
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
