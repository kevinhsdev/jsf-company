import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | Fonoaudiologia com acolhimento`,
  description:
    "Fonoaudiologia para crianças, jovens e adultos: linguagem, fala, voz, motricidade orofacial e fluência. Agende uma avaliação pelo WhatsApp.",
  openGraph: {
    title: `${site.name} | Fonoaudiologia`,
    description: "Cuidado que dá voz a cada história. Agende sua avaliação.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${instrument.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
