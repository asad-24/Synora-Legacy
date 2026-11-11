import type { Metadata } from "next";
import { getI18n } from "./server";
import { withLocalePath } from "@/lib/i18n";
export async function localizedMetadata(
  path: string,
  title: string,
  description?: string,
): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return {
    title: t(title),
    ...(description ? { description: t(description) } : {}),
    alternates: {
      canonical: withLocalePath(path, locale),
      languages: {
        en: withLocalePath(path, "en"),
        es: withLocalePath(path, "es"),
        fr: withLocalePath(path, "fr"),
        "x-default": withLocalePath(path, "en"),
      },
    },
  };
}
