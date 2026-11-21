import React from "react";
import Hero from "@/components/Hero";
import AnatomySection from "@/components/AnatomySection";
import ContributingFactors from "@/components/ContributingFactors";
import SignsGrid from "@/components/SignsGrid";
import NeckPostureSection from "@/components/NeckPostureSection";
import BruxismHeadacheSection from "@/components/BruxismHeadacheSection";
import DifferentialDiagnosis from "@/components/DifferentialDiagnosis";
import AssessmentProcess from "@/components/AssessmentProcess";
import ManagementFramework from "@/components/ManagementFramework";
import ProgressTimeline from "@/components/ProgressTimeline";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";

export default function TMJPainPage() {
  return (
    <div id="tmj-headaches" className="flex flex-col min-h-screen">
      {/* 01. Hero Banner */}
      <Hero />

      {/* 02. The Basics — What is the TMJ */}
      <AnatomySection />

      {/* 03. Understanding Your Symptoms — Macro vs Micro trauma */}
      <ContributingFactors />

      {/* 04. 9 Signs Associated with Clenching or Grinding */}
      <SignsGrid />

      {/* 05. The Neck, Shoulders & Jaw (Dark Section) */}
      <NeckPostureSection />

      {/* 06. Bruxism & Headaches (65% & 3x force statistics) */}
      <BruxismHeadacheSection />

      {/* 07. Rule Out Other Causes & Is Stress Related */}
      <DifferentialDiagnosis />

      {/* 08. Our Process — How We Assess TMJ Pain (4-step pathway) */}
      <AssessmentProcess />

      {/* 09. Our Integrated Approach — How We Manage TMJ Pain (Dark Section) */}
      <ManagementFramework />

      {/* 10 & 11. Monitoring Progress & Maximal Medical Improvement */}
      <ProgressTimeline />

      {/* 12. Frequently Asked Questions (Dark Section matching Spa Dental screenshot) */}
      <FAQSection />

      {/* 13. Take the First Step & Booking Experience (Dark Section) */}
      <BookingSection />
    </div>
  );
}
