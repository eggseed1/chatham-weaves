# Chatham Weaves

Elegant storefront and portfolio for **Chatham Weaves by Janene Marie** — handmade Nantucket baskets, jewelry, accessories, and custom commissions from Chatham, Cape Cod.

This is **not** an ecommerce site. There is no cart, checkout, or payment processing. Visitors browse the collection and inquire via Instagram.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
```

## Project structure

```
src/
  config/site.ts          ← Brand name, Instagram URL, email, nav
  data/pieces.ts          ← ADD OR EDIT PRODUCTS HERE
  data/instagram.ts       ← Instagram gallery images
  types/piece.ts          ← Piece TypeScript interfaces
  lib/pieces.ts           ← Data helpers (get by slug, featured, etc.)
  components/             ← Reusable UI (props-driven product components)
  app/                    ← Pages
public/images/
  pieces/                 ← Product photography
  lifestyle/              ← Hero, about, workshop images
  instagram/              ← Gallery images
```

---

## Content management

You manage updates in code for this version. The client does not need to edit the site herself.

### Add a piece

1. Add photographs to `public/images/pieces/`  
   Example: `my-new-basket-1.jpg`, `my-new-basket-2.jpg`
2. Open **`src/data/pieces.ts`** (look for `ADD OR EDIT PRODUCTS HERE`)
3. Copy an existing entry and update fields:

```ts
{
  id: "my-new-basket",
  slug: "my-new-basket",          // URL: /pieces/my-new-basket
  name: "My New Basket",
  category: "baskets",            // baskets | jewelry | accessories | one-of-a-kind
  status: "available",            // available | sold | made-to-order | commission-example
  price: 450,                     // optional — omit for "by inquiry"
  featured: true,                 // show on homepage
  description: "...",
  materials: "...",
  dimensions: "...",
  details: "...",
  images: [
    { src: "/images/pieces/my-new-basket-1.jpg", alt: "..." },
    { src: "/images/pieces/my-new-basket-2.jpg", alt: "..." },
  ],
  instagramUrl: "https://www.instagram.com/p/...",
}
```

The Collection page, homepage featured grid, and piece detail routes update automatically.

### Edit a piece

Edit the matching object in `src/data/pieces.ts`.

### Mark a piece sold

Set `status: "sold"`. Sold pieces stay visible and invite custom inquiries.

### Change a price

Set `price: 520` (USD number) or remove `price` entirely for inquiry-only.

### Feature a piece on the homepage

Set `featured: true`. Homepage shows up to 6 featured pieces.

### Add photographs

| Purpose            | Folder                     |
|--------------------|----------------------------|
| Product / piece    | `public/images/pieces/`    |
| Hero / about / etc.| `public/images/lifestyle/` |
| Instagram gallery  | `public/images/instagram/` |

Prefer high-quality JPEGs. Next.js Image handles responsive sizes and lazy loading.

### Update Instagram URL

Edit `src/config/site.ts`:

```ts
social: {
  instagram: {
    handle: "@chatham_weaves",
    username: "chatham_weaves",
    url: "https://www.instagram.com/chatham_weaves/",
  },
}
```

All “Message to Purchase”, “Inquire on Instagram”, and “Follow” CTAs use this config.

### Update contact information

Edit `contact.email` and `contact.location` in `src/config/site.ts`.

### Update Instagram gallery

Edit `src/data/instagram.ts` — add image files under `public/images/instagram/`, then add entries to the array.

### Placeholder copy

Copy marked `[PLACEHOLDER: ...]` (especially on About) should be replaced with the maker’s real words before launch.

---

## Pages

| Route                 | Purpose                                      |
|-----------------------|----------------------------------------------|
| `/`                   | Editorial homepage                           |
| `/collection`         | Full gallery + category filters              |
| `/pieces/[slug]`      | Piece detail + Instagram inquiry CTAs        |
| `/about`              | Maker story                                  |
| `/commissions`        | Custom process + Start a Commission          |
| `/contact`            | Instagram-first contact                      |

## Architecture notes (future Shopify)

- Product components receive data via **props** (`PieceCard`, `PieceGrid`, `PieceDetail`, `PieceGallery`)
- Types live in `src/types/piece.ts`
- Data is centralized in `src/data/pieces.ts` (swap later for a Shopify fetch layer)
- **Do not** scatter product fields across page layouts
- No Shopify libraries are installed yet

## Design direction

Warm ivory / linen / muted navy / coastal blue. Editorial serif headings (Cormorant Garamond) + understated sans (Outfit). Photography-led, boutique, New England coastal — not generic ecommerce.

## License / content

Photography and brand content belong to Chatham Weaves / Janene Marie. Images in this repo were curated from the client’s Instagram export for development.
