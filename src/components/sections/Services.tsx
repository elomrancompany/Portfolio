"use client";

import React from "react";
import { SERVICES } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="section-padding relative" style={{ background: "rgba(13,27,42,0.88)" }}>
      {/* Background radial accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 sm:mb-16 flex-wrap gap-6">
          <SectionHeader
            label="خدماتنا"
            title="حلول هندسية وإنشائية متكاملة"
            subtitle="نقدم باقة شاملة من الخدمات الإنشائية المتخصصة بمواصفات وجودة قياسية تلبي طموحات شركائنا."
            align="right"
            className="mb-0 max-w-2xl"
          />
          <ScrollReveal direction="fade" delay={0.2}>
            <button
              id="services-consult-btn"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline !py-2.5 !px-5 text-sm whitespace-nowrap"
            >
              طلب استشارة فنية
            </button>
          </ScrollReveal>
        </div>

        {/* Auto-adjusting grid — never breaks when items added/removed */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          }}
        >
          {SERVICES.map((service, i) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={i * 0.08}
              className="h-full"
            >
              <div
                className="service-card relative overflow-hidden rounded-2xl group border border-gold/15 shadow-xl w-full cursor-pointer transition-all duration-500 hover:border-gold/35"
                style={{ minHeight: "320px", height: "100%" }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                    filter: "brightness(0.55)",
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top shimmer border on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                {/* Content */}
                <div className="absolute bottom-0 right-0 left-0 p-6 md:p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="text-xs font-bold text-gold tracking-widest mb-1.5 font-heading">
                    {service.id}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {service.name}
                  </h3>

                  {/* Description — revealed on hover */}
                  <div className="service-desc text-sm text-cream/70 leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-out">
                    {service.desc}
                  </div>

                  {/* Gold accent line */}
                  <div className="service-line w-0 h-[3px] bg-gold-gradient rounded-full mt-4 transition-all duration-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
