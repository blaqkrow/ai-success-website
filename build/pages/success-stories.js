'use strict';
const L = require('../layout.js');
const { icon, arrow, pageHero, ctaBand, testimonial } = L;

const CASES = [
  {
    ind: 'F&amp;B', ic: 'utensils', name: 'The Green Pantry',
    head: 'From one shophouse cafe to four outlets in 20 months',
    challenge: 'A profitable single-outlet cafe had signed a lease on a second unit, but the landlord wanted twelve months of rent up front and the fit-out quotation landed 30% above budget. Their bank asked for two years of audited accounts they did not yet have.',
    solution: 'We split the requirement: a S$180,000 working capital loan covering the rent deposit and early payroll, and separate equipment financing for the kitchen build so the fit-out did not consume the unsecured limit.',
    result: 'The second outlet opened seven weeks later. Two further outlets followed, each funded on improved terms as the trading record built.',
    figures: [['S$180k', 'Working capital'], ['S$220k', 'Equipment finance'], ['7 weeks', 'To opening'], ['4', 'Outlets today']],
    quote: 'AI Success helped us secure the funds we needed to expand our operations. The process was fast, easy and hassle-free.',
    who: 'Sarah Lim', role: 'Founder, The Green Pantry', ini: 'SL'
  },
  {
    ind: 'Manufacturing', ic: 'gear', name: 'Precision Metalworks',
    head: 'A S$800,000 machining centre financed without touching reserves',
    challenge: 'A long-standing precision components supplier won a three-year automotive contract that required capacity they did not have. Buying the machining centre outright would have consumed almost their entire cash reserve just as headcount needed to rise.',
    solution: 'Equipment financing at 100% of asset cost over 60 months, structured so the monthly repayment sat comfortably below the additional monthly contribution the contract generated, plus a modest working capital line for the associated hiring.',
    result: 'Capacity came online before the contract start date, reserves stayed intact, and the facility is being repaid out of the revenue it created.',
    figures: [['S$800k', 'Asset financed'], ['S$0', 'Deposit'], ['60 months', 'Tenure'], ['24 hours', 'To indicative offer']],
    quote: 'We were quoted six weeks by our bank. AI Success had an indicative offer on the table the next morning and funds in the account inside a week.',
    who: 'Raymond Tan', role: 'Managing Director, Precision Metalworks', ini: 'RT'
  },
  {
    ind: 'Construction', ic: 'building', name: 'Skyline Interiors',
    head: 'Bidding for bigger jobs once 90-day terms stopped being a barrier',
    challenge: 'A commercial fit-out contractor was turning down tenders from main contractors purely because payment terms of 90 to 120 days meant they could not fund materials and subcontractors across concurrent projects.',
    solution: 'A revolving invoice financing facility against certified progress claims, advancing 85% within 48 hours of submission, with limits set per debtor rather than a single overall cap.',
    result: 'They now run three concurrent projects instead of one, and have stopped declining tenders on payment terms alone.',
    figures: [['85%', 'Advance rate'], ['48 hours', 'To funding'], ['3x', 'Concurrent projects'], ['S$1.4m', 'Ledger financed']],
    quote: 'Invoice financing changed how we bid for jobs. We stopped turning away contracts just because payment terms were 90 days.',
    who: 'Nurul Kamal', role: 'Director, Skyline Interiors', ini: 'NK'
  },
  {
    ind: 'Logistics', ic: 'truck', name: 'Northgate Logistics',
    head: 'Four scattered facilities consolidated into one repayment',
    challenge: 'Rapid growth had left the company with four short-term facilities taken at different times, at different rates, with repayment dates spread across the month. Total monthly outgoings had quietly become unmanageable.',
    solution: 'A single S$1.2 million business term loan over 48 months refinancing all four facilities, arranged through a bank on our panel at a materially lower blended rate.',
    result: 'Monthly debt servicing fell by roughly a third with no new net borrowing, and the finance team went from four reconciliations a month to one.',
    figures: [['S$1.2m', 'Consolidated'], ['4 &rarr; 1', 'Facilities'], ['48 months', 'Tenure'], ['~33%', 'Lower monthly outgoing']],
    quote: 'Nobody had ever offered to just add up what we were actually paying. Seeing it on one page made the decision obvious.',
    who: 'Terence Goh', role: 'Finance Director, Northgate Logistics', ini: 'TG'
  }
];

const caseBlock = (c, i) => `<section class="section${i % 2 === 1 ? ' section--surface' : ''}">
    <div class="wrap">
      <div class="featrow" style="align-items:start">
        <div class="reveal">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <span class="icon-sq" style="margin:0;width:46px;height:46px;border-radius:12px">${icon(c.ic)}</span>
            <span class="badge" style="margin:0">${c.ind}</span>
          </div>
          <h2 style="font-size:clamp(1.6rem,2.8vw,2.2rem)">${c.head}</h2>
          <p style="font-size:.78rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--blue-600);margin-bottom:4px">The challenge</p>
          <p>${c.challenge}</p>
          <p style="font-size:.78rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--blue-600);margin-bottom:4px">What we arranged</p>
          <p>${c.solution}</p>
          <p style="font-size:.78rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--blue-600);margin-bottom:4px">The outcome</p>
          <p style="margin-bottom:0">${c.result}</p>
        </div>
        <div class="reveal stack">
          <div class="grid g2" style="gap:14px">
            ${c.figures.map(([n, l]) => `<div class="card card--center card--flat" style="padding:22px 14px">
              <div style="font-family:var(--display);font-size:1.7rem;font-weight:800;color:var(--navy-700);line-height:1">${n}</div>
              <div style="font-size:.72rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--muted);margin-top:6px">${l}</div>
            </div>`).join('\n            ')}
          </div>
          <div class="tcard">
            <div class="stars" aria-label="5 out of 5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <blockquote>${c.quote}</blockquote>
            <div class="byline"><span class="avatar">${c.ini}</span><span><strong>${c.who}</strong><span>${c.role}</span></span></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const stats = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>Real businesses. <span style="color:var(--gold)">Real results.</span></h2><div class="rule"></div></div>
      <div class="stats stats--4 reveal">
        ${[['users', '10000', '+', '', 'Businesses Financed'], ['dollar', '1', 'B+', '$', 'Loans Disbursed'], ['thumb', '98', '%', '', 'Customer Satisfaction'], ['chartup', '72', '%', '', 'Return for a Second Facility']]
          .map(([ic, n, suf, pre, l], i) => `<div class="stat" style="${i === 3 ? 'border-right:0' : ''}">
          ${icon(ic)}
          <div class="stat__n"><span data-count="${n}" data-prefix="${pre}" data-suffix="${suf}">${pre}${n}${suf}</span></div>
          <div class="stat__l">${l}</div>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const more = `<section class="section">
    <div class="wrap">
      <div class="shead"><h2>In their own words</h2><div class="rule"></div></div>
      <div class="grid g3">
        ${testimonial('The advisor actually understood our seasonality and structured repayments around it. That is not something a portal can do.', 'JW', 'Jason Wong', 'Owner, Harbour Cafe Group')}
        ${testimonial('They told us to borrow S$120,000, not the S$200,000 we asked for, and explained exactly why. That is the moment they earned the relationship.', 'AL', 'Angeline Loh', 'Director, Bright Lane Education')}
        ${testimonial('Two banks declined us on the age of the company. AI Success placed it with a financier who looked at our order book instead.', 'MI', 'Mohd Iskandar', 'Founder, Iskandar Marine Services')}
        ${testimonial('Documents uploaded on Tuesday, offer on Wednesday, funds on Friday. I keep waiting for the catch and there has not been one.', 'CY', 'Cheryl Yeo', 'Managing Partner, Yeo &amp; Associates')}
        ${testimonial('The annual review found us a cheaper facility we were not even asking about. It cut a four-figure sum off our monthly cost.', 'HS', 'Harish Segar', 'CFO, Metroline Distribution')}
        ${testimonial('What I value most is the straight answer. When one of our applications was not going to work, they said so on the first call.', 'LK', 'Lena Koh', 'Director, Studio Nine Design')}
      </div>
    </div>
  </section>`;

module.exports = L.page({
  file: 'success-stories.html',
  active: 'stories',
  title: 'SME Success Stories | AI Success Pte. Ltd. Singapore',
  description: 'Case studies of Singapore SMEs funded by AI Success across F&B, manufacturing, construction and logistics — the challenge, the facility arranged, and the outcome.',
  body: [
    pageHero('Success Stories', 'The businesses behind the numbers', 'Four Singapore SMEs, four very different problems, and the facilities that solved them. Client names are used with permission; figures are as at drawdown.'),
    stats,
    ...CASES.map(caseBlock),
    more,
    ctaBand('Your story could be next', 'Tell us what you are trying to build. We will tell you what is fundable today and what would make it fundable tomorrow.')
  ].join('\n')
});
