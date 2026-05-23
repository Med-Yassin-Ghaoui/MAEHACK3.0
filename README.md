# Questify

Gamified education platform for teens — quests that teach real-world skills (business, AI, engineering, physics), with nuts as the reward currency.

## Run it

No build step. Just open `index.html` in a browser.

**Recommended:** serve it locally so all assets load cleanly:

```powershell
# from this folder
python -m http.server 8000
# then visit http://localhost:8000
```

Or with Node:

```powershell
npx serve .
```

## Structure

```
index.html              ← landing page
assets/
  logo.svg              ← Questify wordmark + squirrel
  squirrel-mascot.svg   ← standalone mascot (with idle animations)
  acorn.svg             ← the nut / reward icon
styles/shared.css       ← design system (colors, components, animations)
scripts/shared.js       ← global state (Q.nuts), mascot reactions, toasts
scenarios/
  perfume.html          ← Business: Build Your Perfume Brand (5-step)
  gradient.html         ← Science: Gradient Descent Playground
  gears.html            ← Engineering: Gear Ratio Challenge
  catapult.html         ← Physics: Acorn Catapult (3 levels)
```

## Replacing the placeholder logo with your PNG

Drop your PNG into `assets/` (e.g. `assets/logo.png`) and replace
`assets/logo.svg` references in `scripts/shared.js` and `index.html` with `assets/logo.png`.

## Brand

- **Orange:** `#E87722`
- **Brown:** `#5C2C0E`
- **Cream:** `#FFF8F0`
- **Yellow accent:** `#FFD23F`
- **Tagline:** "Chase the skills before the real world chases you."

## State

- Nuts and completed quests are persisted to `localStorage` (`questify.nuts`, `questify.completed`).
- To reset between demos: open devtools → Application → Local Storage → Clear.

## Demo flow (for judges)

1. Land on home — read tagline, see 4 quest cards.
2. **Perfume Brand** (most polished) — budget → ingredients → brand → report card → "Ship it or keep it virtual?" → real-world checklist + CSV export.
3. **Gradient Descent** — click the terrain, watch the acorn roll, learn local vs global minima.
4. **Gear Ratio** — drag gears, hit target rpm. Visual + intuitive.
5. **Catapult** — 3 levels with wind. Projectile motion.
