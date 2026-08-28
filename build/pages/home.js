'use strict';
const L = require('../layout.js');
const { SITE, icon, tick, arrow, phoneIcon, ctaBand, card, testimonial } = L;

const heroArt = `<div class="hero__art" aria-hidden="true">
      <svg viewBox="0 0 900 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stop-color="#0a2a63" stop-opacity=".95"/>
            <stop offset="1" stop-color="#0a2a63" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="arw" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stop-color="#0b4fc0"/><stop offset=".55" stop-color="#2b86f5"/><stop offset="1" stop-color="#8ecbff"/>
          </linearGradient>
          <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="9"/>
          </filter>
        </defs>
        <g fill="url(#sky)">
          <rect x="20" y="330" width="58" height="190"/><rect x="88" y="286" width="44" height="234"/>
          <rect x="142" y="360" width="66" height="160"/><rect x="218" y="250" width="52" height="270"/>
          <rect x="280" y="318" width="40" height="202"/><rect x="330" y="212" width="62" height="308"/>
          <rect x="402" y="300" width="48" height="220"/><rect x="460" y="266" width="70" height="254"/>
          <rect x="540" y="336" width="44" height="184"/><rect x="594" y="238" width="58" height="282"/>
          <rect x="662" y="308" width="50" height="212"/><rect x="722" y="278" width="66" height="242"/>
          <rect x="798" y="344" width="46" height="176"/><rect x="854" y="300" width="40" height="220"/>
        </g>
        <g fill="#8ecbff" opacity=".5">
          <rect x="232" y="268" width="6" height="8"/><rect x="248" y="290" width="6" height="8"/><rect x="344" y="232" width="6" height="8"/>
          <rect x="366" y="262" width="6" height="8"/><rect x="474" y="286" width="6" height="8"/><rect x="500" y="320" width="6" height="8"/>
          <rect x="608" y="258" width="6" height="8"/><rect x="630" y="300" width="6" height="8"/><rect x="738" y="298" width="6" height="8"/>
          <rect x="762" y="340" width="6" height="8"/><rect x="104" y="308" width="6" height="8"/><rect x="118" y="344" width="6" height="8"/>
        </g>
        <path d="M40 460 L190 402 L268 438 L372 318 L452 352 L560 232 L648 268 L800 96" stroke="url(#arw)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" filter="url(#soft)" opacity=".75"/>
        <path d="M40 460 L190 402 L268 438 L372 318 L452 352 L560 232 L648 268 L800 96" stroke="url(#arw)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M742 92 L812 84 L804 156" stroke="#a9d8ff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <g fill="#a9d8ff">
          <circle cx="190" cy="402" r="7"/><circle cx="372" cy="318" r="7"/><circle cx="560" cy="232" r="7"/><circle cx="648" cy="268" r="7"/>
        </g>
      </svg>
    </div>`;

const hero = `<section class="hero circuit">
    <div class="hero__glow" aria-hidden="true"></div>
    ${heroArt}
    <div class="wrap">
      <div class="hero__grid">
        <div>
          <span class="eyebrow">Smart SME loans for ambitious businesses</span>
          <h1>Fuel your business.<br>Achieve <span class="gold">success.</span></h1>
          <p class="hero__lede">Fast, flexible and hassle-free SME loans to help you seize opportunities and grow your business to the next level.</p>

          <div class="trio">
            <div class="trio__i">
              <div class="trio__ic">${icon('bolt')}</div>
              <div class="trio__t">Fast Approval</div>
              <div class="trio__s">In 24 hours</div>
            </div>
            <div class="trio__i">
              <div class="trio__ic">${icon('percent')}</div>
              <div class="trio__t">Competitive Rates</div>
              <div class="trio__s">From 2.88% p.a.</div>
            </div>
            <div class="trio__i">
              <div class="trio__ic">${icon('handshake')}</div>
              <div class="trio__t">Flexible Repayment</div>
              <div class="trio__s">Up to 60 months</div>
            </div>
          </div>

          <div class="hero__actions">
            <a class="btn btn--gold" href="/contact">Check Eligibility ${arrow}</a>
            <a class="btn btn--ghost" href="${SITE.phoneHref}">Talk to an Advisor ${phoneIcon}</a>
          </div>
        </div>

        <div class="offercard">
          <div class="offercard__label">Loan amounts up to</div>
          <div class="offercard__amt">$5 Million</div>
          <div class="offercard__sub">for your business needs</div>
          <hr>
          <ul class="ticklist">
            <li>${tick} Working Capital</li>
            <li>${tick} Business Expansion</li>
            <li>${tick} Equipment Financing</li>
            <li>${tick} Cash Flow Support</li>
            <li>${tick} Invoice Financing</li>
          </ul>
        </div>
      </div>
    </div>
  </section>`;

const why = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead">
        <h2>Why businesses choose<br><span class="brandmark">AI <em>Success</em></span></h2>
        <div class="rule"></div>
      </div>
      <div class="grid g5">
        ${card('stopwatch', 'Quick &amp; Easy Application', 'Simple process, minimal paperwork &mdash; most applications take under five minutes.')}
        ${card('medal', 'High Approval Rate', 'We say YES when banks say NO, because we read your business, not just a score.')}
        ${card('shield', 'No Hidden Fees', 'Transparent terms, no surprises. Every cost is on the table before you sign.')}
        ${card('headset', 'Dedicated Support', 'Expert advisors who understand your industry and stay with you after drawdown.')}
        ${card('chartup', 'Built For Your Growth', 'Facilities that scale with your business as revenue and ambition increase.')}
      </div>
    </div>
  </section>`;

const products = `<section class="section">
    <div class="wrap">
      <div class="shead">
        <span class="badge">Loan Solutions</span>
        <h2>Financing shaped around your next move</h2>
        <p>Four core facilities, one application. Our advisors match you to the structure that fits your cash-flow cycle &mdash; not the other way round.</p>
        <div class="rule"></div>
      </div>
      <div class="grid g4">
        ${[
          ['cash', 'Working Capital Loan', 'Up to S$500,000', 'Smooth out payroll, rent and supplier payments through seasonal dips.', '/working-capital-loan'],
          ['building', 'Business Term Loan', 'Up to S$5 million', 'A lump sum with fixed monthly repayments for expansion and big moves.', '/business-term-loan'],
          ['invoice', 'Invoice Financing', 'Up to 90% of invoice', 'Turn 60 to 120-day payment terms into cash within 48 hours.', '/invoice-financing'],
          ['gear', 'Equipment Financing', 'Up to 100% of asset', 'Acquire machinery, vehicles and fit-outs without draining reserves.', '/equipment-financing']
        ].map(([ic, t, amt, d, href]) => `<a class="card reveal" href="${href}" style="display:block;color:inherit">
          <div class="icon-sq">${icon(ic)}</div>
          <span class="badge badge--gold">${amt}</span>
          <h3>${t}</h3>
          <p>${d}</p>
          <p style="margin-top:14px;color:var(--blue-600);font-weight:800;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase">Learn more &rarr;</p>
        </a>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const how = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>How it works</h2><div class="rule"></div></div>
      <div class="steps">
        ${[
          ['form', 'Apply Online', 'Fill in a simple form in less than 5 minutes.'],
          ['clock', 'Get Quick Approval', 'Receive an indicative offer within 24 hours.'],
          ['docsign', 'Sign &amp; Disbursement', 'E-sign and receive funds fast.'],
          ['rocket', 'Grow Your Business', 'Focus on what matters most &mdash; growing your business!']
        ].map(([ic, t, d], i) => `<div class="step reveal">
          <div class="step__ring"><span class="step__num">${i + 1}</span>${icon(ic)}</div>
          <h4>${t}</h4>
          <p>${d}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const results = `<section class="section section--blue circuit" style="padding-top:0">
    <div class="wrap">
      <div class="grid g-results">
        <div class="reveal">
          <h2 style="font-size:clamp(1.7rem,3vw,2.4rem);margin-bottom:20px">Real businesses.<br><span style="color:var(--gold)">Real results.</span></h2>
          <div class="quote">
            <p>AI Success helped us secure the funds we needed to expand our operations. The process was fast, easy and hassle-free.</p>
            <div class="byline">
              <span class="avatar">SL</span>
              <span><strong>Sarah Lim</strong><span>Founder, The Green Pantry</span></span>
            </div>
          </div>
        </div>

        <div class="stats reveal">
          <div class="stat">
            ${icon('users')}
            <div class="stat__n"><span data-count="10000" data-suffix="+">10,000+</span></div>
            <div class="stat__l">Businesses Financed</div>
          </div>
          <div class="stat">
            ${icon('dollar')}
            <div class="stat__n"><span data-count="1" data-prefix="$" data-suffix="B+">$1B+</span></div>
            <div class="stat__l">Loans Disbursed</div>
          </div>
          <div class="stat">
            ${icon('thumb')}
            <div class="stat__n"><span data-count="98" data-suffix="%">98%</span></div>
            <div class="stat__l">Customer Satisfaction</div>
          </div>
        </div>

        <div class="ctapanel reveal">
          <h3>Ready to take your business further?</h3>
          <p>Get the right financing solution tailored to your needs.</p>
          <a class="btn btn--gold" href="/contact">Apply Now ${arrow}</a>
          <a class="btn btn--outline" href="${SITE.phoneHref}">${phoneIcon} Call us: ${SITE.phone}</a>
        </div>
      </div>
    </div>
  </section>`;

const industries = `<section class="section section--tight">
    <div class="wrap">
      <p class="center" style="font-size:.82rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--blue-600);margin-bottom:26px">Trusted by SMEs across various industries</p>
      <div class="industries">
        ${[
          ['utensils', 'F&amp;B', 'Solutions'], ['chip', 'Tech', 'Innovations'], ['leaf', 'Green', 'Solutions'],
          ['building', 'Build', 'Right'], ['truck', 'Logis', 'Express'], ['bag', 'Retail', 'Hub']
        ].map(([ic, a, b]) => `<div class="ind">${icon(ic)}<span><b>${a}</b><span>${b}</span></span></div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const voices = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead">
        <span class="badge">Success Stories</span>
        <h2>What Singapore SMEs say</h2>
        <div class="rule"></div>
      </div>
      <div class="grid g3">
        ${testimonial('We were quoted six weeks by our bank. AI Success had an indicative offer on the table the next morning and funds in the account inside a week.', 'RT', 'Raymond Tan', 'Managing Director, Precision Metalworks')}
        ${testimonial('Invoice financing changed how we bid for jobs. We stopped turning away contracts just because payment terms were 90 days.', 'NK', 'Nurul Kamal', 'Director, Skyline Interiors')}
        ${testimonial('The advisor actually understood our seasonality and structured repayments around it. That is not something a portal can do.', 'JW', 'Jason Wong', 'Owner, Harbour Cafe Group')}
      </div>
      <p class="center" style="margin-top:34px"><a class="btn btn--outline" href="/success-stories">Read the full stories ${arrow}</a></p>
    </div>
  </section>`;

module.exports = L.page({
  file: 'index.html',
  active: 'home',
  title: 'AI Success Pte. Ltd. | Smart SME Loans in Singapore — Fast Approval, Real Growth',
  description: 'Fast, flexible SME loans in Singapore. Working capital, term loans, invoice and equipment financing up to S$5 million. Approval in 24 hours, rates from 2.88% p.a.',
  jsonld: {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: SITE.name,
    slogan: SITE.tagline,
    url: SITE.url,
    telephone: '+65 6881 1234',
    email: SITE.email,
    areaServed: 'SG',
    address: { '@type': 'PostalAddress', streetAddress: '1 Raffles Place, #20-61 One Raffles Place', addressLocality: 'Singapore', postalCode: '048616', addressCountry: 'SG' }
  },
  body: [hero, why, products, how, results, industries, voices, ctaBand()].join('\n')
});
