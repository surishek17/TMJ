import React from "react";
import { AlertTriangle, Stethoscope, ShieldCheck } from "lucide-react";

export default function DifferentialDiagnosis() {
  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F5] border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-10 border border-brand-border/80 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <span className="medical-subheading mb-0">Rule Out Other Causes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark mb-4">
            Could it be something else?
          </h2>

          <div className="space-y-4 text-brand-muted text-base leading-relaxed">
            <p className="text-lg font-serif font-bold text-brand-dark">
              Yes.
            </p>
            <p>
              Pain around the jaw, temples, face, ears, teeth or head can have many different causes. These may include temporomandibular disorders, dental conditions, migraine, tension-type headache, sinus or ear conditions, neuralgic pain, musculoskeletal problems and other medical disorders.
            </p>
            <p>
              An important part of assessment is recognising when symptoms do not appear to originate from the jaw. Where appropriate, we may recommend evaluation by your general practitioner, medical specialist or another healthcare professional.
            </p>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-amber-950">
              <strong>Red flag symptoms:</strong> New or severe acute headache, sudden neurological symptoms, unexplained facial numbness or weakness, significant facial swelling, fever, or pain following major recent head trauma may require prompt emergency medical assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
