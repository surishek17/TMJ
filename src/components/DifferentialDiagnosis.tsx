import React from "react";

export default function DifferentialDiagnosis() {
  return (
    <section id="diagnosis" className="py-16 lg:py-24 bg-[#F3EDE6] border-b border-[#E0DDD8]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Column 1: Rule Out Other Causes */}
          <div className="bg-white rounded-[14px] p-8 sm:p-10 shadow-soft border border-[#E0DDD8]/80 space-y-5">
            <div>
              <span className="eyebrow-light">Rule Out Other Causes</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#171717] leading-[1.15]">
                Could it be <em className="italic font-light">something else?</em>
              </h2>
            </div>

            <div className="space-y-3.5 text-[15px] sm:text-[16px] text-[#54514C] leading-[1.75] font-light">
              <p className="font-semibold text-[#171717]">Yes.</p>
              <p>
                Pain around the jaw, temples, face, ears, teeth or head can have many different causes.
              </p>
              <p>
                These may include temporomandibular disorders, dental conditions, migraine, tension-type headache, sinus or ear conditions, neuralgic pain, musculoskeletal problems and other medical disorders.
              </p>
              <p>
                An important part of assessment is recognising when symptoms do <strong>not</strong> appear to originate from the jaw.
              </p>
              <p>
                Where appropriate, we may recommend evaluation by your general practitioner, medical specialist or another healthcare professional.
              </p>
              <div className="bg-[#FAF9F6] p-4 rounded-lg border border-[#E0DDD8]/80 mt-4">
                <p className="text-xs text-[#171717] font-normal leading-relaxed">
                  <strong>Important:</strong> New or severe headache, neurological symptoms, significant facial swelling, fever, recent major trauma or other concerning symptoms may require prompt medical assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Stress, Clenching & Persistent Pain */}
          <div className="bg-white rounded-[14px] p-8 sm:p-10 shadow-soft border border-[#E0DDD8]/80 space-y-5">
            <div>
              <span className="eyebrow-light">Stress, Clenching &amp; Persistent Pain</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#171717] leading-[1.15]">
                Is stress related to <em className="italic font-light">TMJ pain?</em>
              </h2>
            </div>

            <div className="space-y-3.5 text-[15px] sm:text-[16px] text-[#54514C] leading-[1.75] font-light">
              <p className="font-semibold text-[#171717]">It can be.</p>
              <p>
                Stress does not mean that pain is “all in your head.”
              </p>
              <p>
                Pain is a real biological experience influenced by many interacting factors.
              </p>
              <p>
                In some people, stress may increase awake clenching, muscle tension and pain sensitivity. Poor sleep, anxiety, persistent pain and emotional distress can also influence one another.
              </p>
              <p>
                For this reason, stress-management strategies or psychological therapies may sometimes form part of a multidisciplinary approach to persistent TMD pain.
              </p>
              <p className="italic text-[#7A7A7A] text-sm pt-2">
                They are not required for every patient and are recommended according to individual circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
