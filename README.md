# AI Success Pte. Ltd. — Website

Marketing site for **AI Success Pte. Ltd.**, a Singapore SME financing specialist.
*Smart Loans. Real Growth. — Success together.*

Static HTML/CSS/JS, no framework, no build dependencies beyond Node itself.

## The 10 pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, why-choose-us, product overview, how it works, results, testimonials |
| `/loan-solutions` | Overview, comparison table and eligibility criteria |
| `/working-capital-loan` | Product page — unsecured short-term facility |
| `/business-term-loan` | Product page — up to S$5m over 60 months |
| `/invoice-financing` | Product page — receivables finance |
| `/equipment-financing` | Product page — hire purchase and leasing |
| `/why-us` | Positioning, numbers, process and team |
| `/success-stories` | Four case studies plus testimonials |
| `/resources` | Guides, tools, glossary and the full FAQ (`/resources#faq`) |
| `/contact` | Application form and repayment estimator (`/contact#calculator`) |

## Working on it

Pages are **generated**, not hand-edited. Every `.html` file in the root is build output.

```
build/layout.js          shell, header, footer, nav, icon set, reusable blocks
build/pages/*.js         one module per page (products share product.js + products-data.js)
build.js                 writes the HTML, favicon.svg, sitemap.xml and robots.txt
assets/css/styles.css    the whole design system
assets/js/main.js        nav, accordions, scroll reveal, counters, forms, estimator
```

```bash
npm run build     # regenerate all 10 pages
npm run dev       # build, then serve on http://localhost:8080
```

Edit the module under `build/`, run the build, and commit both the source and the
generated HTML — Vercel serves the committed HTML directly with no build step.

## Design

Taken from the supplied brand mark and homepage mockup (`assets/img/`).

- Navy `#04102b` → `#0f3a86`, electric blue `#1263e0`, gold `#ffc20e`
- Barlow Condensed for display headings, Inter for body
- All iconography is inline SVG; no icon font, no image requests
- Responsive from 320px up; respects `prefers-reduced-motion`

## Deployment

Vercel, static. `vercel.json` sets `cleanUrls` (so `/contact` serves `contact.html`),
long-lived caching for `/assets/*` and baseline security headers.

## Content note

Copy, statistics, rates, case studies and contact details are **placeholders written to
match the mockup**. Replace them with approved figures — and have the compliance wording
reviewed — before this goes in front of real customers.
