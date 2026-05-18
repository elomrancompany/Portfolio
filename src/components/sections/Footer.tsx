"use client";
import Logo from "@/components/ui/Logo";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-[rgba(201,161,90,0.15)] pt-16 pb-8 px-[6%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo />
          <p className="text-sm text-concrete leading-[1.9] mt-5 max-w-[280px]">
            شريككم الاستراتيجي في تنفيذ المشروعات القومية والبنية التحتية والمقاولات العامة بأعلى معايير الجودة والكفاءة.
          </p>
          <div className="flex gap-3 mt-6">
            {["in", "f", "ig", "yt"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 border border-[rgba(201,161,90,0.2)] rounded-lg flex items-center justify-center text-concrete hover:border-gold hover:text-gold hover:bg-[rgba(201,161,90,0.08)] transition-all duration-300 text-xs font-bold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div className="text-sm font-black text-soft-white mb-5 pb-3 border-b border-[rgba(201,161,90,0.15)] relative">
            روابط سريعة
            <span className="absolute bottom-0 right-0 w-7 h-0.5 bg-gold" />
          </div>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() =>
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-concrete hover:text-gold transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className="text-sm font-black text-soft-white mb-5 pb-3 border-b border-[rgba(201,161,90,0.15)] relative">
            خدماتنا
            <span className="absolute bottom-0 right-0 w-7 h-0.5 bg-gold" />
          </div>
          <ul className="space-y-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a href="#" className="text-sm text-concrete hover:text-gold transition-colors">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-sm font-black text-soft-white mb-5 pb-3 border-b border-[rgba(201,161,90,0.15)] relative">
            معلومات التواصل
            <span className="absolute bottom-0 right-0 w-7 h-0.5 bg-gold" />
          </div>
          <div className="space-y-3 mb-6">
            {[
              { icon: "📍", text: SITE.address },
              { icon: "📞", text: SITE.phone },
              { icon: "✉️", text: SITE.email },
              { icon: "🌐", text: SITE.website },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-concrete">
                <span>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="text-sm font-black text-soft-white mb-3">
            اشترك في نشرتنا
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 bg-[rgba(201,161,90,0.05)] border border-[rgba(201,161,90,0.2)] focus:border-gold rounded-lg px-3 py-2.5 text-soft-white text-xs outline-none transition-colors placeholder:text-[#7A8494] font-cairo"
            />
            <button className="bg-gold hover:bg-gold-light text-navy font-bold text-xs px-4 py-2.5 rounded-lg transition-colors">
              إرسال
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(201,161,90,0.1)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#7A8494]">
          © 2025 شركة العمران للمقاولات العامة. جميع الحقوق محفوظة.
        </p>
        <p className="text-xs text-[#7A8494]">EL OMRAN General Contracting — EST. 2025 — Cairo, Egypt</p>
      </div>
    </footer>
  );
}
