"use client";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy">
      {/* Header */}
      <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
        <div>
          <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-4 flex items-center gap-3">
            خدماتنا
            <span className="inline-block w-14 h-px bg-gold" />
          </div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.2] text-soft-white">
            حلول متكاملة
            <br />
            <span className="text-gold">لمشاريعك</span>
          </h2>
        </div>
        <button
          onClick={() =>
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="border border-white/25 hover:border-gold text-soft-white hover:text-gold text-sm font-semibold px-6 py-2.5 rounded transition-all duration-300"
        >
          عرض جميع الخدمات
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="service-card relative overflow-hidden aspect-[4/3] cursor-pointer group"
          >
            {/* BG Image */}
            <div
              className="service-bg absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${service.image}')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 right-0 left-0 p-7 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
              <div className="text-[11px] font-bold text-gold tracking-widest mb-2">
                {service.id}
              </div>
              <div className="text-xl font-black text-soft-white mb-2">
                {service.name}
              </div>
              <div className="service-desc text-[13px] text-concrete leading-[1.7]">
                {service.desc}
              </div>
              <div className="service-arrow mt-3 text-xs font-bold text-gold flex items-center gap-1">
                اعرف المزيد ←
              </div>
            </div>

            {/* Gold bottom line */}
            <div className="service-gold-line absolute bottom-0 right-0 left-0 h-0.5 bg-gold" />
          </div>
        ))}
      </div>
    </section>
  );
}
