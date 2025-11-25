import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      metric: "99.8%",
      target: 99.8,
      suffix: "%",
      label: "Transaction Success",
      description:
        "Achieved in E-Commerce application through robust error handling",
      icon: (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      metric: "45%",
      target: 45,
      suffix: "%",
      label: "Performance Boost",
      description:
        "Reduced app startup time through optimized state management",
      icon: (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      metric: "500+",
      target: 500,
      suffix: "+",
      label: "Active Users",
      description: "Serving users across multiple production applications",
      icon: (
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      metric: "10+",
      target: 10,
      suffix: "+",
      label: "Projects Delivered",
      description: "Successfully completed and deployed to production",
      icon: (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  const AnimatedCounter = ({ target, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
      if (isInView) {
        let startTime = null;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = (currentTime - startTime) / duration;

          if (progress < 1) {
            setCount(Math.floor(target * progress));
            requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, target, duration]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="achievements"
      className="section-container relative overflow-hidden"
      style={{ backgroundColor: "rgba(28, 20, 16, 0.3)" }}
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
        style={{ backgroundColor: "rgba(245, 158, 11, 0.12)" }}
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
                backgroundColor: "rgba(245, 158, 11, 0.1)",
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
          {achievements.map((achievement, idx) => (
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
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, transparent 50%, rgba(251, 191, 36, 0.05) 100%)",
                }}
              />

              {/* Top Corner Accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-primary)",
                  }}
                >
                  {achievement.icon}
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
                  className="text-lg font-semibold mb-3 min-h-[3.5rem] flex items-center justify-center"
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
              {[
                { value: "95%", label: "Code Quality" },
                { value: "60%", label: "Faster Sync" },
                { value: "Zero", label: "Missed Deadlines" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, idx) => (
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
            className="inline-flex items-center gap-2 px-8 py-4 font-medium rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "white",
            }}
          >
            View Case Studies
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
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
