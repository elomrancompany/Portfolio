"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { STATS, SITE } from "@/lib/data";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatIcon = ({ icon, className = "w-5 h-5 text-gold" }: { icon: string; className?: string }) => {
  switch (icon) {
    case "building":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case "layers":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case "map":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case "check":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "handshake":
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Subtle parallax on scroll
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.82, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Fixed Immersive Construction Background ── */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/projects/concrete-night.jpg')`,
          y: bgY,
          scale: 1.08,
        }}
      />

      {/* ── Dark Overlay with gold tint ── */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{
          opacity: overlayOpacity,
          background: "linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.80) 50%, rgba(13,27,42,0.70) 100%)",
        }}
      />

      {/* ── Animated gold grid pattern ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196,154,90,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,154,90,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* ── Radial gold accent glow (top-right) ── */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(196,154,90,0.07) 0%, transparent 65%)",
        }}
      />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(196,154,90,0.05) 0%, transparent 65%)",
        }}
      />

      {/* ── Main Content ── */}
      <div className="container-custom relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-32 lg:py-0 min-h-screen">

        {/* ── Left: Brand Copy ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col text-right max-w-2xl w-full"
        >
          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex self-end items-center gap-2.5 mb-7"
          >
            <span
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-gold border border-gold/30"
              style={{
                background: "rgba(196,154,90,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="pulse-dot w-2 h-2 bg-gold rounded-full" />
              شركة العمران للمقاولات العامة — تأسست {SITE.established}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.12] text-white mb-5"
          >
            <span className="block">EL OMRAN</span>
            <span className="block text-gradient-gold font-extrabold">نبني اليوم</span>
            <span className="block">لمستقبل مستدام</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.38, duration: 0.8 }}
            className="text-lg sm:text-xl text-cream/80 leading-relaxed mb-9 max-w-xl"
          >
            شريككم الاستراتيجي في المشروعات الكبرى والمقاولات العامة والأعمال المدنية والبنية التحتية.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              id="hero-projects-cta"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold text-[15px]"
            >
              سابقة أعمالنا
            </button>
            <button
              id="hero-contact-cta"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline text-[15px]"
              style={{ color: "rgba(230,232,236,0.9)", borderColor: "rgba(230,232,236,0.25)" }}
            >
              تواصل معنا
            </button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="flex items-center gap-4 mt-8 pt-6 border-t border-gold/15"
          >
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {["🏗️", "🏢", "🌾"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-gold/30 flex items-center justify-center text-sm"
                  style={{ background: "rgba(13,27,42,0.8)" }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p className="text-xs text-cream/60 font-medium">
              ثقة <span className="text-gold font-bold">كونكورد</span> و<span className="text-gold font-bold">السعود جروب</span> — مقاول باطن معتمد الفئة الأولى
            </p>
          </motion.div>
        </motion.div>

        {/* ── Right: Glassmorphism Stat Cards ── */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, x: -50 }}
          animate={mounted ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3.5 self-center lg:self-stretch justify-center items-stretch"
        >
          {STATS.slice(0, 4).map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={mounted ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.7 }}
              className="group relative flex items-center gap-4 px-5 py-4 rounded-2xl border border-gold/15 hover:border-gold/35 transition-all duration-400 w-full sm:min-w-[230px] lg:min-w-[260px] overflow-hidden"
              style={{
                background: "rgba(13,27,42,0.65)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(196,154,90,0.06)",
              }}
            >
              {/* Gold side accent */}
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-gold/80 via-gold/40 to-transparent rounded-r-2xl" />
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(ellipse at center, rgba(196,154,90,0.05) 0%, transparent 70%)" }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(196,154,90,0.12)" }}
              >
                <StatIcon icon={stat.icon} />
              </div>

              {/* Value + Label */}
              <div className="flex flex-col text-right flex-1">
                <span className="text-2xl font-black text-white leading-none tabular-nums">
                  {statsInView ? (
                    <CountUp end={stat.value} duration={2.5} separator="," />
                  ) : "0"}
                  <span className="text-gold">{stat.suffix}</span>
                  {stat.unit && <span className="text-sm font-semibold text-gold/80 mr-1"> {stat.unit}</span>}
                </span>
                <span className="text-xs text-cream/65 mt-1 font-medium leading-snug">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.25em] text-gold">اسحب للأسفل</span>
        <div className="w-6 h-10 border border-gold/40 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
