import { localizedMetadata } from "@/lib/i18n/metadata";
import { getTranslation } from "@/lib/i18n/server";
import {
  BadgeDollarSign,
  CheckCircle2,
  GraduationCap,
  type LucideIcon,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { ContactForm } from "@/components/site/contact-form";
import { isContactConfigured } from "@/lib/contact-config";
import {
  PageHero,
  Section,
  SectionHeading,
  SiteShell,
} from "@/components/site/section";
const pageMetadata = {
  title: "Career / Business Opportunity",
  description:
    "Learn about the independent business opportunity at Synora Legacy.",
};
const businessInvolves = [
  "Educate and serve individuals and families",
  "Develop your own client base",
  "Build professional relationships",
  "Participate in referral and revenue-sharing opportunities",
  "Develop and mentor other licensed professionals",
  "Build a team and grow an organization",
];
const audienceTraits = [
  "Are open-minded and coachable",
  "Are willing to learn",
  "Value honesty and integrity",
  "Are willing to work and build",
  "Want to develop professionally and personally",
  "Have an interest in helping people",
  "Want flexibility to build around career, family, and other responsibilities",
];
const gettingStartedSteps = [
  {
    title: "Registration & Background Check",
    text: "Complete the required registration and background-check process.",
  },
  {
    title: "State Licensing Requirements",
    text: "Complete the licensing requirements for your state and applicable line of authority. Where pre-licensing education is required, complete the required courses.",
  },
  {
    title: "State Examination & License",
    text: "Complete the required examination, where applicable, and obtain the appropriate license.",
  },
  {
    title: "Training & Coaching",
    text: "Complete the required business training and participate in ongoing coaching and development.",
  },
];
const businessReasons = [
  "Create an additional source of income",
  "Build valuable financial and business skills",
  "Help families become more financially informed",
  "Create flexibility around work and family",
  "Develop leadership and entrepreneurial skills",
  "Build something you own",
];
export async function generateMetadata() {
  return localizedMetadata(
    "/careers",
    pageMetadata.title,
    "description" in pageMetadata
      ? String(pageMetadata.description)
      : undefined,
  );
}
export default async function CareersPage() {
  const t = await getTranslation();
  return (
    <SiteShell>
      <Header />
      <main id="main-content" className="flex-1 bg-white careers-content">
        <PageHero
          eyebrow={t("Career / Business Opportunity")}
          title={t("Build a Business. Make an Impact.")}
          text={t(
            "At Synora Legacy, we believe financial education should be accessible to everyone. We\u2019re building a network of financial professionals who can bring that education to more families and communities.",
          )}
          image="/images/services/careers-financial-professional-opportunity.png"
          imageAlt={t("Financial professional opportunity conversation")}
        />
        <Section>
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <SectionHeading
              eyebrow={t("Opportunity")}
              title={t(
                "Develop as a financial professional while building independently.",
              )}
              text={t(
                "Synora Legacy develops financial professionals who educate individuals and families while building an independent business in the financial-services industry.",
              )}
            />
            <div className="rounded-[8px] border border-[#0B1F3A]/10 bg-[#071629] p-5 text-white shadow-xl shadow-[#071629]/12 sm:p-6 lg:p-7">
              <p className="text-lg leading-8 text-white/82">
                {t(
                  "You can start part-time or full-time, allowing you to build around your existing career, family, or other responsibilities.",
                )}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {businessInvolves.map((item) => (
                  <IconLine key={item} text={t(item)} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section tone="cream">
          <div className="grid gap-5 lg:grid-cols-2">
            <InfoPanel
              eyebrow={t("Who Is It For?")}
              title={t(
                "Adults 18 and older who are willing to learn and build.",
              )}
              icon={Users}
            >
              <div className="grid gap-3">
                {audienceTraits.map((item) => (
                  <IconLine key={item} text={t(item)} tone="light" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-[#334155]">
                {t(
                  "You do not need a financial background. You do need a willingness to learn, accept coaching, and build.",
                )}
              </p>
            </InfoPanel>

            <InfoPanel
              eyebrow={t("What You Should Understand")}
              title={t(
                "This is an independent business opportunity, not employment.",
              )}
              icon={ShieldCheck}
            >
              <p className="text-base leading-8 text-[#334155]">
                {t(
                  "You are responsible for building and managing your business, including developing clients, managing your time, completing licensing and training requirements, maintaining required licenses, following compliance requirements, and managing your business expenses.",
                )}
              </p>
              <p className="mt-4 text-base leading-8 text-[#334155]">
                {t(
                  "There is no guaranteed income. Results depend on individual effort, skills, business development, and other factors.",
                )}
              </p>
            </InfoPanel>
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow={t("Getting Started")}
            title={t("A regulated business requires the right steps.")}
            text={t(
              "Licensing requirements are state-specific, and required licensing must be completed before advising clients or performing activities that require a license.",
            )}
          />
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {gettingStartedSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 shadow-sm shadow-[#071629]/5 sm:p-5"
              >
                <span className="font-heading text-4xl text-[#C9A227]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-5 text-lg font-bold leading-snug text-[#071629]">
                  {t(step.title)}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#334155]">
                  {t(step.text)}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section tone="navy">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="mb-3 text-[11px] font-bold uppercase leading-5 tracking-[0.14em] text-[#C9A227] sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
                {t("Training & Compensation")}
              </p>
              <h2 className="font-heading text-3xl leading-tight text-balance text-white sm:text-4xl lg:text-[2.75rem]">
                {t("In business for yourself, not by yourself.")}
              </h2>
            </div>
            <div className="grid gap-4 lg:col-span-2 lg:grid-cols-2">
              <DarkPanel
                icon={GraduationCap}
                title={t("Training & Coaching")}
                text={t(
                  "You will receive comprehensive training and ongoing coaching, from the fundamentals of the business to developing clients, building relationships, and growing your organization.",
                )}
              />
              <DarkPanel
                icon={BadgeDollarSign}
                title={t("Referral & Revenue Sharing")}
                text={t(
                  "Referral and revenue-sharing opportunities are part of the business model. To receive compensation through these activities, you must be properly licensed and meet all applicable licensing and regulatory requirements.",
                )}
              />
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <SectionHeading
              eyebrow={t("Business Cost")}
              title={t("What does it cost?")}
              text={t("There is an initial cost to start the business.")}
            />
            <div className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-5 shadow-xl shadow-[#071629]/6 sm:p-6">
              <p className="text-base leading-8 text-[#334155] lg:text-lg">
                {t(
                  "Startup expenses can include registration, licensing requirements, examination, background check, and other business expenses. All applicable costs are explained before you begin.",
                )}
              </p>
            </div>
          </div>
        </Section>

        <Section tone="cream">
          <SectionHeading
            eyebrow={t("Why Build This Business?")}
            title={t("Learn. Grow. Build.")}
            text={t(
              "The opportunity is designed for people who want to grow personally, serve families, and build something with discipline and care.",
            )}
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessReasons.map((item) => (
              <article
                key={item}
                className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-4 sm:p-5"
              >
                <CheckCircle2
                  className="size-5 text-[#C9A227]"
                  aria-hidden="true"
                />
                <p className="mt-4 text-base font-semibold leading-7 text-[#071629]">
                  {t(item)}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="career-form" tone="cream">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <SectionHeading
              eyebrow={t("Start the Conversation")}
              title={t("Tell us a little about yourself.")}
              text={t(
                "Use the form to share your information and choose a time to discuss the financial professional opportunity.",
              )}
            />
            <ContactForm
              enabled={isContactConfigured()}
              initialTopic="Join Us / Career Opportunity"
            />
          </div>
        </Section>
      </main>
      <Footer />
    </SiteShell>
  );
}
async function IconLine({
  text,
  tone = "dark",
}: {
  text: string;
  tone?: "dark" | "light";
}) {
  const t = await getTranslation();
  return (
    <div className="flex gap-3">
      <CheckCircle2
        className={`mt-1 size-4 shrink-0 ${tone === "dark" ? "text-[#C9A227]" : "text-[#0B1F3A]"}`}
        aria-hidden="true"
      />
      <p
        className={`text-sm leading-7 ${tone === "dark" ? "text-white/76" : "text-[#334155]"}`}
      >
        {t(text)}
      </p>
    </div>
  );
}
async function InfoPanel({
  children,
  eyebrow,
  icon: Icon,
  title,
}: {
  children: ReactNode;
  eyebrow: string;
  icon: LucideIcon;
  title: string;
}) {
  const t = await getTranslation();
  return (
    <article className="rounded-[8px] border border-[#0B1F3A]/10 bg-white p-5 shadow-sm shadow-[#071629]/5 sm:p-6">
      <Icon className="size-6 text-[#C9A227]" aria-hidden="true" />
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227]">
        {t(eyebrow)}
      </p>
      <h2 className="mt-3 font-heading text-3xl leading-tight text-[#071629] sm:text-4xl">
        {t(title)}
      </h2>
      <div className="mt-5">{children}</div>
    </article>
  );
}
async function DarkPanel({
  icon: Icon,
  text,
  title,
}: {
  icon: LucideIcon;
  text: string;
  title: string;
}) {
  const t = await getTranslation();
  return (
    <article className="rounded-[8px] border border-white/10 bg-white/[0.06] p-5 sm:p-6">
      <Icon className="size-6 text-[#C9A227]" aria-hidden="true" />
      <h3 className="mt-5 text-xl font-bold text-white">{t(title)}</h3>
      <p className="mt-4 text-sm leading-7 text-white/70">{t(text)}</p>
    </article>
  );
}
