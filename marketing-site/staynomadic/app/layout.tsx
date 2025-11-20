import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://staynomadic.example.com"),
  title: {
    default: "StayNomadic — Your nomad concierge",
    template: "%s — StayNomadic",
  },
  description:
    "Concierge for digital nomads. We line up housing, coworking, and adventures—then handle the details so you can enjoy the adventure.",
  openGraph: {
    title: "StayNomadic — Your nomad concierge",
    description:
      "Concierge for digital nomads. We line up housing, coworking, and adventures—then handle the details so you can enjoy the adventure.",
    url: "/",
    siteName: "StayNomadic",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "StayNomadic Open Graph",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StayNomadic — Your nomad concierge",
    description:
      "Concierge for digital nomads. We line up housing, coworking, and adventures—then handle the details so you can enjoy the adventure.",
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
      </head>
      <body className={`${inter.variable} antialiased font-sans min-h-dvh bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
