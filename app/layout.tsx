import type { Metadata } from "next";
import { Playfair_Display, Poppins, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "500", "700"],
  variable: "--font-telugu",
});

export const metadata: Metadata = {
  title: "Rama Tailoring Studio",
  description: "Premium Women's Tailoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} ${notoTelugu.variable}`}
      >
        {children}
      </body>
    </html>
  );
}