// THE WORLD IN ONE DAY — news-image-20261121
// A newspaper-style front page summing up Saturday 21 November 2026.
// Node 22, standard library only. The image is entry.png beside this file;
// the program copies it to the output directory. No network, no stdin,
// no servers, no process.cwd(): paths root from import.meta.url only.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
