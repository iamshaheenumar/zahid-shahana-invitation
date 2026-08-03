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
  page.tsx            # renders <Invitation /> (the main, dark-gold invite)
  friends/page.tsx    # renders <FriendsInvitation /> (the /friends variant)
  globals.css         # base styles + keyframes (+ .friends-root scoped styles)
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
  friends/            # the "Friends Invite" variant (/friends)
    FriendsInvitation.tsx  # orchestrator: cover reveal, arch, note, details, footer
    FriendsCountdown.tsx   # sage countdown (reuses useCountdown)
    FriendsRsvp.tsx        # sage RSVP form (localStorage key: zs_friends_rsvp)
    FriendsMusicToggle.tsx # sage spinning-record music button
    Botanicals.tsx         # watercolor greenery (WebP from public/friends/)
    CoupleFigures.tsx      # inline-SVG groom + bride for the arch
public/friends/            # optimized watercolor assets (WebP, transparent)
```

## The "Friends Invite" variant — `/friends`

A second, lighter invitation implemented from the Claude Design source
`Zahid and Shahana - Friends Invite.dc.html` — sage-green / cream palette,
Great Vibes script, a full-screen **"Open Invitation"** reveal cover, a foliage
**arch** with the couple, a *Dear Friends* note, When/Where cards, countdown,
RSVP, and a wildflower footer. It lives at `/friends`; the original invite at
`/` is untouched.

The design's watercolor botanicals (palm frond, monstera, bouquets, grass,
footer bush) live in `public/friends/` as **optimized WebP** — resized and
compressed from the originals (~47 MB total → ~1.1 MB, transparency preserved)
and served through the small components in `Botanicals.tsx`. The never-filled
"cartoon couple" image slots are drawn as **stylised SVG figures**
(`CoupleFigures.tsx`); swap in real artwork by editing that file.

## Customising

- **Names / dates / venue** live in `components/sections/Landing.tsx` and `Static.tsx`.
- The **bride's family** placeholders (`[ Father's Name ]`, etc.) are in `Static.tsx` → `Family`.
- The **countdown target** is `WEDDING_ISO` in `components/weddingDate.ts` (shared by
  both invites, pinned to venue time `+05:30`).
- **Background music**: drop an audio file at `public/assets/bg-music.mp3`.
- The three sections (scratch, countdown, RSVP) can be toggled via the
  `showScratch` / `showCountdown` / `showRsvp` props on `<Invitation />` in `app/page.tsx`.
- The **`/friends`** variant toggles its countdown / RSVP via `showCountdown` /
  `showRsvp` on `<FriendsInvitation />` in `app/friends/page.tsx`. Its names,
  date, venue and copy live directly in `components/friends/FriendsInvitation.tsx`.
