# Shivam Mahajan — Analytics Engineer Portfolio

Old-money executive analytics portfolio for BI, analytics engineering, data platform, and product analytics hiring loops.

## Project Overview

This portfolio is the front door to Shivam Mahajan's analytics ecosystem. It packages streaming, retail, and operations projects as executive-ready data products rather than isolated dashboard screenshots.

## Business Impact

- Positions portfolio work around recruiter-visible outcomes: KPI design, SQL depth, BI storytelling, ML experimentation, and deployment discipline.
- Connects 218K+ modeled events across multiple business domains.
- Presents each case study with business context, technical stack, and measurable impact.

## Features

- Animated hero with portfolio command-center metrics.
- Featured project cards for Netflix, E-Commerce, and Food Delivery analytics.
- Operating model section explaining the data-to-dashboard architecture.
- Skill system grouped by analytics engineering, BI, data science, and product engineering.
- Mobile-first responsive layout with reduced-motion accessibility support.
- SEO metadata, OpenGraph, Twitter metadata, dark theme viewport, and production-focused Next.js config.

## Architecture

```txt
Data sources / synthetic business data
  → SQL exploration + metric modeling
  → Python notebooks + ML experiments
  → BI / Streamlit / Next.js presentation layers
  → Recruiter-ready portfolio boardroom
```

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- CSS design system using Inter + Manrope
- Vercel-ready static production build

## Screenshots

Add production screenshots after deployment:

- `public/screenshots/home.png`
- `public/screenshots/projects.png`
- `public/screenshots/mobile.png`

## Installation Guide

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deployment Guide

```bash
npm run build
```

Deploy on Vercel using the repository root. The app is static-first and optimized for fast portfolio loads.

## Performance Notes

- First-load JS is kept lean by using CSS-driven UI instead of heavy animation/chart libraries on the portfolio shell.
- `poweredByHeader` is disabled.
- `outputFileTracingRoot` is pinned to avoid multi-lockfile workspace ambiguity.
- Reduced-motion media query disables decorative pointer/motion for accessibility.

## Future Roadmap

- Add live screenshots and OpenGraph image assets.
- Add individual case-study routes for each analytics project.
- Add Lighthouse CI and accessibility checks.
- Add project-level schema metadata and richer recruiter CTAs.

## Resume Value

Demonstrates product-minded analytics delivery: business framing, metric architecture, executive UI design, frontend deployment, and clear communication of impact.
