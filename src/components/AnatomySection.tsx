import React from "react";
import Image from "next/image";

export default function AnatomySection() {
  return (
    <section id="the-basics" className="py-16 lg:py-24 bg-white border-b border-[#E0DDD8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="eyebrow-light">The basics</span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-light text-[#171717] leading-[1.12]">
                What is the <em className="italic font-light">temporomandibular joint (TMJ)?</em>
              </h2>
            </div>

            <div className="space-y-4 text-[16px] sm:text-[17px] text-[#54514C] leading-[1.8] font-light">
              <p>
                The temporomandibular joint (TMJ) connects your lower jaw to the skull — specifically the temporal bone — just in front of each ear. It’s one of the most complex and frequently used joints in the body, working every time you speak, chew, yawn or swallow.
              </p>
              <p>
                Because it’s made up of bone, muscle, ligaments, nerves, blood vessels and a protective disc, problems can arise from any one of these structures. That’s why an accurate diagnosis matters — pain in the same place can have very different causes.
              </p>
            </div>
          </div>

          {/* Right Column: Closed Mouth Anatomy Visual */}
          <div className="lg:col-span-5">
            <div className="bg-[#F3EDE6] rounded-[14px] p-6 sm:p-8 flex flex-col items-center justify-between shadow-soft border border-[#E0DDD8]/60">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-white/50">
                <Image
                  src="/images/closed-mouth.png"
                  alt="Closed-mouth TMJ anatomy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full bg-[#1A1A1A] text-white text-[11px] font-sans font-light uppercase tracking-[1px] py-2.5 px-4 rounded text-center mt-4">
                Closed-mouth TMJ anatomy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
