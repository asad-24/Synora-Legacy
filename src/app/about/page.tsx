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
export const metadata = { title: "Our Story" };
export default function AboutPage() {
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow="THE SYNORA LEGACY STORY"
          title="Financial guidance shaped by education, care, and clarity."
          text="Synora Legacy helps individuals and families approach important financial choices with calm, organized conversations."
        />
        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-education.png"
                alt="A focused educational conversation about family financial priorities"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="OUR PURPOSE"
                title="A professional firm with a human way of explaining things."
              />
              <div className="mt-6 space-y-5 text-sm leading-8 text-[#54616b]">
                <p>
                  Synora Legacy exists for people who want to understand their
                  options before making financial decisions. The firm’s role is
                  to listen, educate, and help families think clearly about
                  protection, preparation, and long-term priorities.
                </p>
                <p>
                  Every conversation begins with the client’s goals and
                  concerns. From there, the work is to explain financial
                  concepts in plain language and help evaluate strategies that
                  may fit the situation.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section tone="navy">
          <div className="about-manifesto">
            <p className="eyebrow eyebrow-light">WHY SYNORA LEGACY EXISTS</p>
            <h2>
              Financial education should be <em>accessible to everyone.</em>
            </h2>
            <div>
              <p>
                For generations, financial education has been taught at the
                kitchen table—but too often, that table belonged to the wealthy.
              </p>
              <p>
                It’s where conversations about money, protection, wealth, and
                the future were shared and passed from one generation to the
                next.
              </p>
              <p>
                Synora Legacy was created to change that—to make financial
                education and understanding accessible to everyone.
              </p>
              <p>
                We believe education is more than simply having information.
                It’s about understanding your options, asking better questions,
                and gaining the confidence to make informed decisions.
              </p>
            </div>
          </div>
        </Section>
        <Section tone="cream">
          <SectionHeading
            eyebrow="WHAT GUIDES US"
            title="Rooted in care. Focused on tomorrow."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map(({ title, icon: Icon, description }) => (
              <div key={title} className="border-t border-[#c4a66a] pt-7">
                <Icon
                  className="size-7 text-[#967640]"
                  strokeWidth={1.3}
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-heading text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#54616b]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Section>
        <Section>
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="A clear process, built around you."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => (
              <div key={item.step}>
                <span className="font-heading text-4xl text-[#967640]">
                  {item.step}
                </span>
                <h3 className="mt-5 font-heading text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#54616b]">
                  {item.description}
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
