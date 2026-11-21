import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "TMJ Headache Treatment | Speak to the Sydney TMJ Specialists",
  description:
    "Jaw pain, headaches and neck tension can occur together — but the cause is not always straightforward. Sydney Centre for TMJ & Sleep Therapy.",
  openGraph: {
    title: "TMJ Headache Treatment | Speak to the Sydney TMJ Specialists",
    description:
      "Jaw pain, headaches and neck tension can occur together — but the cause is not always straightforward. Sydney Centre for TMJ & Sleep Therapy.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#171717]">
        <SmoothScroll>
          <Header />
          <main className="flex-grow pt-[72px]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
