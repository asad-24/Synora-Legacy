import { approvedDocuments } from "./approved-content";

// The wording comes directly from the existing Fredsola educational content.
const body =
  approvedDocuments.faq.text
    .split("EXPANDED FAQ PAGE\n")[1]
    ?.split("\nFAQ DISCLOSURE")[0] || "";
export const faqs = body
  .split(/\n(?=[^\n]+\?\n)/)
  .filter(Boolean)
  .map((block) => {
    const [heading, ...answer] = block.split("\n");
    const lower = heading
      .toLowerCase()
      .replace(/\biul\b/g, "IUL")
      .replace(/\bfias\b/g, "FIAs")
      .replace(/\bfafsa\b/g, "FAFSA")
      .replace(/\bi\b/g, "I");
    return {
      question: lower.charAt(0).toUpperCase() + lower.slice(1),
      answer: answer.join(" "),
    };
  });

export const faqNotices =
  approvedDocuments.faq.text
    .split("\nFAQ DISCLOSURE\n")[1]
    ?.split("\nDESIGNER NOTE")[0]
    .split("\nSTANDARD WEBSITE DISCLOSURE\n") || [];
