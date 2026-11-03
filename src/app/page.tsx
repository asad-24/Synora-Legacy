import Image from "next/image";
import Link from "next/link";
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

export default function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <section className="signature-hero" aria-labelledby="hero-heading">
          <div className="signature-hero-image">
            <Image
              src="/images/services/legacy-planning-hero.png"
              alt="Three generations of a family enjoying time together"
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
                <span className="status-dot" /> SYNORA LEGACY{" "}
                <span className="badge-divider" /> Financial education.
                Protection. Legacy.
              </p>
              <h1 id="hero-heading">
                <BlurText text="Protect Today." className="hero-line" />
                <BlurText
                  text="Preserve Tomorrow."
                  className="hero-line hero-line-gold"
                  delay={85}
                />
              </h1>
              <p className="hero-description">
                Helping individuals and families make informed financial
                decisions, protect what matters most, and prepare for tomorrow.
              </p>
              <div className="hero-priorities">
                {[
                  { icon: BookOpen, label: "Education-first" },
                  { icon: ShieldCheck, label: "Family protection" },
                  { icon: Sprout, label: "Prepare for tomorrow" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label}>
                    <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
              <div className="hero-actions">
                <Link href="/contact#schedule" className="button button-gold">
                  Schedule a conversation{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/solutions" className="button button-outline-light">
                  Explore our solutions{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="hero-bottomline">
              <a href="#introduction">
                Discover our approach <ArrowDown size={14} aria-hidden="true" />
              </a>
              <span>FAMILY. FUTURE. LEGACY.</span>
            </div>
            <FocusMarquee />
          </div>
        </section>
        <section
          id="introduction"
          className="home-section container introduction"
        >
          <SectionHeading
            eyebrow="INTRODUCTION"
            title="A calmer way to approach important financial decisions."
          />
          <div className="intro-copy">
            <p>
              Synora Legacy helps individuals and families explore protection,
              planning, retirement, education, and legacy questions with
              clarity.
            </p>
            <p>
              The work begins with listening, continues through education, and
              moves forward only when the next step makes sense.
            </p>
            <Link href="/about" className="inline-link">
              Discover Synora Legacy{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
        <section className="home-section featured-section">
          <div className="container">
            <SectionHeading
              eyebrow="SECURED SOLUTIONS"
              title="Featured financial solutions."
              text="A focused starting point for protection, living benefits, retirement income, and final expense planning."
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
                      alt={service.heroImageAlt || service.title}
                      fill
                      sizes="(max-width:700px) 85vw, (max-width:1100px) 50vw, 25vw"
                    />
                  </div>
                  <div className="feature-card-shade" />
                  <div className="feature-card-copy">
                    <span className="feature-card-label">
                      SOLUTION 0{index + 1}
                    </span>
                    <h3>{service.shortTitle}</h3>
                    <p>{service.summary}</p>
                    <span className="card-link">
                      Explore solution{" "}
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="section-action">
              <Link href="/solutions" className="button button-gold">
                View all our solutions{" "}
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
                  THE SYNORA LEGACY PHILOSOPHY
                </p>
                <BlurText
                  as="h2"
                  text="Guidance built around clarity, not pressure."
                />
                <p>
                  The firm’s philosophy is simple: help people understand the
                  choices in front of them and prepare with confidence.
                </p>
                <Link href="/about" className="inline-link inline-link-light">
                  Get to know our approach{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
              <div className="philosophy-grid">
                {philosophy.map(({ title, icon: Icon, description }) => (
                  <div className="philosophy-item" key={title}>
                    <span className="icon-chip">
                      <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
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
              alt="An attentive financial education conversation"
              fill
              sizes="(max-width:900px) 100vw, 50vw"
            />
            <div className="education-image-note">
              <BookOpen size={25} strokeWidth={1.5} aria-hidden="true" />
              <span>
                Understanding before decisions.<strong>Education first.</strong>
              </span>
            </div>
          </div>
          <div className="education-editorial-copy">
            <p className="eyebrow">EDUCATION. UNDERSTANDING. CONFIDENCE.</p>
            <BlurText
              as="h2"
              text="Financial education shouldn’t be a privilege."
            />
            <p>Financial education should be accessible to everyone.</p>
            <p>
              We believe education is more than simply having information. It’s
              about understanding your options, asking better questions, and
              gaining the confidence to make informed decisions.
            </p>
            <Link href="/resources" className="button button-navy">
              Explore our resources{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
        <section className="home-section approach-section">
          <div className="container">
            <div className="section-topline">
              <SectionHeading
                eyebrow="OUR APPROACH"
                title="Understand first. Move forward when ready."
              />
              <Link href="/contact" className="inline-link">
                Start a conversation{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="process-grid">
              {approach.map((item) => (
                <div className="process-step" key={item.step}>
                  <span className="step-number">
                    <AnimatedCounter end={Number(item.step)} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="home-section container faq-layout">
          <div>
            <SectionHeading
              eyebrow="A LITTLE CLARITY"
              title="Frequently asked questions."
              text="Clear answers to common questions about protection, retirement, education, legacy planning, insurance, and how we work."
            />
            <Link href="/faq" className="button button-gold">
              View all FAQs <ArrowUpRight size={17} aria-hidden="true" />
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
                eyebrow="RESOURCES"
                title="Education that supports better questions."
              />
              <Link href="/resources" className="inline-link">
                Browse resources <ArrowUpRight size={17} aria-hidden="true" />
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
                      alt="Financial education and planning"
                      fill
                      sizes="(max-width:700px) 100vw, 33vw"
                    />
                  </div>
                  <div className="resource-card-copy">
                    <span className="eyebrow">{resource.category}</span>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <span className="card-link">
                      Read more <ArrowUpRight size={18} aria-hidden="true" />
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
