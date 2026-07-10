import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./client-layout";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LELLA — La référence des événements familiaux en Algérie",
  description:
    "Trouvez les meilleurs prestataires pour votre mariage algérien : salles des fêtes, traiteurs, photographes, orchestres, couturiers et plus encore.",
  openGraph: {
    title: "LELLA — Événements familiaux en Algérie",
    description:
      "La plateforme qui transforme chaque grand moment de la famille algérienne en une expérience inoubliable.",
    locale: "fr_FR",
    siteName: "LELLA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${playfair.variable} ${inter.variable} ${notoNaskh.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body text-navy-700 bg-ivory-50 antialiased selection:bg-terracotta-500 selection:text-ivory-50">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
