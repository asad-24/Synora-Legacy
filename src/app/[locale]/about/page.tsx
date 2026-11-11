import { localizedMetadata } from "@/lib/i18n/metadata";
import { getTranslation } from "@/lib/i18n/server";
import Image from "next/image";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import {
  CTASection,
  PageHero,
  Section,
  SectionHeading,
  SiteShell,
} from "@/components/site/section";
import { approach, philosophy } from "@/data/site";
import { founderStory } from "@/data/founder-story";
import { professional } from "@/data/professional";
const pageMetadata = {
  title: "Our Founder’s Story",
  description:
    "From a calling to care to a purpose to protect. Discover the personal journey of Synora Legacy’s Founder and CEO.",
};
export async function generateMetadata() {
  return localizedMetadata(
    "/about",
    pageMetadata.title,
    "description" in pageMetadata
      ? String(pageMetadata.description)
      : undefined,
  );
}
export default async function AboutPage() {
  const t = await getTranslation();
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow={t("THE SYNORA LEGACY STORY")}
          title={t(founderStory.title)}
          text={t(
            "The personal journey behind Synora Legacy, shared by our Founder and CEO.",
          )}
        />
        <Section id="founder-story">
          <div className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <figure
              className="mx-auto w-full max-w-[420px] lg:sticky lg:top-32"
              data-reveal
            >
              <div className="about-image relative aspect-[3/4] overflow-hidden border border-[#ccb17a]/30 bg-[#091c30]">
                <Image
                  src="/images/maam-pic.jpeg"
                  alt={t("Portrait of Synora Legacy\u2019s Founder and CEO")}
                  fill
                  sizes="(max-width: 460px) calc(100vw - 40px), 420px"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-6 border-l-2 border-[#ccb17a] pl-5">
                {professional.name && (
                  <p className="mb-2 text-xl font-bold text-[#091c30]">
                    {t(professional.name)}
                  </p>
                )}
                <p className="text-sm font-bold text-[#8b6c35]">
                  {t(professional.leadershipTitle)}
                </p>
                <p className="mt-2 text-sm text-[#5b6771]">
                  {t("Synora Legacy")}
                </p>
              </figcaption>
            </figure>
            <article aria-label={t("Our founder\u2019s story")} data-reveal>
              <p className="eyebrow">{t("A MESSAGE FROM OUR FOUNDER")}</p>
              <div className="space-y-6 text-[15px] leading-8 text-[#54616b] sm:text-base">
                {founderStory.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === founderStory.paragraphs.length - 1
                        ? "border-t border-[#ccb17a]/40 pt-6 font-medium text-[#091c30]"
                        : undefined
                    }
                  >
                    {t(paragraph)}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </Section>
        <Section tone="cream">
          <SectionHeading
            eyebrow={t("WHAT GUIDES US")}
            title={t("Rooted in care. Focused on tomorrow.")}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map(({ title, icon: Icon, description }) => (
              <div key={title} className="border-t border-[#c4a66a] pt-7">
                <Icon
                  className="size-7 text-[#967640]"
                  strokeWidth={1.3}
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-heading text-3xl">{t(title)}</h3>
                <p className="mt-3 text-sm leading-7 text-[#54616b]">
                  {t(description)}
                </p>
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <SectionHeading
            eyebrow={t("HOW WE WORK")}
            title={t("A clear process, built around you.")}
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => (
              <div key={item.step}>
                <span className="font-heading text-4xl text-[#967640]">
                  {t(item.step)}
                </span>
                <h3 className="mt-5 font-heading text-3xl">{t(item.title)}</h3>
                <p className="mt-3 text-sm leading-7 text-[#54616b]">
                  {t(item.description)}
                </p>
              </div>
            ))}
          </div>
        </Section>
        <CTASection />
      </main>
      <Footer />
    </SiteShell>
  );
}
