import React from "react";
import { HelpCircle, ChevronRight } from "lucide-react";

export default function ContributingFactors() {
  const questions = [
    "Have you previously injured your jaw, face, head or neck?",
    "Did your symptoms begin following an accident, sporting injury, or a period of prolonged jaw opening?",
    "Have you noticed yourself clenching your jaw during the day?",
    "Has anyone heard you grinding your teeth while you sleep?",
    "Do you regularly wake with jaw fatigue, tenderness, or tooth sensitivity?",
  ];

  return (
    <section id="contributing-factors" className="py-16 lg:py-24 bg-[#F3EDE6] border-b border-[#E0DDD8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="eyebrow-light">Understanding Your Symptoms</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-light text-[#171717] leading-[1.12]">
            What may be contributing to my <em className="italic font-light">TMJ pain?</em>
          </h2>
          <div className="space-y-3 text-[16px] sm:text-[17px] text-[#54514C] leading-[1.75] font-light">
            <p className="font-semibold text-[#171717]">There is rarely one single cause of TMD.</p>
            <p>
              Jaw pain can arise from the joint itself, the surrounding muscles and ligaments, dental structures or, less commonly, other neurological or medical conditions.
            </p>
            <p>
              A range of factors may contribute, including previous injury, repetitive jaw loading, clenching or grinding, joint inflammation or degeneration, changes within the TMJ, pain sensitisation, sleep disturbance, and behavioural or psychosocial factors.
            </p>
            <p>
              For some people, symptoms develop after a clear injury. For others, they develop gradually over time.
            </p>
          </div>
        </div>

        {/* Two Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Type 01 */}
          <div className="bg-white rounded-[14px] p-8 shadow-soft border border-[#E0DDD8]/80 space-y-4">
            <span className="eyebrow-light">Type 01</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#171717]">
              Macro Trauma
            </h3>
            <div className="space-y-3 text-[15px] sm:text-[16px] text-[#54514C] leading-[1.75] font-light">
              <p>
                A significant injury involving the jaw, head or neck may contribute to the development of TMD symptoms.
              </p>
              <p>
                Examples can include a motor vehicle accident, sporting injury, direct blow to the jaw or face, whiplash, or another event that places substantial force through the jaw and surrounding structures.
              </p>
              <p>
                Not every injury results in persistent TMJ problems, but a history of trauma can be clinically relevant when investigating symptoms.
              </p>
            </div>
          </div>

          {/* Type 02 */}
          <div className="bg-white rounded-[14px] p-8 shadow-soft border border-[#E0DDD8]/80 space-y-4">
            <span className="eyebrow-light">Type 02</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#171717]">
              Repetitive Loading &amp; Microtrauma
            </h3>
            <div className="space-y-3 text-[15px] sm:text-[16px] text-[#54514C] leading-[1.75] font-light">
              <p>
                Repeated loading of the jaw may contribute to muscle or joint symptoms in some people.
              </p>
              <p>
                One possible contributor is <strong>bruxism</strong> — repetitive jaw-muscle activity that involves clenching or grinding the teeth.
              </p>
              <p>
                Bruxism can occur while awake or during sleep, and the factors associated with each can be different.
              </p>
              <p>
                It is important to remember that bruxism does not automatically mean you have TMD, and not everyone with TMD grinds their teeth.
              </p>
            </div>
          </div>
        </div>

        {/* Questions to Consider Box */}
        <div className="bg-white rounded-[14px] p-8 sm:p-10 shadow-soft border border-[#E0DDD8]/80 space-y-6">
          <span className="eyebrow-light">Some useful questions to consider</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions.map((q, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF9F6] border border-[#E0DDD8]/40">
                <ChevronRight className="w-4 h-4 text-[#9B8A78] mt-1 shrink-0" />
                <p className="text-[15px] text-[#171717] font-light leading-snug">{q}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#54514C] font-light italic border-t border-[#E0DDD8]/60 pt-4">
            If you are unsure, a clinical assessment can identify findings that may help determine whether jaw-muscle activity or other factors could be contributing to your symptoms.
          </p>
        </div>
      </div>
    </section>
  );
}
