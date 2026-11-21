# Crēdo Legal — Nextdoor Ads Upload Handoff

Everything needed to build the Crēdo Legal debt-defense campaign on **Nextdoor Ads Manager**
(`ads.nextdoor.com`) — by hand or via automation off the manifest.

> **Launch everything PAUSED and QA before any spend.** These are consumer-debt legal ads on a
> real-name neighbor feed. The compliance gate in `nextdoor/README.md` is not optional.

## Package layout

```
handoff/
└── nextdoor/
    ├── README.md               build guide + compliance gate + upload steps
    ├── campaign-manifest.json  machine-readable: scope, UTM scheme, targeting, budget, ad groups → ads
    ├── asset-manifest.csv      reused creatives (Illustration/Photo/Still-life · 1:1 + 1.91:1) + per-creative utm_content
    ├── lead-gen-form-spec.md   the native Lead Gen form (primary conversion path)
    └── copy/
        ├── headlines.csv       6 shared headlines (≤70 chars)
        ├── ads.csv             per-ad: cluster, topic, cta, default headline, final_url, final_url_utm
        └── bodies.csv          2 body variants per ad (front-loaded, footer baked in)
```

## What's in this build

- **1 structure, 2 campaigns:** Lead Generation (`credo_nd_leadgen_v1`, primary) + Website Traffic
  (`credo_nd_traffic_v1`, secondary) over the **same 3 ad groups / 7 ads**.
- **Scope:** NY & NJ clean-file — **debt validation / invalidation + settlement only**, no litigation.
- **Creatives reused** from the meta-ads-preview mirror (no re-shoot); Bold + 9:16 excluded.
- **URL tagging** approved: `utm_source=nextdoor · utm_medium=paid_social · utm_campaign=credo_nd_{objective}_v1 · utm_term={cluster} · utm_content={ad}-{direction}`, `ndclid` preserved.

## Relationship to the other builds

Same handoff shape as `meta-ads-preview/handoff/meta/`. Keeps `utm_medium=paid_social` (matching Meta)
so paid-social rolls up together while `utm_source` keeps Nextdoor separable from `meta` / `google`.
This package rides the Business Page surface — the free profile that anchors these paid campaigns.
