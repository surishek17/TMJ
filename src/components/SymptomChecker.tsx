"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, RotateCcw } from "lucide-react";

interface SymptomOption {
  id: string;
  category: "jaw" | "headache" | "sleep" | "dental";
  label: string;
}

const symptomsList: SymptomOption[] = [
  { id: "jaw-pain", category: "jaw", label: "Aching, tenderness or pain around the jaw joint or cheeks" },
  { id: "clicking", category: "jaw", label: "Jaw clicking, popping, or crunching sounds when opening or eating" },
  { id: "locking", category: "jaw", label: "Jaw catches, feels stiff, or has limited opening (trismus)" },
  { id: "temple-headache", category: "headache", label: "Tension headaches or pain focused in the temples on waking" },
  { id: "neck-pain", category: "headache", label: "Tightness or persistent pain in the neck and upper shoulders" },
  { id: "ear-fullness", category: "jaw", label: "Ear fullness, ringing (tinnitus), or pain near the ear without infection" },
  { id: "teeth-grinding", category: "sleep", label: "Told you grind teeth in your sleep or caught clenching while awake" },
  { id: "tooth-wear", category: "dental", label: "Flattened, chipped teeth or unexplained sensitive tooth enamel" },
  { id: "morning-tired", category: "sleep", label: "Waking with jaw fatigue or feeling unrefreshed despite hours in bed" },
  { id: "snoring", category: "sleep", label: "Snoring, gasping, or pauses in breathing noticed during sleep" }
];

export default function SymptomChecker() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleSymptom = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetAll = () => {
    setSelected([]);
    setSubmitted(false);
  };

  return (
    <section id="screener" className="py-16 lg:py-24 bg-white border-b border-brand-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="medical-subheading">Interactive Patient Screener</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark mb-4">
            TMJ &amp; Headache Self-Check Screener
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed max-w-2xl mx-auto">
            Select any symptoms you have been experiencing over recent weeks to generate a summary to bring to your consultation.
          </p>
        </div>

        <div className="sand-card p-6 sm:p-8 bg-brand-sand/60 border-brand-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {symptomsList.map((item) => {
              const isChecked = selected.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleSymptom(item.id)}
                  className={`text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${
                    isChecked
                      ? "bg-white border-brand-taupe shadow-sm text-brand-dark font-medium"
                      : "bg-white/70 border-brand-border/70 hover:bg-white text-brand-muted"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border flex-shrink-0 ${
                      isChecked
                        ? "bg-brand-taupe border-brand-taupe text-white"
                        : "border-brand-border"
                    }`}
                  >
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <span className="leading-snug">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border/60">
            <div className="text-xs text-brand-muted">
              <span>Selected: </span>
              <strong className="text-brand-dark font-semibold">
                {selected.length} symptom{selected.length === 1 ? "" : "s"}
              </strong>
            </div>

            <div className="flex items-center gap-3">
              {selected.length > 0 && (
                <button
                  onClick={resetAll}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs text-brand-muted hover:text-brand-dark transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              )}
              <button
                onClick={() => setSubmitted(true)}
                disabled={selected.length === 0}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1A1A1A] hover:bg-brand-taupe disabled:opacity-50 text-white rounded-lg transition-all"
              >
                Review Clinical Assessment
              </button>
            </div>
          </div>

          {/* Screener Output Feedback */}
          {submitted && selected.length > 0 && (
            <div className="mt-8 p-6 bg-white rounded-xl border border-brand-taupe/40 shadow-soft animate-in fade-in duration-200">
              <h4 className="font-serif text-xl font-bold text-brand-dark mb-2">
                Your Symptom Profile Summary
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted mb-4">
                You have reported {selected.length} indicators spanning jaw mechanics, craniofacial tension, and sleep factors.
              </p>

              <div className="p-4 bg-brand-sand/40 rounded-lg border border-brand-border/60 text-xs space-y-2 text-brand-dark mb-5">
                <p>
                  <strong>Clinical recommendation:</strong> These co-occurring signs frequently reflect multifactorial TMJ loading combined with nocturnal muscle activity or postural strain. An individualized assessment at our Sydney clinic can differentiate joint pathology from muscular trigger points.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-brand-taupe text-white rounded-lg hover:bg-[#1A1A1A] transition-colors"
                >
                  <span>Book Consultation With Your Notes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="tel:0292649120"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium text-brand-dark bg-brand-sand rounded-lg border border-brand-border hover:bg-[#EAE4DC] transition-colors"
                >
                  Call (02) 9264 9120
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
