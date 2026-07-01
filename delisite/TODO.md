# Owner To-Do: Fill In the Real Details

Hi! The Mount Sinai Bagel & Deli website is built and working, but a handful of
details are still placeholders because **only you can provide the real
information**. This is a friendly checklist of everything we need from you.

Each item lists **what it is**, **the file to edit**, and **the exact
value/field to replace**. If you'd rather just send us the answers, we'll plug
them in for you — no need to touch the code yourself.

---

## 📞 Contact Info

All contact details live in a single file: **`lib/store.ts`**

- [ ] **Phone number** — currently a fake placeholder `(631) 000-0000`.
  - File: `lib/store.ts` (lines 52–53)
  - Replace `display: "(631) 000-0000"` with your real number as it should
    appear on screen.
  - Also update `href: "tel:+16310000000"` to the same number, digits only
    (e.g. `tel:+16315551234`).

- [ ] **Email address** — currently a guessed placeholder
  `hello@mountsinaibageldeli.com`.
  - File: `lib/store.ts` (lines 58–59)
  - Confirm or replace both `display` (shown on the site) and
    `href: "mailto:..."` (the click-to-email link) with your real address.

- [ ] **Street address** — the street line is **empty**. Right now the site only
  shows "Mount Sinai, NY 11766" with no street number.
  - File: `lib/store.ts` (lines 42–48)
  - Fill in `street: ""` with your street address, and update
    `formatted: "Mount Sinai, NY 11766"` to the full one-line address
    (e.g. `"123 Main St, Mount Sinai, NY 11766"`).
  - Note: the Google Maps pin, directions link, and embedded map are all built
    from this address, so getting it right fixes the map too.

- [ ] **Store hours** — please confirm these are correct (they may be placeholder
  guesses):
  - File: `lib/store.ts` (lines 63–65)
  - Currently: Mon–Fri `6:00 AM – 4:00 PM`, Saturday `6:00 AM – 4:00 PM`,
    Sunday `6:00 AM – 2:00 PM`.

- [ ] **Social media links** — currently point to the generic homepages of
  Instagram and Facebook, not your accounts.
  - File: `lib/store.ts` (lines 69–70)
  - Replace `instagram: "https://instagram.com"` and
    `facebook: "https://facebook.com"` with your real profile URLs.
  - (These power the icons in the site footer.)

---

## ⭐ Reviews

Page file: **`app/reviews/page.tsx`**

- [ ] **"Leave a Review" button link** — currently a broken placeholder.
  - File: `app/reviews/page.tsx` (lines 14–16)
  - Value: `https://search.google.com/local/writereview?placeid=REPLACE_ME`
  - Replace `REPLACE_ME` with your Google Business "Place ID" so the button
    opens your real Google review form. (We can help you find the Place ID.)

- [ ] **Customer reviews are sample/placeholder text** — the six reviews shown
  (Sarah M., Danny R., Priya K., Mike T., Elena V., Carlos D.) are **made up**,
  not real customers.
  - File: `app/reviews/page.tsx` (the `REVIEWS` list, lines 23–66)
  - Replace with real quotes/names, or let us know if you'd prefer to pull live
    Google reviews instead.

- [ ] **"5.0 from friends and regulars" rating label** — this is placeholder
  copy tied to the fake reviews above.
  - File: `app/reviews/page.tsx` (around line 107)
  - Update once real reviews/rating are in.

---

## 🥯 Menu

- [ ] **Dietary / allergen tags (optional)** — the menu supports little badges
  (e.g. "Vegetarian", "Contains Nuts"), but **none are filled in yet**.
  - The badge feature lives in `components/ui/menu-entry.tsx` (the optional
    `badges` field); menu items live in `components/menu-items/breakfast/*.ts`
    and `components/menu-items/lunch/*.ts`.
  - If you want dietary/allergen labels on any items, tell us which items get
    which tags and we'll add them. (Prices and item names are already set — just
    confirm they're accurate.)

---

## 🔎 SEO / Social Sharing

Page file: **`app/layout.tsx`**

- [ ] **Website domain** — please confirm `mountsinaibageldeli.com` is your real
  (intended) domain.
  - File: `app/layout.tsx` (line 20, `metadataBase`)
  - This same domain is also referenced in `app/robots.ts` and `app/sitemap.ts`,
    so if it changes we'll update all three together.

---

## 🖼️ Images

- [ ] **Logo & share image** — confirm these are your final, correct artwork:
  - Header/footer/icon logo: `public/logo.png`
  - Social-share (Open Graph / Twitter) preview image: `public/delilogo.jpg`
    (referenced in `app/layout.tsx`, lines 46 & 57)
  - If you have higher-quality or updated versions, send them over and we'll
    swap them in.

---

*Thanks! Once you hand these over, the site will be showing 100% real
information. Questions on any item — just ask.*
