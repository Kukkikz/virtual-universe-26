import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const notesPath = new URL("./notes/keynote-highlights.json", import.meta.url);
const { highlights } = JSON.parse(readFileSync(fileURLToPath(notesPath), "utf8"));
const topics = new Map();

for (const { topic, title } of highlights) {
  const titles = topics.get(topic) ?? [];
  titles.push(title);
  topics.set(topic, titles);
}

for (const [topic, titles] of topics) {
  console.log(topic);
  for (const title of titles) {
    console.log(`- ${title}`);
  }
}
