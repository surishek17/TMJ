import React from "react";

export default function ProgressTimeline() {
  return (
    <section id="monitoring-progress" className="py-16 lg:py-24 bg-[#F3EDE6] border-b border-[#E0DDD8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Big Editorial Heading */}
          <div className="lg:col-span-5 space-y-4">
            <span className="eyebrow-light">Treatment Journey</span>
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-light text-[#171717] leading-[1.08] tracking-tight">
              Monitoring Your <em className="italic font-light">Progress</em>
            </h2>
            <p className="text-[#9B8A78] font-serif text-2xl sm:text-3xl font-light italic">
              improve dramatically
            </p>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 bg-white rounded-[14px] p-8 sm:p-10 shadow-soft border border-[#E0DDD8]/80 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#171717]">
              Treatment should <em className="italic font-light">evolve with you</em>
            </h3>

            <div className="space-y-4 text-[15px] sm:text-[16px] text-[#54514C] leading-[1.75] font-light">
              <p>
                Your progress is reviewed according to your diagnosis and the treatment being provided.
              </p>
              <p>
                We assess changes in symptoms, jaw function and other relevant clinical findings and adjust the management plan where appropriate.
              </p>
              <p>
                Some TMD conditions improve relatively quickly, while others fluctuate or require longer-term management.
              </p>
              <p>
                No treatment can guarantee a particular outcome, and response varies between individuals.
              </p>
              <p className="font-normal text-[#171717]">
                Our aim is to use the <strong>least invasive appropriate management</strong> and involve other healthcare professionals when the clinical situation requires it.
              </p>
              <div className="border-t border-[#E0DDD8]/60 pt-4 space-y-3">
                <p>
                  We review you regularly until we’ve achieved maximal medical improvement — the point at which your body has healed as much as it can, based on your compliance and your body’s own capacity to recover.
                </p>
                <p className="font-serif text-xl sm:text-2xl text-[#171717] font-normal leading-snug">
                  You don’t have to live with the pain and debilitation of TMJ pain, headaches and neck pain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
