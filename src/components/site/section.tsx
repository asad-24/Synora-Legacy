import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
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
export function SectionHeading({
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
  return (
    <div
      className={cn(
        "section-heading",
        align === "center" && "section-heading-center",
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-description">{text}</p>}
    </div>
  );
}
export function PageHero({
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
  return (
    <section className={cn("page-hero", image && "page-hero-with-image")}>
      <div className="page-hero-orbit" aria-hidden="true" />
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Synora Legacy</Link>
          <ChevronRight size={12} aria-hidden="true" />
          <span>{eyebrow}</span>
        </nav>
        <div className="page-hero-grid">
          <div>
            <p className="eyebrow eyebrow-light">
              <span className="gold-rule" />
              {eyebrow}
            </p>
            <h1>{title}</h1>
            <p className="page-hero-description">{text}</p>
          </div>
          {image && (
            <div className="page-hero-image">
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width:900px) 100vw, 45vw"
              />
            </div>
          )}
        </div>
        <div className="page-hero-bottom">
          <span>FINANCIAL EDUCATION • PROTECTION • LEGACY</span>
          <span className="gold-rule" />
        </div>
      </div>
    </section>
  );
}
export function CTASection({
  title = "Start with a thoughtful conversation.",
  text = "Bring your questions, priorities, and concerns. Synora Legacy will help you organize the next step with clarity.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="legacy-cta">
      <div className="container">
        <div>
          <p className="eyebrow eyebrow-light">
            YOUR TOMORROW STARTS WITH A CONVERSATION
          </p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link href="/contact#schedule" className="button button-gold">
          Schedule a conversation <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      <span className="cta-watermark" aria-hidden="true">
        S
      </span>
    </section>
  );
}
