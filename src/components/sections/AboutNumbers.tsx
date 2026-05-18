"use client";
// Partners
export function Partners() {
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

// About
export function About() {
  return (
    <section
      id="about"
      className="section-padding bg-navy grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
    >
      {/* Image */}
      <div className="relative rounded-lg overflow-hidden aspect-[4/5] group order-2 lg:order-1">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85"
          alt="EL OMRAN Construction"
          className="w-full h-full object-cover brightness-[0.75] transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {/* Year badge */}
        <div className="absolute bottom-7 right-7 bg-gold text-navy p-4 rounded-lg text-center">
          <div className="text-4xl font-black leading-none">2025</div>
          <div className="text-[11px] font-semibold tracking-wide mt-1">
            تأسست في مصر
          </div>
        </div>
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold opacity-60" />
      </div>

      {/* Content */}
      <div className="order-1 lg:order-2">
        <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-4 flex items-center gap-3">
          من نحن
          <span className="inline-block w-14 h-px bg-gold" />
        </div>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.2] text-soft-white mb-5">
          خبرة ميدانية تصنع
          <br />
          <span className="text-gold">فرقاً حقيقياً</span>
        </h2>
        <p className="text-base text-concrete leading-[1.9] mb-4">
          تأسست شركة العمران للمقاولات العامة عام 2025 كشركة مستقبل وطموح،
          مدفوعة بخبرة ميدانية عميقة مؤسسوها خلال سنوات من العمل في المشروعات
          القومية والبنية التحتية الكبرى.
        </p>
        <p className="text-base text-concrete leading-[1.9] mb-8">
          منذ اليوم الأول، أثبتنا جدارتنا كمقاول باطن معتمد لشركة كونكورد —
          أحد أبرز شركات الفئة الأولى — في المشروع القومي "مستقبل مصر"،
          ونواصل مسيرتنا مع شراكات مع مجموعة السعود في الساحل الشمالي.
        </p>

        {/* Values */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: "🎯", name: "رؤية واضحة" },
            { icon: "⚡", name: "رسالة قوية" },
            { icon: "🤝", name: "التزام وجودة" },
          ].map((v) => (
            <div
              key={v.name}
              className="p-4 border border-[rgba(201,161,90,0.2)] rounded-lg text-center hover:border-gold hover:bg-[rgba(201,161,90,0.06)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl mb-2">{v.icon}</div>
              <div className="text-sm font-bold text-gold">{v.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Numbers
export function Numbers() {
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
            className="py-12 px-8 bg-navy/50 hover:bg-[rgba(201,161,90,0.05)] transition-colors border-l border-[rgba(201,161,90,0.1)] first:border-l-0 group"
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
