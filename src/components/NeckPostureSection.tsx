import React from "react";
import Image from "next/image";

export default function NeckPostureSection() {
  return (
    <section id="neck-posture" className="py-16 lg:py-24 bg-[#171717] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="eyebrow-dark">The Neck, Shoulders &amp; Jaw</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-light text-white leading-[1.12]">
                Why do I have <em className="italic font-light">neck &amp; shoulder pain?</em>
              </h2>
            </div>

            <div className="space-y-4 text-[16px] sm:text-[17px] text-white/70 leading-[1.8] font-light">
              <p className="text-white font-normal">
                The jaw, head, and neck do not function independently.
              </p>
              <p>
                The muscles and joints involved in jaw movement interact with the muscles that control the head, neck, and shoulders. As a result, jaw symptoms and neck symptoms can sometimes occur together.
              </p>
              <p>
                Posture, muscle tension, pain sensitivity, sleep quality, work habits, and other musculoskeletal factors may all contribute.
              </p>
              <p className="text-white/90 font-normal pt-2">
                Breathing patterns may also be relevant in selected patients.
              </p>
              <p>
                For example, persistent nasal obstruction and mouth breathing can coexist with altered head and neck posture. However, the relationship between breathing, posture, and pain is complex and does not mean that nasal obstruction is necessarily the cause of neck or jaw pain.
              </p>
              <p>
                Where symptoms suggest impaired nasal breathing or another airway problem, further assessment may be appropriate.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Diagrams */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual 1 */}
            <div className="bg-[#242424] rounded-[14px] p-5 border border-white/10 shadow-soft">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white/5 mb-3">
                <Image
                  src="/images/forward-head-carriage.jpg"
                  alt="Forward head carriage"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[13px] text-white/80 font-light text-center">
                Each inch of forward head adds load to the spine
              </p>
            </div>

            {/* Visual 2 */}
            <div className="bg-[#242424] rounded-[14px] p-5 border border-white/10 shadow-soft">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white/5 mb-3">
                <Image
                  src="/images/posture-domino.png"
                  alt="The domino effect of forward head posture"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[13px] text-white/80 font-light text-center">
                The domino effect of forward head posture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
