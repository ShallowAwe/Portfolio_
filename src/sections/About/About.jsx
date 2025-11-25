import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function About() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      label: "Years Experience",
      value: "2+",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      label: "Projects Completed",
      value: "10+",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      label: "Technologies",
      value: "15+",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
  ];

  const highlights = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Performance First",
      description:
        "Building lightning-fast applications with optimized code and best practices",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mobile Expertise",
      description:
        "Specializing in cross-platform Flutter apps with native performance",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "Clean Design",
      description:
        "Creating intuitive user interfaces that users love to interact with",
    },
  ];

  return (
    <section
      id="about"
      className="section-container relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(251, 191, 36, 0.12)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.1)",
                color: "var(--color-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              Getting to Know Me
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              About <span className="text-gradient">Me</span>
            </h2>
          </motion.div>
        </div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="group relative p-8 md:p-12 rounded-3xl mb-12 overflow-hidden"
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          {/* Hover Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(245, 158, 11, 0.04) 0%, transparent 50%, rgba(251, 191, 36, 0.04) 100%)",
            }}
          />

          {/* Decorative Corner Element */}
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-bl-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            style={{ backgroundColor: "rgba(245, 158, 11, 0.3)" }}
          />

          <div className="relative z-10">
            {/* Profile Image Placeholder - You can add your photo here */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 rounded-2xl overflow-hidden relative"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.1)",
                border: "2px solid var(--color-border)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-primary)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 mb-8"
            >
              <p
                className="text-lg leading-relaxed text-center md:text-left"
                style={{ color: "var(--color-text-secondary)" }}
              >
                I'm a passionate{" "}
                <span
                  style={{ color: "var(--color-primary)", fontWeight: 600 }}
                >
                  Full-Stack Developer
                </span>{" "}
                with expertise in building scalable mobile and web applications.
                My journey in software development has been driven by a love for
                creating elegant solutions to complex problems.
              </p>
              <p
                className="text-lg leading-relaxed text-center md:text-left"
                style={{ color: "var(--color-text-secondary)" }}
              >
                I specialize in{" "}
                <span
                  style={{ color: "var(--color-primary)", fontWeight: 600 }}
                >
                  Flutter
                </span>
                ,{" "}
                <span
                  style={{ color: "var(--color-primary)", fontWeight: 600 }}
                >
                  Spring Boot
                </span>
                , and modern web technologies, with a strong focus on
                performance optimization and user experience. I'm always eager
                to learn new technologies and tackle challenging projects.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group/highlight p-4 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(28, 20, 16, 0.5)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {highlight.icon}
                  </motion.div>
                  <h4
                    className="font-semibold mb-2 text-sm"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {highlight.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "var(--color-text-secondary)",
                      opacity: 0.8,
                    }}
                  >
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              className="group/stat relative p-8 rounded-2xl text-center transition-all duration-300 overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Hover Gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, transparent 50%, rgba(251, 191, 36, 0.05) 100%)",
                }}
              />

              {/* Icon */}
              <motion.div
                animate={{
                  rotate: hoveredStat === index ? 360 : 0,
                  scale: hoveredStat === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "rgba(245, 158, 11, 0.1)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-primary)",
                }}
              >
                {stat.icon}
              </motion.div>

              {/* Value */}
              <motion.div
                className="relative z-10"
                animate={{
                  scale: hoveredStat === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl font-bold text-gradient mb-3 relative">
                  {stat.value}
                  <motion.span
                    className="absolute -inset-4 rounded-lg opacity-0 blur-xl"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                    }}
                    animate={{
                      opacity: hoveredStat === index ? 0.2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {stat.label}
                </div>
              </motion.div>

              {/* Bottom Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                  scaleX: 0,
                }}
                animate={{
                  scaleX: hoveredStat === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p
            className="mb-6 text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Want to know more about my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              View Projects
              <svg
                className="w-4 h-4"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.a>
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "var(--color-text-primary)",
                border: "1px solid var(--color-border)",
              }}
            >
              Explore Skills
              <svg
                className="w-4 h-4"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
