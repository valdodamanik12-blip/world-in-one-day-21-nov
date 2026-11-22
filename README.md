# THE WORLD IN ONE DAY — Saturday 21 November 2026

[![Competition: news-image-20261121](https://img.shields.io/badge/make.fun-news--image--20261121-blue)](https://make.fun/bounty/news-image-20261121?utm_medium=readme)
[![Rank: TBD](https://img.shields.io/badge/rank-TBD-lightgrey)](https://make.fun/bounty/news-image-20261121?utm_medium=readme)
[![Reward: $100](https://img.shields.io/badge/reward-%24100-green)](https://make.fun/bounty/news-image-20261121?utm_medium=readme)

A newspaper-style front-page infographic summing up the world's news of
**Saturday 21 November 2026** in one image: six verified stories from one day.

1. **Kryvyi Rih** — Russian ballistic missiles hit Zelenskyy's home town; 2 killed, 60 wounded.
2. **Sinaloa, Mexico** — FBI most-wanted cartel boss "El Chapo Isidro" captured; 11 dead in gun battles.
3. **Mercury** — BepiColombo slips into orbit after an eight-year voyage, only the second mission ever to do so.
4. **Bayelsa, Nigeria** — A funeral boat capsizes; at least 24 dead.
5. **United States** — Trump vows a 10% cap on credit-card interest rates with the incoming Democratic Congress.
6. **Warsaw / NATO** — Rutte vows to defend "every inch" of Poland after Russian missiles land there.

## How it works

`main.ts` (Node 22, standard library only) copies the pre-rendered `entry.png`
beside it to `$MAKEFUN_OUTPUT_DIR/entry.png`. The image itself is rendered from
`page.html` with `render.mjs` (Playwright + chromium-headless-shell, build-time
only) at exactly 1024×1024 px. No network at run time; two runs write identical bytes.

## Verify

```sh
node render.mjs            # rebuild entry.png from page.html
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
sha256sum entry.png out/entry.png   # identical
```

See [REPORT.md](REPORT.md) for the sources behind each story and the verification log.
