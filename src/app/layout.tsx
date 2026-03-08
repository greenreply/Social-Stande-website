import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Social Standee | NFC & QR Google Review Standee for Businesses",
  description: "Increase Google reviews instantly with NFC and QR review standees designed for restaurants, salons, clinics, and retail shops.",
  keywords: [
    "Google Review Standee",
    "NFC Review Standee",
    "QR Code Review Standee",
    "Get More Google Reviews",
    "Increase Google Reviews for Business",
    "Social Standee",
    "Contactless Reviews"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen bg-grid">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
