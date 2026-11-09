import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { MotionProvider } from "@/components/motion/motion-provider";
import { StartupIntro } from "@/components/motion/startup-intro";
import "lenis/dist/lenis.css";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin-variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://synoralegacy.com"),
  title: {
    default: "Synora Legacy | Protect Today. Secure Tomorrow.",
    template: "%s | Synora Legacy",
  },
  description:
    "Helping individuals and families make confident financial choices, protect what matters most, prepare for tomorrow, and build a legacy that lasts.",
  openGraph: {
    title: "Synora Legacy",
    description:
      "Helping individuals and families make confident financial choices, protect what matters most, prepare for tomorrow, and build a legacy that lasts.",
    siteName: "Synora Legacy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/services/legacy-planning-hero.png",
        width: 1536,
        height: 1024,
        alt: "Three generations of a family together",
      },
    ],
  },
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <StartupIntro />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
