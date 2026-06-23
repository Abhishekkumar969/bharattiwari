import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";

const mukta = Mukta({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ["devanagari", "latin"],
  variable: "--font-mukta",
});

export const metadata: Metadata = {
  title: "Bharat Tiwari - Nyay do, Bihar Badlo",
  description: "Anyay ke khilaf awaz uthayein. Hamari maangein padhein aur jan samarthan dein.",
  icons: {
    icon: "/images/bharattiwarijustice.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${mukta.variable}`}>
      <body suppressHydrationWarning style={{ fontFamily: 'var(--font-mukta), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
