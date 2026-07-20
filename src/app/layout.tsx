import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "NexaCommerce — Belanja Lebih Dekat",
    template: "%s | NexaCommerce",
  },
  description:
    "Marketplace Indonesia yang aman, cepat, dan terasa personal untuk pelanggan, seller, dan brand lokal.",
  applicationName: "NexaCommerce",
  keywords: ["marketplace", "e-commerce", "belanja online", "Indonesia"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "NexaCommerce",
    title: "NexaCommerce — Belanja Lebih Dekat",
    description:
      "Temukan produk pilihan dari seller tepercaya di seluruh Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#14201f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-dvh font-sans antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
