import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Mobile Application",
      tech: ["Flutter", "Firebase", "Razorpay"],
      description:
        "Cross-platform shopping app featuring secure payment integration, offline-first architecture with Hive caching, and a comprehensive product catalog serving 1000+ items. Achieved 99.8% transaction success rate and 45% faster startup time through optimized state management.",
      metrics: { users: "500+", success: "99.8%", improvement: "45%" },
      links: {
        github: "https://github.com/ShallowAwe",
      },
    },
    {
      title: "Full-Stack Expense Tracker",
      tech: ["Spring Boot", "MongoDB", "OAuth2"],
      description:
        "Comprehensive expense management system with OAuth2 authentication, real-time synchronization, and interactive analytics dashboard. Engineered to handle 10,000+ transaction records with sub-second query response times.",
      metrics: { records: "10K+", response: "<1s", sync: "Real-time" },
      links: {
        github: "https://github.com/ShallowAwe",
      },
    },
  ];

  return (
    <section
      id="projects"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(251, 191, 36, 0.12)" }}
        aria-hidden="true"
      />

      {/* Header Section */}
      <div className="mb-16">
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
            Portfolio Showcase
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl text-lg leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Production-ready applications demonstrating full-stack development
          expertise.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 relative"
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

            {/* Top Accent Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(to right, var(--color-primary), var(--color-accent))",
              }}
            />

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow relative z-10">
              {/* Title Section */}
              <div className="flex justify-between items-start mb-4">
                <h3
                  className="text-2xl font-bold group-hover:text-gradient transition-all duration-300 flex-1"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {project.title}
                </h3>

                {/* Project Icon */}
                <motion.div
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                  style={{ color: "var(--color-primary)" }}
                >
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-xs font-medium px-3 py-1 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(245, 158, 11, 0.1)",
                      color: "var(--color-primary)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Description */}
              <p
                className="leading-relaxed mb-8 flex-grow"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {project.description}
              </p>

              {/* Metrics Section */}
              <div
                className="grid grid-cols-3 gap-4 mb-8 pt-6"
                style={{
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                {Object.entries(project.metrics).map(([key, value], i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-center group/metric"
                  >
                    <div
                      className="text-xl md:text-2xl font-bold mb-1 group-hover/metric:text-gradient transition-all duration-300"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {value}
                    </div>
                    <div
                      className="text-xs uppercase tracking-wider"
                      style={{
                        color: "var(--color-text-secondary)",
                        opacity: 0.7,
                      }}
                    >
                      {key}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-auto">
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 text-center text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "var(--color-text-primary)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Code
                </motion.a>

                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 text-center text-sm font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                    }}
                  >
                    Live Demo
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Bottom Corner Glow */}
            <div
              className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: "rgba(251, 191, 36, 0.1)" }}
            />
          </motion.article>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="mb-4" style={{ color: "var(--color-text-secondary)" }}>
          Want to see more of my work?
        </p>
        <a
          href="https://github.com/ShallowAwe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "white",
          }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          Visit My GitHub
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
        </a>
      </motion.div>
    </section>
  );
}
