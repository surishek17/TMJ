import React from "react";
import Hero from "@/components/Hero";
import AnatomySection from "@/components/AnatomySection";
import ContributingFactors from "@/components/ContributingFactors";
import SignsGrid from "@/components/SignsGrid";
import NeckPostureSection from "@/components/NeckPostureSection";
import BruxismHeadacheSection from "@/components/BruxismHeadacheSection";
import DifferentialDiagnosis from "@/components/DifferentialDiagnosis";
import StressPainSection from "@/components/StressPainSection";
import AssessmentProcess from "@/components/AssessmentProcess";
import ManagementFramework from "@/components/ManagementFramework";
import ProgressTimeline from "@/components/ProgressTimeline";
import SymptomChecker from "@/components/SymptomChecker";
import BookingSection from "@/components/BookingSection";

export default function TMJPainPage() {
  return (
    <div id="tmj-headaches" className="flex flex-col min-h-screen">
      {/* Hero section */}
      <Hero />

      {/* TMJ Anatomy & Basics */}
      <AnatomySection />

      {/* What contributes: Macro vs Micro trauma & self-reflection */}
      <ContributingFactors />

      {/* 9 Clinical Signs of Clenching/Grinding */}
      <SignsGrid />

      {/* Neck, Shoulder & Forward Head Posture Mechanics */}
      <NeckPostureSection />

      {/* Bruxism & Headaches (65% & 3x force statistics) */}
      <BruxismHeadacheSection />

      {/* Differential Diagnosis (Rule out other causes) */}
      <DifferentialDiagnosis />

      {/* Stress, clenching & persistent pain neurobiology */}
      <StressPainSection />

      {/* 4-Step Assessment Pathway */}
      <AssessmentProcess />

      {/* 3 Pillars of Management */}
      <ManagementFramework />

      {/* Monitoring Progress & Maximal Medical Improvement */}
      <ProgressTimeline />

      {/* Interactive Symptom Screener Tool */}
      <SymptomChecker />

      {/* Booking with Dr Manish Shah & Contact Form */}
      <BookingSection />
    </div>
  );
}
