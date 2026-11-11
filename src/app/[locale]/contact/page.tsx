import { localizedMetadata } from "@/lib/i18n/metadata";
import { getTranslation } from "@/lib/i18n/server";
import {
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { CalendlyEmbed } from "@/components/site/calendly-embed";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { PageHero, Section, SiteShell } from "@/components/site/section";
import { professional } from "@/data/professional";
import { isContactConfigured } from "@/lib/contact-config";
const pageMetadata = { title: "Start a Conversation" };
export async function generateMetadata() {
  return localizedMetadata(
    "/contact",
    pageMetadata.title,
    "description" in pageMetadata
      ? String(pageMetadata.description)
      : undefined,
  );
}
export default async function ContactPage() {
  const t = await getTranslation();
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1">
        <PageHero
          eyebrow={t("Contact")}
          title={t("Schedule a thoughtful conversation.")}
          text={t(
            "Reach out with questions about protection, planning, education, careers, or where to begin.",
          )}
        />
        <Section>
          <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="eyebrow">{t("YOUR PRIORITIES COME FIRST")}</p>
              <h2 className="font-heading text-4xl">
                {t("A little clarity.")}
                <br />
                {t("A thoughtful next step.")}
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-8 text-[#54616b]">
                {t(
                  "Share your goals and the topics you\u2019d like to understand. Please keep your message general; you don\u2019t need to send financial account or medical details.",
                )}
              </p>
              <div className="my-8 grid gap-5">
                {[
                  {
                    icon: BookOpen,
                    text: "Clear explanations, in everyday language",
                  },
                  {
                    icon: ShieldCheck,
                    text: "A focus on your family’s priorities",
                  },
                  { icon: HeartHandshake, text: "A conversation at your pace" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-4 text-sm">
                    <Icon
                      size={22}
                      strokeWidth={1.3}
                      className="text-[#967640]"
                      aria-hidden="true"
                    />
                    {t(text)}
                  </div>
                ))}
              </div>
              <div className="border-t border-[#deded8] pt-6">
                <p className="font-heading text-2xl">
                  {t(professional.name || "Synora Legacy")}
                </p>
                {professional.approvedTitle && (
                  <p className="mt-2 text-sm text-[#8b6c33]">
                    {t(professional.approvedTitle)}
                  </p>
                )}
                {professional.licenseNumber && (
                  <p className="mt-2 text-sm">
                    {t("License / NPN:")} {professional.licenseNumber}
                  </p>
                )}
                {professional.email && (
                  <a
                    className="mt-4 flex items-center gap-2 text-sm"
                    href={`mailto:${professional.email}`}
                  >
                    {t(professional.email)}
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {professional.phone && (
                  <a
                    className="mt-3 block text-sm"
                    href={`tel:${professional.phone.replace(/[^+0-9]/g, "")}`}
                  >
                    {t(professional.phone)}
                  </a>
                )}
                {professional.address && (
                  <p className="mt-3 text-sm">{t(professional.address)}</p>
                )}
              </div>
            </div>
            <ContactForm enabled={isContactConfigured()} />
          </div>
        </Section>
        <Section id="schedule" tone="cream">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="eyebrow">{t("MAKE TIME FOR WHAT MATTERS")}</p>
              <h2 className="font-heading text-4xl">
                {t("Prefer to choose a time?")}
              </h2>
              <p className="mt-5 text-sm leading-8 text-[#54616b]">
                {t(
                  "A dedicated conversation gives your questions the attention they deserve.",
                )}
              </p>
            </div>
            <CalendlyEmbed />
          </div>
        </Section>
      </main>
      <Footer />
    </SiteShell>
  );
}
