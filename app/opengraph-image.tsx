import { ImageResponse } from "next/og";

// The preview card unfurled when the link is shared (WhatsApp, X, iMessage…).
export const alt = "Zahid & Shahana — Wedding Invitation · 12 August 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120% 90% at 50% 0%, #1c271f, #0e1411 70%)",
          color: "#e9e1cf",
          fontFamily: "serif",
        }}
      >
        {/* gold frame lines */}
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            right: 30,
            bottom: 30,
            border: "1px solid rgba(201,162,75,0.5)",
            borderRadius: 14,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: "1px solid rgba(201,162,75,0.2)",
            borderRadius: 10,
          }}
        />

        {/* top flourish */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 80,
              height: 1,
              background: "linear-gradient(90deg,transparent,#c9a24b)",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              background: "#c9a24b",
              transform: "rotate(45deg)",
            }}
          />
          <div
            style={{
              width: 80,
              height: 1,
              background: "linear-gradient(90deg,#c9a24b,transparent)",
            }}
          />
        </div>

        <div
          style={{
            fontSize: 24,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#bdb39c",
            marginBottom: 26,
          }}
        >
          The Wedding Of
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 104, fontWeight: 700, color: "#e6cf86", lineHeight: 1 }}>
            Zahid
          </div>
          <div
            style={{
              fontSize: 44,
              fontStyle: "italic",
              color: "#c9a24b",
              margin: "4px 0",
            }}
          >
            &
          </div>
          <div style={{ fontSize: 104, fontWeight: 700, color: "#e6cf86", lineHeight: 1 }}>
            Shahana
          </div>
        </div>

        <div
          style={{
            width: 100,
            height: 1,
            background: "rgba(201,162,75,0.6)",
            margin: "34px 0 26px",
          }}
        />

        <div style={{ fontSize: 36, letterSpacing: 2, color: "#f0e9da" }}>
          12 August 2026
        </div>
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a89263",
            marginTop: 14,
          }}
        >
          AMBIENCE Auditorium · Feroke
        </div>
      </div>
    ),
    { ...size }
  );
}
