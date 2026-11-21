"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Send, X, Phone, MapPin } from "lucide-react";

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Clinical thumbnail images for cursor trail
  const trailImages = [
    "/images/tmj-anatomy.png",
    "/images/closed-mouth.png",
    "/images/tooth-wear.png",
    "/images/tongue-scalloping.png",
    "/images/cracked-teeth.png",
    "/images/facial-jaw-pain.png",
    "/images/headaches.png",
    "/images/limited-jaw-opening.png",
    "/images/jaw-noises.png",
    "/images/morning-soreness.png",
    "/images/forward-head-carriage.jpg",
    "/images/muscles-tender.png",
  ];

  // 1. Scroll-triggered reveal transition
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. Interactive mouse cursor trail animation (matching spadental)
  useEffect(() => {
    const section = sectionRef.current;
    const trailContainer = trailRef.current;
    if (!section || !trailContainer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Preload trail images
    trailImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    let lastTime = 0;
    let lastX = 0;
    let lastY = 0;
    let imgIndex = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Distance threshold so we don't spawn continuously
      const dx = x - lastX;
      const dy = y - lastY;
      if (dx * dx + dy * dy < 900) return;

      const now = e.timeStamp;
      if (now - lastTime < 85) return;

      lastTime = now;
      lastX = x;
      lastY = y;

      const trailItem = document.createElement("div");
      trailItem.className =
        "pointer-events-none absolute w-[110px] sm:w-[140px] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border border-white/20 bg-[#171717] z-10";

      const img = document.createElement("img");
      img.src = trailImages[imgIndex];
      img.alt = "";
      img.className = "w-full h-full object-cover";
      imgIndex = (imgIndex + 1) % trailImages.length;
      trailItem.appendChild(img);

      const rot = (Math.random() - 0.5) * 28;
      trailItem.style.left = `${x}px`;
      trailItem.style.top = `${y}px`;
      trailContainer.appendChild(trailItem);

      const baseTransform = `translate(-50%, -50%) rotate(${rot.toFixed(1)}deg) `;

      trailItem
        .animate(
          [
            { transform: `${baseTransform}scale(0.85)`, opacity: 0 },
            { transform: `${baseTransform}scale(1.15)`, opacity: 0.95, offset: 0.2 },
            { transform: `${baseTransform}scale(0.2)`, opacity: 0 },
          ],
          {
            duration: 650,
            fill: "forwards",
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          }
        )
        .onfinish = () => trailItem.remove();
    };

    section.addEventListener("pointermove", handlePointerMove);
    return () => section.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="booking-section"
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center bg-[#0A0A0A] text-[#FAF9F6] text-center overflow-hidden py-24 sm:py-32 px-6"
    >
      <div id="contact" className="absolute -top-24 pointer-events-none" />
      {/* Background Artwork Lines with Shimmering Sweep Animation */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-[1920px] h-full flex items-center justify-center opacity-40">
          <Image
            ref={linesRef}
            src="/images/cta-lines.svg"
            alt=""
            width={1920}
            height={801}
            priority
            className="w-full h-auto object-cover max-w-none pointer-events-none select-none animate-shimmer-sweep"
          />
        </div>
      </div>

      {/* Mouse Trail Container */}
      <div
        ref={trailRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden z-10"
      />

      {/* Center Content with Staggered Scroll-Triggered Transitions */}
      <div className="relative z-20 max-w-3xl mx-auto flex flex-col items-center gap-6 sm:gap-7">
        {/* Eyebrow */}
        <p
          className={`text-[11px] sm:text-[12px] font-sans uppercase tracking-[0.2em] text-[#9B8A78] transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-8 blur-md"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Begin your TMJ &amp; recovery journey
        </p>

        {/* Big Editorial Heading */}
        <h2
          className={`font-serif uppercase tracking-tight text-[#FAF9F6] leading-[1.04] text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-8 blur-md"
          }`}
          style={{ transitionDelay: "220ms" }}
        >
          YOUR JAW HEALTH.
          <br />
          OUR EXPERTISE.
        </h2>

        {/* Description & Contact Lead */}
        <p
          className={`font-sans font-light text-white/70 text-sm sm:text-base leading-[1.8] max-w-lg mx-auto transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-8 blur-md"
          }`}
          style={{ transitionDelay: "340ms" }}
        >
          We are open Monday through Friday by appointment. Give us a call at{" "}
          <a
            href="tel:0292649120"
            className="underline underline-offset-4 decoration-white/40 hover:decoration-white hover:text-white transition-colors"
          >
            02 9264 9120
          </a>{" "}
          to schedule your consultation with Dr Manish Shah.
        </p>

        {/* Two-Tone Luxury Button */}
        <div
          className={`pt-2 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-8 blur-md"
          }`}
          style={{ transitionDelay: "460ms" }}
        >
          <button
            onClick={() => setShowEnquiryModal(true)}
            className="group relative inline-flex items-center rounded-[5px] bg-[#FAF9F6] p-[3px] text-[#171717] transition-all hover:bg-white shadow-elevated focus:outline-none"
          >
            <span className="px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-sans font-medium tracking-wide">
              Book a clinical assessment
            </span>
            <span className="flex items-center justify-center w-10 sm:w-11 h-10 sm:h-11 rounded-[3px] bg-[#9B8A78] text-[#171717] transition-transform duration-300 ease-out group-hover:translate-x-1">
              <img
                src="/images/icon-arrow.svg"
                alt=""
                className="w-5 h-5 block"
                aria-hidden="true"
              />
            </span>
          </button>
        </div>

        {/* Subtle Location Pill */}
        <div
          className={`pt-4 text-xs font-light text-white/40 flex items-center gap-1.5 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-8 blur-md"
          }`}
          style={{ transitionDelay: "580ms" }}
        >
          <MapPin className="w-3.5 h-3.5 text-[#9B8A78]" />
          <span>Suite 403, 307 Pitt Street, Sydney NSW 2000</span>
        </div>
      </div>

      {/* Interactive Modal Booking Drawer */}
      {showEnquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#171717] rounded-[14px] p-6 sm:p-8 border border-white/15 text-left shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowEnquiryModal(false)}
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#61CE70] mx-auto" />
                <h3 className="font-serif text-2xl text-white">Enquiry Received</h3>
                <p className="text-sm text-white/70">
                  Thank you, {formData.name}. Our clinical reception at Suite 403, 307 Pitt Street will contact you shortly to confirm your consultation time.
                </p>
                <button
                  onClick={() => {
                    setShowEnquiryModal(false);
                    setSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2 bg-[#9B8A78] text-white text-xs uppercase tracking-wider rounded font-medium"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#9B8A78]">
                    Sydney Centre for TMJ &amp; Sleep Therapy
                  </span>
                  <h3 className="font-serif text-2xl text-white mt-1">
                    Book a Clinical Assessment
                  </h3>
                  <p className="text-xs text-white/60 mt-1">
                    Suite 403, 307 Pitt Street, Sydney NSW 2000
                  </p>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#242424] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#9B8A78]"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#242424] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#9B8A78]"
                      placeholder="0400 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#242424] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#9B8A78]"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                    Symptoms or Clinical Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#242424] border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#9B8A78]"
                    placeholder="Describe your jaw clicking, headaches, clenching, or sleep symptoms..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#FAF9F6] text-[#171717] hover:bg-[#9B8A78] hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Consultation Request</span>
                </button>

                <p className="text-[11px] text-white/40 text-center pt-1">
                  Prefer to call directly?{" "}
                  <a href="tel:0292649120" className="text-[#9B8A78] underline">
                    (02) 9264 9120
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
