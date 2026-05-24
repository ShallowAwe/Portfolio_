import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaCode,
  FaServer,
  FaReact,
  FaTools,
  FaShieldAlt,
  FaKey,
  FaUserShield,
} from "react-icons/fa";
import {
  SiJavascript,
  SiSpringboot,
  SiSpringsecurity,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiAxios,
  SiCloudflare,
  SiPostman,
  SiJsonwebtokens,
  SiHibernate,
  SiFlyway,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

// --- Data Defined Outside ---
const SKILL_CATEGORIES = [
  {
    id: "lang",
    title: "Languages",
    icon: FaCode,
    description: "Core languages I work in day to day",
    items: [
      { name: "Java 21", icon: <FaJava />, level: 90 },
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, level: 85 },
      { name: "SQL", icon: <FaDatabase />, level: 82 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: FaServer,
    description: "Spring Boot microservices and APIs",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot />, level: 90 },
      { name: "Spring Security", icon: <SiSpringsecurity />, level: 85 },
      { name: "RESTful APIs", icon: <TbApi />, level: 90 },
      { name: "Microservices", icon: <FaServer />, level: 82 },
      { name: "JPA / Hibernate", icon: <SiHibernate />, level: 85 },
      { name: "Flyway", icon: <SiFlyway />, level: 80 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: FaReact,
    description: "Responsive React interfaces with state management",
    items: [
      { name: "React 18", icon: <FaReact />, level: 88 },
      { name: "Redux Toolkit", icon: <SiRedux />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 88 },
      { name: "Axios", icon: <SiAxios />, level: 85 },
      { name: "Dexie.js", icon: <FaDatabase />, level: 80 },
    ],
  },
  {
    id: "security",
    title: "Security & Auth",
    icon: FaShieldAlt,
    description: "Authentication, authorization, and identity",
    items: [
      { name: "JWT", icon: <SiJsonwebtokens />, level: 88 },
      { name: "OAuth 2.0", icon: <FaKey />, level: 82 },
      { name: "RBAC", icon: <FaUserShield />, level: 88 },
      { name: "BCrypt", icon: <FaShieldAlt />, level: 80 },
      { name: "Refresh Token Rotation", icon: <FaKey />, level: 85 },
    ],
  },
  {
    id: "data",
    title: "Databases",
    icon: FaDatabase,
    description: "Relational and document data stores",
    items: [
      { name: "MySQL", icon: <SiMysql />, level: 85 },
      { name: "MSSQL", icon: <FaDatabase />, level: 82 },
      { name: "MongoDB", icon: <SiMongodb />, level: 78 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Infra",
    icon: FaTools,
    description: "Workflow, deployment, and developer tooling",
    items: [
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "Docker", icon: <FaDocker />, level: 78 },
      { name: "CI/CD", icon: <FaTools />, level: 80 },
      { name: "Cloudflare R2", icon: <SiCloudflare />, level: 80 },
      { name: "Postman", icon: <SiPostman />, level: 85 },
    ],
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section
      id="skills"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs */}
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
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 85%)",
        }}
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
        style={{
          background:
            "color-mix(in srgb, var(--color-accent), transparent 88%)",
        }}
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
              backgroundColor:
                "color-mix(in srgb, var(--color-primary), transparent 90%)",
              color: "var(--color-primary)",
              border: "1px solid var(--color-border)",
            }}
          >
            What I Bring to the Table
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
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
        layout
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {SKILL_CATEGORIES.map((cat, index) => {
          const isSelected = selectedCategory === index;

          return (
            <motion.div
              layout
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(isSelected ? null : index)}
              className="relative group cursor-pointer"
            >
              <motion.div
                layout
                className="h-full p-6 rounded-3xl border transition-all duration-300 overflow-hidden relative"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: isSelected
                    ? "var(--color-primary)"
                    : "var(--color-border)",
                  boxShadow: isSelected
                    ? "0 0 30px -10px var(--color-shadow)"
                    : "none",
                }}
              >
                {/* Hover Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 95%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 95%) 100%)",
                  }}
                />

                {/* Card Header */}
                <motion.div
                  layout
                  className="relative z-10 flex items-start justify-between mb-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--color-primary), transparent 90%)",
                        color: "var(--color-primary)",
                      }}
                    >
                      <cat.icon size={20} />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {cat.title}
                      </h3>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {cat.items.length} Skills
                      </p>
                    </div>
                  </div>

                  {/* Toggle Icon */}
                  <motion.div
                    animate={{ rotate: isSelected ? 180 : 0 }}
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Content Area */}
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    {!isSelected ? (
                      // Collapsed: Tag Cloud
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-wrap gap-2"
                      >
                        {cat.items.slice(0, 4).map((item, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-2 py-1 rounded-md border flex items-center gap-1.5"
                            style={{
                              backgroundColor: "var(--color-surface-glass)",
                              borderColor: "var(--color-border)",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            <span style={{ color: "var(--color-primary)" }}>
                              {item.icon}
                            </span>
                            {item.name}
                          </span>
                        ))}
                        {cat.items.length > 4 && (
                          <span
                            className="text-xs font-medium px-2 py-1 rounded-md border"
                            style={{
                              borderColor: "transparent",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            +{cat.items.length - 4} more
                          </span>
                        )}
                      </motion.div>
                    ) : (
                      // Expanded: Proficiency Bars
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4 mt-2"
                      >
                        {cat.items.map((item, i) => (
                          <div key={i} className="group/skill">
                            <div className="flex justify-between text-sm mb-1.5">
                              <span
                                className="flex items-center gap-2 font-medium"
                                style={{ color: "var(--color-text-primary)" }}
                              >
                                <span style={{ color: "var(--color-primary)" }}>
                                  {item.icon}
                                </span>
                                {item.name}
                              </span>
                              <span
                                style={{ color: "var(--color-text-secondary)" }}
                              >
                                {item.level}%
                              </span>
                            </div>
                            <div
                              className="h-1.5 rounded-full overflow-hidden"
                              style={{
                                backgroundColor: "var(--color-surface-accent)",
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${item.level}%` }}
                                transition={{
                                  duration: 1,
                                  ease: "easeOut",
                                  delay: i * 0.1,
                                }}
                                className="h-full rounded-full relative"
                                style={{
                                  background:
                                    "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                                }}
                              >
                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                              </motion.div>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
