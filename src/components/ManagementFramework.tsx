"use client";

import React, { useState } from "react";
import { Wind, Activity, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function ManagementFramework() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: "Breathing & Sleep",
      icon: Wind,
      badge: "Nocturnal Support",
      summary: "Restoring airway stability and night-time physiologic recovery to reduce sleep bruxism and joint strain.",
      treatments: [
        {
          name: "Oral Appliance Therapy (Nighttime)",
          desc: "Different custom oral appliances are used for specific clinical purposes during night-time sleep. In selected patients, individually prescribed appliances protect dental structures and decompress the joint. For patients with sleep-related breathing disorders, mandibular advancement devices maintain open airway patency."
        },
        {
          name: "Nasal & ENT Assessment",
          desc: "Persistent nasal obstruction impairs normal nasal breathing and induces mouth-breathing compensations. When indicated, referral to Ear, Nose and Throat (ENT) specialists helps address upper airway resistance without unnecessary surgery."
        },
        {
          name: "Breathing Retraining",
          desc: "Supervised breathing retraining exercises in selected patients to transition from chronic shallow mouth breathing to functional diaphragmatic nasal breathing."
        },
        {
          name: "Orofacial Myofunctional Therapy",
          desc: "Targeted exercise protocols addressing correct resting tongue posture on the palate, lip seal, and facial muscle tone to support normal craniofacial mechanics."
        }
      ]
    },
    {
      title: "Jaw Pain & Function",
      icon: Activity,
      badge: "Daytime & Biomechanical",
      summary: "Relieving muscle hyperactivity, restoring comfortable range of opening, and promoting tissue healing.",
      treatments: [
        {
          name: "TMJ Physiotherapy",
          desc: "Targeted manual therapy, jaw mobilisation, postural correction, and home exercise routines guided by experienced craniofacial physiotherapists to restore joint mechanics."
        },
        {
          name: "Daytime Oral Appliances",
          desc: "Selected patients may benefit from custom daytime splints designed to interrupt unconscious awake-clenching habits and reduce muscular fatigue during stressful work periods."
        },
        {
          name: "Nutritional & Medical Management",
          desc: "Dietary optimization, anti-inflammatory support, and investigation of nutritional deficiencies (e.g., magnesium, Vitamin D) influencing muscle recovery and pain tolerance."
        },
        {
          name: "Injectables, Dry Needling, Lasers",
          desc: "Therapies such as botulinum toxin (Botox) for intractable masseter spasm, trigger point dry needling, prolotherapy, PRP, and Low-Level Laser Therapy (LLLT) for selected refractory indications."
        },
        {
          name: "Multidisciplinary Collaboration",
          desc: "Close coordination with medical practitioners, pain specialists, neurologists, and dental colleagues when symptoms require collaborative multidisciplinary input."
        }
      ]
    },
    {
      title: "Stress, Behaviour & Pain Regulation",
      icon: HeartHandshake,
      badge: "Biopsychosocial",
      summary: "Calming nervous system hyper-excitability and mitigating chronic pain cycles.",
      treatments: [
        {
          name: "Psychology & Persistent Pain Care",
          desc: "Collaborative cognitive and behavioural strategies with pain psychologists to address pain catastrophizing, central nervous system sensitization, and health anxiety."
        },
        {
          name: "Relaxation, Mindfulness & Meditation",
          desc: "Complementary techniques that down-regulate sympathetic fight-or-flight drive, reduce awake clenching, and promote autonomic nervous balance."
        }
      ]
    }
  ];

  return (
    <section id="management" className="py-16 lg:py-24 bg-white border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="medical-subheading">Our Integrated Approach</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-4">
            How we manage TMJ pain
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            TMD can involve more than one contributing factor, which means management is not necessarily the same for every person. Where possible, management generally begins with conservative, reversible approaches.
          </p>
        </div>

        {/* Pillar Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isActive = activePillar === idx;
            return (
              <button
                key={idx}
                onClick={() => setActivePillar(idx)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                  isActive
                    ? "bg-[#1A1A1A] text-white shadow-elevated"
                    : "bg-brand-sand/70 text-brand-dark hover:bg-brand-sand border border-brand-border/70"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-brand-taupe" : "text-brand-muted"}`} />
                <span>Pillar 0{idx + 1}: {p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Content */}
        <div className="sand-card border-brand-border p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-brand-sand/60 to-brand-cream/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-brand-border/60 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-taupe bg-white px-3 py-1 rounded border border-brand-border">
                {pillars[activePillar].badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark mt-2">
                {pillars[activePillar].title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted max-w-md">
              {pillars[activePillar].summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars[activePillar].treatments.map((t, tIdx) => (
              <div key={tIdx} className="bg-white p-5 rounded-xl border border-brand-border/70 shadow-soft">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-taupe flex-shrink-0" />
                  <h4 className="font-serif text-lg font-bold text-brand-dark">
                    {t.name}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-brand-border/60 text-xs text-brand-muted text-center italic">
            Not every patient requires every treatment described above. Prescriptions are tailored following clinical diagnosis.
          </div>
        </div>
      </div>
    </section>
  );
}
