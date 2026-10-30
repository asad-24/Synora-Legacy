import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/site";
import Link from "next/link";
export function SolutionsGroup({
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
  return (
    <section className="solution-collection">
      <div className="solution-collection-header">
        <div>
          <span className="collection-index">0{index + 1}</span>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
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
              <h3>{service.shortTitle}</h3>
              <p>{service.summary}</p>
              <span className="card-link">
                Learn more <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
