import type { Metadata } from "next";

const DISCOUNTS_TITLE = "Discounts & Deals";
const DISCOUNTS_DESCRIPTION =
  "Sign up for a free bagel and unlock exclusive deals from Mount Sinai Bagel & Deli.";

export const metadata: Metadata = {
  title: DISCOUNTS_TITLE,
  description: DISCOUNTS_DESCRIPTION,
  openGraph: {
    title: DISCOUNTS_TITLE,
    description: DISCOUNTS_DESCRIPTION,
  },
  twitter: {
    title: DISCOUNTS_TITLE,
    description: DISCOUNTS_DESCRIPTION,
  },
};

export default function DiscountsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
