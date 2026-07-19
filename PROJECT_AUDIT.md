# Project Audit & SEO Roadmap: Dr. Zahida Sadaf Website

## Project Overview
- **Project Name:** ayurveda-website
- **Purpose:** Marketing and booking platform for Dr. Zahida Sadaf, an Ayurvedic-Unani physician specializing in holistic, root-cause healing for chronic conditions.
- **Core Value Proposition:** "Healing is her service—not a business."
- **Target Audience:** Global patients (specifically India, Canada, USA, UK, Australia) seeking natural alternatives for hormonal, metabolic, and skin health.

## Architecture
- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Optimized for Vercel (includes `@vercel/speed-insights`)
- **Key Patterns:** File-system based routing, Client Components for interactive elements (`SiteHeader`), Server-side metadata exports.

## Pages & Routes
| Route | Purpose | Key Content |
| :--- | :--- | :--- |
| `/` | Home | Value prop, principles, high-level services, testimonials |
| `/about` | Biography | Qualifications, healing philosophy, therapeutic methods |
| `/services` | Service Listing | Card grid of treated conditions (PCOS, Thyroid, etc.) |
| `/consultation`| Booking | Step-by-step process, regional pricing, WhatsApp CTA |
| `/contact` | Contact | Contact details, social links, inquiry options |

## Components
- `SiteHeader`: Accessible navigation with mobile toggle and brand identity.
- `SiteFooter`: Global footer with quick links, contact info, and brand statement.
- `page-shell`: Layout utility for centered, responsive content wrapping.

## Existing SEO
- **Canonical URLs:** Global canonical set to `https://drzahidasadaf.com` in root layout (Critical Issue: blocks subpage indexing).
- **Sitemap:** Dynamic `sitemap.ts` configured with priorities (Home: 1.0, Services/Consultation: 0.9, About/Contact: 0.8).
- **Robots.txt:** Dynamic `robots.ts` allowing all but `/api/` and `/_next/`.
- **Internal Linking:** Linear flow from Home/About $\rightarrow$ Services $\rightarrow$ Consultation.

## Existing Metadata
- **Root Metadata:** Defines global titles, descriptions, and keywords centered on Ayurvedic-Unani and PCOS.
- **Open Graph:** Basic OG tags implemented (Title, Description, URL, SiteName). Missing OG images.
- **Twitter:** No specific Twitter metadata implemented.
- **Page-level:** Each page exports a `Metadata` object with unique titles and descriptions.

## Existing Schema
- **Physician Schema:** Implemented as JSON-LD in `layout.tsx`. Includes:
  - Name: Dr. Zahida Sadaf Ayurveda & Unani Wellness
  - Phone: +91 76672 65892
  - Areas Served: India, Canada, US, UK, Australia
  - Services: PCOS, Thyroid, Diabetes, Skin Health, Hijama, Leech Therapy.
  - Hours: Mon-Sat, 09:00-19:00.

## Performance
- **Image Optimization:** Full use of `next/image` with `priority` for LCP elements.
- **Font Loading:** Standard CSS declaration of "Plus Jakarta Sans" (Potential for Layout Shift).
- **Insights:** Vercel Speed Insights integrated.

## Accessibility
- **Language:** `<html lang="en">` defined.
- **Navigation:** Skip-to-content link present; `aria-current` for active links.
- **Interactivity:** Mobile menu uses `aria-expanded` and `aria-controls`.
- **Semantics:** Correct use of HTML5 sections, articles, and figures.

---

## Enterprise Audit Summary
The website is technically sound and visually cohesive but suffers from a critical canonical error and "thin content" on service pages. It lacks the depth of authoritativeness (EEAT) and structural answers (AEO) required to dominate YMYL (Your Money Your Life) medical search results.

### Key Findings:
- **Critical:** Root canonical URL prevents subpages from ranking.
- **High:** Lack of condition-specific detail pages (thin content).
- **High:** Missing FAQ sections for AI Answer Engines (AEO).
- **Medium:** Missing OG images and specialized medical schemas.
- **Medium:** Lack of verifiable credentials and citations on the About page.

---

## Prioritized Implementation Roadmap

### Phase 1: Critical Technical SEO
- **Task:** Implement Dynamic Canonicals.
- **Impact:** Massive (Unblocks indexing).
- **Files:** `app/layout.tsx`, all `page.tsx` files.

### Phase 2: Metadata Optimization
- **Task:** Configure OG Images & Refine Page Metadata.
- **Impact:** High (CTR increase).
- **Files:** `app/layout.tsx`, all `page.tsx` files.

### Phase 3: Advanced Schema Implementation
- **Task:** Add `MedicalCondition`, `Review`, and detailed `LocalBusiness` schema.
- **Impact:** Medium (Rich snippets).
- **Files:** `app/layout.tsx`, `app/services/page.tsx`.

### Phase 4: AEO (Answer Engine Optimization)
- **Task:** Implement FAQ sections and `FAQPage` schema.
- **Impact:** High (Featured snippets).
- **Files:** `app/page.tsx`, `app/services/page.tsx`, `app/consultation/page.tsx`.

### Phase 5: GEO (Generative Engine Optimization)
- **Task:** Integrate citations and evidence-based claims.
- **Impact:** Medium (AI visibility).
- **Files:** `app/about/page.tsx`, `app/services/page.tsx`.

### Phase 6: EEAT (Experience, Expertise, Authoritativeness, Trust)
- **Task:** Add "Credentials" section with verifiable links.
- **Impact:** Medium (Medical trust).
- **Files:** `app/about/page.tsx`.

### Phase 7: Performance & Accessibility
- **Task:** Migrate to `next/font/google` and fix color contrast.
- **Impact:** Low (UX/CWV).
- **Files:** `app/layout.tsx`, `app/globals.css`.

### Phase 8: Content Strategy
- **Task:** Create Service Detail pages and restructure internal linking.
- **Impact:** Massive (Topic Authority).
- **Files:** New routes under `app/services/[slug]/page.tsx`.
