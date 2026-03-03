# SorrisoPlus — Clínica Dentária, Carcavelos

## Project Overview

Professional dental clinic website template targeting **Carcavelos & Linha de Cascais**, Portugal. Part of a freelance web dev business building templates for local service businesses. This is the fifth template after a restaurant (Koya's Bistro), mechanic (Revicar), plumber (AquaFix), and hair salon (Bella).

**Live URL:** TBD (Vercel)
**Brand:** SorrisoPlus — Clínica Dentária
**Target client:** Private dental clinics and individual dentists in Carcavelos/Cascais area
**Business model:** €750 build (€375 upfront) + €75/month maintenance (higher price tier — dental clinics have higher revenue per client and more to gain from a professional web presence)

## Market Context

Carcavelos has several dental clinics including Bonfante Dental, Prime HealthCare, Sorriso & Saúde (since 1997), DentoLux, Clínica do Junqueiro, and CCDO (since 1971). Many have outdated websites or rely on basic Wix/WordPress sites. Common services: implantologia, ortodontia (Invisalign), branqueamento, odontopediatria, cirurgia oral, periodontologia, prótese fixa/removível, endodontia, higiene oral. Key trust signals in this market: years of experience, Ordem dos Médicos Dentistas registration, ERS (Entidade Reguladora da Saúde) license number, advanced technology (laser, digital scanning, 3D imaging). Many clinics accept insurance agreements (ADSE, seguros de saúde). Patients search for "dentista Carcavelos", "clínica dentária Cascais", "implantes dentários Cascais", "dentista urgência Cascais".

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (via @tailwindcss/postcss)
- **Hosting:** Vercel
- **Fonts:** Inter (body) + DM Serif Display (headings/brand) via Google Fonts CDN

## Color System

Clean white/teal palette — clinical trust, cleanliness, health, calm.

| Token    | Hex     | Usage                          |
| -------- | ------- | ------------------------------ |
| white    | #ffffff | Page background                |
| gray-50  | #f8fafb | Section alternating bg         |
| gray-100 | #f0f4f6 | Card backgrounds               |
| gray-200 | #e2e8ed | Borders, dividers              |
| gray-400 | #94a3b8 | Muted text                     |
| gray-600 | #475569 | Body text                      |
| gray-800 | #1e293b | Headings, primary text         |
| gray-900 | #0f172a | Darkest text                   |
| teal-700 | #0f766e | Primary brand color            |
| teal-600 | #0d9488 | Primary CTA, accents           |
| teal-500 | #14b8a6 | Hover states, highlights       |
| teal-400 | #2dd4bf | Icons, badges                  |
| teal-50  | #f0fdfa | Tinted backgrounds             |
| sky-500  | #0ea5e9 | Secondary accent (dental blue) |
| sky-50   | #f0f9ff | Secondary tinted bg            |

## Project Structure

```files
dentist-site/
├── app/
│   ├── globals.css              # Theme, custom colors, animations
│   ├── layout.tsx               # Root layout (html/body)
│   ├── [locale]/
│   │   ├── layout.tsx           # Locale layout (metadata, JSON-LD)
│   │   └── page.tsx             # Page composition (all sections)
│   └── components/
│       ├── Navbar/Navbar.tsx
│       ├── HeroContent/HeroContent.tsx
│       ├── About/About.tsx
│       ├── Services/Services.tsx
│       ├── Team/Team.tsx
│       ├── Technology/Technology.tsx
│       ├── Insurance/Insurance.tsx
│       ├── Reviews/Reviews.tsx
│       ├── FAQ/FAQ.tsx
│       ├── Contact/Contact.tsx
│       ├── Footer/Footer.tsx
│       └── BookingBar/BookingBar.tsx
├── dictionaries/
│   ├── en.json
│   └── pt.json
├── i18n-config.ts
├── get-dictionary.ts
├── proxy.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Architecture Rules

### Components

- One component per file, one folder per component
- All components are `"use client"` unless purely presentational
- Props type defined inline above component, named `Props`
- Dictionary type defined inline, matching dictionary keys exactly
- Every component receives its dict slice — never the whole dictionary

### i18n

- Default locale: `pt` (Portuguese)
- All user-facing text lives in dictionaries, never hardcoded
- Dictionary keys are flat within each section (no deep nesting)
- When adding a section, update BOTH en.json and pt.json simultaneously

### Styling

- Custom colors defined in `globals.css` under `@theme inline`
- Use white/gray-_for backgrounds, gray-800/900 for text, teal-_ for CTAs/accents, sky-\* as secondary accent
- Font: DM Serif Display for headings/brand (`style={{ fontFamily: "'DM Serif Display', serif" }}`)
- Font: Inter for body text (loaded via globals.css Google Fonts import)
- Mobile-first: base styles → sm: → md: → lg:
- No arbitrary values when a theme token exists
- This is a LIGHT/WHITE theme — clinical, clean, trustworthy

### Animations

- IntersectionObserver for scroll-triggered fade-ins
- Staggered delays via inline `transitionDelay` style
- Calm, professional transitions — no pulsing or urgency effects
- Subtle hover lifts on cards (translateY + shadow)
- Smooth counters for stats (years of experience, patients treated)

### SEO

- JSON-LD schema type: `"Dentist"` (schema.org subtype of MedicalBusiness)
- `areaServed`: Carcavelos, Parede, Cascais, Estoril, São Domingos de Rana, Oeiras
- Full OpenGraph + Twitter card meta per locale
- Portuguese keywords targeting "dentista carcavelos", "clínica dentária cascais", "implantes dentários", "ortodontia cascais", "invisalign cascais"
- Include `medicalSpecialty` in JSON-LD for each service offered

## Section Build Order

1. ⬜ Navbar — sticky, clean white, "Marcar Consulta" CTA, language toggle
2. ⬜ Hero — confident smile messaging, dual CTA (book + call), trust badges
3. ⬜ About — clinic story, mission statement, stats (years, patients, specialists)
4. ⬜ Services — grid of dental specialties with icons
5. ⬜ Team — doctor cards with photo placeholder, name, specialty, OMD registration
6. ⬜ Technology — equipment & tech showcase (laser, 3D, digital scanning)
7. ⬜ Insurance — accepted insurance providers / agreements (ADSE, etc.)
8. ⬜ Reviews — patient testimonials with star ratings
9. ⬜ FAQ — common dental questions accordion
10. ⬜ Contact — form + Google Maps + phone + hours + ERS license number
11. ⬜ Footer — links, copyright (dynamic year), legal info, OMD/ERS numbers
12. ⬜ BookingBar — sticky mobile bottom bar with "Marcar Consulta" CTA

## Design Principles (Dental Clinic-specific)

### Vibe: Clinical Trust & Modern Care

- **White-dominant layout** — cleanliness IS the message. White backgrounds, generous whitespace, teal accents.
- **Serif headings** — DM Serif Display conveys authority and professionalism without being cold. Medical, not corporate.
- **Photography-ready** — large placeholders for clinic interior, team photos, equipment. The site should look premium even with placeholder images.
- **No urgency tricks** — dental patients research carefully. The tone is reassuring, not pressuring. "We're here when you're ready."

### Content Strategy

- **First consultation is the hook** — "Primeira Consulta de Avaliação" (often free or €30) is the main conversion. Make booking it effortless.
- **Specialties = credibility** — list every specialty (implantologia, ortodontia, etc.) with clear explanations. Patients Google conditions, not clinics.
- **Team is everything** — patients choose dentists by name. Doctor bios with credentials (Ordem dos Médicos Dentistas number) are essential.
- **Technology sells** — Portuguese dental patients value modern equipment. Showcase laser, Invisalign, digital impressions, 3D imaging.
- **Insurance info is critical** — many patients filter by "dentista com ADSE" or other insurance agreements. Make this easy to find.
- **Legal compliance** — Portuguese dental clinics MUST display ERS license number and establishment registration. Include these in footer.
- **Anxiety reduction** — many patients fear the dentist. Use calming language, mention sedation options, show a warm environment.

### What Makes This Different From Other Templates

| Aspect             | Plumber (AquaFix)   | Salon (Bella)              | Dentist (SorrisoPlus)            |
| ------------------ | ------------------- | -------------------------- | -------------------------------- |
| Theme              | Dark (navy)         | Light (cream/rose)         | Light (white/teal)               |
| Primary CTA        | Phone call          | Book appointment           | Book consultation                |
| Urgency level      | High (emergency)    | Low (appointment)          | Low-medium (evaluation)          |
| Hero focus         | Phone number huge   | Atmosphere + brand         | Trust + credentials              |
| Unique sections    | Areas coverage      | Pricing + Gallery          | Technology + Insurance           |
| Typography         | Oswald (bold)       | Playfair Display (elegant) | DM Serif Display (authoritative) |
| Tone               | Professional/urgent | Warm/luxurious             | Reassuring/clinical              |
| Legal requirements | None                | None                       | ERS license, OMD numbers         |
| Price tier         | €500                | €500                       | €750                             |

## Workflow

When building a new section:

1. Create component file in `app/components/[Name]/[Name].tsx`
2. Define the dict type matching planned dictionary keys
3. Add dictionary entries to BOTH pt.json AND en.json
4. Import and add component to `page.tsx`
5. Test both `/pt` and `/en` routes
6. Check mobile (375px) and desktop (1440px)

## Phone / Contact Info (Demo)

- Phone: +351 214 567 890
- Mobile/WhatsApp: +351 916 789 012
- Email: <info@sorrisoplus.pt>
- Address: Av. de Portugal 45, 2775-602 Carcavelos
- Google Maps coords: 38.6883, -9.3350
- Hours: Segunda–Sexta 9h–20h, Sábado 9h–14h (closed Sunday)
- ERS License: E000000 (demo)
- Establishment Registration: 0000/2020 (demo)

## Demo Dental Specialties

### Dentisteria & Estética (General & Cosmetic)

- Consulta de avaliação
- Branqueamento dentário
- Facetas de porcelana
- Restaurações estéticas
- Diagnóstico digital

### Implantologia (Implantology)

- Implantes dentários
- All-on-4 / All-on-6
- Carga imediata
- Enxerto ósseo
- Implantes zigomáticos

### Ortodontia (Orthodontics)

- Invisalign (alinhadores invisíveis)
- Aparelho fixo convencional
- Aparelho auto-ligável (Damon)
- Ortodontia interceptiva (crianças)

### Cirurgia Oral (Oral Surgery)

- Extração de sisos
- Cirurgia periodontal
- Apicectomia
- Cirurgia de tecidos moles

### Periodontologia (Periodontics)

- Tratamento de gengivite
- Tratamento de periodontite
- Destartarização profunda
- Manutenção periodontal

### Odontopediatria (Pediatric Dentistry)

- Primeira consulta infantil
- Selantes de fissura
- Aplicação de flúor
- Traumatismos dentários
- Sedação consciente com protóxido de azoto

### Endodontia (Endodontics)

- Tratamento de canal (desvitalização)
- Retratamento endodôntico
- Endodontia mecanizada

### Prótese (Prosthetics)

- Prótese fixa (coroas e pontes)
- Prótese removível
- Prótese sobre implantes

### Higiene Oral (Dental Hygiene)

- Destartarização (limpeza)
- Polimento
- Aplicação de flúor
- Plano de prevenção personalizado

## Demo Insurance Agreements

- ADSE
- Multicare (Fidelidade)
- AdvanceCare
- Médis
- Allianz
- SAMS
- PT-ACS
- Medicare

## Demo Technology

- CBCT / TAC 3D (Cone Beam Computed Tomography)
- Scanner intraoral digital
- Laser FOTONA
- Câmara intraoral
- Raio-X digital panorâmico
- Software de planeamento digital de implantes
- Branqueamento com LED
- Sistema CAD/CAM
