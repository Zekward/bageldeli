import type { MetadataRoute } from "next";

// Keep in sync with `metadataBase` in app/layout.tsx.
const BASE_URL = "https://mountsinaibageldeli.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
