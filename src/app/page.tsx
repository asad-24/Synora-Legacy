import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { CTASection } from "@/components/site/section";
import {
  approach,
  featuredHomeServices,
  philosophy,
  resources,
} from "@/data/site";

export default function HomePage() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <section className="signature-hero" aria-labelledby="hero-heading">
          <div className="signature-hero-image">
            <Image
              src="/images/services/legacy-planning-hero.png"
              alt="Three generations of a family sharing a happy moment together"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
          <div className="signature-hero-shade" />
          <div className="hero-orbit" aria-hidden="true" />
          <div className="container signature-hero-inner">
            <div className="signature-hero-copy">
              <p className="eyebrow eyebrow-light">
                <span className="gold-rule" /> SYNORA LEGACY
              </p>
              <h1 id="hero-heading">
                Protect Today.
                <br />
                <em>
                  Preserve
                  <br />
                  Tomorrow.
                </em>
              </h1>
              <p className="hero-description">
                Helping individuals and families make informed financial
                decisions, protect what matters most, and prepare for tomorrow.
              </p>
              <div className="hero-actions">
                <Link href="/contact#schedule" className="button button-gold">
                  Schedule a conversation{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <Link href="/solutions" className="hero-text-link">
                  Explore our solutions{" "}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="hero-side-note">
              <span className="vertical-label">FAMILY. FUTURE. LEGACY.</span>
              <p>Conversation first.</p>
              <span>
                Calm guidance for protection,
                <br />
                planning, and prepared decisions.
              </span>
            </div>
            <div className="hero-bottomline">
              <a href="#introduction">
                Discover our approach <ArrowDown size={14} aria-hidden="true" />
              </a>
              <span>
                FINANCIAL EDUCATION <i /> PROTECTION <i /> LEGACY
              </span>
            </div>
          </div>
        </section>
        <section className="focus-bar container" aria-label="Our focus">
          {[
            {
              icon: BookOpen,
              title: "Financial education",
              sub: "Education-first",
            },
            {
              icon: ShieldCheck,
              title: "Meaningful protection",
              sub: "Family protection",
            },
            {
              icon: Sprout,
              title: "A lasting legacy",
              sub: "Prepare for tomorrow",
            },
          ].map(({ icon: Icon, title, sub }, i) => (
            <div key={title}>
              <span className="focus-number">0{i + 1}</span>
              <Icon strokeWidth={1.25} size={29} aria-hidden="true" />
              <div>
                <p>{title}</p>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </section>
        <section
          id="introduction"
          className="home-section container introduction"
        >
          <div className="intro-heading">
            <p className="eyebrow">A FOUNDATION OF UNDERSTANDING</p>
            <h2>
              A calmer way to approach <em>important financial decisions.</em>
            </h2>
            <Link href="/about" className="inline-link">
              Discover Synora Legacy{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="intro-copy">
            <span className="section-ornament" aria-hidden="true">
              S
            </span>
            <p>
              Synora Legacy helps individuals and families explore protection,
              planning, retirement, education, and legacy questions with
              clarity.
            </p>
            <p>
              The work begins with listening, continues through education, and
              moves forward only when the next step makes sense.
            </p>
            <div className="intro-signature">
              <span /> Protect Today. Preserve Tomorrow.
            </div>
          </div>
        </section>
        <section className="home-section philosophy-section">
          <div className="container">
            <div className="section-topline">
              <div>
                <p className="eyebrow">THE SYNORA LEGACY PHILOSOPHY</p>
                <h2>
                  Guidance built around clarity,
                  <br />
                  <em>not pressure.</em>
                </h2>
              </div>
              <p className="section-side-text">
                The firm’s philosophy is simple: help people understand the
                choices in front of them and prepare with confidence.
              </p>
            </div>
            <div className="philosophy-grid">
              {philosophy.map(({ title, icon: Icon, description }, index) => (
                <div className="philosophy-item" key={title}>
                  <div>
                    <Icon size={31} strokeWidth={1.2} aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="home-section container featured-section">
          <div className="section-topline">
            <div>
              <p className="eyebrow">SECURED SOLUTIONS</p>
              <h2>
                Thoughtful protection.
                <br />
                <em>Purposeful preparation.</em>
              </h2>
            </div>
            <div>
              <p className="section-side-text">
                A focused starting point for protection, living benefits,
                retirement income, and final expense planning.
              </p>
              <Link href="/solutions" className="inline-link">
                View all our solutions{" "}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
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
                    sizes="(max-width:600px) 100vw, (max-width:1000px) 50vw, 25vw"
                  />
                  <span>0{index + 1}</span>
                </div>
                <div className="feature-card-copy">
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
        </section>
        <section className="education-editorial">
          <div className="education-editorial-image">
            <Image
              src="/images/about-education.png"
              alt="An attentive financial education conversation"
              fill
              sizes="(max-width:800px) 100vw, 50vw"
            />
          </div>
          <div className="education-editorial-copy">
            <p className="eyebrow eyebrow-light">
              EDUCATION. UNDERSTANDING. CONFIDENCE.
            </p>
            <h2>
              Financial education
              <br />
              shouldn’t be
              <br />
              <em>a privilege.</em>
            </h2>
            <p>Financial education should be accessible to everyone.</p>
            <p>
              We believe education is more than simply having information. It’s
              about understanding your options, asking better questions, and
              gaining the confidence to make informed decisions.
            </p>
            <Link href="/resources" className="button button-gold">
              Explore our resources{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <span className="editorial-corner" aria-hidden="true" />
          </div>
        </section>
        <section className="home-section container approach-section">
          <div className="section-topline">
            <div>
              <p className="eyebrow">OUR APPROACH</p>
              <h2>
                Understand first.
                <br />
                <em>Move forward when ready.</em>
              </h2>
            </div>
            <Link href="/contact" className="inline-link">
              Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="process-grid">
            {approach.map((item) => (
              <div className="process-step" key={item.step}>
                <span className="step-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="home-section resources-section">
          <div className="container">
            <div className="section-topline">
              <div>
                <p className="eyebrow">THE LEARNING COLLECTION</p>
                <h2>
                  Education that supports
                  <br />
                  <em>better questions.</em>
                </h2>
              </div>
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
                  <div>
                    <span>{resource.category}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <span className="card-link">
                    Read more <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
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
