import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer, MobileCallBar } from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // './' resolves to a per-route canonical (e.g. /pricing → https://lincolnmattresscleaning.com/pricing)
  alternates: { canonical: "./" },
  title: {
    default: "Mattress Cleaning Lincoln NE | Dry Vapor Steam Sanitation",
    template: "%s | Lincoln Mattress Cleaning",
  },
  description: site.description,
  keywords: [
    "mattress cleaning Lincoln NE",
    "mattress cleaning Lincoln Nebraska",
    "mattress sanitization Lincoln",
    "steam mattress cleaning Lincoln",
    "dust mite removal mattress Lincoln",
    "pet urine mattress cleaning Lincoln",
    "mattress cleaning service near me Lincoln",
    "Waverly NE mattress cleaning",
    "Seward NE mattress cleaning",
    "UNL student apartment mattress cleaning",
  ],
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
    url: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="flex flex-col min-h-screen pb-16 md:pb-0">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}