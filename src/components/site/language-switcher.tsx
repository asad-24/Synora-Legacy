"use client";
import { usePathname } from "next/navigation";
import { useLanguage } from "./language-provider";
import { locales, localeLabels, withLocalePath } from "@/lib/i18n";
export function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale, t } = useLanguage();
  return (
    <nav className="language-switcher" aria-label={t("Choose language")}>
      {locales.map((lang) => (
        <a
          key={lang}
          href={withLocalePath(pathname, lang)}
          hrefLang={lang}
          lang={lang}
          aria-current={locale === lang ? "true" : undefined}
          title={localeLabels[lang]}
          onClick={(event) => {
            if (
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            )
              return;
            event.preventDefault();
            window.location.assign(
              withLocalePath(pathname, lang) +
                window.location.search +
                window.location.hash,
            );
          }}
        >
          {lang.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
