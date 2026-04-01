# CLAUDE.md — AI Assistant Guide

This is a personal portfolio website for Faizan, an AI Product Engineer. It is a single-page React application built with Vite, TypeScript, Tailwind CSS, and shadcn/ui, with a Supabase Edge Function powering an AI chat feature.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite (SWC plugin) |
| Styling | Tailwind CSS v3 + shadcn/ui (Radix UI) |
| Routing | react-router-dom v6 |
| Forms | react-hook-form + zod |
| Data fetching | @tanstack/react-query |
| Theming | next-themes (dark/light/system) |
| Analytics | PostHog (EU region) |
| Backend | Supabase Edge Functions (Deno) |
| AI Chat | Lovable AI gateway → google/gemini-3-flash-preview |
| Package manager | npm (also has bun.lock — either works) |

---

## Repository Layout

```
faizan-ai-engineer/
├── src/
│   ├── App.tsx                  # Root: providers, router, two routes (/ and *)
│   ├── main.tsx                 # Entry point
│   ├── index.css / App.css      # Global styles, CSS variables for theme tokens
│   ├── vite-env.d.ts
│   ├── pages/
│   │   ├── Index.tsx            # Main page — assembles all sections
│   │   └── NotFound.tsx         # 404 page
│   ├── components/
│   │   ├── Navbar.tsx           # Top navigation
│   │   ├── Hero.tsx             # Landing hero section
│   │   ├── TechStack.tsx        # Tech stack display
│   │   ├── AIAutomation.tsx     # AI/automation work showcase
│   │   ├── Projects.tsx         # Projects grid (uses ProjectCard)
│   │   ├── ProjectCard.tsx      # Individual project card
│   │   ├── ManagerOSSection.tsx # ManagerOS product highlight
│   │   ├── LearningResearch.tsx # Learning & research section
│   │   ├── BeyondCode.tsx       # Personal story / beyond-work section
│   │   ├── Footer.tsx           # Footer with links
│   │   ├── ChatbotInterface.tsx # AI chat panel (streaming SSE)
│   │   ├── FloatingChatButton.tsx # FAB that opens the chat panel
│   │   ├── ContactForm.tsx      # Contact form (tracks via PostHog)
│   │   ├── CursorTrail.tsx      # Decorative cursor trail effect
│   │   ├── UserDetailsPopup.tsx # Delayed popup to capture visitor info
│   │   ├── ResumeViewer.tsx     # Resume display component
│   │   ├── ThemeToggle.tsx      # Dark/light toggle button
│   │   ├── PostHogProvider.tsx  # PostHog pageview tracking with React Router
│   │   └── ui/                  # shadcn/ui primitives (do not hand-edit)
│   ├── hooks/
│   │   ├── use-mobile.tsx       # Breakpoint hook
│   │   └── use-toast.ts         # Toast notification hook
│   ├── lib/
│   │   ├── utils.ts             # cn() helper (clsx + tailwind-merge)
│   │   └── posthog.ts           # PostHog init + default export
│   └── integrations/
│       └── supabase/
│           ├── client.ts        # Supabase client (auto-generated, do not edit)
│           └── types.ts         # Supabase DB types (auto-generated, do not edit)
├── supabase/
│   ├── config.toml              # Supabase project config + function settings
│   └── functions/
│       └── portfolio-chat/
│           └── index.ts         # Deno edge function — AI chat endpoint
├── public/                      # Static assets
├── index.html                   # HTML entry
├── vite.config.ts               # Vite config (port 8080, @ alias → src/)
├── tailwind.config.ts           # Tailwind theme, custom animations
├── tsconfig*.json               # TypeScript configs
├── eslint.config.js             # ESLint flat config
├── components.json              # shadcn/ui config
└── .env                         # Local env vars (see Environment Variables)
```

---

## Environment Variables

Required in `.env` for local development:

```
VITE_SUPABASE_URL=https://<project-id>.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=<anon-key>
VITE_SUPABASE_PROJECT_ID=<project-id>
```

The Supabase Edge Function (`portfolio-chat`) needs `LOVABLE_API_KEY` set as a Supabase secret (not in `.env`).

All `VITE_*` variables are public and bundled into the client — never put secrets here.

---

## Development Workflow

```bash
# Install dependencies
npm install

# Start dev server (localhost:8080)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

There are no tests in this project.

---

## Architecture Notes

### Page structure
`Index.tsx` is a flat assembly of section components rendered in order:
`Navbar → Hero → TechStack → AIAutomation → Projects → ManagerOSSection → LearningResearch → BeyondCode → Footer`

Chat state (`isChatbotOpen`, `hasUnread`) lives in `Index.tsx` and is passed down to `Navbar`, `FloatingChatButton`, and `ChatbotInterface`.

### AI Chat (ChatbotInterface + Edge Function)
- `ChatbotInterface.tsx` calls the Supabase Edge Function at `${VITE_SUPABASE_URL}/functions/v1/portfolio-chat`
- Auth header uses the anon key (`VITE_SUPABASE_PUBLISHABLE_KEY`)
- Streaming: the edge function returns an SSE (`text/event-stream`) that the client parses chunk-by-chunk
- The edge function persona context (`PORTFOLIO_CONTEXT`) defines Faizan's first-person voice — do not alter this without coordinating content changes with the portfolio owner
- Model: `google/gemini-3-flash-preview` via Lovable AI gateway
- JWT verification is disabled for this function (`verify_jwt = false` in `supabase/config.toml`)

### Theming
- CSS custom properties define all color tokens in `src/index.css` (`:root` and `.dark`)
- Tailwind references these via `hsl(var(--token))` in `tailwind.config.ts`
- Theme switching is handled by `next-themes` with `attribute="class"` on `<html>`
- Custom animations: `fade-in`, `slide-up`, `glow`, `wink` — defined in `tailwind.config.ts`

### shadcn/ui
- Components live in `src/components/ui/` and are Radix UI wrappers
- Add new components with: `npx shadcn@latest add <component-name>`
- Do not manually edit generated files in `src/components/ui/` unless fixing a bug

### Path aliases
- `@/` resolves to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`)

### Analytics (PostHog)
- Initialized in `src/lib/posthog.ts`, called from `App.tsx` before render
- `PostHogProvider.tsx` handles manual pageview capture on route changes
- Session recording is enabled with input masking
- Key events tracked: `contact_form_submitted`, `user_details_submitted`, `user_details_popup_shown`, `user_details_popup_closed`

---

## Coding Conventions

- **Language**: TypeScript strict mode throughout — no `any` unless unavoidable
- **Components**: Functional components with hooks; named exports for pages, default exports for components
- **Styling**: Tailwind utility classes only — no inline styles, no CSS modules outside `index.css`/`App.css`
- **Class merging**: Always use `cn()` from `@/lib/utils` when conditionally combining Tailwind classes
- **Forms**: react-hook-form + zod for all forms; define schema with `z.object()` before the component
- **Icons**: lucide-react only
- **Imports**: Use the `@/` alias for all project imports; group external imports above internal ones
- **No test files**: This project has no test infrastructure; do not add tests unless explicitly requested

---

## Supabase Edge Functions

Functions live in `supabase/functions/<name>/index.ts` and run on Deno.

To deploy a function:
```bash
supabase functions deploy portfolio-chat
```

To set secrets used by functions:
```bash
supabase secrets set LOVABLE_API_KEY=<value>
```

The `portfolio-chat` function streams chat completions. It expects a POST body of `{ messages: Array<{role, content}> }` and returns SSE.

---

## Deployment

This project is deployed via **Lovable** (lovable.dev). Pushing to `main` triggers an automatic deploy. The Lovable platform also handles Supabase project provisioning.

For manual deployment of the static frontend, `npm run build` produces a `dist/` folder suitable for any static host.

---

## Key Files Quick Reference

| What you want to change | File |
|---|---|
| Page sections order/layout | `src/pages/Index.tsx` |
| Chat persona / AI context | `supabase/functions/portfolio-chat/index.ts` |
| Color tokens / dark mode | `src/index.css` |
| Custom Tailwind animations | `tailwind.config.ts` |
| Analytics events | Any component importing `posthog` from `@/lib/posthog` |
| Supabase client config | `src/integrations/supabase/client.ts` (auto-generated) |
| shadcn/ui component config | `components.json` |
| Dev server port | `vite.config.ts` (default: 8080) |
