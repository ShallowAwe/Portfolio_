import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const education = {
    degree: "Bachelor of Engineering in Computer Science",
    university: "Dr. Babasaheb Ambedkar Marathwada University",
    location: "Aurangabad, MH",
    period: "May 2019 – Nov 2023",
    gpa: "7.97",
    maxGpa: "10.0",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Mobile Application Development",
    ],
  };

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
        style={{ backgroundColor: "rgba(245, 158, 11, 0.12)" }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              Academic Background
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              <span className="text-gradient">Education</span>
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

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="group relative p-8 md:p-12 rounded-3xl overflow-hidden transition-all duration-300"
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

          {/* Top Accent Corner */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none transition-opacity duration-500 opacity-30 group-hover:opacity-50"
            style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
          />

          {/* Decorative Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
            style={{ color: "var(--color-primary)" }}
          >
            <svg
              className="w-16 h-16 md:w-20 md:h-20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
            </svg>
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            {/* Degree Title */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-gradient transition-all duration-300"
              style={{ color: "var(--color-text-primary)" }}
            >
              {education.degree}
            </motion.h3>

            {/* University Details */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-1 mb-8"
            >
              <p
                className="text-lg font-medium flex items-center gap-2"
                style={{ color: "var(--color-primary)" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                {education.university}
              </p>
              <p
                className="flex items-center gap-2 pl-7"
                style={{ color: "var(--color-text-secondary)" }}
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {education.location}
              </p>
              <p
                className="text-sm uppercase tracking-wide font-medium flex items-center gap-2 pl-7"
                style={{ color: "var(--color-text-secondary)", opacity: 0.8 }}
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
                {education.period}
              </p>
            </motion.div>

            {/* GPA Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-baseline gap-2 mb-10 px-6 py-4 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: "rgba(245, 158, 11, 0.08)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-baseline gap-2">
                <svg
                  className="w-5 h-5 self-center"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-primary)" }}
                >
                  <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
                </svg>
                <span
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {education.gpa}
                </span>
                <span
                  className="text-lg"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  / {education.maxGpa}
                </span>
              </div>
              <span
                className="text-sm font-medium uppercase tracking-wider ml-1"
                style={{ color: "var(--color-primary)" }}
              >
                GPA
              </span>
            </motion.div>

            {/* Divider */}
            <div
              className="h-px mb-8"
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
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h4
                className="text-sm uppercase tracking-wider font-semibold mb-4 flex items-center gap-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <svg
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-3">
                {education.courses.map((course, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 cursor-default"
                    style={{
                      backgroundColor: "rgba(28, 20, 16, 0.5)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-secondary)",
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
            style={{ backgroundColor: "rgba(251, 191, 36, 0.1)" }}
          />
        </motion.div>

        {/* Optional Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Specialized in mobile and full-stack development with strong
            foundation in computer science fundamentals
          </p>
        </motion.div>
      </div>
    </section>
  );
}
