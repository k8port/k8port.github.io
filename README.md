# k8port.github.io

Personal portfolio site built with Next.js App Router, TypeScript, Tailwind CSS, and static export deployment.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9 + Prettier
- Jest + Testing Library
- pnpm

## Prerequisites

- Node.js >= 22 and < 26
- Corepack enabled (recommended)

## Local setup

```bash
corepack enable
corepack prepare pnpm@10.10.0 --activate
pnpm install
```

## Run locally

```bash
pnpm dev
```

App runs at http://localhost:3000.

## Commands

- `pnpm dev`: start local dev server
- `pnpm lint`: run ESLint
- `pnpm lint:fix`: auto-fix lint issues when possible
- `pnpm test`: run Jest tests
- `pnpm test:ci`: run Jest in CI mode (`--ci --runInBand`)
- `pnpm test:coverage`: run tests with coverage output
- `pnpm build`: production build (static export enabled)
- `pnpm start`: serve production build output
- `pnpm format`: run Prettier for app/styles files

## Deployment model

Deployment target is GitHub Pages via GitHub Actions workflow in [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml).

Key behavior:

- `next.config.ts` sets `output: 'export'` and `images.unoptimized: true`
- `pnpm build` produces static export artifacts in `out/`
- Workflow uploads `out/` on pushes to `main`

## Testing and quality gates

Pull requests to `main` run the workflow job that executes:

1. `pnpm install`
2. `pnpm build`
3. `pnpm test:ci`

Keep local checks aligned with CI:

```bash
pnpm lint
pnpm test:ci
pnpm build
```

## Contributor workflow

1. Create a branch from `main`
2. Implement a scoped change
3. Run local checks: lint, tests, build
4. Push branch and open PR into `main`
5. Merge after CI is green

Example:

```bash
git checkout main
git pull --ff-only origin main
git checkout -b feat/your-change

pnpm lint
pnpm test:ci
pnpm build

git add -A
git commit -m "feat: your change summary"
git push -u origin feat/your-change
```

## Notes

- The legacy API contact route is intentionally deprecated; current contact flow uses mailto transport.
- Jest config is ESM-based in [jest.config.mjs](jest.config.mjs).
