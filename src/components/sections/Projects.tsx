"use client";

import React from "react";
import { PROJECTS } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const secondary = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section-padding relative border-t border-gold/10"
      style={{ background: "rgba(13,27,42,0.90)" }}
    >
      {/* Radial accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[700px] h-[700px] bg-gold/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 sm:mb-16 flex-wrap gap-6">
          <SectionHeader
            label="سابقة أعمالنا"
            title="مشروعات قومية وإنشائية بارزة"
            subtitle="فخورون بالمشاركة في أكبر المشروعات التنموية بمصر بالتعاون مع جهات حكومية ومطوري الفئة الأولى."
            align="right"
            className="mb-0 max-w-2xl"
          />
          <ScrollReveal direction="fade" delay={0.2}>
            <button
              id="projects-partner-btn"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-outline !py-2.5 !px-5 text-sm whitespace-nowrap"
            >
              انضم لشركائنا
            </button>
          </ScrollReveal>
        </div>

        {/* ── Asymmetric Layout — self-healing when projects count changes ── */}
        <div
          className={`grid gap-6 ${
            featured.length > 0 && secondary.length > 0
              ? "grid-cols-1 lg:grid-cols-[1.6fr_1fr]"
              : "grid-cols-1"
          }`}
        >
          {/* Featured project — spans 2 rows */}
          {featured.map((project) => (
            <ScrollReveal
              key={project.id}
              direction="right"
              className="lg:row-span-2 h-full"
            >
              <div className="project-card relative overflow-hidden rounded-2xl group border border-gold/15 bg-navy shadow-2xl h-full flex flex-col justify-end min-h-[500px] lg:min-h-[640px]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover brightness-[0.48] transition-all duration-1000 group-hover:brightness-[0.58] group-hover:scale-105"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent z-[1]" />
                {/* Gold shimmer on hover */}
                <div className="absolute inset-0 z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at bottom center, rgba(196,154,90,0.06) 0%, transparent 60%)" }}
                />

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-10 text-right">
                  <span className="inline-flex bg-gold/20 border border-gold/40 text-gold text-[11px] font-bold px-3.5 py-1 rounded-full mb-4 font-heading">
                    {project.status}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">
                    {project.name}
                  </h3>
                  <div className="text-sm text-gold font-bold mb-4">{project.client}</div>
                  <p className="text-sm sm:text-base text-cream/70 leading-relaxed mb-6 max-w-xl">
                    {project.scope}
                  </p>

                  {/* Metrics */}
                  <div className="project-metrics flex flex-wrap gap-6 border-t border-gold/15 pt-6">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="text-right">
                        <div className="text-xl sm:text-2xl font-black text-gold font-heading">{m.value}</div>
                        <div className="text-[10px] sm:text-xs text-cream/55 mt-1 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Secondary projects stacked */}
          {secondary.length > 0 && (
            <div className="flex flex-col gap-6">
              {secondary.map((project, i) => (
                <ScrollReveal
                  key={project.id}
                  direction="left"
                  delay={i * 0.15}
                  className="flex-1"
                >
                  <div className="project-card relative overflow-hidden rounded-2xl group border border-gold/15 bg-navy shadow-2xl flex flex-col justify-end min-h-[280px] lg:min-h-[300px] h-full">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover brightness-[0.48] transition-all duration-1000 group-hover:brightness-[0.58] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent z-[1]" />

                    <div className="relative z-10 p-6 sm:p-8 text-right">
                      <span className="inline-flex bg-gold/20 border border-gold/40 text-gold text-[10px] font-bold px-3 py-1 rounded-full mb-3 font-heading">
                        {project.status}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5 leading-snug">
                        {project.name}
                      </h3>
                      <div className="text-xs text-gold font-semibold mb-3">{project.client}</div>

                      <div className="project-metrics flex flex-wrap gap-4 border-t border-gold/15 pt-4">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-right">
                            <div className="text-lg font-black text-gold font-heading">{m.value}</div>
                            <div className="text-[10px] text-cream/55 mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>

        {/* If no secondary projects, show only featured in full-width with proper height */}
        {featured.length === 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
            {PROJECTS.map((project, i) => (
              <ScrollReveal key={project.id} direction="up" delay={i * 0.1}>
                <div className="project-card relative overflow-hidden rounded-2xl group border border-gold/15 bg-navy shadow-2xl flex flex-col justify-end min-h-[340px]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover brightness-[0.48] group-hover:brightness-[0.58] group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-[1]" />
                  <div className="relative z-10 p-6 text-right">
                    <h3 className="text-xl font-black text-white mb-1">{project.name}</h3>
                    <div className="text-xs text-gold font-semibold">{project.client}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
