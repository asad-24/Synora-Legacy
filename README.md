# Synora Legacy

Independent, multilingual Next.js website (English, Spanish, and French) created from the adjacent `fredsola` project. The original project is unchanged.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3010. For a production build, run `npm run build`, then `npm start -- --port 3010`.

## Included

- Luxury navy, champagne gold, and white branding; Inter typography matching Fredsola; full-width family imagery; shield/tree mark; and favicon.
- Responsive homepage, about, solutions and 13 solution detail pages, resources and resource details, FAQ, careers, contact, and legal pages.
- FilmPermit-inspired floating capsule navigation, animated mobile drawer, blurred word reveals, scroll reveals, Lenis smooth scrolling, parallax images, cinematic service cards, looping focus strip with pause control, animated process numbers, short branded intro, and expandable FAQs. All use Synora’s existing navy/gold palette and Fredsola’s educational content with Spanish and French translations.
- Accessible links and forms, reduced-motion support, no-JavaScript content fallbacks, and social metadata.
- Existing educational content and imagery adapted from the reference project. All adapted content remains a draft for this new business.
- Brevo contact endpoints and optional Calendly booking. No original secrets, founder identity, license, testimonials, carrier appointments, or private Git history were copied into this project.

## Languages

- English uses the existing URLs, such as `/about`; Spanish uses `/es/about`; French uses `/fr/about`.
- EN / ES / FR controls are available in the floating header and mobile drawer. Switching preserves the current page, query parameters, and section anchor.
- Pages are rendered in the selected language on the server, including document language, navigation, forms, founder biography, educational documents, notices, and metadata. No browser translation service or DOM text replacement is used.
- Shared content lives under `src/app/[locale]`. `src/proxy.ts` maps the original English URLs to the English routes; direct `/en` URLs redirect to their original, unprefixed URLs.
- `src/data/translations.ts` and `generated-translations.ts` reuse Fredsola’s translation corpus. `synora-es.json` and `synora-fr.json` supply Synora-specific wording and corrections. Brand names and personal credentials remain unchanged.
- `npm run build` generates all language versions and refreshes the small client-message subset. `npm run check:locales` verifies language routes, metadata, and path/translation helpers against the completed build.
- Use `getTranslation()` in Server Components, `useTranslation()` in Client Components, and `LocaleLink` for internal navigation when adding content. Add both translations when adding a new message.

## Complete before launch

1. Add the real representative name, exact approved professional title, license/NPN, approved disclosures, contact details, privacy policy, and terms to `src/data/site-profile.json`. Unknown credentials are intentionally blank.
2. Review and approve all inherited educational copy and imagery for Synora Legacy. `approved-content.ts` is the inherited content module name; it does not mean the adapted copy is approved for the new business.
3. Copy `.env.example` to `.env.local` and configure this business's own Brevo, recipient, sender, and Turnstile credentials. Contact controls are disabled and both endpoints return 503 until configuration is complete. Configure Calendly if desired.
4. Run `npm run check:launch`, `npm run build`, and verify real email delivery, spam protection, and calendar booking with the configured services.
5. Remove the draft notice and enable search indexing in `src/app/[locale]/layout.tsx` only after approval.
6. Connect `synoralegacy.com` through the hosting provider and DNS. Metadata and branding use the intended domain; this project does not change domain registration, DNS, or existing hosting.

This is a local website draft. No hosting or public deployment has been performed. No external form delivery or real appointment booking has been verified because production credentials are not configured.
