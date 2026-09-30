import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** The rounded teal "DC" mark, matching the header logo. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
          background: "linear-gradient(135deg, #0F9488, #0B6F66)",
          color: "#ffffff",
          fontSize: "15px",
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
