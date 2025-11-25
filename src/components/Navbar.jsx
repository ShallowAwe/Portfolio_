import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Profile Image */}
          <a href="#hero" className="flex items-center gap-3 group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ scale: 1.1 }}
              className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary shadow-lg shadow-primary/20 transition-colors"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <span className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
              RI
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-textSecondary hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:block px-5 py-2 bg-primary hover:bg-primaryHover text-white rounded-lg transition-all duration-300 text-sm font-medium active:scale-95"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-textPrimary transition-colors hover:text-primary"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            aria-hidden="true"
          />

          {/* Menu Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] z-50 md:hidden overflow-y-auto"
            style={{
              backgroundColor: "var(--color-surface)",
              borderLeft: "1px solid var(--color-border)",
            }}
          >
            {/* Menu Header */}
            <div
              className="flex items-center justify-between p-6 border-b"
              style={{ borderColor: "var(--color-border)" }}
            >
              <span className="text-xl font-bold text-gradient">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg transition-colors"
                style={{
                  color: "var(--color-text-secondary)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                  style={{
                    color: "var(--color-text-secondary)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(245, 158, 11, 0.1)";
                    e.target.style.color = "var(--color-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "var(--color-text-secondary)";
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button in Mobile Menu */}
            <div className="p-6 pt-0">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block w-full text-center px-5 py-3 bg-primary hover:bg-primaryHover text-white rounded-lg transition-all duration-300 text-sm font-medium active:scale-95"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </>
      )}
    </motion.nav>
  );
}
