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
  title: "Willian Rogati - Portifólio",
  description: "Portifólio de Willian Rogati, desenvolvedor FullStack especializado em React, Next.js e TypeScript. Explore projetos, habilidades e experiências profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="PT-BR"

    >
      <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>{children}</body>
    </html>
  );
}
