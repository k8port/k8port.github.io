# Testing Strategy

This document reflects the current implemented baseline and CI-enforced checks.

## Current baseline

- Test runner: Jest 29
- Environment: `jsdom`
- Transform: `ts-jest` with ESM preset
- Assertions: `@testing-library/jest-dom`
- Location pattern: `app/**/__tests__/**/*.test.(ts|tsx|js|jsx)`

Config source:

- [jest.config.mjs](jest.config.mjs)
- [jest.setup.ts](jest.setup.ts)

## Existing test coverage (baseline)

Current committed baseline tests include:

- page render smoke check: [app/__tests__/page.test.tsx](app/__tests__/page.test.tsx)
- blend mode helper behavior: [app/lib/actions/__tests__/blendMode.test.ts](app/lib/actions/__tests__/blendMode.test.ts)
- contact mailto transport URL behavior: [app/lib/contact/__tests__/transport.test.ts](app/lib/contact/__tests__/transport.test.ts)

These validate basic rendering and key utility/action behavior without introducing fragile snapshot coupling.

## CI-enforced checks

PRs to `main` run tests in GitHub Actions:

- workflow: [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml)
- command: `pnpm test:ci`

`test:ci` currently maps to:

```bash
jest --ci --runInBand
```

## Local developer workflow

Recommended local verification before opening a PR:

```bash
pnpm lint
pnpm test:ci
pnpm build
```

For active test development:

```bash
pnpm test:watch
```

For cache resets while troubleshooting:

```bash
pnpm test:clear
```

## Near-term test plan

1. Add focused tests for contact form state transitions and submission outcomes (success/error).
2. Add tests for route and transport boundaries where behavior was recently refactored.
3. Expand utility-level tests for data adapters and rendering helpers with deterministic fixtures.
4. Keep tests behavior-oriented and avoid broad snapshot-only coverage.

## Quality principles

1. Prefer deterministic tests over timing-dependent assertions.
2. Keep each test scoped to one behavior.
3. Mock external boundaries only (network/services), not internal logic under test.
4. Update docs and tests together when behavior changes.
