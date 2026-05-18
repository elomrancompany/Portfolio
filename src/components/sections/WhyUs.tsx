"use client";
import { WHY_US } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why" className="section-padding bg-navy">
      <div className="text-center mb-16">
        <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-4">
          لماذا تختارنا
        </div>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.2] text-soft-white">
          ما يجعلنا
          <br />
          <span className="text-gold">الخيار الأول</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {WHY_US.map((item, i) => (
          <div
            key={i}
            className="why-item relative p-10 border border-[rgba(201,161,90,0.15)] bg-[rgba(201,161,90,0.02)] hover:bg-[rgba(201,161,90,0.06)] hover:border-[rgba(201,161,90,0.4)] hover:-translate-y-1 transition-all duration-400 overflow-hidden"
          >
            <div className="w-14 h-14 bg-[rgba(201,161,90,0.1)] rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-[rgba(201,161,90,0.2)] transition-colors">
              {item.icon}
            </div>
            <div className="text-lg font-black text-soft-white mb-3">
              {item.title}
            </div>
            <div className="text-[13px] text-concrete leading-[1.8]">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
