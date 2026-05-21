"use client";

import React, { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll properties (background change)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the top 40% of viewport
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = `#${section}`;
          }
        }
      }

      // Default to first if near top
      if (window.scrollY < 200) {
        currentSection = NAV_LINKS[0].href;
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // run once on load
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-navy/90 backdrop-blur-xl border-b border-gold/10 shadow-lg"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - RTL (Left side of layout, right side in standard flex-row-reverse) */}
          <Logo />

          {/* Desktop Navigation Link Items */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`nav-link text-sm font-medium tracking-wide ${
                  activeSection === link.href ? "active text-gold" : "text-cream/90"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="btn-gold !py-2.5 !px-5 text-sm"
            >
              طلب استشارة
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-cream hover:text-gold hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Full Screen Overlay */}
      <div
        className={`fixed inset-0 top-[60px] bg-navy/98 backdrop-blur-2xl z-40 transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8">
          <nav className="flex flex-col gap-6 text-right mt-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`text-xl font-bold tracking-wide py-2 text-right transition-colors duration-300 ${
                  activeSection === link.href ? "text-gold border-r-2 border-gold pr-3" : "text-cream hover:text-gold"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile CTA and contact info */}
          <div className="flex flex-col gap-6 mb-12 border-t border-gold/10 pt-6">
            <a
              href={`tel:${SITE.phone}`}
              className="text-center font-bold text-cream hover:text-gold text-lg transition-colors"
            >
              {SITE.phoneFormatted}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="btn-gold w-full text-center"
            >
              تواصل معنا الآن
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
