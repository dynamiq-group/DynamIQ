import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const accentFont = JetBrains_Mono({
  variable: "--font-accent",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DynamIQ Studio — Digital Product Studio",
  description: "Awwwards-caliber digital product studio. Precision against wildness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable}`}
    >
      <body className="min-h-screen bg-void text-parchment font-body relative overflow-x-hidden">
        {/* Grain Overlay */}
        <div className="grain-overlay"></div>
        {children}
      </body>
    </html>
  );
}
