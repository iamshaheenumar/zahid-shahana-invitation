"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/components/hooks";
import RevealSection from "@/components/RevealSection";
import FriendsMusicToggle from "@/components/friends/FriendsMusicToggle";
import FriendsCountdown from "@/components/friends/FriendsCountdown";
import FriendsRsvp from "@/components/friends/FriendsRsvp";

interface FriendsInvitationProps {
  showCountdown?: boolean;
  showRsvp?: boolean;
}

const MAPS_URL_1 = "https://share.google/IsNSVaxNgXooy4p6d";
const MAPS_URL = "https://share.google/FBHfmFp5Vjb65VY7q";

// dusty-rose / blush palette (from the "Friends Invite" Claude Design)
const ROSE = "#a86571"; // names, headings, script accents
const ROSE_MUTED = "#bd8f92"; // eyebrow labels, italic captions
const ROSE_BTN = "#b07681"; // primary button fill
const DIVIDER = "#d9b0ac";
const CARD_BG = "#fdf8f5";
const CARD_BORDER = "#ecd7d3";

// Watercolor floral spray anchored in each page corner. The source art hugs
// the top-right, so it sits raw in the top-right and is flipped into place for
// the others: mirrored horizontally for top-left, flipped down for bottom-right,
// and flipped both ways for bottom-left.
const corners: { pos: CSSProperties; transform: string }[] = [
  { pos: { top: 0, right: 0 }, transform: "none" },
  { pos: { top: 0, left: 0 }, transform: "scaleX(-1)" },
  { pos: { bottom: 0, right: 0 }, transform: "scaleY(-1)" },
  { pos: { bottom: 0, left: 0 }, transform: "scale(-1,-1)" },
];

// Falling florals — blush rose petals plus sage and golden leaves, colors
// sampled straight from the corner watercolor so the drift matches the art.
// `leaf: true` swaps the teardrop petal shape for a pointed leaf.
const falling = [
  {
    left: "6%",
    w: 11,
    h: 15,
    dur: "15s",
    delay: "0s",
    c: "#eec6cb",
    o: 0.6,
    leaf: false,
  },
  {
    left: "15%",
    w: 9,
    h: 17,
    dur: "18s",
    delay: "5s",
    c: "#9bb0a0",
    o: 0.55,
    leaf: true,
  },
  {
    left: "24%",
    w: 12,
    h: 16,
    dur: "13s",
    delay: "2s",
    c: "#e8b3ba",
    o: 0.6,
    leaf: false,
  },
  {
    left: "33%",
    w: 8,
    h: 16,
    dur: "17s",
    delay: "8s",
    c: "#c8a86e",
    o: 0.55,
    leaf: true,
  },
  {
    left: "42%",
    w: 10,
    h: 14,
    dur: "16s",
    delay: "3s",
    c: "#e6cbc6",
    o: 0.55,
    leaf: false,
  },
  {
    left: "50%",
    w: 9,
    h: 17,
    dur: "19s",
    delay: "11s",
    c: "#8aa596",
    o: 0.5,
    leaf: true,
  },
  {
    left: "58%",
    w: 12,
    h: 16,
    dur: "14s",
    delay: "1s",
    c: "#d99ca6",
    o: 0.6,
    leaf: false,
  },
  {
    left: "67%",
    w: 8,
    h: 16,
    dur: "18s",
    delay: "6s",
    c: "#b9925a",
    o: 0.55,
    leaf: true,
  },
  {
    left: "75%",
    w: 11,
    h: 15,
    dur: "15s",
    delay: "9s",
    c: "#eec6cb",
    o: 0.55,
    leaf: false,
  },
  {
    left: "84%",
    w: 9,
    h: 17,
    dur: "20s",
    delay: "4s",
    c: "#9bb0a0",
    o: 0.5,
    leaf: true,
  },
  {
    left: "91%",
    w: 10,
    h: 14,
    dur: "13s",
    delay: "12s",
    c: "#e8b3ba",
    o: 0.6,
    leaf: false,
  },
  {
    left: "38%",
    w: 8,
    h: 16,
    dur: "21s",
    delay: "14s",
    c: "#c8a86e",
    o: 0.5,
    leaf: true,
  },
  {
    left: "70%",
    w: 10,
    h: 14,
    dur: "16s",
    delay: "7s",
    c: "#e6cbc6",
    o: 0.5,
    leaf: false,
  },
  {
    left: "20%",
    w: 9,
    h: 17,
    dur: "19s",
    delay: "16s",
    c: "#8aa596",
    o: 0.5,
    leaf: true,
  },
];

const detailCard: CSSProperties = {
  flex: "1 1 180px",
  maxWidth: 200,
  textAlign: "center",
  border: `1px solid ${CARD_BORDER}`,
  borderRadius: 14,
  padding: "22px 16px",
  background: CARD_BG,
};
const detailLabel: CSSProperties = {
  fontFamily: "var(--font-cormorant)",
  fontSize: 12,
  letterSpacing: 2.5,
  textTransform: "uppercase",
  color: ROSE_MUTED,
  margin: "0 0 8px",
};
const detailScript: CSSProperties = {
  fontFamily: "var(--font-great-vibes)",
  fontSize: 22,
  color: ROSE,
  margin: 0,
};

export default function FriendsInvitation({
  showCountdown = true,
  showRsvp = true,
}: FriendsInvitationProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  const [opened, setOpened] = useState(false);
  const [coverGone, setCoverGone] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);
  const portraitRef = useRef<HTMLImageElement>(null);

  // Paint the page blush while this variant is mounted, then restore the
  // site's dark background on the way out.
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = "#f6ece8";
    return () => {
      document.body.style.background = prev;
    };
  }, []);

  // Catch a portrait that 404s (or errors) before hydration attaches onError —
  // a broken <img> glyph would otherwise show until the real photo is dropped in.
  useEffect(() => {
    const img = portraitRef.current;
    if (img && img.complete && img.naturalWidth === 0) setPortraitFailed(true);
  }, []);

  const open = () => {
    setOpened(true);
    window.setTimeout(() => setCoverGone(true), 1000);
  };

  return (
    <div
      ref={rootRef}
      className="friends-root"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "var(--font-cormorant)",
        color: "#5e4b47",
        background: "linear-gradient(180deg,#faf1ee,#f6ece8)",
        // establish a stacking context so the z-index:-1 corner florals sit
        // above the background but behind all page content
        zIndex: 0,
      }}
    >
      {/* ============ INTRO REVEAL COVER ============ */}
      {!coverGone && (
        <div
          className="friends-cover"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "linear-gradient(180deg,#fdf6f3,#f3dfdb)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 32,
            transition:
              "transform 1s cubic-bezier(.7,0,.2,1), opacity .8s ease",
            transform: opened ? "translateY(-102%)" : "translateY(0)",
            opacity: opened ? 0 : 1,
          }}
        >
          <span
            data-foliage
            style={{
              position: "absolute",
              top: "14%",
              left: "14%",
              width: 12,
              height: 16,
              borderRadius: "60% 60% 60% 0",
              background: "#eec6cb",
              animation: "frFloat 5s ease-in-out infinite",
            }}
          />
          <span
            data-foliage
            style={{
              position: "absolute",
              bottom: "16%",
              right: "16%",
              width: 12,
              height: 16,
              borderRadius: "60% 60% 60% 0",
              background: "#e6cbc6",
              animation: "frFloat 6s ease-in-out infinite .5s",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 16,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: ROSE_MUTED,
              margin: "0 0 14px",
            }}
          >
            You&rsquo;re Invited
          </p>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-great-vibes)",
              fontWeight: 400,
              lineHeight: 1,
              fontSize: "clamp(52px,15vw,92px)",
              color: ROSE,
            }}
          >
            Zahid &amp; Shahana
          </h1>
          <p
            style={{
              fontSize: 19,
              fontWeight: 500,
              color: "#6f5852",
              margin: "18px 0 38px",
            }}
          >
            are getting married — and we&rsquo;d love you there.
          </p>
          <button
            onClick={open}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-cormorant)",
              fontWeight: 600,
              fontSize: 19,
              letterSpacing: 1,
              color: "#fdf6f3",
              background: ROSE_BTN,
              border: "none",
              padding: "15px 40px",
              borderRadius: 40,
              cursor: "pointer",
              boxShadow: "0 12px 28px rgba(176,118,129,0.34)",
            }}
          >
            Open Invitation
          </button>
          <p
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "#c19a9c",
              margin: "18px 0 0",
            }}
          >
            ♪ turn your sound on
          </p>
        </div>
      )}

      {/* ===== watercolor corner florals ===== */}
      {corners.map((c, i) => (
        <img
          key={i}
          src="/friends/corner-floral.webp"
          alt=""
          aria-hidden
          draggable={false}
          style={{
            position: "absolute",
            ...c.pos,
            width: "clamp(120px,30vw,250px)",
            height: "auto",
            zIndex: -1,
            pointerEvents: "none",
            transform: c.transform,
            opacity: 0.9,
          }}
        />
      ))}

      {/* ===== falling petals & leaves ===== */}
      {falling.map((p, i) => (
        <span
          key={i}
          data-petal
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: p.left,
            width: p.w,
            height: p.h,
            borderRadius: p.leaf ? "0 100% 0 100%" : "60% 60% 60% 0",
            background: p.c,
            opacity: p.o,
            animation: `frDrift ${p.dur} linear ${p.delay} infinite`,
          }}
        />
      ))}

      {/* ============ HERO PORTRAIT ARCH ============ */}
      <section
        style={{
          position: "relative",
          maxWidth: 600,
          margin: "0 auto",
          padding: "85px 26px 0",
          textAlign: "center",
        }}
      >
        {/* ornate framed arch card */}
        <div
          style={{
            position: "relative",
            border: "1px solid #eccfcb",
            borderRadius: "220px 220px 20px 20px",
            padding: 12,
            background: "linear-gradient(180deg,#fdf7f4,#f6e6e1)",
            boxShadow: "0 26px 64px rgba(150,95,105,0.20)",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "210px 210px 14px 14px",
              overflow: "hidden",
              background: "#fbeeeb",
              // keep the arch proportioned before the photo loads / if it's missing
              aspectRatio: portraitFailed ? "1149 / 1369" : undefined,
              display: portraitFailed ? "flex" : "block",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {portraitFailed ? (
              <span
                aria-hidden
                style={{
                  fontFamily: "var(--font-great-vibes)",
                  fontSize: "clamp(48px,14vw,84px)",
                  color: ROSE,
                  opacity: 0.4,
                }}
              >
                Z &amp; S
              </span>
            ) : (
              <img
                ref={portraitRef}
                src="/friends/couple-portrait.jpeg"
                alt="Zahid and Shahana"
                onError={() => setPortraitFailed(true)}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            )}
          </div>
        </div>

        {/* name plate */}
        <div style={{ marginTop: 26 }}>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: 15,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: ROSE_MUTED,
              margin: "0 0 45px",
            }}
          >
            Together with our families
          </p>
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              fontSize: "clamp(46px,15vw,82px)",
              lineHeight: 0.92,
              margin: 0,
              color: ROSE,
            }}
          >
            Zahid
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(18px,5vw,26px)",
              letterSpacing: 3,
              color: ROSE_MUTED,
              margin: "6px 0",
            }}
          >
            weds
          </p>
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              fontSize: "clamp(46px,15vw,82px)",
              lineHeight: 0.92,
              margin: 0,
              color: ROSE,
            }}
          >
            Shahana
          </p>
          <span
            style={{
              display: "inline-block",
              width: 64,
              height: 1,
              background: DIVIDER,
              margin: "22px auto 0",
            }}
          />
        </div>
      </section>

      {/* watercolor bouquet crowning the note below — blooms up on scroll */}
      <img
        src="/friends/footer-bouquet.png"
        alt=""
        aria-hidden
        draggable={false}
        data-reveal
        style={{
          display: "block",
          // caps at 440px on desktop; on phones it scales down to a tidy
          // centerpiece that nests between the corner florals
          width: "clamp(240px, 64vw, 440px)",
          height: "auto",
          margin: "18px auto -8px",
          pointerEvents: "none",
          opacity: 0,
          transform: "translateY(28px)",
          transition: "opacity 1.1s ease, transform 1.1s ease",
        }}
      />

      {/* ============ DEAR FRIENDS NOTE ============ */}
      <RevealSection
        style={{
          position: "relative",
          maxWidth: 560,
          margin: "0 auto",
          padding: "50px 34px 34px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-great-vibes)",
            fontSize: "clamp(34px,10vw,52px)",
            color: ROSE,
            margin: "0 0 22px",
          }}
        >
          Dear Friends,
        </p>
        <p
          style={{
            fontSize: "clamp(19px,5vw,23px)",
            lineHeight: 1.75,
            fontWeight: 500,
            color: "#5f4d48",
            margin: 0,
          }}
        >
          Some moments are meant to be shared with the people who matter most —
          and to us, that&rsquo;s you. With hearts full of joy, we warmly invite
          you to celebrate the beginning of our forever.
        </p>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "clamp(17px,4.5vw,20px)",
            color: ROSE_MUTED,
            margin: "26px 0 0",
          }}
        >
          Come laugh, dance and make memories with us.
        </p>
      </RevealSection>

      {/* ============ DETAILS STRIP ============ */}
      <RevealSection
        style={{ maxWidth: 600, margin: "0 auto", padding: "8px 26px 40px" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 18,
          }}
        >
          <div style={detailCard}>
            <p style={detailLabel}>When</p>
            <p style={detailScript}>12 August 2026</p>
          </div>
          <div style={detailCard}>
            <p style={detailLabel}>Nikah</p>
            <p style={detailScript}>1955 Convention Centre</p>
            <p style={{ fontSize: 16, color: "#6f5852", margin: "4px 0 8px" }}>
              Farook College Rd, Ramanattukara
            </p>
            <p style={{ fontSize: 16, color: "#6f5852", margin: "0px 0 4px" }}>
              From 10 in Morning
            </p>
            <a
              href={MAPS_URL_1}
              target="_blank"
              rel="noopener"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                color: ROSE,
              }}
            >
              Get directions →
            </a>
          </div>

          <div style={detailCard}>
            <p style={detailLabel}>Reception</p>
            <p style={detailScript}>Ambience Auditorium</p>
            <p style={{ fontSize: 16, color: "#6f5852", margin: "4px 0 8px" }}>
              Kadalundi Rd, Feroke
            </p>
            <p style={{ fontSize: 16, color: "#6f5852", margin: "0px 0 4px" }}>
              From 6 - 9 in the evening
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                color: ROSE,
              }}
            >
              Get directions →
            </a>
          </div>
        </div>
      </RevealSection>

      {showCountdown && <FriendsCountdown />}
      {showRsvp && <FriendsRsvp />}

      {/* ============ FOOTER ============ */}
      <footer
        style={{
          position: "relative",
          padding: "30px 24px 120px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 54,
            height: 1,
            background: DIVIDER,
            marginBottom: 20,
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-great-vibes)",
            fontSize: 38,
            color: ROSE,
            margin: 0,
          }}
        >
          With love, Zahid &amp; Shahana
        </p>
      </footer>

      <FriendsMusicToggle autoPlay={opened} />
    </div>
  );
}
