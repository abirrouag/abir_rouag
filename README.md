# 🚀 Abir Rouag — Personal Portfolio ("The Insight Dashboard")

> **Business Analyst & Data/BI Intern Portfolio Website**  
> Built for recruiters and hiring managers at international organizations seeking high-impact Business Analyst, Data Analytics, and Digital Transformation candidates.

![Open Graph Preview Banner](/public/assets/og-image.png)

---

## 📌 Executive Concept — "The Insight Dashboard"

The portfolio is engineered as a high-end BI analytics dashboard rather than a generic personal site:
- **Hero Animated KPI Strip:** Count-up metrics tracking unified data sources, Power BI KPIs, transaction volumes, recruitment campaigns, and associative org scale.
- **Career as a Data Pipeline Timeline:** Interactive pipeline stages (*Extract → Transform → Load → Insight*) mapping telecommunications engineering and international buying into Business Analysis.
- **Star Schema Skills Visual:** Interactive dimensional model centering Business Analysis as the Fact table, surrounded by Data & Analytics, BI & Visualization, and Data Engineering dimensions.
- **Analytical Case Studies:** Real project metrics with embedded interactive visuals:
  - *Marketing Funnel & Budget Simulator:* Paid Search vs Social conversion rates (13.3% vs 5.8%) and sales cycles (11 vs 34 days).
  - *Procurement Analytics & Audit Engine:* Star schema on ~420K purchase-order lines with 40+ DAX measures and Benford's Law anomaly detection.
  - *Customer Churn & LTV:* ML pipeline converting 1.07M transactions into 776K events across 5,852 customers with SHAP explainability.
- **⚡ Recruiter Mode (60s Summary):** Top-right toggle collapsing the portfolio into a single-screen executive summary for busy recruiters.
- **⌘K / Ctrl+K Command Palette:** Instant keyboard navigation overlay for jumping between sections, downloading the resume, or contacting Abir.
- **Theme System & Accessibility:** Seamless Dark (default `#0B1020`) and Light modes with WCAG AA contrast compliance and `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, static export supported via `next build`)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS + CSS Variables for dynamic theme switching
- **Animations:** Framer Motion (count-up counters, viewport scroll reveals, reduced-motion fallbacks)
- **Data Visualizations:** Custom SVG graphics & Recharts components
- **Command Palette:** `cmdk`
- **Icons:** `lucide-react`
- **Content Single Source of Truth:** `src/content/content.ts` (strongly typed)

---

## 📁 Repository Structure

```
abir-rouag-portfolio/
├── public/
│   ├── assets/
│   │   ├── abir.jpg (Avatar graphic placeholder)
│   │   ├── Abir_Rouag_CV.pdf (Resume PDF download)
│   │   └── og-image.png (Open Graph preview image)
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx (Root layout, Google Fonts, OpenGraph & Person JSON-LD metadata)
│   │   ├── page.tsx (Main dashboard page & Recruiter Mode conditional layout)
│   │   ├── not-found.tsx (Data-themed 404 page)
│   │   └── globals.css (Design tokens, CSS variables, glassmorphism)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx (Sticky navigation bar)
│   │   │   ├── Footer.tsx (Minimal footer & data quality badge)
│   │   │   ├── CommandPalette.tsx (⌘K / Ctrl+K overlay)
│   │   │   ├── ThemeToggle.tsx (Dark/Light toggle with localStorage try/catch)
│   │   │   ├── RecruiterModeToggle.tsx (60s mode toggle)
│   │   │   └── NoiseBackground.tsx (Data particle canvas)
│   │   ├── dashboard/
│   │   │   ├── HeroSection.tsx (Hero & animated KPI strip)
│   │   │   ├── AboutSection.tsx (Bio & "What I bring" cards)
│   │   │   ├── ExperiencePipeline.tsx (Career pipeline stepper)
│   │   │   ├── ProjectsSection.tsx (Filterable case study cards)
│   │   │   ├── SkillsStarSchema.tsx (Dimensional skill map)
│   │   │   ├── LeadershipSection.tsx (Associative experience & BA callout)
│   │   │   ├── EducationSection.tsx (Degrees)
│   │   │   └── ContactSection.tsx (Contact actions & mailto fallback)
│   │   ├── recruiter/
│   │   │   └── RecruiterModeView.tsx (60s summary view)
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx
│   │       ├── InteractiveFunnel.tsx
│   │       └── MiniStarSchema.tsx
│   ├── content/
│   │   └── content.ts (Single source of truth for all text, links & metrics)
│   ├── types/
│   │   └── index.ts (TypeScript interfaces)
│   └── lib/
│       └── utils.ts (Formatting & utility functions)
├── TODO.md (List of placeholders to update before launch)
└── README.md
```

---

## ✍️ How to Edit Portfolio Content

All text, numbers, metrics, project descriptions, and social links are centralized in a single typed TypeScript file:
👉 **`src/content/content.ts`**

To update your contact links, add project repositories, or tweak bio details:
1. Open `src/content/content.ts`.
2. Edit the desired fields (e.g. replace `"TODO: https://linkedin.com/in/abir-rouag"` with your live profile link).
3. Save the file and run `npm run build`.

See [TODO.md](./TODO.md) for the complete checklist of placeholders.

---

## 🚦 Getting Started Locally

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation & Development
```bash
# 1. Clone the repository
git clone https://github.com/abirrouag/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Export
```bash
# Generate production bundle
npm run build

# Start production server locally
npm run start
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the repo in [Vercel Dashboard](https://vercel.com).
3. Vercel automatically detects Next.js. Click **Deploy**.

### Deploy to Netlify
1. Connect repository on Netlify.
2. Set Build Command: `npm run build`.
3. Set Publish Directory: `.next` (or `out` if using static export).

---

## ♿ Accessibility & SEO Compliance

- **WCAG AA Compliance:** Keyboard focus rings (`:focus-visible`), aria labels on all interactive controls, text alternatives for visual charts.
- **Motion Controls:** Full support for `prefers-reduced-motion` (disables particle noise, count-ups, and heavy transitions).
- **SEO & Schema:** Pre-configured OpenGraph banners, Twitter cards, meta descriptions, and JSON-LD `Person` structured data schema.

---

## 📄 License
© 2026 Abir Rouag. All rights reserved.
