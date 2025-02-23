import type { Metadata } from "next";
import { Geist, Geist_Mono, Blinker } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const blinker = Blinker({
  variable: "--font-blinker",
  subsets: ["latin"],
  weight: ["600", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Who's Afraid of Tailwind",
  description: "Learn Tailwind CSS By Recreating Art!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${blinker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
