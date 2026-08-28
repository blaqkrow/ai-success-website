'use strict';
const L = require('../layout.js');
const { icon, tick, arrow, pageHero, ctaBand } = L;

const stance = `<section class="section">
    <div class="wrap">
      <div class="featrow">
        <div class="reveal">
          <span class="badge">Our stance</span>
          <h2 style="font-size:clamp(1.8rem,3.2vw,2.6rem)">We say yes when banks say no &mdash; and we tell you why</h2>
          <p class="lead">A credit score is a summary of the past. It does not know that your largest customer just renewed for three years, that last year&rsquo;s dip was a one-off relocation, or that your margins improved the moment you brought fabrication in-house.</p>
          <p>Our advisors read the business behind the numbers. Where the story is sound, we build the case and take it to the lender on our panel most likely to understand it. Where it is not, we say so directly and tell you what would need to change &mdash; rather than running you through an application that was never going to succeed.</p>
          <p style="margin-bottom:0"><strong style="color:var(--ink)">Success together</strong> is not a slogan on the logo. Our advisors are not paid on volume, so nobody here has a reason to sell you a facility larger than the one you need.</p>
        </div>
        <div class="reveal">
          <div class="card card--flat">
            <h3>What that looks like in practice</h3>
            <ul class="checklist" style="margin-top:18px">
              <li>${tick}<span><strong>One application, a panel of lenders</strong>We place it with the institution most likely to approve, instead of you applying five times and marking your credit file each time.</span></li>
              <li>${tick}<span><strong>An honest no, quickly</strong>If it will not fly, you hear it on day one with the reasons, not after three weeks of silence.</span></li>
              <li>${tick}<span><strong>The full cost, before you commit</strong>Rate, fees, and the effective annual cost written out in plain figures.</span></li>
              <li>${tick}<span><strong>The same advisor throughout</strong>From first call to renewal, you deal with one named person.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const pillars = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead"><h2>Five reasons SMEs stay with us</h2><div class="rule"></div></div>
      <div class="grid g5">
        ${[
          ['stopwatch', 'Quick &amp; Easy Application', 'A five-minute form and a secure upload link. No branch visits, no printed forms, no chasing.'],
          ['medal', 'High Approval Rate', 'Because we place each case with the right lender first time, our approval rate runs well above a single-bank application.'],
          ['shield', 'No Hidden Fees', 'One disclosed processing fee. No arrangement surprises, no undisclosed insurance bundling.'],
          ['headset', 'Dedicated Support', 'Advisors with sector experience in F&amp;B, construction, logistics, manufacturing and professional services.'],
          ['chartup', 'Built For Your Growth', 'Limits are reviewed as you grow. Most clients in good standing qualify for more at better pricing within a year.']
        ].map(([ic, h, p]) => `<div class="card card--center reveal">
          <div class="icon-circle">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const numbers = `<section class="section section--blue circuit">
    <div class="wrap">
      <div class="shead"><h2>The numbers behind the promise</h2><div class="rule"></div></div>
      <div class="stats stats--4 reveal">
        ${[
          ['users', '10000', '+', '', 'Businesses Financed'],
          ['dollar', '1', 'B+', '$', 'Loans Disbursed'],
          ['thumb', '98', '%', '', 'Customer Satisfaction'],
          ['clock', '24', 'h', '', 'Median Time to Decision']
        ].map(([ic, n, suf, pre, l], i) => `<div class="stat" style="${i === 3 ? 'border-right:0' : ''}">
          ${icon(ic)}
          <div class="stat__n"><span data-count="${n}" data-prefix="${pre}" data-suffix="${suf}">${pre}${n}${suf}</span></div>
          <div class="stat__l">${l}</div>
        </div>`).join('\n        ')}
      </div>
      <p class="center" style="margin-top:18px;font-size:.82rem;color:#8fb0dd">Figures are cumulative across facilities arranged since inception and are reviewed quarterly.</p>
    </div>
  </section>`;

const process = `<section class="section">
    <div class="wrap">
      <div class="shead"><h2>How we work with you</h2><p>Four conversations, not four weeks of forms.</p><div class="rule"></div></div>
      <div class="grid g4">
        ${[
          ['Understand', 'A short call about what the money is for, when you need it, and what the business looks like today.'],
          ['Structure', 'We model the realistic options side by side &mdash; including the one where you borrow less than you asked for.'],
          ['Place', 'We take the case to the lender on our panel best matched to your profile, and manage the credit questions.'],
          ['Support', 'After drawdown we stay in touch: annual reviews, refinancing checks, and a limit increase when you have earned it.']
        ].map(([t, p], i) => `<div class="card reveal">
          <div style="font-family:var(--display);font-size:2.5rem;font-weight:800;color:var(--blue-100);line-height:1">0${i + 1}</div>
          <h3 style="margin-top:6px">${t}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const team = `<section class="section section--surface">
    <div class="wrap">
      <div class="shead"><span class="badge">Our people</span><h2>Advisors, not order-takers</h2><p>Our team has sat on both sides of the table &mdash; in bank credit departments and in the finance seats of SMEs.</p><div class="rule"></div></div>
      <div class="grid g4">
        ${[
          ['MT', 'Marcus Tan', 'Managing Director', 'Eighteen years in SME and commercial credit across two regional banks before founding AI Success.'],
          ['PC', 'Priya Chandran', 'Head of Credit', 'Former corporate credit analyst; leads structuring for facilities above S$1 million.'],
          ['DL', 'Daniel Lee', 'Senior Advisor, Trade &amp; Receivables', 'Specialises in invoice financing for construction and wholesale ledgers.'],
          ['AH', 'Aisyah Hassan', 'Client Success Lead', 'Manages post-drawdown relationships, annual reviews and limit increases.']
        ].map(([ini, n, r, b]) => `<div class="card card--center reveal">
          <span class="avatar" style="width:74px;height:74px;font-size:1.5rem;margin:0 auto 16px">${ini}</span>
          <h3 style="margin-bottom:2px">${n}</h3>
          <p style="font-size:.78rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--blue-600);margin-bottom:10px">${r}</p>
          <p style="font-size:.93rem">${b}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

const compliance = `<section class="section section--tight">
    <div class="wrap">
      <div class="grid g3">
        ${[
          ['lock', 'Your data stays yours', 'Documents are transmitted over an encrypted connection and shared only with the specific lenders you authorise, case by case.'],
          ['scale', 'Regulated partners only', 'We arrange financing with banks and financial institutions regulated in Singapore. We are not a licensed moneylender and do not offer personal loans.'],
          ['eye', 'No fee to you for a placement', 'Our remuneration comes from the lender on completion, and we disclose it. You are never charged for an application that does not complete.']
        ].map(([ic, h, p]) => `<div class="card card--flat reveal">
          <div class="icon-sq">${icon(ic)}</div>
          <h3>${h}</h3>
          <p>${p}</p>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>`;

module.exports = L.page({
  file: 'why-us.html',
  active: 'why',
  title: 'Why AI Success | SME Financing Advisors in Singapore',
  description: 'Why Singapore SMEs choose AI Success: one application across a panel of lenders, transparent pricing, sector-experienced advisors and a median decision time of 24 hours.',
  body: [
    pageHero('Why Us', 'Success together, taken literally', 'We are a Singapore SME financing specialist. Our job is to get you funded on terms that still make sense in year three &mdash; and to tell you plainly when borrowing is the wrong answer.'),
    stance, pillars, numbers, process, team, compliance,
    ctaBand('Talk to an advisor who reads the business, not just the score', 'A fifteen-minute call is usually enough to tell you whether you are fundable, on what terms, and what would improve them.')
  ].join('\n')
});
