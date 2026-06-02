import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Wall Panel Accessories Malaysia | Profiles, Adhesives, Trims & Installation Hardware",
  description:
    "Malaysia's one-stop supplier of wall panel accessories — aluminum profiles, end caps, adhesives, mounting hardware, LED strips, and installation tools. Nationwide delivery.",
  keywords: [
    "wall panel accessories malaysia",
    "aluminum profiles",
    "end caps",
    "fluted panel trim",
    "panel adhesive",
    "wainscoting accessories",
    "wall panel installation",
  ],
  openGraph: {
    title: "Wall Panel Accessories Malaysia",
    description:
      "Profiles, trims, adhesives and hardware for wall panel installation. Supplying contractors and DIY across Malaysia.",
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
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
