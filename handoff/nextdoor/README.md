# Crēdo Legal — Nextdoor Ads · Upload

Nextdoor Ads Manager handoff for the debt-defense campaign. Build by hand in **Nextdoor Ads Manager**
(`ads.nextdoor.com`) or via automation off the manifest. **Launch PAUSED.**

> **Read the compliance gate first (`campaign-manifest.json` → `scope_gate` / `compliance`).** These
> are consumer-debt legal ads on a real-name neighbor feed. Nextdoor **prohibits** payday-loan ads and
> **restricts** "debt services." Get **written sign-off from Nextdoor ad review** on (a) attorney-
> advertising eligibility and (b) legal-services (not debt-services) classification **before any spend.**

## Scope — NY & NJ clean-file experiment

**Debt validation / invalidation + settlement only. NO litigation, lawsuit, garnishment or judgment
topics.** Every ad reads as **legal representation** (attorneys who make a collector *validate* the
debt), never as debt settlement/relief or a "reduce what you owe by X%" product — that framing trips
Nextdoor's restricted-financial material-terms rule and manual review.

## Download

**`credo-nextdoor-ads-v1.zip`** (~34 MB) — the whole package in one file: this README, the manifest,
`copy/`, `asset-manifest.csv`, `lead-gen-form-spec.md`, **and all 42 creative files bundled locally**
under `creatives/<cluster>/<ad>/<ad>_<direction>_<ratio>.<ext>` (filename `<ad>_<direction>` maps 1:1
to `utm_content=<ad>-<direction>`). Same files the CSVs reference; Bold + 9:16 excluded.

## Structure

One campaign per objective → **3 ad groups (clusters)** → **7 ads**, each with 3 creative directions
× 2 ratios (reused from the Meta build).

| Ad group (`utm_term`) | Landing page | Ads |
|---|---|---|
| `validation` | `debt-harassment-stop-calls` | creditor-harassment, fdcpa-rights, multiple-collectors |
| `medical` | `medical-debt-bills-errors` | medical-validation, medical-billing |
| `credit-card` | `credit-card-debt-negotiation` | creditcard-validation, creditcard-collections |

Two campaigns share this structure:

- **`credo_nd_leadgen_v1`** — **Lead Generation (recommended primary).** Native on-Nextdoor form, no
  click-off — best for a sensitive, real-name feed. See `lead-gen-form-spec.md`.
- **`credo_nd_traffic_v1`** — **Website Traffic (secondary).** Click-to-website, deep-linked to the
  cluster LP with the UTM set below.

## URL tagging (approved scheme)

```
utm_source=nextdoor        (fixed)
utm_medium=paid_social     (fixed — same value as the Meta build; source keeps them separable)
utm_campaign=credo_nd_{objective}_v1   (leadgen | traffic | awareness | conversions)
utm_term={cluster}         (validation | medical | credit-card)
utm_content={ad}-{direction}   (e.g. fdcpa-rights-photo; ad-level value omits -{direction})
```

- **Lead Gen has no destination URL** → not UTM-tagged. Attribute by the **ad name** (same tokens), a
  **hidden form field** stamping campaign + cluster, and the **Nextdoor Pixel + CAPI**.
- **Traffic path:** the tagged URL goes in the **CTA destination-URL field, not the ad body.** Nextdoor
  appends its own click id **`ndclid`** — preserve it. No shorteners (they strip UTMs/`ndclid` and trip
  the anti-cloaking rule). No Google-style tracking-template/suffix field — params are baked into the URL.
- Per-ad `final_url` + `final_url_utm` are in `copy/ads.csv` and `campaign-manifest.json`. The exact
  per-creative `utm_content` (`{ad}-{direction}`) is the last column of `asset-manifest.csv` — use it if
  you want creative-level granularity; otherwise the ad-level `final_url_utm` is enough.

## Copy

- **Headlines (6, shared):** `copy/headlines.csv` (all ≤70 chars). Per-ad default index in
  `campaign-manifest.json` / `copy/ads.csv`.
- **Bodies (2 per ad — Default / Reassurance):** `copy/bodies.csv`. Written **front-loaded** because
  Nextdoor body text truncates at ~90 chars. Each already carries the compliance footer.
- **CTA:** `Get a Free Review` (≤45 chars). Exact selectable buttons are **[verify in-tool]**.
- Nextdoor creative data: logos hurt CTR (−14%), heavy caps/emojis −8%, real imagery +13%, local
  city/neighborhood substitution +15–17%. Lead with the cluster message, keep Crēdo present but
  understated (policy still requires the brand be visible), CTAs as neighborly utility.

## Creatives — reused, not re-shot

`asset-manifest.csv` points at the **standard Illustration / Photo / Still-life** sets already published
on the meta-ads-preview mirror, in the two ratios Nextdoor uses:

- **1:1** = 1200×1200 (newsfeed, lead-gen, carousel, right-rail)
- **1.91:1** = 1200×628 (newsfeed)

**Excluded:** the **Bold** red-gesture set (reads aggressive/salesy — the community downvotes it) and
**9:16** (not a Nextdoor placement). Video (2–300 s, 1:1 or 16:9) can be added later from the homeowner
clips; not in this pilot.

## Required campaign settings

- **Objective** = Lead Generation (primary) / Website Clicks (secondary) · **Status = PAUSED.**
- **Geo:** United States **scoped to NY & NJ only.** Broad-geo first, then narrow (over-restricting
  age/gender silently drops members who left those blank).
- **Targeting:** homeowner / 35+ / HHI $75K+ layered lightly; **exclude existing clients**; **no
  under-18**; **do not assert/imply protected attributes** (restricted-financial rule).
- **Budget/bidding:** ~$5K/mo test line; CPC $2.50–3.50 or CPM ~$10.01, odd-cent bids; keep a 5–10×
  bid-to-daily-budget ratio. Details in the manifest.
- **Tracking:** Nextdoor Pixel + CAPI on every LP; a **DNI call number per cluster** (the pixel misses
  calls); Zapier→CRM; export reports before the **30-day** retention window closes.

## Compliance layer (in every ad; do not launch without)

- **NJ:** responsible attorney name (**Jack [CONFIRM full name]**) + firm contact (mailing address,
  phone, email).
- **NY (stricter):** **"Attorney Advertising"** label + **AI-generated-content disclosure** + **Jack's
  pre-approval of every ad before it goes live.** All copy is AI-drafted → **humanize + Jack's review**.
- Universal footer + "Prior outcomes don't guarantee similar results." are baked into every body.
- **`[CONFIRM]` before launch:** Jack's full name, firm mailing address / phone / email, exact NY
  AI-disclosure wording, the lead-form privacy-policy URL, and testimonial/recommendation rules.

## Upload steps (manual)

1. Verify the Business Page (EIN letter / license / bank statement) and set category = **Legal services**.
2. Build campaign **PAUSED**; set objective, NY+NJ geo, targeting, budget/bidding per the manifest.
3. Create the **3 ad groups** (one per cluster).
4. For each ad: pick the reused creative from `asset-manifest.csv` (upload the file or its URL), paste
   the headline + a body variant from `copy/`, set CTA = *Get a Free Review*, and — traffic campaign —
   paste the `final_url_utm` into the **destination-URL field**.
5. Lead-gen campaign: attach the native form from `lead-gen-form-spec.md`; add the hidden
   campaign/cluster field; set the privacy-policy URL.
6. Install the Nextdoor Pixel + CAPI on the LPs; map DNI numbers per cluster; wire Zapier→CRM.
7. **Route every ad through Jack for NY pre-approval. Keep PAUSED until he signs off and Nextdoor
   confirms eligibility.**
