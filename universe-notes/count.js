import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const notesPath = new URL("./notes/keynote-highlights.json", import.meta.url);
const { highlights } = JSON.parse(readFileSync(fileURLToPath(notesPath), "utf8"));

console.log(highlights.length);
