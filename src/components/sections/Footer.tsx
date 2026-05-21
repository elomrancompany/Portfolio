"use client";
import Logo from "@/components/ui/Logo";
import SocialIcons from "@/components/ui/SocialIcons";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/15 pt-10 md:pt-16 pb-6 md:pb-8 px-4 md:px-6 lg:px-[6%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo />
          <p className="text-xs md:text-sm text-cream/70 leading-[1.9] mt-4 md:mt-5 max-w-[280px]">
            شريككم الاستراتيجي في تنفيذ المشروعات القومية والبنية التحتية والمقاولات العامة بأعلى معايير الجودة والكفاءة.
          </p>
          <SocialIcons
            className="flex gap-2 md:gap-3 mt-5 md:mt-6"
            iconClassName="w-8 md:w-9 h-8 md:h-9 border border-gold/20 rounded-lg flex items-center justify-center text-cream/70 hover:border-gold hover:text-gold hover:bg-gold/8 transition-all duration-300"
          />
        </div>

        {/* Quick links */}
        <div>
          <div className="text-xs md:text-sm font-black text-white mb-4 md:mb-5 pb-2 md:pb-3 border-b border-gold/15 relative">
            روابط سريعة
            <span className="absolute bottom-0 right-0 w-5 md:w-7 h-0.5 bg-gold" />
          </div>
          <ul className="space-y-2 md:space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() =>
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-xs md:text-sm text-cream/70 hover:text-gold transition-colors text-right"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className="text-xs md:text-sm font-black text-white mb-4 md:mb-5 pb-2 md:pb-3 border-b border-gold/15 relative">
            خدماتنا
            <span className="absolute bottom-0 right-0 w-5 md:w-7 h-0.5 bg-gold" />
          </div>
          <ul className="space-y-2 md:space-y-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a href="#services" className="text-xs md:text-sm text-cream/70 hover:text-gold transition-colors">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs md:text-sm font-black text-white mb-4 md:mb-5 pb-2 md:pb-3 border-b border-gold/15 relative">
            معلومات التواصل
            <span className="absolute bottom-0 right-0 w-5 md:w-7 h-0.5 bg-gold" />
          </div>
          <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
            {[
              { icon: "📍", text: SITE.address },
              { icon: "📞", text: SITE.phoneFormatted || SITE.phone },
              { icon: "✉️", text: SITE.email },
              { icon: "🌐", text: SITE.website },
            ].map((item) => (
              <div key={item.text} className="flex items-start md:items-center gap-2 text-xs md:text-sm text-cream/70">
                <span className="flex-shrink-0 text-gold">{item.icon}</span>
                <span className="line-clamp-2">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="text-xs md:text-sm font-black text-white mb-2 md:mb-3">
            اشترك في نشرتنا
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 bg-[rgba(196,154,90,0.05)] border border-gold/20 focus:border-gold rounded-lg px-2 md:px-3 py-2 md:py-2.5 text-cream text-xs outline-none transition-colors placeholder:text-cream/40"
            />
            <button className="bg-gold hover:bg-gold-light text-navy font-bold text-xs px-3 md:px-4 py-2 md:py-2.5 rounded-lg transition-colors whitespace-nowrap">
              إرسال
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10 pt-4 md:pt-6 flex flex-col gap-3 sm:flex-row items-center justify-between text-center sm:text-right">
        <p className="text-xs text-cream/40 order-2 sm:order-1">
          © {new Date().getFullYear()} شركة العمران للمقاولات العامة. جميع الحقوق محفوظة.
        </p>
        <p className="text-xs text-cream/40 order-1 sm:order-2">EL OMRAN General Contracting — EST. 2025</p>
      </div>
    </footer>
  );
}
