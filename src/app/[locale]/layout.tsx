import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { MotionProvider } from "@/components/motion/motion-provider";
import { StartupIntro } from "@/components/motion/startup-intro";
import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/i18n";
import { getI18n } from "@/lib/i18n/server";
import { LanguageProvider } from "@/components/site/language-provider";
import "lenis/dist/lenis.css";
import "../globals.css";

const inter = localFont({
  src: "../fonts/inter-latin-variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const baseMetadata: Metadata = {
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
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const dynamicParams = false;
export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return {
    ...baseMetadata,
    title: {
      default: `Synora Legacy | ${t("Protect Today. Secure Tomorrow.")}`,
      template: "%s | Synora Legacy",
    },
    description: t(String(baseMetadata.description)),
    openGraph: {
      ...baseMetadata.openGraph,
      description: t(String(baseMetadata.description)),
      locale: { en: "en_US", es: "es_ES", fr: "fr_FR" }[locale],
      images: [
        {
          url: "/images/services/legacy-planning-hero.png",
          width: 1536,
          height: 1024,
          alt: t("Three generations of a family together"),
        },
      ],
      alternateLocale: ["en_US", "es_ES", "fr_FR"].filter(
        (value) => value !== { en: "en_US", es: "es_ES", fr: "fr_FR" }[locale],
      ),
    },
  };
}
export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { clientDictionary, t } = await getI18n();
  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          {t("Skip to content")}
        </a>
        <LanguageProvider locale={locale} dictionary={clientDictionary}>
          <StartupIntro />
          <MotionProvider>{children}</MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
