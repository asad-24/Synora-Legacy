// Keep only client-rendered messages in the language provider's browser payload.
// The full dictionaries and educational documents remain on the server.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
const root = fileURLToPath(new URL("..", import.meta.url));
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? walk(path.join(dir, entry.name))
        : [path.join(dir, entry.name)],
    );
const keys = new Set();
for (const file of walk(path.join(root, "src/components")).filter((file) =>
  file.endsWith(".tsx"),
)) {
  const source = fs.readFileSync(file, "utf8");
  if (!source.startsWith('"use client"')) continue;
  const tree = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  const visit = (node) => {
    if (
      ts.isStringLiteral(node) &&
      /[A-Za-z]/.test(node.text) &&
      !node.text.includes("/") &&
      !/[#{}<>]/.test(node.text) &&
      !node.text.includes("className")
    )
      keys.add(node.text);
    ts.forEachChild(node, visit);
  };
  visit(tree);
}
// Error messages returned by the form endpoints are translated in the client.
for (const file of walk(path.join(root, "src/app/api")).filter((file) =>
  file.endsWith(".ts"),
)) {
  const tree = ts.createSourceFile(
    file,
    fs.readFileSync(file, "utf8"),
    ts.ScriptTarget.Latest,
    true,
  );
  const visit = (node) => {
    if (
      ts.isPropertyAssignment(node) &&
      node.name.getText(tree) === "error" &&
      ts.isStringLiteral(node.initializer)
    )
      keys.add(node.initializer.text);
    ts.forEachChild(node, visit);
  };
  visit(tree);
}
fs.writeFileSync(
  path.join(root, "src/data/client-translation-keys.json"),
  JSON.stringify([...keys].sort(), null, 2) + "\n",
);
console.log("Updated " + keys.size + " client translation keys.");
