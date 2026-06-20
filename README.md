# Zahid & Shahana — Wedding Invitation

An interactive wedding invitation built with **Next.js (App Router)** + **React** + **TypeScript**.
Implemented from the Claude Design source `Zahid and Shahana.dc.html`.

## Features

- **Scratch-to-reveal** landing card (canvas + pointer/touch) — clears the foil to unveil the invitation
- **Scroll-reveal** sections via `IntersectionObserver`
- **Live countdown** to the wedding (12 August 2026)
- **RSVP form** that persists responses to `localStorage`
- **Background music** toggle with a spinning record button
- Cormorant Garamond / EB Garamond / Amiri loaded through `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx          # fonts + metadata
  page.tsx            # renders <Invitation />
  globals.css         # base styles + keyframes
components/
  Invitation.tsx      # client orchestrator: root, ornaments, section layout
  hooks.ts            # useCountdown, useScrollReveal, useScratchReveal
  RevealSection.tsx   # scroll-reveal section wrapper
  MusicToggle.tsx     # floating music button
  sections/
    Landing.tsx       # hero + scratch card
    Countdown.tsx     # live countdown
    Rsvp.tsx          # RSVP form
    Static.tsx        # date, family, details, verse, blessings, footer
```

## Customising

- **Names / dates / venue** live in `components/sections/Landing.tsx` and `Static.tsx`.
- The **bride's family** placeholders (`[ Father's Name ]`, etc.) are in `Static.tsx` → `Family`.
- The **countdown target** is `WEDDING_ISO` in `components/sections/Countdown.tsx`.
- **Background music**: drop an audio file at `public/assets/bg-music.mp3`.
- The three sections (scratch, countdown, RSVP) can be toggled via the
  `showScratch` / `showCountdown` / `showRsvp` props on `<Invitation />` in `app/page.tsx`.
