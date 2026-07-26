/**
 * Historical Nantucket lightship basket tradition, for the artisanal story.
 * Images in /public/images/history/ are public domain or openly licensed.
 * See credit fields for attribution.
 */

export interface HistoryImage {
  id: string;
  src: string;
  caption: string;
  credit: string;
  alt: string;
}

export const historyImages: HistoryImage[] = [
  {
    id: "nesting-lightship-baskets",
    src: "/images/history/nesting-lightship-baskets.jpg",
    caption: "Nesting lightship baskets by Davis Hall, Nantucket, c. 1875–1890",
    credit:
      "American Folk Art Museum. Gift of Jerry and Susan Lauren; believed public domain",
    alt: "Historic nested Nantucket lightship baskets by Davis Hall",
  },
  {
    id: "south-shoal-lightship",
    src: "/images/history/south-shoal-lightship.jpg",
    caption:
      "Nantucket New South Shoal Lightship, where island weavers perfected the craft offshore",
    credit: "U.S. Coast Guard / Public domain",
    alt: "Historic photograph of the Nantucket New South Shoal Lightship",
  },
  {
    id: "main-street-kilburn",
    src: "/images/history/main-street-kilburn.jpg",
    caption: "Main Street, Nantucket, late 19th century",
    credit: "Kilburn Brothers / Public domain via Wikimedia Commons",
    alt: "Historic photograph of Main Street, Nantucket",
  },
  {
    id: "brant-point-1880",
    src: "/images/history/brant-point-1880.jpg",
    caption: "Brant Point Light, Nantucket, c. 1880",
    credit: "U.S. Coast Guard / Public domain",
    alt: "Brant Point Lighthouse on Nantucket around 1880",
  },
  {
    id: "sankaty-1890s",
    src: "/images/history/sankaty-1890s.jpg",
    caption: "Sankaty Head Light, Nantucket, 1890s",
    credit: "U.S. Coast Guard / Public domain",
    alt: "Sankaty Head Lighthouse, Nantucket, 1890s",
  },
  {
    id: "sherburne-1811",
    src: "/images/history/sherburne-1811.jpg",
    caption: "The Town of Sherburne on Nantucket, 1811 woodcut",
    credit: "Public domain via Wikimedia Commons",
    alt: "1811 woodcut of the Town of Sherburne on Nantucket",
  },
  {
    id: "chart-1860",
    src: "/images/history/chart-1860.jpg",
    caption: "U.S. Coast Survey chart of Nantucket Island, 1860",
    credit: "U.S. Coast Survey / Public domain",
    alt: "Historic 1860 nautical chart of Nantucket Island",
  },
  {
    id: "scrimshaw-burdett",
    src: "/images/history/scrimshaw-burdett.jpg",
    caption: "Nantucket scrimshaw by Edward Burdett",
    credit: "Edward Burdett / CC BY 3.0 via Wikimedia Commons",
    alt: "Historic Nantucket scrimshaw carving by Edward Burdett",
  },
];

export const historyNotes = {
  title: "A Craft Born on the Lightships",
  intro:
    "Long before boutique studios and summer pop-ups, Nantucket’s signature baskets were woven offshore, aboard lightships that marked the dangerous shoals around the island.",
  /** Short homepage story, keep lean and inviting */
  home: {
    title: "Born on the Lightships",
    lead: "Nantucket’s signature baskets began offshore, woven by sailors on long watches over the shoals.",
    close:
      "Janene fell in love with that tradition as a girl on the island. Today she weaves it by hand in Chatham.",
    flourish: "from lightship watches to heirloom weaves",
  },
  paragraphs: [
    "True Nantucket lightship baskets share four hallmarks: they are woven on a mold; the staves are rattan; the weavers are cane; and each basket rests on a solid wood base. The form grew through the nineteenth century as sturdy work baskets for island shops, kitchens, and workshops.",
    "Men stationed on the Nantucket lightships, especially the South Shoal vessels, spent long watches weaving between duties. Their baskets were practical first. When Nantucket shifted from a whaling port to a destination for visitors in the 1860s and after, those same baskets became beloved keepsakes of an island stay.",
    "Janene Marie first fell in love with that tradition while vacationing on Nantucket as a youth. She returned again and again, studying the history and technique, promising herself she would one day learn to weave and honor the craft. Today, every Chatham Weaves piece carries a thread of that island story into Cape Cod life.",
  ],
  hallmarks: [
    { label: "Woven on a mold", detail: "Shape held true from the first stave" },
    { label: "Rattan staves", detail: "The upright bones of the basket" },
    { label: "Cane weavers", detail: "Fine, even rows: the signature look" },
    {
      label: "Solid wood base",
      detail: "Strength for everyday use & heirloom years",
    },
  ],
  timeline: [
    {
      year: "c. 1850s–1890s",
      text: "Lightship crews weave sturdy cane baskets during long watches offshore.",
    },
    {
      year: "1860s onward",
      text: "As tourism grows, work baskets become cherished Nantucket souvenirs.",
    },
    {
      year: "20th century",
      text: "Purse forms, ivory accents, and fine jewelry weaves refine the craft into art.",
    },
    {
      year: "Today",
      text: "Janene Marie carries the tradition forward from her Chatham studio, one weave at a time.",
    },
  ],
} as const;

