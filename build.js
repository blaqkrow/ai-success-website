#!/usr/bin/env node
'use strict';
/* Builds the static AI Success site into the repository root. */
const fs = require('fs');
const path = require('path');

/* Output to the repo root by default; set OUT_DIR=dist for a clean deploy bundle. */
const root = process.env.OUT_DIR ? path.join(__dirname, process.env.OUT_DIR) : __dirname;
fs.mkdirSync(root, { recursive: true });
const product = require('./build/pages/product.js');
const productsData = require('./build/pages/products-data.js');
const { SITE } = require('./build/layout.js');

const pages = [
  ['index.html', require('./build/pages/home.js')],
  ['loan-solutions.html', require('./build/pages/loan-solutions.js')],
  ...productsData.map((d) => [d.file, product(d)]),
  ['why-us.html', require('./build/pages/why-us.js')],
  ['success-stories.html', require('./build/pages/success-stories.js')],
  ['resources.html', require('./build/pages/resources.js')],
  ['contact.html', require('./build/pages/contact.js')]
];

pages.forEach(([file, html]) => {
  fs.writeFileSync(path.join(root, file), html);
  console.log('  built', file, '(' + Math.round(html.length / 1024) + ' KB)');
});

/* Favicon — the "Ai" mark on a navy tile */
fs.writeFileSync(path.join(root, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<rect width="64" height="64" rx="13" fill="#04102b"/>
<linearGradient id="a" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#2b86f5"/><stop offset="1" stop-color="#8ecbff"/></linearGradient>
<path d="M23 50h-9L26 14h8l12 36h-9l-2.2-7H25.2L23 50Zm4-14h6.2L30.2 25.6h-.2L27 36Z" fill="url(#a)"/>
<circle cx="48" cy="17" r="5" fill="#ffc20e"/>
</svg>
`);
console.log('  built favicon.svg');

/* Sitemap + robots */
const routes = pages.map(([f]) => (f === 'index.html' ? '/' : '/' + f.replace(/\.html$/, '')));
fs.writeFileSync(path.join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes.map((r) => `  <url><loc>${SITE.url}${r}</loc><changefreq>monthly</changefreq><priority>${r === '/' ? '1.0' : '0.8'}</priority></url>`).join('\n') +
  `\n</urlset>\n`);
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log('  built sitemap.xml, robots.txt');

/* When building into a separate directory, bring the static assets along. */
if (process.env.OUT_DIR) {
  fs.cpSync(path.join(__dirname, 'assets'), path.join(root, 'assets'), { recursive: true });
  console.log('  copied assets/');
}
console.log('\nDone — ' + pages.length + ' pages.');
