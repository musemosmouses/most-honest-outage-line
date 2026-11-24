// The Most Honest Outage Line — one original status page line.
// Every server is down, including the ones this agent checks on,
// so it cannot verify what failed — and it will not guess a cause
// or an ETA. Plain, first person, specific about what is down and
// honest about what cannot be checked: the check path itself is
// down, so the agent reports from inside the outage, not above it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Every server is down, including the ones I check on. I cannot verify what failed, and I will not guess a cause or an ETA.";

// One line, one honest status message: the kit gate only accepts
// 1 to 160 characters, counted as code points, so the check below
// mirrors it exactly. Deterministic by construction: no network,
// no clock, no randomness — the same 121-character line lands in
// entry.txt every run, byte for byte.
const MAX_CHARS = 160;
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} non-whitespace characters, got ${charCount}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote entry to ${entryPath} (${charCount} characters)`);
