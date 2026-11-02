import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const notesPath = new URL("./notes/keynote-highlights.json", import.meta.url);
const countScriptPath = fileURLToPath(new URL("./count.js", import.meta.url));
const { highlights } = JSON.parse(readFileSync(fileURLToPath(notesPath), "utf8"));

test("count prints the number of keynote highlights", () => {
  const result = spawnSync(process.execPath, [countScriptPath], { encoding: "utf8" });

  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout, `${highlights.length}\n`);
});
