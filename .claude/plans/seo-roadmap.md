# SEO & Accessibility Implementation Roadmap: Dr. Zahida Sadaf Website

This roadmap translates the enterprise audit into a phased execution plan, prioritized by **Impact vs. Risk**.

## Execution Principles
- **Impact First:** Critical technical blockers (Canonical URLs) are handled immediately.
- **Low Risk First:** Metadata and Schema changes are prioritized over content structural changes.
- **No Refactoring:** Changes are additive or corrective, avoiding any change to core business logic.

---

## Phase 1: Critical Technical SEO
**Goal:** Unblock search engine indexing of subpages.
**Estimated Effort:** Low

| Task | Why | Expected SEO Impact | Risk |
| :--- | :--- | :--- | :--- |
| **Implement Dynamic Canonicals** | Remove global canonical from `layout.tsx` and add page-specific canonicals to all routes. | **Massive**: Enables subpages (`/about`, `/services`, etc.) to rank independently. | Low |

---

## Phase 2: Metadata Optimization
**Goal:** Improve click-through rates (CTR) from search and social discovery.
**Estimated Effort:** Low

| Task | Why | Expected SEO Impact | Risk |
| :--- | :--- | :--- | :--- |
| **Configure OG Images** | Add high-resolution branded images to the global metadata object. | **High**: Prevents generic previews; increases social referral traffic. | Low |
| **Refine Page Metadata** | Review and tune title/description tags for optimal keyword density (PCOS, Thyroid). | **Medium**: Improves SERP click-through rates. | Low |

---

## Phase 3: Advanced Schema Implementation
**Goal:** Secure rich snippets (stars, conditions) to stand out in search results.
**Estimated Effort:** Low

| Task | Why | Expected SEO Impact | Risk |
| :--- | :--- | :--- | :--- |
| **MedicalCondition Schema** | Add specialized schema to the Services page for each condition treated. | **Medium**: Enables "Rich Result" snippets for specific health queries. | Low |
| **Review/Rating Schema** | Implement `Review` schema for existing testimonials. | **Medium**: Adds star ratings to search results, increasing trust/CTR. | Low |
| **Local Business Detail** | Enhance `Physician` schema with a specific physical address and coordinates. | **Low/Medium**: Improves Local Pack/Google Maps visibility. | Low |

---

## Phase 4: AEO (Answer Engine Optimization)
**Goal:** Capture "Position Zero" (Featured Snippets) and AI-generated summaries.
**Estimated Effort:** Medium

| Task | Why | Expected SEO Impact | Risk |
| :--- | :--- | :--- | :--- |
| **Implement FAQ Sections** | Add Q&A sections to Home, Services, and Consultation pages. | **High**: Directly targets "People Also Ask" and AI answer engines. | Low |
| **FAQPage Schema** | Wrap FAQ content in `FAQPage` structured data. | **High**: Increases likelihood of expandable FAQ results in SERPs. | Low |

---

## Phase 5: GEO (Generative Engine Optimization)
**Goal:** Improve visibility in AI-driven research (Perplexity, Gemini, SGE).
**Estimated Effort:** Medium

| Task | Why | Expected SEO Impact | Risk |
| :--- | :--- | :--- | :--- |
| **Integrate Citations** | Add references to authoritative Unani/Ayurvedic texts and modern medical standards. | **Medium**: Signals "Factuality" and "Authoritativeness" to AI models. | Low |
| **Evidence-Based Claims** | Update treatment descriptions with specific data points or standard medical markers. | **Medium**: Increases "Confidence Score" for generative AI summaries. | Low |

---

## Phase 6: EEAT (Experience, Expertise, Authoritativeness, Trust)
**Goal:** Establish medical authority and patient trust.
**Estimated Effort:** Low

| Task | Why | Expected SEO Impact | Risk |
| :--- | :--- | :--- | :--- |
| **Verification Section** | Add a "Credentials" section to the About page with links to certifications/registries. | **Medium**: Crucial for YMYL (Your Money Your Life) health categories. | Low |

---

## Phase 7: Performance & Accessibility
**Goal:** Perfect the user experience and meet WCAG standards.
**Estimated Effort:** Low

| Task | Why | Expected SEO Impact | Risk |
| :--- | :--- | :--- | :--- |
| **Optimize Font Loading** | Migrate "Plus Jakarta Sans" to `next/font/google`. | **Low**: Reduces CLS (Cumulative Layout Shift) for better CWV. | Low |
| **Fix Color Contrast** | Adjust `earth-700` to meet WCAG AA accessibility standards. | **Low**: Ensures inclusivity and prevents accessibility penalties. | Low |

---

## Phase 8: Content Strategy (The Growth Engine)
**Goal:** Capture top-of-funnel traffic and establish long-term dominance.
**Estimated Effort:** High

| Task | Why | Expected SEO Impact | Risk |
| :--- | :--- | :--- | :--- |
| **Service Detail Pages** | Create dedicated pages for each core condition (e.g., `/services/pcos`). | **Massive**: Transforms "Thin Content" into high-authority landing pages. | Medium |
| **Internal Link Restructuring** | Link Home $\rightarrow$ Service Detail $\rightarrow$ Consultation (Topic Clustering). | **High**: Distributes PageRank and signals deep topic authority. | Low |
| **Educational Blog/Library** | Implement a "Knowledge Base" for long-tail medical queries. | **High**: Captures informational intent and builds long-term EEAT. | Medium |
