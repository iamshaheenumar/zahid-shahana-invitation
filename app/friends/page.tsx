import type { Metadata } from "next";
import FriendsInvitation from "@/components/friends/FriendsInvitation";

const title = "Zahid & Shahana — You're Invited";
const description =
  "Some moments are meant to be shared with the people who matter most. Come celebrate the wedding of Zahid & Shahana — 12 August 2026, AMBIENCE Auditorium, Feroke.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/friends",
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

export default function FriendsPage() {
  return <FriendsInvitation showCountdown showRsvp />;
}
