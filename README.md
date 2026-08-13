# Doodle Cricket and Other Google Games

Browser-based cricket game and collection of Google Doodle–style games,
published as a static site on GitHub Pages at
[https://doodlecricket.github.io](https://doodlecricket.github.io).

> "Powered by Advanced AI Algorithms" is the site's own tagline for the Doodle
> Cricket game; the game is a client-side canvas game with no server-side AI
> component in this repository.

## Status

Active. Latest commits include gameplay page fixes (2026-07), newer games
(solitaire, bubble tea, basketball), occasional page removals, and recurring
`ads.txt` / ad-script updates. Default branch is `master`; the repository has
289 commits since 2017.

## What's in the repo

- **Doodle Cricket** — the main game (root `index.html` + `assets/`)
- **Game pages** — `2048`, `2048-baseball`, `2048-cricket`, `2048-cupcakes`,
  `champion-island`, `doodle-baseball`, `doodle-basketball`,
  `doodle-bubble-tea`, `doodle-football`, `doodle-garden-gnomes`,
  `doodle-halloween`, `doodle-jump`, `doodle-snake`, `doodle-soccer`,
  `doodle-solitaire`, `pacman-doodle`
- **Hub / index pages** — `index.html`, `google-doodle-games.html`,
  `cricket-games.html`, `sport-games.html`
- **PWA files** — `manifest.json`, `sw.js` (Workbox service worker),
  `workbox-37fde244.js`, `icons/`
- **Ad / analytics** — `ads.txt`, `loaders.js` (ad-script injection helpers)
- **Search verification** — `google2c8ab00ee95707ba.html`, Yandex and ahrefs
  verification meta tags in `index.html`

## Stack

- Static HTML/CSS/JS. No backend, no database, no server-side runtime.
- Hub site (`index.html`): Vue 3 + Vite build (see `assets/index-XL1bGH6b.js`
  and hashed `MainLayout`/`IndexPage`/`PrivacyPage` chunks), with Alpine.js and
  Tailwind loaded from CDN.
- Doodle Cricket game: custom canvas game; engine is minified/bundled
  (Unknown — not identifiable from committed artifacts).
- Other doodles: plain JS; `doodle-jump` uses Phaser; `champion-island` is a
  GWT-compiled bundle (`.nocache.json`); 2048 variants are vanilla JS/CSS.
- PWA: Workbox-based service worker precaching all assets with navigation
  fallback to `index.html`.
- Analytics: Plausible (`stats.senty.com.au`, domain `doodlecricket.github.io`)
  and legacy Google Analytics (UA-105728110-1 — Universal Analytics, deprecated
  by Google).
- Monetization: `ads.txt` plus third-party ad scripts injected into pages
  (e.g. `cutleryneighbouringpurpose.com`, `360playvid.info`).

## Prerequisites

- A modern web browser. Nothing else is required to play.
- For local preview: any static file server (e.g. `python3 -m http.server`).

## Setup

```sh
git clone git@github.com:doodlecricket/doodlecricket.github.io.git
cd doodlecricket.github.io
python3 -m http.server 8000   # or: npx serve .
# open http://localhost:8000
```

No install step is required. `doodle-jump/package.json` only lists `prettier`
as a dev convenience and is not part of the runtime.

## Environment variables

None detected. The site is fully static; there are no `.env` files or runtime
configuration.

## Dev / build / test

- No root `package.json`, no build scripts, no CI workflows (`.github/`), and
  no test suite exist in the repository.
- The hashed `assets/*.js` bundles are Vite build outputs, but the build
  tooling/source for them is **not committed** (TODO: document or restore).
- `sw.js` contains a generated Workbox precache manifest (per-file revision
  hashes). It must be regenerated/updated whenever files are added or changed,
  otherwise stale files are served by the service worker (TODO: tooling).
- Manual validation: load the site, play a game, and confirm the service
  worker registers and precaches.

## Architecture

```
index.html  ──►  /assets/index-XL1bGH6b.js  (Vue/Vite hub app)
   │                ├── MainLayout / IndexPage / PrivacyPage chunks
   │                └── CSS + fonts + game assets (atlas, audio)
   ├── /<game>.html        standalone game pages
   ├── /<game>/            per-game assets (js, css, icons, media)
   ├── sw.js               Workbox precache + navigation fallback to index.html
   ├── manifest.json       PWA manifest (display: fullscreen, portrait)
   └── loaders.js          helper to inject ad scripts/divs at runtime
```

Game pages are independent HTML entry points; the service worker precaches the
whole site so it works offline/standalone after first load.

## Deployment

GitHub Pages site served from the `master` branch (repo
`doodlecricket/doodlecricket.github.io`). Deployment = push to `master`; no
Actions workflow files are present in the repository.

```sh
git push origin master
```

## Maintenance notes

- **Service worker**: keep `sw.js` precache revisions in sync with file
  changes or users will see stale content.
- **Ads**: `ads.txt` is updated frequently; ad script hosts are swapped via
  repo-wide replacements — verify all HTML pages after such changes.
- **Analytics**: Plausible is self-hosted at `stats.senty.com.au`; the legacy
  GA tag can be removed if no longer needed.
- **Third-party CDNs**: `index.html` loads Alpine.js and Tailwind from CDNs —
  builds will need network access and may break if the CDNs change.
- **Copyright**: doodles in this repo (notably `champion-island/`) are Google
  LLC / STUDIO4°C properties; see `champion-island/README.md`. Respect their
  ownership when reusing assets.

## License & credits

- MIT License — Copyright (c) 2024 Doodle Cricket. See [LICENSE](LICENSE).
- Google Doodle games and assets belong to their respective owners
  (Google LLC, STUDIO4°C).
- Twitter/X: [@doodlecricket](https://twitter.com/doodlecricket)
