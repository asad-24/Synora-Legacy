type ParsedSection = { title: string; paragraphs: string[] };
const skipLines = new Set([
  "SYNORA LEGACY",
  "Synora Legacy",
  "National Website Privacy Policy",
  "Website Terms of Use",
  "Licensing & Disclosures",
  "Educational Content Disclaimer",
  "PAGE TITLE",
  "HERO",
  "CTA",
  "NEXT STEP",
  "[ LEARN MORE ]",
  "[ START A CONVERSATION ]",
]);
export function parseApprovedDocument(text: string): ParsedSection[] {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const usableLines = trimDesignerNotes(trimIntroContext(lines));
  const sections: ParsedSection[] = [];
  let current: ParsedSection | null = null;
  for (const line of usableLines) {
    if (shouldSkipLine(line)) {
      continue;
    }
    if (isHeading(line)) {
      if (current && current.paragraphs.length > 0) {
        sections.push(current);
      }
      current = { title: line, paragraphs: [] };
      continue;
    }
    if (!current) {
      current = { title: "Overview", paragraphs: [] };
    }
    current.paragraphs.push(line);
  }
  if (current && current.paragraphs.length > 0) {
    sections.push(current);
  }
  return sections;
}
function trimIntroContext(lines: string[]) {
  const expandedIndex = lines.findIndex((line) =>
    /^EXPANDED .*PAGE$/i.test(line),
  );
  if (expandedIndex >= 0) {
    return lines.slice(expandedIndex + 1);
  }
  const heroIndex = lines.findIndex((line) => line === "HERO");
  if (heroIndex >= 0) {
    let index = heroIndex + 2;
    while (index < lines.length && !isHeading(lines[index])) {
      index += 1;
    }
    return lines.slice(index);
  }
  const firstNumbered = lines.findIndex((line) => /^\d+\.\s+/.test(line));
  if (firstNumbered >= 0) {
    return lines.slice(0, firstNumbered).concat(lines.slice(firstNumbered));
  }
  return lines;
}
function trimDesignerNotes(lines: string[]) {
  const designerNoteIndex = lines.findIndex((line) =>
    /^(DESIGNER NOTE|SOURCE NOTE FOR DESIGNER|SOURCE NOTE FOR DESIGNER \/ COMPLIANCE REVIEW)$/i.test(
      line,
    ),
  );
  return designerNoteIndex >= 0 ? lines.slice(0, designerNoteIndex) : lines;
}
function shouldSkipLine(line: string) {
  return (
    skipLines.has(line) ||
    /^PAGE \d+/i.test(line) ||
    /^WORKING PAGE \d+/i.test(line) ||
    /^SOLUTION \d+/i.test(line) ||
    /^SOLUTIONS LANDING PAGE/i.test(line) ||
    /^SOLUTIONS \/ INFORMATION LANDING PAGE/i.test(line) ||
    /^EXPANDED .*PAGE$/i.test(line) ||
    /^EDUCATIONAL PAGE/i.test(line) ||
    /^RESOURCE \/ EDUCATIONAL TOPIC/i.test(line) ||
    /^Short description:/i.test(line) ||
    /^Note:/i.test(line) ||
    /^Effective Date:/i.test(line) ||
    /^Last Updated:/i.test(line)
  );
}
function isHeading(line: string) {
  if (/^\d+\.\s+/.test(line)) {
    return true;
  }
  if (line.length > 88 || /[.!?]$/.test(line)) {
    return false;
  }
  const letters = line.replace(/[^A-Za-z]/g, "");
  if (letters.length < 3) {
    return false;
  }
  const uppercaseLetters = letters.replace(/[^A-Z]/g, "");
  return uppercaseLetters.length / letters.length > 0.82;
}
export function isListLike(line: string) {
  return (
    /^[-•]/.test(line) ||
    /^[A-Z][A-Za-z\s]+:$/.test(line) ||
    (line.length < 80 && !/[.!?]$/.test(line))
  );
}
export function cleanParagraph(line: string) {
  return line
    .replace(/^[-•]\s*/, "")
    .replace(/\s*cite.*?/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
export function formatTitle(title: string) {
  return title.replace(/^\d+\.\s+/, "");
}
