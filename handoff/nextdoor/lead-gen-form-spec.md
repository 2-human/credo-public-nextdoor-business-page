# Crēdo Legal — Nextdoor Lead Gen Form Spec

One reusable native Lead Gen form attached to all 3 ad groups in the `credo_nd_leadgen_v1` campaign.
The form lives **on Nextdoor** (the member never leaves the app); up to **8 questions — 5 pre-filled**
from verified neighbor data + **up to 3 custom** write-ins. Mirrors the Meta lead form so the
conversion path is comparable across channels.

## 1. Form metadata

```yaml
form_name: Credo_Nextdoor_LeadForm_v1
business_page_id: "<BUSINESS_PAGE_ID>"        # verified Nextdoor Business Page
locale: en_US
privacy_policy_url: "<PRIVACY_POLICY_URL>"    # REQUIRED by Nextdoor for lead forms — [CONFIRM]
intent: more_volume                            # lower friction; raise to higher-intent in phase 2 if quality dips
```

## 2. Intro screen

```
HEADLINE:     See if Crēdo can help with your debt.
DESCRIPTION:  Our attorneys. Free case review. We'll call you within one business day.
BUTTON:       Continue
```

Opens with the verb, mechanical promise, no emoji (Nextdoor penalizes caps/emoji).

## 3. Fields

| Order | Field | Type | Pre-filled | Notes |
|---|---|---|---|---|
| 1 | Full name | `FULL_NAME` | yes | from verified profile |
| 2 | Email | `EMAIL` | yes | editable |
| 3 | Phone | `PHONE` | yes | editable |
| 4 | State | `STATE` | yes | licensing routing — **NY & NJ only this launch** |
| 5 | Debt amount | custom multiple-choice | no | qualifier |
| 6 | Debt type | custom multiple-choice | no | qualifier |
| 7 | **hidden: campaign/cluster** | hidden / prefilled value | n/a | attribution — see §5 |

Nextdoor allows **3 custom** questions; fields 5, 6, and the hidden attribution field use all three.
Keep the debt-**stage** qualifier OUT here (stage = sued / garnished / judgment is off-scope for the
NY/NJ clean-file launch); collect it later on the call.

### 3.1 Debt amount
```
QUESTION: How much total debt do you have?
CHOICES:  Less than $8,000 · $8,000–$11,999 · $12,000–$25,000 · More than $25,000
```
Tier mapping handled CRM-side (Less than $8,000 → decline; $12,000–$25,000 → Tier 1).

### 3.2 Debt type
```
QUESTION: What kind of debt is it? (choose all that apply)
CHOICES:  Credit card · Medical bills · Collections / debt buyer · Not sure
```
Scope note: this is a **validation** funnel — no lawsuit/garnishment option offered.

## 4. Custom disclaimer (shown before submit)

```
TITLE: About Crēdo Legal representation
BODY:  Crēdo Legal is a law firm. Representation is by attorneys licensed in your state
       (New York and New Jersey for this program). Coverage varies by jurisdiction; we will
       tell you upfront if we cannot represent you.

       Attorney Advertising. Prior outcomes don't guarantee similar results. Includes
       AI-generated content. [Responsible attorney Jack [CONFIRM]; firm contact — CONFIRM.]
```

Carries the NY "Attorney Advertising" + AI disclosure and the NJ attorney-name/contact requirement.
**[CONFIRM]** the exact NY AI-disclosure wording, Jack's full name, and firm contact with counsel.

## 5. Attribution (no UTM on native forms)

The native form has **no destination URL**, so it cannot be UTM-tagged. Attribute instead by:

1. **Ad name** — name each ad `{cluster}-{ad}-{direction}` (e.g. `validation-fdcpa-rights-photo`) so
   the platform report ties a lead back to the creative.
2. **Hidden form field** — prefill `campaign_cluster` with `credo_nd_leadgen_v1|{cluster}` per ad group
   so the value rides into the CRM with the lead.
3. **Nextdoor Pixel + CAPI** on the LPs and thank-you states for cross-channel modeling.

## 6. Delivery

- **Zapier (or Hightouch)** connector: Nextdoor Lead Ads → CRM/stub. Map the standard fields + the
  hidden `campaign_cluster`.
- **Nextdoor retains lead data 30 days** — the Zap must run continuously; also export as backup.
- **Phone leads bypass the form** — the per-cluster DNI number carries call attribution.

## 7. Thank-you screen

```
HEADLINE:  Thanks — we've got it.
BODY:      A Crēdo attorney's office will call you within one business day. If it's urgent,
           call <DNI_CALL_NUMBER_PER_CLUSTER>.
BUTTON:    View your rights   →  https://start.credolegal.com/debt-harassment-stop-calls
```

The thank-you button is the one place a validation-cluster lead can click through to the LP; tag it
`?utm_source=nextdoor&utm_medium=paid_social&utm_campaign=credo_nd_leadgen_v1&utm_term={cluster}&utm_content=thankyou`.
