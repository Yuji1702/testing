# Ayurveda Wellness Website

## Overview
This repository powers the marketing site for **Dr. Zahida Sadaf**, an Ayurvedic–Unani physician who delivers holistic, root-cause healing plans. The site highlights her principles, global consultation process, regional pricing, and natural therapies such as Hijama, leech therapy, yoga, and personalized herbal formulations. It is built with the Next.js App Router so each route renders quickly, remains SEO friendly, and is ready for deployment on any Node.js host.

## Tech stack
- [Next.js 14](https://nextjs.org/docs) with the App Router and file-system based routing
- [TypeScript](https://www.typescriptlang.org/) for static typing and editor tooling
- [Tailwind CSS v4](https://tailwindcss.com/) utilities plus a light layer of custom globals for forms and typography
- SVG illustration assets served from `public/`

## Project structure
| Path | Purpose |
| --- | --- |
| `app/layout.tsx` | Configures global metadata, injects structured data for search engines, renders the shared header/footer, and exposes the skip link for accessibility. |
| `app/page.tsx` | Home page hero with “Your Online Health Consultant” messaging, principles, services, and testimonials tailored to Dr. Sadaf’s practice. |
| `app/about/page.tsx` | Detailed biography describing qualifications, healing philosophy, and therapy modalities with supporting imagery. |
| `app/services/page.tsx` | Card grid covering PCOS/PCOD, thyroid, diabetes, hormonal balance, skin wellness, and detox programs, each linked to booking. |
| `app/consultation/page.tsx` | Step-by-step booking flow, regional pricing table, WhatsApp link, and an intake form that gathers name, contact details, location, and health concerns. |
| `app/contact/page.tsx` | Contact options, social links, and a general inquiry form for collaborations or follow-up questions. |
| `app/globals.css` | Sets theme tokens, form styles, selection colors, and responsive section padding shared by every page. |
| `components/site-header.tsx` | Client component that renders the brand identity, accessible desktop navigation, and a mobile menu toggle. |
| `components/site-footer.tsx` | Global footer with quick links, contact information, and the core brand statement. |
| `public/dr-zahida-sadaf-portrait.svg` | Accessible illustration used on multiple pages to reinforce the holistic brand. |

## Helpful scripts
Run commands from the project root:
- `npm run dev` – Starts a hot-reloading dev server at [http://localhost:3000](http://localhost:3000).
- `npm run build` – Generates an optimized production build.
- `npm run start` – Serves the last production build locally for smoke testing.
- `npm run lint` – Lints the entire codebase using the shared ESLint configuration.

## Getting started
1. Install dependencies with `npm install`.
2. Launch the dev server using `npm run dev`.
3. Edit files under `app/` or `components/`. Every major section includes concise comments so newcomers can navigate quickly.
4. Before deploying, run `npm run lint` and `npm run build` to verify code quality and bundle health.

## Accessibility & SEO notes
- Every page defines page-specific `<title>` and `<meta name="description">` entries via Next.js metadata exports.
- The root layout adds [Schema.org Physician](https://schema.org/Physician) JSON-LD to improve search discoverability.
- Forms use semantic `<label>` elements, required states, and autocomplete hints for better usability.
- Responsive navigation supports keyboard focus, skip links, and a mobile toggle so the experience remains inclusive on all devices.
