# Squarespace Migration Guide — Blur Haus Media

*The honest playbook for translating the HTML design into a live Squarespace site.*

---

## First, the truth about Squarespace

**You cannot just upload the HTML files into Squarespace.** Squarespace doesn't work that way. They use their own page builder with their own component blocks. What you actually do is *rebuild* the design inside Squarespace, using their tools, with your HTML/CSS files as the **visual reference and source of truth**.

The good news: Squarespace 7.1 supports custom fonts, custom colors, and custom CSS injection. So you can match the design closely. The tradeoff: it's hand-built, not auto-imported.

**Your flow:**
1. Open one of your HTML pages on one screen as reference.
2. Build the matching page in Squarespace on the other screen.
3. Inject custom CSS for the parts the page builder can't do.

---

## Step 1 — Pick a template

Use **Squarespace 7.1** (the current platform, not 7.0). Templates in 7.1 all share the same engine, so you can switch between them freely. What matters is which one's *starting structure* is closest to yours.

**Recommended starting templates:**
- **Bedford** family (Vow, Hester) — minimal editorial
- **Skye** — modern, image-forward, generous white space
- **Paloma** — fashion/beauty editorial energy

Pick whichever feels closest to a clean editorial portfolio. You'll customize heavily anyway.

---

## Step 2 — Set up Site Styles (fonts + colors)

This is where you load your brand system into Squarespace's theme so every block uses your fonts and colors automatically.

### Custom fonts

Squarespace has a built-in font picker that includes **Google Fonts**. All four of your fonts are free Google Fonts:

| Role | Font | Where to set in Squarespace |
|---|---|---|
| Headings (impact) | **Archivo Black** | Site Styles → Fonts → Headings (H1) |
| Editorial display | **Instrument Serif** | Site Styles → Fonts → Headings (H2 or H3) |
| Body / paragraph | **DM Sans** | Site Styles → Fonts → Paragraphs |
| Buttons / labels | **Space Grotesk** | Site Styles → Fonts → Buttons |

In Squarespace 7.1: Edit your site → click **Site Styles** (paintbrush icon, bottom-left) → **Fonts** → search and select.

### Custom colors

Squarespace 7.1 uses **Color Themes** with a 5-color palette per theme. You'll set up multiple themes that swap in/out per section.

In Site Styles → Colors → Edit Palette, drop these in:

| Squarespace slot | Use this color | Hex |
|---|---|---|
| Background | Citrine White | `#F9EDD2` |
| Primary text | Leather | `#231F20` |
| Secondary text | Espresso | `#5E3417` |
| Accent / button | Burnt Sienna | `#8A3324` |
| Highlight | Wine Berry | `#5D222C` |

**Pro tip:** Create *additional* color themes for the dark sections. For the CTA block (dark wine background) and the dark card posters, set up themes called:
- **Dark Wine** (background: `#5D222C`, text: `#F9EDD2`, button: `#8A3324`)
- **Dark Leather** (background: `#231F20`, text: `#F9EDD2`, button: `#8A3324`)
- **Espresso** (background: `#5E3417`, text: `#F9EDD2`, button: `#A45337`)

You can swap themes per section.

### The other 13 colors

Squarespace's palette only stores 5. The other 13 (Sand, Potters Clay, Cranberry, Olive Grove, Slate, etc.) you'll apply manually via custom CSS or per-block color pickers.

---

## Step 3 — Custom CSS injection

This is where you fine-tune the design to match the HTML mockup pixel-for-pixel.

Go to: **Settings → Advanced → Custom CSS**

Paste in the relevant rules from your `styles.css`. You don't need everything — just the parts that override Squarespace's defaults. Start with these high-leverage rules:

```css
/* Map your full palette to CSS variables */
:root {
  --citrine: #F9EDD2;
  --cream: #EEE9DA;
  --leather: #231F20;
  --wine-berry: #5D222C;
  --burnt-sienna: #8A3324;
  --espresso: #5E3417;
  --burnt-orange: #A45337;
  --terracotta: #79301F;
  --potters: #8C623B;
}

/* Fix letter-spacing on Archivo Black headers */
h1, h2.impact {
  letter-spacing: -0.025em !important;
  line-height: 0.95 !important;
}

/* Italic Instrument Serif treatment */
h2.editorial, h3.editorial {
  font-style: italic;
  letter-spacing: 0;
}

/* Tracked Space Grotesk for buttons */
.sqs-block-button .sqs-block-button-element {
  letter-spacing: 0.28em !important;
  text-transform: uppercase !important;
  font-weight: 500 !important;
}

/* Eyebrow / label treatment */
.eyebrow {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--wine-berry);
}
```

You'll tweak this as you go. Squarespace's CSS gets verbose — use the browser inspector to find the right selectors.

---

## Step 4 — Build the Menu page

Use **Auto Layouts** (a Squarespace 7.1 feature) for the catalog grid — it's built for exactly this. Otherwise, use the standard **Section + Block** approach.

### Recommended page structure

| Section | Squarespace Block(s) |
|---|---|
| Nav (top of every page) | Built-in site header |
| Hero — "The Menu" | Section with Text Block (h1 = Instrument Serif italic) + paragraph |
| Founding rates note | Section with Text Block, narrow width, bordered (custom CSS) |
| Memberships heading | Section with Text Block (h2 = "Memberships" Archivo Black) |
| Membership cards | **Auto Layout: Cards** with 3 cards, each linking to its detail page |
| Single Session card | Auto Layout: Cards with 1 card, narrow |
| Productions cards | Auto Layout: Cards with 2 cards |
| FAQ | Squarespace **Accordion Block** |
| CTA | Section with dark theme, button block |
| Footer | Built-in site footer |

### Each card needs

- A poster image (use a colored block, OR a styled image of the tier name) → cream/wine/dark/terracotta backgrounds
- Tier title overlay (Instrument Serif italic, large)
- Price ($497 etc., Instrument Serif italic)
- Period (Per Month, Space Grotesk uppercase)
- Tagline (DM Sans, 14px)
- "View Details" link with arrow

Auto Layouts give you the structure; you customize the styling via the per-card text blocks and inject CSS for the specifics that don't expose in the editor.

---

## Step 5 — Build each detail page

Each detail page (The Studio, The Loft, The Glimpse, etc.) becomes its own Squarespace page.

### Recommended structure per detail page

| Section | Squarespace Block |
|---|---|
| Nav | Built-in site header |
| Hero — eyebrow + tier name + tagline + price block | Section with multiple Text Blocks stacked, centered |
| What's Included list | Section with Text Block + List or styled paragraph |
| Who It's For | Section with Text Block, italic serif treatment |
| How It Works (4 steps) | **Auto Layout: List** with 4 items |
| CTA | Section with dark theme, button |
| Back to Menu | Footer or simple text link below the CTA |

### Linking the cards to the detail pages

In Auto Layout settings for each card, set the link to the detail page URL (e.g., `/the-studio`, `/the-loft`).

---

## Step 6 — Discovery call booking

You don't need a checkout flow for V1 — you need a **discovery call booker**.

### Easiest setup

**Squarespace Scheduling** (formerly Acuity) is built in. Free tier handles your needs.

1. **Create your "30-Min Discovery Call" appointment type**
2. **Set your availability** (the time slots you'll take calls)
3. **Embed the booking widget** on the CTA section using Squarespace's Scheduling Block
4. **Set up a confirmation email** with your discovery call prep questions

This replaces the "Reserve Your Call" button → it opens the booker directly.

### Post-call handoff

Once a call ends and someone signs up:
- Send them a contract via **HelloSign** or **DocuSign** (separately — not in Squarespace)
- Invoice them via **Stripe** or **Squarespace Invoicing**
- Set up recurring billing for memberships via **Stripe Billing** linked to Squarespace

V1 doesn't need automated checkout. Manual is fine for first 3 founding clients.

---

## Step 7 — Add real photos and visuals

This is where the brand comes alive. Replace the colored placeholder posters with actual photography from your shoots.

### Best places to add visuals

| Where | What kind of visual |
|---|---|
| Hero of Menu page | Atmospheric video loop or hero image |
| Card posters | Stylized photo with the tier name overlaid (use Image Block + Text Block layered) |
| About page (when built) | Personal photos of you working |
| Detail page heroes | A photo that captures the energy of that tier |
| FAQ section background | Subtle textured background photo |
| CTA section | Dark mood photo behind the dark theme |
| Between sections | "Lifestyle break" full-width images |

### Cool visual effects you can add

| Effect | How |
|---|---|
| **Parallax scrolling** | Section settings → Background → Parallax |
| **Image fade-in on scroll** | Site Styles → Animations → Fade |
| **Hover effects on cards** | Block settings → Hover style |
| **Auto-playing background video** | Section background → Video upload (mute, loop) |
| **Marquee text scroll** | Custom code block with CSS keyframe animation |
| **Cursor effects** | Custom code injection in site header |

---

## Step 8 — Mobile check

Squarespace 7.1 is responsive by default, but Archivo Black at 168px will overflow on small screens. Test every page on mobile preview before publishing.

Common mobile fixes:
- Reduce hero font sizes via mobile-specific CSS
- Stack horizontal grids (Squarespace does this automatically; verify it looks right)
- Check that nav menu collapses to hamburger correctly
- Verify card grid stacks single-column on phones

---

## Useful resources

- **Squarespace Forum** — search "custom CSS" for examples
- **Will Myers** (YouTube) — best Squarespace customization tutorials
- **Squarespace Help Center** for any feature you can't find
- **Refresheee, Inside The Square** — Squarespace customization plugin shops if you want to skip writing CSS

---

## Order of operations

1. ✅ Buy `blurhausmedia.com` domain
2. ✅ Sign up for Squarespace 7.1
3. ✅ Pick a starting template
4. ✅ Set up Site Styles — fonts + colors
5. ✅ Inject custom CSS from your styles.css
6. ✅ Build Menu page
7. ✅ Build each detail page (Studio, Loft, VIP, Glimpse, Vignette, Feature)
8. ✅ Build Home, About, Contact, Portfolio pages
9. ✅ Set up Squarespace Scheduling for discovery calls
10. ✅ Add real photos after the May 4 brand shoot
11. ✅ Test on mobile
12. ✅ Launch + soft promote to founding spot list

---

## Reference files

Keep these open while building:

- `brand-brief.html` — visual reference for typography hierarchy
- `menu-draft.html` — visual reference for catalog layout
- `the-studio.html` (and other detail pages) — visual reference for detail page structure
- `styles.css` — copy/paste source for custom CSS injection
- `project_blur_haus_menu_v1.md` (in your auto-memory) — content/copy source of truth

When in doubt: **the HTML mockup is the source of truth.** Build Squarespace to match it, not the other way around.
