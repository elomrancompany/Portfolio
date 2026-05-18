"use client";
import { useEffect, useRef } from "react";
import { STATS } from "@/lib/data";

const STAT_ICONS: Record<string, string> = {
  building: `<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>`,
  layers: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>`,
  map: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>`,
  check: `<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
  handshake: `<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>`,
};

export default function Hero() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setInterval>[] = [];

    const startCounters = () => {
      STATS.forEach((stat, i) => {
        const el = counterRefs.current[i];
        if (!el) return;
        const target = stat.value;
        const duration = 2200;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target.toLocaleString("ar-EG");
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current).toLocaleString("ar-EG");
          }
        }, duration / steps);
        timers.push(timer);
      });
    };

    const timeout = setTimeout(startCounters, 800);
    return () => {
      clearTimeout(timeout);
      timers.forEach(clearInterval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(105deg, rgba(7,27,42,0.97) 38%, rgba(7,27,42,0.55) 100%),
            url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85')
          `,
        }}
      />

      {/* Grid overlay */}
      <div className="grid-overlay absolute inset-0" />

      {/* Content */}
      <div
        className="relative z-10 px-[6%] max-w-[700px]"
        style={{ animation: "fadeInUp 1.2s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-[rgba(201,161,90,0.12)] border border-[rgba(201,161,90,0.3)] px-4 py-1.5 rounded-full text-xs font-bold text-gold tracking-widest mb-7"
          style={{
            animation: "fadeInUp 1.2s 0.1s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          <span className="pulse-dot w-1.5 h-1.5 bg-gold rounded-full" />
          شركة العمران للمقاولات العامة — تأسست 2025
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(38px,6vw,72px)] font-black leading-[1.15] text-soft-white mb-3"
          style={{
            animation: "fadeInUp 1.2s 0.2s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          نبني المستقبل
          <br />
          <span className="text-gold">بثقة هندسية</span>
          <br />
          ومعايير تنفيذ عالمية
        </h1>

        {/* Subtitle */}
        <p
          className="text-[clamp(15px,2vw,19px)] text-concrete leading-[1.8] mb-10 max-w-[560px]"
          style={{
            animation: "fadeInUp 1.2s 0.35s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          شريككم الاستراتيجي في المشروعات القومية والبنية التحتية والمقاولات
          العامة.
        </p>

        {/* Buttons */}
        <div
          className="flex gap-4 flex-wrap"
          style={{
            animation: "fadeInUp 1.2s 0.5s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gold hover:bg-gold-light text-navy font-bold text-[15px] px-8 py-3.5 rounded flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,161,90,0.4)]"
          >
            استعرض مشاريعنا
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-transparent text-soft-white border border-white/30 hover:border-gold hover:text-gold font-semibold text-[15px] px-8 py-3.5 rounded flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
          >
            تواصل معنا
          </button>
        </div>
      </div>

      {/* Stat Cards — desktop only */}
      <div
        className="absolute left-[4%] top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col gap-3"
        style={{ animation: "fadeInUp 1.2s 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="stat-card glass-card px-5 py-4 rounded-lg flex items-center gap-3.5 min-w-[210px] relative overflow-hidden border border-[rgba(201,161,90,0.25)]"
          >
            {/* Gold left bar */}
            <div className="absolute top-0 right-0 w-[3px] h-full bg-gold" />
            {/* Icon */}
            <div className="w-9 h-9 bg-[rgba(201,161,90,0.12)] rounded-md flex items-center justify-center flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A15A"
                strokeWidth="1.8"
                className="w-5 h-5"
              >
                <g dangerouslySetInnerHTML={{ __html: STAT_ICONS[stat.icon] }} />
              </svg>
            </div>
            <div>
              <div className="text-[22px] font-black text-soft-white leading-none">
                <span
                  ref={(el) => {
                    counterRefs.current[i] = el;
                  }}
                >
                  0
                </span>
                {stat.suffix}
                {stat.unit && (
                  <span className="text-base ml-1">{stat.unit}</span>
                )}
              </div>
              <div className="text-[11px] text-concrete mt-0.5">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <div className="scroll-line w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
