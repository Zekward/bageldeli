import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VisitorTracker from "@/components/visitor-tracker/visitor-tracker";
import LocalBusinessJsonLd from "@/components/seo/local-business-jsonld";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_NAME = "Mount Sinai Bagel & Deli";
const SITE_DESCRIPTION =
  "Mount Sinai Bagel & Deli — freshly baked bagels, hearty breakfast sandwiches, and made-to-order lunch. Order online or stop by.";

// Brand palette
const BRAND_BROWN = "#5b3a29";

export const metadata: Metadata = {
  metadataBase: new URL("https://mountsinaibageldeli.com"),
  title: {
    default: "Mount Sinai Bagel & Deli | Fresh Bagels, Breakfast & Lunch",
    template: "%s — Mount Sinai Bagel & Deli",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Mount Sinai Bagel & Deli",
    "bagels",
    "fresh bagels",
    "deli",
    "breakfast sandwiches",
    "lunch",
    "sandwiches",
    "catering",
    "coffee",
    "New York bagels",
  ],
  openGraph: {
    title: "Mount Sinai Bagel & Deli",
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: "/delilogo.jpg",
        width: 1200,
        height: 630,
        alt: "Mount Sinai Bagel & Deli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mount Sinai Bagel & Deli",
    description: SITE_DESCRIPTION,
    images: ["/delilogo.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: BRAND_BROWN,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className="font-sans antialiased"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#5b3a29] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <LocalBusinessJsonLd />
        <VisitorTracker />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
