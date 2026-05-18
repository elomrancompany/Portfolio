"use client";

export default function Partners() {
  return (
    <section id="partners" className="py-14 px-[6%] bg-graphite border-y border-[rgba(201,161,90,0.15)]">
      <div className="flex items-center justify-center gap-16 md:gap-24 flex-wrap">
        <div className="text-xs font-bold text-gold tracking-[3px] uppercase">
          شركاء النجاح
        </div>
        <div className="w-px h-12 bg-[rgba(201,161,90,0.2)]" />
        {[
          { name: "CONCORD", sub: "Contracting & Engineering" },
          { name: "AL SAUD", sub: "Group" },
        ].map((p) => (
          <div
            key={p.name}
            className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-default group"
          >
            <div className="text-2xl font-black tracking-widest text-soft-white group-hover:text-gold transition-colors">
              {p.name}
            </div>
            <div className="text-[10px] tracking-[1.5px] text-gold uppercase">
              {p.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
