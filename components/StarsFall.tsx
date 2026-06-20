"use client";

import { useEffect, useMemo, useState } from "react";

interface Star {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  char: string;
  opacity: number;
}

const CHARS = ["✦", "✧", "★", "✦", "·"];

function makeStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    size: 8 + Math.random() * 16,
    delay: Math.random() * 6,
    duration: 5 + Math.random() * 6,
    drift: (Math.random() - 0.5) * 160,
    char: CHARS[Math.floor(Math.random() * CHARS.length)],
    opacity: 0.4 + Math.random() * 0.6,
  }));
}

/**
 * A full-screen layer of golden stars drifting down, mounted once the
 * invitation is revealed. Renders nothing on the server (and while inactive)
 * so the random layout never causes a hydration mismatch.
 */
export default function StarsFall({ active }: { active: boolean }) {
  const [mounted, setMounted] = useState(false);
  const stars = useMemo(() => makeStars(40), []);

  useEffect(() => {
    if (active) setMounted(true);
  }, [active]);

  if (!active || !mounted) return null;

  return (
    <div
      data-stars
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 40,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          style={
            {
              position: "absolute",
              top: 0,
              left: `${s.left}%`,
              fontSize: s.size,
              color: "#c9a24b",
              opacity: s.opacity,
              textShadow: "0 0 8px rgba(201,162,75,0.6)",
              "--zs-drift": `${s.drift}px`,
              animation: `zsStarFall ${s.duration}s linear ${s.delay}s infinite`,
            } as React.CSSProperties
          }
        >
          {s.char}
        </span>
      ))}
    </div>
  );
}
