import { getTranslation } from "@/lib/i18n/server";
import {
  parseApprovedDocument,
  cleanParagraph,
  formatTitle,
  isListLike,
} from "@/lib/approved-document";
import { CheckCircle2 } from "lucide-react";
import {
  approvedDocuments,
  type ApprovedDocumentKey,
} from "@/data/approved-content";
export async function ApprovedDocContent({
  docKey,
  compact = false,
}: {
  docKey: ApprovedDocumentKey;
  compact?: boolean;
}) {
  const t = await getTranslation();
  const translate = t;
  const sections = parseApprovedDocument(approvedDocuments[docKey].text);
  return (
    <div className="reading-collection">
      {sections.map((section) => {
        const isDisclosure = /disclosure|disclaimer|notice|terms|privacy/i.test(
          section.title,
        );
        return (
          <article
            key={section.title}
            className={`reading-article rounded-[8px] border ${
              isDisclosure
                ? "border-[#C9A227]/30 bg-[#F7F4EC]"
                : "border-[#0B1F3A]/10 bg-white"
            } ${compact ? "p-4 sm:p-5" : "p-3.5 sm:p-5 lg:p-6"}`}
          >
            <h2 className="break-words text-lg font-bold leading-snug text-[#071629] sm:text-2xl">
              {translate(formatTitle(section.title))}
            </h2>
            <div className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3">
              {section.paragraphs.map((paragraph, index) => {
                const cleanedParagraph = cleanParagraph(paragraph);
                const translatedParagraph = translate(cleanedParagraph);
                return isListLike(paragraph) ? (
                  <div
                    key={`${section.title}-${paragraph}-${index}`}
                    className="flex gap-3 break-words text-[15px] leading-7 text-[#334155] sm:text-base"
                  >
                    <CheckCircle2
                      className="mt-1 size-4 shrink-0 text-[#C9A227]"
                      aria-hidden="true"
                    />
                    <span>{translatedParagraph}</span>
                  </div>
                ) : (
                  <p
                    key={`${section.title}-${paragraph}-${index}`}
                    className="break-words text-[15px] leading-7 text-[#334155] sm:text-base sm:leading-8"
                  >
                    {translatedParagraph}
                  </p>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
}
