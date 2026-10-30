import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { company, navigation } from "@/data/site";
import { professional } from "@/data/professional";
import { Logo } from "./logo";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div className="footer-intro">
          <Logo light />
          <p>
            Education-first financial conversations for individuals and families
            who want clarity, protection, and a more confident view of tomorrow.
          </p>
          <span className="footer-domain">
            synoralegacy.com <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </div>
        <div>
          <h2>Explore</h2>
          {navigation
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
        </div>
        <div>
          <h2>Your next chapter</h2>
          <Link href="/solutions/life-insurance">Protect your family</Link>
          <Link href="/solutions/retirement-income-planning">
            Prepare for retirement
          </Link>
          <Link href="/solutions/legacy-planning">Think about your legacy</Link>
          <Link href="/faq">Frequently asked questions</Link>
        </div>
        <div>
          <h2>Connect with us</h2>
          <Link href="/contact">
            Start a conversation <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          {company.email && (
            <a href={`mailto:${company.email}`}>{company.email}</a>
          )}
          {company.phone && (
            <a href={`tel:${company.phone.replace(/[^+0-9]/g, "")}`}>
              {company.phone}
            </a>
          )}
          {professional.name && (
            <p>
              {professional.name}
              {professional.approvedTitle && (
                <>
                  <br />
                  {professional.approvedTitle}
                </>
              )}
            </p>
          )}
          {professional.licenseNumber && (
            <p>License / NPN: {professional.licenseNumber}</p>
          )}
        </div>
      </div>
      <div className="footer-disclosures container">
        <p>
          General educational information only. Individual needs, eligibility,
          policy terms, and availability vary. Consult appropriately qualified
          professionals for advice specific to your circumstances.
        </p>
        {professional.licensingDisclosure ? (
          <p>{professional.licensingDisclosure}</p>
        ) : (
          <p className="draft-notice">
            Website preview. Representative details and approved licensing
            disclosures are pending. Services are not offered through this
            preview.
          </p>
        )}
      </div>
      <div className="footer-bottom container">
        <span>
          © {new Date().getFullYear()} Synora Legacy. All rights reserved.
        </span>
        <div>
          <Link href="/legal#privacy-policy">Privacy</Link>
          <Link href="/legal#terms-of-use">Terms</Link>
          <Link href="/legal#licensing-disclosures">Disclosures</Link>
        </div>
      </div>
    </footer>
  );
}
