# Sachee Choubey Product Portfolio

A public professional portfolio for Sachee Choubey, a Senior Product Manager. It presents 14 years of experience across Cisco, Eka Software, Wibmo, and MetricStream, along with product leadership skills, case studies, recognition, interactive React demos, writing, and the GitHub project pipeline.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Sample data processed in the browser
- Static-site friendly for Netlify or GitHub Pages

## Run locally

```bash
npm install
npm run build
npm run preview
```

Vite will print a local preview URL such as `http://localhost:4173/`.

On Windows PowerShell, if `npm` is blocked by execution policy, use `npm.cmd` instead:

```bash
npm.cmd install
npm.cmd run build
npm.cmd run preview
```

For live editing during normal local development, you can also use:

```bash
npm.cmd run dev
```

## Build

```bash
npm run build
```

The production files are created in `dist/`.

## Security checks

```bash
npm run security:audit
npm run build
```

The public site is static and has no database, login, admin panel, contact form, server-side API, or embedded secret. Demo text is processed locally in the visitor's browser and is never uploaded. The site also includes a restrictive Content Security Policy, bounded demo inputs, dependency monitoring, and a least-privilege GitHub Pages workflow pinned to immutable action revisions.

## Preview the production build

```bash
npm run preview
```

## Deploy on Netlify

1. Push this folder to a GitHub repository.
2. Create a new Netlify site from that repository.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.

## Deploy on GitHub Pages

This project is already configured for the GitHub Pages repository `coder360-now/Sachee-Portfolio`.

1. Use the GitHub repository named `Sachee-Portfolio`.
2. Push this project to the repository's `main` branch.
3. In GitHub, open Settings -> Pages -> Build and deployment.
4. Select GitHub Actions as the source.
5. The workflow in `.github/workflows/deploy.yml` will build and publish the site.
6. Under Settings -> Pages, enable **Enforce HTTPS**.
7. Protect the `main` branch with pull requests and required status checks so accidental or unauthorized direct pushes cannot publish.

Expected site URL:

```text
https://coder360-now.github.io/Sachee-Portfolio/
```

If you choose a different repository name, update `base` in `vite.config.ts` before building.

## Where to edit content

- Profile, navigation, experience, skills, case studies, recognition details, demo cards, blog posts, upcoming writing, and project pipeline: `src/data/portfolio.ts`
- Homepage layout and hero: `src/pages/Home.tsx`
- About section: `src/pages/About.tsx`
- Product leadership cards: `src/pages/Leadership.tsx`
- Case-study layout: `src/pages/CaseStudies.tsx`
- Demo Lab interactive prototypes: `src/pages/DemoLab.tsx`
- Blog section and article display: `src/pages/Blog.tsx`
- GitHub showcase: `src/pages/GitHubShowcase.tsx`
- Contact and career links: `src/pages/Contact.tsx`
- Rewards and recognition: `src/pages/Recognition.tsx`
- Shared colors and base styling: `src/index.css`
- Hero image asset: `src/assets/hero-product-map.png`

## What to customize first

1. Keep project and writing statuses current in `src/data/portfolio.ts`.
2. Add new case studies, awards, and results as they become available.
3. Add repository links when each pipeline project becomes public.

## Notes

- The Demo Lab uses sample data and browser-based rule logic. It does not call an AI API or send data anywhere.
- The case studies intentionally avoid confidential company data and competitor-heavy framing.
- The copy is designed to sound practical and senior without overclaiming.
- GitHub Pages visitors cannot edit the repository or website. Publishing access remains controlled by GitHub repository permissions, branch protection, account security, and the deployment workflow.
