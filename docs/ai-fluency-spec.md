# PROEXCA AI fluency proposal: spec and section plan

Status: sections approved on 6 November 2026 and built at `dist/fluency/`. Open inputs below still need answers; the page carries defaults wrapped in `c("...")` until then.

## What this is

A second proposal page for PROEXCA, independent from the integration proposal: an AI fluency training and enablement programme, target price €14,000 excl. IGIC. The content follows the Cohen & Co fluency artifact (https://claude.ai/artifact/43Cpq7FMhNsWZE6Cq5Dtdc), translated to PROEXCA: Gemini and Google Workspace instead of Copilot and M365, a public economic-promotion agency instead of an accounting firm, a fixed price instead of pricing by phase. The layout, design system and shell are the ones already in this repo.

## Where it lives (decision)

Recommended: the same repository, as a second page under `dist/fluency/`, published at `/proexca-proposal/fluency/` (later `proexca.socratixai.com/fluency/`). It shares `tokens.css`, `style.css` and the shell (`index.html` structure, topbar, index rail, scroll-spy, progress bar, section heads, dialog, review mode) and gets its own `content.js`, `app.js` and `fluency.css` so nothing in the integration proposal can break.

Alternative: a new repository cloned from this one, if the two proposals should be shared and deployed fully apart. Same build, one more Pages workflow.

## Global adaptations from the artifact

| Artifact | PROEXCA version |
| --- | --- |
| Microsoft Copilot, M365, Copilot Studio, Power Automate, Viva | Gemini, Google Workspace (Docs, Sheets, Slides, Gmail, Drive), Gems, Apps Script and n8n for the builder level |
| Cohen & Co, Corey, Enes, practice leaders | PROEXCA, Dani, area leads (names to confirm) |
| "60-day pilot" | "first cohort, measured at day 0 and day 60". The word pilot stays out, same as the house rule in AGENTS.md |
| Tax, Assurance, Advisory, Operations | PROEXCA areas, to confirm: internationalisation, investment attraction, talent, events and missions, administration and finance |
| Copilot Dashboard assisted hours, $72 rate | Gemini usage reports in the Workspace admin console plus the assessment and process baselines; € rate PROEXCA sets |
| Priced by phase, six intake questions, "we send the number within a week" | Fixed price €14,000 excl. IGIC, included and not included, assumptions, book the kickoff |
| Busy season, April 15 | PROEXCA's own calendar of fairs and missions (dates to confirm) |
| drew@ and james@ | miguel@socratixai.com |

Ten sections. Numbering follows the index rail as in the integration proposal.

## Sections

### 01 Where you are (hero)

- Content: new. Headline and lead in the spirit of the artifact's hero ("a shared foundation for everyone, champions who can build, leadership that can decide"), written for PROEXCA.
- Reused from the integration proposal: hero layout and the three-component strip (Turn on, Connect, Reinvent). Status labels change: Turn on is "This programme deepens it", Connect and Reinvent are "Separate proposal". This ties the two proposals together without mixing scope. If you would rather keep the fluency proposal free of the three components, the strip becomes the three groups (Everyone, Champions, Leadership) instead.
- Animation: none, as today.

### 02 What we heard

- Content: artifact section 1 structure (three quotes, each with the questions it raises and a link to the section that answers it). The quotes must come from you: what PROEXCA said when they asked for an independent training proposal. The "who PROEXCA is" paragraph from the integration proposal's section 02 is reused as the opener.
- Layout: the card-free pull-quote treatment from the integration proposal's section 02.
- Animation: none. The islands scene stays in the other proposal.

### 03 Goals and who it's for

- Content: artifact section 2, adapted. Three groups: Everyone (Aware to Daily user), Champions (Builder), Leadership (Strategist, Dani and the area leads). The ten-minute assessment at day 0 and day 60. The six mindsets reused as written, with Copilot swapped for Gemini.
- Animation: generated. The artifact's level-distribution chart (dots that move from Aware towards Daily user and Builder between day 0 and day 60) rebuilt with the same mechanism as the Reinvent cascade in `app.js`: CSS stages driven by a small runner, auto-play in view, static under reduced motion. Illustrative distribution, labelled as such.

### 04 Our approach

- Content: artifact section 3, the five principles (live cohorts, workshops on their own use cases, a community with follow-up, time with people who build, one place for the material with visible progress). Light edits for PROEXCA.
- Animation: reused engine, new data. The artifact's "cohort learning together" orbit scene is replaced with the islands scene engine from `app.js` (`sceneLoop` and the Connect scene): four islands (Workshops, Community, Builders, Material), a cohort of people in the middle, pills on each hop. Icons instead of product logos. Static description under reduced motion.

### 05 What's included

- Content: artifact section 4, the four tiles (Agora the learning site, workshops, community, check-in hours) with the detail panel for each. Scope inside €14,000 to confirm (see open inputs).
- Interaction: reused. The milestone tabs component (tabs with arrow keys, one panel) from the integration proposal, restyled as tiles.
- Animation: none.

### 06 Courses

- Content: artifact section 5. AI Operator (opener plus AI Foundations, AI in Practice, Responsible AI, two to three hours each) for everyone; No-Code Operator and AI Automations for champions. The "fitted suit, not bespoke" paragraph, with the three tailoring points rewritten for PROEXCA (public-sector examples, PROEXCA's governance in the Responsible AI module, builder courses pointed at Gems, Apps Script and n8n). Tools line becomes Gemini, Docs, Sheets, Slides, Gmail.
- Interaction: reused. Course and module selector with arrow keys, same tabs component as section 05.
- Slide images: the artifact embeds them as base64. They can be extracted into `dist/fluency/assets/courses/`, but they are Copilot-branded. Decision: extract and keep, swap for Gemini versions you supply, or drop the images and keep the module outlines.

### 07 Role-based training and your processes

- Content: artifact section 6, adapted. Once the base is in, training gets specific to PROEXCA's areas. Teaches people to evaluate a process before anyone automates it. The five steps (name it, map it, should it exist, pattern and level, tag it) and the four build levels (Everyday Gemini, Personal agent, Team workflow, Enterprise), the first two produced by training. Wording stays consistent with the integration proposal's "no use-case mapping workshops": here people learn the method, nobody produces documents to throw away.
- Animation: generated for the five steps, using the cascade's stage mechanism. Rungs ladder: reused tabs component (select a rung, see what it is).
- Cross-reference: Team workflow and Enterprise levels point to the integration proposal as "where this goes next", one sentence, no price.

### 08 How it runs

- Content: artifact section 7 restructured without the pilot word: Align, First cohort, Decision (continue, adjust, stop), Everyone, Sustain. Fixed points are the assessment before and after and the decision after the first cohort. No week counts in the copy, same rule as the integration proposal; cohorts are the unit. What it asks of PROEXCA: time per person, a named lead per cohort, Dani's time, one readout.
- Interaction: reused. The milestones tabs (title, what is in place, what we need from you).
- Animation: none.

### 09 What Socratix is about (replaced Measurement and return on 6 November 2026)

- Content: artifact section 8. The Phillips ROI levels with PROEXCA data sources (assessment at day 0 and 60, Gemini usage reports, process baselines). Readout at day 60, then quarterly.
- Interaction: generated. The calculator, in euro, with PROEXCA inputs (people in scope, hours back per person per month, loaded hourly rate, attribution, confidence, programme cost). Recommendation: show hours back per month and first-year value, and drop payback and benefit-to-cost. A public body reads hours better than ratios. Your call.
- Animation: the levels pyramid reveals on scroll-in, reusing `revealOnScroll` from the matrix.

### 10 The trainer

- Content: replaces the team section. You, with role, bio and what you bring to PROEXCA, and the enablement track record from the integration proposal's "From exploring AI to using it at work" (Vistage, Generalitat de Catalunya, Telos Institute). You said you would supply the input; placeholders go in `c("...")` until then. Optional: a second tile for whoever backs you up on builder check-in hours.
- Interaction: reused. Team tile opening the accessible dialog. Photo already in `dist/assets/team/miguel-jimenez.jpg`.
- Dropped: the positioning matrix and the implementation proof. They argue for integration work, not training.

### 11 Investment and next steps

- Content: fixed price card, €14,000 excl. IGIC. Included, not included, assumptions, closing with "Book the kickoff". The artifact's six intake questions are replaced by assumptions, since the price is fixed. Three of them survive as assumptions (headcount in scope, everyone has Gemini, realistic time per person).
- Interaction: reused pricing card.
- Animation: none.

## Shared, reused as-is

Topbar and index rail with scroll-spy, progress bar and collapsible numbered rail (localStorage), section heads, fonts, tokens, footer, dialog, review mode with `c("...")`, `noindex`, the Pages workflow.

## Open inputs needed from you

1. PROEXCA's words: two or three things they said when asking for a training proposal (section 02).
2. Headcount in scope and the areas to name in section 07.
3. What €14,000 buys: number of cohorts, workshops per cohort, months of Agora, check-in hours. My default to react to: one cohort of up to 20 people through AI Operator with two workshops, a champions track for up to five people, a leadership session, Agora for six months, weekly check-in hours for three months.
4. Whether Agora is in scope at all, or the material lives in PROEXCA's Drive.
5. Course slide images: extract, replace or drop.
6. Trainer section: your bio points and what you bring.
7. Calendar constraints (fairs, missions) that shape when cohorts run.

## Consistency with the integration proposal

The integration proposal lists an optional half-day AI literacy workshop with no price. Once this proposal exists, that line should point here instead, so PROEXCA does not see two training offers. One-line edit in `dist/content.js`, done when this page goes live.
