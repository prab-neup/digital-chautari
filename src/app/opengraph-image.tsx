import { ImageResponse } from "next/og";
import { siteName } from "@/lib/site";

export const alt = `${siteName} — Creative Technology in Kathmandu`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card, generated at build time. Built with the brand palette
 * rather than a static asset so it stays in step with the design tokens.
 * Note: satori supports a subset of CSS, so every container sets `display`
 * explicitly and layout is flexbox only.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0B1220",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #0F9488, #0B6F66)",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            DC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "34px", fontWeight: 700 }}>{siteName}</div>
            <div style={{ fontSize: "20px", color: "#8C95A3" }}>
              Kathmandu, Nepal
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              maxWidth: "940px",
            }}
          >
            We build digital bridges between ideas and impact
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: "#8C95A3",
            }}
          >
            Digital marketing · Content creation · Health-tech software
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          {["#0F9488", "#E0A930", "#7FAE3A"].map((color) => (
            <div
              key={color}
              style={{
                display: "flex",
                width: "120px",
                height: "10px",
                borderRadius: "999px",
                background: color,
              }}
            />
          ))}
        </div>
      </div>
    ),
    size
  );
}
