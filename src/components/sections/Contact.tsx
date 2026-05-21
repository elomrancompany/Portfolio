"use client";
import { useState, useCallback } from "react";
import { SITE } from "@/lib/data";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!/^(\+?20)?1[0-9]{9}$/.test(form.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "رقم الهاتف غير صحيح";
    }
    if (!form.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }
    if (!form.projectType.trim()) {
      newErrors.projectType = "نوع المشروع مطلوب";
    }
    if (!form.message.trim()) {
      newErrors.message = "التفاصيل مطلوبة";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "يجب أن تكون التفاصيل على الأقل 10 أحرف";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = useCallback(async () => {
    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    try {
      const msg = `📋 استفسار جديد من الموقع\n\n👤 الاسم: ${form.name}\n📞 الهاتف: ${form.phone}\n✉️ البريد: ${form.email}\n🏗️ نوع المشروع: ${form.projectType}\n📝 التفاصيل:\n${form.message}`;
      
      window.open(
        `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
      
      setForm({
        name: "",
        phone: "",
        email: "",
        projectType: "",
        message: "",
      });
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }, [form, validateForm]);

  return (
    <section
      id="contact"
      className="section-padding bg-navy relative overflow-hidden border-t border-gold/10"
    >
      {/* Background watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[200px] font-black text-[rgba(196,154,90,0.015)] whitespace-nowrap pointer-events-none select-none"
        aria-hidden
      >
        تواصل
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <SectionHeader
          label="تواصل معنا"
          title="لنبدأ مشروعك القادم بثقة"
          subtitle="فريقنا الاستشاري والهندسي جاهز لتحويل رؤيتك إلى واقع ملموس وبأعلى معايير الدقة والسرعة."
          align="center"
          className="w-full text-center"
        />

        <div className="w-full max-w-2xl">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="glass-card-premium p-8 md:p-12 text-right shadow-deep">
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-300 font-semibold text-center">✓ تم إرسال الرسالة بنجاح! سيتواصل معك فريقنا قريباً.</p>
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-300 font-semibold text-center">✗ يرجى التحقق من البيانات المدخلة واستكمال الحقول المطلوبة.</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="الاسم الكامل"
                    className={`form-input ${errors.name ? "error" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 mr-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="رقم الهاتف (مثال: 01153895074)"
                    className={`form-input ${errors.phone ? "error" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1 mr-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="البريد الإلكتروني"
                    type="email"
                    className={`form-input ${errors.email ? "error" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 mr-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    placeholder="نوع المشروع"
                    className={`form-input ${errors.projectType ? "error" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.projectType && (
                    <p className="text-red-400 text-xs mt-1 mr-1">{errors.projectType}</p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="تفاصيل المشروع والمتطلبات... (10 أحرف على الأقل)"
                  rows={4}
                  className={`form-input resize-none mb-4 ${errors.message ? "error" : ""}`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mb-4 mr-1">{errors.message}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn-gold w-full py-4 text-base rounded-xl flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "جاري الإرسال..."
                ) : (
                  <>
                    <span>إرسال طلب عرض السعر عبر واتساب</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.402.002 9.795-4.378 9.798-9.767.001-2.61-1.01-5.063-2.848-6.903-1.838-1.84-4.293-2.853-6.913-2.854-5.403 0-9.799 4.38-9.802 9.77-.001 1.969.49 3.882 1.425 5.568L1.898 22l5.749-1.507c1.785.974 3.493 1.341 5.011 1.341z" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact info cards */}
        <div className="flex justify-center gap-8 mt-12 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-cream/70 hover:text-gold transition-colors duration-300">
            <MapPin className="w-4 h-4 text-gold" />
            <span>{SITE.address}</span>
          </div>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-cream/70 hover:text-gold transition-colors duration-300"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span dir="ltr">{SITE.phoneFormatted || SITE.phone}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 text-sm text-cream/70 hover:text-gold transition-colors duration-300"
          >
            <Mail className="w-4 h-4 text-gold" />
            <span>{SITE.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
