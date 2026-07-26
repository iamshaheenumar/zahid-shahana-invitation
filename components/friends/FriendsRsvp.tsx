"use client";

import { FormEvent, useRef, useState } from "react";
import RevealSection from "@/components/RevealSection";

const labelStyle = {
  fontSize: 12,
  letterSpacing: 1.5,
  textTransform: "uppercase",
  color: "#bd8f92",
} as const;

const fieldStyle = {
  background: "#fdf8f5",
  border: "1px solid #ecd7d3",
  borderRadius: 12,
  color: "#5e4b47",
  padding: "13px 16px",
  fontFamily: "var(--font-cormorant)",
  fontSize: 18,
  fontWeight: 500,
  width: "100%",
} as const;

export default function FriendsRsvp() {
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
      variant: "friends",
      at: Date.now(),
    };
    // Local backup so a response is never lost, even offline.
    try {
      const arr = JSON.parse(localStorage.getItem("zs_friends_rsvp") || "[]");
      arr.push(rec);
      localStorage.setItem("zs_friends_rsvp", JSON.stringify(arr));
    } catch {
      /* localStorage unavailable */
    }
    // Send to the same Google Sheet as the main invite (tagged variant:friends).
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
    <RevealSection
      style={{ position: "relative", padding: "54px 26px 30px", textAlign: "center" }}
    >
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          fontStyle: "italic",
          fontSize: 16,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#bd8f92",
          margin: "0 0 10px",
        }}
      >
        Kindly Reply
      </p>
      <h2
        style={{
          fontFamily: "var(--font-great-vibes)",
          fontWeight: 400,
          fontSize: "clamp(40px,11vw,62px)",
          margin: "0 0 8px",
          color: "#a86571",
        }}
      >
        Will you be there?
      </h2>
      <p
        style={{
          fontSize: 17,
          fontWeight: 500,
          color: "#6f5852",
          margin: "0 auto 34px",
          maxWidth: 420,
        }}
      >
        Let us know so we can save you a seat at our celebration.
      </p>

      {submitted ? (
        <div
          style={{
            maxWidth: 460,
            margin: "0 auto",
            border: "1px solid #ecd7d3",
            borderRadius: 18,
            padding: "38px 30px",
            background: "#fdf8f5",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-great-vibes)",
              fontSize: 38,
              color: "#a86571",
              margin: "0 0 8px",
            }}
          >
            Thank you!
          </h3>
          <p style={{ fontSize: 17, fontWeight: 500, color: "#6f5852", margin: 0 }}>
            We&rsquo;ve received your response and can&rsquo;t wait to celebrate with you.
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          style={{
            maxWidth: 460,
            margin: "0 auto",
            display: "grid",
            gap: 15,
            textAlign: "left",
          }}
        >
          <div style={{ display: "grid", gap: 6 }}>
            <label style={labelStyle}>Your name</label>
            <input ref={nameRef} type="text" required placeholder="Full name" style={fieldStyle} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15 }}>
            <div style={{ display: "grid", gap: 6 }}>
              <label style={labelStyle}>Guests</label>
              <input ref={guestsRef} type="number" min={1} max={20} defaultValue={1} style={fieldStyle} />
            </div>
            <div style={{ display: "grid", gap: 6 }}>
              <label style={labelStyle}>Coming?</label>
              <select ref={attendRef} style={fieldStyle}>
                <option value="accept">Yes, count me in!</option>
                <option value="decline">Sadly, can&rsquo;t make it</option>
              </select>
            </div>
          </div>
          <div style={{ display: "grid", gap: 6 }}>
            <label style={labelStyle}>A message for the couple</label>
            <textarea
              ref={msgRef}
              rows={3}
              placeholder="Send your love..."
              style={{ ...fieldStyle, resize: "vertical" }}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: 4,
              fontFamily: "var(--font-cormorant)",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 1,
              color: "#fdf6f3",
              background: "#b07681",
              border: "none",
              padding: 15,
              borderRadius: 12,
              cursor: submitting ? "wait" : "pointer",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? "Sending…" : "Send RSVP"}
          </button>
        </form>
      )}
    </RevealSection>
  );
}
