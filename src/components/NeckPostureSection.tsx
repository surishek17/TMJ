import React from "react";
import Image from "next/image";
import { ArrowDown, Wind, Sparkles } from "lucide-react";

export default function NeckPostureSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Posture Anatomy Diagram */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="sand-card border-brand-border/80 shadow-soft">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/forward-head-carriage.jpg"
                  alt="Forward Head Carriage and Cervical Spine Biomechanics"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="mt-4 p-3 bg-white rounded-lg border border-brand-border/60">
                <p className="text-xs font-semibold text-brand-dark uppercase tracking-wide">
                  The Domino Effect of Forward Head Posture
                </p>
                <p className="text-xs text-brand-muted mt-1">
                  Each inch of forward head carriage adds approximately 10 to 12 lbs of additional load to the cervical spine and suboccipital muscles.
                </p>
              </div>
            </div>
          </div>

          {/* Clinical Insights */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="medical-subheading">The Neck, Shoulders &amp; Jaw</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">
              Why do I have neck &amp; shoulder pain?
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              <p className="text-brand-dark font-medium">
                The jaw, head, and neck do not function independently.
              </p>
              <p>
                The muscles and joints involved in jaw movement interact directly with the cervical muscles that support and stabilise the head and shoulders. As a result, jaw symptoms and neck symptoms frequently occur together.
              </p>
              <p className="text-sm sm:text-base">
                Posture, muscle tension, central pain sensitivity, poor sleep quality, prolonged screen work, and broader musculoskeletal factors can all contribute to this interconnected pattern.
              </p>
            </div>

            {/* Breathing & Airway Link */}
            <div className="sand-card bg-white border border-brand-border/70 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-brand-taupe" />
                <h4 className="font-serif text-lg font-bold text-brand-dark">
                  Breathing Patterns &amp; Airway Compensations
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Breathing patterns may also be relevant in selected patients. For example, persistent nasal obstruction and chronic mouth breathing can coexist with altered forward head posture to keep airways open during sleep.
              </p>
              <p className="text-xs text-brand-muted italic border-t border-brand-border/40 pt-2">
                However, the relationship between breathing, posture, and pain is complex and does not mean that nasal obstruction is necessarily the sole cause of neck or jaw symptoms. Where symptoms suggest impaired nasal breathing, comprehensive airway assessment may be recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
