import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/Hero";
const About = lazy(() => import("./sections/About/About"));
const Skills = lazy(() => import("./sections/Skills/Skills"));
const Experience = lazy(() => import("./sections/Experience/Experience"));
const Projects = lazy(() => import("./sections/Projects/Projects"));
const Education = lazy(() => import("./sections/Education/Education"));
const Achievements = lazy(() => import("./sections/Achievements/Achievements"));
const Contact = lazy(() => import("./sections/Contact/Contact"));
import Footer from "./components/Footer";

const sectionFallback = <div style={{ minHeight: "60vh" }} />;

export default function App() {
  return (
    <div
      className="relative min-h-screen font-sans overflow-x-hidden"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text-primary)",
      }}
    >
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]"
          style={{
            background:
              "color-mix(in srgb, var(--color-primary), transparent 90%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]"
          style={{
            background:
              "color-mix(in srgb, var(--color-accent), transparent 90%)",
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <Suspense fallback={sectionFallback}><About /></Suspense>
        <Suspense fallback={sectionFallback}><Skills /></Suspense>
        <Suspense fallback={sectionFallback}><Experience /></Suspense>
        <Suspense fallback={sectionFallback}><Projects /></Suspense>
        <Suspense fallback={sectionFallback}><Education /></Suspense>
        <Suspense fallback={sectionFallback}><Achievements /></Suspense>
        <Suspense fallback={sectionFallback}><Contact /></Suspense>
      </main>

      <Footer />
    </div>
  );
}
