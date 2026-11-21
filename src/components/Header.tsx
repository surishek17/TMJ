"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentDropdown, setTreatmentDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border/60 transition-all">
      {/* Top utility notification bar */}
      <div className="bg-[#1A1A1A] text-brand-sand/90 text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1 text-[#E0DDD8]">
              <MapPin className="w-3.5 h-3.5 text-brand-taupe" /> Suite 403, 307 Pitt Street, Sydney NSW 2000
            </span>
            <span className="hidden md:flex items-center gap-1 text-[#E0DDD8]">
              <Clock className="w-3.5 h-3.5 text-brand-taupe" /> Mon–Fri: 9:00 am–5:00 pm
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-brand-sand/60">Medical, Dental & Sleep Trained Clinicians</span>
            <a
              href="tel:0292649120"
              className="flex items-center gap-1.5 font-medium text-white hover:text-brand-taupe transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-taupe" />
              <span>(02) 9264 9120</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Sydney Centre for TMJ & Sleep Therapy"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-brand-dark group-hover:text-brand-taupe transition-colors leading-tight">
                Sydney Centre for TMJ
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-brand-muted font-medium">
                &amp; Sleep Therapy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <div
              className="relative group"
              onMouseEnter={() => setTreatmentDropdown(true)}
              onMouseLeave={() => setTreatmentDropdown(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-brand-dark hover:text-brand-taupe py-2 transition-colors"
                onClick={() => setTreatmentDropdown(!treatmentDropdown)}
              >
                <span>Treatments</span>
                <ChevronDown className="w-3.5 h-3.5 text-brand-muted group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {treatmentDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-elevated border border-brand-border/60 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="#tmj-headaches"
                    className="block px-4 py-2 text-xs font-semibold uppercase text-brand-taupe tracking-wider bg-brand-cream/50"
                  >
                    Current: TMJ Pain &amp; Headaches
                  </Link>
                  <Link
                    href="#bruxism"
                    className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-sand/60 hover:text-brand-taupe transition-colors"
                  >
                    Teeth Grinding &amp; Clenching (Bruxism)
                  </Link>
                  <Link
                    href="#sleep-apnoea"
                    className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-sand/60 hover:text-brand-taupe transition-colors"
                  >
                    Snoring &amp; Sleep Apnoea
                  </Link>
                  <Link
                    href="#jaw-noises"
                    className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-sand/60 hover:text-brand-taupe transition-colors"
                  >
                    Jaw Clicking &amp; Locked Jaw
                  </Link>
                  <Link
                    href="#assessment"
                    className="block px-4 py-2 text-sm text-brand-dark hover:bg-brand-sand/60 hover:text-brand-taupe transition-colors"
                  >
                    Comprehensive TMJ Assessment
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#anatomy"
              className="text-sm font-medium text-brand-dark hover:text-brand-taupe transition-colors"
            >
              TMJ Anatomy
            </Link>
            <Link
              href="#signs"
              className="text-sm font-medium text-brand-dark hover:text-brand-taupe transition-colors"
            >
              Signs &amp; Symptoms
            </Link>
            <Link
              href="#management"
              className="text-sm font-medium text-brand-dark hover:text-brand-taupe transition-colors"
            >
              Management
            </Link>
            <Link
              href="#screener"
              className="text-sm font-medium text-brand-dark hover:text-brand-taupe transition-colors"
            >
              Self-Check Screener
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-brand-dark hover:text-brand-taupe transition-colors"
            >
              About &amp; Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0292649120"
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide uppercase text-brand-dark bg-brand-sand/80 hover:bg-brand-sand rounded-lg border border-brand-border transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-taupe" />
              <span>02 9264 9120</span>
            </a>
            <Link
              href="#contact"
              className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-[#1A1A1A] hover:bg-brand-taupe text-white rounded-lg transition-all shadow-sm hover:shadow"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-dark hover:text-brand-taupe focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-border px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <Link
            href="#tmj-headaches"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark hover:bg-brand-sand rounded-md"
          >
            TMJ Pain &amp; Headaches
          </Link>
          <Link
            href="#anatomy"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark hover:bg-brand-sand rounded-md"
          >
            TMJ Anatomy &amp; Basics
          </Link>
          <Link
            href="#signs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark hover:bg-brand-sand rounded-md"
          >
            Signs of Clenching &amp; Grinding
          </Link>
          <Link
            href="#assessment"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark hover:bg-brand-sand rounded-md"
          >
            How We Assess TMJ Pain
          </Link>
          <Link
            href="#management"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark hover:bg-brand-sand rounded-md"
          >
            Integrated Treatment Framework
          </Link>
          <Link
            href="#screener"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark hover:bg-brand-sand rounded-md"
          >
            Interactive Symptom Screener
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark hover:bg-brand-sand rounded-md"
          >
            Clinic Details &amp; Location
          </Link>

          <div className="pt-4 border-t border-brand-border/60 flex flex-col gap-2">
            <a
              href="tel:0292649120"
              className="flex items-center justify-center gap-2 py-3 bg-brand-sand text-brand-dark font-medium rounded-lg text-sm"
            >
              <Phone className="w-4 h-4 text-brand-taupe" /> Call (02) 9264 9120
            </a>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-3 bg-[#1A1A1A] text-white font-medium rounded-lg text-sm uppercase tracking-wider"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
