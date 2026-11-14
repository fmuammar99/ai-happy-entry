// ai-happy-01 entry: copy the entry image to the grader's output directory.
// Runs on Node 22 with the standard library only. No network, no dependencies.
// The image shows a grandfather blowing a soap bubble for his granddaughter.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(new URL('./entry.png', import.meta.url));
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);

// The judge sees exactly these bytes: one warm, specific, happy moment.

