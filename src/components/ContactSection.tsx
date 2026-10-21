import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, Clock, MapPin, Copy, Check, Send } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formSubject, setFormSubject] = useState('استفسار عن خدمة توصيل');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(companyConfig.contact.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with message text
    const text = [
      `*رسالة استفسار جديدة من موقع ${companyConfig.name}*`,
      `• الاسم: ${formName || 'غير محدد'}`,
      `• رقم الهاتف: ${formPhone || 'غير محدد'}`,
      `• الموضوع: ${formSubject}`,
      `• نص الرسالة: ${formMessage}`,
    ].join('\n');

    const waUrl = `https://wa.me/${companyConfig.contact.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-amber-600 font-bold">اتصل بنا</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>تواصل مباشر وسريع</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            تواصل معنا لطلب مندوب أو حجز شحنتك فوراً
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            فريق خدمة العملاء ومنسقو الرحلات متواجدون للرد على استفساراتكم وتأكيد طلبات التوصيل والنقل في أسرع وقت.
          </p>
        </div>

        {/* 2-Column Grid: Contact Cards & Quick Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Action Contact Cards */}
          <div className="lg:col-span-5 space-y-4 text-right">
            
            {/* Primary Action 1: WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-sm mb-1.5">
                  <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>تواصل فوري عبر الواتساب</span>
                </div>
                <p className="text-xs text-emerald-950/80 leading-relaxed mb-4">
                  أسرع طريقة لطلب مندوب وتحديد المواقع وإرسال تفاصيل الطرد.
                </p>
              </div>

              <a
                href={`https://wa.me/${companyConfig.contact.whatsappRaw}?text=${encodeURIComponent('مرحباً، أود حجز خدمة توصيل.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>بدء محادثة واتساب الآن</span>
              </a>
            </div>

            {/* Primary Action 2: Phone Direct Call Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                    <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>الاتصال الهاتفي المباشر</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-2 py-1 rounded-md"
                    title="نسخ الرقم"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">تم النسخ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-500" />
                        <span>نسخ الرقم</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-2 mb-4">
                  <span className="text-xl font-mono font-extrabold text-slate-900 dir-ltr inline-block">
                    {companyConfig.contact.phoneDisplay}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    متاح للاتصالات السريعة وحالات الطوارئ طوال أوقات العمل.
                  </p>
                </div>
              </div>

              <a
                href={`tel:${companyConfig.contact.phoneTel}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>اتصال بالرقم مباشرة</span>
              </a>
            </div>

            {/* Additional info tiles */}
            <div className="p-5 rounded-xl border border-slate-200/90 bg-white space-y-3.5 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">ساعات العمل والتنسيق:</span>
                  <span className="text-slate-600">{companyConfig.contact.workingHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">البريد الإلكتروني:</span>
                  <a href={`mailto:${companyConfig.contact.email}`} className="text-slate-600 hover:underline dir-ltr inline-block">
                    {companyConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">المقر ومناطق التوزيع:</span>
                  <span className="text-slate-600">{companyConfig.contact.fullAddress}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-right">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                أرسل لنا استفسارك أو تفاصيل شحنتك
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                املأ النموذج التالي وسيتم تحويل رسالتك إلى فريق خدمة العملاء على الفور.
              </p>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    تم إرسال رسالتك بنجاح!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    شكراً لتواصلك معنا. سيقوم منسق العمليات بالرد عليك في غضون دقائق معدودة.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormMessage('');
                    }}
                    className="mt-2 text-xs font-semibold text-slate-700 underline"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        الاسم الكامل:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="الاسم الكريم"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        رقم الهاتف / واتساب:
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="050xxxxxxx"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dir-ltr text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      موضوع الطلب:
                    </label>
                    <select
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    >
                      <option value="طلب مندوب توصيل فوري">طلب مندوب توصيل فوري</option>
                      <option value="شحن بضائع أو طرود بين الإمارات">شحن بضائع أو طرود بين الإمارات</option>
                      <option value="نقل وتوصيل أفراد بين المدن">نقل وتوصيل أفراد بين المدن</option>
                      <option value="خدمات لوجستية للمتاجر والشركات">خدمات لوجستية للمتاجر والشركات</option>
                      <option value="استفسار عام أو أسعار">استفسار عام أو أسعار</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      تفاصيل الشحنة أو الاستفسار:
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="اكتب مكان الاستلام، مكان التسليم، وأي متطلبات خاصة..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>إرسال الاستفسار وتأكيد الموعد</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
