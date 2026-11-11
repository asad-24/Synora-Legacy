import { getTranslation } from "@/lib/i18n/server";
import Image from "next/image";
import { LocaleLink as Link } from "@/components/site/locale-link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { BlurText } from "@/components/motion/blur-text";
import { cn } from "@/lib/utils";
export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
export function Section({
  children,
  className,
  id,
  tone = "white",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "white" | "cream" | "navy";
  reveal?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("section-frame", `section-${tone}`, className)}
    >
      <div className="container">{children}</div>
    </section>
  );
}
export async function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  const t = await getTranslation();
  return (
    <div
      className={cn(
        "section-heading",
        align === "center" && "section-heading-center",
      )}
    >
      {eyebrow && <p className="eyebrow">{t(eyebrow)}</p>}
      <BlurText as="h2" text={t(title)} />
      {text && <p className="section-description">{t(text)}</p>}
    </div>
  );
}
export async function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
}) {
  const t = await getTranslation();
  return (
    <section className="page-hero">
      <div className="page-hero-background parallax-media">
        <Image
          src={image || "/images/consultation.png"}
          alt={t(imageAlt || "A thoughtful financial education conversation")}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
        />
      </div>
      <div className="page-hero-shade" />
      <div className="container">
        <nav className="breadcrumbs" aria-label={t("Breadcrumb")}>
          <Link href="/">{t("Synora Legacy")}</Link>
          <ChevronRight size={12} aria-hidden="true" />
          <span>{t(eyebrow)}</span>
        </nav>
        <div className="page-hero-copy">
          <p className="eyebrow eyebrow-light">
            <span className="status-dot" />
            {t(eyebrow)}
          </p>
          <BlurText as="h1" text={t(title)} />
          <p className="page-hero-description">{t(text)}</p>
        </div>
        <span className="page-hero-brandline">
          {t("FINANCIAL EDUCATION \u2022 PROTECTION \u2022 LEGACY")}
        </span>
      </div>
    </section>
  );
}
export async function CTASection({
  title = "Start with a thoughtful conversation.",
  text = "Bring your questions, priorities, and concerns. Synora Legacy will help you organize the next step with clarity.",
}: {
  title?: string;
  text?: string;
}) {
  const t = await getTranslation();
  return (
    <section className="legacy-cta">
      <div className="cta-photo parallax-media">
        <Image
          src="/images/services/legacy-planning-hero.png"
          alt={t("A family sharing time together")}
          fill
          sizes="100vw"
        />
      </div>
      <div className="cta-shade" />
      <div className="container">
        <div className="cta-glass" data-reveal>
          <div>
            <p className="eyebrow eyebrow-light">
              {t("PROTECT TODAY. SECURE TOMORROW.")}
            </p>
            <BlurText as="h2" text={t(title)} />
            <p>{t(text)}</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact#schedule" className="button button-gold">
              {t("Schedule a conversation")}{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/solutions" className="button button-outline-light">
              {t("Explore our solutions")}{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
