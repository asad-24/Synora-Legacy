import { localizedMetadata } from "@/lib/i18n/metadata";
import { getTranslation } from "@/lib/i18n/server";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PageHero, Section, SiteShell } from "@/components/site/section";
import { professional } from "@/data/professional";
const pageMetadata = { title: "Privacy & Disclosures" };
const documents = [
  {
    id: "privacy-policy",
    title: "Privacy policy",
    content: professional.privacyPolicy,
  },
  {
    id: "terms-of-use",
    title: "Terms of use",
    content: professional.termsOfUse,
  },
  {
    id: "licensing-disclosures",
    title: "Licensing & disclosures",
    content: professional.licensingDisclosure,
  },
];
export async function generateMetadata() {
  return localizedMetadata(
    "/legal",
    pageMetadata.title,
    "description" in pageMetadata
      ? String(pageMetadata.description)
      : undefined,
  );
}
export default async function LegalPage() {
  const t = await getTranslation();
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow={t("TRANSPARENCY & UNDERSTANDING")}
          title={t("Important information, clearly presented.")}
          text={t(
            "Privacy, website terms, licensing disclosures, and the purpose of our educational content.",
          )}
        />
        <Section>
          <div className="max-w-4xl space-y-12">
            {documents.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="scroll-mt-28 border-b border-[#deded8] pb-10"
              >
                <h2 className="font-heading text-3xl">{t(item.title)}</h2>
                <p className="mt-5 whitespace-pre-line text-sm leading-8 text-[#54616b]">
                  {t(
                    item.content ||
                      "This is a local website preview. The approved document will be added before Synora Legacy launches.",
                  )}
                </p>
              </article>
            ))}
            <article
              id="educational-content-disclaimer"
              className="scroll-mt-28"
            >
              <h2 className="font-heading text-3xl">
                {t("Educational content notice")}
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#54616b]">
                {t(
                  "This preview contains general educational information, rather than individualized financial, insurance, tax, legal, or investment advice. Product features, eligibility, availability, benefits, and limitations vary. Review the applicable contract and consult appropriately qualified professionals about your circumstances.",
                )}
              </p>
            </article>
          </div>
        </Section>
      </main>
      <Footer />
    </SiteShell>
  );
}
