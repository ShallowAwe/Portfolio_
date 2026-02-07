import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

// --- Data Defined Outside ---
const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/ShallowAwe",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/Rudrankur_Indurkar",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:rudraindurkar670@gmail.com",
  },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Mouse move effect using MotionValues (no re-renders)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const x1 = useTransform(mouseX, (val) => val * 2);
  const y1_mouse = useTransform(mouseY, (val) => val * 2);
  const x2 = useTransform(mouseX, (val) => -val * 2);
  const y2_mouse = useTransform(mouseY, (val) => -val * 2);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden pb-20 pt-32"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* --- Animated Background Elements --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, var(--color-primary) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              opacity: 0.1,
            }}
          />
        </motion.div>

        {/* Top Left Orb */}
        <motion.div
          style={{
            x: x1,
            y: y1_mouse,
            background:
              "color-mix(in srgb, var(--color-primary), transparent 85%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 -left-20 w-96 h-96 rounded-full blur-[100px]"
        />

        {/* Bottom Right Orb */}
        <motion.div
          style={{
            x: x2,
            y: y2_mouse,
            background:
              "color-mix(in srgb, var(--color-accent), transparent 88%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full blur-[120px]"
        />
      </div>

      {/* --- Main Content --- */}
      <motion.div
        className="max-w-5xl mx-auto z-10 w-full relative"
        style={{ opacity, scale }}
      >
        <div className="space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <div
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface-glass)",
                boxShadow: "0 4px 20px -2px var(--color-shadow)",
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-500"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span style={{ color: "var(--color-text-secondary)" }}>
                Available for Freelance & Full-time
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div>
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Building digital
              </motion.span>
              <motion.span
                className="text-gradient block pb-2" // pb-2 fixes gradient clipping
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                experiences
              </motion.span>
              <motion.span
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                that matter.
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed px-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Hi, I'm{" "}
            <span
              className="font-semibold relative inline-block group cursor-pointer"
              style={{ color: "var(--color-primary)" }}
            >
              Rudrankur Indurkar
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
            </span>
            . A Full-Stack Developer creating scalable, human-centered
            applications with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto min-w-[180px] flex items-center justify-center gap-2"
            >
              View My Work
              <FaArrowRight size={14} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary w-full sm:w-auto min-w-[180px] flex items-center justify-center gap-2"
            >
              Contact Me
              <FaEnvelope size={14} />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
                aria-label={social.label}
              >
                <social.icon
                  size={20}
                  className="hover:text-[var(--color-primary)] transition-colors"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center gap-2"
        onClick={handleScrollToAbout}
      >
        <span
          className="text-xs uppercase tracking-widest font-medium"
          style={{ color: "var(--color-text-secondary)", opacity: 0.7 }}
        >
          Scroll
        </span>

        {/* Mouse Shape */}
        <div
          className="relative w-6 h-10 border-2 rounded-full flex justify-center p-1"
          style={{
            borderColor: "var(--color-text-secondary)",
            opacity: 0.6,
          }}
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--color-text-primary)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
