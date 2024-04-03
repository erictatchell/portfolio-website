import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic'

const inter = Roboto_Mono({ subsets: [] });

export const metadata: Metadata = {
  title: "Eric Tatchell",
  description: "Software Developer & Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

