import { ImageResponse } from "next/og";
import { siteName } from "@/lib/site";

export const alt = "StudentCribHub — verified student housing & campus services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette (hex approximations of the app's oklch tokens; satori has no oklch).
const bg = "#FBFAF6";
const ink = "#33302A";
const indigo = "#3B47AC";
const amber = "#E6A23B";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: indigo,
              color: "#fff",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: ink }}>{siteName}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              color: ink,
              maxWidth: 900,
            }}
          >
            Verified student housing, near your campus.
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#6B675E", maxWidth: 860 }}>
            Book trusted hostels, apartments and local services — all in one place.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", height: 8, width: 64, borderRadius: 999, background: amber }} />
          <div style={{ display: "flex", fontSize: 26, color: "#8A857A" }}>
            studentcribhub.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
