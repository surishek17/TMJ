import React from "react";
import Image from "next/image";
import { ClipboardList, Moon, Scan, TestTube2, ArrowRight } from "lucide-react";

export default function AssessmentProcess() {
  const steps = [
    {
      num: "01",
      title: "History & Clinical Examination",
      icon: ClipboardList,
      description:
        "We begin with a detailed history of your symptoms: onset, past injuries, jaw function, dental symptoms, headaches, clenching, sleep patterns, breathing and medical history. The physical examination assesses jaw movement patterns, joint sounds, muscle palpation tenderness, bite occlusion, and head/neck structures.",
      takeaway: "Determines whether symptoms indicate muscular TMD, joint disc displacement, or need external referral."
    },
    {
      num: "02",
      title: "Sleep & Breathing Assessment — When Indicated",
      icon: Moon,
      description:
        "Sleep and jaw-muscle activity closely interact in many patients. If your history suggests snoring, obstructive sleep apnoea, or frequent sleep fragmentation, sleep assessment may be indicated. Not every person with TMJ pain requires a sleep study, but where clinically relevant, we arrange targeted sleep diagnostics.",
      takeaway: "Identifies whether underlying nocturnal airway collapse or micro-arousals are driving nocturnal bruxism."
    },
    {
      num: "03",
      title: "Imaging — When Indicated",
      icon: Scan,
      description:
        "Most TMD assessment begins with thorough clinical palpation rather than immediate imaging. When the diagnosis is uncertain or specific bony, disc, dental, or airway detail is required, CBCT (cone-beam CT) or MRI may be requested. Imaging findings are always interpreted in tandem with clinical examination.",
      takeaway: "Visualises condylar morphology, joint arthritis, disc alignment, and osseous health."
    },
    {
      num: "04",
      title: "Blood Tests – When Indicated",
      icon: TestTube2,
      description:
        "If systemic inflammation, nutritional deficiency (e.g. Vitamin D, magnesium, B12), or hormonal imbalances are suspected as contributors to muscle fatigue or generalised joint pain, blood pathology tests may be ordered to evaluate systemic biology.",
      takeaway: "Ensures metabolic and systemic factors contributing to muscle tenderness are identified."
    }
  ];

  return (
    <section id="assessment" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="medical-subheading">Our Diagnostic Pathway</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-4">
            How we Assess TMJ pain
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Effective management begins with establishing the most likely diagnosis and identifying the factors that may be contributing to your symptoms.
          </p>
          <p className="text-sm text-brand-muted mt-2">
            Not every patient requires the same investigations. Your assessment is tailored to your individual history, symptoms, and clinical findings.
          </p>
        </div>

        {/* 4 Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="white-card relative flex flex-col justify-between group hover:border-brand-taupe transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-brand-taupe">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-brand-sand flex items-center justify-center text-brand-dark group-hover:bg-brand-taupe group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-dark mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border/60 bg-brand-sand/40 -mx-6 -mb-6 p-4 rounded-b-xl">
                  <p className="text-xs text-brand-dark font-medium">
                    <span className="text-brand-taupe uppercase tracking-wider font-bold">Goal:</span> {step.takeaway}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
