import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mount Sinai Bagel & Deli",
    short_name: "MS Bagel & Deli",
    description:
      "Freshly baked bagels, hearty breakfast sandwiches, and made-to-order lunch. Order online or stop by.",
    start_url: "/",
    display: "browser",
    background_color: "#fff8f0",
    theme_color: "#5b3a29",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/delilogo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
