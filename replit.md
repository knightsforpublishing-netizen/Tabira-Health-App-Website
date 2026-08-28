# Tabira Health App Website

A bilingual English/Arabic marketing and legal website for Tabira, a privacy-minded medication reminder and organization app.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/tabira-website/` — deployable React + Vite website
- `artifacts/tabira-website/src/App.tsx` — base-aware route map and document metadata
- `artifacts/tabira-website/src/pages/landing.tsx` — localized landing page, navigation, and footer
- `artifacts/tabira-website/src/pages/legal.tsx` — bilingual Privacy Policy and Terms of Service pages
- `artifacts/tabira-website/src/index.css` — shared Tajawal typography, light/dark tokens, responsive styles
- `artifacts/tabira-website/public/assets/tabira-icon.png` — Tabira brand/app icon

## Architecture decisions

- The website is frontend-only; app download actions link directly to the Google Play listing for `com.tabira.app`.
- Language is route-based (`/en`, `/ar`, and localized legal paths), with RTL applied to Arabic pages.
- Theme preference is stored in `localStorage` so the light/dark choice persists across routes.
- Legal page content follows the published Tabira source at `tabira.xyz`, including the non-medical disclaimer and local-storage/analytics disclosures.

## Product

- Introduces Tabira Labs and the Tabira medication reminder app.
- Supports English and Arabic landing pages with Google Play calls to action.
- Includes responsive product messaging, values, how-it-works content, contact details, and localized Privacy Policy and Terms of Service pages.
- Provides accessible theme and language controls plus a localized not-found page.

## User preferences

- Use Tajawal for both English and Arabic.
- Keep the visual identity connected to the supplied mint capsule icon and Tabira Labs brand direction.

## Gotchas

- Keep local asset URLs prefixed with `import.meta.env.BASE_URL` so the website works at its artifact preview path.
- Legal pages intentionally repeat the source site's reminder reliability and non-medical limitations; do not remove these disclaimers when editing copy.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
