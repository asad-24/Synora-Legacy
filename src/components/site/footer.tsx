import { getTranslation } from "@/lib/i18n/server";
import { LocaleLink as Link } from "@/components/site/locale-link";
import { ArrowUpRight } from "lucide-react";
import { company, navigation } from "@/data/site";
import { professional } from "@/data/professional";
import { Logo } from "./logo";
export async function Footer() {
  const t = await getTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div className="footer-intro">
          <Logo light />
          <p>
            {t(
              "Education-first financial conversations for individuals and families who want clarity, protection, and a more confident view of tomorrow.",
            )}
          </p>
          <span className="footer-domain">
            {t("synoralegacy.com")}
            <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </div>
        <div>
          <h2>{t("Explore")}</h2>
          {navigation
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link key={item.href} href={item.href}>
                {t(item.label)}
              </Link>
            ))}
        </div>
        <div>
          <h2>{t("Your next chapter")}</h2>
          <Link href="/solutions/life-insurance">
            {t("Protect your family")}
          </Link>
          <Link href="/solutions/retirement-income-planning">
            {t("Prepare for retirement")}
          </Link>
          <Link href="/solutions/legacy-planning">
            {t("Think about your legacy")}
          </Link>
          <Link href="/faq">{t("Frequently asked questions")}</Link>
        </div>
        <div>
          <h2>{t("Connect with us")}</h2>
          <Link href="/contact">
            {t("Start a conversation")}
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          {company.email && (
            <a href={`mailto:${company.email}`}>{t(company.email)}</a>
          )}
          {company.phone && (
            <a href={`tel:${company.phone.replace(/[^+0-9]/g, "")}`}>
              {t(company.phone)}
            </a>
          )}
          {professional.name && (
            <p>
              {t(professional.name)}
              {professional.approvedTitle && (
                <>
                  <br />
                  {t(professional.approvedTitle)}
                </>
              )}
            </p>
          )}
          {professional.licenseNumber && (
            <p>
              {t("License / NPN:")} {professional.licenseNumber}
            </p>
          )}
        </div>
      </div>
      <div className="footer-disclosures container">
        <p>
          {t(
            "General educational information only. Individual needs, eligibility, policy terms, and availability vary. Consult appropriately qualified professionals for advice specific to your circumstances.",
          )}
        </p>
        {professional.licensingDisclosure ? (
          <p>{t(professional.licensingDisclosure)}</p>
        ) : (
          <p className="draft-notice">
            {t(
              "Website preview. Representative details and approved licensing disclosures are pending. Services are not offered through this preview.",
            )}
          </p>
        )}
      </div>
      <div className="footer-bottom container">
        <span>
          © {new Date().getFullYear()}{" "}
          {t("Synora Legacy. All rights reserved.")}
        </span>
        <div>
          <Link href="/legal#privacy-policy">{t("Privacy")}</Link>
          <Link href="/legal#terms-of-use">{t("Terms")}</Link>
          <Link href="/legal#licensing-disclosures">{t("Disclosures")}</Link>
        </div>
      </div>
    </footer>
  );
}
