import React from "react";
import { HeartPulse, Brain, Moon, Sparkles } from "lucide-react";

export default function StressPainSection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="medical-subheading">Stress, Clenching &amp; Persistent Pain</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-4">
            Is stress related to TMJ pain?
          </h2>
          <p className="text-xl font-serif text-brand-dark font-medium mb-3">
            It can be. But stress does not mean that pain is &ldquo;all in your head.&rdquo;
          </p>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Pain is a real biological experience influenced by many interacting neuro-muscular factors. In some people, stress may increase awake clenching, muscle tension and pain sensitivity. Poor sleep, anxiety, persistent pain and emotional distress can also influence one another in a circular loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="sand-card border-brand-border/70 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-taupe mb-4 shadow-sm">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                Pain Sensitisation
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Persistent nociceptive signals can lower the central nervous system threshold, amplifying facial and temple tenderness even under normal bite loads.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-border/50 text-[11px] text-brand-muted">
              Neuroplastic response
            </div>
          </div>

          <div className="sand-card border-brand-border/70 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-taupe mb-4 shadow-sm">
                <Moon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                Sleep Fragmentation
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Micro-arousals and poor restorative slow-wave sleep diminish muscular recovery and heighten daytime perception of jaw tightness and headache.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-border/50 text-[11px] text-brand-muted">
              Circadian restorative balance
            </div>
          </div>

          <div className="sand-card border-brand-border/70 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-taupe mb-4 shadow-sm">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                Multidisciplinary Support
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                For this reason, stress-management strategies or psychological therapies may form part of a collaborative approach to persistent TMD pain when indicated.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-brand-border/50 text-[11px] text-brand-muted">
              Tailored according to individual need
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
