"use client";

export default function Numbers() {
  return (
    <section id="numbers" className="section-padding bg-graphite text-center">
      <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-4">
        إنجازاتنا بالأرقام
      </div>
      <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.2] text-soft-white">
        أرقام تتحدث
        <br />
        <span className="text-gold">عن حجم إنجازاتنا</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 border border-[rgba(201,161,90,0.15)] rounded-lg overflow-hidden mt-14">
        {[
          { val: "+22,000", unit: "م²", label: "إجمالي مساحات منفذة" },
          { val: "+180", unit: "", label: "قاعدة خرسانية منفذة" },
          { val: "400K", unit: "", label: "فدان استصلاح زراعي" },
          { val: "+4", unit: "", label: "مشاريع منجزة ونشطة" },
        ].map((item, i) => (
          <div
            key={i}
            className="py-12 px-8 bg-navy/50 hover:bg-[rgba(201,161,90,0.05)] transition-colors border-l border-[rgba(201,161,90,0.1)] first:border-l-0"
          >
            <div className="text-[clamp(36px,5vw,64px)] font-black text-gold leading-none">
              {item.val}
              {item.unit && (
                <span className="text-xl text-gold-dark mr-1">{item.unit}</span>
              )}
            </div>
            <div className="w-8 h-0.5 bg-gold mx-auto my-3" />
            <div className="text-sm text-concrete font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
