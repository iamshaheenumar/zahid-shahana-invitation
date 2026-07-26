"use client";

import { CSSProperties } from "react";

/**
 * Stylised flat-illustration groom & bride that fill the arch centerpiece.
 * The source design left these as empty image slots (a "cartoon groom" and
 * "cartoon bride" were never dropped in), so they're drawn here as simple,
 * elegant figures in the sage palette. Swap in real artwork later by replacing
 * either component.
 */

type FigureProps = { style?: CSSProperties };

const SKIN = "#e7b48c";
const SKIN_SHADOW = "#d79a72";

export function Groom({ style }: FigureProps) {
  return (
    <svg viewBox="0 0 120 210" fill="none" style={style} aria-hidden>
      {/* shadow */}
      <ellipse cx="60" cy="203" rx="34" ry="6" fill="#4a6b46" opacity="0.18" />
      {/* legs / trousers */}
      <path d="M44 128 L40 196 L54 196 L60 140 L66 196 L80 196 L76 128 Z" fill="#37433a" />
      {/* shoes */}
      <path d="M36 196 q-4 6 4 8 h14 v-8 Z" fill="#241f1b" />
      <path d="M84 196 q4 6 -4 8 h-14 v-8 Z" fill="#241f1b" />
      {/* jacket */}
      <path d="M60 70 C40 72 34 86 34 104 L36 134 L84 134 L86 104 C86 86 80 72 60 70 Z" fill="#4a6b46" />
      {/* shirt + lapels */}
      <path d="M60 72 L50 132 L70 132 Z" fill="#faf8f1" />
      <path d="M60 72 L48 96 L54 128 L60 92 Z" fill="#3d5a39" />
      <path d="M60 72 L72 96 L66 128 L60 92 Z" fill="#3d5a39" />
      {/* tie */}
      <path d="M60 82 l-5 6 5 34 5 -34 Z" fill="#b98a4a" />
      {/* arms */}
      <path d="M35 100 C28 112 28 128 32 146 L40 144 C38 128 40 114 44 104 Z" fill="#456743" />
      <path d="M85 100 C92 112 92 128 88 146 L80 144 C82 128 80 114 76 104 Z" fill="#456743" />
      <circle cx="35" cy="147" r="5.5" fill={SKIN} />
      <circle cx="85" cy="147" r="5.5" fill={SKIN} />
      {/* neck + head */}
      <rect x="54" y="58" width="12" height="14" rx="4" fill={SKIN_SHADOW} />
      <circle cx="60" cy="44" r="18" fill={SKIN} />
      {/* hair */}
      <path d="M43 42 C42 24 54 16 60 16 C66 16 78 24 77 42 C74 34 68 30 60 30 C52 30 46 34 43 42 Z" fill="#2b241f" />
      {/* smile */}
      <path d="M54 48 q6 5 12 0" stroke="#b9805c" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Bride({ style }: FigureProps) {
  return (
    <svg viewBox="0 0 120 230" fill="none" style={style} aria-hidden>
      {/* shadow */}
      <ellipse cx="60" cy="221" rx="40" ry="6" fill="#4a6b46" opacity="0.18" />
      {/* veil */}
      <path d="M60 40 C34 60 26 130 30 210 C44 200 76 200 90 210 C94 130 86 60 60 40 Z" fill="#ffffff" opacity="0.5" />
      {/* gown */}
      <path d="M60 74 C50 76 46 92 44 116 C40 152 30 196 26 214 C44 206 76 206 94 214 C90 196 80 152 76 116 C74 92 70 76 60 74 Z" fill="#faf8f1" />
      {/* gown shading + sash */}
      <path d="M60 74 C54 90 52 150 48 210 C56 208 64 208 72 210 C68 150 66 90 60 74 Z" fill="#eee7d6" opacity="0.7" />
      <path d="M46 112 C56 118 64 118 74 112 L72 122 C64 127 56 127 48 122 Z" fill="#b98a4a" opacity="0.85" />
      {/* bodice */}
      <path d="M60 66 C51 68 48 82 50 96 C56 100 64 100 70 96 C72 82 69 68 60 66 Z" fill="#f3ecdd" />
      {/* arms */}
      <path d="M50 88 C42 98 40 112 44 124 L50 120 C48 110 50 100 55 92 Z" fill={SKIN} />
      <path d="M70 88 C78 98 80 112 76 124 L70 120 C72 110 70 100 65 92 Z" fill={SKIN} />
      {/* bouquet held at waist */}
      <g transform="translate(60 126)">
        <circle cx="-8" cy="0" r="6" fill="#f0cbbe" />
        <circle cx="8" cy="0" r="6" fill="#fff4ee" />
        <circle cx="0" cy="-6" r="6.5" fill="#e6b45a" />
        <circle cx="0" cy="4" r="6" fill="#efc7b8" />
        <path d="M-14 4 q6 6 14 6 q8 0 14 -6" stroke="#5c7256" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* neck + head */}
      <rect x="55" y="54" width="10" height="14" rx="4" fill={SKIN_SHADOW} />
      <circle cx="60" cy="42" r="17" fill={SKIN} />
      {/* hair */}
      <path d="M43 44 C40 22 54 14 60 14 C66 14 80 22 77 44 C82 60 80 78 74 92 L69 74 C74 60 72 44 72 40 C66 34 54 34 48 40 C48 44 46 60 51 74 L46 92 C40 78 38 60 43 44 Z" fill="#3a2a22" />
      {/* smile */}
      <path d="M54 46 q6 5 12 0" stroke="#b9805c" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
