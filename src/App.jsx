import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Achievements from "./sections/Achievements/Achievements";
import Contact from "./sections/Contact/Contact";
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
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
