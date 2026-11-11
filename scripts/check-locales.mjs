import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import ts from "typescript";

// Exercise the production helpers without adding a test runtime dependency.
function loadHelper(file) {
  const exports = {};
  const code = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  new Function("exports", code)(exports);
  return exports;
}
const { withLocalePath, isLocale } = loadHelper("src/lib/i18n.ts");
const { createTranslator } = loadHelper("src/lib/i18n/translate.ts");
assert.equal(
  withLocalePath("/about?source=test#founder-story", "fr"),
  "/fr/about?source=test#founder-story",
);
assert.equal(withLocalePath("/es/contact#schedule", "en"), "/contact#schedule");
assert.equal(
  withLocalePath("/fr/solutions/life-insurance", "es"),
  "/es/solutions/life-insurance",
);
assert.equal(withLocalePath("/es", "fr"), "/fr");
assert.equal(withLocalePath("/api/contact", "es"), "/api/contact");
assert.equal(
  withLocalePath("https://example.com", "fr"),
  "https://example.com",
);
assert.equal(isLocale("de"), false);
const translate = createTranslator("es", {
  "Your choices.": "Sus opciones.",
  "Your future.": "Su futuro.",
  "Today’s priorities": "Las prioridades de hoy",
});
assert.equal(translate("Today's priorities"), "Las prioridades de hoy");
assert.equal(
  translate("Your choices. Your future."),
  "Sus opciones. Su futuro.",
);
assert.equal(
  createTranslator("en", {})("Secure Tomorrow."),
  "Secure Tomorrow.",
);
const build = ".next/server/app";
function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? htmlFiles(join(dir, entry.name))
        : [join(dir, entry.name)],
    )
    .filter((file) => file.endsWith(".html"));
}
const english = [join(build, "en.html"), ...htmlFiles(join(build, "en"))];
const headings = { en: "Secure", es: "Asegure", fr: "Sécurisez" };
const homeLabels = { en: "Home", es: "Inicio", fr: "Accueil" };
for (const locale of ["en", "es", "fr"]) {
  for (const reference of english) {
    const file = reference.replace(`${build}/en`, `${build}/${locale}`);
    const html = readFileSync(file, "utf8");
    assert(html.includes(`<html lang="${locale}"`), file + " HTML language");
    assert.equal(
      (html.match(/<h1(?:\s|>)/g) || []).length,
      1,
      file + " single primary heading",
    );
    assert(
      html.includes('hrefLang="es"') ||
        html.includes('hrefLang="fr"') ||
        html.includes('hreflang="es"'),
      file + " language alternatives",
    );
    if (locale !== "en")
      assert(
        !html.includes(">Protect Today.</span>"),
        file + " translated hero",
      );
  }
  const home = readFileSync(join(build, `${locale}.html`), "utf8");
  assert(home.includes(headings[locale]), locale + " translated tagline");
  assert(
    home.includes(`>${homeLabels[locale]}</a>`),
    locale + " translated navigation",
  );
  assert(
    home.match(/<title>([^<]*)<\/title>/)?.[1].includes(headings[locale]),
    locale + " translated page title",
  );
  assert(
    !home.match(/<title>[^<]*Synora Legacy[^<]*Synora Legacy/),
    locale + " no duplicate site title",
  );
  const about = readFileSync(join(build, locale, "about.html"), "utf8");
  assert(
    about.includes("maam-pic.jpeg"),
    locale + " founder portrait retained",
  );
  const contact = readFileSync(join(build, locale, "contact.html"), "utf8");
  assert(
    contact.includes(`name="locale" value="${locale}"`),
    locale + " form language",
  );
}
console.log(
  `PASS: path/query/hash handling, translator behavior, and ${english.length * 3} pre-rendered pages across English, Spanish, and French.`,
);
