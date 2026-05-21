"use client";

import React from "react";
import { PROCESS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Process() {
  return (
    <section id="process" className="section-padding bg-navy relative border-t border-gold/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          label="منهجية العمل"
          title="خطوات هندسية مدروسة نحو التميز"
          subtitle="نتبع منهجية عمل دقيقة تضمن أعلى مستويات الكفاءة والسلامة من التخطيط وحتى تسليم المشروع النهائي."
          align="center"
          className="max-w-3xl"
        />

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:flex items-start justify-center relative mt-16 pb-12">
          {/* Timeline Connector Line */}
          <div className="absolute top-[28px] right-[10%] left-[10%] h-[2px] bg-gradient-to-l from-transparent via-gold/40 to-transparent z-0" />

          {PROCESS.map((step, i) => (
            <ScrollReveal
              key={i}
              direction="up"
              delay={i * 0.15}
              className="flex-1 flex flex-col items-center gap-4 relative z-10 group text-center"
            >
              {/* Number Circle */}
              <div className="w-14 h-14 bg-navy border-2 border-gold rounded-full flex items-center justify-center text-lg font-black text-gold transition-all duration-500 group-hover:bg-gold-gradient group-hover:text-navy group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_20px_rgba(196,154,90,0.4)] font-heading">
                {step.step}
              </div>
              
              {/* Title */}
              <h4 className="text-lg font-bold text-white group-hover:text-gold transition-colors duration-300">
                {step.title}
              </h4>
              
              {/* Description */}
              <p className="text-xs text-cream/70 max-w-[170px] leading-relaxed">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden flex flex-col items-center gap-8 relative mt-12">
          {/* Connector Line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/30 to-transparent right-1/2 translate-x-1/2 z-0" />
          
          {PROCESS.map((step, i) => (
            <ScrollReveal
              key={i}
              direction={i % 2 === 0 ? "right" : "left"}
              delay={0.1}
              className="flex items-start gap-4 text-right w-full max-w-[420px] relative z-10"
            >
              {/* Text Side */}
              <div className="flex-1 bg-navy-mid/10 border border-gold/10 p-5 rounded-2xl backdrop-blur-md shadow-md">
                <span className="text-xs font-black text-gold font-heading mb-1 block">{step.step}</span>
                <h4 className="text-base font-bold text-white mb-1.5">{step.title}</h4>
                <p className="text-xs text-cream/75 leading-relaxed">{step.desc}</p>
              </div>
              
              {/* Center Circle */}
              <div className="w-10 h-10 bg-navy border-2 border-gold rounded-full flex items-center justify-center text-sm font-black text-gold flex-shrink-0 shadow-md font-heading">
                {step.step}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
