import "server-only";
import { cache } from "react";
import { locale as rootLocale } from "next/root-params";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { translations } from "@/data/translations";
import { synoraTranslations } from "@/data/synora-translations";
import clientKeys from "@/data/client-translation-keys.json";
import { services, conversationTopics, navigation } from "@/data/site";
import { createTranslator, normalizeText } from "./translate";

export const getI18n = cache(async () => {
  const locale = await rootLocale();
  if (!isLocale(locale)) notFound();
  const dictionary =
    locale === "en"
      ? {}
      : { ...translations[locale], ...synoraTranslations[locale] };
  const wanted = new Set(
    [
      ...clientKeys,
      ...navigation.map((item) => item.label),
      ...services.map((service) => service.shortTitle),
      ...conversationTopics,
    ].map((value) => normalizeText(value).toLowerCase()),
  );
  const clientDictionary = Object.fromEntries(
    Object.entries(dictionary).filter(([key]) =>
      wanted.has(normalizeText(key).toLowerCase()),
    ),
  );
  return {
    locale,
    dictionary,
    clientDictionary,
    t: createTranslator(locale, dictionary),
  };
});
export async function getTranslation() {
  return (await getI18n()).t;
}
