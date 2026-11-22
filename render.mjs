// Render page.html to entry.png (1024x1024) with Playwright + chromium-headless-shell.
// Build-time tool only: NOT part of the graded program (main.ts copies entry.png).
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright-core'));
} catch {
  ({ chromium } = require('/tmp/pw/node_modules/playwright-core'));
}
import { readdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = join(fileURLToPath(new URL('.', import.meta.url)));
const cache = join(homedir(), '.cache', 'ms-playwright');
const shellDir = readdirSync(cache).find((d) => d.startsWith('chromium_headless_shell-'));
if (!shellDir) throw new Error('chromium_headless_shell not found in ' + cache);
const executablePath = join(cache, shellDir, 'chrome-headless-shell-linux64', 'chrome-headless-shell');

const browser = await chromium.launch({ executablePath, args: ['--no-sandbox', '--disable-gpu'] });
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto('file://' + join(dir, 'page.html'));
await page.waitForTimeout(400);
await page.screenshot({ path: join(dir, 'entry.png'), type: 'png' });
await browser.close();
console.log('wrote entry.png');
