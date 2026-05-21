"use client";

import React from "react";
import { SERVICES } from "@/lib/data";
import Card3D from "@/components/3d/Card3D";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy relative">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

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
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline !py-2.5 !px-5 text-sm whitespace-nowrap"
            >
              طلب استشارة فنية
            </button>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={i * 0.1}
              className="h-full"
            >
              <Card3D
                maxTilt={10}
                scale={1.03}
                className="service-card relative overflow-hidden aspect-[4/3] rounded-2xl group border border-gold/15 bg-navy shadow-xl w-full h-full"
              >
                {/* Background image container */}
                <div
                  className="service-bg absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 brightness-[0.6]"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                
                {/* Visual Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Content wrapper */}
                <div className="absolute bottom-0 right-0 left-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="text-xs font-bold text-gold tracking-widest mb-1.5 font-heading">
                    {service.id}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {service.name}
                  </h3>
                  
                  {/* Detailed Description revealed on hover */}
                  <div className="service-desc text-sm text-cream/70 leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-out">
                    {service.desc}
                  </div>

                  {/* Visual Gold indicator accent line */}
                  <div className="service-line w-0 h-[3px] bg-gold-gradient rounded-full mt-4 transition-all duration-500" />
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
