import React from "react";

export default function AssessmentProcess() {
  const steps = [
    {
      step: "01",
      title: "History & Clinical Examination",
      text: [
        "We begin with a detailed history of your symptoms. This may include when the problem began, previous injuries, jaw function, dental symptoms, headaches, clenching or grinding, sleep, breathing and other relevant medical factors.",
        "The clinical examination may assess jaw range and pattern of movement, joint sounds, muscle and joint tenderness, bite and dental findings and other relevant head and neck structures.",
        "The aim is to determine whether your symptoms are most consistent with a muscular TMD, joint-related TMD or another condition that requires further investigation.",
      ],
    },
    {
      step: "02",
      title: "Sleep & Breathing Assessment — When Indicated",
      text: [
        "Sleep and jaw-muscle activity can interact in some patients. If your history suggests snoring, obstructive sleep apnoea, disrupted sleep or another sleep disorder, further sleep assessment may be appropriate.",
        "This does not mean that every person with TMJ pain requires a sleep study. Where clinically indicated, we may recommend or arrange appropriate sleep investigation to determine whether a sleep disorder is present and whether it needs separate management.",
      ],
    },
    {
      step: "03",
      title: "Imaging — When Indicated",
      text: [
        "Most TMD assessment begins with history and clinical examination rather than imaging. When the diagnosis is uncertain or specific joint, dental, skeletal or airway information is required, appropriate imaging may be considered.",
        "Different imaging techniques provide different information. The decision to recommend imaging depends on your symptoms, clinical findings and the specific diagnostic question being investigated.",
        "Imaging findings are always interpreted together with the clinical assessment rather than being used alone to determine the cause of pain.",
      ],
    },
    {
      step: "04",
      title: "Blood Tests – When Indicated",
      text: [
        "If a nutritional deficiency or hormonal assessment is required, then a blood test may be recommended.",
        "We always interpret the findings alongside the clinical assessment, rather than using them alone to determine the cause of pain.",
      ],
    },
  ];

  return (
    <section id="how-we-assess" className="py-16 lg:py-24 bg-white border-b border-[#E0DDD8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="eyebrow-light">Our process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-light text-[#171717] leading-[1.12]">
            How we <em className="italic font-light">Assess TMJ pain</em>
          </h2>
          <div className="space-y-2 text-[16px] sm:text-[17px] text-[#54514C] leading-[1.75] font-light">
            <p>
              Effective management begins with establishing the most likely diagnosis and identifying the factors that may be contributing to your symptoms.
            </p>
            <p>
              Not every patient requires the same investigations. Your assessment is tailored to your history, symptoms and clinical findings.
            </p>
          </div>
        </div>

        {/* 4-Step Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#FAF9F6] rounded-[14px] p-8 border border-[#E0DDD8]/70 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-[#9B8A78]">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#171717] leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-3 text-[14px] sm:text-[15px] text-[#54514C] leading-[1.75] font-light">
                  {item.text.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
