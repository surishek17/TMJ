import React from "react";

export default function ManagementFramework() {
  const area1 = [
    {
      title: "Oral Appliance Therapy — When Appropriate",
      desc: "Different oral appliances are used for different clinical purposes during NIGHTTIME. In selected patients, an individually prescribed appliance may form part of the management of jaw symptoms. For patients with an appropriately diagnosed sleep-related breathing disorder, a mandibular advancement appliance may also be considered where clinically suitable. It may also alter or reduce sleep-bruxism activity in some patients. Potential benefits, limitations and relevant side effects are discussed before treatment.",
    },
    {
      title: "Nasal & ENT Assessment — When Indicated",
      desc: "Persistent nasal obstruction may affect breathing and sleep quality. When the history or examination suggests a significant nasal or upper-airway problem, we may recommend evaluation by an ear, nose and throat (ENT) specialist or another medical clinician. Addressing nasal obstruction can be an important component of broader sleep or breathing management.",
    },
    {
      title: "Breathing Retraining",
      desc: "In selected patients with dysfunctional breathing patterns or persistent mouth-breathing behaviours, appropriately supervised breathing retraining may be considered as part of an integrated management approach.",
    },
    {
      title: "Orofacial Myofunctional Therapy",
      desc: "Orofacial myofunctional therapy involves exercises and behavioural strategies relating to tongue posture, lips, cheeks and other orofacial muscles. It is not indicated for every patient with TMD, but may be considered where clinical assessment identifies specific orofacial muscle behaviours that may be relevant to care.",
    },
  ];

  const area2 = [
    {
      title: "TMJ Physiotherapy",
      desc: "TMJ Physiotherapy may help selected people with TMD, particularly where muscle- or movement-related factors are prominent. Where appropriate, we can work closely with experienced physiotherapists to coordinate care.",
    },
    {
      title: "Oral Appliances (Daytime)",
      desc: "Some patients may benefit from an individually prescribed oral appliance as part of conservative TMD management during DAYTIME. The design and purpose of an appliance depend on whether it is intended to protect the teeth, manage muscle tenderness, support the joint or assist with daytime jaw habits. Because different appliances serve different functions, recommendations are made following thorough clinical assessment.",
    },
    {
      title: "Nutritional Supplements and Medical Management",
      desc: "Sleep quality, physical activity, diet, medication use and general health can influence pain and recovery. Where clinically relevant, these factors may be considered alongside other management options.",
    },
    {
      title: "Multidisciplinary Pain Management",
      desc: "Persistent pain can become complex. Where symptoms continue despite appropriate initial management, collaboration with other healthcare professionals may be recommended. Depending on the circumstances, this could include a physiotherapist, medical practitioner, pain specialist, neurologist, psychologist or another appropriately qualified clinician.",
    },
    {
      title: "Injectables, Dry Needling, Lasers",
      desc: "Therapies such as B. Tox, Prolotherapy, PRP, Acupuncture, Low Level Laser therapy may help selected people with TMD. These are separate clinical indications, and the recommended treatment depends on the individual diagnosis.",
    },
  ];

  const area3 = [
    {
      title: "Psychology & Persistent Pain",
      desc: "Persistent pain can affect sleep, mood, concentration and quality of life. At the same time, stress, anxiety, poor sleep and other psychological factors can influence how the nervous system processes pain. Where appropriate, working with a psychologist or other suitably qualified clinician may form part of multidisciplinary persistent-pain care. This does not imply that the pain is imagined or purely psychological.",
    },
    {
      title: "Relaxation, Mindfulness and Meditation",
      desc: "Relaxation techniques, mindfulness, meditation, exercise or other stress-management approaches may help some people manage stress and persistent pain. These strategies are complementary components of care rather than substitutes for appropriate diagnosis and treatment.",
    },
  ];

  return (
    <section id="how-we-manage" className="py-16 lg:py-24 bg-[#171717] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="eyebrow-dark">Our Integrated Approach</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-light text-white leading-[1.12]">
            How we <em className="italic font-light">manage TMJ pain</em>
          </h2>
          <div className="space-y-2 text-[16px] sm:text-[17px] text-white/70 leading-[1.75] font-light">
            <p>
              TMD can involve more than one contributing factor, which means management is not necessarily the same for every person.
            </p>
            <p>
              Your treatment plan depends on your diagnosis, symptoms, contributing factors, general health and individual needs.
            </p>
            <p className="text-white font-medium">
              Not every patient requires every treatment described below.
            </p>
            <p>
              Where possible, management generally begins with appropriate conservative and reversible approaches.
            </p>
          </div>
        </div>

        {/* 3 Major Areas */}
        <div className="space-y-16">
          {/* Area 01 */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[12px] font-sans font-medium uppercase tracking-[1.6px] text-[#9B8A78]">
                Area 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-white mt-1">
                Breathing &amp; Sleep
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {area1.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#242424] rounded-[14px] p-6 border border-white/10 space-y-3"
                >
                  <h4 className="text-[16px] font-medium text-white">{item.title}</h4>
                  <p className="text-[14px] text-white/70 font-light leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Area 02 */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[12px] font-sans font-medium uppercase tracking-[1.6px] text-[#9B8A78]">
                Area 02
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-white mt-1">
                Jaw Pain &amp; Function
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {area2.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#242424] rounded-[14px] p-6 border border-white/10 space-y-3"
                >
                  <h4 className="text-[16px] font-medium text-white">{item.title}</h4>
                  <p className="text-[14px] text-white/70 font-light leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Area 03 */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[12px] font-sans font-medium uppercase tracking-[1.6px] text-[#9B8A78]">
                Area 03
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-white mt-1">
                Stress, Behaviour &amp; Pain Regulation
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {area3.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#242424] rounded-[14px] p-6 border border-white/10 space-y-3"
                >
                  <h4 className="text-[16px] font-medium text-white">{item.title}</h4>
                  <p className="text-[14px] text-white/70 font-light leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
