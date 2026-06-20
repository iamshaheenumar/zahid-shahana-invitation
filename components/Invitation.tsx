"use client";

import { useRef, useState } from "react";
import { useScrollReveal } from "@/components/hooks";
import Landing from "@/components/sections/Landing";
import Countdown from "@/components/sections/Countdown";
import Rsvp from "@/components/sections/Rsvp";
import MusicToggle from "@/components/MusicToggle";
import StarsFall from "@/components/StarsFall";
import {
  Blessings,
  DateBlock,
  Family,
  Footer,
  QuranVerse,
  WeddingDetails,
} from "@/components/sections/Static";

interface InvitationProps {
  showScratch?: boolean;
  showCountdown?: boolean;
  showRsvp?: boolean;
}

interface Ornament {
  top: string;
  left?: string;
  right?: string;
  fontSize: number;
  duration: string;
}

const ornaments: Ornament[] = [
  { top: "12%", left: "8%", fontSize: 18, duration: "5s" },
  { top: "34%", right: "10%", fontSize: 13, duration: "6.5s" },
  { top: "58%", left: "12%", fontSize: 15, duration: "7s" },
  { top: "80%", right: "14%", fontSize: 12, duration: "5.8s" },
];

export default function Invitation({
  showScratch = true,
  showCountdown = true,
  showRsvp = true,
}: InvitationProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rootRef);

  // When there's no cover to tap, the invitation is open from the start.
  const [revealed, setRevealed] = useState(!showScratch);

  return (
    <div
      ref={rootRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        fontFamily: "var(--font-eb-garamond)",
        color: "#e9e1cf",
        background:
          "radial-gradient(1100px 620px at 50% -8%, rgba(201,162,75,0.12), transparent 62%), radial-gradient(820px 520px at 50% 108%, rgba(201,162,75,0.08), transparent 60%), #0e1411",
      }}
    >
      {/* floating ornaments */}
      {ornaments.map((o, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: o.top,
            left: o.left,
            right: o.right,
            color: "#c9a24b",
            fontSize: o.fontSize,
            animation: `zsTwinkle ${o.duration} ease-in-out infinite`,
            pointerEvents: "none",
          }}
        >
          ✦
        </span>
      ))}

      <Landing
        showScratch={showScratch}
        revealed={revealed}
        onReveal={() => setRevealed(true)}
      />
      <DateBlock />
      <Family />
      <WeddingDetails />
      {showCountdown && <Countdown />}
      <QuranVerse />
      <Blessings />
      {showRsvp && <Rsvp />}
      <Footer />

      <StarsFall active={revealed} />
      <MusicToggle autoPlay={revealed} />
    </div>
  );
}
