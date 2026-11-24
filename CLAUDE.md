# Westside Medical Associates (concept) — project notes

- Client concept site with the clinic's real content — keep real phone/fax/email/address/hours/booking link.
- **Style:** "Modern Clinical" — white base, navy #14284B (primary), clinical red #B83D35 (secondary, one accent), muted #F3F6FA panels, accent #E8EEF7. Plus Jakarta Sans only. 10px buttons, 16–24px card radius, icon tiles.
- **Shared data:** `src/lib/site.ts` (contact, hours, booking URL, nav, services, gallery).
- **Utilities:** `src/index.css` → `.container-site`, `.section-padding`, `.page-hero*`, `.service-card`, `.eyebrow`, `.btn-primary/.btn-accent/.btn-outline`. Subpages pick up the look from these + tokens.
- App.tsx already wraps every route in `Layout` — pages must NOT wrap themselves.
- **Deploy:** Netlify `westsidemedicalassociates-a` from `main`; `public/_redirects` = SPA fallback.
- Footer keeps the concept disclaimer + "Web Design by Bluluma | Powered by SwiftLift".
