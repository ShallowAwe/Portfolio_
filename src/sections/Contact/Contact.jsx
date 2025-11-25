import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:rudrankurindurkar@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      formData.message
    )}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ShallowAwe",
      handle: "@ShallowAwe",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rudrankur-indurkar",
      handle: "Rudrankur Indurkar",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:rudrankurindurkar@gmail.com",
      handle: "rudrankurindurkar@gmail.com",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="section-container relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(245, 158, 11, 0.15)" }}
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ backgroundColor: "rgba(251, 191, 36, 0.12)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-12">
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
              Let's Connect
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Have a project in mind? Let's work together to bring your ideas to
              life.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="group/form relative p-8 rounded-2xl space-y-6"
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Form Hover Effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover/form:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245, 158, 11, 0.03) 0%, transparent 50%, rgba(251, 191, 36, 0.03) 100%)",
              }}
            />

            <div className="relative z-10 space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 flex items-center gap-2"
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(28, 20, 16, 0.5)",
                      border: `2px solid ${
                        focusedField === "name"
                          ? "var(--color-primary)"
                          : "var(--color-border)"
                      }`,
                      color: "var(--color-text-primary)",
                      outline: "none",
                    }}
                    placeholder="Your name"
                    aria-required="true"
                  />
                  {focusedField === "name" && (
                    <motion.div
                      layoutId="focus-ring"
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        boxShadow: "0 0 0 4px rgba(245, 158, 11, 0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 flex items-center gap-2"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(28, 20, 16, 0.5)",
                      border: `2px solid ${
                        focusedField === "email"
                          ? "var(--color-primary)"
                          : "var(--color-border)"
                      }`,
                      color: "var(--color-text-primary)",
                      outline: "none",
                    }}
                    placeholder="your.email@example.com"
                    aria-required="true"
                  />
                  {focusedField === "email" && (
                    <motion.div
                      layoutId="focus-ring"
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        boxShadow: "0 0 0 4px rgba(245, 158, 11, 0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 flex items-center gap-2"
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
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 resize-none"
                    style={{
                      backgroundColor: "rgba(28, 20, 16, 0.5)",
                      border: `2px solid ${
                        focusedField === "message"
                          ? "var(--color-primary)"
                          : "var(--color-border)"
                      }`,
                      color: "var(--color-text-primary)",
                      outline: "none",
                    }}
                    placeholder="Tell me about your project..."
                    aria-required="true"
                  />
                  {focusedField === "message" && (
                    <motion.div
                      layoutId="focus-ring"
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        boxShadow: "0 0 0 4px rgba(245, 158, 11, 0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 font-medium rounded-lg transition-all duration-300 relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.svg
                        className="w-5 h-5"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </motion.svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </span>
              </motion.button>
            </div>
          </motion.form>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social Links Card */}
            <div
              className="p-8 rounded-2xl relative overflow-hidden group"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Hover Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.03) 0%, transparent 50%, rgba(251, 191, 36, 0.03) 100%)",
                }}
              />

              <div className="relative z-10">
                <h3
                  className="text-xl font-semibold mb-2 flex items-center gap-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  Connect With Me
                </h3>
                <p
                  className="mb-6 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Feel free to reach out through any of these platforms. I'm
                  always open to discussing new projects and opportunities.
                </p>

                <div className="space-y-3">
                  {socialLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      target={
                        link.url.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      whileHover={{ x: 4, scale: 1.02 }}
                      className="flex items-center justify-between p-4 rounded-lg transition-all duration-300 group/link"
                      style={{
                        backgroundColor: "rgba(28, 20, 16, 0.3)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          style={{ color: "var(--color-primary)" }}
                        >
                          {link.icon}
                        </motion.div>
                        <div>
                          <div
                            className="font-medium"
                            style={{ color: "var(--color-text-primary)" }}
                          >
                            {link.name}
                          </div>
                          <div
                            className="text-xs"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {link.handle}
                          </div>
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "var(--color-primary)" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="p-6 rounded-2xl relative overflow-hidden group"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Hover Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.03) 0%, transparent 50%, rgba(251, 191, 36, 0.03) 100%)",
                }}
              />

              <div className="relative z-10">
                <h3
                  className="text-xl font-semibold mb-4 flex items-center gap-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--color-primary)" }}
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
                  Location
                </h3>
                <p
                  className="flex items-center gap-2 text-lg"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span className="text-2xl">📍</span>
                  Pune, Maharashtra, India
                </p>
                <p
                  className="mt-3 text-sm"
                  style={{ color: "var(--color-text-secondary)", opacity: 0.7 }}
                >
                  Open to remote opportunities worldwide
                </p>
              </div>
            </motion.div>

            {/* Response Time Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="p-6 rounded-2xl relative overflow-hidden group"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Hover Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245, 158, 11, 0.03) 0%, transparent 50%, rgba(251, 191, 36, 0.03) 100%)",
                }}
              />

              <div className="relative z-10 flex items-center gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Quick Response
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Usually within 24 hours
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
