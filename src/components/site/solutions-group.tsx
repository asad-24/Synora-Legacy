import { getTranslation } from "@/lib/i18n/server";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/site";
import { LocaleLink as Link } from "@/components/site/locale-link";
export async function SolutionsGroup({
  description,
  index,
  services,
  title,
}: {
  description: string;
  index: number;
  services: Service[];
  title: string;
}) {
  const t = await getTranslation();
  return (
    <section className="solution-collection">
      <div className="solution-collection-header" data-reveal>
        <div>
          <span className="collection-index">
            {t("0")}
            {t(index + 1)}
          </span>
          <h2>{t(title)}</h2>
        </div>
        <p>{t(description)}</p>
      </div>
      <div className="solution-collection-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.slug}
              href={`/solutions/${service.slug}`}
              className="solution-tile"
            >
              <Icon size={28} strokeWidth={1.25} aria-hidden="true" />
              <h3>{t(service.shortTitle)}</h3>
              <p>{t(service.summary)}</p>
              <span className="card-link">
                {t("Learn more")}
                <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
