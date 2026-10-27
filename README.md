# Buyseech.com

One-page static site. No build step: Cloudflare serves the files in `public/` as they are.

## Where things are

- `public/index.html`: the whole page (hero, proof strip, who we help, services, speaking, 2018 win, Unscripted SEO, review form)
- `public/styles.css`: all styling. The accent colour is `--accent` at the top.
- `public/site.js`: review form handling
- `public/assets/`: images and self-hosted fonts (no Google Fonts requests)
- `public/404.html`, `robots.txt`, `sitemap.xml`, `_headers`: standard site files
- `wrangler.jsonc`: tells Cloudflare to publish the `public/` folder

## Cloudflare settings

- Build command: none
- Output directory: `public`

## Still to do before pointing buyseech.com at it

- **Review form:** connect a form service and put its URL in `data-endpoint` on the `<form>` in `public/index.html`. Until then, the form opens the visitor's email app.
- **Stage photos and conference logos** for the three speaking cards (cards are text-only for now)
- **City and country** for SEO Mastery Summit
- **Podcast link and LinkedIn link** (both left out for now)
- **Privacy notice**, since the site collects name, email and website through the form
- **Social sharing image** (1200 x 630); the profile photo is used until then
