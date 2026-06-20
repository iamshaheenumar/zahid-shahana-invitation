const goldText = {
  background: "linear-gradient(135deg,#f4e3ad,#c9a24b 50%,#a8842f)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

export default function Landing({
  showScratch,
  revealed,
  onReveal,
}: {
  showScratch: boolean;
  revealed: boolean;
  onReveal: () => void;
}) {
  const showCover = showScratch && !revealed;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "64px 20px 96px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          marginBottom: 22,
        }}
      >
        <span
          style={{
            height: 1,
            width: 40,
            background: "linear-gradient(90deg,transparent,#c9a24b)",
          }}
        />
        <span style={{ color: "#c9a24b", fontSize: 11, letterSpacing: 6 }}>
          ✦ ✦ ✦
        </span>
        <span
          style={{
            height: 1,
            width: 40,
            background: "linear-gradient(90deg,#c9a24b,transparent)",
          }}
        />
      </div>
      <p
        style={{
          fontFamily: "var(--font-eb-garamond)",
          fontSize: 13,
          letterSpacing: 5,
          textTransform: "uppercase",
          color: "#bdb39c",
          margin: "0 0 30px",
        }}
      >
        An Invitation Awaits
      </p>

      {/* card + foil */}
      <div
        style={{
          position: "relative",
          width: "min(90vw,400px)",
          height: "min(134vw,570px)",
          borderRadius: 14,
          boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
          animation: "zsPulse 4s ease-in-out infinite",
        }}
      >
        {/* the invitation card (revealed beneath) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 14,
            padding: 3,
            background:
              "linear-gradient(150deg,#e6cf86,#a8842f 40%,#8f6f28 60%,#e6cf86)",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "100%",
              borderRadius: 11,
              background:
                "radial-gradient(120% 80% at 50% 0%, #1c271f, #0e1411 70%)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "34px 26px",
              textAlign: "center",
            }}
          >
            {/* inner frame line */}
            <span
              style={{
                position: "absolute",
                inset: 13,
                border: "1px solid rgba(201,162,75,0.4)",
                borderRadius: 6,
                pointerEvents: "none",
              }}
            />
            {/* corner flourishes */}
            <span
              style={{ position: "absolute", top: 8, left: 11, color: "#c9a24b", fontSize: 15 }}
            >
              ❧
            </span>
            <span
              style={{ position: "absolute", top: 8, right: 11, color: "#c9a24b", fontSize: 15, transform: "scaleX(-1)" }}
            >
              ❧
            </span>
            <span
              style={{ position: "absolute", bottom: 8, left: 11, color: "#c9a24b", fontSize: 15, transform: "scaleY(-1)" }}
            >
              ❧
            </span>
            <span
              style={{ position: "absolute", bottom: 8, right: 11, color: "#c9a24b", fontSize: 15, transform: "scale(-1,-1)" }}
            >
              ❧
            </span>

            <p
              dir="rtl"
              style={{
                fontFamily: "var(--font-amiri)",
                fontSize: 19,
                color: "#d9bd6e",
                margin: "0 0 18px",
                lineHeight: 1.8,
              }}
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p
              style={{
                fontFamily: "var(--font-eb-garamond)",
                fontSize: 10.5,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#a89263",
                margin: "0 0 18px",
                lineHeight: 1.7,
              }}
            >
              Together with their families
              <br />
              request the honour of your presence
              <br />
              at the wedding of
            </p>

            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                lineHeight: 0.98,
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(38px,12vw,54px)",
                  ...goldText,
                }}
              >
                Zahid
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-eb-garamond)",
                  fontStyle: "italic",
                  fontSize: 22,
                  color: "#c9a24b",
                  margin: "2px 0",
                }}
              >
                &amp;
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(38px,12vw,54px)",
                  ...goldText,
                }}
              >
                Shahana
              </span>
            </h1>

            <span
              style={{
                display: "block",
                width: 46,
                height: 1,
                background: "rgba(201,162,75,0.6)",
                margin: "20px auto",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: 20,
                letterSpacing: 1,
                color: "#e9e1cf",
                margin: 0,
              }}
            >
              12 August 2026
            </p>
            <p
              style={{
                fontFamily: "var(--font-eb-garamond)",
                fontSize: 11,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                color: "#a89263",
                margin: "7px 0 0",
              }}
            >
              Wednesday · 4 – 9 PM
            </p>
            <p
              style={{
                fontFamily: "var(--font-eb-garamond)",
                fontStyle: "italic",
                fontSize: 13,
                color: "#bdb39c",
                margin: "14px 0 0",
              }}
            >
              AMBIENCE Auditorium, Feroke
            </p>
          </div>
        </div>

        {/* tappable foil cover — animates away on click to reveal the card */}
        {showScratch && (
          <button
            type="button"
            onClick={onReveal}
            aria-label="Tap to reveal the invitation"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              padding: 0,
              border: "none",
              borderRadius: 14,
              overflow: "hidden",
              cursor: revealed ? "default" : "pointer",
              pointerEvents: revealed ? "none" : "auto",
              background:
                "linear-gradient(135deg,#a8842f,#e6cf86 40%,#c9a24b 60%,#8f6f28)",
              boxShadow: "inset 0 0 0 3px rgba(20,28,24,0.25)",
              animation: revealed ? "zsFoilAway .9s ease forwards" : undefined,
            }}
          >
            {/* shimmer sweep */}
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "45%",
                height: "100%",
                background:
                  "linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)",
                animation: "zsShimmer 3.4s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />
            {/* seal + prompt */}
            <span
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                color: "#3a2e10",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(58,46,16,0.55)",
                  fontSize: 26,
                  animation: "zsFloat 4s ease-in-out infinite",
                }}
              >
                ✦
              </span>
              <span
                style={{
                  fontFamily: "var(--font-eb-garamond)",
                  fontSize: 12,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Tap to Reveal
              </span>
            </span>
          </button>
        )}
      </div>

      {showCover && (
        <p
          style={{
            margin: "26px 0 0",
            fontSize: 14,
            fontStyle: "italic",
            color: "#8f876f",
          }}
        >
          ✦ Tap the card to reveal your invitation ✦
        </p>
      )}

      <div
        style={{
          position: "absolute",
          bottom: 26,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "#8f876f",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-eb-garamond)",
            fontSize: 11,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <span
          style={{
            width: 1,
            height: 30,
            background: "linear-gradient(#c9a24b,transparent)",
          }}
        />
      </div>
    </section>
  );
}
