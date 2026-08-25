#!/usr/bin/env bash
set -euo pipefail

# One-command issue bootstrap for Portfolio Stabilization 2026
# Usage:
#   ./scripts/create_portfolio_issues.sh
# Optional env:
#   GH_REPO=owner/repo ./scripts/create_portfolio_issues.sh

if ! command -v gh >/dev/null 2>&1; then
  echo "Error: GitHub CLI (gh) is not installed."
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Error: gh is not authenticated. Run: gh auth login"
  exit 1
fi

REPO_FLAG=()
if [[ -n "${GH_REPO:-}" ]]; then
  REPO_FLAG=(--repo "$GH_REPO")
fi

ensure_label() {
  local name="$1"
  local color="$2"
  local desc="$3"

  if ! gh label list "${REPO_FLAG[@]}" --limit 500 --search "$name" | grep -E "^${name}[[:space:]]" >/dev/null 2>&1; then
    gh label create "$name" "${REPO_FLAG[@]}" --color "$color" --description "$desc"
    echo "Created label: $name"
  fi
}

# Standard labels used by the plan
ensure_label "portfolio-2026" "1D76DB" "Portfolio stabilization initiative"
ensure_label "bug" "D73A4A" "Bug report or defect"
ensure_label "tech-debt" "C2E0C6" "Code health and maintainability"
ensure_label "docs" "0075CA" "Documentation updates"
ensure_label "test" "5319E7" "Testing-related work"
ensure_label "area-frontend" "FBCA04" "Frontend scope"
ensure_label "area-backend" "0E8A16" "Backend scope"
ensure_label "area-ci" "0052CC" "CI/CD and automation"
ensure_label "area-content" "BFD4F2" "Content and writing"
ensure_label "p0" "B60205" "Highest priority"
ensure_label "p1" "D93F0B" "High priority"
ensure_label "p2" "FBCA04" "Medium priority"
ensure_label "ready" "0E8A16" "Ready for implementation"

create_issue() {
  local title="$1"
  local labels="$2"
  local body="$3"
  local -a label_args=()
  IFS=',' read -r -a label_list <<< "$labels"
  for label in "${label_list[@]}"; do
    label_args+=(--label "$label")
  done

  gh issue create "${REPO_FLAG[@]}" \
    --title "$title" \
    "${label_args[@]}" \
    --body "$body"
}

create_issue \
  "Remove accidental dependency snapshot directory from repository" \
  "portfolio-2026,bug,area-ci,tech-debt,p0,ready" \
"The repository contains an accidental dependency snapshot tree under \`chore: sync pnpm lockfile\`, including thousands of third-party files. This bloats git history and introduces maintenance and licensing risk.

Scope:
- Remove the directory from tracked files.
- Ensure it is ignored going forward.
- Verify workspace and CI still install dependencies from the intended lockfile.

Acceptance Criteria:
- \`chore: sync pnpm lockfile\` no longer exists in the tracked repository tree.
- A guard (gitignore or workflow check) prevents reintroduction of this path.
- Fresh install and build succeed after cleanup.

Priority: P0"

create_issue \
  "Fix contact subject interpolation bug in server action" \
  "portfolio-2026,bug,area-backend,p1,ready" \
"Contact notification subject currently uses a non-interpolated string and sends literal \`\${firstname}\` in messages.

Scope:
- Fix subject construction in \`app/lib/actions/contact.ts\`.
- Add a small test that proves real name interpolation.

Acceptance Criteria:
- Submitted contact form produces subject containing actual first name.
- Test fails before fix and passes after fix.
- No regressions in existing contact form behavior.

Priority: P1"

create_issue \
  "Align contact architecture with static deployment model" \
  "portfolio-2026,tech-debt,area-backend,area-ci,p0,ready" \
"The codebase currently mixes static export assumptions with API-route-based contact logic and a separate mailto flow. Consolidate to one architecture compatible with GitHub Pages static deployment.

Scope:
- Choose static-compatible contact approach as source of truth.
- Remove or archive conflicting path(s).
- Update deploy/build assumptions in config and docs.

Acceptance Criteria:
- Exactly one contact submission path is active in production code.
- \`next.config.ts\` and contact implementation are deployment-compatible.
- User can complete contact flow successfully in deployed static site.

Priority: P0"

create_issue \
  "Refactor broken and duplicated landing layout JSX" \
  "portfolio-2026,bug,area-frontend,p1,ready" \
"Landing content includes duplicated and difficult-to-maintain JSX blocks that increase regression risk.

Scope:
- Consolidate duplicated layout structures in \`LandingContent.tsx\`.
- Preserve intended desktop/mobile output.
- Remove stale commented fragments not tied to active features.

Acceptance Criteria:
- Landing component renders with one coherent layout tree.
- No visual regression on mobile and desktop breakpoints.
- File readability improves with reduced duplication.

Priority: P1"

create_issue \
  "Remove production debug logging and enforce logging policy" \
  "portfolio-2026,tech-debt,area-backend,area-frontend,p1,ready" \
"Debug logs are present in contact, email, and viewport hooks. These logs create noise and potential data exposure.

Scope:
- Remove raw debug \`console\` calls from production paths.
- If logging is needed, gate it by environment and sanitize sensitive values.
- Document logging policy in contribution docs.

Acceptance Criteria:
- No sensitive values are logged in production execution path.
- Debug logs only appear in explicitly enabled development mode.
- Lint/checks enforce or flag future direct debug logging in critical paths.

Priority: P1"

create_issue \
  "Replace invalid dynamic Tailwind class usage in layered vector" \
  "portfolio-2026,bug,area-frontend,p2,ready" \
"Vector component builds Tailwind class names dynamically for aspect ratio, which may not be emitted reliably by Tailwind compilation.

Scope:
- Replace dynamic utility string with static utility or inline style.
- Keep visual behavior consistent across breakpoints.

Acceptance Criteria:
- Aspect ratio is applied consistently in local and production builds.
- No runtime-generated Tailwind class dependency remains for this behavior.
- Visual output matches expected hero layout.

Priority: P2"

create_issue \
  "Activate baseline tests and configure Jest properly" \
  "portfolio-2026,test,area-ci,area-frontend,p1,ready" \
"Test scaffolding exists but active coverage is effectively absent. CI runs tests, but baseline confidence is low.

Scope:
- Add root Jest config and setup compatible with Next.js app routing and aliases.
- Replace commented scaffold with at least core smoke tests.
- Ensure CI executes test step reliably.

Acceptance Criteria:
- Jest runs locally with passing baseline suite.
- CI test step passes on pull requests.
- At least homepage render and one business logic path are covered.

Priority: P1"

create_issue \
  "Tighten ESLint quality rules for dead code and explicit any usage" \
  "portfolio-2026,tech-debt,area-ci,p2,ready" \
"Current lint settings disable key safeguards that catch dead code and unsafe typing patterns.

Scope:
- Re-enable rules for unused variables and explicit \`any\` at warning or error level.
- Fix or suppress existing violations intentionally with rationale.

Acceptance Criteria:
- Lint reports unused and explicit-any issues according to updated policy.
- Existing violations in touched files are resolved or justified.
- CI lint step remains green with the new configuration.

Priority: P2"

create_issue \
  "Fix duplicate property declaration in email template props" \
  "portfolio-2026,bug,area-backend,p2,ready" \
"Email template props include a duplicated property declaration, reducing clarity and maintainability.

Scope:
- Remove duplicate property from \`EmailTemplateProps\`.
- Validate type consumers and route usage still compile.

Acceptance Criteria:
- \`EmailTemplateProps\` defines each field exactly once.
- Typecheck and lint pass for template and route usage.
- No behavior change in rendered email content.

Priority: P2"

create_issue \
  "Refresh README and testing strategy documentation" \
  "portfolio-2026,docs,area-content,area-ci,p2,ready" \
"Project docs are partly boilerplate and not fully aligned with actual scripts, deployment, and testing workflow.

Scope:
- Update \`README.md\` with real setup, scripts, deployment target, and contributor workflow.
- Align \`testing-strategy.md\` with implemented baseline and near-term test plan.

Acceptance Criteria:
- README reflects current stack, commands, and deployment model.
- Testing strategy maps to actual CI-enforced checks.
- New contributor can run install, dev, lint, test, and build from docs alone.

Priority: P2"

echo "Done: created Portfolio Stabilization 2026 issues."
