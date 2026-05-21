"use client";

import React from "react";
import { PARTNERS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-navy relative border-y border-gold/15">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/[0.01] via-transparent to-gold/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Label Card */}
          <ScrollReveal direction="right" className="text-right flex-shrink-0">
            <span className="text-xs font-bold tracking-[3px] text-gold uppercase block mb-1">
              شركاء النجاح الاستراتيجيون
            </span>
            <h3 className="text-xl font-bold text-white font-heading">
              نتشارك مع كبار المقاولين والمطورين
            </h3>
          </ScrollReveal>

          {/* Vertical divider on desktop */}
          <div className="hidden md:block w-px h-16 bg-gold/15" />

          {/* Partners cards container */}
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto flex-grow justify-end">
            {PARTNERS.map((partner, i) => (
              <ScrollReveal
                key={partner.name}
                direction="left"
                delay={i * 0.15}
                className="w-full sm:w-[280px]"
              >
                <div className="flex flex-col items-center justify-center p-6 bg-navy-mid/10 border border-gold/15 hover:border-gold/45 rounded-2xl hover:-translate-y-1.5 transition-all duration-300 shadow-lg group">
                  <div className="h-16 w-full flex items-center justify-center relative mb-4">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      sizes="150px"
                      className="object-contain brightness-95 grayscale group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 transform group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-bold text-white group-hover:text-gold transition-colors duration-300">
                      {partner.name}
                    </h4>
                    <p className="text-[11px] text-cream/50 mt-1">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
