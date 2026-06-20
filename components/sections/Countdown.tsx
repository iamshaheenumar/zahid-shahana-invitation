import RevealSection from "@/components/RevealSection";
import { useCountdown } from "@/components/hooks";

const WEDDING_ISO = "2026-08-12T16:00:00";

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        flex: "1 1 120px",
        minWidth: 120,
        padding: "30px 14px",
        border: "1px solid rgba(201,162,75,0.26)",
        borderRadius: 16,
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: 52,
          lineHeight: 1,
          background: "linear-gradient(135deg,#f4e3ad,#c9a24b,#a8842f)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 12,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#8f876f",
          marginTop: 12,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  const cd = useCountdown(WEDDING_ISO);

  return (
    <RevealSection style={{ padding: "90px 24px", textAlign: "center" }}>
      <p
        style={{
          fontFamily: "var(--font-eb-garamond)",
          fontSize: 13,
          letterSpacing: 5,
          textTransform: "uppercase",
          color: "#c9a24b",
          margin: "0 0 16px",
        }}
      >
        Counting Down
      </p>
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontSize: "clamp(22px,4vw,30px)",
          color: "#bdb39c",
          margin: "0 auto 44px",
          maxWidth: 560,
          lineHeight: 1.5,
        }}
      >
        Time moves slowly when you&rsquo;re waiting for something beautiful.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "center",
          maxWidth: 640,
          margin: "0 auto",
        }}
      >
        <Unit value={cd.days} label="Days" />
        <Unit value={cd.hours} label="Hours" />
        <Unit value={cd.mins} label="Minutes" />
        <Unit value={cd.secs} label="Seconds" />
      </div>
    </RevealSection>
  );
}
