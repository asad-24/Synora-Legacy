import { localizedMetadata } from "@/lib/i18n/metadata";
export async function generateMetadata() {
  return localizedMetadata(
    "/",
    "Protect Today. Secure Tomorrow.",
    "Helping individuals and families make confident financial choices, protect what matters most, prepare for tomorrow, and build a legacy that lasts.",
  );
}
import { getTranslation } from "@/lib/i18n/server";
import Image from "next/image";
import { LocaleLink as Link } from "@/components/site/locale-link";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { CTASection, SectionHeading } from "@/components/site/section";
import { BlurText } from "@/components/motion/blur-text";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { FocusMarquee } from "@/components/motion/focus-marquee";
import { FAQAccordion } from "@/components/site/faq-accordion";
import {
  approach,
  featuredHomeServices,
  philosophy,
  resources,
} from "@/data/site";
import { faqs } from "@/data/faqs";
export default async function HomePage() {
  const t = await getTranslation();
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <section className="signature-hero" aria-labelledby="hero-heading">
          <div className="signature-hero-image">
            <Image
              src="/images/services/legacy-planning-hero.png"
              alt={t("Three generations of a family enjoying time together")}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
          <div className="signature-hero-shade" />
          <div className="hero-gold-glow" />
          <div className="container signature-hero-inner">
            <div className="signature-hero-copy">
              <p className="hero-badge">
                <span className="status-dot" />
                {t("SYNORA LEGACY")} <span className="badge-divider" />
                {t("Financial education. Protection. Legacy.")}
              </p>
              <h1 id="hero-heading">
                <BlurText text={t("Protect Today.")} className="hero-line" />
                <BlurText
                  text={t("Secure Tomorrow.")}
                  className="hero-line hero-line-gold"
                  delay={85}
                />
              </h1>
              <p className="hero-description">
                {t(
                  "Helping individuals and families make confident financial choices, protect what matters most, prepare for tomorrow, and build a legacy that lasts.",
                )}
              </p>
              <div className="hero-priorities">
                {[
                  { icon: BookOpen, label: "Education-first" },
                  { icon: ShieldCheck, label: "Family protection" },
                  { icon: Sprout, label: "Prepare for tomorrow" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label}>
                    <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                    {t(label)}
                  </span>
                ))}
              </div>
              <div className="hero-actions">
                <Link href="/contact#schedule" className="button button-gold">
                  {t("Schedule a conversation")}{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/solutions" className="button button-outline-light">
                  {t("Explore our solutions")}{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="hero-bottomline">
              <a href="#introduction">
                {t("Discover our approach")}
                <ArrowDown size={14} aria-hidden="true" />
              </a>
              <span>{t("FAMILY. FUTURE. LEGACY.")}</span>
            </div>
            <FocusMarquee />
          </div>
        </section>
        <section
          id="introduction"
          className="home-section container introduction"
        >
          <SectionHeading
            eyebrow={t("INTRODUCTION")}
            title={t("A calmer way to approach important financial decisions.")}
          />
          <div className="intro-copy">
            <p>
              {t(
                "Synora Legacy helps individuals and families explore protection, planning, retirement, education, and legacy questions with clarity.",
              )}
            </p>
            <p>
              {t(
                "The work begins with listening, continues through education, and moves forward only when the next step makes sense.",
              )}
            </p>
            <Link href="/about" className="inline-link">
              {t("Discover Synora Legacy")}{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
        <section className="home-section featured-section">
          <div className="container">
            <SectionHeading
              eyebrow={t("SECURED SOLUTIONS")}
              title={t("Featured financial solutions.")}
              text={t(
                "A focused starting point for protection, living benefits, retirement income, and final expense planning.",
              )}
              align="center"
            />
            <div className="featured-grid">
              {featuredHomeServices.map((service, index) => (
                <Link
                  href={`/solutions/${service.slug}`}
                  className="feature-card"
                  key={service.slug}
                >
                  <div className="feature-card-image">
                    <Image
                      src={service.heroImage || "/images/consultation.png"}
                      alt={t(service.heroImageAlt || service.title)}
                      fill
                      sizes="(max-width:700px) 85vw, (max-width:1100px) 50vw, 25vw"
                    />
                  </div>
                  <div className="feature-card-shade" />
                  <div className="feature-card-copy">
                    <span className="feature-card-label">
                      {t("SOLUTION 0")}
                      {t(index + 1)}
                    </span>
                    <h3>{t(service.shortTitle)}</h3>
                    <p>{t(service.summary)}</p>
                    <span className="card-link">
                      {t("Explore solution")}{" "}
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="section-action">
              <Link href="/solutions" className="button button-gold">
                {t("View all our solutions")}{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
        <section className="home-section philosophy-section">
          <div className="container">
            <div className="philosophy-panel">
              <div className="philosophy-heading" data-reveal>
                <p className="eyebrow eyebrow-light">
                  {t("THE SYNORA LEGACY PHILOSOPHY")}
                </p>
                <BlurText
                  as="h2"
                  text={t("Guidance built around clarity, not pressure.")}
                />
                <p>
                  {t(
                    "The firm\u2019s philosophy is simple: help people understand the choices in front of them and prepare with confidence.",
                  )}
                </p>
                <Link href="/about" className="inline-link inline-link-light">
                  {t("Get to know our approach")}{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
              <div className="philosophy-grid">
                {philosophy.map(({ title, icon: Icon, description }) => (
                  <div className="philosophy-item" key={title}>
                    <span className="icon-chip">
                      <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <h3>{t(title)}</h3>
                    <p>{t(description)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="home-section container education-editorial">
          <div className="education-editorial-image parallax-media">
            <Image
              src="/images/about-education.png"
              alt={t("An attentive financial education conversation")}
              fill
              sizes="(max-width:900px) 100vw, 50vw"
            />
            <div className="education-image-note">
              <BookOpen size={25} strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t("Understanding before decisions.")}
                <strong>{t("Education first.")}</strong>
              </span>
            </div>
          </div>
          <div className="education-editorial-copy">
            <p className="eyebrow">
              {t("EDUCATION. UNDERSTANDING. CONFIDENCE.")}
            </p>
            <BlurText
              as="h2"
              text={t("Financial education shouldn\u2019t be a privilege.")}
            />
            <p>{t("Financial education should be accessible to everyone.")}</p>
            <p>
              {t(
                "We believe education is more than simply having information. It\u2019s about understanding your options, asking better questions, and gaining the confidence to make informed decisions.",
              )}
            </p>
            <Link href="/resources" className="button button-navy">
              {t("Explore our resources")}{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
        <section className="home-section approach-section">
          <div className="container">
            <div className="section-topline">
              <SectionHeading
                eyebrow={t("OUR APPROACH")}
                title={t("Understand first. Move forward when ready.")}
              />
              <Link href="/contact" className="inline-link">
                {t("Start a conversation")}{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="process-grid">
              {approach.map((item) => (
                <div className="process-step" key={item.step}>
                  <span className="step-number">
                    <AnimatedCounter end={Number(item.step)} />
                  </span>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="home-section container faq-layout">
          <div>
            <SectionHeading
              eyebrow={t("A LITTLE CLARITY")}
              title={t("Frequently asked questions.")}
              text={t(
                "Clear answers to common questions about protection, retirement, education, legacy planning, insurance, and how we work.",
              )}
            />
            <Link href="/faq" className="button button-gold">
              {t("View all FAQs")}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div>
            <FAQAccordion items={faqs.slice(0, 4)} />
          </div>
        </section>
        <section className="home-section resources-section">
          <div className="container">
            <div className="section-topline">
              <SectionHeading
                eyebrow={t("RESOURCES")}
                title={t("Education that supports better questions.")}
              />
              <Link href="/resources" className="inline-link">
                {t("Browse resources")}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="resource-editorial-grid">
              {resources.slice(0, 3).map((resource, index) => (
                <Link
                  href={resource.href}
                  key={resource.href}
                  className="resource-editorial"
                >
                  <div className="resource-card-image">
                    <Image
                      src={
                        [
                          "/images/consultation.png",
                          "/images/about-education.png",
                          "/images/services/retirement-income-planning-hero.png",
                        ][index]
                      }
                      alt={t("Financial education and planning")}
                      fill
                      sizes="(max-width:700px) 100vw, 33vw"
                    />
                  </div>
                  <div className="resource-card-copy">
                    <span className="eyebrow">{t(resource.category)}</span>
                    <h3>{t(resource.title)}</h3>
                    <p>{t(resource.description)}</p>
                    <span className="card-link">
                      {t("Read more")}
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
