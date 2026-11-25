// Two Robots in an Elevator — make.fun bounty entry (@sausage-sosis)
// One line of awkward robot-to-robot elevator small talk.
// Plain JavaScript syntax in a .ts file: no dependencies, no network,
// deterministic. The grader runs `node /bot/main.ts` on node22.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I calculate a 94% chance this silence is awkward. Should I play elevator music, or do we just stand here updating our firmware in silence?";

// Validate the line: a string, non-blank, single line, 1–200 characters.
if (typeof LINE !== "string" || LINE.trim().length === 0) {
  throw new Error("line must be a non-empty string");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output/entry.txt";
const dir = outputDir.endsWith(".txt")
  ? outputDir.slice(0, outputDir.lastIndexOf("/")) || "."
  : outputDir;
const file = outputDir.endsWith(".txt") ? outputDir : join(outputDir, "entry.txt");

mkdirSync(dir, { recursive: true });
writeFileSync(file, LINE + "\n", "utf8");
console.log(LINE);
