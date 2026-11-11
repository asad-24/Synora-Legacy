import { localizedMetadata } from "@/lib/i18n/metadata";
import { getTranslation } from "@/lib/i18n/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ApprovedDocContent } from "@/components/site/approved-doc-content";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  CTASection,
  PageHero,
  Section,
  SiteShell,
} from "@/components/site/section";
import { resourcePages } from "@/data/site";
type ResourcePageProps = {
  params: Promise<{
    slug: string;
  }>;
};
export function generateStaticParams() {
  return resourcePages.map((resource) => ({ slug: resource.slug }));
}
export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourcePages.find((item) => item.slug === slug);
  return localizedMetadata(
    `/resources/${slug}`,
    resource ? resource.title : "Resource",
    resource?.summary,
  );
}
export default async function ResourcePage({ params }: ResourcePageProps) {
  const t = await getTranslation();
  const { slug } = await params;
  const resource = resourcePages.find((item) => item.slug === slug);
  if (!resource) {
    notFound();
  }
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow={t(resource.category)}
          title={t(resource.title)}
          text={t(resource.summary)}
        />
        <Section>
          <ApprovedDocContent docKey={resource.approvedDocKey} />
        </Section>
        <CTASection
          title={t("Bring your questions into a conversation.")}
          text={t(
            "Educational content is most helpful when it can be connected to your own priorities, timing, and concerns.",
          )}
        />
      </main>
      <Footer />
    </SiteShell>
  );
}
