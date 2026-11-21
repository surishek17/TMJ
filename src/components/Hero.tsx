import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#FAF9F6] pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-[#E0DDD8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <p className="text-[11px] font-sans font-light uppercase tracking-[1.4px] text-[#9B8A78]">
            Home &nbsp;/&nbsp; Treatments &nbsp;/&nbsp; <span className="font-normal text-[#171717]">TMJ Pain &amp; Headaches</span>
          </p>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headlines & Clinical Context */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-serif font-light text-[#171717] leading-[1.08] tracking-tight">
              TMJ Pain, TMD &amp; <em className="italic font-light">Headaches in Sydney.</em>
            </h1>

            <div className="space-y-4 text-[16px] sm:text-[17px] text-[#54514C] leading-[1.75] font-light">
              <p className="font-semibold text-[#171717]">
                Jaw pain, headaches and neck tension can occur together — but the cause is not always straightforward.
              </p>
              <p>
                Understanding what may be contributing to your symptoms is the first step towards developing an appropriate, individualised management plan.
              </p>
              <p>
                At the Sydney Centre for TMJ &amp; Sleep Therapy, we assess the jaw joints, jaw muscles, teeth, head and neck symptoms and, where clinically indicated, sleep and breathing factors, nutritional factors and emotional factors that may be relevant to your condition.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#how-we-assess"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#171717] hover:bg-[#9B8A78] text-white text-[13px] font-medium uppercase tracking-[1.5px] rounded-[10px] transition-colors text-center"
              >
                How We Assess TMJ Pain
              </Link>
              <Link
                href="#how-we-manage"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent hover:bg-[#171717] hover:text-white text-[#171717] text-[13px] font-medium uppercase tracking-[1.5px] rounded-[10px] border border-[#171717] transition-all text-center"
              >
                How We Diagnose
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Anatomy Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#F3EDE6] rounded-[14px] p-6 sm:p-10 flex flex-col items-center justify-between shadow-soft border border-[#E0DDD8]/60">
              <div className="relative w-full aspect-square max-w-[380px] my-4">
                <Image
                  src="/images/tmj-anatomy.png"
                  alt="Temporomandibular Joint Anatomy"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="w-full bg-[#1A1A1A] text-white text-[11px] font-sans font-light uppercase tracking-[1px] py-2.5 px-4 rounded text-center mt-4">
                Temporomandibular Joint Anatomy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
