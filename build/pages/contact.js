'use strict';
const L = require('../layout.js');
const { SITE, icon, tick, arrow, phoneIcon, pageHero, ctaBand } = L;

const form = `<section class="section">
    <div class="wrap">
      <div class="grid g-form">
        <div class="reveal">
          <form class="form" data-form novalidate>
            <span class="badge">Apply in 5 minutes</span>
            <h2 style="font-size:clamp(1.6rem,2.8vw,2.1rem)">Start your application</h2>
            <p>No documents needed yet. We will confirm what is required once we know which facility fits.</p>

            <div class="field--row">
              <div class="field">
                <label for="f-name">Full name</label>
                <input id="f-name" name="name" type="text" autocomplete="name" placeholder="e.g. Sarah Lim" required>
              </div>
              <div class="field">
                <label for="f-company">Company name</label>
                <input id="f-company" name="company" type="text" autocomplete="organization" placeholder="e.g. The Green Pantry Pte Ltd" required>
              </div>
            </div>

            <div class="field--row">
              <div class="field">
                <label for="f-email">Business email</label>
                <input id="f-email" name="email" type="email" autocomplete="email" placeholder="you@company.com.sg" required>
              </div>
              <div class="field">
                <label for="f-phone">Mobile number</label>
                <input id="f-phone" name="phone" type="tel" autocomplete="tel" placeholder="e.g. 9123 4567" required>
              </div>
            </div>

            <div class="field--row">
              <div class="field">
                <label for="f-uen">UEN <span style="color:var(--muted);font-weight:500;text-transform:none;letter-spacing:0">(optional)</span></label>
                <input id="f-uen" name="uen" type="text" placeholder="e.g. 202412345K">
              </div>
              <div class="field">
                <label for="f-trading">Years trading</label>
                <select id="f-trading" name="trading" required>
                  <option value="">Select&hellip;</option>
                  <option>Less than 6 months</option>
                  <option>6 &ndash; 12 months</option>
                  <option>1 &ndash; 3 years</option>
                  <option>3 &ndash; 5 years</option>
                  <option>More than 5 years</option>
                </select>
              </div>
            </div>

            <div class="field--row">
              <div class="field">
                <label for="f-facility">Facility of interest</label>
                <select id="f-facility" name="facility" required>
                  <option value="">Select&hellip;</option>
                  <option>Working Capital Loan</option>
                  <option>Business Term Loan</option>
                  <option>Invoice Financing</option>
                  <option>Equipment Financing</option>
                  <option>Not sure &mdash; please advise</option>
                </select>
              </div>
              <div class="field">
                <label for="f-amount">Amount required</label>
                <select id="f-amount" name="amount" required>
                  <option value="">Select&hellip;</option>
                  <option>Under S$100,000</option>
                  <option>S$100,000 &ndash; S$300,000</option>
                  <option>S$300,000 &ndash; S$500,000</option>
                  <option>S$500,000 &ndash; S$1 million</option>
                  <option>Above S$1 million</option>
                </select>
              </div>
            </div>

            <div class="field">
              <label for="f-msg">What is the funding for?</label>
              <textarea id="f-msg" name="message" placeholder="A sentence or two is plenty &mdash; e.g. fitting out a second outlet opening in November."></textarea>
            </div>

            <button class="btn btn--gold btn--wide" type="submit">Submit application ${arrow}</button>
            <p class="formnote">By submitting you agree to be contacted about your enquiry. We never sell your data, and an enquiry does not affect your credit standing.</p>
            <div class="formmsg" role="status">Thank you &mdash; your enquiry has been received. An advisor will call you within one working day. For anything urgent, call ${SITE.phone}.</div>
          </form>
        </div>

        <div class="reveal stack">
          <div class="ctile">
            ${icon('phone')}
            <div><h4>Call us</h4><p><a href="${SITE.phoneHref}">${SITE.phone}</a><br>${SITE.hours}</p></div>
          </div>
          <div class="ctile">
            ${icon('chat')}
            <div><h4>WhatsApp</h4><p><a href="${SITE.whatsappHref}" rel="noopener">${SITE.whatsapp}</a><br>Fastest for quick questions.</p></div>
          </div>
          <div class="ctile">
            ${icon('mail')}
            <div><h4>Email</h4><p><a href="mailto:${SITE.email}">${SITE.email}</a><br>Replies within one working day.</p></div>
          </div>
          <div class="ctile">
            ${icon('pin')}
            <div><h4>Office</h4><p>${SITE.address}<br>By appointment.</p></div>
          </div>
          <div class="card card--flat">
            <h3>What happens next</h3>
            <ul class="checklist" style="margin-top:16px">
              <li>${tick}<span><strong>Within 1 working day</strong>An advisor calls to confirm your requirement.</span></li>
              <li>${tick}<span><strong>Within 24 hours of documents</strong>An indicative offer with the full cost breakdown.</span></li>
              <li>${tick}<span><strong>3&ndash;7 working days</strong>Formal approval, e-signing and drawdown.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const calculator = `<section class="section section--surface" id="calculator">
    <div class="wrap">
      <div class="shead">
        <span class="badge">Tool</span>
        <h2>Repayment estimator</h2>
        <p>Move the numbers around to see what a facility would cost each month. Calculated on a flat-rate basis, as SME term loans are commonly quoted in Singapore.</p>
        <div class="rule"></div>
      </div>
      <div class="grid g-calc" id="calc">
        <div class="form reveal">
          <div class="field">
            <label for="calc-amount">Loan amount (S$)</label>
            <input id="calc-amount" type="number" min="10000" max="5000000" step="10000" value="150000">
          </div>
          <div class="field">
            <label for="calc-months">Tenure (months)</label>
            <select id="calc-months">
              <option value="6">6 months</option>
              <option value="12" selected>12 months</option>
              <option value="18">18 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
              <option value="48">48 months</option>
              <option value="60">60 months</option>
            </select>
          </div>
          <div class="field" style="margin-bottom:0">
            <label for="calc-rate">Indicative flat rate (% p.a.)</label>
            <input id="calc-rate" type="number" min="1" max="20" step="0.01" value="2.88">
          </div>
        </div>
        <div class="card card--flat reveal" style="display:flex;flex-direction:column;justify-content:center;text-align:center;background:linear-gradient(160deg,var(--navy-800),var(--navy-700));border-color:rgba(87,165,255,.35)">
          <div style="font-size:.76rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#bcd8ff">Estimated monthly repayment</div>
          <div id="calc-monthly" style="font-family:var(--display);font-size:clamp(2.6rem,5vw,3.6rem);font-weight:800;color:var(--gold);line-height:1;margin:10px 0 24px">S$12,860</div>
          <div class="grid g2" style="gap:14px">
            <div style="padding:16px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(139,175,231,.2)">
              <div style="font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:#a3bee0;font-weight:700">Total interest</div>
              <div id="calc-interest" style="font-family:var(--display);font-size:1.5rem;font-weight:800;color:#fff;margin-top:4px">S$4,320</div>
            </div>
            <div style="padding:16px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(139,175,231,.2)">
              <div style="font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:#a3bee0;font-weight:700">Total repayable</div>
              <div id="calc-total" style="font-family:var(--display);font-size:1.5rem;font-weight:800;color:#fff;margin-top:4px">S$154,320</div>
            </div>
          </div>
          <p style="font-size:.78rem;color:#8fb0dd;margin:20px 0 0">Indicative only and not an offer of credit. Your actual rate depends on credit assessment and is confirmed in writing.</p>
        </div>
      </div>
    </div>
  </section>`;

const reassure = `<section class="section section--tight">
    <div class="wrap">
      <div class="grid g3">
        ${[
          ['lock', 'Encrypted and private', 'Your documents are transmitted securely and shared only with lenders you authorise.'],
          ['eye', 'No obligation', 'An indicative offer is exactly that. Walk away at any point before signing, at no cost.'],
          ['headset', 'A named advisor', 'One person owns your case from first call through to renewal.']
        ].map(([ic, h, p]) => `<div class="card card--flat card--center reveal">
          <div class="icon-circle">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

module.exports = L.page({
  file: 'contact.html',
  active: 'contact',
  title: 'Apply Now &amp; Contact Us | AI Success Pte. Ltd. Singapore',
  description: 'Apply for an SME loan in five minutes or speak to a Singapore-based advisor on 8857 8585. Includes a free repayment estimator for business loans up to S$5 million.',
  jsonld: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact AI Success Pte. Ltd.',
    url: SITE.url + '/contact'
  },
  body: [
    pageHero('Contact', 'Let&rsquo;s get you funded', 'Apply online in five minutes, or call and speak to an advisor directly. Either way, you will know where you stand within one working day.'),
    form, calculator, reassure,
    ctaBand('Prefer to talk it through first?', 'Call ' + SITE.phone + ' between 9am and 6pm on weekdays. No script, no queue &mdash; an advisor picks up.')
  ].join('\n')
});
