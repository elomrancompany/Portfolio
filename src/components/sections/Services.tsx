"use client";
import { SERVICES } from "@/lib/data";
import Card3D from "@/components/3d/Card3D";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 md:mb-14 flex-wrap gap-4 md:gap-6">
        <div>
          <div className="text-[10px] md:text-[11px] font-bold tracking-[3px] text-gold uppercase mb-3 md:mb-4 flex items-center gap-3">
            خدماتنا
            <span className="inline-block w-12 md:w-14 h-px bg-gold" />
          </div>
          <h2 className="text-[clamp(24px,5vw,48px)] font-black leading-[1.2] text-soft-white">
            حلول متكاملة
            <br />
            <span className="text-gold">لمشاريعك</span>
          </h2>
        </div>
        <button
          onClick={() =>
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="border border-white/25 hover:border-gold text-soft-white hover:text-gold text-xs md:text-sm font-semibold px-5 md:px-6 py-2 md:py-2.5 rounded transition-all duration-300 whitespace-nowrap"
        >
          عرض جميع الخدمات
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 md:gap-1">
        {SERVICES.map((service) => (
          <Card3D
            key={service.id}
            className="service-card relative overflow-hidden aspect-[4/3] cursor-pointer group"
            intensity={15}
          >
            {/* BG Image */}
            <div
              className="service-bg absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${service.image}')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 right-0 left-0 p-4 md:p-7 translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
              <div className="text-[10px] md:text-[11px] font-bold text-gold tracking-widest mb-1 md:mb-2">
                {service.id}
              </div>
              <div className="text-lg md:text-xl font-black text-soft-white mb-1 md:mb-2 line-clamp-2">
                {service.name}
              </div>
              <div className="service-desc text-[12px] md:text-[13px] text-concrete leading-[1.7] line-clamp-3">
                {service.desc}
              </div>
              <div className="service-arrow mt-2 md:mt-3 text-xs font-bold text-gold flex items-center gap-1">
                اعرف المزيد ←
              </div>
            </div>

            {/* Gold bottom line */}
            <div className="service-gold-line absolute bottom-0 right-0 left-0 h-0.5 bg-gold" />
          </Card3D>
        ))}
      </div>
    </section>
  );
}
