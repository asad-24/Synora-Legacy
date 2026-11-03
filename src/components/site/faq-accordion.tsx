import { ChevronDown } from "lucide-react";
export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-accordion">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            {item.question}
            <span>
              <ChevronDown size={18} aria-hidden="true" />
            </span>
          </summary>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
