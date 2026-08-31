# ¡Claro! Spanish Grammar

An interactive Spanish grammar learning app inspired by the topic progression on StudySpanish. It includes 9 units, lesson theory, practice quizzes, flashcards, vocabulary, unit checkpoints, a grammar cheat sheet, and a mistakes notebook.

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
- `?unit=9&lesson=u9-l96`
- `?unit=9&tab=cheatsheet`
- `?unit=8&checkpoint=1`

## Accessibility

Core learning flows are keyboard and screen-reader friendly: lesson cards and roadmap rows use semantic buttons, lesson sections expose a tablist with arrow-key navigation, progress and feedback announce their state, and destructive actions use accessible in-app confirmation dialogs with focus trapping, Escape handling, and focus restoration. The app also includes a skip link, visible focus styles, reduced-motion support, and explicit labels for icon-only controls.

## Performance and code quality

Lesson content, exercises, checkpoints, the grammar cheat sheet, the mistakes notebook, and celebration effects are loaded only when needed. The production entry chunk is approximately 444 KB (129 KB gzip), down from approximately 550 KB (153 KB gzip), and the production build no longer emits the oversized-chunk warning. Exercise state is reset through keyed component instances instead of state-setting effects, and `pnpm lint` completes with zero warnings.

## Current curriculum scope

The app currently contains 78 interactive lessons across 9 units. Units 1–5 closely follow the corresponding StudySpanish topic sequence. Units 6–9 are clearly labeled as condensed selections, and their visible topic numbers are mapped to the corresponding source topics without changing stable internal IDs.

## Data and attribution

Course progression is inspired by [StudySpanish Grammar](https://studyspanish.com/grammar). Explanations, examples, exercises, and product interactions should remain independently authored.
