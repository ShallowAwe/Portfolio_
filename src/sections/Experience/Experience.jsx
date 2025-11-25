import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Flutter / Java Developer",
      company: "Altwise — Pune, Maharashtra",
      period: "June 2024 – Present",
      achievements: [
        "Developed 3 cross-platform mobile apps for 500+ active users with seamless Android & iOS compatibility.",
        "Engineered responsive UI components and micro-animations, achieving 40% faster load times.",
        "Implemented Riverpod-based state management, improving performance by 35% and reducing code complexity.",
        "Integrated Firebase real-time services and RESTful APIs, cutting sync latency by 60%.",
        "Led daily code reviews maintaining 95% code-quality standards and zero missed deadlines.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="section-container relative z-10"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(245, 158, 11, 0.12)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        style={{ color: "var(--color-text-primary)" }}
      >
        Professional <span className="text-gradient">Experience</span>
      </motion.h2>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="group relative p-8 rounded-2xl transition-all duration-300 overflow-hidden"
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
                  "linear-gradient(135deg, rgba(245, 158, 11, 0.03) 0%, transparent 50%, rgba(251, 191, 36, 0.03) 100%)",
              }}
            />

            {/* Top Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--color-primary), transparent)",
              }}
            />

            {/* Content Container */}
            <div className="relative z-10">
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-3">
                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="font-medium text-lg"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {exp.company}
                  </p>
                </div>

                {/* Period Badge */}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-sm font-medium px-4 py-2 rounded-full inline-flex items-center gap-2 whitespace-nowrap"
                  style={{
                    color: "var(--color-primary)",
                    backgroundColor: "rgba(245, 158, 11, 0.08)",
                    border: "1px solid var(--color-border)",
                  }}
                >
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {exp.period}
                </motion.span>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-6"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-border), transparent)",
                }}
              />

              {/* Achievements List */}
              <ul className="space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start group/item"
                  >
                    {/* Custom Bullet */}
                    <span
                      className="mr-4 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/item:scale-125"
                      style={{ color: "var(--color-primary)" }}
                    >
                      <svg
                        className="w-2 h-2"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </span>

                    {/* Achievement Text */}
                    <span
                      className="leading-relaxed group-hover/item:translate-x-1 transition-transform duration-300"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bottom Right Corner Accent */}
            <div
              className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: "rgba(251, 191, 36, 0.08)" }}
            />
          </motion.div>
        ))}
      </div>

      {/* Add More Experiences CTA (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
          More experience details available upon request
        </p>
      </motion.div>
    </section>
  );
}
