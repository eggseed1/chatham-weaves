/**
 * =============================================================================
 * SITE CONFIGURATION
 * =============================================================================
 * Update brand name, Instagram, email, and contact details here.
 * All Instagram CTAs and social links read from this file.
 * =============================================================================
 */

export const siteConfig = {
  name: "Chatham Weaves",
  fullName: "Chatham Weaves by Janene Marie",
  maker: "Janene Marie",
  tagline: "Handmade Nantucket weaves from the shores of Chatham",
  description:
    "Artisan Nantucket baskets, jewelry, and accessories handwoven in Chatham, Cape Cod. Custom commissions available.",
  url: "https://chathamweaves.com", // PLACEHOLDER: replace with live domain

  contact: {
    // PLACEHOLDER: replace with client email when available
    email: "hello@chathamweaves.com",
    location: "Chatham, Cape Cod, Massachusetts",
  },

  social: {
    instagram: {
      handle: "@chatham_weaves",
      username: "chatham_weaves",
      url: "https://www.instagram.com/chatham_weaves/",
    },
  },

  nav: [
    { label: "Collection", href: "/collection" },
    { label: "About", href: "/about" },
    { label: "Commissions", href: "/commissions" },
    { label: "Contact", href: "/contact" },
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
