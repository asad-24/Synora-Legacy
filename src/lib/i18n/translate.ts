import type { Locale } from "@/lib/i18n";

export type Dictionary = Record<string, string>;
export function normalizeText(value: string) {
  return value
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
export function createTranslator(locale: Locale, dictionary: Dictionary = {}) {
  const normalized = new Map(
    Object.entries(dictionary).map(([key, value]) => [
      normalizeText(key).toLowerCase(),
      value,
    ]),
  );
  const lookup = (value: string) =>
    dictionary[value] ?? normalized.get(normalizeText(value).toLowerCase());
  return (value: string | number | null | undefined): string => {
    if (value == null) return "";
    const text = String(value);
    if (locale === "en" || !text.trim()) return text;
    const direct = lookup(text);
    if (direct) return direct;
    // Existing educational paragraphs occasionally join several individually translated sentences.
    const parts = text.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g);
    if (parts && parts.length > 1 && parts.every((part) => lookup(part.trim())))
      return parts.map((part) => lookup(part.trim())).join(" ");
    const numbered = text.match(/^(\d+\.\s*)(.+)$/);
    if (numbered && lookup(numbered[2]))
      return numbered[1] + lookup(numbered[2]);
    return text;
  };
}
