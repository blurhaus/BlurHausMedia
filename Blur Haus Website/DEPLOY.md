# Blur Haus Website · Deployment Guide

## What you have

Four pages, fully styled, fully animated, ready to deploy.

```
Blur Haus Website/
├── index.html          Home
├── about.html          About / Meet Brooke
├── menu.html           Full menu with all three sections
├── contact.html        Discovery call form (HoneyBook-ready)
├── styles.css          All styling
├── script.js           All interactivity
├── images/
│   └── brooke-portrait.jpg   ← YOU NEED TO ADD THIS
└── DEPLOY.md           This file
```

## Two things to do before launch

### 1. Add your photo

Save the rooftop photo you sent me into the `images/` folder, named exactly:

```
![[brooke-portrait 1.jpg]]
```

The about page is already wired up to display it. If the file is missing, the page shows a placeholder where the photo should be, so the site still looks fine without it.

### 2. Connect your HoneyBook contact form

Open `contact.html` and find the comment block that starts with `HONEYBOOK CONTACT FORM EMBED`. Below it is a `<div class="honeybook-embed">` containing a placeholder form.

In HoneyBook:
1. Go to **Tools → Contact Form**
2. Customize the questions to match what's currently in the placeholder (name, email, IG, type of beauty pro, package interest, message)
3. Click **Embed** and copy the snippet HoneyBook gives you
4. In `contact.html`, replace the entire `<div class="honeybook-embed">...</div>` block with the snippet

Until you do this, the form looks complete but submissions don't send. The placeholder is purely visual.

## How to deploy (recommended: Vercel)

Free tier, takes 5 minutes, supports your custom domain when you buy it.

### Option A: Vercel drag-and-drop (easiest)

1. Go to **vercel.com**, sign up with email or GitHub
2. Click **Add New → Project**
3. Drag the entire `Blur Haus Website` folder into the upload area
4. Click **Deploy**
5. Done. You get a free `.vercel.app` URL immediately
6. When you buy `blurhausmedia.com`, add it under **Project Settings → Domains**

### Option B: Netlify drag-and-drop

Same vibe.

1. Go to **netlify.com**, sign up
2. Drag the folder onto the page where it says "Drag and drop your site folder here"
3. Done

## What's built in

**Animations and effects already live:**

- Loading flash on first paint (italic serif "Blur Haus")
- Custom cursor on desktop (small dot + lagging ring, expands on hover)
- Marquee strip across the top with all your beauty pro types
- Hero word-by-word stagger animation
- Scroll-triggered fade-ins on every section
- Hover lift on every card and tier
- Animated underline on every nav link
- Button fill animation on hover
- Smooth fade page transitions between pages
- Subtle parallax on the about photo
- Fully responsive down to mobile
- Respects `prefers-reduced-motion` for accessibility

## Editing later

Everything's plain HTML, CSS, JS. Open any file in a text editor, change copy, save, re-deploy. Both Vercel and Netlify let you upload a new version of the folder anytime to push updates.

## When you're ready for Phase 2

The portfolio tab can drop into the nav as a fourth link, with a `portfolio.html` page added to the folder. Same shared header/footer/nav, easy add.
