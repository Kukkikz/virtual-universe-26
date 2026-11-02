import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const query = process.argv.slice(2).join(" ").trim();

if (!query) {
  console.error("Usage: npm run search -- <word>");
  process.exitCode = 1;
} else {
  const notesPath = new URL("./notes/keynote-highlights.json", import.meta.url);
  const { highlights } = JSON.parse(readFileSync(fileURLToPath(notesPath), "utf8"));
  const searchTerm = query.toLowerCase();
  const matches = highlights.filter(({ title, summary }) =>
    title.toLowerCase().includes(searchTerm) ||
    summary.toLowerCase().includes(searchTerm)
  );

  for (const { title } of matches) {
    console.log(title);
  }
}
