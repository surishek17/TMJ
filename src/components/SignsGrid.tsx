import React from "react";
import Image from "next/image";
import { AlertCircle } from "lucide-react";

interface SignItem {
  id: string;
  title: string;
  image: string;
  description: string;
  caveat: string;
}

const signsData: SignItem[] = [
  {
    id: "tooth-wear",
    title: "Tooth Wear",
    image: "/images/tooth-wear.png",
    description: "Flattening, chipping, or progressive loss of tooth enamel and incisal structure over time.",
    caveat: "Tooth wear can have several causes, including mechanical friction, dietary/gastric acids, and erosion. Patterns require clinical interpretation."
  },
  {
    id: "tori",
    title: "Tori",
    image: "/images/tori.png",
    description: "Benign bony outgrowths (exostoses) that form along the lingual aspect of the lower jaw or palate.",
    caveat: "Their development involves several factors including genetics and mechanical load. The presence of tori alone does not confirm bruxism."
  },
  {
    id: "tongue-scalloping",
    title: "Tongue Scalloping",
    image: "/images/tongue-scalloping.png",
    description: "Indented, crenated, or wavy impressions along the lateral borders where the tongue presses against teeth.",
    caveat: "Can occur from clenching, tongue posture, macroglossia, or airway positioning and should be considered with the overall clinical examination."
  },
  {
    id: "cracked-teeth",
    title: "Cracked, Chipped or Fractured Teeth",
    image: "/images/cracked-teeth.png",
    description: "Structural fissures, cusp fractures, or cracked tooth syndrome from intense mechanical loading.",
    caveat: "Cracks can also result from large existing restorations, structural weakness, biting hard objects, and natural tooth anatomy."
  },
  {
    id: "facial-pain",
    title: "Facial, Jaw or Tooth Pain",
    image: "/images/facial-jaw-pain.png",
    description: "Deep aching, fatigue, or hyperalgesia across the masseters, temporalis temples, cheeks, or non-cavity teeth.",
    caveat: "Symptoms are frequently more noticeable on waking in sleep clenchers, or towards evening in daytime jaw-clenchers."
  },
  {
    id: "headaches",
    title: "Headaches",
    image: "/images/headaches.png",
    description: "Bilateral temple pressure, tension-type headaches, or morning occipital soreness radiating up the scalp.",
    caveat: "TMD and jaw-muscle tenderness can coexist with headache disorders. Because headaches have many origins, they should not automatically be attributed solely to the jaw."
  },
  {
    id: "limited-opening",
    title: "Limited Jaw Opening",
    image: "/images/limited-jaw-opening.png",
    description: "Difficulty opening the mouth fully (trismus), stiffness, catching sensation, or an intermittent closed lock.",
    caveat: "May indicate disc displacement without reduction or severe masticatory muscle splinting requiring prompt functional assessment."
  },
  {
    id: "jaw-noises",
    title: "Jaw Noises",
    image: "/images/jaw-noises.png",
    description: "Clicking, popping, grating, or crepitus sounds occurring when opening, closing, or chewing.",
    caveat: "Joint sounds are very common. Importantly, jaw clicking without pain or limitation of movement does not always require active medical intervention."
  },
  {
    id: "morning-soreness",
    title: "Morning Jaw Soreness",
    image: "/images/morning-soreness.png",
    description: "Waking with tired, stiff, or tender jaw muscles, feeling as though the jaw has been working all night.",
    caveat: "Frequently correlates with sleep-related bruxism or micro-arousals, though sleep posture and cervical strain should also be evaluated."
  }
];

export default function SignsGrid() {
  return (
    <section id="signs" className="py-16 lg:py-24 bg-white border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="medical-subheading">Recognising Possible Bruxism</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-4">
            Signs that may be associated with clenching or grinding
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            Bruxism can sometimes be associated with changes to the teeth, jaw muscles, and surrounding tissues.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 p-3 rounded-lg bg-brand-sand/60 border border-brand-border text-xs sm:text-sm text-brand-muted text-left">
            <AlertCircle className="w-4 h-4 text-brand-taupe flex-shrink-0" />
            <span>
              <strong>Clinical notice:</strong> None of the findings below confirms bruxism on its own, and many of these findings can occur for reasons unrelated to grinding or clenching.
            </span>
          </div>
        </div>

        {/* 9-Card Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {signsData.map((sign, index) => (
            <div
              key={sign.id}
              className="white-card flex flex-col justify-between overflow-hidden group hover:border-brand-taupe transition-all duration-300"
            >
              <div>
                {/* Image display */}
                <div className="relative aspect-[16/11] rounded-lg overflow-hidden bg-brand-sand mb-4">
                  <Image
                    src={sign.image}
                    alt={sign.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-brand-dark/80 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded">
                    Sign 0{index + 1}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-taupe transition-colors">
                  {sign.title}
                </h3>

                <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed mb-3">
                  {sign.description}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60">
                <p className="text-[11px] leading-relaxed text-brand-muted italic bg-brand-cream/80 p-2.5 rounded">
                  {sign.caveat}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
