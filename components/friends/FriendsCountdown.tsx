"use client";

import RevealSection from "@/components/RevealSection";
import { useCountdown } from "@/components/hooks";

const WEDDING_ISO = "2026-08-12T16:00:00";

function Unit({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return (
    <div
      style={{
        flex: "1 1 110px",
        minWidth: 110,
        border: "1px solid #ecd7d3",
        borderRadius: 14,
        padding: "20px 10px",
        background: "#fdf8f5",
      }}
    >
      <div
        suppressHydrationWarning
        style={{
          fontFamily: "var(--font-cormorant)",
          fontWeight: 600,
          fontSize: "clamp(38px,9vw,52px)",
          lineHeight: 1,
          color: accent ? "#c08a6e" : "#a86571",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 12,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#bd8f92",
          marginTop: 8,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function FriendsCountdown() {
  const cd = useCountdown(WEDDING_ISO);

  return (
    <RevealSection style={{ position: "relative", padding: "54px 24px", textAlign: "center" }}>
      <span
        style={{
          display: "inline-block",
          width: 54,
          height: 1,
          background: "#d9b0ac",
          marginBottom: 20,
        }}
      />
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontSize: 16,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#bd8f92",
          margin: "0 0 30px",
        }}
      >
        Counting Down
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "center",
          maxWidth: 560,
          margin: "0 auto",
        }}
      >
        <Unit value={cd.days} label="Days" />
        <Unit value={cd.hours} label="Hours" />
        <Unit value={cd.mins} label="Mins" />
        <Unit value={cd.secs} label="Secs" accent />
      </div>
    </RevealSection>
  );
}
