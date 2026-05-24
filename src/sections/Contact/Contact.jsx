import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const CONTACT_EMAIL = "rudraindurkar670@gmail.com";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formState;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\nReply to: ${email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="section-container relative z-10 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Ambient Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "color-mix(in srgb, var(--color-primary), transparent 85%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
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
              Get in Touch
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Whether you have a project in mind or just want to say hi, my
              inbox is always open.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <ContactCard
                icon={FaEnvelope}
                title="Email"
                value="rudraindurkar670@gmail.com"
                href="mailto:rudraindurkar670@gmail.com"
                delay={0}
              />
              <ContactCard
                icon={FaPhone}
                title="Phone"
                value="+91 8459132835"
                href="tel:+918459132835"
                delay={0.1}
              />
              <ContactCard
                icon={FaLinkedin}
                title="LinkedIn"
                value="Connect on LinkedIn"
                href="https://linkedin.com/in/rudrankur-indurkar"
                delay={0.2}
              />
              <ContactCard
                icon={FaGithub}
                title="GitHub"
                value="Follow on GitHub"
                href="https://github.com/ShallowAwe"
                delay={0.3}
              />
              <ContactCard
                icon={FaMapMarkerAlt}
                title="Location"
                value="Pune, Maharashtra"
                delay={0.4}
              />
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                boxShadow: "0 4px 20px -2px var(--color-shadow)",
              }}
            >
              {/* Form Glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full blur-2xl opacity-20 pointer-events-none"
                style={{ backgroundColor: "var(--color-primary)" }}
              />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <InputGroup
                  label="Name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                <InputGroup
                  label="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium ml-1 block"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 resize-none"
                    placeholder="Tell me about your project..."
                    style={{
                      backgroundColor: "var(--color-surface-glass)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                      "--tw-ring-color": "var(--color-primary)",
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    backgroundColor: isSubmitted
                      ? "#10b981"
                      : "var(--color-primary)",
                    color: "white",
                    boxShadow: "0 4px 15px -3px var(--color-shadow)",
                  }}
                >
                  {isSubmitted ? (
                    <>
                      Opened in your mail app <FaPaperPlane />
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-components for cleaner code ---

function ContactCard({ icon: Icon, title, value, href, delay }) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-(--color-primary) group-hover:text-white"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-primary), transparent 90%)",
          color: "var(--color-primary)",
        }}
      >
        <Icon size={20} />
      </div>
      <div>
        <h4
          className="text-sm font-medium"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {title}
        </h4>
        <p
          className="font-semibold"
          style={{ color: "var(--color-text-primary)" }}
        >
          {value}
        </p>
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
}

function InputGroup({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  const inputId = `contact-${name}`;
  return (
    <div className="space-y-2">
      <label
        htmlFor={inputId}
        className="text-sm font-medium ml-1 block"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:ring-2"
        style={{
          backgroundColor: "var(--color-surface-glass)",
          border: "1px solid var(--color-border)",
          color: "var(--color-text-primary)",
          "--tw-ring-color": "var(--color-primary)",
        }}
      />
    </div>
  );
}
