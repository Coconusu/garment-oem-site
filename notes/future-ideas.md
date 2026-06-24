# Future Ideas / Backlog

Things known but deliberately deferred. Not commitments — just don't lose track of them.

## SEO — migrate i18n to URL-based routing
Current i18n (added 2026-06-24) is client-side: one HTML per page, JS swaps text via `data-i18n` + `locales/en.json` / `locales/vi.json`. This is fast to ship but each page has only one crawlable URL/language pair, so it won't give Google separate indexed pages per language.

When ready to invest in SEO:
- Reuse `locales/en.json` / `locales/vi.json` as the source of truth — don't re-translate from scratch.
- Either (a) generate static `/en/*.html` + `/vi/*.html` from the same JSON at build time, or (b) move to a framework with native i18n routing (Next.js, Astro) using the JSON as translation dictionaries.
- Add `<link rel="alternate" hreflang="en">` / `hreflang="vi"` tags once real per-language URLs exist.

## i18n coverage gaps (v1)
A few elements with mixed inline markup (bold label + sentence in the same line, e.g. the "Plant 1: ..." bullet items, some footer address lines) were left English-only in the first pass to keep scope manageable. They render fine, just don't toggle yet. Revisit if full VI coverage matters before the SEO migration above.

## Content / accuracy
- Real equipment specifics (machine counts, line counts, plant square footage) aren't published on garcohabac.com — Products and About pages currently say "available on request" instead of inventing numbers. Fill in if/when real figures are provided.
- Real certifications beyond the US Customs/ITS security cert (e.g. if WRAP/BSCI/ISO are actually held) — confirm before adding back to the Certifications page.
- Consider swapping Unsplash stock photography for real factory photos once available.

## Contact / RFQ form
- `contact.html` RFQ form still posts to a placeholder Formspree endpoint (`REPLACE_WITH_YOUR_FORM_ID`). Needs a real form backend (Formspree, Netlify Forms, or a CRM webhook) before the form is actually usable.
