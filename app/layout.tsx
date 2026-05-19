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

export const metadata = {
  title: "Made 3D Studio | Stampa 3D e Progettazione",
  description:
    "Made 3D Studio realizza soluzioni di stampa 3D, progettazione, prototipazione e personalizzazione.",

  keywords: [
    "stampa 3D",
    "progettazione 3D",
    "prototipazione",
    "modellazione 3D",
    "loghi personalizzati",
  ],

  openGraph: {
    title: "Made 3D Studio",
    description:
      "Stampa 3D, progettazione e personalizzazione professionale.",
    url: "https://made3dstudio.it",
    siteName: "Made 3D Studio",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
