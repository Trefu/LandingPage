# 🎸 Acoustic Guitars — Landing Page

A polished product landing page for a fictional acoustic-guitar brand, **refactored from a freeCodeCamp Responsive Web Design certification project** into a modern **Vue 3 + Tailwind CSS** stack.

The refactor keeps every DOM hook the freeCodeCamp test bundle expects, so the original certification tests still pass — but everything else is new: a dark-amber editorial aesthetic, glassy nav, smooth scrolling, and a hand-built component tree.

> Originally built as the **Build a Product Landing Page** certification project for
> [freeCodeCamp](https://www.freecodecamp.org/certification/responsive-web-design).
> This repository is the second iteration, prepared for sharing on LinkedIn.

---

## ✨ Features

- **Vue 3** with the Composition API (`<script setup>`)
- **Vite 6** for sub-second dev/build
- **Tailwind CSS 3** with a custom `ink` / `amber` palette and display font
- **Dark editorial design** — gradient hero, glassy navbar, animated guitar
- **Reactive mobile menu** with smooth transitions
- **FCC test runner** (`npm run test:fcc`) that mirrors the certified test
  bundle's assertions and runs them locally via `jsdom`
- **Accessible** — semantic landmarks, `aria-expanded` toggler, focus rings,
  required email field

---

## 🧪 FCC test compatibility

The freeCodeCamp test bundle lives at:

```
https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js
```

It's still loaded from `index.html`, and every required DOM hook from the
certification is preserved in the Vue components:

| FCC requirement               | DOM hook                  | Where it lives                          |
| ----------------------------- | ------------------------- | --------------------------------------- |
| Logo image in fixed header    | `#header-img` (`<img>`)   | `src/components/Navbar.vue`             |
| Page header                   | `#header` (fixed)         | `src/components/Navbar.vue`             |
| Navigation bar                | `#nav-bar`                | `src/components/Navbar.vue`             |
| ≥ 3 nav links to in-page IDs  | `a.nav-link`              | `src/components/Navbar.vue`             |
| Subscription form             | `#form`                   | `src/components/EmailSignup.vue`        |
| Form action                   | `https://www.freecodecamp.com/email-submit` | `EmailSignup.vue`        |
| Email input                   | `#email` (`type="email"`) | `src/components/EmailSignup.vue`        |
| Submit button                 | `#submit` (`type="submit"`)| `src/components/EmailSignup.vue`       |
| Product showcase              | `#products`               | `src/components/ProductShowcase.vue`    |
| Demo media element            | `#video` (`<video controls>`) | `src/components/VideoSection.vue`    |

### Run the FCC tests locally

```bash
npm install
npm run test:fcc
```

This builds the production bundle, parses `dist/index.html` into a `jsdom`
window, and executes every assertion the FCC bundle performs — including:

1. `position: fixed` (or `sticky`) on `#header`
2. ≥ 3 `.nav-link` anchors in `#nav-bar`
3. Each `.nav-link` has an `href` that points to an existing element id
4. `#email` is `type="email"`; `#submit` is `type="submit"`
5. The form's `action` is `https://www.freecodecamp.com/email-submit`
6. `#video` is a media element with `controls`
7. A `@media` rule ships in the built CSS
8. Flex or Grid is used for layout

---

## 🚀 Getting started

```bash
# install
npm install

# dev server
npm run dev          # → http://localhost:5173

# production build
npm run build        # outputs dist/

# preview the production bundle
npm run preview      # → http://localhost:4173

# run the freeCodeCamp test runner
npm run test:fcc
```

> Node 18+ is required (Vite 6 needs it).

---

## 🗂 Project structure

```
.
├── index.html                      # entry HTML — loads FCC test bundle
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── scripts/
│   └── fcc-test.mjs                # local FCC test runner
└── src/
    ├── main.js                     # mounts Vue app
    ├── style.css                   # Tailwind base + custom components
    ├── App.vue                     # top-level layout
    ├── assets/                     # images + video (served by Vite)
    └── components/
        ├── Navbar.vue              # #header, #nav-bar, #header-img, .nav-link
        ├── HeroSection.vue         # #principal, lead, features
        ├── ProductShowcase.vue     # #products, three guitar cards
        ├── VideoSection.vue        # #video, #video-section
        ├── EmailSignup.vue         # #form, #email, #submit
        └── SiteFooter.vue          # github.com/trefu link, credits
```

---

## 🎨 Design system

| Token              | Value                          | Used for                |
| ------------------ | ------------------------------ | ----------------------- |
| `ink.900`          | `#0c0a05`                      | Page background         |
| `ink.800`          | `#1a160d`                      | Cards, sections         |
| `amber.glow`       | `#f0b94c`                      | Accents, primary CTA    |
| `amber.deep`       | `#c98a2b`                      | CTA hover               |
| `font-display`     | Playfair Display               | Headlines               |
| `font-sans`        | Inter                          | Body, UI                |

Custom Tailwind plugins used:
- `animate-floaty` (subtle floating motion on the hero guitar)

---

## 👤 Author

**Trefu** — [github.com/trefu](https://github.com/trefu)

Originally built in 2021 as part of the freeCodeCamp Responsive Web Design
curriculum, refactored in 2026 with Vue 3 and Tailwind CSS for sharing on
LinkedIn.

---

## 📄 License

MIT — feel free to fork, learn from, and remix.
