"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { STATS, SITE } from "@/lib/data";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Scene3D = dynamic(() => import("@/components/3d/Scene3D").then((mod) => mod.Scene3D), {
  ssr: false,
});

// React SVGs instead of dangerouslySetInnerHTML
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
  const [is3DEnabled, setIs3DEnabled] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Check if device is desktop and capable
    const checkPerformance = () => {
      const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const isSmallScreen = window.innerWidth < 1024;
      setIs3DEnabled(!isMobile && !isSmallScreen);
    };

    checkPerformance();
    window.addEventListener("resize", checkPerformance);
    return () => window.removeEventListener("resize", checkPerformance);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen lg:h-screen lg:min-h-[750px] flex items-center overflow-hidden pt-24 lg:pt-0"
    >
      {/* Immersive 3D Starfield Background */}
      {is3DEnabled && (
        <div className="absolute inset-0 z-0">
          <Scene3D className="absolute inset-0" />
        </div>
      )}

      {/* Fallback Static Gradient Background */}
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(105deg, rgba(13,27,42,0.96) 35%, rgba(13,27,42,0.6) 100%),
            url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')
          `,
        }}
      />

      {/* Grid pattern layer */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(196,154,90,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(196,154,90,0.03)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none" />

      {/* Interactive Content */}
      <div className="container-custom relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-0">
        
        {/* Main Brand Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col text-right max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex self-start items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-1.5 rounded-full text-xs font-bold text-gold tracking-wider mb-6"
          >
            <span className="pulse-dot w-2 h-2 bg-gold rounded-full" />
            <span>شركة العمران للمقاولات العامة — تأسست {SITE.established}</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.15] text-white mb-4">
            {SITE.nameEn.split(" ")[0]} {SITE.nameEn.split(" ")[1]}
            <br />
            <span className="text-gradient-gold font-extrabold">نبني اليوم</span>
            <br />
            لمستقبل مستدام
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-cream/80 leading-relaxed mb-8 max-w-xl">
            شريككم الاستراتيجي في المشروعات الكبرى والمقاولات العامة والأعمال المدنية والبنية التحتية.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold text-[15px]"
            >
              سابقة أعمالنا
            </button>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline text-[15px] !text-white !border-white/30 hover:!border-gold hover:!text-gold"
            >
              تواصل معنا
            </button>
          </div>
        </motion.div>

        {/* Floating Stat Widget Cards on Left (Desktop) */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-4 self-stretch justify-center items-center lg:items-end"
        >
          {STATS.slice(0, 4).map((stat, i) => (
            <div
              key={i}
              className="stat-card glass-card-premium px-5 py-3.5 flex items-center gap-4 min-w-[240px] border border-gold/15 relative overflow-hidden group hover:border-gold/35 transition-all duration-300 w-full sm:w-auto"
            >
              {/* Vertical side glow line */}
              <div className="absolute top-0 right-0 w-[4px] h-full bg-gold-gradient" />
              
              {/* SVG Icon wrapper */}
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <StatIcon icon={stat.icon} />
              </div>

              <div className="flex flex-col text-right">
                <span className="text-2xl font-black text-white leading-none">
                  {statsInView ? (
                    <CountUp end={stat.value} duration={2.5} separator="," />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                  {stat.unit && <span className="text-sm font-semibold mr-1">{stat.unit}</span>}
                </span>
                <span className="text-xs text-cream/70 mt-1 font-semibold">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Elegant animated scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold-light">اسحب للأسفل</span>
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
