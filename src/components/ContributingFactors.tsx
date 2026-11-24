"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronDown, ArrowDown, Sparkles, Activity, ShieldCheck, Check, Layers } from "lucide-react";

interface FactorCard {
  id: string;
  type: string;
  title: string;
  lead: string;
  img: string;
  alt: string;
  badge: string;
  description: string;
  details: string[];
  clinicalNote: string;
}

export default function ContributingFactors() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showSecondaryFactors, setShowSecondaryFactors] = useState(false);
  const [checkedQuestions, setCheckedQuestions] = useState<number[]>([]);
  const [cardTilt, setCardTilt] = useState<{ [key: string]: { x: number; y: number } }>({});

  const primaryFactors: FactorCard[] = [
    {
      id: "macro-trauma",
      type: "TYPE 01",
      title: "MACRO TRAUMA",
      lead: "Previous injury to jaw, head or neck.",
      img: "/images/macro-trauma-graphic.jpg",
      alt: "3D anatomical craniofacial bone visualization highlighting jaw injury and force transmission",
      badge: "Direct Impact & Whiplash",
      description:
        "A significant injury involving the jaw, head or neck may contribute to the development of TMD symptoms.",
      details: [
        "Motor vehicle accidents, whiplash, and acceleration-deceleration forces through the cervical spine",
        "Direct sporting impacts, accidental blows to the mandible, or acute jaw dislocation events",
        "Prolonged or forced hyperextension during complex oral surgeries or medical intubation procedures",
      ],
      clinicalNote:
        "Not every injury results in persistent TMJ problems, but a history of trauma can be clinically relevant when investigating unilateral joint clicking, disc displacement, or capsular strain.",
    },
    {
      id: "repetitive-loading",
      type: "TYPE 02",
      title: "REPETITIVE LOADING",
      lead: "Repeated clenching and grinding.",
      img: "/images/repetitive-loading-graphic.jpg",
      alt: "3D anatomical model highlighting hyperactive masseter and temporalis muscle activity in warm amber",
      badge: "Muscular Hyperactivity",
      description:
        "Repeated loading of the jaw may contribute to sustained muscular fatigue, joint tenderness, and microtrauma in susceptible individuals.",
      details: [
        "Awake bruxism: unconscious clenching, bracing, or posturing during daytime stress, driving, and intense focus",
        "Sleep bruxism: rhythmic, forceful nocturnal grinding episodes associated with autonomic micro-arousals",
        "Isometric jaw bracing and non-functional habitual chewing that strains the pterygoid and masseter attachments",
      ],
      clinicalNote:
        "Bruxism does not automatically confirm TMD, but chronic isometric bite loading generates forces up to 3x normal chewing, compressing the articular disc and fatiguing elevator muscles.",
    },
  ];

  const secondaryFactors = [
    {
      id: "joint-structure",
      type: "TYPE 03",
      title: "TMJ JOINT STRUCTURE & DISC",
      lead: "Internal derangement, disc displacement & arthritis.",
      img: "/images/tmj-anatomy.png",
      alt: "TMJ condyle, articular disc and synovial space anatomy",
      badge: "Internal Biomechanics",
      description:
        "Structural changes in the fibrocartilaginous disc, condylar bone head, or synovial fluid balance can alter smooth joint translation.",
      details: [
        "Anterior disc displacement with reduction (characterised by reciprocal opening and closing clicks)",
        "Closed lock or disc displacement without reduction (restricted mouth opening below 35mm)",
        "Degenerative joint disease, osteoarthritis, and joint space narrowing under sustained compression",
      ],
    },
    {
      id: "cervical-posture",
      type: "TYPE 04",
      title: "CERVICAL & POSTURAL LOAD",
      lead: "Forward head carriage and neck muscle tension.",
      img: "/images/forward-head-carriage.jpg",
      alt: "Forward head posture causing cervical muscle strain and mandibular retrusion",
      badge: "Cervicogenic Kinematics",
      description:
        "Altered cervical spine posture creates backward mechanical pull on the hyoid apparatus, forcing the lower jaw into posterior joint compression.",
      details: [
        "Forward head translation alters the resting mandibular postural position and resting clearance",
        "Hypertonic upper trapezius, suboccipital, and sternocleidomastoid muscles refer pain to temples and jaw",
        "Trigeminocervical convergence in the brainstem links chronic neck dysfunction directly with facial pain",
      ],
    },
  ];

  const questions = [
    "Have you previously injured your jaw, face, head or neck?",
    "Did your symptoms begin following an accident, sporting injury, or prolonged jaw opening?",
    "Have you noticed yourself clenching your jaw during the day or during times of concentration?",
    "Has anyone heard you grinding your teeth while you sleep?",
    "Do you regularly wake with jaw fatigue, facial muscle tenderness, or temple headaches?",
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    setCardTilt((prev) => ({ ...prev, [id]: { x: rotateX, y: rotateY } }));
  };

  const handleMouseLeave = (id: string) => {
    setCardTilt((prev) => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  const toggleQuestion = (idx: number) => {
    setCheckedQuestions((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section
      id="contributing-factors"
      className="relative py-20 sm:py-28 bg-[#111111] text-[#FAF9F6] overflow-hidden border-t border-b border-white/[0.08]"
      data-gsap="reveal"
    >
      {/* Cinematic Studio Lighting Subtle Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D8B45C]/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-blue-900/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* 1. TOP TWO-COLUMN INTRODUCTION (Matching Screenshot 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Heading, Clinical Context & Subtitle */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] sm:text-[12px] font-sans font-medium uppercase tracking-[0.2em] text-[#D8B45C] block">
              UNDERSTANDING YOUR SYMPTOMS
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-light text-white leading-[1.08] tracking-tight uppercase">
              WHAT MAY BE CONTRIBUTING{" "}
              <span className="italic font-light text-[#E8E4DF]">TO MY TMJ PAIN?</span>
            </h2>

            <div className="pt-2 space-y-3.5 max-w-3xl">
              <p className="font-semibold text-white/95 text-base sm:text-lg leading-snug">
                There is rarely one single cause of TMD.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Several factors may interact and contribute to jaw symptoms. Jaw pain can arise from the joint itself, the surrounding muscles and ligaments, dental structures or, less commonly, other neurological or medical conditions.
              </p>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                A range of factors may contribute, including previous injury, repetitive jaw loading, clenching or grinding, joint inflammation or degeneration, changes within the TMJ, pain sensitisation, sleep disturbance, and behavioural or psychosocial factors. For some people, symptoms develop after a clear injury. For others, they develop gradually over time.
              </p>
            </div>
          </div>

          {/* Right Column: Realistic 3D Anatomical Skull & TMJ Joint Showcase (Screenshot 2) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[310px] aspect-[4/4.8] rounded-2xl overflow-hidden border border-white/10 bg-[#161616]/90 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-md flex flex-col justify-between p-4 group transition-all duration-500 hover:border-[#D8B45C]/50 hover:shadow-[0_25px_60px_rgba(216,180,92,0.15)]"
            >
              {/* Subtle Studio Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none z-10" />

              {/* Status Header */}
              <div className="relative z-20 flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#D8B45C] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8B45C] animate-ping" />
                  3D ANATOMICAL VIEW
                </span>
                <span className="text-[10px] font-sans text-neutral-400 font-light">
                  Lateral TMJ Joint
                </span>
              </div>

              {/* Realistic 3D Skull Visual with Smooth Floating Animation */}
              <div className="relative z-10 w-full h-[210px] my-auto flex items-center justify-center animate-float-slow">
                <Image
                  src="/images/tmj-skull-header.jpg"
                  alt="3D anatomical human skull and jaw showing temporomandibular joint with golden studio illumination"
                  fill
                  className="object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.95)] transition-transform duration-700 group-hover:scale-105"
                  sizes="310px"
                  priority
                />

                {/* Golden Illumination Hotspot over TMJ Condyle & Disc */}
                <div
                  className="absolute top-[37%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-2 pointer-events-none"
                  title="Temporomandibular Joint (Condyle & Disc)"
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8B45C] opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D8B45C] border-2 border-black shadow-[0_0_12px_#D8B45C]" />
                  </span>
                </div>
              </div>

              {/* Bottom Annotation Bar */}
              <div className="relative z-20 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-300">
                <span className="font-light">TMJ Condyle &amp; Disc</span>
                <span className="font-mono text-[#D8B45C] text-[10px] tracking-wider uppercase">
                  Studio Lighting
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. TWO-COLUMN GRID OF DARK GREY FLOATING CARDS (Matching Screenshot 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {primaryFactors.map((factor) => {
            const tilt = cardTilt[factor.id] || { x: 0, y: 0 };
            const isExpanded = activeTab === factor.id;

            return (
              <div
                key={factor.id}
                onMouseMove={(e) => handleMouseMove(e, factor.id)}
                onMouseLeave={() => handleMouseLeave(factor.id)}
                className="group relative rounded-2xl bg-[#161616] border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-400 hover:border-[#D8B45C]/40 hover:shadow-[0_25px_60px_rgba(216,180,92,0.12)] flex flex-col justify-between"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1, 1, 1)`,
                  transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease, box-shadow 0.4s ease",
                }}
              >
                <div>
                  {/* Top 3D Anatomical Visual Container (Screenshot 2) */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#0E0E0E] mb-6 group-hover:border-[#D8B45C]/30 transition-colors">
                    <Image
                      src={factor.img}
                      alt={factor.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Badge */}
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-[4px] bg-black/75 border border-white/15 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#D8B45C]">
                      {factor.badge}
                    </div>
                  </div>

                  {/* Card Header & Content */}
                  <div className="space-y-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D8B45C] font-semibold block">
                      {factor.type}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-light text-white tracking-tight">
                      {factor.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 font-light">
                      {factor.lead}
                    </p>
                  </div>

                  {/* Clinical Description */}
                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                    {factor.description}
                  </p>

                  {/* Expandable Clinical Sub-Details */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-white/10 space-y-3 animate-in fade-in duration-300">
                      <div className="space-y-2">
                        <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#D8B45C] block">
                          Contributing Clinical Mechanisms:
                        </span>
                        {factor.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-300 font-light leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B45C] mt-1.5 shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 rounded-lg bg-black/50 border border-white/10 text-xs text-neutral-300 font-light leading-relaxed mt-3">
                        <span className="font-semibold text-white">Clinical Note: </span>
                        {factor.clinicalNote}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Toggle */}
                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveTab(isExpanded ? null : factor.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-[#D8B45C] transition-colors"
                  >
                    <span>{isExpanded ? "Hide details" : "Explore clinical biomechanics"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                  </button>

                  <Link
                    href="#booking-section"
                    className="text-[11px] uppercase tracking-wider font-mono text-[#D8B45C] hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Assess</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. ADDITIONAL 3D ANATOMICAL SUB-FACTORS (Disc Structure & Neck Muscles) */}
        <div className="mb-14">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#D8B45C]" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                Secondary Structural &amp; Postural Contributors
              </span>
            </div>
            <button
              onClick={() => setShowSecondaryFactors(!showSecondaryFactors)}
              className="text-xs font-medium text-[#D8B45C] hover:text-white transition-colors flex items-center gap-1"
            >
              <span>{showSecondaryFactors ? "Collapse" : "View disc & neck muscle models"}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showSecondaryFactors ? "rotate-180" : ""}`} />
            </button>
          </div>

          {showSecondaryFactors && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-8 animate-in fade-in duration-400">
              {secondaryFactors.map((sec) => (
                <div
                  key={sec.id}
                  className="rounded-2xl bg-[#161616]/90 border border-white/10 p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-[#D8B45C]/30 transition-all"
                >
                  <div>
                    {/* Visual Graphic */}
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-[#0E0E0E] mb-5">
                      <Image
                        src={sec.img}
                        alt={sec.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/75 border border-white/15 text-[10px] font-mono text-[#D8B45C]">
                        {sec.badge}
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#D8B45C]">
                        {sec.type}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-serif text-white">
                        {sec.title}
                      </h4>
                      <p className="text-xs text-neutral-300 font-light">
                        {sec.lead}
                      </p>
                    </div>

                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {sec.description}
                    </p>

                    <div className="space-y-1.5">
                      {sec.details.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D8B45C] mt-1 shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 4. DIAGNOSTIC SELF-CHECK (Useful Questions to Consider in Black & Gold) */}
        <div className="rounded-2xl bg-[#161616] border border-white/10 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle gold accent border glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D8B45C] to-transparent opacity-60" />

          <div className="max-w-3xl space-y-2 mb-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D8B45C] font-semibold block">
              CLINICAL SELF-CHECK
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-white">
              Some useful questions to consider
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light">
              Click each question that applies to you. We review these clinical history factors during your initial comprehensive consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
            {questions.map((q, idx) => {
              const isChecked = checkedQuestions.includes(idx);
              return (
                <div
                  key={idx}
                  onClick={() => toggleQuestion(idx)}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                    isChecked
                      ? "bg-[#D8B45C]/10 border-[#D8B45C]/60 text-white"
                      : "bg-[#1C1C1F] border-white/10 text-neutral-300 hover:border-white/25 hover:bg-[#222226]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-[4px] mt-0.5 shrink-0 flex items-center justify-center transition-all ${
                      isChecked
                        ? "bg-[#D8B45C] text-black"
                        : "border border-white/20 bg-black/40 text-transparent"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-xs sm:text-[13px] font-light leading-snug">
                    {q}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-neutral-400 font-light italic max-w-xl">
              If you answered yes to any of the above, a comprehensive assessment with Dr Manish Shah can identify findings that help determine whether jaw-muscle activity or joint derangement is driving your symptoms.
            </p>
            <Link
              href="#booking-section"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#D8B45C] hover:bg-[#E2C373] text-black text-xs font-semibold uppercase tracking-wider transition-all shrink-0 shadow-lg"
            >
              <span>Schedule Assessment</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 5. FLOATING DOWN-ARROW ANCHOR BUTTON (Matching Screenshot 2) */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            href="#signs-of-clenching"
            className="w-11 h-11 rounded-full bg-[#181818] border border-white/20 text-white flex items-center justify-center hover:bg-[#D8B45C] hover:text-black hover:border-[#D8B45C] hover:scale-110 transition-all duration-300 shadow-xl group"
            aria-label="Scroll to clinical signs of clenching"
            title="Scroll to next section"
          >
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
