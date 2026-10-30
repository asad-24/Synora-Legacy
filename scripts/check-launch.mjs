import { readFileSync } from "node:fs";
const profile = JSON.parse(
  readFileSync(
    new URL("../src/data/site-profile.json", import.meta.url),
    "utf8",
  ),
);
const required = [
  "name",
  "approvedTitle",
  "licenseNumber",
  "licensingDisclosure",
  "email",
  "phone",
  "privacyPolicy",
  "termsOfUse",
];
const missing = required.filter((key) => !profile[key]?.trim());
if (missing.length) {
  console.error(
    `Local preview only. Add approved information to src/data/site-profile.json: ${missing.join(", ")}.`,
  );
  process.exitCode = 1;
} else {
  console.log(
    "Profile fields are complete. Confirm content approval, hosting, email delivery, spam protection, and the domain before launch.",
  );
}
