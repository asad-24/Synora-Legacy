import { localizedMetadata } from "@/lib/i18n/metadata";
import CareersPage from "@/app/[locale]/careers/page";
const pageMetadata = {
  title: "Join Us",
};
export async function generateMetadata() {
  return localizedMetadata(
    "/join-us",
    pageMetadata.title,
    "description" in pageMetadata
      ? String(pageMetadata.description)
      : undefined,
  );
}
export default CareersPage;
