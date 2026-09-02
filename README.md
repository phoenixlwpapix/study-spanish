# ¡Claro! Spanish Grammar

An interactive Spanish grammar learning app inspired by the topic progression on StudySpanish. It includes 9 units, lesson theory, practice quizzes, flashcards, vocabulary, unit checkpoints, a grammar cheat sheet, and a mistakes notebook.

The visual identity uses a custom transparent ¡Claro! mark that combines a C-shaped speech bubble, the Spanish inverted exclamation mark, and an open-book motif. The same mark is used in the navigation bar and favicon.

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Local browser storage for learning progress

## Development

```bash
pnpm install
pnpm dev
```

Quality checks:

```bash
pnpm lint
pnpm build
```

## Learning progress

Lesson and exam results use separate settlement flows. Completing a unit exam records only the unit exam result and its XP reward; it does not create a fake completed lesson or award lesson XP a second time. Navigation and lesson headers reflect the currently selected unit.

The mistakes notebook uses a persisted spaced-review queue. A missed question is due immediately; consecutive correct reviews schedule the next attempt after 1 day and then 3 days. A third consecutive correct review marks the item as mastered and awards 15 XP. Incorrect reviews reset the recall streak, while existing v1 progress is migrated in place.

## Shareable navigation

Units, lessons, reference tabs, and checkpoints are represented in URL query parameters. Direct links survive refreshes, and browser back/forward navigation restores the corresponding screen without adding a router dependency.

Examples:

- `?unit=9`
- `?unit=9&lesson=u9-l99`
- `?unit=9&tab=cheatsheet`
- `?unit=8&checkpoint=1`

## Accessibility

Core learning flows are keyboard and screen-reader friendly: lesson cards, roadmap rows, and curriculum units use semantic buttons; lesson sections expose a tablist with arrow-key navigation; progress and feedback announce their state; and destructive actions use accessible in-app confirmation dialogs with focus trapping, Escape handling, and focus restoration. The app also includes a skip link, visible focus styles, reduced-motion support, and explicit labels for icon-only controls.

## Responsive curriculum navigation

Desktop layouts use a sticky curriculum sidebar with unit progress, lesson shortcuts, and checkpoint access. On smaller screens, the same curriculum is presented through a compact Course Navigator that stays collapsed by default, scrolls internally when open, and closes after choosing a unit or lesson. The mobile header keeps primary navigation reachable while moving secondary sound, XP, and reset controls into the menu.

## Performance and code quality

Lesson views, exercises, checkpoints, the grammar cheat sheet, the mistakes notebook, and celebration effects are loaded only when needed. The 108-lesson curriculum is split into 9 parallel unit chunks, reducing the production entry chunk from approximately 741 KB (208 KB gzip) to 235 KB (71 KB gzip) and removing the oversized-chunk warning. Static grammar-reference data is hoisted outside the render path, keyed lesson instances reset local state without state-setting effects, and `pnpm lint` completes with zero warnings.

## Current curriculum scope

The app currently contains 108 interactive lessons across 9 progressive units, with expanded lesson theory, vocabulary, flashcards, exercises, checkpoints, and reference material.

## Data and attribution

Course progression is inspired by [StudySpanish Grammar](https://studyspanish.com/grammar). Explanations, examples, exercises, and product interactions should remain independently authored.
