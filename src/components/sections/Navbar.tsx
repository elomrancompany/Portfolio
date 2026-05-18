"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS, SITE } from "@/lib/data";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-[5%] transition-all duration-400 ${
          scrolled
            ? "h-[68px] bg-navy/97 backdrop-blur-xl border-b border-[rgba(201,161,90,0.15)]"
            : "h-[80px] bg-transparent"
        }`}
      >
        <Logo />

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-9 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="nav-link-underline relative text-soft-white/75 hover:text-soft-white text-sm font-medium transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav("#contact")}
              className="bg-gold hover:bg-gold-light text-navy font-bold text-sm px-6 py-2.5 rounded transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,161,90,0.35)]"
            >
              طلب عرض سعر
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-soft-white block transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-soft-white block transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-soft-white block transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[68px] right-0 left-0 z-40 bg-navy/98 backdrop-blur-xl border-b border-[rgba(201,161,90,0.2)] transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col list-none p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-soft-white/80 hover:text-gold text-base font-semibold transition-colors w-full text-right py-2 border-b border-[rgba(201,161,90,0.1)]"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav("#contact")}
              className="w-full bg-gold text-navy font-bold text-base py-3 rounded mt-2"
            >
              طلب عرض سعر
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
