import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PageHero, Section, SiteShell } from "@/components/site/section";
import { professional } from "@/data/professional";
export const metadata = { title: "Privacy & Disclosures" };
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
export default function LegalPage() {
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow="TRANSPARENCY & UNDERSTANDING"
          title="Important information, clearly presented."
          text="Privacy, website terms, licensing disclosures, and the purpose of our educational content."
        />
        <Section>
          <div className="max-w-4xl space-y-12">
            {documents.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="scroll-mt-28 border-b border-[#deded8] pb-10"
              >
                <h2 className="font-heading text-3xl">{item.title}</h2>
                <p className="mt-5 whitespace-pre-line text-sm leading-8 text-[#54616b]">
                  {item.content ||
                    `This is a local website preview. Synora Legacy’s approved ${item.title.toLowerCase()} will be added before the website launches.`}
                </p>
              </article>
            ))}
            <article
              id="educational-content-disclaimer"
              className="scroll-mt-28"
            >
              <h2 className="font-heading text-3xl">
                Educational content notice
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#54616b]">
                This preview contains general educational information, rather
                than individualized financial, insurance, tax, legal, or
                investment advice. Product features, eligibility, availability,
                benefits, and limitations vary. Review the applicable contract
                and consult appropriately qualified professionals about your
                circumstances.
              </p>
            </article>
          </div>
        </Section>
      </main>
      <Footer />
    </SiteShell>
  );
}
