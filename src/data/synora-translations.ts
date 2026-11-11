import es from "./synora-es.json";
import fr from "./synora-fr.json";
import type { Locale } from "@/lib/i18n";
export const synoraTranslations: Record<
  Exclude<Locale, "en">,
  Record<string, string>
> = { es, fr };
