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

const title = "Zahid & Shahana — Wedding Invitation";
const description =
  "Together with their families, request the honour of your presence at the wedding of Zahid & Shahana — 12 August 2026, AMBIENCE Auditorium, Feroke.";

// Used to turn the generated opengraph-image into an absolute URL that
// WhatsApp/X can fetch. Point NEXT_PUBLIC_SITE_URL at the deployed domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zahid-shahana.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: title,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
