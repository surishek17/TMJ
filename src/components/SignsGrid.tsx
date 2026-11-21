"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface ClinicalSign {
  id: string;
  title: string;
  img: string;
  alt: string;
  desc: string;
}

export default function SignsGrid() {
  // hoveredIdx is null by default so ALL cards rest at equal width (matching Screenshot 2)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  // slideIndex: 0 means signs 1–6 are visible; increments to slide the remaining cards into view
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const signs: ClinicalSign[] = [
    {
      id: "sign-1",
      title: "Tooth Wear",
      img: "/images/tooth-wear.png",
      alt: "Tooth Wear and accelerated enamel attrition",
      desc: "Flattening or loss of incisal tooth structure over time. While mechanical wear from nocturnal bruxism is a primary cause, dietary acids and gastric reflux also contribute.",
    },
    {
      id: "sign-2",
      title: "Mandibular Tori",
      img: "/images/tori.png",
      alt: "Benign bony tori along the mandibular ridge",
      desc: "Tori are benign bony exostoses that develop along the inside of the lower jaw or palate, frequently correlated with sustained mechanical bite loading and isometric clenching.",
    },
    {
      id: "sign-3",
      title: "Tongue Scalloping",
      img: "/images/tongue-scalloping.png",
      alt: "Indented wavy tongue crenations",
      desc: "Wavy indentations along lateral borders of the tongue created when the tongue is persistently pressed against the teeth during nocturnal bracing or airway distress.",
    },
    {
      id: "sign-4",
      title: "Cracked Teeth",
      img: "/images/cracked-teeth.png",
      alt: "Craze lines and structural enamel fractures",
      desc: "Structural breakdown, hairline craze lines, and sudden cusp fractures occurring without external trauma due to cyclic parafunctional loading.",
    },
    {
      id: "sign-5",
      title: "Facial & Jaw Pain",
      img: "/images/facial-jaw-pain.png",
      alt: "Tender masseter and temporalis muscle regions",
      desc: "Persistent muscular ache, hypertonicity, or focal trigger points around the angles of the jaw, cheekbones, and temples, characteristically heightened upon morning waking.",
    },
    {
      id: "sign-6",
      title: "Morning Headaches",
      img: "/images/headaches.png",
      alt: "Temporal tension headache radiating across temples and eyes",
      desc: "Dull, band-like tension headaches localized to the temporal regions. Over 65% of morning headaches are directly tied to nocturnal masseter and temporalis hyperactivity.",
    },
    {
      id: "sign-7",
      title: "Limited Jaw Opening",
      img: "/images/limited-jaw-opening.png",
      alt: "Restricted mouth opening and painful jaw stiffness",
      desc: "Difficulty opening the mouth comfortably or fully, lateral deflection on opening, or acute episodes where the jaw feels jammed or temporarily caught.",
    },
    {
      id: "sign-8",
      title: "Jaw Joint Clicking",
      img: "/images/jaw-noises.png",
      alt: "TMJ condyle and articular disc displacement clicking noises",
      desc: "Audible clicking, popping, or grating (crepitus) sensations emanating from the preauricular joint space during mandibular opening, closing, or lateral chewing.",
    },
    {
      id: "sign-9",
      title: "Morning Jaw Soreness",
      img: "/images/morning-soreness.png",
      alt: "Stiff exhausted jaw joints and morning facial fatigue",
      desc: "Waking with a sensation of exhaustion in the lower face, feeling as though the jaw had been clenching all night, accompanied by temporary bite stiffness.",
    },
  ];

  // Exactly 6 cards fit in the viewport at a time
  const VISIBLE_COUNT = 6;
  const maxSlide = signs.length - VISIBLE_COUNT; // 9 - 6 = 3

  const nextSlide = () => {
    setHoveredIdx(null);
    setSlideIndex((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setHoveredIdx(null);
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  // Dynamic width calculation ensuring visible cards sum to exactly 100% of viewport
  // Track has width 150% (holds 9 cards where 6 fit 100% of viewport)
  // When unhovered: each card = (100% / 9) = 11.1111% of track => 11.1111% * 1.5 = 16.6667% of viewport (exactly 6 cards!)
  // When hovered: hovered card = 18.6667% of track (28% of viewport)
  // Other 5 visible cards = 9.6% of track (14.4% of viewport) => 18.6667% + 5 * 9.6% = 66.6667% of track = 100% of viewport!
  const getCardWidth = (idx: number) => {
    if (hoveredIdx === null) {
      return "11.1111%";
    }
    const isHoveredVisible = hoveredIdx >= slideIndex && hoveredIdx < slideIndex + VISIBLE_COUNT;
    if (!isHoveredVisible) {
      return "11.1111%";
    }
    // Hovered card expands smoothly
    if (idx === hoveredIdx) {
      return "18.6667%";
    }
    // Other 5 visible cards contract smoothly: (66.6667% - 18.6667%) / 5 = 9.6%
    if (idx >= slideIndex && idx < slideIndex + VISIBLE_COUNT) {
      return "9.6%";
    }
    return "11.1111%";
  };

  const scrollMobile = (direction: "left" | "right") => {
    if (!mobileScrollRef.current) return;
    const amount = 300;
    mobileScrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="signs-of-clenching"
      className="relative bg-[#0A0A0A] text-[#FAF9F6] py-20 sm:py-28 overflow-hidden border-t border-b border-white/[0.08]"
      data-gsap="reveal"
    >
      {/* Header Container (Matching Spa Dental Luxury Header Layout) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mb-10 sm:mb-14">
        <div className="max-w-3xl space-y-3.5">
          <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#9B8A78] font-medium block">
            Recognising Possible Bruxism
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-light text-white leading-[1.08] tracking-tight uppercase">
            Signs that may be associated with{" "}
            <span className="italic font-light text-[#E8E4DF]">clenching or grinding.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl pt-1">
            Bruxism can sometimes be associated with changes to the teeth, jaw muscles, and surrounding tissues.
            However, none of the findings below confirms bruxism on its own, and many can occur for reasons unrelated
            to grinding or clenching.
          </p>
        </div>
      </div>

      {/* DESKTOP: Exactly 6 Cards on Screen at a Time with Smooth Sliding to reveal the rest */}
      <div className="hidden lg:block w-full relative">
        {/* Floating Side Slide Controls */}
        {slideIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/85 border border-white/25 text-white flex items-center justify-center backdrop-blur-md hover:bg-[#9B8A78] hover:text-black hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer"
            aria-label="Slide to previous clinical signs"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {slideIndex < maxSlide && (
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/85 border border-white/25 text-white flex items-center justify-center backdrop-blur-md hover:bg-[#9B8A78] hover:text-black hover:scale-105 transition-all duration-300 shadow-2xl cursor-pointer"
            aria-label="Slide to reveal more clinical signs"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Viewport Container (Clips to 100% width, showing exactly 6 cards) */}
        <div
          className="w-full h-[520px] xl:h-[580px] 2xl:h-[620px] overflow-hidden bg-[#0A0A0A] select-none border-t border-b border-white/[0.08]"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {/* Sliding Track (150% width to hold 9 cards where 6 fit 100% of viewport) */}
          <div
            className="flex h-full transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: "150%",
              transform: `translateX(-${slideIndex * (100 / 9)}%)`,
            }}
          >
            {signs.map((item, idx) => {
              const isAnyHovered = hoveredIdx !== null;
              const isHovered = hoveredIdx === idx;
              const cardWidth = getCardWidth(idx);

              // Dimming veil:
              // - When no card hovered: 60% overlay (unopened state matching Screenshot 2)
              // - When this card is hovered: 0% overlay (FULLY BRIGHT, illuminated, highlighted!)
              // - When another card is hovered: 85% overlay (HEAVILY FADED / DIMMED!)
              const dimOverlayClass = isHovered
                ? "opacity-0"
                : isAnyHovered
                ? "opacity-85 bg-black"
                : "opacity-60 bg-black";

              // Title styling:
              // - Hovered: Top 19%, larger font, bright white
              // - Other cards (when another is hovered): Centered, faded neutral-400
              // - Default (unhovered): Centered, crisp off-white #F5F0EB
              const titleClass = isHovered
                ? "text-2xl xl:text-3xl 2xl:text-4xl text-white font-normal"
                : isAnyHovered
                ? "text-sm xl:text-base text-neutral-400/60 font-light"
                : "text-lg xl:text-xl 2xl:text-2xl text-[#F5F0EB] font-light";

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className="group relative h-full shrink-0 cursor-pointer overflow-hidden border-r border-white/20 transition-all duration-550 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    width: cardWidth,
                    transition:
                      "width 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* Background Image (Cover with Subtle Hover Zoom) */}
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isHovered
                        ? "scale-105 filter-none"
                        : isAnyHovered
                        ? "scale-100 brightness-[0.4]"
                        : "scale-100 brightness-[0.8]"
                    }`}
                    sizes="(max-width: 1400px) 25vw, 16vw"
                    priority={idx < 6}
                  />

                  {/* Dark Dim Overlay (Highlight vs Faded) */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 pointer-events-none z-10 ${dimOverlayClass}`}
                  />

                  {/* Top-to-Bottom Subtle Gradient (Active on Highlighted Card) */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 pointer-events-none z-10 ${
                      isHovered
                        ? "opacity-100 bg-gradient-to-t from-black/80 via-transparent to-black/50"
                        : "opacity-0"
                    }`}
                  />

                  {/* Title: Exactly centered when unhovered (Screenshot 2); animates to top on hover */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 z-20 w-[88%] text-center transition-all duration-550 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isHovered ? "top-[19%]" : "top-1/2 -translate-y-1/2"
                    }`}
                  >
                    <h3
                      className={`font-serif tracking-normal transition-all duration-550 leading-tight ${titleClass}`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Bottom Action Pill Button (Reveals on hover matching Spa Dental: "Learn more about...") */}
                  <div
                    className={`absolute bottom-9 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-[340px] text-center transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isHovered
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <Link
                      href="#booking-section"
                      className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-[#1C1C1E] text-white border border-white/20 hover:border-white/40 px-4 py-2.5 rounded-[4px] text-xs font-medium tracking-wide transition-all shadow-xl whitespace-nowrap"
                    >
                      <span>Learn more about {item.title}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtle slide step indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: maxSlide + 1 }).map((_, step) => (
            <button
              key={step}
              onClick={() => {
                setHoveredIdx(null);
                setSlideIndex(step);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                slideIndex === step ? "w-8 bg-[#9B8A78]" : "w-2.5 bg-white/20 hover:bg-white/40 cursor-pointer"
              }`}
              aria-label={`Slide to sign group ${step + 1}`}
            />
          ))}
        </div>
      </div>

      {/* MOBILE & TABLET: Smooth Snap Carousel (< 1024px) - No Numbering */}
      <div className="block lg:hidden px-4 sm:px-6">
        <div
          ref={mobileScrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
          style={{ scrollbarWidth: "none" }}
        >
          {signs.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[80vw] max-w-[320px] aspect-[3/4.4] rounded-xl overflow-hidden relative border border-white/15 bg-[#141416] flex flex-col justify-end p-6 shadow-xl"
            >
              {/* Background Image */}
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="320px"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/60 z-10" />

              {/* Bottom Content (No Numbering) */}
              <div className="relative z-20 space-y-3">
                <h3 className="font-serif text-2xl font-light text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light line-clamp-3 leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-2">
                  <Link
                    href="#booking-section"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-[4px] bg-[#0A0A0A] border border-white/25 text-white hover:bg-white hover:text-black text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <span>Learn more about {item.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
          <span className="text-xs text-neutral-400 font-light">
            Swipe to explore clinical signs
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollMobile("left")}
              className="p-2 rounded-full border border-white/15 bg-white/[0.05] text-white hover:bg-white/[0.1] transition-all"
              aria-label="Previous sign"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollMobile("right")}
              className="p-2 rounded-full border border-white/15 bg-white/[0.05] text-white hover:bg-white/[0.1] transition-all"
              aria-label="Next sign"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
