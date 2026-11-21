import React from "react";
import Image from "next/image";

export default function BruxismHeadacheSection() {
  return (
    <section id="bruxism" className="py-16 lg:py-24 bg-white border-b border-[#E0DDD8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clinical Discussion */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="eyebrow-light">Bruxism &amp; Headaches</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-light text-[#171717] leading-[1.12]">
                Can grinding cause <em className="italic font-light">headaches?</em>
              </h2>
            </div>

            <div className="space-y-4 text-[16px] sm:text-[17px] text-[#54514C] leading-[1.75] font-light">
              <p>
                Bruxism, temporomandibular disorders, sleep disturbance and headache disorders can occur together.
              </p>
              <p>
                In some people, increased activity or tenderness of the jaw and temple muscles may contribute to head or facial pain.
              </p>
              <p>
                However, this relationship is not the same for everyone. A person can have bruxism without headaches, headaches without bruxism, or both conditions for unrelated reasons.
              </p>
              <p>
                Migraine, tension-type headache and other headache disorders are also common and may require medical assessment.
              </p>
              <p className="border-l-2 border-[#9B8A78] pl-4 italic text-[#171717] font-normal py-1">
                The aim of assessment is therefore <b>not simply to assume that a headache is coming from the jaw</b>, but to determine whether the jaw and associated muscles appear to be contributing to the overall clinical picture.
              </p>
            </div>
          </div>

          {/* Right Column: Muscle Anatomy Visual */}
          <div className="lg:col-span-5">
            <div className="bg-[#F3EDE6] rounded-[14px] p-6 sm:p-8 flex flex-col items-center justify-between shadow-soft border border-[#E0DDD8]/60">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-white">
                <Image
                  src="/images/muscles-tender.png"
                  alt="Muscles that become tender during bruxism"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="w-full bg-[#1A1A1A] text-white text-[11px] font-sans font-light uppercase tracking-[1px] py-2.5 px-4 rounded text-center mt-4">
                Muscles that become tender during bruxism
              </div>
            </div>
          </div>
        </div>

        {/* Statistical Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-[#E0DDD8]/50">
          <div className="bg-[#FAF9F6] rounded-[14px] p-8 border border-[#E0DDD8]/70 shadow-soft">
            <div className="text-5xl sm:text-6xl font-serif font-light text-[#171717] mb-2">
              65%
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#54514C] font-light leading-relaxed">
              of patients with night-time bruxism also experience headaches.
            </p>
          </div>

          <div className="bg-[#FAF9F6] rounded-[14px] p-8 border border-[#E0DDD8]/70 shadow-soft">
            <div className="text-5xl sm:text-6xl font-serif font-light text-[#171717] mb-2">
              3×
            </div>
            <p className="text-[15px] sm:text-[16px] text-[#54514C] font-light leading-relaxed">
              the biting force used by people who grind, compared with those who don’t.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
