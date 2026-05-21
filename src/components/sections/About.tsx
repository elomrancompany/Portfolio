"use client";

import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

import Image from "next/image";

const ValueIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "vision":
      return (
        <svg className="w-6 h-6 text-gold mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      );
    case "mission":
      return (
        <svg className="w-6 h-6 text-gold mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
    case "quality":
      return (
        <svg className="w-6 h-6 text-gold mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-navy relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Modern Interactive Image Frame */}
        <ScrollReveal direction="left" className="relative order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group border border-gold/15">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80"
              alt="العمران للمقاولات العامة والإنشاءات الكبرى"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover brightness-[0.70] transition-transform duration-[1000ms] group-hover:scale-105"
            />
            {/* Established Badge */}
            <div className="absolute bottom-6 right-6 bg-navy/90 backdrop-blur-md border border-gold/30 text-gold p-4 rounded-xl text-center shadow-2xl">
              <div className="text-3xl font-black leading-none font-heading">2025</div>
              <div className="text-[10px] font-bold tracking-wide mt-1 text-cream/80">تأسست في مصر</div>
            </div>
            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/40 opacity-70" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/40 opacity-70" />
          </div>
        </ScrollReveal>

        {/* Right Side: Text & Value Cards */}
        <ScrollReveal direction="right" className="order-1 lg:order-2 flex flex-col text-right">
          <div className="text-xs font-bold tracking-[3px] text-gold uppercase mb-3 flex items-center gap-3 justify-start">
            من نحن
            <span className="inline-block w-12 h-0.5 bg-gold-gradient" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white mb-6">
            خبرة ميدانية تصنع
            <br />
            <span className="text-gradient-gold">فرقاً هندسياً حقيقياً</span>
          </h2>
          
          <p className="text-base sm:text-lg text-cream/80 leading-relaxed mb-4">
            تأسست شركة <strong className="text-gold font-bold">العمران للمقاولات العامة</strong> عام 2025 كشركة ذات طموح هندسي ومهني لا يحد، مدفوعة بخبرة ميدانية استثنائية ونخبة فنية صقلت كفاءتها في قلب المشروعات القومية الكبرى بجمهورية مصر العربية.
          </p>
          
          <p className="text-base sm:text-lg text-cream/70 leading-relaxed mb-8">
            منذ انطلاقنا، نجحنا في ترسيخ مكانتنا كمقاول باطن معتمد لدى كبرى شركات المقاولات الفئة الأولى، وتحديداً <strong>شركة كونكورد للهندسة والمقاولات</strong> بمشروع مستقبل مصر القومي، بالإضافة لشراكتنا الاستراتيجية الحالية مع <strong>السعود جروب</strong> بمشروعات الساحل الشمالي الواعدة.
          </p>

          {/* Value Cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { key: "vision", name: "رؤية واضحة" },
              { key: "mission", name: "رسالة قوية" },
              { key: "quality", name: "التزام جاد" },
            ].map((item) => (
              <div
                key={item.key}
                className="p-4 border border-gold/15 bg-navy-mid/10 rounded-xl text-center hover:border-gold/50 hover:bg-navy-mid/25 transition-all duration-300 hover:-translate-y-1.5 shadow-lg group"
              >
                <ValueIcon type={item.key} />
                <span className="text-xs sm:text-sm font-bold text-gold group-hover:text-gold-light">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
