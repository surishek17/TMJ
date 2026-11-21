"use client";

import React, { useState, useRef } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  bullets?: string[];
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "Why choose Sydney Centre for TMJ & Sleep Therapy?",
      answer:
        "Unlike general dental practices that treat teeth in isolation, our clinic focuses exclusively on craniofacial pain, temporomandibular joint (TMJ) disorders, sleep-disordered breathing, and airway health. We combine 3D CBCT bone imaging, digital jaw-tracking, and conservative evidence-based modalities to treat the root cause rather than just masking symptoms.",
      bullets: [
        "Specialised exclusively in TMJ disorders, chronic facial pain & sleep apnoea",
        "Non-surgical, conservative protocols aimed at long-term joint rehabilitation",
        "Multidisciplinary network with leading ENTs, sleep physicians & physiotherapists",
        "Over 15+ years of clinical experience in Sydney CBD and Macquarie Street",
      ],
    },
    {
      id: "faq-2",
      question: "What is causing my morning headaches and jaw soreness?",
      answer:
        "Over 65% of patients with recurring morning headaches suffer from nocturnal bruxism (clenching or grinding). During sleep, unconscious clenching exerts up to 300 lbs of mechanical force per square inch on your masseter and temporalis muscles. This sustained contraction restricts blood flow, causing lactic acid buildup that radiates as tension headaches, ear pain, and facial fatigue upon waking.",
      bullets: [
        "Nighttime clenching forces exceed normal chewing loads by up to 300%",
        "Temporal muscle spasms refer deep pain behind the eyes, temples & neck",
        "Airway narrowing frequently triggers clenching as a protective breathing reflex",
      ],
    },
    {
      id: "faq-3",
      question: "How do I know if my jaw clicking or popping requires treatment?",
      answer:
        "A click or pop in the jaw joint typically indicates an articular disc displacement. The cartilage disc that cushions your jaw joint has slipped forward and snaps back into place when you open your mouth. While an occasional painless click can remain stable, clicking accompanied by pain, progressive stiffness, catching, or restricted mouth opening signals active joint degeneration that requires prompt clinical intervention.",
      bullets: [
        "Clicking with pain or stiffness requires professional joint imaging",
        "Unaddressed disc displacement can lead to painful joint locking or osteoarthritis",
        "Early conservative deprogramming prevents permanent disc damage",
      ],
    },
    {
      id: "faq-4",
      question: "Can teeth grinding (bruxism) be treated without surgery?",
      answer:
        "Yes, the vast majority of TMJ and bruxism cases are successfully managed without surgery. Our conservative approach utilises custom-engineered oral orthotics (splints) designed using high-resolution digital scans to deprogram hyperactive muscles, offload the temporomandibular joint, protect dental enamel from micro-fractures, and re-establish neuromuscular balance.",
      bullets: [
        "Custom neuromuscular orthotics designed to release joint compression",
        "Targeted trigger-point therapy and physical rehabilitation exercises",
        "Airway assessment to eliminate nighttime sleep-breathing triggers",
      ],
    },
    {
      id: "faq-5",
      question: "What is the connection between narrow airways, snoring, and TMJ pain?",
      answer:
        "Airway restriction and TMJ dysfunction frequently coexist. When your upper airway collapses during sleep (obstructive sleep apnoea or heavy snoring), the subconscious brain attempts to reopen the throat by contracting the jaw muscles and thrusting the lower jaw forward. This survival reflex places immense strain on the TM joints throughout the night.",
      bullets: [
        "Nocturnal clenching is often the body's emergency mechanism to restore airflow",
        "Forward head posture develops to compensate for compromised breathing passages",
        "Oral sleep appliances address both joint stability and open airway patency",
      ],
    },
    {
      id: "faq-6",
      question: "What happens during the initial 4-step comprehensive assessment?",
      answer:
        "Your initial 60-minute consultation begins with high-resolution digital joint imaging and airway evaluation, followed by thorough palpation of the head, neck, and masticatory muscles, digital range of motion measurement, and a sleep/headache questionnaire. We then formulate a clear, tailored treatment roadmap with predictable recovery milestones.",
      bullets: [
        "High-definition 3D CBCT imaging of the condyles and glenoid fossa",
        "Detailed cervical spine, cranial posture and muscle palpation evaluation",
        "Digital measurement of maximum incisal opening and lateral deviations",
        "Transparent written plan detailing timeline, costs, and expected outcomes",
      ],
    },
    {
      id: "faq-7",
      question: "Are custom oral splints more effective than over-the-counter night guards?",
      answer:
        "Soft or generic over-the-counter guards purchased from pharmacies often worsen TMJ disorders. Soft rubber guards act like a chew toy, stimulating the central nervous system to clench harder and altering your bite. In contrast, our medical-grade custom orthotics are hard acrylic, precision-calibrated to support the joint in its physiologically resting position.",
      bullets: [
        "Soft pharmacy guards can exacerbate nocturnal clenching by up to 40%",
        "Custom splints maintain precise balanced contact across all teeth",
        "Engineered to unload joint pressure and prevent irreversible tooth wear",
      ],
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="relative bg-[#0A0A0A] text-[#FAF9F6] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]"
      data-gsap="reveal"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#9B8A78]/10 via-[#9B8A78]/5 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-[11px] sm:text-xs font-medium tracking-[0.25em] uppercase text-[#9B8A78] mb-4">
            FAQS
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light uppercase tracking-wide text-white leading-[1.15]">
            QUESTIONS? WE ARE
            <br />
            GLAD YOU ASKED.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
            Clear, evidence-based answers to help you understand your jaw joint symptoms,
            headaches, and non-surgical treatment pathways.
          </p>
        </div>

        {/* Accordion List (Matching Screenshot Design) */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                onClick={() => toggleFAQ(faq.id)}
                className={`group rounded-[14px] bg-[#141416] border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen
                    ? "border-[#9B8A78]/40 bg-[#161619] shadow-lg shadow-black/40"
                    : "border-white/[0.07] hover:border-white/20 hover:bg-[#18181B]"
                }`}
              >
                {/* Accordion Question Header */}
                <div className="flex items-center justify-between p-5 sm:p-6 select-none">
                  <h3 className="font-serif text-[16px] sm:text-[18px] md:text-[19px] font-normal text-[#E8E6E3] group-hover:text-white transition-colors pr-4 tracking-wide leading-snug">
                    {faq.question}
                  </h3>

                  {/* Plus / Close Icon Box */}
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#9B8A78] border-[#9B8A78] text-black rotate-45 shadow-sm"
                        : "bg-[#1E1E22] border-white/10 text-neutral-300 group-hover:border-white/25 group-hover:text-white"
                    }`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.2]" />
                  </div>
                </div>

                {/* Accordion Expandable Answer */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.06] text-neutral-300 text-sm sm:text-[14.5px] leading-relaxed space-y-3">
                      <p className="font-light text-[#D1D1D6]">{faq.answer}</p>

                      {faq.bullets && faq.bullets.length > 0 && (
                        <ul className="space-y-1.5 pt-1">
                          {faq.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400 font-light"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#9B8A78] shrink-0 mt-1.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Consultation Prompt */}
        <div className="mt-14 text-center p-8 rounded-2xl bg-[#141416]/80 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-white">
              Have a specific question about your symptoms?
            </h4>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Speak directly with our clinical coordinators or book an initial comprehensive consultation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0290257644"
              className="text-xs uppercase tracking-wider font-medium text-neutral-300 hover:text-white px-4 py-2.5 rounded-[6px] border border-white/10 hover:border-white/20 transition-all"
            >
              02 9025 7644
            </a>
            <Link
              href="#booking-section"
              className="text-xs uppercase tracking-wider font-semibold text-black bg-[#9B8A78] hover:bg-[#B3A08D] px-5 py-2.5 rounded-[6px] transition-all"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
