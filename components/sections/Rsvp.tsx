import { FormEvent, useRef, useState } from "react";
import RevealSection from "@/components/RevealSection";

const labelStyle = {
  fontSize: 12,
  letterSpacing: 2,
  textTransform: "uppercase",
  color: "#a89263",
} as const;

const fieldStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(201,162,75,0.3)",
  borderRadius: 10,
  color: "#f0e9da",
  padding: "14px 16px",
  fontFamily: "var(--font-eb-garamond)",
  fontSize: 16,
  width: "100%",
} as const;

export default function Rsvp() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const guestsRef = useRef<HTMLInputElement>(null);
  const attendRef = useRef<HTMLSelectElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const rec = {
      name: nameRef.current?.value ?? "",
      guests: guestsRef.current?.value ?? "",
      attend: attendRef.current?.value ?? "",
      msg: msgRef.current?.value ?? "",
      at: Date.now(),
    };
    // Local backup so a response is never lost, even offline.
    try {
      const arr = JSON.parse(localStorage.getItem("zs_rsvp") || "[]");
      arr.push(rec);
      localStorage.setItem("zs_rsvp", JSON.stringify(arr));
    } catch {
      /* localStorage unavailable */
    }
    // Send to the Google Sheet via the Apps Script Web App.
    const url = process.env.NEXT_PUBLIC_RSVP_URL;
    if (url) {
      try {
        await fetch(url, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(rec),
        });
      } catch {
        /* network failed — localStorage backup still holds it */
      }
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <RevealSection style={{ padding: "90px 24px", textAlign: "center" }}>
      <p
        style={{
          fontFamily: "var(--font-eb-garamond)",
          fontSize: 13,
          letterSpacing: 5,
          textTransform: "uppercase",
          color: "#c9a24b",
          margin: "0 0 14px",
        }}
      >
        Kindly Respond
      </p>
      <h2
        style={{
          fontFamily: "var(--font-cormorant)",
          fontWeight: 600,
          fontSize: "clamp(32px,6vw,52px)",
          margin: "0 0 16px",
          color: "#e9e1cf",
        }}
      >
        Will You Join Us?
      </h2>
      <p
        style={{
          fontStyle: "italic",
          fontSize: 17,
          color: "#bdb39c",
          margin: "0 auto 44px",
          maxWidth: 480,
        }}
      >
        Your presence and prayers would mean the world to us.
      </p>

      {submitted ? (
        <div
          style={{
            maxWidth: 520,
            margin: "0 auto",
            padding: "48px 32px",
            border: "1px solid rgba(201,162,75,0.3)",
            borderRadius: 18,
            background:
              "linear-gradient(180deg, rgba(201,162,75,0.08), rgba(255,255,255,0.012))",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: 26,
              color: "#e9e1cf",
              margin: "0 0 8px",
            }}
          >
            Thank you
          </p>
          <p style={{ fontStyle: "italic", fontSize: 17, color: "#bdb39c", margin: 0 }}>
            Your response has been noted with love. We can&rsquo;t wait to
            celebrate with you.
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          style={{
            maxWidth: 520,
            margin: "0 auto",
            display: "grid",
            gap: 18,
            textAlign: "left",
          }}
        >
          <div style={{ display: "grid", gap: 7 }}>
            <label style={labelStyle}>Full Name</label>
            <input
              ref={nameRef}
              type="text"
              required
              placeholder="Your name"
              style={fieldStyle}
            />
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}
          >
            <div style={{ display: "grid", gap: 7 }}>
              <label style={labelStyle}>Guests</label>
              <input
                ref={guestsRef}
                type="number"
                min={1}
                max={20}
                defaultValue={1}
                style={fieldStyle}
              />
            </div>
            <div style={{ display: "grid", gap: 7 }}>
              <label style={labelStyle}>Response</label>
              <select ref={attendRef} style={fieldStyle}>
                <option value="accept">Joyfully Accept</option>
                <option value="decline">Regretfully Decline</option>
              </select>
            </div>
          </div>
          <div style={{ display: "grid", gap: 7 }}>
            <label style={labelStyle}>A Note for the Couple</label>
            <textarea
              ref={msgRef}
              rows={3}
              placeholder="Share your blessings…"
              style={{ ...fieldStyle, resize: "vertical" }}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: 6,
              fontFamily: "var(--font-eb-garamond)",
              fontSize: 14,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#0e1411",
              background: "linear-gradient(135deg,#f4e3ad,#c9a24b,#a8842f)",
              border: "none",
              padding: 16,
              borderRadius: 30,
              cursor: submitting ? "wait" : "pointer",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? "Sending…" : "Send Our Blessing"}
          </button>
        </form>
      )}
    </RevealSection>
  );
}
