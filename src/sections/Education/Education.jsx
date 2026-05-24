import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

// --- Data Defined Outside Component ---
const EDUCATION_DATA = [
  {
    id: 1,
    degree: "B.E. in Computer Science & Engineering",
    university: "Dr. Babasaheb Ambedkar Marathwada University (BAMU)",
    location: "Aurangabad, MH",
    period: "2019 – 2023",
    gpa: "7.9",
    maxGpa: "10.0",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Mobile Application Development",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 88%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              Academic Background
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              My <span className="text-gradient">Education</span>
            </h2>
          </motion.div>

          {/* Decorative Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 w-20 rounded-full mx-auto md:mx-0 origin-left"
            style={{
              background:
                "linear-gradient(to right, var(--color-primary), var(--color-accent))",
            }}
          />
        </div>

        {/* Education Cards Mapping */}
        <div className="space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 md:p-10 rounded-3xl overflow-hidden transition-all duration-300"
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
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 96%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 96%) 100%)",
                }}
              />

              {/* Decorative Background Icon */}
              <div
                className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform rotate-12"
                style={{ color: "var(--color-primary)" }}
              >
                <FaGraduationCap size={150} />
              </div>

              {/* Content Container */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  {/* Left Side: Title & Info */}
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="p-3 rounded-xl"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--color-primary), transparent 90%)",
                          color: "var(--color-primary)",
                        }}
                      >
                        <FaGraduationCap size={24} />
                      </div>
                      <h3
                        className="text-2xl font-bold group-hover:text-gradient transition-all duration-300"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {edu.degree}
                      </h3>
                    </motion.div>

                    <div
                      className="space-y-2 pl-2 border-l-2"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <div
                        className="flex items-center gap-2 pl-4"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <FaUniversity className="text-(--color-primary)" />
                        <span className="font-medium">{edu.university}</span>
                      </div>
                      <div
                        className="flex items-center gap-2 pl-4 text-sm"
                        style={{
                          color: "var(--color-text-secondary)",
                          opacity: 0.8,
                        }}
                      >
                        <FaMapMarkerAlt />
                        <span>{edu.location}</span>
                        <span className="mx-2">•</span>
                        <FaCalendarAlt />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: GPA Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="shrink-0"
                  >
                    <div
                      className="inline-flex flex-col items-center justify-center p-4 rounded-2xl min-w-[120px]"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-primary), transparent 92%)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <FaAward
                        size={24}
                        style={{ color: "var(--color-primary)" }}
                        className="mb-2"
                      />
                      <div className="flex items-baseline gap-1">
                        <span
                          className="text-3xl font-bold"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {edu.gpa}
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          / {edu.maxGpa}
                        </span>
                      </div>
                      <span
                        className="text-xs font-bold tracking-wider uppercase"
                        style={{ color: "var(--color-primary)" }}
                      >
                        CGPA
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-6 w-full"
                  style={{
                    background:
                      "linear-gradient(to right, var(--color-border), transparent)",
                  }}
                />

                {/* Coursework Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <h4
                    className="text-sm uppercase tracking-wider font-semibold mb-4 flex items-center gap-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <FaBookOpen style={{ color: "var(--color-primary)" }} />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.courses.map((course, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 cursor-default"
                        style={{
                          backgroundColor: "var(--color-surface)", // Clean surface color
                          border: "1px solid var(--color-border)",
                          color: "var(--color-text-secondary)",
                          boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                        }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bottom Corner Accent */}
              <div
                className="absolute bottom-0 left-0 w-32 h-32 rounded-tr-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-primary), transparent 90%)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p
            className="text-sm max-w-2xl mx-auto italic"
            style={{ color: "var(--color-text-secondary)", opacity: 0.7 }}
          >
            "Education is not the filling of a pail, but the lighting of a
            fire."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
