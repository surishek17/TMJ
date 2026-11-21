# Sydney Centre for TMJ & Sleep Therapy — Next.js & TypeScript Repository

High-fidelity Next.js & TypeScript reproduction of the [Sydney Centre for TMJ & Sleep Therapy — TMJ Pain & Headaches](https://www.tmjandsleep.com.au/tmj-pain-headache/) clinical treatment page.

## 🌟 Key Highlights & Features

- **Next.js 14 App Router & TypeScript**: Production-ready modern architecture with strict typing.
- **Tailwind CSS & Brand Theme**: Custom luxury medical palette matching the original Elementor kit (`#FAF8F5` sand/cream backgrounds, `#1A1A1A` deep slate, `#96836F` bronze/taupe accents).
- **Typography**: Dual font hierarchy using Google's `Cormorant Garamond` (editorial serif headers) and `DM Sans` (clean medical UI text).
- **All Original Clinical Assets**: Full set of high-resolution anatomical diagrams, posture models, and clinical photography preserved locally in `/public/images/`.
- **Interactive Patient Features**:
  - **TMJ & Headache Self-Check Screener**: Patients can select symptoms (clicking, locking, temple headaches, ear fullness, wear) and generate a clinical discussion brief.
  - **Self-Reflection Factor Checklist**: Interactive questions for macro-trauma, nocturnal grinding, and awake clenching.
  - **3-Pillar Treatment Framework**: Interactive tabbed view covering Breathing & Sleep, Jaw Pain & Function, and Stress & Pain Regulation.
  - **Online Consultation Request Form**: Tailored for Dr Manish Shah's Sydney CBD clinic (Suite 403, 307 Pitt Street).
  - **Sticky Header & Mobile Drawer**: Responsive navigation with quick direct call triggers (`(02) 9264 9120`).

---

## 📁 Repository Structure

```
tmj-sleep-therapy/
├── public/
│   └── images/
│       ├── logo.png                       # Clinic logo
│       ├── tmj-anatomy.png                # Joint, condyle, disc anatomy
│       ├── closed-mouth.png               # Clinical facial visual
│       ├── tooth-wear.png                 # Sign 01: Tooth wear
│       ├── tori.png                       # Sign 02: Bony tori
│       ├── tongue-scalloping.png          # Sign 03: Scalloped tongue
│       ├── cracked-teeth.png              # Sign 04: Fractured enamel
│       ├── facial-jaw-pain.png            # Sign 05: Muscular pain
│       ├── headaches.png                  # Sign 06: Temple headache
│       ├── limited-jaw-opening.png        # Sign 07: Trismus/Locking
│       ├── jaw-noises.png                 # Sign 08: Clicking/Popping
│       ├── morning-soreness.png           # Sign 09: Morning fatigue
│       ├── forward-head-carriage.jpg      # Posture biomechanics
│       ├── muscles-tender.png             # Bruxism muscle anatomy
│       └── dr-assessment.png              # Consultation & monitoring
├── src/
│   ├── app/
│   │   ├── globals.css                    # Tailwind & medical layout styles
│   │   ├── layout.tsx                     # Root layout, Google Fonts, SEO metadata
│   │   └── page.tsx                       # Full TMJ & Headache page
│   └── components/
│       ├── Header.tsx                     # Sticky nav, utility bar, mobile drawer
│       ├── Hero.tsx                       # Hero headline, Dr Manish Shah credibility
│       ├── AnatomySection.tsx             # TMJ anatomical breakdown & disc mechanics
│       ├── ContributingFactors.tsx        # Macro trauma vs microtrauma checklist
│       ├── SignsGrid.tsx                  # 9-card visual bruxism signs grid
│       ├── NeckPostureSection.tsx         # Cervical load & mouth breathing
│       ├── BruxismHeadacheSection.tsx     # 65% & 3x force clinical statistics
│       ├── DifferentialDiagnosis.tsx      # Medical rule-out & emergency red flags
│       ├── StressPainSection.tsx          # Central sensitization & pain biology
│       ├── AssessmentProcess.tsx          # 4-step diagnostic process
│       ├── ManagementFramework.tsx        # 3-pillar management strategy
│       ├── ProgressTimeline.tsx           # Maximal medical improvement review
│       ├── SymptomChecker.tsx             # Interactive patient self-screener
│       ├── BookingSection.tsx             # Sydney CBD booking & enquiry form
│       └── Footer.tsx                     # Disclaimers, hours, and legal links
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.mjs
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the page.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🚀 Automatic Deployment on Vercel (Continuous Deployment)

This repository is pre-configured with `vercel.json` for seamless continuous deployment from GitHub.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/surishek17/TMJ)

### How to Enable Auto-Deploy in 2 Clicks:

1. Click the **Deploy with Vercel** button above (or visit [vercel.com/new](https://vercel.com/new)).
2. Under **Import Git Repository**, select your connected repository: `surishek17/TMJ`.
3. Click **Deploy**.

**That's it!** Once connected:
- Every `git push origin main` automatically triggers a zero-downtime production deployment on Vercel.
- Pull requests automatically receive instant preview deployment links.
