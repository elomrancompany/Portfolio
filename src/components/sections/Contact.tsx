"use client";
import { useState } from "react";
import { SITE } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", projectType: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const msg = `مرحباً، أود الاستفسار عن مشروع جديد.%0اسمي: ${form.name}%0رقم الهاتف: ${form.phone}%0نوع المشروع: ${form.projectType}%0التفاصيل: ${form.message}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-graphite text-center relative overflow-hidden">
      {/* Background watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-black text-[rgba(201,161,90,0.025)] whitespace-nowrap pointer-events-none select-none"
        aria-hidden
      >
        CONTACT
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-[11px] font-bold tracking-[3px] text-gold uppercase mb-4">
          تواصل معنا
        </div>
        <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.2] text-soft-white mb-4">
          لنبدأ مشروعك
          <br />
          <span className="text-gold">القادم بثقة</span>
        </h2>
        <p className="text-base text-concrete">
          فريقنا جاهز لتحويل رؤيتك إلى مشروع ناجح. تواصل معنا الآن.
        </p>

        <div className="glass-card border border-[rgba(201,161,90,0.2)] rounded-xl p-8 md:p-14 mt-10 text-right">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="الاسم الكامل"
              className="w-full bg-[rgba(201,161,90,0.05)] border border-[rgba(201,161,90,0.2)] focus:border-gold rounded-lg px-4 py-3.5 text-soft-white text-sm outline-none transition-colors placeholder:text-[#7A8494] font-cairo"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="رقم الهاتف"
              className="w-full bg-[rgba(201,161,90,0.05)] border border-[rgba(201,161,90,0.2)] focus:border-gold rounded-lg px-4 py-3.5 text-soft-white text-sm outline-none transition-colors placeholder:text-[#7A8494] font-cairo"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="البريد الإلكتروني"
              className="w-full bg-[rgba(201,161,90,0.05)] border border-[rgba(201,161,90,0.2)] focus:border-gold rounded-lg px-4 py-3.5 text-soft-white text-sm outline-none transition-colors placeholder:text-[#7A8494] font-cairo"
            />
            <input
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              placeholder="نوع المشروع"
              className="w-full bg-[rgba(201,161,90,0.05)] border border-[rgba(201,161,90,0.2)] focus:border-gold rounded-lg px-4 py-3.5 text-soft-white text-sm outline-none transition-colors placeholder:text-[#7A8494] font-cairo"
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="تفاصيل المشروع والمتطلبات..."
            rows={4}
            className="w-full bg-[rgba(201,161,90,0.05)] border border-[rgba(201,161,90,0.2)] focus:border-gold rounded-lg px-4 py-3.5 text-soft-white text-sm outline-none transition-colors placeholder:text-[#7A8494] font-cairo resize-none mb-4"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-gold hover:bg-gold-light text-navy font-black text-base py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,161,90,0.4)]"
          >
            إرسال طلب عرض السعر عبر واتساب
          </button>
        </div>

        {/* Contact info */}
        <div className="flex justify-center gap-8 mt-12 flex-wrap">
          {[
            { icon: "📍", text: SITE.address },
            { icon: "📞", text: SITE.phone },
            { icon: "✉️", text: SITE.email },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-concrete">
              <span className="text-lg">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
