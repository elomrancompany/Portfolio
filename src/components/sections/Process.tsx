"use client";
import { PROCESS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="section-padding bg-graphite text-center">
      <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-4">
        منهجية العمل
      </div>
      <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.2] text-soft-white mb-20">
        خطواتنا نحو
        <br />
        <span className="text-gold">التميز والتسليم</span>
      </h2>

      {/* Desktop horizontal timeline */}
      <div className="hidden lg:flex items-start justify-center relative">
        {/* Connector line */}
        <div className="absolute top-[35px] right-[10%] left-[10%] h-px bg-gradient-to-l from-transparent via-gold to-transparent" />

        {PROCESS.map((step, i) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center gap-4 relative group"
          >
            <div className="w-[70px] h-[70px] bg-graphite border-2 border-gold rounded-full flex items-center justify-center text-[22px] font-black text-gold relative z-10 transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110">
              {step.step}
            </div>
            <div className="text-[15px] font-bold text-soft-white">{step.title}</div>
            <div className="text-xs text-concrete max-w-[130px] leading-[1.7]">{step.desc}</div>
          </div>
        ))}
      </div>

      {/* Mobile vertical */}
      <div className="lg:hidden flex flex-col items-center gap-8 relative">
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent right-1/2" />
        {PROCESS.map((step, i) => (
          <div key={i} className="flex items-start gap-5 text-right w-full max-w-[400px]">
            <div className="flex-1">
              <div className="text-[15px] font-bold text-soft-white">{step.title}</div>
              <div className="text-xs text-concrete leading-[1.7] mt-1">{step.desc}</div>
            </div>
            <div className="w-12 h-12 bg-graphite border-2 border-gold rounded-full flex items-center justify-center text-base font-black text-gold flex-shrink-0 relative z-10">
              {step.step}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
