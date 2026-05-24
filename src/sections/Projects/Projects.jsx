import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaServer,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

// --- Data Defined Outside ---
const PROJECTS = [
  {
    id: 1,
    title: "QMS Web — Quality Management System",
    category: "Production · Full-Stack",
    icon: FaServer,
    tech: ["React 18", "Spring Boot", "MSSQL", "Cloudflare R2", "Dexie.js"],
    description:
      "Full-stack ISO 15189-compliant Quality Management platform spanning 16 modules — CAPA, Non-Conformance, Document Library, Risk Matrix, Audits, Vendor Qualification. Fine-grained RBAC via a custom usePermissions hook with field-level UI visibility. Secure document storage and versioning through Cloudflare Workers + R2 with UUID-based file management, plus offline-first architecture using Dexie.js with automatic cloud synchronization.",
    metrics: [
      { label: "Modules", value: "16+" },
      { label: "Audit Effort", value: "-50%" },
      { label: "Status", value: "Live" },
    ],
    links: {
      github: "https://github.com/ShallowAwe",
      live: null,
    },
  },
  {
    id: 2,
    title: "Session-Based Issue Tracker",
    category: "Personal · Backend",
    icon: FaShieldAlt,
    tech: ["Spring Boot", "PostgreSQL", "JWT", "Flyway"],
    description:
      "Secure team-collaboration and issue-tracking backend built with Spring Boot and PostgreSQL. Implements JWT authentication with refresh-token rotation and automatic token-family revocation on reuse detection. Hierarchical RBAC, normalized relational schemas, soft deletes, and audit logging across 8 database tables.",
    metrics: [
      { label: "DB Tables", value: "8" },
      { label: "Auth", value: "JWT" },
      { label: "RBAC", value: "Hierarchical" },
    ],
    links: {
      github: "https://github.com/ShallowAwe",
      live: null,
    },
  },
];

export default function Projects() {
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
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 85%)",
        }}
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
        style={{
          background:
            "color-mix(in srgb, var(--color-accent), transparent 88%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
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
              backgroundColor:
                "color-mix(in srgb, var(--color-primary), transparent 90%)",
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
          Production-ready applications demonstrating end-to-end full-stack
          ownership — from secure backends to responsive React interfaces.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            whileHover={{ y: -10 }}
            className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 relative"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 4px 20px -2px var(--color-shadow)",
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
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold group-hover:text-gradient transition-all duration-300"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Project Icon Background */}
                <div
                  className="p-3 rounded-xl transform transition-transform duration-500 group-hover:rotate-12"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-primary), transparent 90%)",
                    color: "var(--color-primary)",
                  }}
                >
                  <project.icon size={24} />
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 border"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p
                className="leading-relaxed mb-8 flex-grow text-sm md:text-base"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {project.description}
              </p>

              {/* Metrics Grid */}
              <div
                className="grid grid-cols-3 gap-4 mb-8 pt-6 relative"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-center group/metric">
                    <div
                      className="text-lg md:text-xl font-bold mb-1 group-hover/metric:text-gradient transition-all duration-300"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {metric.value}
                    </div>
                    <div
                      className="text-[10px] md:text-xs uppercase tracking-wider font-medium"
                      style={{
                        color: "var(--color-text-secondary)",
                        opacity: 0.8,
                      }}
                    >
                      {metric.label}
                    </div>
                  </div>
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
                  className="flex-1 text-center text-sm font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  style={{
                    backgroundColor: "var(--color-surface-accent)",
                    color: "var(--color-text-primary)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <FaGithub size={16} />
                  <span>Code</span>
                </motion.a>

                {project.links.live && (
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 text-center text-sm font-medium px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                      boxShadow: "0 4px 15px -3px var(--color-shadow)",
                    }}
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={12} />
                  </motion.a>
                )}
              </div>
            </div>
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
        <p
          className="mb-4 text-sm"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Curious about the code?
        </p>
        <a
          href="https://github.com/ShallowAwe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "var(--color-surface-glass)",
            color: "var(--color-primary)",
            border: "1px solid var(--color-primary)",
          }}
        >
          <FaCode size={16} />
          <span>View More on GitHub</span>
          <FaArrowRight size={12} />
        </a>
      </motion.div>
      </div>
    </section>
  );
}
