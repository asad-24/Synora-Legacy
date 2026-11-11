import { getTranslation } from "@/lib/i18n/server";
import { ChevronDown } from "lucide-react";
export async function FAQAccordion({
  items,
}: {
  items: {
    question: string;
    answer: string;
  }[];
}) {
  const t = await getTranslation();
  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            {t(item.question)}
            <span>
              <ChevronDown size={18} aria-hidden="true" />
            </span>
          </summary>
          <div className="faq-answer">
            <p>{t(item.answer)}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
