"use client";

import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "react-countup";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Quality() {
  const { ref: badgeRef, inView: badgeInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="quality"
      className="section-padding bg-navy relative overflow-hidden border-t border-gold/10"
    >
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Quality metrics and specs */}
        <ScrollReveal direction="right" className="flex flex-col text-right">
          <div className="text-xs font-bold tracking-[3px] text-gold uppercase mb-3 flex items-center gap-3 justify-start">
            الجودة والسلامة المهنية
            <span className="inline-block w-12 h-0.5 bg-gold-gradient" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white mb-6">
            معايير جودة صارمة
            <br />
            <span className="text-gradient-gold">وبيئة عمل آمنة</span>
          </h2>
          
          <p className="text-base sm:text-lg text-cream/80 leading-relaxed mb-8">
            تأتي سلامة كوادرنا وجودة تنفيذ مشروعاتنا في مقدمة أولوياتنا الميدانية. نلتزم بتطبيق المعايير المحلية والدولية للصحة والسلامة المهنية (HSE) ومراقبة الجودة بكافة المواقع.
          </p>

          {/* Quality Grid list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "معايير السلامة المهنية", sub: "HSE International Standards" },
              { title: "مراقبة الجودة المستمرة", sub: "Continuous Quality Control" },
              { title: "فريق هندسي متخصص", sub: "Certified Technical Teams" },
              { title: "خامات ومواد معتمدة", sub: "Approved Standard Materials" },
              { title: "توثيق شامل وميداني", sub: "Full Engineering Documentation" },
              { title: "تقارير تشغيل دورية", sub: "Regular Operational Reports" },
            ].map((item, i) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 border border-gold/15 bg-navy-mid/5 rounded-xl hover:border-gold/50 hover:bg-navy-mid/20 transition-all duration-300 group"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-gold mt-2 group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                <div className="flex flex-col text-right">
                  <span className="text-sm font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-cream/50 mt-0.5 font-semibold">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right Column: Visual Showcase Frame */}
        <ScrollReveal direction="left" className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-square group border border-gold/15 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="معايير السلامة والجودة بموقع العمران للمقاولات"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover brightness-[0.60] transition-transform duration-[1000ms] group-hover:scale-105"
            />
            
            {/* Completion Animated Badge */}
            <div
              ref={badgeRef}
              className="absolute top-6 left-6 bg-navy/90 backdrop-blur-md px-6 py-4 rounded-xl border border-gold/30 shadow-2xl text-center"
            >
              <span className="text-[10px] font-bold text-gold tracking-wider uppercase block">
                التزامنا بالسلامة
              </span>
              <span className="text-4xl font-black text-white mt-1 block font-heading">
                {badgeInView ? <CountUp end={100} duration={2} /> : "0"}%
              </span>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40 opacity-70" />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
