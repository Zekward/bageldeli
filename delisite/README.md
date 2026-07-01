# Mount Sinai Bagel & Deli

Marketing website for **Mount Sinai Bagel & Deli** (Mount Sinai, NY). It's a
single-location deli site: hero landing page, menus (breakfast/lunch), catering,
an about page, a find-us page with an embedded map, a reviews page, and a
discount sign-up that captures leads. It also tracks anonymous visits for basic
analytics. There is no online-ordering backend — the "menu" pages are
informational.

## Tech stack

- **Next.js 16** (App Router) + **React 19**, TypeScript
- **Tailwind CSS v4** (`@tailwindcss/postcss`, `tw-animate-css`)
- **shadcn-style UI** primitives in `components/ui/` built on **Radix UI**
  (`@radix-ui/react-dialog`, `react-navigation-menu`, `react-slot`),
  `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react` icons
- **Supabase** (`@supabase/supabase-js`) for visit tracking and discount claims
- ESLint (`eslint-config-next`)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:3000)
```

Other scripts (from `package.json`):

```bash
npm run build    # next build (production build)
npm run start    # next start (serve the production build)
npm run lint     # eslint
```

## Environment variables

The Supabase client (`lib/supabase.ts`) is created lazily and reads these at
first use. The two API routes below need them; the rest of the site builds and
renders fine without them. **Set these in `.env.local` (never commit secrets):**

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service-role key used server-side by the API routes |

If either is missing when a route actually uses Supabase, `getSupabase()` throws
a clear error naming the absent variable, rather than failing at build time.

## Routes & pages

All pages live under `app/` (App Router).

| Route | File | Notes |
| --- | --- | --- |
| `/` | `app/page.tsx` | Home / hero landing with conversion CTAs; hosts the timed offer popup |
| `/menu` | `app/menu/page.tsx` | Photographed physical menu (images) |
| `/online-menu` | `app/online-menu/page.tsx` | Structured breakfast/lunch menu with tabs, search, scroll-spy |
| `/catering` | `app/catering/page.tsx` | Catering offerings + how-it-works + contact CTAs |
| `/about-us` | `app/about-us/page.tsx` | "Our Story" page |
| `/find-us` | `app/find-us/page.tsx` | Address, hours, click-to-call, embedded Google Map, directions |
| `/reviews` | `app/reviews/page.tsx` | Reviews grid + "Leave a Review" CTA (sample data for now) |
| `/discounts` | `app/discounts/page.tsx` | Discount sign-up form (lead capture) |

API routes:

| Route | File | Notes |
| --- | --- | --- |
| `POST /api/track-visit` | `app/api/track-visit/route.ts` | Upserts a visitor row (`visitors` table), increments `visit_count` |
| `POST /api/claim-discount` | `app/api/claim-discount/route.ts` | Validates and inserts a lead into `discount_claims` |

App Router special files also present: `error.tsx`, `loading.tsx`,
`not-found.tsx`, plus SEO/PWA generators `sitemap.ts`, `robots.ts`, and
`manifest.ts`. Structured data is emitted via
`components/seo/local-business-jsonld.tsx`, wired in `app/layout.tsx`.

## Key concepts

### `STORE` — single source of truth (`lib/store.ts`)

All public store details — name, address, phone, email, hours, socials, and the
derived Google Maps embed/directions/search URLs — live in one exported `STORE`
constant. The find-us page, footer, catering page, and the JSON-LD schema all
read from it, so values can't drift. Several fields are clearly-marked
placeholders (`// TODO: confirm ... with owner`) awaiting real data.

### Visitor tracking + discount flow (Supabase)

- **Tracking:** `components/visitor-tracker/visitor-tracker.tsx` generates/stores
  a visitor id (localStorage), fires once per session, and `POST`s to
  `/api/track-visit`. The route upserts into the `visitors` table. Tracking is
  best-effort — failures are swallowed so they never break a page.
- **Discount claim:** the form in `components/discounts/discount-form.tsx`
  collects name/phone/email, `POST`s to `/api/claim-discount`, which validates
  the payload and inserts into `discount_claims`. On success the UI shows
  `components/discounts/confirmation-card.tsx`.
- **Offer popup:** `components/controllers/menu-popup-controller.tsx` +
  `components/popup/floating-card.tsx` show a timed promo popup (first after
  ~10s, then every ~2.5min).

### DEVLOG improvement loop

`DEVLOG.md` is a running journal of the iterative improvement loop — each cycle
plans changes, implements them, records what changed, and derives the next
cycle's work from those insights. It's the change history; read it to understand
why the code looks the way it does.

## Pointers

- **`DEVLOG.md`** — full change history (the cycle-by-cycle improvement log).
- **`TODO.md`** — owner-provided data still needed (real phone, email, street
  address, hours, social links, Google review URL, real reviews, domain,
  dietary/allergen tags). These are the placeholders marked `TODO` in code.

## Project layout

```
app/                     routes, API handlers, layout, SEO/PWA files
components/
  ui/                    shadcn-style primitives + site header/footer
  controllers/           popup controller
  discounts/             discount form + confirmation card
  popup/                 floating offer card
  menu-items/            breakfast/ and lunch/ menu data (typed arrays)
  seo/                   LocalBusiness JSON-LD
  visitor-tracker/       client-side visit tracker
lib/
  store.ts               STORE constant (single source of truth)
  supabase.ts            lazy Supabase client
  utils.ts               cn() and helpers
```
