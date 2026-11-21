"use client";

import React, { useState } from "react";
import { AlertCircle, HelpCircle, CheckSquare, Square } from "lucide-react";

export default function ContributingFactors() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

  const questions = [
    "Have you previously injured your jaw, face, head or neck?",
    "Did your symptoms begin following an accident, sporting injury, or a period of prolonged jaw opening (e.g. dental procedure)?",
    "Have you noticed yourself clenching your jaw during the daytime while working or stressed?",
    "Has anyone heard you grinding or clicking your teeth while you sleep?",
    "Do you regularly wake with jaw fatigue, facial tightness, tenderness, or tooth sensitivity?",
  ];

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const selectedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <section id="factors" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="medical-subheading">Understanding Your Symptoms</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-4">
            What may be contributing to my TMJ pain?
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            There is rarely one single cause of TMD. Jaw pain can arise from the joint itself, the surrounding muscles and ligaments, dental structures or, less commonly, other neurological or medical conditions.
          </p>
          <p className="text-sm text-brand-muted mt-2">
            A range of factors may contribute, including previous injury, repetitive jaw loading, clenching or grinding, joint inflammation or degeneration, changes within the TMJ, pain sensitisation, sleep disturbance, and behavioural or psychosocial factors.
          </p>
        </div>

        {/* Two Primary Contributing Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Type 01: Macro Trauma */}
          <div className="white-card relative overflow-hidden border-t-4 border-t-brand-taupe">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-taupe bg-brand-sand px-3 py-1 rounded">
                Type 01
              </span>
              <span className="text-xs text-brand-muted">Sudden Impact</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-3">
              Macro Trauma
            </h3>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-4">
              A significant injury involving the jaw, head or neck may contribute to the development of TMD symptoms.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-brand-dark bg-brand-sand/50 p-4 rounded-lg border border-brand-border/60">
              <p className="font-medium text-brand-dark">Clinical examples include:</p>
              <ul className="list-disc list-inside space-y-1 text-brand-muted">
                <li>Motor vehicle collisions and whiplash events</li>
                <li>Sporting impacts and direct blows to the jaw or cheekbone</li>
                <li>Prolonged hyperextension during complex oral or intubation procedures</li>
              </ul>
            </div>
            <p className="text-xs text-brand-muted mt-4 italic">
              Not every injury results in persistent TMJ problems, but a history of trauma is clinically relevant when investigating joint mechanics and disc positioning.
            </p>
          </div>

          {/* Type 02: Repetitive Loading & Microtrauma */}
          <div className="white-card relative overflow-hidden border-t-4 border-t-brand-dark">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-dark bg-brand-sand px-3 py-1 rounded">
                Type 02
              </span>
              <span className="text-xs text-brand-muted">Cumulative Load</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-dark mb-3">
              Repetitive Loading &amp; Microtrauma
            </h3>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-4">
              Repeated loading of the jaw may contribute to muscle or joint symptoms in some people over months or years.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-brand-dark bg-brand-sand/50 p-4 rounded-lg border border-brand-border/60">
              <p className="font-medium text-brand-dark">Key aspects of bruxism:</p>
              <ul className="list-disc list-inside space-y-1 text-brand-muted">
                <li><strong>Awake Bruxism:</strong> Daytime clenching related to concentration, anxiety, or stress</li>
                <li><strong>Sleep Bruxism:</strong> Nocturnal rhythmic jaw movement, often linked with sleep arousals</li>
                <li><strong>Individual Variance:</strong> Bruxism does not automatically trigger TMD; susceptibility varies</li>
              </ul>
            </div>
            <p className="text-xs text-brand-muted mt-4 italic">
              It is important to remember that bruxism does not automatically mean you have TMD, and not everyone with TMD grinds their teeth.
            </p>
          </div>
        </div>

        {/* Interactive Self-Reflection Box */}
        <div className="sand-card border-brand-taupe/40 bg-gradient-to-br from-brand-sand to-[#EFE8DF]">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-brand-taupe" />
            <h4 className="font-serif text-xl font-bold text-brand-dark">
              Some useful questions to consider
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted mb-6">
            Review these questions to reflect on your daily jaw patterns and history. Tick any that apply:
          </p>

          <div className="space-y-3">
            {questions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => toggleCheck(idx)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-start gap-3 ${
                  checkedItems[idx]
                    ? "bg-white border-brand-taupe shadow-sm text-brand-dark font-medium"
                    : "bg-white/60 border-brand-border/80 hover:bg-white text-brand-muted"
                }`}
              >
                {checkedItems[idx] ? (
                  <CheckSquare className="w-5 h-5 text-brand-taupe flex-shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-5 h-5 text-brand-border flex-shrink-0 mt-0.5" />
                )}
                <span className="text-xs sm:text-sm leading-relaxed">{q}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-brand-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-brand-muted max-w-xl">
              {selectedCount > 0 ? (
                <span>
                  You selected <strong className="text-brand-dark">{selectedCount} indicator{selectedCount > 1 ? "s" : ""}</strong>. A structured clinical assessment can identify whether these findings stem from muscle hyperactivity, joint pathology, or airway-related sleep arousals.
                </span>
              ) : (
                <span>If you are unsure, an in-clinic assessment evaluates joint motion, muscle palpation, and dental wear facets.</span>
              )}
            </p>
            <a
              href="#contact"
              className="text-xs font-semibold uppercase tracking-wider text-brand-dark bg-white hover:bg-brand-taupe hover:text-white px-4 py-2.5 rounded-lg border border-brand-border transition-colors flex-shrink-0"
            >
              Discuss with Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
