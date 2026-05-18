"use client";

export default function Quality() {
  return (
    <section
      id="quality"
      className="section-padding bg-navy grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
    >
      {/* Content */}
      <div>
        <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-4 flex items-center gap-3">
          الجودة والسلامة
          <span className="inline-block w-14 h-px bg-gold" />
        </div>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.2] text-soft-white mb-5">
          معايير عالمية
          <br />
          <span className="text-gold">في كل مشروع</span>
        </h2>
        <p className="text-base text-concrete leading-[1.9] mb-8">
          نلتزم بأعلى معايير الجودة والسلامة المهنية في جميع مراحل تنفيذ مشاريعنا، وفق أفضل الممارسات الدولية في مجال البناء والبنية التحتية.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "معايير السلامة المهنية", sub: "HSE International Standards" },
            { title: "مراقبة الجودة المستمرة", sub: "Quality Control Systems" },
            { title: "فريق إشراف هندسي", sub: "Engineering Supervision" },
            { title: "توثيق شامل للمشاريع", sub: "Full Project Documentation" },
            { title: "تدريب مستمر للكوادر", sub: "Continuous Team Training" },
            { title: "تقارير دورية للعملاء", sub: "Regular Client Reporting" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 border border-[rgba(201,161,90,0.15)] rounded-lg hover:border-gold hover:bg-[rgba(201,161,90,0.04)] transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-1.5" />
              <div>
                <div className="text-sm font-bold text-soft-white">{item.title}</div>
                <div className="text-[11px] text-concrete mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual */}
      <div className="relative rounded-lg overflow-hidden aspect-square group">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85"
          alt="Quality & Safety"
          className="w-full h-full object-cover brightness-[0.65] transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Completion badge */}
        <div className="absolute top-7 left-7 glass-card px-5 py-4 rounded-lg border border-[rgba(201,161,90,0.3)]">
          <div className="text-[10px] font-bold text-gold tracking-widest uppercase">معدل الإتمام</div>
          <div className="text-4xl font-black text-soft-white mt-1">100%</div>
        </div>
        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold opacity-50" />
      </div>
    </section>
  );
}
