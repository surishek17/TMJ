import React from "react";
import Image from "next/image";
import { Info, CheckCircle2, ShieldAlert } from "lucide-react";

export default function AnatomySection() {
  return (
    <section id="anatomy" className="py-16 lg:py-24 bg-white border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="medical-subheading">Temporomandibular Joint Anatomy</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-4">
            What is the temporomandibular joint (TMJ)?
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            The temporomandibular joint (TMJ) connects your lower jaw to the skull — specifically the temporal bone — just in front of each ear. It’s one of the most complex and frequently used joints in the body, working every time you speak, chew, yawn or swallow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Anatomy Graphic */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-brand-sand/50 border border-brand-border p-4 shadow-soft">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/tmj-anatomy.png"
                  alt="Anatomy of the Temporomandibular Joint (TMJ) and Mandible"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-brand-muted px-2">
                <span>Figure: Craniofacial Joint, Disc &amp; Muscle Structures</span>
                <span className="font-medium text-brand-dark">Clinical Reference</span>
              </div>
            </div>
          </div>

          {/* Detailed clinical breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p className="text-base sm:text-lg text-brand-dark font-medium">
                Because it’s made up of bone, muscle, ligaments, nerves, blood vessels and a protective disc, problems can arise from any one of these structures.
              </p>
              <p>
                That’s why an accurate diagnosis matters — pain in the same place can have very different causes. A muscle spasm in the masseter feels identical to joint inflammation to many patients, but requires a distinct therapeutic strategy.
              </p>
            </div>

            {/* Joint Component Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="sand-card">
                <h4 className="font-serif text-lg font-bold text-brand-dark mb-1">
                  Articular Disc
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted">
                  A fibrous cushion between the skull and condyle that absorbs shock and enables smooth gliding movements.
                </p>
              </div>

              <div className="sand-card">
                <h4 className="font-serif text-lg font-bold text-brand-dark mb-1">
                  Masticatory Muscles
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted">
                  Masseter, temporalis, and pterygoid muscles exerting tremendous biting force and reciprocal stabilization.
                </p>
              </div>

              <div className="sand-card">
                <h4 className="font-serif text-lg font-bold text-brand-dark mb-1">
                  Temporal &amp; Mandibular Bone
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted">
                  The glenoid fossa and condylar head that form the structural hinge and sliding joint.
                </p>
              </div>

              <div className="sand-card">
                <h4 className="font-serif text-lg font-bold text-brand-dark mb-1">
                  Innervation &amp; Vasculature
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted">
                  Rich sensory nerve supply linked to the trigeminal system, explaining radiating temple and ear symptoms.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-cream border border-brand-border/70 flex items-start gap-3">
              <Info className="w-5 h-5 text-brand-taupe flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-brand-muted">
                <strong className="text-brand-dark">Clinical takeaway:</strong> Pain originating from the joint cartilage, the ligamentous attachments, or the surrounding chewing musculature requires precise differential testing rather than generic symptom masking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
