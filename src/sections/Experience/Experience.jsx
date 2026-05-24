import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

// --- Data Defined Outside Component ---
const EXPERIENCES = [
  {
    id: 1,
    role: "Full Stack Software Developer",
    company: "AltWise Pvt Ltd",
    location: "Pune, Maharashtra",
    period: "June 2025 – Present",
    isCurrent: true,
    achievements: [
      "Designed and developed scalable Spring Boot microservices and responsive React 18 + Redux Toolkit interfaces for a multi-tenant QMS SaaS platform used by enterprise laboratory clients.",
      "Built automated audit trails and real-time compliance alerts, reducing manual audit preparation effort by 50%+ for clients.",
      "Enforced JWT/OAuth 2.0 authentication and fine-grained RBAC to secure 16+ modules including CAPA, NCR, Document Control, and Risk Assessment.",
      "Executed an offline-first architecture using Dexie.js with automatic Cloudflare R2 synchronization, ensuring uninterrupted data entry in low-connectivity environments.",
      "Owned multiple features end-to-end — requirements, database design, implementation, testing, and CI/CD deployment.",
    ],
    techStack: [
      "Java 21",
      "Spring Boot",
      "React 18",
      "Redux Toolkit",
      "MSSQL",
      "Dexie.js",
      "Cloudflare R2",
    ],
  },
];

export default function Experience() {
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
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 88%)",
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-primary), transparent 90%)",
            color: "var(--color-primary)",
            border: "1px solid var(--color-border)",
          }}
        >
          Career Journey
        </span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
          style={{ color: "var(--color-text-primary)" }}
        >
          Professional <span className="text-gradient">Experience</span>
        </h2>
      </motion.div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
            className="group relative p-8 rounded-2xl transition-all duration-300 overflow-hidden"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 4px 20px -2px var(--color-shadow)", // Subtle shadow
            }}
          >
            {/* Hover Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 97%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 97%) 100%)",
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
              {/* Card Header: Role & Company */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div className="flex items-start gap-4">
                  {/* Icon Box */}
                  <div
                    className="p-3 rounded-xl mt-1 shrink-0"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-primary), transparent 90%)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <FaBriefcase size={20} />
                  </div>

                  <div>
                    <h3
                      className="text-xl md:text-2xl font-bold group-hover:text-gradient transition-all duration-300"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="font-medium text-lg flex items-center gap-2 mt-1"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Meta Info (Date & Location) */}
                <div className="flex flex-col items-start md:items-end gap-2 text-sm ml-14 md:ml-0">
                  <div
                    className="flex items-center gap-2 px-3 py-1 rounded-full border"
                    style={{
                      borderColor: exp.isCurrent
                        ? "var(--color-primary)"
                        : "var(--color-border)",
                      color: exp.isCurrent
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                      backgroundColor: exp.isCurrent
                        ? "color-mix(in srgb, var(--color-primary), transparent 95%)"
                        : "transparent",
                    }}
                  >
                    <FaCalendarAlt size={12} />
                    <span className="font-semibold">{exp.period}</span>
                    {exp.isCurrent && (
                      <span className="relative flex h-2 w-2 ml-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                      </span>
                    )}
                  </div>
                  <div
                    className="flex items-center gap-2 px-2"
                    style={{
                      color: "var(--color-text-secondary)",
                      opacity: 0.8,
                    }}
                  >
                    <FaMapMarkerAlt size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px mb-6 w-full"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-border), transparent)",
                }}
              />

              {/* Achievements List */}
              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start group/item"
                  >
                    <span
                      className="mr-3 mt-1.5 shrink-0 transition-all duration-300 group-hover/item:text-(--color-primary)"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <FaArrowRight size={10} />
                    </span>
                    <span
                      className="leading-relaxed text-sm md:text-base group-hover/item:translate-x-1 transition-transform duration-300"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-lg border transition-colors hover:border-(--color-primary)"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg opacity-70 hover:opacity-100 transition-opacity"
          style={{ backgroundColor: "var(--color-surface-glass)" }}
        >
          <FaLaptopCode style={{ color: "var(--color-primary)" }} />
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Open to new opportunities
          </p>
        </div>
      </motion.div>
    </section>
  );
}
