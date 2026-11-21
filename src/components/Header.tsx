"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

interface SubItem {
  label: string;
  href: string;
  desc?: string;
}

interface NavItem {
  line1: string;
  line2?: string;
  href: string;
  isActive?: boolean;
  subItems?: SubItem[];
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navItems: NavItem[] = [
    {
      line1: "TMJ PAIN &",
      line2: "HEADACHES",
      href: "#tmj-headaches",
      isActive: true,
      subItems: [
        { label: "Overview & Symptoms", href: "#tmj-headaches", desc: "Jaw joint pain, neck stiffness & tension" },
        { label: "Anatomy of the TMJ", href: "#tmj-anatomy", desc: "Understanding condyles, discs & muscles" },
        { label: "Tension Headaches & Migraines", href: "#bruxism", desc: "Morning headaches & masseter strain" },
        { label: "Assessment Protocol", href: "#assessment", desc: "4-step clinical pathway & diagnostic CBCT" },
      ],
    },
    {
      line1: "TEETH GRINDING",
      line2: "& CLENCHING",
      href: "#bruxism",
      subItems: [
        { label: "Sleep Bruxism Causes", href: "#bruxism", desc: "Micro-trauma, airway restriction & stress" },
        { label: "9 Signs You Clench at Night", href: "#signs", desc: "Tooth wear, scalloped tongue & morning ache" },
        { label: "Custom Splint Therapy", href: "#management", desc: "Deprogramming muscles & joint offloading" },
      ],
    },
    {
      line1: "SNORING",
      line2: "& SLEEP APNOEA",
      href: "#sleep-apnoea",
      subItems: [
        { label: "Airway & Jaw Alignment", href: "#contributing-factors", desc: "Compensatory jaw posturing & narrow airways" },
        { label: "Mandibular Advancement (MAS)", href: "#management", desc: "Clinically proven custom sleep appliances" },
        { label: "Home Sleep Diagnostics", href: "#assessment", desc: "Comprehensive overnight pulse oximetry" },
      ],
    },
    {
      line1: "JAW CLICKING",
      line2: "& LOCKED JAW",
      href: "#jaw-noises",
      subItems: [
        { label: "Disc Displacement & Popping", href: "#tmj-anatomy", desc: "Clicking, popping & grating sound causes" },
        { label: "Acute Closed Lock Management", href: "#assessment", desc: "Immediate gentle decompression & release" },
        { label: "Physical Therapy & Rehab", href: "#management", desc: "Restoring painless normal range of motion" },
      ],
    },
    {
      line1: "ABOUT",
      line2: "US",
      href: "#about",
      subItems: [
        { label: "Our Clinical Team & Philosophy", href: "#management", desc: "Specialised in craniofacial pain & sleep" },
        { label: "Integrative Assessment Pathway", href: "#assessment", desc: "Multidisciplinary approach with ENTs & physios" },
        { label: "Maximal Medical Improvement", href: "#timeline", desc: "Predictable milestones from week 1 to discharge" },
      ],
    },
    {
      line1: "BLOGS",
      line2: "⌵",
      href: "#blogs",
      subItems: [
        { label: "TMJ & TMD Clinical Resources", href: "#tmj-headaches", desc: "In-depth articles on jaw disorders" },
        { label: "Sleep Dentistry & Snoring Guides", href: "#sleep-apnoea", desc: "Evidence-based guides on airway health" },
        { label: "Frequently Asked Questions", href: "#faqs", desc: "Answers on treatment timelines & splints" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/[0.08] text-white shadow-md">
      <div className="max-w-[1380px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] gap-2">

          {/* Brand Logo (Authentic Sydney Centre for TMJ & Sleep Therapy - Dark/Black Theme Version) */}
          <Link href="/" className="flex items-center shrink-0 pr-1">
            <div className="relative w-[155px] sm:w-[180px] h-[46px]">
              <Image
                src="/images/logo-dark.png"
                alt="Sydney Centre for TMJ & Sleep Therapy"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation (2-Line Stacked Format from Screenshot 1 - Compact, Zero Overflow) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 shrink-0">
            {navItems.map((item) => {
              const fullLabel = `${item.line1} ${item.line2 || ""}`.trim();
              return (
                <div
                  key={fullLabel}
                  className="relative group py-4"
                  onMouseEnter={() => handleMouseEnter(fullLabel)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center justify-center text-center px-1.5 py-1 transition-colors relative ${item.isActive
                        ? "text-white font-semibold"
                        : "text-neutral-300 hover:text-white font-medium"
                      }`}
                  >
                    <span className="text-[10.5px] xl:text-[11px] uppercase tracking-[0.05em] leading-tight whitespace-nowrap">
                      {item.line1}
                    </span>
                    {item.line2 && (
                      <span className="text-[10.5px] xl:text-[11px] uppercase tracking-[0.05em] leading-tight whitespace-nowrap flex items-center justify-center gap-0.5">
                        {item.line2 === "⌵" ? (
                          <ChevronDown className="w-3 h-3 text-neutral-400 group-hover:text-white transition-transform group-hover:rotate-180" />
                        ) : (
                          item.line2
                        )}
                      </span>
                    )}

                    {/* Active Underline matching Luxury Black Theme */}
                    {item.isActive && (
                      <span className="w-full h-[2px] bg-white mt-1 rounded-full shadow-sm" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && activeDropdown === fullLabel && (
                    <div
                      className="absolute top-[68px] left-1/2 -translate-x-1/2 w-64 bg-[#141416]/95 border border-white/15 rounded-xl shadow-2xl py-2 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-150"
                      onMouseEnter={() => handleMouseEnter(fullLabel)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#60A5FA] border-b border-white/10">
                        {item.line1} {item.line2 !== "⌵" ? item.line2 : ""}
                      </div>
                      <div className="p-1 space-y-0.5">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-3 py-1.5 rounded-lg text-xs text-neutral-300 hover:text-white hover:bg-white/10 transition-all group/item"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium group-hover/item:text-white transition-colors">
                              {sub.label}
                            </div>
                            {sub.desc && (
                              <div className="text-[10px] text-neutral-400 line-clamp-1 mt-0.5">
                                {sub.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Cluster (Matching Spa Dental Luxury Black Screenshot: Contact us + Book with us + Phone) */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
            {/* Phone link */}
            <a
              href="tel:0290257644"
              className="hidden xl:inline-flex items-center gap-1.5 text-[12px] font-medium tracking-wide text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
              title="Call Sydney Centre for TMJ & Sleep Therapy"
            >
              <Phone className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>02 9025 7644</span>
            </a>

            {/* Subtle Divider */}
            <span className="hidden xl:inline-block w-px h-3.5 bg-white/20" />

            {/* "Contact us" plain text link as in Spa Dental */}
            <Link
              href="#booking-section"
              className="text-[12px] xl:text-[12.5px] font-medium tracking-wide text-neutral-300 hover:text-white transition-colors py-1 px-1 whitespace-nowrap"
            >
              Contact us
            </Link>

            {/* "Book with us" luxury button as in Spa Dental Screenshot 2 */}
            <Link
              href="#booking-section"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 xl:px-4 xl:py-2 rounded-[6px] text-xs xl:text-[12.5px] font-medium bg-[#1C1C1F] hover:bg-white hover:text-black text-white border border-white/20 hover:border-white transition-all duration-200 shadow-sm whitespace-nowrap group"
            >
              <span>Book with us</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger / Phone Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:0290257644"
              className="flex items-center gap-1.5 rounded-[6px] px-2.5 py-1.5 text-[11px] font-medium border border-white/20 bg-white/5 text-white"
              aria-label="Call clinic"
            >
              <Phone className="w-3 h-3 text-[#60A5FA]" />
              <span className="hidden sm:inline">02 9025 7644</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white hover:text-neutral-300 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0A0A0A] px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const fullLabel = `${item.line1} ${item.line2 || ""}`.replace("⌵", "").trim();
              return (
                <div key={fullLabel} className="border-b border-white/10 pb-2">
                  <div className="flex items-center justify-between py-1.5">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xs uppercase tracking-wider ${item.isActive
                          ? "text-white font-semibold pl-2 border-l-2 border-[#60A5FA]"
                          : "text-neutral-300 hover:text-white pl-2"
                        }`}
                    >
                      {fullLabel}
                    </Link>
                    {item.subItems && (
                      <button
                        onClick={() =>
                          setMobileSubmenu(mobileSubmenu === fullLabel ? null : fullLabel)
                        }
                        className="p-1 text-neutral-400 hover:text-white"
                        aria-label={`Toggle ${fullLabel} sub-navigation`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${mobileSubmenu === fullLabel ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.subItems && mobileSubmenu === fullLabel && (
                    <div className="pl-4 pr-2 py-2 mt-1 space-y-2 rounded-lg bg-white/[0.04]">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs py-1 text-neutral-300 hover:text-white"
                        >
                          <div className="font-medium">{sub.label}</div>
                          {sub.desc && (
                            <div className="text-[10px] mt-0.5 text-neutral-400">
                              {sub.desc}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Action CTAs */}
          <div className="pt-3 space-y-3">
            <Link
              href="#booking-section"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#092E6E] text-white rounded-[6px] text-xs font-semibold uppercase tracking-wider hover:bg-[#0E3D8F] transition-all shadow-md"
            >
              <span>Book with us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="tel:0290257644"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-[6px] text-xs font-medium border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Call 02 9025 7644</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
