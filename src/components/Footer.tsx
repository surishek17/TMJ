"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Footer() {
  const [locationIndex, setLocationIndex] = useState(0);

  const locations = [
    {
      title: "Sydney CBD Clinic",
      addressLine1: "Suite 403, Level 4, 307",
      addressLine2: "Pitt Street, Sydney",
      addressLine3: "CBD, NSW 2000",
      phone: "02 9264 9120",
    },
    {
      title: "Telehealth & Regional Consults",
      addressLine1: "Virtual Craniofacial &",
      addressLine2: "Sleep Consultations Across",
      addressLine3: "NSW & Australia",
      phone: "02 9264 9120",
    },
  ];

  const nextLocation = () => {
    setLocationIndex((prev) => (prev + 1) % locations.length);
  };

  const prevLocation = () => {
    setLocationIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  const currentLoc = locations[locationIndex];

  return (
    <footer className="bg-[#0A0A0A] text-[#EDE8E1] pt-20 pb-8 border-t border-white/10 overflow-hidden select-none">
      {/* Top 6-Column Navigation Grid & Partners (Contained Width) */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Care & Treatments */}
          <div className="space-y-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-white/50 block">
              Care &amp; Treatments
            </span>
            <ul className="space-y-1.5 font-serif text-[17px] text-[#EDE8E1] font-light leading-[1.6]">
              <li>
                <Link href="#tmj-headaches" className="hover:text-[#9B8A78] transition-colors">
                  TMJ &amp; TMD Therapy
                </Link>
              </li>
              <li>
                <Link href="#bruxism" className="hover:text-[#9B8A78] transition-colors">
                  Teeth Grinding (Bruxism)
                </Link>
              </li>
              <li>
                <Link href="#neck-posture" className="hover:text-[#9B8A78] transition-colors">
                  Headache &amp; Neck Relief
                </Link>
              </li>
              <li>
                <Link href="#signs-of-clenching" className="hover:text-[#9B8A78] transition-colors">
                  Jaw Clicking &amp; Locking
                </Link>
              </li>
              <li>
                <Link href="#how-we-manage" className="hover:text-[#9B8A78] transition-colors">
                  Snoring &amp; Sleep Apnoea
                </Link>
              </li>
              <li>
                <Link href="#how-we-manage" className="hover:text-[#9B8A78] transition-colors">
                  Oral Appliance Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-white/50 block">
              Explore
            </span>
            <ul className="space-y-1.5 font-serif text-[17px] text-[#EDE8E1] font-light leading-[1.6]">
              <li>
                <Link href="#about" className="hover:text-[#9B8A78] transition-colors">
                  Dr Manish Shah
                </Link>
              </li>
              <li>
                <Link href="#the-basics" className="hover:text-[#9B8A78] transition-colors">
                  The Clinical Approach
                </Link>
              </li>
              <li>
                <Link href="#the-basics" className="hover:text-[#9B8A78] transition-colors">
                  TMJ Anatomy Guide
                </Link>
              </li>
              <li>
                <Link href="#neck-posture" className="hover:text-[#9B8A78] transition-colors">
                  Posture Biomechanics
                </Link>
              </li>
              <li>
                <Link href="#monitoring-progress" className="hover:text-[#9B8A78] transition-colors">
                  Maximal Improvement
                </Link>
              </li>
              <li>
                <Link href="#blogs" className="hover:text-[#9B8A78] transition-colors">
                  Clinical Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-white/50 block">
              Resources
            </span>
            <ul className="space-y-1.5 font-serif text-[17px] text-[#EDE8E1] font-light leading-[1.6]">
              <li>
                <Link href="#contact" className="hover:text-[#9B8A78] transition-colors">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#9B8A78] transition-colors">
                  Early Super Release
                </Link>
              </li>
              <li>
                <Link href="#how-we-manage" className="hover:text-[#9B8A78] transition-colors">
                  Treatment Plans
                </Link>
              </li>
              <li>
                <Link href="#how-we-assess" className="hover:text-[#9B8A78] transition-colors">
                  Sleep Study Referrals
                </Link>
              </li>
              <li>
                <Link href="#diagnosis" className="hover:text-[#9B8A78] transition-colors">
                  Differential Diagnosis
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-[#9B8A78] transition-colors">
                  Patient FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Start Here */}
          <div className="space-y-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-white/50 block">
              Start Here
            </span>
            <ul className="space-y-1.5 font-serif text-[17px] text-[#EDE8E1] font-light leading-[1.6]">
              <li>
                <Link href="#contact" className="hover:text-[#9B8A78] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#9B8A78] transition-colors">
                  For Referring Dentists
                </Link>
              </li>
              <li>
                <Link href="#how-we-assess" className="hover:text-[#9B8A78] transition-colors">
                  For New Patients
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#9B8A78] transition-colors">
                  Areas We Serve
                </Link>
              </li>
              <li>
                <Link href="#contributing-factors" className="hover:text-[#9B8A78] transition-colors">
                  Self-Check Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us On */}
          <div className="space-y-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-white/50 block">
              Follow Us On
            </span>
            <ul className="space-y-1.5 font-serif text-[17px] text-[#EDE8E1] font-light leading-[1.6]">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9B8A78] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9B8A78] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9B8A78] transition-colors"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9B8A78] transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9B8A78] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Column 6: Our Locations (with interactive slider) */}
          <div className="space-y-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.12em] text-white/50 block">
              Our Locations
            </span>
            <div className="font-serif text-[18px] sm:text-[19px] text-[#EDE8E1] font-light leading-[1.4] space-y-1">
              <p>{currentLoc.addressLine1}</p>
              <p>{currentLoc.addressLine2}</p>
              <p>{currentLoc.addressLine3}</p>
              <a
                href={`tel:${currentLoc.phone.replace(/\s+/g, "")}`}
                className="block pt-2 text-[19px] font-normal hover:text-[#9B8A78] transition-colors"
              >
                {currentLoc.phone}
              </a>
            </div>

            {/* Slider arrows */}
            <div className="flex items-center gap-2 pt-3">
              <button
                onClick={prevLocation}
                aria-label="Previous location"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextLocation}
                aria-label="Next location"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Row: Easy Payments + Clinical Accreditations / Provider Badges */}
        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/10">
          {/* Payment Partners */}
          <div className="space-y-3">
            <span className="text-[12px] font-sans text-white/50 tracking-wide block">
              Easy payments partnered with
            </span>
            <div className="flex items-center gap-6 sm:gap-8 opacity-80 filter brightness-110">
              {/* NDP / HICAPS */}
              <div className="flex items-center gap-1.5 font-sans font-bold text-sm tracking-tighter text-white">
                <span className="border border-white/60 px-1 py-0.5 rounded text-[10px]">HICAPS</span>
                <span className="text-[10px] text-white/60 tracking-normal uppercase">On-the-spot</span>
              </div>

              {/* TLC */}
              <div className="font-serif italic font-bold text-lg tracking-wider text-white">
                TLC
                <span className="not-italic text-[9px] font-sans block text-white/50 tracking-tight -mt-1">
                  Dental Plans
                </span>
              </div>

              {/* Afterpay */}
              <div className="flex items-center gap-1 font-sans text-sm font-semibold tracking-tight text-white">
                <span>afterpay</span>
                <span className="text-[11px] text-[#B2FCE4]">◆</span>
              </div>

              {/* Zip */}
              <div className="flex items-center gap-1 font-sans text-sm font-black tracking-tight text-white">
                <span className="bg-white text-black px-1 rounded text-[10px] font-black">zip</span>
              </div>

              {/* SuperCare */}
              <div className="hidden sm:flex flex-col text-[10px] font-sans text-white/70 uppercase tracking-widest border-l border-white/20 pl-4">
                <span>SuperCare</span>
                <span className="text-[8px] text-white/40 lowercase">early super release</span>
              </div>
            </div>
          </div>

          {/* Accreditation Badges / Excellence Years */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
              <div
                key={year}
                className="flex flex-col items-center justify-center border border-white/25 rounded px-2.5 py-1.5 text-center min-w-[52px] bg-white/[0.02]"
              >
                <div className="w-3.5 h-3.5 border-t border-l border-white/70 rotate-45 mb-1 opacity-70" />
                <span className="text-[8px] uppercase tracking-wider text-white/50 font-sans leading-none">
                  CLINICAL
                </span>
                <span className="text-[7px] uppercase tracking-widest text-white/40 font-sans leading-none mt-0.5">
                  PROVIDER
                </span>
                <span className="text-[9px] font-sans font-semibold text-white/90 mt-1 leading-none">
                  {year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Massive Full-Width Statement Wordmark (Edge-to-Edge with THERAPY) */}
      <div className="w-full overflow-hidden leading-none select-none pt-12 pb-6 px-1 sm:px-2">
        <h2 className="sr-only">TMJ &amp; SLEEP THERAPY</h2>
        <svg
          viewBox="0 0 1600 145"
          className="w-full h-auto block select-none pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <text
            x="50%"
            y="78%"
            textAnchor="middle"
            fontFamily="var(--font-cormorant), 'Cormorant Garamond', Georgia, serif"
            fontWeight="300"
            fontSize="135"
            textLength="1580"
            lengthAdjust="spacing"
            fill="#EDE8E1"
            className="uppercase"
          >
            TMJ &amp; SLEEP THERAPY
          </text>
        </svg>
      </div>

      {/* Bottom Subtle Disclaimer & Copyright (Contained Width) */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-white/5 pt-6 text-[11px] sm:text-[12px] text-white/40 font-light flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left leading-relaxed">
          <p>
            &copy; {new Date().getFullYear()} Sydney Centre for TMJ &amp; Sleep Therapy. All Rights Reserved. Suite 403, 307 Pitt Street, Sydney NSW 2000.
          </p>
          <p className="max-w-2xl text-[10px] sm:text-[11px] text-white/30 text-center md:text-right">
            The information on this website is general in nature and is not intended to replace individual clinical advice. Treatment suitability, benefits, and outcomes vary between individuals.
          </p>
        </div>
      </div>
    </footer>
  );
}
