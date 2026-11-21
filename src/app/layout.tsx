import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TMJ Headache Treatment | Sydney Centre for TMJ & Sleep Therapy",
  description:
    "Treat TMJ headaches by consulting our TMJ Specialist who is a medical, dental and sleep trained doctor and dentist. Book an appointment to start your recovery today.",
  keywords: [
    "TMJ Sydney",
    "TMD headache treatment",
    "Temporomandibular joint pain",
    "bruxism",
    "teeth grinding",
    "Dr Manish Shah",
    "Sydney Sleep Therapy"
  ],
  authors: [{ name: "Sydney Centre for TMJ & Sleep Therapy" }],
  openGraph: {
    title: "TMJ Pain, TMD & Headaches in Sydney | Sydney TMJ Specialists",
    description:
      "Comprehensive assessment and evidence-based management of TMJ pain, headaches, clenching, and sleep-related breathing disorders.",
    url: "https://www.tmjandsleep.com.au/tmj-pain-headache/",
    siteName: "Sydney Centre for TMJ & Sleep Therapy",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#1A1A1A]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
