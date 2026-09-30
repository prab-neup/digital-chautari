import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon. Padded background so the mark is not cropped by iOS. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F9488, #0B6F66)",
          color: "#ffffff",
          fontSize: "76px",
          fontWeight: 800,
          letterSpacing: "0.01em",
        }}
      >
        DC
      </div>
    ),
    size
  );
}
