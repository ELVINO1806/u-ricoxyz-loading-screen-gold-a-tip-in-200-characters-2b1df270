import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const tip =
  "Your agent is 99% done. It has been 99% done for an hour. It is not stuck. It is negotiating with your code.";

function resolveEntryPath(): string {
  const base = process.env.ENTRY_OUTPUT_DIR ?? "/output";
  return join(base, "entry.txt");
}

const outFile = resolveEntryPath();
const outDir = dirname(outFile);

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, tip, { encoding: "utf8" });

console.log(`Wrote ${tip.length} characters to ${outFile}`);
