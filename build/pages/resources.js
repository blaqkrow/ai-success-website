'use strict';
const L = require('../layout.js');
const { icon, tick, arrow, pageHero, ctaBand, acc } = L;

const guides = `<section class="section">
    <div class="wrap">
      <div class="shead">
        <span class="badge">Guides</span>
        <h2>SME financing, explained without the jargon</h2>
        <p>Short, practical reading written by our credit team &mdash; the things we find ourselves explaining on the phone every week.</p>
        <div class="rule"></div>
      </div>
      <div class="grid g3">
        ${[
          ['calc', 'Flat rate vs effective interest rate', 'Why a 3% flat rate is not a 3% loan, how EIR is calculated, and the one comparison that actually tells you which offer is cheaper.', '8 min read'],
          ['scale', 'How much should an SME actually borrow?', 'A simple debt-service coverage test you can run on your own management accounts before you speak to any lender.', '6 min read'],
          ['form', 'The document pack that gets approved faster', 'What credit officers look for in six months of bank statements, and the three formatting mistakes that stall applications.', '5 min read'],
          ['globe', 'Government-assisted schemes for Singapore SMEs', 'An overview of Enterprise Financing Scheme categories, who qualifies, and where the pricing advantage really sits.', '9 min read'],
          ['invoice', 'Factoring vs invoice discounting', 'Disclosed or confidential, recourse or non-recourse &mdash; the four choices that determine your cost and your customer relationship.', '7 min read'],
          ['shield', 'What a personal guarantee actually commits you to', 'Plain-language coverage of joint and several liability, what lenders can and cannot pursue, and how to limit exposure.', '6 min read']
        ].map(([ic, t, p, r]) => `<article class="card reveal">
          <div class="icon-sq">${icon(ic)}</div>
          <span class="badge badge--gold">${r}</span>
          <h3>${t}</h3>
          <p>${p}</p>
          <p style="margin-top:12px;color:var(--blue-600);font-weight:800;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase">Read the guide &rarr;</p>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const tools = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>Tools</h2><p style="color:#b8cbe8">Model the numbers yourself before you talk to anyone.</p><div class="rule"></div></div>
      <div class="grid g3">
        ${[
          ['calc', 'Repayment Estimator', 'Enter an amount, tenure and rate to see the indicative monthly repayment and total interest.', '/contact#calculator', 'Open the estimator'],
          ['target', 'Eligibility Check', 'Five questions that tell you which of our four facilities you are most likely to qualify for.', '/contact', 'Check eligibility'],
          ['scale', 'Facility Comparison', 'Amounts, tenures and indicative rates for every product on one page.', '/loan-solutions#eligibility', 'Compare facilities']
        ].map(([ic, h, p, href, cta]) => `<a class="card card--dark reveal" href="${href}" style="display:block;color:inherit">
          <div class="icon-sq" style="background:rgba(43,134,245,.16);border-color:rgba(87,165,255,.36)">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
          <p style="margin-top:12px;color:#8ecbff;font-weight:800;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase">${cta} &rarr;</p>
        </a>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const glossary = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead"><span class="badge">Glossary</span><h2>Terms worth knowing before you sign</h2><div class="rule"></div></div>
      <div class="tablewrap reveal">
        <table>
          <thead><tr><th>Term</th><th>What it actually means</th></tr></thead>
          <tbody>
            <tr><td><strong>Flat rate</strong></td><td>Interest charged on the full original principal for the whole tenure, regardless of how much you have repaid. Always lower-looking than the effective rate.</td></tr>
            <tr><td><strong>Effective Interest Rate (EIR)</strong></td><td>The true annualised cost, accounting for the reducing balance. Use this, and only this, to compare offers.</td></tr>
            <tr><td><strong>Personal guarantee</strong></td><td>A director&rsquo;s personal promise to repay if the company cannot. Standard on unsecured SME facilities in Singapore.</td></tr>
            <tr><td><strong>Advance rate</strong></td><td>In invoice financing, the percentage of an invoice released to you up front &mdash; typically 80&ndash;90%.</td></tr>
            <tr><td><strong>Recourse</strong></td><td>Whether you must repay the advance if your customer does not pay. With recourse is the market default and is cheaper.</td></tr>
            <tr><td><strong>Debt service coverage ratio</strong></td><td>Operating cash flow divided by total debt repayments. Lenders generally want to see comfortably above 1.0.</td></tr>
            <tr><td><strong>Hire purchase</strong></td><td>Asset finance where you own the equipment outright once the final instalment is paid.</td></tr>
            <tr><td><strong>Conditions precedent</strong></td><td>The items a lender requires before releasing funds &mdash; signed guarantees, insurance, or a valuation report.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>`;

const faq = `<section class="section" id="faq">
    <div class="wrap">
      <div class="shead"><span class="badge">FAQ</span><h2>Frequently asked questions</h2><p>If your question is not here, call us on 6881 1234 &mdash; a person answers.</p><div class="rule"></div></div>
      <div class="narrow mx-auto">
        <h3 style="margin:32px 0 14px">Applying</h3>
        ${acc('How long does an application take?', '<p>The online form takes about five minutes. Once your documents are uploaded, an indicative decision usually follows within 24 hours on working days. Formal approval and drawdown typically complete within three to seven working days, depending on the facility size and any conditions the lender attaches.</p>')}
        ${acc('What documents do I need?', '<p>For most facilities: your ACRA business profile dated within six months, six months of operating bank statements, your latest financial or management accounts, and the director&rsquo;s NRIC plus two years of Notice of Assessment. Larger term loans and equipment financing may also need a supplier quotation, projections or a valuation report.</p>')}
        ${acc('Does checking eligibility affect my credit standing?', '<p>No. An eligibility check is an internal assessment and leaves no mark. A credit bureau search is only performed when you have seen an indicative offer and asked us to submit a formal application.</p>')}
        ${acc('Can I apply for more than one facility?', '<p>Yes, and it is often the better structure &mdash; for example equipment financing for an asset alongside a working capital line for the operating costs around it. We will assess total affordability across everything before recommending it.</p>')}

        <h3 style="margin:40px 0 14px">Eligibility</h3>
        ${acc('My company is only eight months old. Can I still apply?', '<p>Yes. Our baseline is six months of trading. Younger companies are typically offered a smaller starting limit, and a director with relevant industry experience or a signed forward order book strengthens the case considerably.</p>')}
        ${acc('My bank declined us. Does that rule us out?', '<p>Not at all &mdash; it is one of the most common reasons businesses come to us. A single bank applies a single credit policy. We place the case with the lender on our panel whose policy actually fits your profile, and we will explain what drove the original decline.</p>')}
        ${acc('Do you finance sole proprietorships?', '<p>Yes, subject to the same trading history and revenue criteria. Some lenders on our panel and certain government-assisted schemes are restricted to incorporated entities, which we will flag if it affects your options.</p>')}
        ${acc('Is foreign shareholding a problem?', '<p>For our commercial facilities, no. Certain Enterprise Singapore-backed schemes require at least 30% local shareholding, so foreign-owned companies may not access those specific programmes &mdash; but the rest of the panel remains open.</p>')}

        <h3 style="margin:40px 0 14px">Rates, fees and repayment</h3>
        ${acc('How are your rates set?', '<p>By your trading history, the facility type, the tenure, and any security offered. Advertised rates from 2.88% p.a. are starting points for well-qualified applicants. Your offer letter states the exact rate, the processing fee and the effective interest rate in full before you sign anything.</p>')}
        ${acc('What fees should I expect?', '<p>A one-time processing fee, disclosed in your offer letter, and where applicable a valuation or legal fee for secured facilities. There are no ongoing account fees, and we do not charge you separately for arranging the placement.</p>')}
        ${acc('Can I settle a loan early?', '<p>Yes. On most facilities there is no penalty after the sixth instalment and interest is rebated pro-rata for the unexpired term. Settlement inside the first six months attracts a small administrative fee, stated up front.</p>')}
        ${acc('What happens if I miss a payment?', '<p>Contact your advisor before the due date rather than after. Late payment triggers a fee and is reported to the credit bureau, but a restructured schedule agreed in advance avoids both. We have arranged repayment holidays and term extensions for clients who raised the issue early.</p>')}

        <h3 style="margin:40px 0 14px">About AI Success</h3>
        ${acc('Are you a lender or a broker?', '<p>We are a financing advisory. We arrange facilities with a panel of banks and regulated financial institutions rather than lending our own balance sheet. That is precisely why one application can be matched to the lender most likely to approve it.</p>')}
        ${acc('Do you charge me a fee for your service?', '<p>No. Our remuneration comes from the lender on successful completion, and we disclose it. You are never charged for an application that does not complete.</p>')}
        ${acc('Do you offer personal loans?', '<p>No. We arrange business financing for Singapore-registered entities only. We are not a licensed moneylender and do not offer consumer or payday lending of any kind.</p>')}
        ${acc('How is my information handled?', '<p>Documents are transmitted over an encrypted connection and shared only with the specific lenders you authorise for your case. We do not sell data, and we do not pass your details to parties outside an application you have approved.</p>')}
      </div>
    </div>
  </section>`;

module.exports = L.page({
  file: 'resources.html',
  active: 'resources',
  title: 'SME Financing Guides, Tools &amp; FAQ | AI Success Singapore',
  description: 'Practical guides, a repayment estimator, a plain-language glossary and answers to the questions Singapore SMEs ask most about business loans and financing.',
  body: [
    pageHero('Resources', 'Guides, tools and straight answers', 'Everything we would tell you on the phone, written down &mdash; so you can compare offers properly and walk into the conversation already knowing the numbers.'),
    guides, tools, glossary, faq,
    ctaBand('Still have a question?', 'Our advisors answer the phone between 9am and 6pm on weekdays, and reply to email within one working day.')
  ].join('\n')
});
