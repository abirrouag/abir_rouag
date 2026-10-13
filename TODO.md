# 📝 TODO Placeholders to Fill — Abir Rouag Portfolio

This document lists all placeholder fields in `src/content/content.ts` and public assets that need to be updated with final URLs and files before production release.

---

## 1. Contact & Social Links (`src/content/content.ts`)
- [ ] **LinkedIn Profile URL:** Update `personal.linkedinUrl` (currently `"TODO: https://linkedin.com/in/abir-rouag"`).
- [ ] **Formspree Endpoint (Optional):** Update `contact.formspreeEndpoint` if using Formspree for contact submission (currently `"TODO: https://formspree.io/f/your-form-id"`). The contact form gracefully falls back to `mailto:rouagabir@gmail.com` if left unchanged.

## 2. Project Repositories & Live Demos (`src/content/content.ts`)
- [ ] **Project 1 (Marketing Funnel & Revenue Analytics):** Update `githubUrl` under `projects[0]` (currently `"TODO: https://github.com/abirrouag/marketing-funnel-analytics"`).
- [ ] **Project 2 (Procurement Analytics):** Update `githubUrl` under `projects[1]` (currently `"TODO: https://github.com/abirrouag/procurement-analytics"`).
- [ ] **Project 3 (Customer Churn & LTV):** Update `githubUrl` under `projects[2]` (currently `"TODO: https://github.com/abirrouag/churn-ltv-prediction"`).
- [ ] **Live Demo URLs (Optional):** Add `liveDemoUrl` strings if hosted demos exist for any of the projects.

## 3. Media & Document Assets (`/public/assets/`)
- [ ] **Profile Picture (`/public/assets/abir.jpg`):** Add high-resolution headshot photo. If missing, the avatar falls back to a stylized "AR" BI initials badge.
- [ ] **Resume PDF (`/public/assets/Abir_Rouag_CV.pdf`):** Add up-to-date CV PDF file.
- [ ] **OpenGraph Image (`/public/assets/og-image.png`):** Add 1200x630 dashboard-styled social preview banner.

---

## How to Edit Content
All text content, experience descriptions, project metrics, and links are managed in a single typed file:
📁 **`src/content/content.ts`**

Simply update the values in `content.ts` and run `npm run build` to redeploy your portfolio.
