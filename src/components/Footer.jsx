import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/profile.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/ShallowAwe",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/Rudrankur_Indurkar",
      icon: FaLinkedin,
    },
    {
      name: "Email",
      url: "mailto:rudraindurkar670@gmail.com",
      icon: FaEnvelope,
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
  ];

  return (
    <footer
      className="relative z-10 mt-24 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Gradient Divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-primary), transparent)",
        }}
      />

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(245, 158, 11, 0.1)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                RI<span className="text-gradient">.</span>
              </h3>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Building exceptional digital experiences with modern technologies
              and a passion for clean code.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-text-primary)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-primary inline-block hover:translate-x-1 transform"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-text-primary)" }}
            >
              Connect
            </h4>
            <ul className="flex items-center gap-4">
              {socials.map(({ name, url, icon: Icon }, index) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <a
                    href={url}
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)]"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-300 group-hover:text-primary"
                      style={{ color: "var(--color-text-secondary)" }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className="text-sm tracking-wide"
            style={{ color: "var(--color-text-secondary)" }}
          >
            © {year} Rudrankur Indurkar. All Rights Reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-text-secondary)", opacity: 0.7 }}
          >
            Built with React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
