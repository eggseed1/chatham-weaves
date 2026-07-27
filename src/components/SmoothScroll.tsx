"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children: ReactNode;
}

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Slow, smooth wheel scrolling. Instantiated once via Lenis (not ReactLenis root)
 * to avoid the remount/layout jitter that fought the page before.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const lenis = new Lenis({
      // Slightly higher lerp = less laggy catch-up; easing keeps it soft
      lerp: 0.12,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.75,
      touchMultiplier: 1.2,
      syncTouch: false,
      autoRaf: true,
      anchors: true,
      allowNestedScroll: true,
      overscroll: false,
    });

    window.__lenis = lenis;

    const ro = new ResizeObserver(() => {
      lenis.resize();
    });
    ro.observe(document.documentElement);

    return () => {
      ro.disconnect();
      if (window.__lenis === lenis) delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
