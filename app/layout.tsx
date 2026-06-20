import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Amiri } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zahid & Shahana — Wedding Invitation",
  description:
    "Together with their families, request the honour of your presence at the wedding of Zahid & Shahana — 12 August 2026, AMBIENCE Auditorium, Feroke.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${ebGaramond.variable} ${amiri.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
