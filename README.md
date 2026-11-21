# Sydney Centre for TMJ & Sleep Therapy — Next.js & TypeScript Repository

Pixel-accurate Next.js & TypeScript reproduction of the official [Sydney Centre for TMJ & Sleep Therapy — TMJ Pain & Headaches](https://www.tmjandsleep.com.au/tmj-pain-headache/) page.

## 🌟 Architecture & Design System

- **Next.js 14 App Router & TypeScript**: Clean modular component hierarchy.
- **Accurate Elementor Color Scheme & Atmosphere**:
  - `#FAF9F6`: Clean off-white header and hero background.
  - `#FFFFFF`: Pure white clinical sections (The Basics, 9 Signs Grid, Bruxism & Headaches, Assessment Pathway).
  - `#F3EDE6`: Warm sand background (Contributing Factors, Differential Diagnosis & Stress, Progress Monitoring).
  - `#171717`: Deep obsidian dark contrast sections (Neck & Shoulder Biomechanics, 3 Areas of Management, Take the First Step & Important Information, Footer).
  - `#9B8A78`: Gold/taupe eyebrow text and branding accents.
  - `#54514C`: Warm charcoal body text with 1.75–1.8em line height.
- **Typography**:
  - Headings: `Cormorant Garamond` (light weight 300, italic accents).
  - Eyebrows & Body: `DM Sans` (11px uppercase tracking 1.8px for eyebrows; 300 light weight for body text).
- **Exact Section Order (1 to 12)**:
  1. **Header & Navigation**: Sticky `#FAF9F6` header with horizontal logo, exact menu links (`TMJ Pain & Headaches`, `Teeth Grinding & Clenching`, `Snoring & Sleep Apnoea`, `Jaw Clicking & Locked Jaw`, `ABOUT US`, `CONTACT US`, `Blogs`), and `02 9264 9120` outline pill button.
  2. **Hero Section**: `Home / Treatments / TMJ Pain & Headaches` breadcrumb, `TMJ Pain, TMD & Headaches in Sydney.` H1, lead paragraphs, `HOW WE ASSESS TMJ PAIN` and `HOW WE DIAGNOSE` CTA buttons, and TMJ Anatomy card with caption.
  3. **The Basics**: What is the temporomandibular joint (TMJ)? with closed-mouth anatomy card.
  4. **Understanding Your Symptoms**: Macro Trauma (Type 01) and Repetitive Loading & Microtrauma (Type 02) with patient question checklist.
  5. **Recognising Possible Bruxism**: 3x3 grid of 9 clinical sign cards with photography (Tooth Wear, Tori, Tongue Scalloping, Cracked Teeth, Facial/Jaw Pain, Headaches, Limited Opening, Jaw Noises, Morning Soreness).
  6. **The Neck, Shoulders & Jaw (Dark Section)**: Cervical spine biomechanics, airway compensations, with forward head carriage and posture domino effect visual cards.
  7. **Bruxism & Headaches**: Muscle tenderness discussion with `65%` and `3×` statistical metric cards and muscle diagram.
  8. **Rule Out Other Causes & Stress Connection**: 2-column comparative layout for differential diagnosis and central sensitization neurobiology.
  9. **Our Process — How We Assess TMJ Pain**: 4-step pathway (01 History & Examination, 02 Sleep & Breathing, 03 Imaging, 04 Blood Tests).
  10. **Our Integrated Approach — How We Manage TMJ Pain (Dark Section)**: 3 areas (Area 01: Breathing & Sleep, Area 02: Jaw Pain & Function, Area 03: Stress, Behaviour & Pain Regulation).
  11. **Monitoring Progress & Maximal Medical Improvement**: Evolution of treatment and maximal medical improvement milestones.
  12. **Take the First Step & Important Information (Dark Section)**: Consultation guidance with Dr Manish Shah, `Call 02 9264 9120` and `Send an Enquiry` buttons, address, and medical disclaimer.
  13. **Footer (Dark Section)**: 4-column layout (Practice overview, Treatments, About, Contact) with legal and emergency disclaimers.

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
