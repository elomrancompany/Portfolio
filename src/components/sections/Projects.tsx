"use client";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-graphite">
      {/* Header */}
      <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
        <div>
          <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-4 flex items-center gap-3">
            مشروعاتنا البارزة
            <span className="inline-block w-14 h-px bg-gold" />
          </div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.2] text-soft-white">
            إنجازات تتحدث
            <br />
            <span className="text-gold">عن نفسها</span>
          </h2>
        </div>
        <button
          onClick={() =>
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="border border-white/25 hover:border-gold text-soft-white hover:text-gold text-sm font-semibold px-6 py-2.5 rounded transition-all duration-300"
        >
          عرض جميع المشاريع
        </button>
      </div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] grid-rows-[auto] gap-0.5">
        {/* Featured — spans 2 rows */}
        {PROJECTS.filter((p) => p.featured).map((project) => (
          <div
            key={project.id}
            className="project-card relative overflow-hidden cursor-pointer group row-span-2"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover brightness-[0.55] transition-all duration-700 group-hover:brightness-[0.7] group-hover:scale-[1.04]"
              style={{ minHeight: "620px", height: "100%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/97 via-navy/25 to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-9">
              <span className="inline-block bg-[rgba(201,161,90,0.2)] border border-gold text-gold text-[11px] font-bold px-3 py-1 rounded-full tracking-wide mb-4">
                {project.status}
              </span>
              <div className="text-[clamp(22px,3vw,34px)] font-black text-soft-white mb-2">
                {project.name}
              </div>
              <div className="text-sm text-concrete mb-5">{project.client}</div>
              <div className="project-metrics flex flex-wrap gap-6 border-t border-[rgba(201,161,90,0.2)] pt-5">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-xl font-black text-gold">{m.value}</div>
                    <div className="text-[10px] text-concrete">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Side projects */}
        {PROJECTS.filter((p) => !p.featured).map((project) => (
          <div
            key={project.id}
            className="project-card relative overflow-hidden cursor-pointer group"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover brightness-[0.55] transition-all duration-700 group-hover:brightness-[0.7] group-hover:scale-[1.04]"
              style={{ minHeight: "300px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/97 via-navy/30 to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-7">
              <span className="inline-block bg-[rgba(201,161,90,0.2)] border border-gold text-gold text-[10px] font-bold px-3 py-1 rounded-full tracking-wide mb-3">
                {project.status}
              </span>
              <div className="text-xl font-black text-soft-white mb-1.5">
                {project.name}
              </div>
              <div className="text-xs text-concrete mb-4">{project.client}</div>
              <div className="project-metrics flex flex-wrap gap-4 border-t border-[rgba(201,161,90,0.2)] pt-4">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-base font-black text-gold">{m.value}</div>
                    <div className="text-[10px] text-concrete">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
