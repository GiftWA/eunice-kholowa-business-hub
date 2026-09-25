# Eunice Kholowa Business Hub — Project Status

## Project Overview

Professional business website for Eunice Kholowa Business Hub.
Tagline: Learn. Create. Start. Grow.
Business: Business coaching, training, entrepreneurship education.
Location: Lilongwe, Malawi

---

## Tech Stack

- Framework: Next.js 16.3.1 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4
- Package Manager: pnpm
- Icons: lucide-react
- Fonts: Poppins (body/headings), Dancing Script (script accent)
- Deployment: Vercel
- Future: Neon PostgreSQL + Drizzle ORM

---

## Brand Colors (src/app/globals.css @theme block)

- Deep Purple: #3B1F7A → brand-purple
- Purple Dark: #25104D → brand-purple-dark
- Purple Light: #5B3D9A → brand-purple-light
- Gold: #D4A017 → brand-gold
- Gold Light: #E8B84B → brand-gold-light
- Gold Dark: #A87C0E → brand-gold-dark
- Lavender: #F5F0FF → brand-lavender
- Lavender Dark: #EDE6FA → brand-lavender-dark

---

## Real Contact & Social Links

- Phone: 0881 581 036
- Email: eunicekholowabusiness@gmail.com
- WhatsApp: https://wa.me/265881581036
- Facebook: https://www.facebook.com/share/19iwddxRJH/
- TikTok: https://www.tiktok.com/@eunicekholowa1
- YouTube: https://youtube.com/@ndingathewitheunice
- Instagram: https://www.instagram.com/eunicekholowa04
- LinkedIn: https://www.linkedin.com/in/eunice-kholowa-85b29b2a3

---

## Project Structure

src/
├── app/
│ ├── about/
│ │ └── page.tsx
│ ├── blog/
│ │ └── page.tsx
│ ├── books-guides/
│ │ └── page.tsx
│ ├── business-ideas/
│ │ └── page.tsx
│ ├── contact/
│ │ ├── actions.ts ← Server action (ready for Resend)
│ │ └── page.tsx
│ ├── courses/
│ │ └── page.tsx
│ ├── trainings/
│ │ ├── [slug]/
│ │ │ └── page.tsx
│ │ └── page.tsx
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── layout/
│ │ ├── Footer.tsx
│ │ ├── Header.tsx
│ │ ├── Logo.tsx
│ │ └── TopBar.tsx
│ ├── sections/
│ │ ├── AboutMe.tsx
│ │ ├── ContactForm.tsx
│ │ ├── CTASection.tsx
│ │ ├── Hero.tsx
│ │ ├── MyTrainings.tsx
│ │ ├── TrainingBenefits.tsx
│ │ └── TrainingsGrid.tsx
│ └── ui/
│ ├── Button.tsx
│ ├── ComingSoon.tsx
│ ├── Container.tsx
│ ├── PageHero.tsx
│ ├── SectionHeading.tsx
│ ├── SocialIcon.tsx
│ ├── TrainingCard.tsx
│ └── WhatsAppFloat.tsx
├── data/
│ ├── about.ts
│ ├── benefits.ts
│ ├── footer.ts
│ ├── navigation.ts
│ └── trainings.ts ← 40 trainings across 6 categories
└── lib/
└── utils.ts

public/images/
├── trainings/ ← 32 product images
├── eunice-about.jpg
├── eunice-hero.jpg
└── logo.png

---

## Milestones Completed

### ✅ Milestone 1 — Repository Audit

### ✅ Milestone 2 — Design System Foundation

### ✅ Milestone 3 — Header & Navigation

### ✅ Milestone 4 — Hero Section

### ✅ Milestone 5 — About Me Section

### ✅ Milestone 6 — Training Cards

### ✅ Milestone 7 — Training Benefits Strip

### ✅ Milestone 8 — CTA Section

### ✅ Milestone 9 — Footer

### ✅ Milestone 10 — Homepage Polish

### ✅ Milestone 11 — Secondary Pages

- /about — Bio, achievements strip, what I offer, mission quote
- /trainings — Full listing with 7 category filter buttons
- /trainings/[slug] — Detail page with image, price, what you'll learn, register via WhatsApp, related trainings
- /contact — Contact form (server action), contact details, business hours, social links, WhatsApp CTA
- /courses — Coming Soon page
- /books-guides — Coming Soon page
- /business-ideas — Coming Soon page
- /blog — Coming Soon page

---

## Training Data (40 Trainings)

- Soaps & Oils (8): Bar Soap, Surf, Glycerine, Pine Gel, Shampoo, Dish Wash, Castor Oil, Castor Soap
- Snacks & Food (11): Sweet Malambe, Samosa, Doughnut, Cassava Twists, Cassava Cherry Cherry, Freezes, Mandasi, Cassava Chips, Cheula, Irish Potato Chips, Tamarind Juice
- Personal Care (5): Liquid Bath Soap, Body Lotion, Hair Oil, Hair Conditioner, Liquid Hand Wash
- Cleaning Products (3): Toilet Cleaner, Floor Cleaner, Multipurpose Cleaner
- Business (7): Business Ideas & Opportunities, Business Start-up & Management, Pricing & Profit Calculation, Marketing & Sales, Social Media for Business, Financial Management & Saving, Value Addition & Product Development
- Waste to Wealth (6): Eco Briquettes, Charcoal Briquettes, Organic Manure & Compost, Products from Agricultural Waste, Recycling & Reusable Products, Waste-Based Business Opportunities

---

## Milestones Remaining

- [ ] Milestone 12 — Database (Neon + Drizzle)
- [ ] Milestone 13 — Dynamic Training Content
- [ ] Milestone 14 — Contact Form (connect to database)
- [ ] Milestone 15 — Resend Email Integration
- [ ] Milestone 16 — Final Production Polish

---

## Pending Content From Eunice

- Courses content and details
- Books & Guides content
- Blog posts
- Business Ideas articles
- Real testimonials/reviews (future)

---

## Important Technical Decisions

1. Tailwind v4 uses @theme{} in globals.css
2. Social icons are React SVG components in SocialIcon.tsx
3. TrainingCard is a client component (onError handler)
4. Navigation and footer data driven from src/data/
5. Contact form uses Next.js Server Actions (ready for Resend)
6. Styled category placeholders for trainings without images
7. Coming Soon pages for unbuilt sections — no 404s anywhere

---

## GitHub Repository

https://github.com/GiftWA/eunice-kholowa-business-hub

## Live URL

https://eunice-kholowa-business-hub.vercel.app

## How To Run Locally

```bash
cd "D:\MY PERSONAL PROJECTS\eunice-kholowa-business-hub"
pnpm dev
# Open http://localhost:3000
```
