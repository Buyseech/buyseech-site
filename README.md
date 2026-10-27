# Buyseech.com

One-page static site. No build step: Cloudflare serves these files as they are.

## Files

- `index.html`: the whole page (sections: hero, proof strip, who we help, services, speaking, 2018 win, Unscripted SEO, review form)
- `styles.css`: all styling. The accent colour is `--accent` at the top.
- `site.js`: review form handling
- `assets/`: images and self-hosted fonts (no Google Fonts requests)
- `404.html`, `robots.txt`, `sitemap.xml`, `_headers`: standard site files for Cloudflare

## Still to do before pointing buyseech.com at it

- **Review form:** connect a form service and put its URL in `data-endpoint` on the `<form>` in `index.html`. Until then, the form opens the visitor's email app.
- **Stage photos and conference logos** for the three speaking cards (cards are text-only for now)
- **City and country** for SEO Mastery Summit
- **Podcast link and LinkedIn link** (both left out for now)
- **Privacy notice**, since the site collects name, email and website through the form
- **Social sharing image** (1200 x 630); the profile photo is used until then
