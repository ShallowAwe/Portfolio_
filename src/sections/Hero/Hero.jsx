import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Mouse move effect for subtle interactivity
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden pb-32"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at center, var(--color-primary) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              opacity: 0.15,
            }}
          />
        </motion.div>

        {/* Ambient Orbs with Parallax */}
        <motion.div
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
            backgroundColor: "rgba(245, 158, 11, 0.2)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: -mousePosition.x,
            y: -mousePosition.y,
            backgroundColor: "rgba(251, 191, 36, 0.18)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: "var(--color-primary)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="max-w-5xl mx-auto z-10 w-full"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.span
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-300 cursor-default group"
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "rgba(28, 20, 16, 0.5)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: "#10b981" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: "#10b981" }}
                />
              </span>
              <span
                className="transition-colors"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Available for Hire
              </span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ color: "var(--color-primary)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </motion.span>
          </motion.div>

          {/* Main Heading with Character Animation */}
          <div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]"
              style={{ color: "var(--color-text-primary)" }}
            >
              <motion.span
                className="block mb-2 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Building digital
              </motion.span>
              <motion.span
                className="text-gradient block relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                experiences
                <motion.span
                  className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                    filter: "blur(20px)",
                  }}
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.span>
              <motion.span
                className="block mt-2 md:mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                that matter.
              </motion.span>
            </motion.h1>
          </div>

          {/* Description with Typing Effect */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            I'm{" "}
            <motion.span
              className="font-medium relative"
              whileHover={{
                color: "var(--color-primary)",
              }}
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              Rudrankur Indurkar
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 0.6 }}
              />
            </motion.span>
            , a Full-Stack Developer specializing in building exceptional
            digital experiences. Currently focused on accessible, human-centered
            products.
          </motion.p>

          {/* CTA Buttons with Enhanced Interaction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto min-w-[180px] text-center px-8 py-4 font-medium rounded-lg transition-all duration-300 relative overflow-hidden group"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center justify-center gap-2">
                View My Work
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto min-w-[180px] text-center px-8 py-4 font-medium rounded-lg transition-all duration-300 relative group"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "var(--color-text-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              <span className="relative flex items-center justify-center gap-2">
                Contact Me
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-primary)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </motion.svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex items-center justify-center gap-6 pt-4"
          >
            {[
              {
                icon: "github",
                label: "GitHub",
                href: "https://github.com/ShallowAwe",
              },
              { icon: "linkedin", label: "LinkedIn", href: "#" },
              { icon: "mail", label: "Email", href: "#contact" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="p-3 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
                aria-label={social.label}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {social.icon === "github" && (
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  )}
                  {social.icon === "linkedin" && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  )}
                  {social.icon === "mail" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      fill="none"
                      stroke="currentColor"
                    />
                  )}
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer group z-20"
        onClick={handleScrollToAbout}
        role="button"
        aria-label="Scroll to about section"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleScrollToAbout();
          }
        }}
      >
        {/* Outer glow effect */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full blur-xl"
          style={{ backgroundColor: "rgba(245, 158, 11, 0.3)" }}
          aria-hidden="true"
        />

        {/* Mouse shape */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative w-7 h-11 border-2 rounded-full flex justify-center items-start p-1.5 backdrop-blur-sm transition-all duration-300"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "rgba(15, 10, 5, 0.5)",
          }}
        >
          {/* Animated scroll dot */}
          <motion.div
            animate={{
              y: [0, 14, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full shadow-lg"
            style={{
              backgroundColor: "var(--color-primary)",
              boxShadow: "0 0 10px rgba(245, 158, 11, 0.5)",
            }}
          />
        </motion.div>

        {/* Text hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap transition-colors duration-300 pointer-events-none"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Scroll to explore
        </motion.p>

        {/* Chevron indicator */}
        <motion.div
          animate={{
            y: [0, 6, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute -bottom-5 left-1/2 transform -translate-x-1/2"
          style={{ color: "var(--color-primary)" }}
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 14l-7 7m0 0l-7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
