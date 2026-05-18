"use client";

export default function About() {
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
        <div className="absolute bottom-7 right-7 bg-gold text-navy p-4 rounded-lg text-center">
          <div className="text-4xl font-black leading-none">2025</div>
          <div className="text-[11px] font-semibold tracking-wide mt-1">تأسست في مصر</div>
        </div>
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
          تأسست شركة العمران للمقاولات العامة عام 2025 كشركة مستقبل وطموح، مدفوعة بخبرة ميدانية عميقة مؤسسوها خلال سنوات من العمل في المشروعات القومية والبنية التحتية الكبرى.
        </p>
        <p className="text-base text-concrete leading-[1.9] mb-8">
          منذ اليوم الأول، أثبتنا جدارتنا كمقاول باطن معتمد لشركة كونكورد — أحد أبرز شركات الفئة الأولى — في المشروع القومي "مستقبل مصر"، ونواصل مسيرتنا مع شراكات مع مجموعة السعود في الساحل الشمالي.
        </p>
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
