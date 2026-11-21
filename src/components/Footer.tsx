import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, Clock, AlertTriangle, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-brand-sand/80 pt-16 pb-12 border-t border-white/10 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Disclaimer Banner */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-white font-serif text-lg font-bold">
            <AlertTriangle className="w-5 h-5 text-brand-taupe" />
            <span>Important Information</span>
          </div>
          <p className="text-xs text-brand-sand/70 leading-relaxed">
            The information on this website is general in nature and is not intended to replace individual medical or dental advice, diagnosis or treatment. Recommendations vary according to each person’s history, examination findings, diagnosis and individual circumstances. Where appropriate, referral to another healthcare professional may be recommended.
          </p>
          <p className="text-xs text-brand-sand/70 leading-relaxed">
            If you have symptoms that may require urgent medical attention (such as sudden severe headache, fever, trauma, or neurological deficit), seek immediate medical care or emergency hospital assistance.
          </p>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 bg-white rounded-lg p-1">
                <Image
                  src="/images/logo.png"
                  alt="Sydney Centre for TMJ & Sleep Therapy"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-white leading-tight">
                  Sydney Centre for TMJ
                </span>
                <span className="text-[10px] uppercase tracking-wider text-brand-taupe">
                  &amp; Sleep Therapy
                </span>
              </div>
            </div>
            <p className="text-xs text-brand-sand/70 leading-relaxed">
              Assessment and evidence-based management of jaw pain, temporomandibular disorders, bruxism, snoring and sleep-related breathing concerns in Sydney CBD.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs text-brand-sand/70">
              <li>
                <Link href="#tmj-headaches" className="hover:text-white transition-colors">
                  TMJ Pain &amp; Headaches
                </Link>
              </li>
              <li>
                <Link href="#bruxism" className="hover:text-white transition-colors">
                  Bruxism &amp; Clenching
                </Link>
              </li>
              <li>
                <Link href="#signs" className="hover:text-white transition-colors">
                  Jaw Clicking &amp; Locking
                </Link>
              </li>
              <li>
                <Link href="#management" className="hover:text-white transition-colors">
                  Snoring &amp; Sleep Apnoea
                </Link>
              </li>
              <li>
                <Link href="#management" className="hover:text-white transition-colors">
                  Oral Appliance Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Clinic Location
            </h4>
            <div className="space-y-2 text-xs text-brand-sand/70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-taupe flex-shrink-0 mt-0.5" />
                <span>Suite 403, 307 Pitt Street, Sydney NSW 2000</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-taupe flex-shrink-0" />
                <a href="tel:0292649120" className="hover:text-white transition-colors">
                  (02) 9264 9120
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-taupe flex-shrink-0" />
                <span>Mon–Fri: 9:00 am–5:00 pm</span>
              </p>
            </div>
          </div>

          {/* Clinical Team */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Consulting Specialist
            </h4>
            <p className="text-xs text-brand-sand/70">
              <strong className="text-white block font-serif text-sm">Dr Manish Shah</strong>
              Medical, Dental and Sleep Trained Clinician providing conservative, individualized care.
            </p>
            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-dark bg-brand-sand hover:bg-white rounded transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-sand/50">
          <p>© {new Date().getFullYear()} Sydney Centre for TMJ &amp; Sleep Therapy. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#contact" className="hover:text-brand-sand transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-brand-sand transition-colors">
              Contact Us
            </Link>
            <Link href="#disclaimer" className="hover:text-brand-sand transition-colors">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
