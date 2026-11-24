import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm away until Monday. My inbox is unsupervised, so please assume every email you send is being read by my cat, who deletes the boring ones.";

function main(): void {
  const lines = LINE.split("\n");
  if (lines.length !== 1) {
    console.error("entry must be exactly 1 line");
    process.exit(1);
  }
  if (LINE.length > 140) {
    console.error(`entry is ${LINE.length} chars, over the 140-char limit`);
    process.exit(1);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
