import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";
import FloatingButtons from "./components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Wall Panel Supplier Malaysia | Fluted Panel, PVC Marble, Carbon Crystal ~ Wall Panel Accessories Malaysia",
  description:
    "Wall Panel Accessories Malaysia supplies fluted panels, PVC marble, carbon crystal wall panels, MDF board, wainscoting and accessories for residential, commercial and hotel interiors. Nationwide delivery from Selangor.",
  keywords: [
    "wall panel supplier malaysia",
    "fluted panel",
    "pvc marble",
    "carbon crystal wall panel",
    "wainscoting",
    "mdf board",
    "wall panel accessories",
  ],
  openGraph: {
    title: "Wall Panel Accessories Malaysia",
    description:
      "Fluted panels, PVC marble, carbon crystal, wainscoting and accessories for modern interiors. Nationwide delivery.",
    type: "website",
    locale: "en_MY",
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
      className={`${geistSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
