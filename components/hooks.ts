import { RefObject, useEffect, useState } from "react";

export interface Countdown {
  days: string;
  hours: string;
  mins: string;
  secs: string;
}

function calc(target: number): Countdown {
  let d = target - Date.now();
  if (d < 0) d = 0;
  return {
    days: String(Math.floor(d / 86400000)),
    hours: String(Math.floor((d % 86400000) / 3600000)).padStart(2, "0"),
    mins: String(Math.floor((d % 3600000) / 60000)).padStart(2, "0"),
    secs: String(Math.floor((d % 60000) / 1000)).padStart(2, "0"),
  };
}

/** Live countdown to the wedding, ticking every second. */
export function useCountdown(targetISO: string): Countdown {
  const target = new Date(targetISO).getTime();
  const [cd, setCd] = useState<Countdown>(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setCd(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return cd;
}

/**
 * Reveals every `[data-reveal]` element inside `rootRef` as it scrolls into
 * view, with a safety fallback that shows anything still hidden after a beat.
 */
export function useScrollReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const show = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            show(en.target as HTMLElement);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    const fallback = setTimeout(() => {
      els.forEach((el) => {
        if (getComputedStyle(el).opacity === "0") show(el);
      });
    }, 2600);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [rootRef]);
}
