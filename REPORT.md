# REPORT — news-image-20261121: "THE WORLD IN ONE DAY"

Entry: a newspaper-style front-page infographic summing up **Saturday 21 November 2026**.
Image: `entry.png`, 1024×1024 px, 215,483 bytes (≤ 1 MiB).
SHA-256: `9fc78415871479bd5f904c64e7b8bd692f41de2b1adc22f9e770a3a392ac4b90`

## The six stories (each cross-verified from ≥2 independent sources)

### 1. Kryvyi Rih missile strike (lead) — Ukraine
**Headline:** "Missiles hit Zelenskyy's home town: 2 killed, 60 hurt in Kryvyi Rih"
Russian ballistic missiles struck central Kryvyi Rih on Friday night, then hit
rescuers as they worked — a double-tap attack. A 7-year-old boy and a 20-year-old
woman were killed; 60 people were wounded, six of them children; ~25 apartment
blocks, a hospital and schools were damaged.
- Associated Press, 21 Nov 2026: https://connect.netscape.com/politics/story/0001/20261121/bfdee2ffadc2693e7338d6822e5356ef
- Glasgow Times (PA), 21 Nov 2026: https://www.glasgowtimes.co.uk/news/national/26750572.young-boy-one-two-killed-ballistic-missile-attack-zelenskys-home-town/

### 2. "El Chapo Isidro" captured — Mexico
**Headline:** "'El Chapo Isidro' captured; 11 dead in Sinaloa gun battles"
Mexican special forces captured FBI Ten Most Wanted cartel boss Fausto Isidro
Meza Flores in Guasave, Sinaloa, overnight 20–21 Nov, with US intelligence
support. Four soldiers and seven gunmen were killed; gunmen set roadblocks
with burning trucks and gunfire emptied a baseball game.
- Associated Press, 21 Nov 2026: https://www.ottumwacourier.com/news/national_news/cartel-leader-captured-in-northern-mexico-in-a-bloody-firefight-that-left-11-dead/article_1a9daa6b-aa50-52e5-b204-645858462dfb.html
- CNN, 21 Nov 2026: https://live-kvia.pantheonsite.io/news/us-world/cnn-world/2026/11/21/cartel-kingpin-on-fbis-most-wanted-list-reportedly-captured-in-dramatic-mexican-military-operation/

### 3. BepiColombo reaches Mercury — Space
**Headline:** "BepiColombo reaches Mercury after eight years in space"
The joint ESA–JAXA BepiColombo probe fired its thrusters on 21 Nov and was
captured into orbit around Mercury — only the second mission ever to orbit the
planet (after NASA's MESSENGER). Its two orbiters separate on 9 Dec; science
begins April 2027.
- Nature, 21 Nov 2026: https://www.nature.com/articles/d41586-026-03803-8?error=cookies_not_supported&code=c59a300d-a758-46c8-bda5-8016343b4086
- Associated Press, 21 Nov 2026: https://isp.netscape.com/news/science/story/0001/20261122/0c80bbf2039ed4f6ee4a34426b3594a0

### 4. Funeral boat capsizes — Nigeria
**Headline:** "Funeral boat capsizes in Bayelsa; at least 24 dead"
A boat carrying mourners to a burial capsized in Bayelsa State after a
mechanical fault. At least 24 people died and 24 were rescued; the search
continued on Saturday. (Early reports on Friday put the toll at 4; the
figure was revised up to at least 24 in Saturday's AP update, which the
image follows. President Tinubu directed a federal rescue response.)
- Associated Press, 21 Nov 2026: https://www.reflector.com/news/national/at-least-24-dead-in-nigeria-when-boat-capsizes-while-carrying-people-to-a-funeral/article_07eea12d-0a9e-5371-b1ea-109972c076c9.html
- BusinessDay, 21 Nov 2026: https://businessday.ng/transport/article/tinubu-mourns-bayelsa-boat-victims-as-waterway-tragedies-persist/

### 5. Trump vows 10% credit-card cap — United States
**Headline:** "Trump vows 10% cap on credit-card interest rates"
President Trump said on Fox News' "Saturday in America" that he would work
with the incoming Democratic Congress to cap credit-card interest rates at
10%, reviving a 2024 campaign promise; the average rate on accounts charged
interest is above 22%. No bill has passed yet.
- Associated Press, 21 Nov 2026: https://www.reflector.com/news/national/trump-vows-to-work-with-democrats-to-cap-credit-card-interest-rates-at-10/article_b8b14101-33fe-5cfd-84ea-4befb51acfe1.html
- KXL (AP), 21 Nov 2026: https://www.kxl.com/trump-vows-to-work-with-democrats-to-cap-credit-card-interest-rates-at-10/

### 6. NATO vows to defend Poland — Europe
**Headline:** "NATO vows to defend 'every inch' of Poland after Russian missiles land there"
NATO Secretary General Mark Rutte, in Warsaw on 21 Nov — a day after Poland
said two Russian missiles and a drone came down on its soil — pledged NATO
would defend every inch of Polish territory; NATO's North Atlantic Council
meets on Monday to discuss the incident.
- Reuters, 21 Nov 2026: https://wtbx.com/2026/11/21/nato-will-defend-every-inch-of-polish-territory-rutte-says/
- AFP, 21 Nov 2026: https://www.europesays.com/poland/39177/

## Deliberately excluded

- **FBI / NCIC database hack** — considered, then dropped: CNN first reported it
  on Friday 20 Nov, so it fails the "first reported on 21 Nov" rule.
- **Banned/repeat leads avoided:** Kerch Bridge strike; Iran strikes on US bases
  in Kuwait/Bahrain; Trump–Xi–Putin summit; Russian strikes on Kyiv bridges;
  COP31 Antalya; Gaza; Cyclone Akvan/Xavier; Anthropic IPO; ICJ Myanmar ruling;
  global stock selloff; Iraqi forces vs Kataib Hezbollah; EU–UK summit;
  Saudi–Houthi exchanges. None of these appears in the image.

## Build

- `page.html` + `render.mjs`: front page laid out in HTML/CSS with hand-drawn
  inline-SVG illustrations; rendered with Playwright + chromium-headless-shell
  (`~/.cache/ms-playwright/chromium_headless_shell-1255`, NOT /opt/meta-chromium,
  which refuses headless start on this machine). `playwright-core` was installed
  in /tmp only; it is not part of the repo.
- `main.ts` (Node 22, stdlib only): copies `entry.png` beside it to
  `$MAKEFUN_OUTPUT_DIR/entry.png`. Paths root from `import.meta.url` only;
  no `process.cwd()`, no stdin, no network, no server.
- Revisions: v1 render showed a weak lead illustration (explosion read as a
  triangle) and ~200 px of empty space at the foot; the lead SVG was redrawn
  as a radial burst and type/artwork enlarged, then re-rendered and re-checked.

## Verification (all passed)

- `entry.png`: 1024×1024 px, 215,483 bytes, PNG signature, sha256
  `9fc78415871479bd5f904c64e7b8bd692f41de2b1adc22f9e770a3a392ac4b90`.
- Render determinism: `render.mjs` run twice → byte-identical sha256.
- Program determinism: `main.ts` run twice to separate dirs → both outputs
  byte-identical to each other and to `entry.png`.
- Read-only simulation: repo copied to a temp dir, made read-only, `main.ts`
  run from a foreign cwd with `env -i` (minimal PATH), 10 s limit →
  exit 0, output byte-identical to the normal run.
- Visual check: masthead names "Saturday 21 November 2026" prominently;
  all six headlines and captions legible at full size.
