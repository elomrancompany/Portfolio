"use client";

import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUpStat from "@/components/ui/CountUpStat";
import { STATS } from "@/lib/data";

export default function Numbers() {
  return (
    <section id="numbers" className="section-padding bg-navy-mid/10 relative overflow-hidden border-y border-gold/10">
      {/* Background accent glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" className="flex flex-col items-center">
          <span className="section-label mb-2">إنجازاتنا بالأرقام</span>
          <h2 className="section-title text-white">
            كفاءة تعكسها
            <span className="text-gradient-gold"> الأرقام والمؤشرات</span>
          </h2>
          <p className="section-subtitle mt-2 text-cream/70 text-base max-w-xl">
            نثق بقدراتنا، وتترجم أرقامنا حجم التزامنا وجودة مخرجاتنا الهندسية والإنشائية على أرض الواقع.
          </p>
        </ScrollReveal>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 sm:mt-16">
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={i}
              direction="scale"
              delay={i * 0.1}
              className="h-full"
            >
              <CountUpStat
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.icon === "map" ? "" : ""}
                decimals={0}
                duration={2.2}
                label={stat.label}
                subLabel={stat.subLabel}
                className="h-full border border-gold/15 hover:border-gold/45 shadow-deep bg-navy/85 hover:bg-navy-mid/20 transition-all duration-300 transform"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
