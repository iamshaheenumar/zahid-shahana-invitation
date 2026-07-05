import { ImageResponse } from "next/og";

// Home-screen / iMessage icon for iOS — same gold ampersand emblem, larger.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background:
            "radial-gradient(120% 100% at 50% 0%, #1c271f, #0e1411 75%)",
          border: "5px solid #a8842f",
          borderRadius: 40,
          color: "#e6cf86",
          fontSize: 120,
          fontWeight: 700,
          paddingBottom: 10,
        }}
      >
        &
      </div>
    ),
    { ...size }
  );
}
