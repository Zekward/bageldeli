import { ImageResponse } from "next/og";
import { STORE } from "@/lib/store";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = `${STORE.name} — Fresh bagels, breakfast all day, and catering`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Brand palette
const BRAND_BROWN = "#70260a";
const CREAM = "#f5ecd9";
const CREAM_MUTED = "#e6d4b5";

// Image generation
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: BRAND_BROWN,
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: CREAM_MUTED,
            marginBottom: 24,
          }}
        >
          Est. Mount Sinai, NY
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 800,
            lineHeight: 1.05,
            textAlign: "center",
            color: CREAM,
          }}
        >
          {STORE.name}
        </div>
        <div
          style={{
            display: "flex",
            width: 220,
            height: 6,
            borderRadius: 999,
            backgroundColor: CREAM_MUTED,
            marginTop: 40,
            marginBottom: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 500,
            color: CREAM,
          }}
        >
          Fresh bagels • Breakfast all day • Catering
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
