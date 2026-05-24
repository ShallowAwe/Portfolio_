import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaCubes,
  FaArrowRight,
} from "react-icons/fa";

// --- Components & Data defined OUTSIDE to prevent re-renders ---

const AnimatedCounter = ({ target, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth stop (easeOutQuart)
        const ease = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(target * ease));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
          setDone(true);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  // If the static suffix begins with a decimal (e.g. ".8%"), only render it
  // once the counter has finished. Otherwise the animation reads "0.8%, 1.8%..."
  const isDecimalSuffix = suffix.startsWith(".");
  const displaySuffix = isDecimalSuffix && !done ? "%" : suffix;

  return (
    <span ref={ref}>
      {count}
      {displaySuffix}
    </span>
  );
};

const ACHIEVEMENTS = [
  {
    metric: "50%+",
    target: 50,
    suffix: "%+",
    label: "Audit Effort Reduced",
    description:
      "Cut manual audit preparation for enterprise QMS clients via automated audit trails and compliance alerts",
    icon: FaBolt,
  },
  {
    metric: "16+",
    target: 16,
    suffix: "+",
    label: "Secured Modules",
    description:
      "CAPA, NCR, Document Control, Risk Assessment and more — protected by JWT/OAuth 2.0 and fine-grained RBAC",
    icon: FaShieldAlt,
  },
  {
    metric: "8",
    target: 8,
    suffix: "",
    label: "Relational Tables",
    description:
      "Architected with hierarchical RBAC, soft deletes, and audit logging in the Session-Based Issue Tracker",
    icon: FaCubes,
  },
  {
    metric: "100%",
    target: 100,
    suffix: "%",
    label: "End-to-End Owned",
    description:
      "Requirements, schema, implementation, testing, and CI/CD deployment — shipped as a single owner",
    icon: FaCheckCircle,
  },
];

const ADDITIONAL_STATS = [
  { value: "JWT", label: "+ Refresh Rotation" },
  { value: "RBAC", label: "Hierarchical" },
  { value: "Offline-First", label: "Dexie + R2 Sync" },
  { value: "Multi-Tenant", label: "QMS SaaS" },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-container relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
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
              Measurable Impact
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Key <span className="text-gradient">Achievements</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Quantifiable results from real-world projects
            </p>
          </motion.div>
        </div>

        {/* Achievements Grid */}
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {ACHIEVEMENTS.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative p-8 rounded-2xl text-center transition-all duration-300 overflow-hidden"
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
                    "linear-gradient(135deg, color-mix(in srgb, var(--color-primary), transparent 95%) 0%, transparent 50%, color-mix(in srgb, var(--color-accent), transparent 95%) 100%)",
                }}
              />

              {/* Top Corner Accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-primary), transparent 85%)",
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-primary), transparent 90%)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-primary)",
                  }}
                >
                  <achievement.icon size={28} />
                </motion.div>

                {/* Metric with Animated Counter */}
                <div className="mb-3 relative">
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-gradient"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <AnimatedCounter
                      target={achievement.target}
                      suffix={achievement.suffix}
                      duration={2000}
                    />
                  </motion.div>

                  {/* Glow Effect Behind Number */}
                  <motion.div
                    className="absolute inset-0 -z-10 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                    }}
                  />
                </div>

                {/* Label */}
                <h3
                  className="text-lg font-semibold mb-3 min-h-14 flex items-center justify-center"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {achievement.label}
                </h3>

                {/* Divider */}
                <div
                  className="h-px mb-4 mx-auto w-12 group-hover:w-full transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, var(--color-primary), transparent)",
                  }}
                />

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {achievement.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 origin-left"
                style={{
                  background:
                    "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.5, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div
            className="p-8 rounded-2xl relative overflow-hidden"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at center, var(--color-primary) 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {ADDITIONAL_STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group/stat"
                >
                  <div
                    className="text-3xl font-bold mb-2 group-hover/stat:text-gradient transition-all duration-300"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="mb-6" style={{ color: "var(--color-text-secondary)" }}>
            Want to see how I achieved these results?
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-medium rounded-lg transition-all duration-300"
          >
            View Case Studies
            <FaArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
