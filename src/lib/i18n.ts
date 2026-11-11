export const locales = ["en", "es", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeLabels = { en: "English", es: "Español", fr: "Français" };
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
export function stripLocaleFromPathname(pathname: string) {
  return pathname.replace(/^\/(en|es|fr)(?=\/|$)/, "") || "/";
}
export function withLocalePath(href: string, locale: Locale) {
  if (
    !href.startsWith("/") ||
    href.startsWith("//") ||
    /^\/(api|_next|images)(\/|$)/.test(href)
  )
    return href;
  const clean = stripLocaleFromPathname(href.split(/[?#]/)[0]);
  const suffix = href.slice(href.split(/[?#]/)[0].length);
  return (
    (locale === "en" ? clean : `/${locale}${clean === "/" ? "" : clean}`) +
    suffix
  );
}
