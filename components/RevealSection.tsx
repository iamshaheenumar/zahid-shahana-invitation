import { CSSProperties, ReactNode } from "react";

/**
 * A section that starts hidden and is revealed on scroll by the
 * IntersectionObserver wired up in `useScrollReveal` (it targets the
 * `data-reveal` attribute and clears the opacity/transform inline styles).
 */
export default function RevealSection({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <section
      data-reveal
      style={{
        opacity: 0,
        transform: "translateY(28px)",
        transition: "opacity .9s ease, transform .9s ease",
        ...style,
      }}
    >
      {children}
    </section>
  );
}
