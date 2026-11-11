import { localizedMetadata } from "@/lib/i18n/metadata";
import { getTranslation } from "@/lib/i18n/server";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  CTASection,
  PageHero,
  Section,
  SiteShell,
} from "@/components/site/section";
import { SolutionsGroup } from "@/components/site/solutions-group";
import { services, type Service } from "@/data/site";
const pageMetadata = {
  title: "Solutions",
};
const solutionGroups = [
  {
    title: "Protect",
    description:
      "Explore protection strategies for income, family responsibilities, health events, home obligations, and final expenses.",
    slugs: [
      "life-insurance",
      "indexed-universal-life-living-benefits",
      "income-protection-planning",
      "mortgage-protection",
      "final-expense",
    ],
  },
  {
    title: "Prepare",
    description:
      "Review planning conversations for retirement income, annuities, financial gaps, and tax-aware decisions.",
    slugs: [
      "retirement-income-planning",
      "fixed-index-annuities",
      "financial-gap-analysis",
      "tax-efficient-planning",
    ],
  },
  {
    title: "Build",
    description:
      "Organize long-term planning questions around education, family legacy, and estate or probate considerations.",
    slugs: ["college-planning", "legacy-planning", "estate-probate-planning"],
  },
  {
    title: "Understand",
    description:
      "Clarify contract features and policy language before deciding whether a strategy deserves consideration.",
    slugs: ["return-of-premium"],
  },
] as const;
function getGroupedServices(slugs: readonly string[]) {
  return slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));
}
export async function generateMetadata() {
  return localizedMetadata(
    "/solutions",
    pageMetadata.title,
    "description" in pageMetadata
      ? String(pageMetadata.description)
      : undefined,
  );
}
export default async function SolutionsPage() {
  const t = await getTranslation();
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow={t("Solutions")}
          title={t("Explore financial areas with an education-first guide.")}
          text={t(
            "Synora Legacy helps clients review protection, planning, retirement, education, and legacy questions without pressure.",
          )}
        />
        <Section className="py-8 sm:py-9 lg:py-10">
          <div className="grid gap-5">
            {solutionGroups.map((group, groupIndex) => (
              <SolutionsGroup
                key={group.title}
                title={t(group.title)}
                description={t(group.description)}
                services={getGroupedServices(group.slugs)}
                index={groupIndex}
              />
            ))}
          </div>
        </Section>
        <CTASection
          title={t("Not sure where to begin?")}
          text={t(
            "Start with the question that feels most important today. The conversation can help organize the rest.",
          )}
        />
      </main>
      <Footer />
    </SiteShell>
  );
}
