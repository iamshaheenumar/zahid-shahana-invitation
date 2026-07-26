"use client";

import { ImgHTMLAttributes } from "react";

/**
 * Botanical illustrations for the Friends Invite (/friends).
 *
 * These are the design's original watercolor assets (palm frond, monstera,
 * bouquets, grass, footer bush), resized and compressed to web-ready WebP
 * (transparency preserved) under `public/friends/`. Each is exposed as a small
 * component so callers can position/scale it with `style` just like any element.
 */

// Standard <img> attributes (minus the ones we fix) plus any data-* flags.
type BotanicalProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  [key: `data-${string}`]: string | number | boolean | undefined;
};

function botanical(src: string) {
  function Botanical({ style, ...rest }: BotanicalProps) {
    return (
      <img
        src={src}
        alt=""
        loading="lazy"
        draggable={false}
        style={{ display: "block", ...style }}
        {...rest}
      />
    );
  }
  return Botanical;
}

export const PalmLeaf = botanical("/friends/palm-leaf.webp");
export const MonsteraLeaf = botanical("/friends/monstera.webp");
export const Bouquet = botanical("/friends/bouquet.webp");
export const PastelBouquet = botanical("/friends/pastel-bouquet.webp");
export const GrassPlatform = botanical("/friends/grass-platform.webp");
export const FooterBush = botanical("/friends/footer-bush.webp");
