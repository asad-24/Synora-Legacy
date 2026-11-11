"use client";
import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { createTranslator, type Dictionary } from "@/lib/i18n/translate";
const LanguageContext = createContext({
  locale: "en" as Locale,
  t: createTranslator("en"),
});
export function LanguageProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({ locale, t: createTranslator(locale, dictionary) }),
    [locale, dictionary],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  return useContext(LanguageContext);
}
