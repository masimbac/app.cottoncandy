import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Candy.Coat Body Butters | Luxury Self-Care | Candycoat.co",
  description: "Candy.Coat is a luxury self-care brand creating soft, fluffy, and nourishing body butters. Indulge your skin with rich natural ingredients and irresistible scents in three exquisite flavors: Citrus Kiss, Cotton Candy Swirl, and Powder Cloud. Turn your daily skincare routine into a moment of pure bliss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
