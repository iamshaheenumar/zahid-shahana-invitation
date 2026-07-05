import { ImageResponse } from "next/og";

// Browser-tab favicon — a gold ampersand on the dark invitation backdrop.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

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
          background:
            "radial-gradient(120% 100% at 50% 0%, #1c271f, #0e1411 75%)",
          border: "2px solid #a8842f",
          borderRadius: 14,
          color: "#e6cf86",
          fontSize: 44,
          fontWeight: 700,
          paddingBottom: 4,
        }}
      >
        &
      </div>
    ),
    { ...size }
  );
}
