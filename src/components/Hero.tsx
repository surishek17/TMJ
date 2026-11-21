import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, ShieldCheck, ArrowRight, Activity, Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-brand-border/40">
      {/* Subtle background ornamentation */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-sand/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-sand/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-brand-muted tracking-wide uppercase font-medium">
            <li>
              <Link href="/" className="hover:text-brand-dark transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <span className="text-brand-taupe font-semibold">Treatments</span>
            </li>
            <li>/</li>
            <li className="text-brand-dark font-semibold">TMJ Pain &amp; Headaches</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Clinical Context */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand border border-brand-border/60 text-brand-dark text-xs font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-taupe" />
              <span>Sydney Centre for TMJ &amp; Sleep Therapy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-dark leading-[1.12]">
              TMJ Pain, TMD &amp; Headaches in Sydney.
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
              <p className="text-brand-dark/90 font-medium">
                Jaw pain, headaches and neck tension can occur together — but the cause is not always straightforward.
              </p>
              <p>
                Understanding what may be contributing to your symptoms is the first step towards developing an appropriate, individualised management plan.
              </p>
              <p className="text-sm sm:text-base border-l-2 border-brand-taupe pl-4 text-brand-muted italic bg-brand-sand/30 py-2 rounded-r">
                At the Sydney Centre for TMJ &amp; Sleep Therapy, we assess the jaw joints, jaw muscles, teeth, head and neck symptoms and, where clinically indicated, sleep and breathing factors, nutritional factors and emotional factors that may be relevant to your condition.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1A1A1A] hover:bg-brand-taupe text-white text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-lg transition-all shadow-soft hover:shadow-elevated group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:0292649120"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-sand hover:bg-[#EBE5DC] text-brand-dark text-xs sm:text-sm font-medium rounded-lg border border-brand-border transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-taupe" />
                <span>Call (02) 9264 9120</span>
              </a>
            </div>

            {/* Credibility highlights */}
            <div className="pt-6 border-t border-brand-border/60 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-serif text-2xl font-bold text-brand-dark">Dr Manish Shah</p>
                <p className="text-xs text-brand-muted">Medical, Dental &amp; Sleep Trained</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-brand-dark">Conservative</p>
                <p className="text-xs text-brand-muted">Reversible, Evidence-Led Care</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-brand-dark">Central Sydney</p>
                <p className="text-xs text-brand-muted">307 Pitt Street, CBD</p>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-2xl bg-white p-3 shadow-elevated border border-brand-border/80">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-sand">
                  <Image
                    src="/images/closed-mouth.png"
                    alt="TMJ and Facial Pain Clinical Assessment"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] uppercase tracking-widest text-brand-sand font-medium block">
                      Targeted Diagnosis
                    </span>
                    <p className="font-serif text-lg font-medium leading-snug">
                      Connecting Jaw Mechanics, Muscles, Sleep &amp; Craniofacial Symptoms
                    </p>
                  </div>
                </div>

                {/* Floating clinical badge */}
                <div className="mt-3 p-3 bg-brand-cream rounded-lg border border-brand-border/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-brand-taupe" />
                    <span className="font-medium text-brand-dark">Multidisciplinary Patient Care</span>
                  </div>
                  <span className="text-brand-muted">Sydney CBD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
