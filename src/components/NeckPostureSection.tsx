"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, Sparkles, Activity, ShieldCheck, ArrowDown, Info, Check, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Hotspot {
  id: string;
  title: string;
  region: string;
  top: string;
  left: string;
  summary: string;
  clinicalImpact: string;
}

export default function NeckPostureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string>("cervical");
  const [postureState, setPostureState] = useState<"neutral" | "forward">("forward");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showAirwayInfo, setShowAirwayInfo] = useState<boolean>(false);
  const [cardTilt, setCardTilt] = useState<{ [key: string]: { x: number; y: number } }>({});

  // 4 Interactive Anatomical Hotspots
  const hotspots: Hotspot[] = [
    {
      id: "tmj",
      title: "Temporomandibular Joint (TMJ)",
      region: "Craniofacial Junction",
      top: "22%",
      left: "34%",
      summary: "Mandibular condyle connects directly into the temporal bone base.",
      clinicalImpact:
        "The jaw elevators co-activate with upper cervical stabilizers. Clenching or grinding reflexively increases tension in the suboccipital and neck muscles.",
    },
    {
      id: "cervical",
      title: "Cervical Spine (C1–C7)",
      region: "Trigeminocervical Axis",
      top: "38%",
      left: "54%",
      summary: "Upper cervical vertebrae house critical sensory-motor pathways.",
      clinicalImpact:
        "Sensory nerve fibers from C1–C3 converge directly with the trigeminal nerve in the trigeminocervical nucleus. Cervical dysfunction can thus manifest as jaw, facial, or headache pain.",
    },
    {
      id: "neck",
      title: "Suboccipital & Scalene Muscles",
      region: "Deep Neck Flexors & Extensors",
      top: "50%",
      left: "46%",
      summary: "Postural muscles that stabilize the skull atop the spine.",
      clinicalImpact:
        "Chronic shortening pulls the mandible backward into posterior joint compression, reducing TMJ disc clearance and perpetuating myofascial trigger points.",
    },
    {
      id: "shoulder",
      title: "Trapezius & Shoulder Girdle",
      region: "Scapulothoracic Complex",
      top: "68%",
      left: "72%",
      summary: "Large superficial muscle stabilizing the shoulder and upper back.",
      clinicalImpact:
        "Shares neurological innervation via Cranial Nerve XI (Spinal Accessory). Emotional stress and nocturnal clenching trigger involuntary shoulder elevation and chronic stiffness.",
    },
  ];

  // Mouse tilt effect for 3D cards
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

  // GSAP scroll animations
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from("[data-gsap='fade-in']", {
          opacity: 0,
          y: 30,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const activeHotspotData = hotspots.find((h) => h.id === activeHotspot) || hotspots[1];

  return (
    <section
      ref={sectionRef}
      id="neck-posture"
      className="relative py-20 sm:py-28 bg-[#111111] text-[#FAF9F6] overflow-hidden border-t border-b border-white/[0.08]"
    >
      {/* Cinematic Studio Lighting Subtle Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#D8B45C]/[0.035] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-[#092E6E]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. TOP TWO-COLUMN INTRODUCTION (Matches Reference Screenshot)             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Heading, Clinical Context & Subtitle */}
          <div className="lg:col-span-6 space-y-6" data-gsap="fade-in">
            <span className="text-[11px] sm:text-[12px] font-sans font-medium uppercase tracking-[0.2em] text-[#D8B45C] block">
              THE NECK, SHOULDERS &amp; JAW
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-serif font-light text-white leading-[1.08] tracking-tight uppercase">
              WHY DO I HAVE <br />
              <span className="text-[#D8B45C] font-normal">NECK &amp; SHOULDER PAIN?</span>
            </h2>

            <p className="text-white font-medium text-[17px] sm:text-[19px] leading-snug">
              The jaw, head, and neck do not function independently.
            </p>

            <div className="space-y-4 text-[15px] sm:text-[16px] text-white/70 leading-[1.8] font-light">
              <p>
                The muscles and joints involved in jaw movement interact with the muscles that control the head, neck and shoulders. As a result, jaw symptoms and neck symptoms frequently occur together.
              </p>
              <p>
                Posture, muscle tension, sleep quality and other musculoskeletal factors may all contribute to persistent discomfort across this anatomical network.
              </p>
            </div>

            {/* Airway & Breathing Dynamics Dropdown Card */}
            <div className="bg-[#181818] border border-white/[0.08] rounded-[16px] p-5 transition-all duration-300 hover:border-[#D8B45C]/30">
              <button
                onClick={() => setShowAirwayInfo(!showAirwayInfo)}
                className="w-full flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D8B45C]/10 border border-[#D8B45C]/20 flex items-center justify-center text-[#D8B45C]">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white group-hover:text-[#D8B45C] transition-colors">
                      Breathing Patterns &amp; Airway Dynamics
                    </h4>
                    <p className="text-[12px] text-white/50">
                      How nasal obstruction and mouth breathing alter cervical posture
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-white/50 transition-transform duration-300 ${
                    showAirwayInfo ? "rotate-180 text-[#D8B45C]" : ""
                  }`}
                />
              </button>

              {showAirwayInfo && (
                <div className="mt-4 pt-4 border-t border-white/[0.06] text-[13px] text-white/70 space-y-2 leading-relaxed animate-fadeIn">
                  <p>
                    Persistent nasal resistance and mouth breathing can cause a patient to reflexively tilt their head backward and forward (forward head carriage) to open the pharyngeal airway.
                  </p>
                  <p>
                    This posture increases strain on the cervical spine and retracts the mandible, creating joint compression at the TMJ. Where symptoms suggest impaired nasal breathing, multi-disciplinary assessment is recommended.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: 3D Photorealistic Upper-Body Model with Glowing Skeletal & Hotspots */}
          <div className="lg:col-span-6" data-gsap="fade-in">
            <div className="relative rounded-[22px] bg-[#161616] border border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden group">
              
              {/* Studio Backdrop Subtle Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B0B] via-[#141414] to-[#1A1A1A] opacity-90" />
              
              {/* Glowing Amber Highlight Aura */}
              <div className="absolute top-[20%] right-[20%] w-[260px] h-[260px] bg-[#D8B45C]/10 rounded-full blur-[70px] pointer-events-none" />

              {/* 3D Anatomical Render Container */}
              <div className="relative aspect-[4/3] sm:aspect-[1.15/1] w-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/neck-spine-3d-model.jpg"
                  alt="Photorealistic 3D anatomical human upper-body model showing glowing golden cervical spine, ribs and skull"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />

                {/* Golden Studio Rim Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#161616]/60 via-transparent to-transparent" />

                {/* Interactive Hotspots Over 3D Model */}
                {hotspots.map((hs) => {
                  const isActive = activeHotspot === hs.id;
                  return (
                    <div
                      key={hs.id}
                      style={{ top: hs.top, left: hs.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <button
                        onClick={() => setActiveHotspot(hs.id)}
                        onMouseEnter={() => setActiveHotspot(hs.id)}
                        className={`relative group/btn flex items-center justify-center p-2 rounded-full focus:outline-none transition-all duration-300 ${
                          isActive ? "scale-125" : "hover:scale-110"
                        }`}
                        aria-label={`Inspect ${hs.title}`}
                      >
                        {/* Soft Pulsing Rings */}
                        <span
                          className={`absolute w-7 h-7 rounded-full bg-[#D8B45C]/30 animate-ping duration-1000 ${
                            isActive ? "opacity-100" : "opacity-40"
                          }`}
                        />
                        <span
                          className={`relative w-4 h-4 rounded-full border border-white/60 flex items-center justify-center transition-all ${
                            isActive
                              ? "bg-[#D8B45C] shadow-[0_0_15px_#D8B45C]"
                              : "bg-[#252525]/90 hover:bg-[#D8B45C]/80"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive ? "bg-black" : "bg-white"
                            }`}
                          />
                        </span>
                      </button>
                    </div>
                  );
                })}

                {/* Hotspot Floating Insight Card (Desktop & Tablet) */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-[#121212]/90 backdrop-blur-md border border-[#D8B45C]/30 rounded-[14px] p-3.5 sm:p-4 shadow-2xl transition-all duration-300">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D8B45C] animate-pulse" />
                        <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-[#D8B45C]">
                          {activeHotspotData.region}
                        </span>
                      </div>
                      <span className="text-[10px] text-white/40 uppercase tracking-widest hidden sm:inline">
                        Interactive Hotspot
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-serif font-medium text-white mb-1">
                      {activeHotspotData.title}
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-white/70 leading-relaxed font-light">
                      {activeHotspotData.clinicalImpact}
                    </p>
                  </div>
                </div>

              </div>

              {/* Hotspot Selector Pills (for Quick Mobile Touch) */}
              <div className="p-3 bg-[#131313] border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto no-scrollbar">
                {hotspots.map((hs) => (
                  <button
                    key={hs.id}
                    onClick={() => setActiveHotspot(hs.id)}
                    className={`text-[11px] font-sans whitespace-nowrap px-3 py-1.5 rounded-full transition-all duration-200 ${
                      activeHotspot === hs.id
                        ? "bg-[#D8B45C] text-black font-medium shadow-sm"
                        : "bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    {hs.title.split("(")[0].trim()}
                  </button>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. SECTION: UNDERSTANDING THE CONNECTION (Matches Reference Screenshot)   */}
        {/* ========================================================================= */}
        <div className="pt-6 pb-12" data-gsap="fade-in">
          
          {/* Eyebrow Subheading */}
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-sm sm:text-base font-sans font-semibold uppercase tracking-[0.22em] text-white">
              UNDERSTANDING THE CONNECTION
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
          </div>

          {/* Two-Column Grid of 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1: NECK & SPINE */}
            <div
              onMouseMove={(e) => handleMouseMove(e, "neck-spine")}
              onMouseLeave={() => handleMouseLeave("neck-spine")}
              style={{
                transform: `perspective(1000px) rotateX(${cardTilt["neck-spine"]?.x || 0}deg) rotateY(${cardTilt["neck-spine"]?.y || 0}deg)`,
                transition: cardTilt["neck-spine"] ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
              }}
              className="bg-[#181818] rounded-[20px] p-5 sm:p-6 border border-white/[0.08] shadow-[0_15px_45px_rgba(0,0,0,0.6)] hover:border-[#D8B45C]/40 transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 3D Cervical Spine Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-[14px] overflow-hidden bg-[#0F0F0F] mb-5 border border-white/[0.06]">
                  <Image
                    src="/images/cervical-spine-3d.jpg"
                    alt="Posterior and lateral view of cervical spine vertebrae highlighted in radiant gold"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-60" />
                  
                  {/* Subtle Top Badge */}
                  <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] tracking-widest uppercase text-[#D8B45C]">
                    Cervicocranial Axis
                  </div>
                </div>

                {/* Typography Matching Screenshot */}
                <h4 className="text-lg sm:text-xl font-sans font-bold text-white tracking-wide uppercase mb-1">
                  NECK &amp; SPINE
                </h4>
                <p className="text-[13px] sm:text-[14px] text-white/60 font-light mb-4">
                  Muscles and cervical structures.
                </p>

                {/* Clinical Breakdown */}
                <div className="space-y-2.5 text-[13px] text-white/70 font-light leading-relaxed border-t border-white/[0.06] pt-4">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8B45C] mt-2 flex-shrink-0" />
                    <p>
                      <strong className="text-white font-normal">Trigeminocervical Nucleus:</strong> Upper cervical spinal nerves (C1–C3) converge directly into the sensory core of the trigeminal nerve.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8B45C] mt-2 flex-shrink-0" />
                    <p>
                      <strong className="text-white font-normal">Suboccipital Tension:</strong> Shortened muscles at the base of the skull compress greater occipital nerves, radiating pain to the temples and eyes.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8B45C] mt-2 flex-shrink-0" />
                    <p>
                      <strong className="text-white font-normal">Altered Head Tilt:</strong> Forward translation forces reciprocal mandibular retrusion, straining the retrodiscal pad.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expandable Clinical Notes */}
              <div className="mt-5 pt-3 border-t border-white/[0.06]">
                <button
                  onClick={() => setExpandedCard(expandedCard === "spine" ? null : "spine")}
                  className="w-full flex items-center justify-between text-[12px] text-[#D8B45C] font-medium hover:underline focus:outline-none"
                >
                  <span>{expandedCard === "spine" ? "Hide Clinical Findings" : "View Diagnostic Implications"}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      expandedCard === "spine" ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {expandedCard === "spine" && (
                  <div className="mt-3 p-3 bg-black/40 rounded-lg border border-white/[0.04] text-[12px] text-white/70 space-y-1.5 animate-fadeIn">
                    <p>
                      Patients presenting with chronic TMJ clicking and facial soreness routinely exhibit hypertonicity in the deep neck rotators. Addressing the cervical spine is vital for lasting TMJ recovery.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Card 2: SHOULDER MUSCLES */}
            <div
              onMouseMove={(e) => handleMouseMove(e, "shoulder-muscles")}
              onMouseLeave={() => handleMouseLeave("shoulder-muscles")}
              style={{
                transform: `perspective(1000px) rotateX(${cardTilt["shoulder-muscles"]?.x || 0}deg) rotateY(${cardTilt["shoulder-muscles"]?.y || 0}deg)`,
                transition: cardTilt["shoulder-muscles"] ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
              }}
              className="bg-[#181818] rounded-[20px] p-5 sm:p-6 border border-white/[0.08] shadow-[0_15px_45px_rgba(0,0,0,0.6)] hover:border-[#D8B45C]/40 transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 3D Shoulder Muscles Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-[14px] overflow-hidden bg-[#0F0F0F] mb-5 border border-white/[0.06]">
                  <Image
                    src="/images/shoulder-trapezius-3d.jpg"
                    alt="Posterior muscular human model highlighting trapezius and levator scapulae in glowing orange-gold"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-60" />
                  
                  {/* Subtle Top Badge */}
                  <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] tracking-widest uppercase text-[#D8B45C]">
                    Myofascial Slings
                  </div>
                </div>

                {/* Typography Matching Screenshot */}
                <h4 className="text-lg sm:text-xl font-sans font-bold text-white tracking-wide uppercase mb-1">
                  SHOULDER MUSCLES
                </h4>
                <p className="text-[13px] sm:text-[14px] text-white/60 font-light mb-4">
                  Muscular interactions and tension.
                </p>

                {/* Clinical Breakdown */}
                <div className="space-y-2.5 text-[13px] text-white/70 font-light leading-relaxed border-t border-white/[0.06] pt-4">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8B45C] mt-2 flex-shrink-0" />
                    <p>
                      <strong className="text-white font-normal">Reciprocal Co-Contraction:</strong> Forceful jaw clenching triggers involuntary elevation and bracing of the upper trapezius muscles.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8B45C] mt-2 flex-shrink-0" />
                    <p>
                      <strong className="text-white font-normal">Spinal Accessory Nerve (CN XI):</strong> Controls shoulder elevation and communicates with cranial reflex pathways during stress response.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8B45C] mt-2 flex-shrink-0" />
                    <p>
                      <strong className="text-white font-normal">Thoracic Suspension:</strong> Forward slouching loads the levator scapulae and rhomboids, pulling tension into the angle of the jaw.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expandable Clinical Notes */}
              <div className="mt-5 pt-3 border-t border-white/[0.06]">
                <button
                  onClick={() => setExpandedCard(expandedCard === "shoulder" ? null : "shoulder")}
                  className="w-full flex items-center justify-between text-[12px] text-[#D8B45C] font-medium hover:underline focus:outline-none"
                >
                  <span>{expandedCard === "shoulder" ? "Hide Clinical Findings" : "View Diagnostic Implications"}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      expandedCard === "shoulder" ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {expandedCard === "shoulder" && (
                  <div className="mt-3 p-3 bg-black/40 rounded-lg border border-white/[0.04] text-[12px] text-white/70 space-y-1.5 animate-fadeIn">
                    <p>
                      Chronic shoulder bracing restricts natural diaphragmatic excursion, encouraging upper-chest mouth breathing and perpetuating nocturnal airway resistance and clenching.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Floating Downward Navigation Button (Matching Bottom of Screenshot) */}
          <div className="flex justify-center pt-8">
            <a
              href="#appointment"
              className="w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.18] border border-white/20 hover:border-[#D8B45C]/60 flex items-center justify-center transition-all duration-300 hover:scale-105 group shadow-lg"
              aria-label="Scroll to clinical assessment"
            >
              <ArrowDown className="w-4 h-4 text-white/80 group-hover:text-[#D8B45C] transition-colors duration-300 animate-bounce" />
            </a>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE FORWARD-HEAD-POSTURE COMPARISON                           */}
        {/* ========================================================================= */}
        <div className="pt-10 border-t border-white/[0.08]" data-gsap="fade-in">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-8">
              <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#D8B45C] block mb-2">
                BIOMECHANICAL ALIGNMENT COMPARISON
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-white uppercase tracking-tight">
                Forward Head Posture &amp; Spinal Load
              </h3>
              <p className="text-[14px] sm:text-[15px] text-white/60 font-light mt-2 max-w-2xl mx-auto">
                Each inch the head migrates forward adds exponential gravitational weight to the cervical vertebrae and forces the jaw backward.
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex p-1.5 rounded-full bg-[#1A1A1A] border border-white/[0.1]">
                <button
                  onClick={() => setPostureState("neutral")}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    postureState === "neutral"
                      ? "bg-[#D8B45C] text-black shadow-md font-semibold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Neutral Posture (0° Tilt)
                </button>
                <button
                  onClick={() => setPostureState("forward")}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    postureState === "forward"
                      ? "bg-[#D8B45C] text-black shadow-md font-semibold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Forward Carriage (+2 Inches)
                </button>
              </div>
            </div>

            {/* Comparison Display Card */}
            <div className="bg-[#161616] rounded-[22px] border border-white/[0.08] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Visual Alignment Diagram with Golden Plumb Line */}
                <div className="md:col-span-5 relative">
                  <div className="relative aspect-[3/4] rounded-[16px] overflow-hidden bg-[#0D0D0D] border border-white/[0.06] flex items-center justify-center p-4">
                    
                    {/* Background Posture Image */}
                    <Image
                      src="/images/forward-head-carriage.jpg"
                      alt="3D Cervical load comparison diagram"
                      fill
                      className={`object-contain transition-all duration-700 ${
                        postureState === "neutral" ? "brightness-95 contrast-105" : "brightness-110 contrast-115"
                      }`}
                    />

                    {/* Golden Alignment Plumb Line Overlay */}
                    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-between p-6">
                      {/* Top Plumb Anchor */}
                      <div className="w-full flex items-center justify-between">
                        <span className="text-[10px] text-[#D8B45C] uppercase tracking-wider font-mono">
                          {postureState === "neutral" ? "Axis: 0° Neutral" : "Axis: +32° Shear"}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#D8B45C] animate-ping" />
                      </div>

                      {/* Dynamic Golden Guide Line */}
                      <div
                        className={`w-0.5 h-3/4 transition-all duration-700 ${
                          postureState === "neutral"
                            ? "bg-[#D8B45C] shadow-[0_0_10px_#D8B45C]"
                            : "bg-red-500/80 shadow-[0_0_12px_rgba(239,68,68,0.8)] rotate-12 translate-x-4"
                        }`}
                      />

                      {/* Bottom Alignment Base */}
                      <div className="w-full text-center">
                        <span className="text-[11px] text-white/50 font-mono">
                          {postureState === "neutral" ? "Shoulder Center Reference" : "Compensated Postural Base"}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Metrics & Clinical Data */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-md ${
                          postureState === "neutral"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-[#D8B45C]/10 text-[#D8B45C] border border-[#D8B45C]/30"
                        }`}
                      >
                        {postureState === "neutral" ? "Physiological Equilibrium" : "Severe Gravitational Strain"}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-serif font-light text-white">
                      {postureState === "neutral"
                        ? "Balanced Cervical Alignment (10–12 lbs)"
                        : "Forward Head Displacement (32–42 lbs)"}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed mt-2 font-light">
                      {postureState === "neutral"
                        ? "When the ear aligns directly over the shoulder, the cervical spine carries the head's true anatomical weight without strain. The lower jaw rests in physiological balance with no retrusive traction."
                        : "For every inch the head drifts forward, the neck muscles must counteract an additional 10 to 15 lbs of leverage. Over time, the lower jaw is drawn backwards, compressing the sensitive retrodiscal tissue of the TMJ."}
                    </p>
                  </div>

                  {/* 3 Metric Badges */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="bg-[#1C1C1C] rounded-[12px] p-3 border border-white/[0.06] text-center">
                      <span className="text-[11px] text-white/50 block">Effective Load</span>
                      <span
                        className={`text-lg sm:text-xl font-bold ${
                          postureState === "neutral" ? "text-emerald-400" : "text-[#D8B45C]"
                        }`}
                      >
                        {postureState === "neutral" ? "10–12 lbs" : "42 lbs"}
                      </span>
                    </div>
                    <div className="bg-[#1C1C1C] rounded-[12px] p-3 border border-white/[0.06] text-center">
                      <span className="text-[11px] text-white/50 block">Muscle Strain</span>
                      <span
                        className={`text-lg sm:text-xl font-bold ${
                          postureState === "neutral" ? "text-emerald-400" : "text-[#D8B45C]"
                        }`}
                      >
                        {postureState === "neutral" ? "Baseline" : "3.5x Load"}
                      </span>
                    </div>
                    <div className="bg-[#1C1C1C] rounded-[12px] p-3 border border-white/[0.06] text-center">
                      <span className="text-[11px] text-white/50 block">Mandibular Pull</span>
                      <span
                        className={`text-lg sm:text-xl font-bold ${
                          postureState === "neutral" ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        {postureState === "neutral" ? "Neutral" : "Retruded"}
                      </span>
                    </div>
                  </div>

                  {/* Anatomical Key Findings Checklist */}
                  <div className="space-y-2 border-t border-white/[0.06] pt-4 text-[13px] text-white/70">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#D8B45C] flex-shrink-0" />
                      <span>
                        {postureState === "neutral"
                          ? "Tempero-mandibular condyle rests centrally in the glenoid fossa"
                          : "Condyle shifted posterior-superiorly, compressing retrodiscal pad"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#D8B45C] flex-shrink-0" />
                      <span>
                        {postureState === "neutral"
                          ? "Suboccipital triangle relaxed without nerve irritation"
                          : "Suboccipital spasm radiating tension to temples and frontal headache"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#D8B45C] flex-shrink-0" />
                      <span>
                        {postureState === "neutral"
                          ? "Pharyngeal airway maintains full cross-sectional diameter"
                          : "Airway collapse compensatory mechanism forcing mouth breathing"}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
