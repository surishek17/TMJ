import React from "react";
import Image from "next/image";
import { AlertCircle, Scale } from "lucide-react";

export default function BruxismHeadacheSection() {
  return (
    <section id="bruxism" className="py-16 lg:py-24 bg-white border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <span className="medical-subheading">Bruxism &amp; Headaches</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark leading-tight">
              Can grinding cause headaches?
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              <p className="text-brand-dark font-medium">
                Bruxism, temporomandibular disorders, sleep disturbance and headache disorders can occur together.
              </p>
              <p>
                In some people, increased activity or tenderness of the jaw and temple muscles (temporalis) may contribute to head or facial pain.
              </p>
              <p className="text-sm sm:text-base">
                However, this relationship is not the same for everyone. A person can have bruxism without headaches, headaches without bruxism, or both conditions for unrelated reasons.
              </p>
              <p className="text-sm sm:text-base">
                Migraine, tension-type headache and other primary headache disorders are common and may require medical assessment. The aim of our assessment is not simply to assume a headache is coming from the jaw, but to determine whether the jaw and associated muscles appear to be contributing to the overall clinical picture.
              </p>
            </div>

            {/* Key Clinical Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="sand-card border-brand-taupe/30">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark block mb-2">
                  65%
                </span>
                <p className="text-xs sm:text-sm text-brand-muted font-medium">
                  of patients with nocturnal bruxism also experience frequent headaches.
                </p>
              </div>

              <div className="sand-card border-brand-taupe/30">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark block mb-2">
                  3×
                </span>
                <p className="text-xs sm:text-sm text-brand-muted font-medium">
                  the biting force used by people who grind nocturnal teeth, compared with baseline chewing.
                </p>
              </div>
            </div>
          </div>

          {/* Muscle Anatomy Diagram */}
          <div className="lg:col-span-5">
            <div className="sand-card border-brand-border/80 shadow-soft">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/muscles-tender.png"
                  alt="Muscles that become tender during bruxism and jaw clenching"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="mt-4 p-3 bg-white rounded-lg border border-brand-border/60 space-y-1">
                <p className="text-xs font-semibold text-brand-dark uppercase tracking-wide">
                  Muscles that become tender during bruxism
                </p>
                <p className="text-xs text-brand-muted">
                  Temporalis (temple headaches), Masseter (angle of the jaw), and Pterygoid muscle groups generating sustained ischemia and trigger points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
