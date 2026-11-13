# Buyseech.com

One-page static site. No build step: Cloudflare serves the files in `public/` as they are.

## Where things are

- `public/index.html`: the whole page (hero, numbers, who we help, how we work, "judged on results" band, speaking, 2018 win, Unscripted SEO, review form)
- `public/styles.css`: all styling. The accent colour is `--accent` at the top.
- `public/site.js`: scroll-in animation for sections (`.reveal`) and review form handling
- `public/assets/`: images and self-hosted fonts (Manrope body text, Anton headlines, Barlow Condensed labels; no Google Fonts requests)
- `public/404.html`, `robots.txt`, `sitemap.xml`, `_headers`: standard site files
- `wrangler.jsonc`: tells Cloudflare to publish the `public/` folder

## Cloudflare settings

- Build command: none
- Output directory: `public`

## Still to do before pointing buyseech.com at it

- **Review form:** connect a form service and put its URL in `data-endpoint` on the `<form>` in `public/index.html`. Until then, the form opens the visitor's email app.
- **Recent results section:** waiting for results screenshots and captions
- **Podcast link and LinkedIn link** (both left out for now)
- **Privacy notice**, since the site collects name, email and website through the form
- **Social sharing image** (1200 x 630); the profile photo is used until then

## Versions

- **Version 1.0** is saved on the `version-1.0` branch (the site as of 2026-11-13, before the redesign). To go back to it, restore `public/` from that branch onto `main` and push.
- **Version 2.0** is on `main`: brighter contrast, new middle section from the LinkedIn bio, gentle scroll-in animation.
- 2026-11-13: logo strip under the hero removed at Igor's request (it is in version 2.0's history if wanted back).
