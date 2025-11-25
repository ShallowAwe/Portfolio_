import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaStripe,
  FaLayerGroup,
  FaCubes,
} from "react-icons/fa";
import {
  SiDart,
  SiJavascript,
  SiFlutter,
  SiAndroid,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiAuth0,
  SiPostman,
  SiRazorpay,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdDevices, MdSync } from "react-icons/md";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      title: "Programming Languages",
      description: "Core languages I use for development",
      items: [
        { name: "Java", icon: <FaJava />, level: 90 },
        { name: "Dart", icon: <SiDart />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript />, level: 80 },
        { name: "SQL", icon: <FaDatabase />, level: 75 },
      ],
    },
    {
      title: "Mobile & Frontend",
      description: "Building beautiful user interfaces",
      items: [
        { name: "Flutter", icon: <SiFlutter />, level: 90 },
        { name: "Android SDK", icon: <SiAndroid />, level: 85 },
        { name: "RESTful APIs", icon: <TbApi />, level: 88 },
        { name: "Responsive UI/UX", icon: <MdDevices />, level: 85 },
      ],
    },
    {
      title: "Backend & Database",
      description: "Server-side development expertise",
      items: [
        { name: "Spring Boot", icon: <SiSpringboot />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        { name: "MySQL", icon: <SiMysql />, level: 82 },
        { name: "Firebase", icon: <SiFirebase />, level: 88 },
        { name: "OAuth2", icon: <SiAuth0 />, level: 75 },
      ],
    },
    {
      title: "State Management & Tools",
      description: "Development tools and workflows",
      items: [
        { name: "Riverpod", icon: <FaLayerGroup />, level: 85 },
        { name: "Provider", icon: <FaCubes />, level: 80 },
        { name: "Git", icon: <FaGitAlt />, level: 90 },
        { name: "Docker", icon: <FaDocker />, level: 75 },
        { name: "Postman", icon: <SiPostman />, level: 85 },
        { name: "Hive", icon: <FaDatabase />, level: 78 },
      ],
    },
    {
      title: "Payment & Integration",
      description: "Third-party services and APIs",
      items: [
        { name: "Razorpay", icon: <SiRazorpay />, level: 80 },
        { name: "Stripe", icon: <FaStripe />, level: 75 },
        { name: "Firebase Services", icon: <SiFirebase />, level: 85 },
        { name: "Realtime Sync", icon: <MdSync />, level: 82 },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <section
      id="skills"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Animated Background Gradients - Amber Theme */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(251, 191, 36, 0.12)" }}
        aria-hidden="true"
      />

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
            What I Bring to the Table
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            A comprehensive skill set built through hands-on experience and
            continuous learning
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {categories.map((cat, index) => (
          <motion.div key={index} variants={item} className="relative group">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-6 rounded-2xl transition-all duration-300 cursor-pointer h-full relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
              onClick={() =>
                setSelectedCategory(selectedCategory === index ? null : index)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedCategory(
                    selectedCategory === index ? null : index
                  );
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={selectedCategory === index}
              aria-label={`${cat.title} - Click to ${
                selectedCategory === index ? "collapse" : "expand"
              } skills`}
            >
              {/* Hover Gradient Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, transparent 50%, rgba(251, 191, 36, 0.05) 100%)",
                }}
              />

              {/* Corner Accent */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Header with Number Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span
                      className="inline-block px-2 py-0.5 mb-2 text-xs font-bold rounded"
                      style={{
                        color: "var(--color-primary)",
                        backgroundColor: "rgba(245, 158, 11, 0.1)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-xl font-bold transition-colors"
                      style={{
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>
                  {/* Expand Icon */}
                  <motion.div
                    animate={{
                      rotate: selectedCategory === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="transition-colors"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 9l-7 7-7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {cat.description}
                </p>

                {/* Skill Count Badge */}
                <div
                  className="flex items-center gap-2 mb-4 text-xs"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{cat.items.length} Skills</span>
                </div>

                {/* Skills Preview (collapsed state) */}
                <AnimatePresence mode="wait">
                  {selectedCategory !== index ? (
                    <motion.div
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-wrap gap-2"
                    >
                      {cat.items.slice(0, 4).map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg flex items-center gap-2 transition-all"
                          style={{
                            color: "var(--color-text-primary)",
                            backgroundColor: "rgba(28, 20, 16, 0.5)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          <span
                            className="text-base"
                            style={{ color: "var(--color-primary)" }}
                          >
                            {skill.icon}
                          </span>
                          {skill.name}
                        </span>
                      ))}
                      {cat.items.length > 4 && (
                        <span
                          className="px-3 py-1.5 text-sm font-medium rounded-lg"
                          style={{
                            color: "var(--color-text-secondary)",
                            backgroundColor: "rgba(28, 20, 16, 0.3)",
                            border: "1px solid rgba(245, 158, 11, 0.1)",
                          }}
                        >
                          +{cat.items.length - 4} more
                        </span>
                      )}
                    </motion.div>
                  ) : (
                    // Expanded state with proficiency bars
                    <motion.div
                      key="expanded"
                      variants={container}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="space-y-3 mt-2"
                    >
                      {cat.items.map((skill, i) => (
                        <motion.div
                          key={i}
                          variants={skillItem}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span
                                className="text-lg group-hover/skill:scale-110 transition-transform"
                                style={{ color: "var(--color-primary)" }}
                              >
                                {skill.icon}
                              </span>
                              <span
                                className="text-sm font-medium"
                                style={{ color: "var(--color-text-primary)" }}
                              >
                                {skill.name}
                              </span>
                            </div>
                            <span
                              className="text-xs"
                              style={{ color: "var(--color-text-secondary)" }}
                            >
                              {skill.level}%
                            </span>
                          </div>
                          {/* Proficiency Bar */}
                          <div
                            className="h-1.5 rounded-full overflow-hidden"
                            style={{ backgroundColor: "rgba(28, 20, 16, 0.8)" }}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1,
                                delay: i * 0.1,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-full relative"
                              style={{
                                background:
                                  "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                              }}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-pulse" />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Shine Effect */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(245, 158, 11, 0.5), transparent)",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="mb-4" style={{ color: "var(--color-text-secondary)" }}>
          Interested in working together?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "white",
          }}
        >
          Let's Connect
          <svg
            className="w-4 h-4"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M13 7l5 5m0 0l-5 5m5-5H6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
