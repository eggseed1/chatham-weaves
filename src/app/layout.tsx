import type { Metadata } from "next";
import { Caveat, Libre_Baskerville, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

/* Small archival body serif */
const serif = Libre_Baskerville({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Slightly more compact serif for labels / nav */
const labelSerif = Source_Serif_4({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* Handwritten / archival notes — use sparingly */
const script = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Handmade Nantucket Baskets & Jewelry`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
  },
  keywords: [
    "Nantucket basket weaving",
    "Nantucket baskets",
    "handmade Nantucket jewelry",
    "coastal jewelry",
    "Nantucket jewelry",
    "handcrafted accessories",
    "custom Nantucket baskets",
    "handmade New England jewelry",
    "Chatham Weaves",
    "Cape Cod artisan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${labelSerif.variable} ${script.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-serif antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
