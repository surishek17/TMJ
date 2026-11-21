import React from "react";
import Image from "next/image";
import { TrendingUp, Award, Clock, ArrowRight } from "lucide-react";

export default function ProgressTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Doctor / Clinic Picture */}
          <div className="lg:col-span-5">
            <div className="white-card border-brand-border p-4 shadow-soft">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-sand">
                <Image
                  src="/images/dr-assessment.png"
                  alt="Clinical Consult and TMJ Progress Tracking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 p-3 bg-brand-sand/50 rounded-lg border border-brand-border/50 text-xs text-brand-dark">
                <p className="font-bold font-serif text-sm">Longitudinal Clinical Review</p>
                <p className="text-brand-muted mt-0.5">
                  Regular reassessment of range of motion, muscle soreness scales, and sleep quality.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative on Evolving Care */}
          <div className="lg:col-span-7 space-y-6">
            <span className="medical-subheading">Monitoring Your Progress</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">
              Treatment should evolve with you
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              <p className="text-brand-dark font-medium">
                Your progress is reviewed according to your diagnosis and the response to treatment.
              </p>
              <p>
                We assess changes in symptoms, jaw function, joint noises, and headache frequency, adjusting the management plan where appropriate. Some TMD conditions improve relatively quickly, while others fluctuate or require longer-term stabilization.
              </p>
              <p className="text-sm sm:text-base border-l-2 border-brand-taupe pl-4 text-brand-dark bg-brand-sand/40 py-2.5 rounded-r">
                &ldquo;We review you regularly until we’ve achieved maximal medical improvement — the point at which your body has healed as much as it can, based on your compliance and your body’s own capacity to recover.&rdquo;
              </p>
            </div>

            <div className="sand-card bg-white border border-brand-border p-6 rounded-xl">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark mb-2">
                You don’t have to live with the pain and debilitation of TMJ pain, headaches and neck pain.
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted mb-4">
                Our aim is to use the least invasive appropriate management and involve other healthcare professionals when the clinical situation requires it.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-taupe hover:text-brand-dark transition-colors"
              >
                <span>Take the first step towards recovery</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
