# 🚀 PROJECT BRIEF — Abir Rouag's Portfolio ("The Insight Dashboard")

> **Instructions for Antigravity agent:** Build a complete, production-ready, single-page personal portfolio website from this brief. Plan first (produce an implementation plan artifact), then build, then run it in the browser and verify every acceptance criterion at the bottom. Do not invent facts, metrics, employers or links that are not in this document. Where a link is unknown, use a clearly marked `TODO` placeholder in a single `content.ts` / `content.json` file so it is trivial to edit.

---

## 1. Goal & Audience

**Goal:** Convince a recruiter / hiring manager in **under 30 seconds** that Abir is a strong **Business Analyst / Data & BI intern**, and give them a reason to keep exploring for 3 minutes.

**Primary audience:** Recruiters and hiring managers at international / global organizations (Business Analyst, Data Analyst, BI, Change/Transformation internships).
**Secondary audience:** Technical reviewers who open the GitHub projects.

**Positioning statement (use as hero subtitle):**
> *Telecom engineer turned data & business analyst. I turn messy data and unclear requirements into decisions teams can trust.*

**Target role:** Business Analyst internship, supporting change in a global organization.

---

## 2. Creative Concept — "The Insight Dashboard"

The portfolio **is itself a BI dashboard**. Recruiters should feel like they are opening a well-designed Power BI report about a person — not a generic template.

**Core metaphors**
- Sections = dashboard "pages" / tiles with KPI cards.
- Career = a **data pipeline** (Source → Transform → Insight): Telecom Engineering → Procurement & Operations → Leadership/Audit → Data & BI.
- Skills = a **star schema** diagram (Business Analysis at the center fact table, with dimension tables for Data, BI, Engineering, Tools).
- Projects = **case studies with real result numbers** presented as big KPI cards and mini-charts.

**Memorable "wow" moments (must implement)**
1. **Hero KPI strip** that animates (count-up) on load: `4 data sources unified`, `5 KPIs tracked`, `776K purchase events analyzed`, `200+ candidates recruited`, `120+ member organization led`, `4 languages`.
2. **Interactive funnel** in the Marketing project: hover/tap shows Paid Search 13.3% vs Social 5.8% (2.3x) and 11 vs 34 days to close (3x faster).
3. **"Career as a Pipeline" timeline**: horizontal on desktop, vertical on mobile, with nodes labelled *Extract → Transform → Load → Insight* mapping her story.
4. **Command palette (⌘K / Ctrl+K)** to jump to any section, project, or action ("Download CV", "Email Abir", "Open GitHub").
5. **Light/Dark theme toggle** (dark = default), remembered in localStorage (wrapped in try/catch).
6. **Subtle "data-noise" background**: very light animated grid / sparkline particles that react to the cursor, disabled when `prefers-reduced-motion`.
7. **Recruiter Mode toggle** (top-right): collapses the site into a clean, one-screen **"60-second summary"** (role, 6 KPIs, top 3 projects, contact buttons, CV download). Great for busy recruiters.

---

## 3. Visual Identity

| Element | Direction |
|---|---|
| **Mood** | Confident, modern, analytical, warm. Not corporate-boring, not gimmicky. |
| **Palette (dark)** | Background `#0B1020`, surface `#121A33`, border `#223055`, text `#E8ECF8`, muted `#9AA7C7` |
| **Accent 1** | Electric teal `#2DD4BF` (insight / positive) |
| **Accent 2** | Warm amber `#F59E0B` (highlight / KPI) |
| **Accent 3** | Soft violet `#8B5CF6` (secondary charts) |
| **Palette (light)** | Background `#F7F8FC`, surface `#FFFFFF`, text `#0B1020`, same accents slightly deepened for contrast |
| **Typography** | Headings: **Space Grotesk** or **Sora**. Body: **Inter**. Numbers/KPIs/code: **JetBrains Mono**. (Google Fonts, with system fallbacks.) |
| **Shape language** | 16–20px rounded cards, thin 1px borders, soft glow on hover, generous whitespace |
| **Iconography** | Lucide icons only, consistent stroke width |
| **Imagery** | No stock photos. Use a circular avatar placeholder (`TODO: /assets/abir.jpg`) with initials "AR" fallback. |

Define all colors as CSS variables / design tokens. Ensure WCAG AA contrast in both themes.

---

## 4. Tech Stack (suggested — adjust only with good reason)

- **Framework:** Next.js (App Router) + TypeScript, **static export** (deployable to Vercel / GitHub Pages / Netlify)
- **Styling:** Tailwind CSS + CSS variables for theming
- **Animation:** Framer Motion (scroll reveals, count-up, layout transitions)
- **Charts:** Recharts (or lightweight inline SVG) for funnel, KPI sparklines, skills radar
- **Command palette:** `cmdk`
- **Content:** all copy in one file `src/content/content.ts` (typed), so the owner edits text in one place
- **SEO:** metadata, Open Graph image (generate a dashboard-style OG card), `sitemap`, `robots`, JSON-LD `Person` schema
- **Analytics:** none by default (optional privacy-friendly Plausible placeholder)
- **Contact form:** `mailto:` button + optional Formspree endpoint placeholder (`TODO`)

Performance targets: Lighthouse ≥ 95 (Performance, Accessibility, Best Practices, SEO), LCP < 2s, no layout shift, images lazy-loaded, fonts `display=swap`.

---

## 5. Site Structure & Content

Sticky top nav: **Home · About · Experience · Projects · Skills · Leadership · Education · Contact**, plus theme toggle, Recruiter Mode toggle, ⌘K hint, and a **"Download CV"** button (links to `/assets/Abir_Rouag_CV.pdf`, `TODO: add file`).

### 5.1 Hero
- Small label: `IT Engineering Student · Business Analyst · Data & BI`
- H1: **Abir Rouag**
- Subtitle: *Telecom engineer turned data & business analyst. I turn messy data and unclear requirements into decisions teams can trust.*
- Location chip: 📍 Sousse, Tunisia · Open to international internships
- CTAs: **View Projects** (primary) · **Download CV** · **Contact me**
- Social icons: GitHub (`github.com/abirrouag`), Email (`rouagabir@gmail.com`), LinkedIn (`TODO`)
- Animated **KPI strip** (see §2).
- Right side (desktop): a stylized mini-dashboard card showing a sparkline, a donut, and 3 KPIs (CAC, ROAS, Conversion) as decorative, clearly labelled "Illustrative".

### 5.2 About
Use this text (light editing allowed, no new facts):
> Enrolled IT engineering student with a telecommunications engineering background and hands-on experience in data gathering, data analysis and reporting for business teams. Experienced in requirements and gap analysis, process audit, Power BI dashboards and stakeholder communication in international teams. Seeking a Business Analyst internship to support change in a global organization.

Add a **"What I bring"** 3-card row:
1. **Requirements & Gap Analysis** — translating business needs into clear specs.
2. **Data → Decisions** — ETL, SQL, Power BI, KPI reporting.
3. **Process & Control** — internal audits, risk identification, corrective actions.

Add a **"Languages"** mini-widget with proficiency bars: Arabic (native), French (fluent), English (fluent), Turkish (intermediate).

### 5.3 Experience — "Career as a Pipeline"
Interactive timeline. Each item expands to show bullets. Newest first.

**Marketing Data & BI Analyst — Popup Company, Sousse** · Jun 2026 – Sep 2026 *(tag: Transform → Insight)*
- Consolidated 4 data sources (GA4, Meta Ads, LinkedIn Ads, CRM) through ETL pipelines into one multi-channel view, replacing manual reporting.
- Analyzed campaigns, attribution and A/B tests to evaluate performance and guide budget allocation.
- Designed Power BI and Looker Studio dashboards tracking 5 KPIs (CAC, LTV, ROAS, CTR, conversion rate) and presented recommendations to management.
- **Result:** gave stakeholders one reliable view of channel performance, enabling faster, data-backed budget decisions.
- Tech chips: GA4 · Meta Ads · LinkedIn Ads · CRM · ETL · Power BI · Looker Studio

**International Buyer — OZEOL** · Mar 2024 – Oct 2024
- Negotiated prices, delivery terms and contracts with suppliers across 2 countries (China, India); tracked supplier performance in Excel and CRM.

**Network Engineering Intern — Tunisie Telecom** · Jan 2023 – Jun 2023
- Analyzed requirements and constraints and contributed to the design of an FTTX/GPON network for a residential subdivision in Sousse.

**Platform Enhancement Intern — GoMyCode** · Jul 2022 – Aug 2022
- Improved usability and functionality of the HR development section of the company website; tested features with the team.

### 5.4 Projects — "Case Studies"
Three large project cards. Each opens a **case-study modal / dedicated section** with: *Problem → Approach → Stack → Result*. Show a **"GitHub" button** (`TODO: exact repo URL under github.com/abirrouag`) and a **"Live demo"** button only if a URL is provided (else hide).

**1. Marketing Funnel & Revenue Analytics** — *PostgreSQL · Power BI · FastAPI*
- Finding: Paid Search converted **13.3% vs 5.8%** for Social (**2.3x**) and closed in **11 vs 34 days** (**3x faster**).
- Built a dashboard and a **budget simulator**.
- Visual: interactive funnel + two comparison bars (conversion rate, days to close).

**2. Procurement Analytics & Budget Variance Automation** — *PostgreSQL · dbt · Power BI*
- Star schema on **~420K purchase-order lines**.
- **40+ DAX measures** (OTIF, price variance, supplier concentration).
- Duplicate, outlier and **Benford's law** checks to flag unusual spending.
- Visual: stylized star-schema diagram (fact table in center, dimension tables around it).

**3. Customer Churn & Lifetime Value Prediction** — *Python · LightGBM · SHAP*
- Cleaned **1.07M transactions** into **776K purchase events** (**5,852 customers**).
- Predicted **90-day churn** from RFM features with **time-based splits**.
- Explained drivers with **SHAP** and defined a **retention targeting rule**.
- Visual: simple pipeline diagram (Raw → Clean → RFM → Model → SHAP → Rule).

Add filter chips above projects: `All · BI · Data Engineering · ML · Marketing · Procurement`.

### 5.5 Skills — "Star Schema" visual
Center node: **Business Analysis**. Surrounding dimension nodes (click to expand):
- **Business Analysis:** data gathering, requirements & gap analysis, process audit, solution design, testing, KPI reporting, stakeholder management
- **Data & Analytics:** Python (Pandas, Scikit-learn, XGBoost, LightGBM), SQL (PostgreSQL), EDA, predictive modeling, A/B testing, attribution
- **BI & Visualization:** Power BI (DAX), Looker Studio, Streamlit, Plotly, Excel
- **Data Engineering & Tools:** ETL, star schema, dbt, data-quality validation, GA4, Git/GitHub, Docker, GitHub Actions

Fallback / mobile: a clean grouped chip layout. Do **not** show fake percentage skill bars.

**Certifications strip:**
- Power BI for Beginners — Certificate No. 10853438 — Oct 2026
- Microsoft Power BI Data Analyst (PL-300) — *in preparation, 2026* (show as "In progress" badge)

### 5.6 Leadership & Associative Experience — "Beyond the Data"
Intro line: *"Leading teams, budgets and people across international student organizations — the soft skills behind every analysis."*

Show as filterable cards (`Finance & Audit · People & Recruitment · Marketing & Communication`):

**AIESEC in Sousse**
- **Vice President, Finance & Legalities** (Nov 2023 – Jan 2025): Led budgeting, financial reporting, compliance and internal controls for a **120+ member** organization, overseeing event budgets **exceeding 20,000 TND**. Coordinated finance, HR and operations across **11+ events**, including Global Village, TEDx and MeetUP PRO.
- **Audit Manager** (Feb 2024 – Feb 2025): Conducted internal audits, reviewed financial records and journals, identified process gaps and risks, and recommended corrective actions to strengthen internal controls and compliance.
- **Finance & Legalities Manager** (Feb 2023 – Feb 2024): Managed budgeting, financial reporting and compliance while coordinating with cross-functional teams to support event planning, resource allocation and delivery.
- **Recruitment Manager** (Oct 2022 – Feb 2025): Managed recruitment campaigns and candidate outreach, overseeing screening, interviewing and onboarding for **200+ candidates**.

**AIESEC Canada — Entity Support Team**
- **Social Media Manager** (Jul 2023 – Dec 2024): Managed content planning, publishing and audience engagement, collaborating remotely with international teams.

**Other organizations**
- **Vice President, Marketing & HR — Hult Prize, ISITCOM Sousse** (2023): Led recruitment, team selection, promotional strategy and internal communication.
- **Vice President, Marketing & PR — Youth Speak** (Sep 2022 – Jan 2023): Coordinated speaker and sponsor outreach; planned and executed campaigns for an event attracting **1,000+ attendees**.
- **Vice President, Marketing — Enactus** (2022): Developed marketing plans for projects, defining target audiences, promotional strategies, channels and campaign activities.

Highlight a **"Why it matters for a BA"** callout: audit → process gap analysis; finance → KPI & budget discipline; recruitment → stakeholder communication at scale; international teams → remote cross-cultural collaboration.

### 5.7 Education
- **Engineering Degree in Computer Science (in progress)** — Polytechnic University of Sousse, 2023 – Present
- **Engineering Degree in Telecommunications** — ISITCOM Sousse, 2020 – 2023

### 5.8 Contact
- Headline: **"Let's turn your data into decisions."**
- Email button (`rouagabir@gmail.com`), phone `+216 24 855 142` (click-to-call, with a small "copy" action), GitHub, LinkedIn (`TODO`).
- Simple contact form (name, email, message) wired to `TODO` Formspree/Netlify endpoint with graceful `mailto:` fallback.
- Availability badge: 🟢 *Available for Business Analyst internships (global / remote-friendly).*

### 5.9 Footer
Minimal: © 2026 Abir Rouag · "Built with curiosity and a lot of coffee ☕" · back-to-top.

---

## 6. UX & Interaction Rules

- **Scroll reveals:** fade/slide-up, 300–500ms, stagger children; run once.
- **Count-up numbers** trigger on viewport entry.
- **Hover:** cards lift 4px with soft teal glow; buttons have a subtle shine.
- **Sticky nav** highlights the active section (IntersectionObserver).
- **Smooth scroll** with offset for sticky nav.
- **Keyboard:** full tab order, visible focus rings, `Esc` closes modals/palette.
- **Mobile-first:** design at 375px first, then 768, 1024, 1440. No horizontal scroll. Large tap targets (≥ 44px).
- **`prefers-reduced-motion`:** disable parallax, particles and count-up animation (show final values).
- **Theme:** respect `prefers-color-scheme` on first visit; toggle persists.
- Custom 404 page with a playful data joke.

---

## 7. Copy & Tone

- First person, concise, confident, results-first. Max 2 lines per bullet where possible.
- Lead with **impact numbers** (bold them).
- Avoid buzzword soup and clichés ("passionate", "hard-working", "team player").
- Keep every number exactly as written in this brief.

---

## 8. Accessibility & SEO

- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`), one `h1`.
- All charts have text alternatives (`aria-label` + visually-hidden data table).
- Color is never the only carrier of meaning.
- `<title>`: *Abir Rouag — Business Analyst & Data/BI | Portfolio*
- Meta description: *IT engineering student and data/BI analyst. Power BI, SQL, Python, requirements & gap analysis. Open to Business Analyst internships worldwide.*
- Open Graph + Twitter card image (1200×630, dashboard style).
- JSON-LD `Person` with name, jobTitle, address (Sousse, Tunisia), sameAs (GitHub/LinkedIn).

---

## 9. Deliverables

1. Complete source code in a clean repo structure with `README.md` (setup, run, build, deploy steps, **how to edit content in `content.ts`**).
2. `content.ts` as the single source of truth for all text, links and numbers.
3. `/public/assets/` with placeholders: `abir.jpg`, `Abir_Rouag_CV.pdf`, `og-image.png`, favicon.
4. Deployment config for **Vercel** (primary) and a GitHub Pages workflow (optional).
5. A short `TODO.md` listing every placeholder the owner must fill (LinkedIn URL, repo URLs, photo, CV PDF, form endpoint, demo links).

---

## 10. Acceptance Criteria (verify in the browser before finishing)

- [ ] Hero + KPI strip visible above the fold on 375px and 1440px screens.
- [ ] All figures exactly match this brief (13.3% vs 5.8%, 2.3x, 11 vs 34 days, ~420K, 40+, 1.07M → 776K, 5,852, 120+, 20,000 TND, 11+ events, 200+, 1,000+).
- [ ] Recruiter Mode produces a clean one-screen summary with CV download + contact.
- [ ] ⌘K / Ctrl+K command palette works and navigates correctly.
- [ ] Dark/light themes both pass AA contrast; toggle persists.
- [ ] No broken links; every unknown link is a documented `TODO`.
- [ ] Lighthouse ≥ 95 on all four categories (report the scores).
- [ ] No console errors; no layout shift; no horizontal scroll on mobile.
- [ ] Reduced-motion mode works.
- [ ] Production build succeeds.

**Finish by giving me:** a screenshot recording of the desktop and mobile views, the Lighthouse report, and the list of TODO placeholders.

---

## 11. Creative Latitude

You may add small delightful details that fit the "Insight Dashboard" concept (micro-interactions, an easter egg in the console like `console.log("Looking for insights? Let's talk 👋")`, a "Data quality: 100% ✅" badge in the footer) — as long as they never hurt performance, accessibility, or credibility. **Never fabricate experience, metrics, testimonials, or logos.**
