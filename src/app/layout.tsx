import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vela — Quiet Vedic Almanac",
  description:
    "A calm, editorial Vedic astrology almanac with natal charts, AI astrologer, numerology & palmistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
