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

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-textPrimary font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
