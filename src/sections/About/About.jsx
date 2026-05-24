import React, { useState } from "react";
import { motion } from "framer-motion";
// Importing icons makes the code much cleaner
import {
  FaCode,
  FaShieldAlt,
  FaRocket,
  FaBriefcase,
  FaCheckCircle,
  FaLayerGroup,
} from "react-icons/fa";
import profileImage from "../../assets/profile.png";

// Optimization: Static data defined outside
const STATS = [
  {
    label: "Years Experience",
    value: "1+",
    icon: FaBriefcase,
  },
  {
    label: "Projects Completed",
    value: "10+",
    icon: FaCheckCircle,
  },
  {
    label: "Technologies",
    value: "15+",
    icon: FaLayerGroup,
  },
];

const HIGHLIGHTS = [
  {
    icon: FaRocket,
    title: "End-to-End Ownership",
    description:
      "Requirements, schema design, implementation, testing, and CI/CD — shipped as a single owner.",
  },
  {
    icon: FaShieldAlt,
    title: "Security-First",
    description:
      "JWT, OAuth 2.0, refresh-token rotation, and fine-grained RBAC across multi-tenant SaaS.",
  },
  {
    icon: FaCode,
    title: "Offline-First Architecture",
    description:
      "Resilient client-side caching with Dexie.js and automatic cloud synchronization.",
  },
];

export default function About() {
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section
      id="about"
      className="section-container relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs (Dynamic Color) */}
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
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 85%)",
        }}
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
        style={{
          background:
            "color-mix(in srgb, var(--color-accent), transparent 88%)",
        }}
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
                backgroundColor:
                  "color-mix(in srgb, var(--color-primary), transparent 90%)",
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
                "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 96%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 96%) 100%)",
            }}
          />

          <div className="relative z-10">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden relative shadow-xl"
              style={{
                border: "4px solid var(--color-surface)",
                boxShadow: "0 0 20px var(--color-shadow)",
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6 mb-12 text-center max-w-3xl mx-auto"
            >
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                I'm a{" "}
                <span
                  style={{ color: "var(--color-primary)", fontWeight: 600 }}
                >
                  Full-Stack Developer
                </span>{" "}
                with 1+ year of professional experience building secure,
                scalable applications. I work across{" "}
                <span
                  style={{ color: "var(--color-primary)", fontWeight: 600 }}
                >
                  Java / Spring Boot
                </span>{" "}
                on the backend and{" "}
                <span
                  style={{ color: "var(--color-primary)", fontWeight: 600 }}
                >
                  React 18 + Redux Toolkit
                </span>{" "}
                on the frontend.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Strong foundation in authentication and authorization (JWT,
                OAuth 2.0, RBAC), microservices, RESTful API design, and
                offline-first synchronization. Looking for startup or enterprise
                roles with end-to-end product ownership.
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
              {HIGHLIGHTS.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group/highlight p-6 rounded-xl transition-all duration-300 text-center md:text-left"
                  style={{
                    backgroundColor: "var(--color-surface-glass)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 inline-block p-3 rounded-lg"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-primary), transparent 90%)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <highlight.icon size={24} />
                  </motion.div>
                  <h4
                    className="font-bold mb-2 text-lg"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {highlight.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--color-text-secondary)",
                      opacity: 0.9,
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
          {STATS.map((stat, index) => (
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
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 95%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 95%) 100%)",
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
                  backgroundColor:
                    "color-mix(in srgb, var(--color-primary), transparent 90%)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-primary)",
                }}
              >
                <stat.icon size={28} />
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
              className="btn-primary flex items-center justify-center gap-2"
            >
              View Projects
              <FaRocket />
            </motion.a>
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Explore Skills
              <FaCode />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
