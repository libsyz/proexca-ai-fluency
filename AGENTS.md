# Working on this repository

## Purpose

A web proposal from Miguel Jimenez to PROEXCA (Canary Islands economic promotion agency) for an AI fluency training and enablement programme, fixed price €14,000 excl. IGIC. It is shared by link and edited by prompt. It stands on its own: it belongs to Miguel as an independent trainer, and it refers to no other proposal, company or product brand.

## Positioning rules (do not break these when editing copy)

- One programme, three groups (Everyone to Daily user, Champions to Builder, Leadership to Strategist), assessed at day 0 and day 60. First cohort, then a decision (continue, adjust, stop), then everyone, then sustain. Never a pilot.
- The hero rail shows the three groups. It never shows project phases or components from any other proposal.
- No company branding. The page carries Miguel's name and monogram only. Products are described generically ("the learning hub", "the trainer"), never by a vendor's product name. Nothing links to, or mentions, any other proposal to PROEXCA. "Connecting Gemini to HubSpot, Business Central and Asana" is simply not included.
- Section 07 is role-based training only: each area with the use cases its session is built on.
- The trainer section shows Miguel alone, with the Microsoft and Le Wagon marks as former employers.
- Section 09 is Measurement and return: Gemini reports in the Workspace Admin console plus the Phillips levels, no calculator.
- Plain, confident English. No em dashes. Short sentences, varied length. Spanish names and terms (IGIC, PROEXCA) stay as they are.
- Copy is humanised: no "not X, it's Y" openers, no rule-of-three padding, no inflated verbs (leverage, unlock, empower, seamless), no unverifiable comparatives, concrete nouns, keep every number and name.

## Bilingual

Spanish is the default. `dist/content.js` is the English copy and `dist/content.es.js` its Spanish mirror, same shape, same keys. Both export a `ui` object with the strings the app itself renders. The ES/EN switch in the hero saves the choice in localStorage and reloads; `?lang=en` or `?lang=es` in the URL overrides it and is the way to share a link in one language. Every copy change goes in both files. A shape check:

```bash
node -e 'const k=(o,p="")=>Object.entries(o).flatMap(([a,b])=>typeof b==="object"&&b&&!Array.isArray(b)?k(b,p+a+"."):[p+a]);Promise.all([import("./dist/content.js"),import("./dist/content.es.js")]).then(([en,es])=>{const a=k(en),b=k(es);console.log([...a.filter(x=>!b.includes(x)),...b.filter(x=>!a.includes(x))])})'
```

## Development

- Static HTML/CSS/JS with native ES modules. No framework, no dependencies, no build step. Node 20+ only for the dev server.
- `npm run dev` serves `dist/` on http://localhost:3100. `npm run check` syntax-checks the JS.
- `dist/` is editable source, not build output.
- `dist/tokens.css` holds the palette (warm paper, deep green band, amber accent) and the type (Fraunces for display, Manrope for text, IBM Plex Mono for labels). `dist/style.css` and `dist/proposal.css` are the shared base and section styles; `dist/fluency.css` holds this page's sections and the wordmark. Rendering and interaction live in `dist/app.js`.
- Wrap unconfirmed facts in `c("...")` in the content files; they are underlined when the page is opened with `?review=1`.
- The monogram is `dist/assets/mark.svg`. The trainer photo is `dist/assets/team/miguel-jimenez.jpg` (about 192px square).
- Interactions to keep working: left index with scroll-spy and progress bar, collapsible to a rail on desktop and a top bar below 1024px; the level-distribution chart (dots moving between day 0 and day 60) on `stageLoop`; section 07's panel of six area tiles that auto-advance through their use cases until someone clicks; included tiles, courses and phases as accessible tabs with arrow keys; the Phillips ladder revealing on scroll. All static under reduced motion. Both print and save to PDF cleanly (`@media print` in `style.css`). Check desktop, tablet and 375px widths after layout changes.
- The spec and section map are in `docs/ai-fluency-spec.md` (written when the page lived inside another repository; the content decisions still hold).

## Publication

- Public GitHub repository `libsyz/proexca-ai-fluency`. Pushes to `main` deploy `dist/` to GitHub Pages through `.github/workflows/pages.yml`.
- Live at https://libsyz.github.io/proexca-ai-fluency/. `noindex` is set; the page carries no confidential data.
