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

export const metadata = {
  title: "FAQ",
};

export default function FAQPage() {
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow="FAQ"
          title="Frequently asked questions."
          text="Clear answers to common questions about protection, retirement, education, legacy planning, insurance, and how Synora Legacy works."
        />
        <Section>
          <div className="faq-page-content">
            <FAQAccordion items={faqs} />
            {faqNotices.map((notice) => (
              <p key={notice} className="educational-note">
                {notice}
              </p>
            ))}
          </div>
        </Section>
        <CTASection
          title="Still have a question?"
          text="Start with the topic that is on your mind. Synora Legacy can help organize the conversation from there."
        />
      </main>
      <Footer />
    </SiteShell>
  );
}
