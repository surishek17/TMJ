"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function BookingSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredTime: "Morning",
    symptomsDescription: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAF8F5] border-b border-brand-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="medical-subheading">Take the First Step</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark mb-4">
            Understand what may be contributing to your symptoms
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            If jaw pain, headaches, facial pain or difficulty using your jaw are affecting you, an assessment can help determine whether a temporomandibular disorder may be contributing.
          </p>
          <p className="text-sm text-brand-muted mt-2">
            Your consultation is designed to establish the likely diagnosis, identify relevant contributing factors and determine whether further dental, medical, sleep, imaging or allied-health assessment is appropriate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Clinic & Doctor Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sand-card bg-white border border-brand-border p-6 sm:p-8 space-y-6 shadow-soft">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-taupe">
                  Principal Clinician
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-dark mt-1">
                  Dr Manish Shah
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Medical, Dental &amp; Sleep Trained Doctor and Dentist
                </p>
                <p className="text-xs sm:text-sm text-brand-muted mt-3 leading-relaxed">
                  Book a consultation with Dr Manish Shah for an individual assessment of your jaw symptoms and craniofacial health.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-brand-border/60 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-taupe flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-dark block">Sydney CBD Clinic:</strong>
                    <span className="text-brand-muted">
                      Suite 403, 307 Pitt Street, Sydney NSW 2000
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-taupe flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-dark block">Direct Phone Line:</strong>
                    <a
                      href="tel:0292649120"
                      className="text-brand-dark hover:text-brand-taupe font-medium transition-colors"
                    >
                      (02) 9264 9120
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-brand-taupe flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-dark block">Operating Hours:</strong>
                    <span className="text-brand-muted">
                      Monday – Friday: 9:00 am – 5:00 pm
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border/60">
                <a
                  href="tel:0292649120"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-brand-sand hover:bg-[#EAE4DC] text-brand-dark text-xs font-semibold uppercase tracking-wider rounded-lg border border-brand-border transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-taupe" /> Call To Book Instantly
                </a>
              </div>
            </div>
          </div>

          {/* Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="white-card border-brand-border p-6 sm:p-8 shadow-soft">
              <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">
                Request an Initial Appointment
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted mb-6">
                Fill in your details below and our Sydney clinical team will contact you to schedule an appropriate appointment slot.
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center bg-brand-sand/50 rounded-xl border border-brand-taupe/30 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-brand-taupe mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-brand-dark">
                    Thank You, {formData.fullName || "Patient"}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto">
                    Your appointment enquiry has been recorded. Our reception team will get in touch with you shortly via phone or email.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-taupe hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-cream/40 text-xs sm:text-sm focus:outline-none focus:border-brand-taupe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0400 000 000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-cream/40 text-xs sm:text-sm focus:outline-none focus:border-brand-taupe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jane@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-cream/40 text-xs sm:text-sm focus:outline-none focus:border-brand-taupe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
                        Preferred Time of Day
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-cream/40 text-xs sm:text-sm focus:outline-none focus:border-brand-taupe"
                      >
                        <option value="Morning">Morning (9:00am – 12:00pm)</option>
                        <option value="Afternoon">Afternoon (12:00pm – 3:00pm)</option>
                        <option value="Late Afternoon">Late Afternoon (3:00pm – 5:00pm)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-1">
                      Brief Description of Symptoms
                    </label>
                    <textarea
                      rows={3}
                      value={formData.symptomsDescription}
                      onChange={(e) => setFormData({ ...formData, symptomsDescription: e.target.value })}
                      placeholder="e.g. Jaw clicking on the left side, morning temple tension, teeth clenching..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-cream/40 text-xs sm:text-sm focus:outline-none focus:border-brand-taupe"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#1A1A1A] hover:bg-brand-taupe text-white text-xs font-semibold uppercase tracking-widest rounded-lg transition-colors shadow-soft"
                  >
                    Submit Booking Request
                  </button>

                  <p className="text-[11px] text-brand-muted text-center pt-2">
                    Privacy protected. Your information is strictly utilized to coordinate your clinical consult.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
