import { localizedMetadata } from "@/lib/i18n/metadata";
import { getTranslation } from "@/lib/i18n/server";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { faqs, faqNotices } from "@/data/faqs";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  CTASection,
  PageHero,
  Section,
  SiteShell,
} from "@/components/site/section";
const pageMetadata = {
  title: "FAQ",
};
export async function generateMetadata() {
  return localizedMetadata(
    "/faq",
    pageMetadata.title,
    "description" in pageMetadata
      ? String(pageMetadata.description)
      : undefined,
  );
}
export default async function FAQPage() {
  const t = await getTranslation();
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow={t("FAQ")}
          title={t("Frequently asked questions.")}
          text={t(
            "Clear answers to common questions about protection, retirement, education, legacy planning, insurance, and how Synora Legacy works.",
          )}
        />
        <Section>
          <div className="faq-page-content">
            <FAQAccordion items={faqs} />
            {faqNotices.map((notice) => (
              <p key={notice} className="educational-note">
                {t(notice)}
              </p>
            ))}
          </div>
        </Section>
        <CTASection
          title={t("Still have a question?")}
          text={t(
            "Start with the topic that is on your mind. Synora Legacy can help organize the conversation from there.",
          )}
        />
      </main>
      <Footer />
    </SiteShell>
  );
}
