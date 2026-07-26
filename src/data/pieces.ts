/**
 * =============================================================================
 * ADD OR EDIT PRODUCTS HERE
 * =============================================================================
 *
 * This is the single source of truth for the collection.
 * Page layouts pull from this file, you should not edit product info in
 * components or page files.
 *
 * HOW TO ADD A PIECE
 * 1. Add photographs to /public/images/pieces/ (e.g. my-piece-1.jpg)
 * 2. Copy an existing entry below and fill in the fields
 * 3. Set featured: true to show it on the homepage
 *
 * HOW TO MARK SOLD
 * Change status to "sold", the piece stays visible in the collection.
 *
 * HOW TO CHANGE PRICE
 * Set price: 450 (number in USD) or remove the price field for "by inquiry".
 *
 * STATUS OPTIONS
 * - "available"          → Inquire on Instagram
 * - "sold"               → Ask about a similar custom piece
 * - "made-to-order"      → Message to commission this style
 * - "commission-example" → Example of past custom work
 *
 * CATEGORY OPTIONS
 * - "baskets" | "jewelry" | "accessories" | "one-of-a-kind"
 *
 * Content below is curated from the client's Instagram (@chatham_weaves).
 * Descriptions marked [PLACEHOLDER] should be refined with the maker.
 * =============================================================================
 */

import type { Piece } from "@/types/piece";

export const pieces: Piece[] = [
  {
    id: "summer-bucket-bag",
    slug: "summer-bucket-bag",
    name: "Summer Bucket Bag",
    category: "baskets",
    status: "sold",
    featured: true,
    description:
      "A classic open bucket silhouette, the perfect summer companion for market mornings and coastal evenings. Handwoven with care in the Nantucket tradition.",
    materials: "Traditional Nantucket weave; natural cane and hardwood accents",
    dimensions: "[PLACEHOLDER: confirm dimensions with maker]",
    details:
      "Featured on Instagram as “the perfect summer bucket bag.” Each weave is unique; inquire about a similar made-to-order piece.",
    images: [
      {
        src: "/images/pieces/summer-bucket-bag-1.jpg",
        alt: "Handwoven summer bucket bag by Chatham Weaves",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DaGvQ37vHtD/",
  },
  {
    id: "crossbody-basket",
    slug: "crossbody-basket",
    name: "Crossbody Basket",
    category: "baskets",
    status: "sold",
    featured: true,
    description:
      "A refined crossbody weave designed to move with you, from luncheons to evenings by the water. Soft structure with timeless coastal elegance.",
    materials: "Nantucket weave with leather strap detailing",
    dimensions: "[PLACEHOLDER: confirm dimensions with maker]",
    details:
      "A favorite gift piece. Available as a custom commission in preferred wood and weave finishes.",
    images: [
      {
        src: "/images/pieces/crossbody-basket-1.jpg",
        alt: "Chatham Weaves crossbody Nantucket basket",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DaJYeN1vJ4P/",
  },
  {
    id: "bridal-cherry-ivory-tote",
    slug: "bridal-cherry-ivory-tote",
    name: "Bridal Cherry & Ivory Tote",
    category: "baskets",
    status: "commission-example",
    featured: true,
    description:
      "A custom 10\" tote woven in cherry ebony and ivory for a bride preparing for her chapel day, an heirloom piece meant to be carried for a lifetime.",
    materials: "Cherry ebony and ivory weave",
    dimensions: '10" tote',
    details:
      "Commissioned bridal work. Custom monograms, wood selections, and sizes available for wedding parties and special occasions.",
    images: [
      {
        src: "/images/pieces/bridal-cherry-ivory-tote-1.jpg",
        alt: "Custom bridal cherry and ivory Nantucket tote",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DYj0lgGNkU-/",
  },
  {
    id: "walnut-mammoth-bucket",
    slug: "walnut-mammoth-bucket",
    name: "Walnut & Mammoth Bucket Bag",
    category: "baskets",
    status: "made-to-order",
    featured: true,
    description:
      "A distinguished bucket bag in walnut with mammoth accents: rich, warm, and unmistakably handcrafted. Made to order for those who appreciate rare materials.",
    materials: "Walnut weave with mammoth detailing",
    dimensions: "[PLACEHOLDER: confirm dimensions with maker]",
    details:
      "Material availability varies. Message on Instagram to discuss current wood and ivory-alternative options.",
    images: [
      {
        src: "/images/pieces/walnut-mammoth-bucket-1.jpg",
        alt: "Walnut and mammoth Nantucket bucket bag",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DY2c92fOjpS/",
  },
  {
    id: "martha-lawrence-kidney-tote",
    slug: "martha-lawrence-kidney-tote",
    name: "Martha Lawrence Kidney Tote",
    category: "baskets",
    status: "sold",
    featured: true,
    description:
      "A stunning Martha Lawrence kidney tote finished with a custom name plate in ebony and ivory, classic form with a personal signature.",
    materials: "Ebony and ivory; Martha Lawrence kidney form",
    dimensions: "[PLACEHOLDER: confirm dimensions with maker]",
    details:
      "Name plates and monograms available on custom orders. Ask about commissioning a similar kidney tote.",
    images: [
      {
        src: "/images/pieces/martha-lawrence-kidney-tote-1.jpg",
        alt: "Martha Lawrence kidney tote with ebony and ivory name plate",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DXMeyHSDo5N/",
  },
  {
    id: "mermaid-weave",
    slug: "mermaid-weave",
    name: "Mermaid Weave",
    category: "one-of-a-kind",
    status: "available",
    featured: true,
    description:
      "A one-of-a-kind coastal weave with playful spirit and meticulous craft, a conversation piece that still feels wearable and refined.",
    materials: "[PLACEHOLDER: confirm materials with maker]",
    dimensions: "[PLACEHOLDER: confirm dimensions with maker]",
    details:
      "Inquire for current availability. Similar custom motifs can be discussed for commissions.",
    images: [
      {
        src: "/images/pieces/mermaid-weave-1.jpg",
        alt: "One-of-a-kind mermaid weave by Chatham Weaves",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DbK_pJ3soDC/",
  },
  {
    id: "shell-end-cap-bracelet",
    slug: "shell-end-cap-bracelet",
    name: "Shell End Cap Bracelet",
    category: "jewelry",
    status: "made-to-order",
    featured: true,
    description:
      "A custom Chatham Weaves bracelet finished with shell end caps, a summer favorite that pairs beautifully stacked or worn alone.",
    materials: "Nantucket weave with shell end caps",
    dimensions: "Custom sized to wrist",
    details:
      "Shell end caps have been especially popular this season. DM to order your size and weave preference.",
    images: [
      {
        src: "/images/pieces/shell-end-cap-bracelet-1.jpg",
        alt: "Custom Nantucket bracelet with shell end caps",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DaWbIRWu-sg/",
  },
  {
    id: "nantucket-cuff-stack",
    slug: "nantucket-cuff-stack",
    name: "Nantucket Cuff Stack",
    category: "jewelry",
    status: "commission-example",
    featured: true,
    description:
      "A beautiful stack including a Nantucket cuff, woven jewelry that carries memory, friendship, and quiet coastal luxury.",
    materials: "Nantucket cuff weave; mixed stack finishes",
    dimensions: "Custom sized",
    details:
      "Cuffs and stacks can be commissioned as gifts, memorials, or everyday wear.",
    images: [
      {
        src: "/images/pieces/nantucket-cuff-stack-1.jpg",
        alt: "Stack of Nantucket cuffs and woven bracelets",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DZgMi-aPzqJ/",
  },
  {
    id: "kitchen-staple-basket",
    slug: "kitchen-staple-basket",
    name: "Kitchen Staple Basket",
    category: "baskets",
    status: "commission-example",
    featured: false,
    description:
      "A practical woven kitchen staple made for a cherished client and friend, proof that heirloom craft belongs in everyday life.",
    materials: "Traditional Nantucket weave",
    dimensions: "[PLACEHOLDER: confirm dimensions with maker]",
    details: "Ideal as a housewarming or hostess gift. Custom sizes available.",
    images: [
      {
        src: "/images/pieces/kitchen-staple-basket-1.jpg",
        alt: "Handwoven kitchen staple basket",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DaWWxK3OF1z/",
  },
  {
    id: "hoppy-cherrywood-basket",
    slug: "hoppy-cherrywood-basket",
    name: "Cherrywood Hoppy Basket",
    category: "baskets",
    status: "sold",
    featured: false,
    description:
      "A playful cherrywood weave with spring spirit: lighthearted in character, serious in craftsmanship.",
    materials: "Cherrywood Nantucket weave",
    dimensions: "[PLACEHOLDER: confirm dimensions with maker]",
    images: [
      {
        src: "/images/pieces/hoppy-cherrywood-basket-1.jpg",
        alt: "Cherrywood Nantucket hoppy basket",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DXr8HlGjyPM/",
  },
  {
    id: "custom-ivory-birthday",
    slug: "custom-ivory-birthday",
    name: "Custom Ivory Birthday Basket",
    category: "one-of-a-kind",
    status: "commission-example",
    featured: false,
    description:
      "A custom ivory weave created for a birthday celebration: personal, luminous, and made to mark a moment.",
    materials: "Ivory Nantucket weave",
    dimensions: "[PLACEHOLDER: confirm dimensions with maker]",
    details: "Custom birthday and occasion pieces welcome year-round.",
    images: [
      {
        src: "/images/pieces/custom-ivory-birthday-1.jpg",
        alt: "Custom ivory birthday Nantucket basket",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/Da5hjySuVPG/",
  },
  {
    id: "cherry-coaster",
    slug: "cherry-coaster",
    name: "Cherry Coaster",
    category: "accessories",
    status: "commission-example",
    featured: false,
    description:
      "A cherry Nantucket coaster, small in scale, generous in detail. Originally woven as a community gala donation.",
    materials: "Cherry Nantucket weave",
    dimensions: "Coaster size",
    details:
      "Coasters and small accessories make thoughtful hostess gifts and can be ordered in sets.",
    images: [
      {
        src: "/images/pieces/cherry-coaster-1.jpg",
        alt: "Cherry Nantucket basketweave coaster",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DZD9WlEOIdL/",
  },
  {
    id: "max-memorial-cuff",
    slug: "max-memorial-cuff",
    name: "Max Memorial Cuff",
    category: "jewelry",
    status: "commission-example",
    featured: false,
    description:
      "A special Nantucket cuff created in memory of a beloved companion: weaving as remembrance, worn close to the heart.",
    materials: "Ivory heart accents; Nantucket cuff weave",
    dimensions: "Custom sized",
    details:
      "Memorial and tribute commissions are handled with particular care. Reach out privately on Instagram.",
    images: [
      {
        src: "/images/pieces/max-memorial-cuff-1.jpg",
        alt: "Memorial Nantucket cuff with heart detail",
      },
      {
        src: "/images/pieces/max-memorial-cuff-2.jpg",
        alt: "Detail of Max memorial cuff weave",
      },
      {
        src: "/images/pieces/max-memorial-cuff-3.jpg",
        alt: "Memorial cuff shown in natural light",
      },
      {
        src: "/images/pieces/max-memorial-cuff-4.jpg",
        alt: "Close view of ivory heart Nantucket cuff",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DZtLSwtDtsi/",
  },
  {
    id: "ebony-pink-cuff",
    slug: "ebony-pink-cuff",
    name: "Ebony Pink Cuff",
    category: "jewelry",
    status: "sold",
    featured: false,
    description:
      "Pretty in pink: a refined ebony cuff with soft color, woven at a delicate 1/4\" scale.",
    materials: "Ebony weave with pink accent",
    dimensions: '1/4" cuff, custom sized',
    images: [
      {
        src: "/images/pieces/ebony-pink-cuff-1.jpg",
        alt: "Ebony pink Nantucket cuff",
      },
      {
        src: "/images/pieces/ebony-pink-cuff-2.jpg",
        alt: "Ebony pink cuff detail",
      },
      {
        src: "/images/pieces/ebony-pink-cuff-3.jpg",
        alt: "Ebony pink cuff lifestyle view",
      },
      {
        src: "/images/pieces/ebony-pink-cuff-4.jpg",
        alt: "Close-up of pink ebony woven cuff",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DZGSuC7D-ev/",
  },
  {
    id: "bleached-weave-bracelets",
    slug: "bleached-weave-bracelets",
    name: "Bleached Weave Bracelets",
    category: "jewelry",
    status: "available",
    featured: false,
    description:
      "Coastal charm in a bleached weave: light, airy Nantucket bracelets that bring a quiet glow to any stack.",
    materials: "Ivory / bleached Nantucket weave",
    dimensions: "Custom sized",
    details: "Message for current availability and sizing.",
    images: [
      {
        src: "/images/pieces/bleached-weave-bracelets-1.jpg",
        alt: "Bleached ivory Nantucket weave bracelets",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DXFyPqujnIr/",
  },
  {
    id: "nantucket-cuffs-falmouth",
    slug: "nantucket-cuffs-falmouth",
    name: "Nantucket Cuffs",
    category: "jewelry",
    status: "sold",
    featured: false,
    description:
      "Classic Nantucket cuffs worn among friends, woven jewelry that becomes part of the gatherings and seasons of Cape Cod life.",
    materials: "Traditional Nantucket cuff weave",
    dimensions: "Custom sized",
    images: [
      {
        src: "/images/pieces/nantucket-cuffs-falmouth-1.jpg",
        alt: "Friends wearing Chatham Weaves Nantucket cuffs",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DYVVCOxPORC/",
  },
  {
    id: "summer-stack",
    slug: "summer-stack",
    name: "Summer Stack",
    category: "jewelry",
    status: "available",
    featured: false,
    description:
      "A summer stack of woven bracelets with layered texture in coastal tones for luncheons, beach clubs, and long Cape evenings.",
    materials: "Assorted Nantucket weaves",
    dimensions: "Custom sized; sold individually or as stacks",
    details: "Ask about building a custom stack.",
    images: [
      {
        src: "/images/pieces/summer-stack-1.jpg",
        alt: "Summer stack of Nantucket woven bracelets",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DaGu61lviyh/",
  },
  {
    id: "cherry-hydrangea",
    slug: "cherry-hydrangea",
    name: "Cherry Hydrangea Weave",
    category: "one-of-a-kind",
    status: "sold",
    featured: false,
    description:
      "Spring in bloom: a cherry weave celebrating hydrangea season and the soft color of Cape Cod gardens.",
    materials: "Cherry Nantucket weave",
    dimensions: "[PLACEHOLDER: confirm dimensions with maker]",
    images: [
      {
        src: "/images/pieces/cherry-hydrangea-1.jpg",
        alt: "Cherry hydrangea-inspired Nantucket weave",
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DW-WpMXjlAM/",
  },
];
