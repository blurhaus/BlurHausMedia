# Showit Launch Guide — Blur Haus Media

*The simplest possible playbook to get your website live. No fluff.*

---

## What Showit actually is

A drag-and-drop website builder built for photographers, designers, and creative pros. You design like you're making a Pinterest mood board — every element is positioned exactly where you want it on a canvas. No coding required for 95% of what you'll do.

**The catch:** Mobile and desktop are designed *separately*. So you build each page twice. That's the price of pixel-perfect control.

---

## Pricing

| Plan | Cost | What you get |
|---|---|---|
| **Showit Basic** | $19/month | Just the website. No blog. **Pick this for V1.** |
| Showit Advanced | $34/month | Website + WordPress blog (if you ever blog) |
| Showit Plus | $54/month | Multiple sites |

Free 14-day trial. No credit card to start.

---

## The 7-day launch plan

| Day | Focus |
|---|---|
| **Day 1** | Sign up, pick template, copy in your fonts + colors |
| **Day 2** | Build Home page |
| **Day 3** | Build Menu page (catalog of all services) |
| **Day 4** | Build About page + Portfolio page |
| **Day 5** | Build Contact page + embed HoneyBook |
| **Day 6** | Build the 6 service detail pages (use the same template across all 6) |
| **Day 7** | Mobile pass on every page, fix what's broken, launch |

You can stretch it to two weeks if real life happens. But seven focused days gets you live.

---

## Step 1 — Sign up and pick a template

### Sign up

Go to **showit.com**. Hit "Start Free Trial." You don't need a credit card.

### Pick a template

This is your single biggest decision. The right template gets you 70% of the way there. The wrong one fights you.

**Where to shop for templates:**

| Source | Why |
|---|---|
| **Tonic Site Shop** (tonicsiteshop.com) | The gold standard. Photographer-owned, beauty/editorial-leaning templates. $200–$400 each. |
| **Davey & Krista** (daveyandkrista.com) | Clean editorial templates for creative entrepreneurs. |
| **With Grace and Gold** (withgraceandgold.com) | Modern, sophisticated, lots of motion-friendly layouts. |
| **Station Seven** (stationseven.com) | Photo-forward, lots of full-bleed image options. |
| **Showit's built-in template gallery** | Free with subscription, decent starting points |
| **Etsy** | Search "Showit template editorial" or "Showit photographer" — $50-200 templates |

### What to look for in a template

Ignore the photos in the demo (those get swapped). Pick by **structure**:

- ✅ Has a **catalog/menu/services page** with cards (for your menu)
- ✅ Has **sub-pages for individual services or projects** (for your detail pages)
- ✅ Has an **About page** with photo + text layout
- ✅ Has a **Portfolio/Gallery** with grid layout
- ✅ Has a **Contact page** with form
- ✅ Editorial typography (serif headings, big type, generous space)

Template names worth searching specifically: anything with "editorial," "minimal," "photographer," "modern beauty," "creative agency."

### Don't pick

- Templates with bright colors, sparkles, or "feminine cute" energy
- Templates with cursive script fonts
- Templates with too many sections or heavy graphics
- Templates designed for blogs (not what you need)

---

## Step 2 — Set up your brand (fonts + colors)

This is the moment your template stops looking like the demo and starts looking like Blur Haus.

### Fonts

Showit pulls from Google Fonts. Go to **Site Style** → **Typography** and replace the defaults with:

| Slot | Font |
|---|---|
| Heading 1 | **Archivo Black** |
| Heading 2 | **Archivo Black** *(or Instrument Serif italic, depending on the moment)* |
| Heading 3 | **Instrument Serif** *(set to italic in the editor)* |
| Body | **DM Sans** |
| Buttons / Labels | **Space Grotesk** *(uppercase, letter-spacing 0.28em)* |

All four are free Google Fonts. Showit lets you assign them per element, so you can mix Archivo Black for sections and Instrument Serif italic for tier names.

### Colors

Go to **Site Style** → **Colors** and set up your palette. Showit lets you save unlimited custom colors. Drop these in:

```
Citrine White    #F9EDD2  ← main background
Cream            #EEE9DA  ← card backgrounds
Beige            #FEEFDC  ← lighter alt
Taupe            #A89381  ← subtle accent
Sand             #C9946A  ← warm tone
Potters Clay     #8C623B  ← deeper warm
Espresso         #5E3417  ← deep brown
Dark Rum         #3D1E0C  ← near-black brown
Leather          #231F20  ← primary text, dark surfaces
Wine Berry       #5D222C  ← headers, dark accents
Temptress        #440200  ← deepest wine
Cranberry        #6F1518  ← rich wine
Burnt Orange     #A45337  ← buttons, CTAs
Burnt Sienna     #8A3324  ← primary accent
Terracotta       #79301F  ← deeper earth
Deep Sage        #52451B  ← optional
Olive Grove      #616654  ← optional
Slate            #3C424E  ← optional
```

Save all 18. Most pages will only use 4-6 of them, but having the full system available means you can pick what fits each section.

---

## Step 3 — Build the Home page

Use the HTML mockup as your visual reference. Open `index.html` from your project folder on one screen, build Showit on the other.

### Sections to build (in order)

1. **Top nav** — usually built into the template's header. Drop your logo (Blur Haus Media in Archivo Black uppercase) and link the 5 nav items.
2. **Hero** — Big page-filling section. Type "Editorial video for *beauty pros.*" Mix Archivo Black for the first part and Instrument Serif italic for "beauty pros" in burgundy.
3. **Founding rates banner** — A narrow centered block with cream background, burgundy border, italic serif text.
4. **Three pillar cards** — Memberships, Single Session, Productions. Each links to the menu page.
5. **About teaser** — A wide section with the cream background and a giant italic pull quote.
6. **CTA section** — Dark leather background, italic serif headline, burnt sienna button.
7. **Footer** — Sitewide footer.

### Showit-specific tips

- **Use Canvas, not Sections.** Showit's whole interface is a free canvas — drag elements anywhere. Don't try to make it act like Squarespace blocks.
- **Group related elements.** Right-click → Group lets you move related things (eyebrow + heading + paragraph) as one unit.
- **Set up a "global" header and footer** so you only design them once.

---

## Step 4 — Build the Menu page (catalog)

Use `menu-draft.html` as the reference.

The menu page is just three sections of cards:

- **Memberships:** 3 cards (The Studio, The Loft, The Full Haus VIP)
- **Single Session:** 1 card centered (The Glimpse)
- **Productions:** 2 cards (The Vignette, The Feature)

### Building each card

1. Drop a rectangle for the card poster (top half) — fill it with the right brand color (cream / wine / leather / terracotta / espresso)
2. Type the tier name in Instrument Serif italic, large
3. Below, drop a smaller rectangle for the info section (bottom half) — fill cream
4. Add price (Instrument Serif italic), price period (Space Grotesk uppercase), tagline (DM Sans), "View Details" link
5. Group everything, link the whole card to its detail page
6. Duplicate the card 5 more times — change colors and text per tier

This is one of those moments where Showit's canvas approach really pays off. You can position everything exactly.

---

## Step 5 — Build the 6 detail pages

Each detail page is structurally identical. Build ONE — then duplicate it 5 times and just change the content.

### One reusable detail page template

1. **Hero section:** Eyebrow tag, tier name (Instrument Serif italic, huge), tagline, framed price block
2. **What's Included section:** Label + heading + bulleted list (use Showit's text block + manually add em-dashes as bullets)
3. **Who It's For section:** Label + italic serif paragraph
4. **How It Works section:** Label + 4 numbered steps
5. **CTA section:** Same as Home
6. **"Back to Menu" link** at the bottom

Build it once on `the-studio.html`. Then duplicate the page in Showit, rename, and just swap the content for each tier.

---

## Step 6 — Build About, Portfolio, Contact

Use the HTML mockups as reference. Same approach — open the HTML on one screen, build Showit on the other.

### Notes per page

**About:** Your story is drafted in `about.html`. Read it, edit any line that doesn't sound like you. Drop a placeholder image where the photo goes — replace with real photos after the May 4 brand shoot.

**Portfolio:** Use the placeholder colored tiles for now. After your first shoots, replace them with real video and photo work.

**Contact:** This is where HoneyBook comes in (Step 7).

---

## Step 7 — Embed HoneyBook on the Contact page

HoneyBook is your client management system. The contact form lives in HoneyBook, and you embed it on your website.

### Setting up the HoneyBook contact form

1. **Sign up for HoneyBook** (free trial, then ~$19/month for the starter plan)
2. **Create your "Discovery Call Inquiry" contact form** in HoneyBook
   - Fields: Name, Email, Business/IG handle, Service of interest (dropdown), Message
   - Set it to send a confirmation email and add the lead to your pipeline automatically
3. **Get the embed code** — HoneyBook gives you a snippet of code to paste
4. **In Showit, drop an "Embed Code" element** on your Contact page where the form should go
5. **Paste the HoneyBook code in**
6. **Preview the page** to make sure it loads correctly

### Setting up the discovery call booker

You have two options:

**Option A — Use HoneyBook's scheduler (cleanest if you're already paying for HoneyBook).** Same flow: create the meeting type, get the embed code, paste into Showit's Embed Code element on the Contact page.

**Option B — Use Calendly (free).** Sign up for Calendly, create your "30-Min Discovery Call" event, get the embed code, paste into Showit. Calendly is more polished and free at this scale.

Either works. I'd start with HoneyBook's so it's all in one place — but Calendly is fine if HoneyBook's scheduler feels clunky.

---

## Step 8 — Mobile pass

This is where Showit takes more work than Squarespace. Every page has a separate mobile view that you have to design.

### How to do it efficiently

1. After you finish a page on desktop, click **Switch to Mobile** in the top toolbar
2. Showit shows you a starting layout — usually most things stack vertically by default
3. Adjust:
   - **Reduce font sizes** (Archivo Black at 168px will overflow — drop to 64-80px on mobile)
   - **Stack horizontal grids vertically**
   - **Adjust paddings and spacing**
   - **Make sure buttons are tappable** (44px minimum height)
4. **Preview on a real phone** — use Showit's preview link and open it on your iPhone

Plan to spend roughly 30–60 minutes per page on mobile. It feels tedious but the result is a site that doesn't break on phones — which is where 70%+ of your traffic will come from.

---

## Step 9 — Domain and launch

### Buy your domain

Go to **Namecheap** or **Google Domains** (now Squarespace Domains). Buy `blurhausmedia.com`. About $15/year.

### Connect to Showit

In Showit settings → Domain → "Connect Existing Domain." Showit gives you DNS records to add at your domain registrar. It takes 1–24 hours to propagate.

### Hit publish

Once your domain is live, hit **Publish** in the Showit top bar. Your site is live.

---

## Reusable resources you already have

| File in your project folder | What it's for |
|---|---|
| `brand-brief.html` | Visual reference for typography hierarchy and palette in action |
| `index.html` | Visual reference for Home page |
| `menu-draft.html` | Visual reference for catalog/menu layout |
| `about.html`, `portfolio.html`, `contact.html` | Visual reference for the other main pages |
| `the-studio.html` (and 5 others) | Visual reference for service detail pages |
| `styles.css` | Color values and typography rules — copy hex codes from here |
| `project_blur_haus_menu_v1.md` (in auto-memory) | Source of truth for all copy, prices, scope |

When in doubt: **the HTML mockup is the source of truth for layout and the menu memory file is the source of truth for content.** Build Showit to match them, not the other way around.

---

## YouTube channels to follow

Open these on Day 1, follow along as you build:

- **Showit's official channel** — the basics
- **Tonic Site Shop's tutorials** — they walk through building entire sites
- **Davey & Krista** — branding-focused Showit walkthroughs
- **Holly Meyer Lucas** (real estate, but her Showit tutorials are gold)
- **The Showit Community Facebook group** — fastest place to ask questions

---

## When something breaks

Common issues and fixes:

| Problem | Fix |
|---|---|
| Fonts not loading | Check Site Style → Typography → make sure Google Fonts is enabled |
| Mobile layout looks wrong | Mobile is designed separately — switch to mobile view and fix it there |
| Embed code not appearing | Make sure the embed element is sized large enough (drag corner to expand) |
| Site won't publish | Domain not connected yet, or DNS still propagating (wait 24 hours) |
| Page loads slow | Compress your images before uploading — use TinyPNG.com |

---

## Order of operations

1. ✅ Sign up for Showit (free trial)
2. ✅ Sign up for HoneyBook (free trial)
3. ✅ Buy `blurhausmedia.com` from Namecheap
4. ✅ Pick a template from Tonic Site Shop or Showit's gallery
5. ✅ Set up brand (fonts + colors) in Showit
6. ✅ Build Home page
7. ✅ Build Menu page (catalog)
8. ✅ Build About + Portfolio
9. ✅ Build Contact page + embed HoneyBook
10. ✅ Build all 6 detail pages (duplicate one, change content)
11. ✅ Mobile pass on every page
12. ✅ Connect domain
13. ✅ Hit publish

That's the entire launch.
