/* Crēdo Legal — Nextdoor content calendar data.
 *
 * One entry per post. Fields:
 *   date      YYYY-MM-DD (publish date, or planned date for scheduled posts)
 *   time      HH:MM Eastern Time slot (scheduled posts). Slots rotate 09:00 → 17:00 → 21:00 one per
 *             consecutive day (3-day cycle), so over every 21 days each weekday gets each slot once.
 *             New posts continue the cycle: slot = ['17:00','21:00','09:00'][(date − 2026-09-17) mod 3].
 *   status    published | scheduled
 *   src       hub | bold | new | live   (live = published directly on Nextdoor, not from a draft)
 *   type      ad  (advertising → NY disclaimer appended) | edu (educational/community → none)
 *   disc      add-ons for type=ad: 'dram' (Image is a dramatization.), 'prior' (Prior results…)
 *   url       Nextdoor permalink            https://nextdoor.com/p/<id>/           (published only)
 *   insights  Nextdoor post-insights page   https://nextdoor.com/post_insights/<id>/ (published only)
 *   metrics   {views, reactions, comments, asOf}  read from the insights + post pages
 *   postedAt  ISO timestamp the automated task actually published it (published by the task only)
 *
 * REFRESH RULE — whenever a new post is published on Nextdoor:
 *   1. add its entry here with status:'published', url + insights (same <id> in both),
 *   2. then refresh metrics for EVERY published entry by opening each `insights` URL
 *      directly (Views "N total") and each `url` (reactions, comments) — no clicking
 *      through the page feed — and set metrics.asOf to today.
 */
window.CREDO_ND_POSTS = [
 /* ---------------- published ---------------- */
 {date:'2026-08-31', status:'published', src:'hub', type:'edu', cluster:'Scam alert', img:'assets/post-scam.jpg', imgNote:'Hub image (16:9)',
  url:'https://nextdoor.com/p/cgn7LR8D69_n/', insights:'https://nextdoor.com/post_insights/cgn7LR8D69_n/',
  metrics:{views:373, reactions:0, comments:0, asOf:'2026-09-22'},
  text:'Getting calls about a debt, and something feels off? A few signs it may be a scam rather than a real collector:\n- they push you to pay right now with gift cards, crypto, or a wire\n- they will not give you a company name and mailing address\n- they threaten arrest\n\nA legitimate collector has to send written notice, and if you ask, prove the debt is actually yours.\n\nWhen something feels wrong, do not pay on the spot. Ask for it in writing, then check it.\n\nHas anyone had any strange collection calls?',
  disc:[], why:'Scam warning with no pitch, offer or link → not advertising, no disclaimer (published as-is).'},

 {date:'2026-09-03', status:'published', src:'live', type:'edu', cluster:'Community reply · Clara', img:'', imgNote:'No image — a share of a neighbor\'s post',
  url:'https://nextdoor.com/p/-YYtr5_rF9B4/', insights:'https://nextdoor.com/post_insights/-YYtr5_rF9B4/',
  metrics:{views:91, reactions:0, comments:0, asOf:'2026-09-22'},
  text:'We\'re a bunch who love helping people out when they are in a spot. It\'s our job, but it\'s also our calling.\nClara sounds like a great person to work with. The cats and dogs would know!\n\n[shares Clara Locklear Fuller\'s 31 Aug post looking for work]',
  disc:[], why:'Community reply, no pitch or link → not advertising, no disclaimer.'},

 {date:'2026-09-03', status:'published', src:'hub', type:'ad', cluster:'Medical', img:'assets/post-medical.jpg', imgNote:'Hub image (16:9)',
  url:'https://nextdoor.com/p/nCDWD665h8NP/', insights:'https://nextdoor.com/post_insights/nCDWD665h8NP/',
  metrics:{views:8, reactions:0, comments:0, asOf:'2026-09-22'},
  lp:'https://start.credolegal.com/medical-debt-bills-errors',
  short:{nextdoor:{url:'https://credolegal.s.gy/nd-medical', dest:'https://start.credolegal.com/medical-debt-bills-errors?utm_source=nextdoor&utm_medium=social&utm_campaign=credo_nd_organic_v1&utm_content=2026-09-03-medical&utm_term=medical', id:'link_8on3_034QvotZS1kF19GC8cmRXv', term:'medical', clicks:0, asOf:null}},
  text:'A surprise medical bill is worth a second look before you pay it. Medical billing is full of coding errors, duplicate charges, and amounts a collector cannot always validate. You can ask them to prove the amount first. Free review: credolegal.s.gy/nd-medical',
  disc:['dram'], why:'Free review + landing-page link → advertising. Disclaimer added 17 Sep with the Nextdoor number.'},

 {date:'2026-09-17', time:'17:00', status:'published', src:'hub', type:'ad', cluster:'Rights education', img:'assets/post-rights.jpg', imgNote:'Hub image (16:9)',
  url:'https://nextdoor.com/p/HPMtgQZQcgNS/', insights:'https://nextdoor.com/post_insights/HPMtgQZQcgNS/', postedAt:'2026-09-17T15:37:50.116Z',
  metrics:{views:13, reactions:0, comments:0, asOf:'2026-09-22'},
  lp:'https://start.credolegal.com',
  short:{nextdoor:{url:'https://credolegal.s.gy/nd-rights', dest:'https://start.credolegal.com/?utm_source=nextdoor&utm_medium=social&utm_campaign=credo_nd_organic_v1&utm_content=2026-09-17-rights-education&utm_term=validation', id:'link_8on3_034QvotZS1s1bGGXOM1P9g', term:'validation', clicks:0, asOf:null}},
  text:'Three things debt collectors hope you do not know: (1) you can make them validate the debt in writing before you pay; (2) debt buyers often cannot prove they even own it; (3) balances are frequently inflated, so you may owe far less than they claim. Knowing this changes how you respond. A free review can show you where you really stand: credolegal.s.gy/nd-rights',
  disc:['dram','prior'], why:'Offers a free review and links to the landing page → advertising. "Far less than they claim" suggests a result → Prior results line.'},

 {date:'2026-09-18', time:'21:00', status:'published', src:'bold', type:'ad', cluster:'Stop the calls', img:'assets/bold/stop-1x1.jpeg', imgNote:'Bold creative · "Make the debt collector calls stop?" (1:1)',
  url:'https://nextdoor.com/p/xdWtCx-7mrD7/', insights:'https://nextdoor.com/post_insights/xdWtCx-7mrD7/', postedAt:'2026-09-19T06:39:40.978Z',
  metrics:{views:89, reactions:0, comments:0, asOf:'2026-09-22'},
  lp:'https://start.credolegal.com/debt-harassment-stop-calls',
  short:{nextdoor:{url:'https://credolegal.s.gy/nd-stop-calls', dest:'https://start.credolegal.com/debt-harassment-stop-calls?utm_source=nextdoor&utm_medium=social&utm_campaign=credo_nd_organic_v1&utm_content=2026-09-18-stop-the-calls&utm_term=harassment', id:'link_8on3_034QvCdZaxyMLD9JW5mqQO', term:'harassment', clicks:0, asOf:null}},
  text:'Want the debt collector calls to stop? You can tell a collector in writing to stop contacting you, and under the FDCPA they have to. Calls before 8am, after 9pm, or at your job after you have asked them not to can each be a violation. Our attorneys send the letter and deal with the collector so you do not have to. Free review of your calls: credolegal.s.gy/nd-stop-calls',
  disc:['dram'], why:'Free review + landing-page link → advertising. Staged hand image → dramatization. No outcome claim → no Prior results line.'},

 {date:'2026-09-19', time:'09:00', status:'published', src:'hub', type:'ad', cluster:'Debt validation', img:'assets/post-validation.jpg', imgNote:'Hub image (16:9)',
  url:'https://nextdoor.com/p/y8RyPYgRbdYy/', insights:'https://nextdoor.com/post_insights/y8RyPYgRbdYy/', postedAt:'2026-09-21T06:54:31.991Z',
  metrics:{views:9, reactions:0, comments:0, asOf:'2026-09-22'},
  lp:'https://start.credolegal.com/debt-harassment-stop-calls',
  short:{nextdoor:{url:'https://credolegal.s.gy/nd-validation', dest:'https://start.credolegal.com/debt-harassment-stop-calls?utm_source=nextdoor&utm_medium=social&utm_campaign=credo_nd_organic_v1&utm_content=2026-09-19-debt-validation&utm_term=validation', id:'link_8on3_034QvCdZayL6PFp65ofFSq', term:'validation', clicks:0, asOf:null}},
  text:'Not sure a debt a collector is chasing is even yours? You have the right to make them validate it in writing before you pay a cent, and many collectors, especially debt buyers, cannot produce the paperwork to back it up. Here is how debt validation works: credolegal.s.gy/nd-validation',
  disc:['dram'], why:'Links to a landing page → advertising. Explains a right rather than promising a result → no Prior results line.'},

 {date:'2026-09-20', time:'17:00', status:'published', src:'bold', type:'ad', cluster:'Brand · not alone', img:'assets/bold/heart-1x1.jpeg', imgNote:'Bold creative · "Don\'t face your debt collectors alone" (1:1)',
  url:'https://nextdoor.com/p/dg56q7WfWtN-/', insights:'https://nextdoor.com/post_insights/dg56q7WfWtN-/', postedAt:'2026-09-21T07:10:49.253Z',
  metrics:{views:10, reactions:0, comments:0, asOf:'2026-09-22'},
  lp:'https://start.credolegal.com',
  short:{nextdoor:{url:'https://credolegal.s.gy/nd-not-alone', dest:'https://start.credolegal.com/?utm_source=nextdoor&utm_medium=social&utm_campaign=credo_nd_organic_v1&utm_content=2026-09-20-brand-not-alone&utm_term=brand', id:'link_8on3_034QvCdZayPJ7cFSfjOUei', term:'brand', clicks:0, asOf:null}},
  text:'Dealing with debt collectors is stressful enough without doing it alone. Credo is a debt-defense law firm: real attorneys, a flat monthly fee, and one job, which is making collectors prove what they claim and handling them so you do not have to. If you are getting calls or letters about a debt, start with a free review: credolegal.s.gy/nd-not-alone',
  disc:['dram'], why:'Describes the service and offers a free review → advertising. Staged image → dramatization.'},

 /* ---------------- scheduled ---------------- */
 {date:'2026-09-21', time:'21:00', status:'published', src:'hub', type:'ad', cluster:'Credit card', img:'assets/post-credit.jpg', imgNote:'Hub image (16:9)',
  url:'https://nextdoor.com/p/XG5dc6BpP8rY/', insights:'https://nextdoor.com/post_insights/XG5dc6BpP8rY/', postedAt:'2026-09-22T07:22:29.863Z',
  metrics:{views:0, reactions:0, comments:0, asOf:'2026-09-22'},
  lp:'https://start.credolegal.com/credit-card-debt-negotiation',
  short:{nextdoor:{url:'https://credolegal.s.gy/nd-credit-card', dest:'https://start.credolegal.com/credit-card-debt-negotiation?utm_source=nextdoor&utm_medium=social&utm_campaign=credo_nd_organic_v1&utm_content=2026-09-21-credit-card&utm_term=credit-card', id:'link_8on3_034QvCdZayTxR2XRQO1uTh', term:'credit-card', clicks:0, asOf:null}},
  text:'Being pressured over an old credit card balance? Debt buyers often cannot produce the original contract or full account history to prove they even own the account, and balances get inflated with added interest and fees. You can make them validate it, and in many cases settle for less. Free review: credolegal.s.gy/nd-credit-card',
  disc:['dram','prior'], why:'Free review + link → advertising. "Settle for less" suggests a result → Prior results line.'},

 {date:'2026-09-22', time:'09:00', status:'scheduled', src:'hub', type:'edu', cluster:'Community', img:'assets/post-money.jpg', imgNote:'Hub image (16:9)',
  text:'Money has been on a lot of neighbors\' minds lately, between rising costs and bills that never seem to slow down. If you are feeling the squeeze, you are far from alone, and there is no shame in it. Talking about it openly is how we all figure out what actually helps. What has made the biggest difference for your household this year?',
  disc:[], why:'Conversation starter with no pitch, offer or link → not advertising, no disclaimer.'},

 {date:'2026-09-23', time:'17:00', status:'scheduled', src:'bold', type:'ad', cluster:'Inflated balance', img:'assets/bold/pinch-1x1.jpeg', imgNote:'Bold creative · "Your debt may be less than they say" (1:1)',
  lp:'https://start.credolegal.com/credit-card-debt-negotiation',
  short:{nextdoor:{url:'https://credolegal.s.gy/nd-inflated-balance', dest:'https://start.credolegal.com/credit-card-debt-negotiation?utm_source=nextdoor&utm_medium=social&utm_campaign=credo_nd_organic_v1&utm_content=2026-09-23-inflated-balance&utm_term=credit-card', id:'link_8on3_034QvCdZayWlSG1jw3vSpX', term:'credit-card', clicks:0, asOf:null}},
  text:'Your debt may be less than they say. Interest, fees and collection charges get added along the way, and the number on the letter is not always the number you actually owe. You can ask the collector to show exactly how they got to it. We check the balance for free: credolegal.s.gy/nd-inflated-balance',
  disc:['dram','prior'], why:'Free check + link → advertising. "Less than they say" suggests a result → Prior results line.'},

 {date:'2026-09-24', time:'21:00', status:'scheduled', src:'bold', type:'ad', cluster:'Collector breaking the law', img:'assets/bold/pointing-1x1.jpeg', imgNote:'Bold creative · "Your debt collector may be breaking the law" (1:1)',
  lp:'https://start.credolegal.com/debt-harassment-fdcpa-attorney',
  short:{nextdoor:{url:'https://credolegal.s.gy/nd-fdcpa', dest:'https://start.credolegal.com/debt-harassment-fdcpa-attorney?utm_source=nextdoor&utm_medium=social&utm_campaign=credo_nd_organic_v1&utm_content=2026-09-24-collector-breaking-the-law&utm_term=harassment', id:'link_8on3_034QvCdZayZvHrAKsLMPj2', term:'harassment', clicks:0, asOf:null}},
  text:'Your debt collector may be breaking the law. The FDCPA sets rules for how collectors can contact you: no threats, no calls at odd hours, no talking to your neighbors or coworkers about your debt. Each violation can be worth up to $1,000 in statutory damages. If something about the calls feels off, our attorneys will look at them for free: credolegal.s.gy/nd-fdcpa',
  disc:['dram','prior'], why:'Free review + link → advertising. The $1,000 figure suggests a result → Prior results line.'},

 {date:'2026-09-25', time:'09:00', status:'scheduled', src:'new', type:'edu', cluster:'What a validation notice must include', img:'assets/post-validation.jpg', imgNote:'Reuses the hub validation image — a new image would help',
  text:'Within five days of first contacting you, a debt collector has to send a written validation notice. It should name the creditor, state the amount and how it was calculated, and tell you that you have 30 days to dispute the debt. If you never got one, or it is missing pieces, that matters. Keep every letter, and do not rely on what they tell you on the phone. Neighbors, has anyone received a proper notice? What did it look like?',
  disc:[], why:'Explains a process with no offer or link → educational, no disclaimer.', note:'Attorney to confirm the FDCPA § 1692g / Regulation F wording before it goes live.'},

 {date:'2026-09-26', time:'17:00', status:'scheduled', src:'bold', type:'ad', cluster:'Check your debt for free', img:'assets/bold/offer-1x1.jpeg', imgNote:'Bold creative · "Check your debt for free" (1:1)',
  lp:'https://start.credolegal.com',
  short:{nextdoor:{url:'https://credolegal.s.gy/nd-free-check', dest:'https://start.credolegal.com/?utm_source=nextdoor&utm_medium=social&utm_campaign=credo_nd_organic_v1&utm_content=2026-09-26-check-your-debt-for-free&utm_term=validation', id:'link_8on3_034QvCdZayc772HDYDZJOs', term:'validation', clicks:0, asOf:null}},
  text:'Not sure whether a debt is real, accurate, or even yours? Check it for free. Send us the letter or the collector\'s details and our attorneys will tell you whether the collector can back it up and what your options are. No upfront cost, no obligation. credolegal.s.gy/nd-free-check',
  disc:['dram'], why:'Direct offer + link → advertising. Staged image → dramatization. No outcome claim.'},

 {date:'2026-09-27', time:'21:00', status:'scheduled', src:'new', type:'edu', cluster:'Who is actually calling you', img:'assets/post-scam.jpg', imgNote:'Reuses the hub scam-alert image — a new image would help',
  text:'The company calling about your old credit card balance is often not the bank. Old debts get sold, sometimes several times, to debt buyers who pay pennies on the dollar and then try to collect the full amount. Along the way the paperwork gets thin: the original contract, the account history, proof of the balance. That is why you are allowed to ask them to prove it before you pay. Ask for it in writing, every time.',
  disc:[], why:'Explains how debt buying works, no offer or link → educational, no disclaimer.'},

 {date:'2026-09-28', time:'09:00', status:'scheduled', src:'bold', type:'ad', cluster:'Sued? Make them prove it', img:'assets/bold/fist-1x1.jpeg', imgNote:'Bold creative · "Sued over a debt? Make them prove it" (1:1)',
  lp:'https://start.credolegal.com/debt-lawsuit-summons-respond',
  short:{nextdoor:{url:'https://credolegal.s.gy/nd-sued', dest:'https://start.credolegal.com/debt-lawsuit-summons-respond?utm_source=nextdoor&utm_medium=social&utm_campaign=credo_nd_organic_v1&utm_content=2026-09-28-sued-make-them-prove-it&utm_term=lawsuit', id:'link_8on3_034QvCdZayffHYy6XrdqCX', term:'lawsuit', clicks:0, asOf:null}},
  text:'Sued over a debt? Do not ignore it. In New York you may have as little as 20 days to answer a summons, and if you do nothing the collector can win by default. They still have to prove the debt is yours, the amount is right, and that they own it, and many cannot. Our attorneys can file your answer and make them prove it. Free case review: credolegal.s.gy/nd-sued',
  disc:['dram','prior'], why:'Free case review + link → advertising. "Many cannot" suggests a result → Prior results line.',
  note:'Scope check: the Business Page brief limited Nextdoor to validation / settlement content and excluded lawsuit posts. Keep or drop this one deliberately. Attorney to confirm the NY answer deadline wording.'},

 {date:'2026-09-29', time:'17:00', status:'scheduled', src:'new', type:'edu', cluster:'Community question', img:'assets/post-money.jpg', imgNote:'Reuses the hub community image — a new image would help',
  text:'Quick neighborly question: which bill surprised you most this year? For a lot of households it has been a medical bill that showed up months later, or a card balance that grew faster than expected. Sharing what caught you off guard helps someone else spot it sooner.',
  disc:[], why:'Conversation starter, no pitch or link → not advertising, no disclaimer.'},

 {date:'2026-09-30', time:'21:00', status:'scheduled', src:'new', type:'edu', cluster:'Old debt has a deadline', img:'assets/post-rights.jpg', imgNote:'Reuses the hub rights image — a new image would help',
  text:'Old debt does not stay collectible forever. Every state sets a deadline for suing over a debt, and in New York that window for most consumer debts is now three years. A collector can still ask you to pay after that, but they cannot sue you for it, and in New York they have to tell you when a debt is past that deadline. Before paying anything on an old account, check the dates.',
  disc:[], why:'Explains a rule with no offer or link → educational, no disclaimer.', note:'Attorney to confirm the New York statute-of-limitations and time-barred-debt disclosure wording before it goes live.'}
];
