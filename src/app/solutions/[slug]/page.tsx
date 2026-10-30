import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { ApprovedDocContent } from "@/components/site/approved-doc-content";
import {
  CTASection,
  PageHero,
  Section,
  SectionHeading,
  SiteShell,
} from "@/components/site/section";
import { services } from "@/data/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service ? service.title : "Solution",
    description: service?.summary,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow={service.title}
          title={service.heroTitle ?? service.title}
          text={service.summary}
          image={service.heroImage}
          imageAlt={service.heroImageAlt}
        />
        {service.approvedDocKey ? (
          <Section>
            <ApprovedDocContent docKey={service.approvedDocKey} />
          </Section>
        ) : (
          <>
            <Section>
              <div className="grid gap-6 rounded-[8px] border border-[#0B1F3A]/10 bg-white p-5 shadow-xl shadow-[#071629]/6 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-7">
                <SectionHeading
                  eyebrow="The Financial Concern"
                  title="Start by naming what needs attention."
                />
                <div className="border-l-2 border-[#C9A227] pl-5">
                  <p className="max-w-3xl text-base leading-8 text-[#334155] lg:text-lg">
                    {service.concern}
                  </p>
                </div>
              </div>
            </Section>
            <Section tone="cream">
              <div className="grid gap-4 md:grid-cols-2">
                <InfoBlock title="Why It Matters" text={service.whyItMatters} />
                <InfoBlock
                  title="How the Strategy Works"
                  text={service.howItWorks}
                />
              </div>
            </Section>
            <Section>
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <h2 className="font-heading text-3xl text-[#071629] sm:text-4xl">
                    Who May Benefit
                  </h2>
                  <ul className="mt-5 grid gap-3">
                    {service.whoMayBenefit.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-[#C9A227] pl-4 text-base leading-7 text-[#334155]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-heading text-3xl text-[#071629] sm:text-4xl">
                    Important Considerations
                  </h2>
                  <ul className="mt-5 grid gap-3">
                    {service.considerations.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-[#0B1F3A]/20 pl-4 text-base leading-7 text-[#334155]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
            <Section tone="cream">
              <SectionHeading
                eyebrow="FAQs"
                title={`Questions about ${service.shortTitle.toLowerCase()}.`}
              />
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {service.faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-[8px] bg-white p-4 sm:p-5 lg:p-6"
                  >
                    <h2 className="text-lg font-bold text-[#071629]">
                      {faq.question}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#334155]">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </Section>
          </>
        )}
        <CTASection text="A conversation can help connect the educational overview to your priorities, questions, and timing." />
      </main>
      <Footer />
    </SiteShell>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[8px] bg-white p-4 sm:p-5 lg:p-6">
      <h2 className="font-heading text-3xl text-[#071629] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-[#425166] sm:text-base lg:leading-8">
        {text}
      </p>
    </article>
  );
}
