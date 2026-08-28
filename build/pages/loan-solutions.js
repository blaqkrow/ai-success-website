'use strict';
const L = require('../layout.js');
const { icon, tick, arrow, pageHero, ctaBand, featCard } = L;

const intro = `<section class="section">
    <div class="wrap">
      <div class="shead">
        <span class="badge">Four Facilities. One Application.</span>
        <h2>Match the facility to the need</h2>
        <p>Most SMEs do not need &ldquo;a loan&rdquo; &mdash; they need the right structure. A working capital line and a five-year term loan solve very different problems, and using the wrong one is expensive. Here is how they compare.</p>
        <div class="rule"></div>
      </div>

      <div class="grid g2">
        ${[
          ['cash', 'Working Capital Loan', 'Up to S$500,000 &middot; 6&ndash;24 months', 'Best when the gap is timing, not profitability: payroll before a big receivable lands, a bulk stock purchase ahead of peak season, or a supplier demanding shorter terms.', '/working-capital-loan'],
          ['building', 'Business Term Loan', 'Up to S$5,000,000 &middot; 12&ndash;60 months', 'Best for a defined investment with a payback period: a second outlet, an acquisition, a fit-out, or consolidating scattered short-term debt into one predictable repayment.', '/business-term-loan'],
          ['invoice', 'Invoice Financing', 'Up to 90% of invoice value', 'Best when your customers are creditworthy but slow. Advance against approved invoices instead of borrowing against your balance sheet.', '/invoice-financing'],
          ['gear', 'Equipment Financing', 'Up to 100% of asset cost', 'Best when the asset itself generates the return. The equipment secures the facility, so pricing is typically sharper than an unsecured loan.', '/equipment-financing']
        ].map(([ic, t, amt, d, href]) => `<div class="card reveal">
          <div class="icon-sq">${icon(ic)}</div>
          <span class="badge badge--gold">${amt}</span>
          <h3>${t}</h3>
          <p>${d}</p>
          <a class="btn btn--outline btn--sm" href="${href}" style="margin-top:8px">View details ${arrow}</a>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const compare = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead"><h2>Compare at a glance</h2><div class="rule"></div></div>
      <div class="tablewrap reveal">
        <table>
          <thead>
            <tr><th>Facility</th><th>Amount</th><th>Tenure</th><th>Indicative rate</th><th>Typical use</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Working Capital Loan</strong></td><td>S$50k &ndash; S$500k</td><td>6 &ndash; 24 months</td><td>From 2.88% p.a.</td><td>Cash-flow gaps, stock, payroll</td></tr>
            <tr><td><strong>Business Term Loan</strong></td><td>S$100k &ndash; S$5m</td><td>12 &ndash; 60 months</td><td>From 3.20% p.a.</td><td>Expansion, acquisition, refinancing</td></tr>
            <tr><td><strong>Invoice Financing</strong></td><td>Up to 90% of invoice</td><td>30 &ndash; 120 days</td><td>From 0.7% / month</td><td>Long customer payment terms</td></tr>
            <tr><td><strong>Equipment Financing</strong></td><td>Up to 100% of asset</td><td>12 &ndash; 84 months</td><td>From 2.98% p.a.</td><td>Machinery, vehicles, fit-out</td></tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:.82rem;color:var(--muted);margin-top:14px">Rates shown are indicative starting points for well-qualified applicants and vary with credit profile, tenure and security. Your final offer letter will state all rates and fees in full.</p>
    </div>
  </section>`;

const eligibility = `<section class="section" id="eligibility">
    <div class="wrap">
      <div class="featrow">
        <div class="reveal">
          <span class="badge">Eligibility</span>
          <h2 style="font-size:clamp(1.8rem,3.2vw,2.6rem)">Do you qualify?</h2>
          <p class="lead">Our baseline criteria are deliberately broad. If you fall just outside one of them, it is still worth a conversation &mdash; roughly a third of the businesses we fund did.</p>
          <ul class="checklist" style="margin-top:24px">
            <li>${tick}<span><strong>Registered in Singapore</strong>Company, LLP or sole proprietorship with a valid UEN.</span></li>
            <li>${tick}<span><strong>At least 6 months of trading</strong>Younger businesses can still apply with a guarantor or contracts in hand.</span></li>
            <li>${tick}<span><strong>Annual revenue from S$120,000</strong>Or a demonstrable forward order book.</span></li>
            <li>${tick}<span><strong>30% local shareholding</strong>Required for certain government-assisted schemes only.</span></li>
            <li>${tick}<span><strong>Director aged 21 and above</strong>Personal guarantee is typical for unsecured facilities.</span></li>
          </ul>
        </div>
        <div class="reveal">
          <div class="card card--flat">
            <h3>What you will need to submit</h3>
            <p>Everything is uploaded through a secure portal &mdash; no printing, no branch visit.</p>
            <ul class="checklist" style="margin-top:18px">
              <li>${tick}<span><strong>ACRA business profile</strong>Dated within the last 6 months.</span></li>
              <li>${tick}<span><strong>6 months of bank statements</strong>Operating accounts, PDF direct from your bank.</span></li>
              <li>${tick}<span><strong>Latest financial statements</strong>Or management accounts if unaudited.</span></li>
              <li>${tick}<span><strong>Director&rsquo;s NRIC and Notice of Assessment</strong>Two most recent years.</span></li>
            </ul>
            <a class="btn btn--blue btn--wide" href="/contact" style="margin-top:8px">Start your application ${arrow}</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const support = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>Beyond the loan</h2><p style="color:#b8cbe8">Financing is one decision inside a bigger plan. Our advisors help you get the rest right too.</p><div class="rule"></div></div>
      <div class="grid g3">
        ${[
          ['scale', 'Structure Review', 'We model two or three structures side by side so you can see the true cost of each before committing.'],
          ['globe', 'Government Schemes', 'Where you qualify, we route the application through Enterprise Singapore-backed programmes for better pricing.'],
          ['target', 'Refinancing Health Checks', 'A free annual review of your existing facilities &mdash; many clients cut monthly outgoings without borrowing more.']
        ].map(([ic, h, p]) => `<div class="card card--dark reveal">
          <div class="icon-sq" style="background:rgba(43,134,245,.16);border-color:rgba(87,165,255,.36)">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

module.exports = L.page({
  file: 'loan-solutions.html',
  active: 'loans',
  title: 'SME Loan Solutions in Singapore | AI Success Pte. Ltd.',
  description: 'Compare working capital loans, business term loans, invoice financing and equipment financing for Singapore SMEs. Amounts up to S$5 million with approval in 24 hours.',
  body: [
    pageHero('Loan Solutions', 'Loan solutions built around how you actually trade', 'From a short-term cash-flow bridge to a five-year expansion facility &mdash; compare every option, see the real numbers, and apply once.'),
    intro, compare, eligibility, support, ctaBand('Not sure which facility fits?', 'Tell us what the money is for and we will come back with a recommendation, a rate, and the honest trade-offs of each option.')
  ].join('\n')
});
