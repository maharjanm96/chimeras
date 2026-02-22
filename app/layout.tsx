import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chimeras — Pursuit of the Impossible",
  description:
    "Where myth meets modern design. We craft ethereal brand identities that blur the line between imagination and reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <Header />
      <body className="antialiased">{children}</body>
    </html>
  );
}
