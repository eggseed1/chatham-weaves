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
  tagline: "A little Cape Cod studio for Nantucket baskets & jewelry",
  description:
    "Artisan Nantucket baskets, jewelry, and accessories handwoven in Chatham, Cape Cod. Custom commissions available.",
  url: "https://chathamweaves.com", // PLACEHOLDER: replace with live domain

  contact: {
    // PLACEHOLDER: replace with client email / phone when available
    email: "hello@chathamweaves.com",
    location: "Chatham, Cape Cod, Massachusetts",
    hours:
      "Always available for a conversation. Janene weaves full time from her home studio — text is best.",
    note: "Text is the preferred way to reach the studio.",
  },

  showcase: [
    {
      name: "The Colors of Chatham",
      location: "Main Street, Chatham, MA",
    },
    {
      name: "DePrisco's Jewelers",
      location: "Wellesley, MA",
    },
    {
      name: "Wychmere Beach Club",
      location: "Harwich Port, MA",
    },
  ],

  social: {
    instagram: {
      handle: "@chatham_weaves",
      username: "chatham_weaves",
      url: "https://www.instagram.com/chatham_weaves/",
    },
    facebook: {
      url: "https://www.facebook.com/photo.php?fbid=183324264835032&id=100094723791341&set=a.113319588502167",
    },
    chamber: {
      url: "https://business.chathaminfo.com/list/member/chatham-weaves-by-janene-marie-776",
      label: "Chatham Chamber of Commerce",
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
