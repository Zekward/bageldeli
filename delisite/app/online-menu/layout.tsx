import type { Metadata } from "next";

const TITLE = "Order Online";
const DESCRIPTION =
  "Browse our freshly-made breakfast and lunch menu and order online from Mount Sinai Bagel & Deli.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function OnlineMenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
