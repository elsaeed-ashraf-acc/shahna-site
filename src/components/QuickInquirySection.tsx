import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, Calculator, Clock, MapPin } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

interface QuickInquirySectionProps {
  selectedServicePreload?: string;
}

export const QuickInquirySection: React.FC<QuickInquirySectionProps> = ({ selectedServicePreload }) => {
  const emirateList = ['دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'رأس الخيمة', 'الفجيرة', 'أم القيوين', 'العين'];

  const [pickupCity, setPickupCity] = useState('دبي');
  const [deliveryCity, setDeliveryCity] = useState('أبوظبي');
  const [serviceType, setServiceType] = useState(selectedServicePreload || 'مندوب توصيل فوري');
  const [urgency, setUrgency] = useState<'immediate' | 'standard'>('immediate');
  const [packageNotes, setPackageNotes] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedServicePreload) {
      setServiceType(selectedServicePreload);
    }
  }, [selectedServicePreload]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare clean WhatsApp message
    const messageLines = [
      `*طلب استفسار توصيل جديد - ${companyConfig.name}*`,
      `• نوع الخدمة: ${serviceType}`,
      `• مسار التوصيل: من ${pickupCity} إلى ${deliveryCity}`,
      `• توقيت التوصيل: ${urgency === 'immediate' ? 'فوري عاجل (نفس اليوم)' : 'شحن منتظم'}`,
      senderName ? `• اسم العميل: ${senderName}` : '',
      senderPhone ? `• هاتف التواصل: ${senderPhone}` : '',
      packageNotes ? `• تفاصيل الشحنة: ${packageNotes}` : '',
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/${companyConfig.contact.whatsappRaw}?text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 mb-2">
            <Calculator className="w-4 h-4" />
            <span>طلب تسعيرة وتنسيق فوري</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            استفسر عن رحلة أو شحنة في ثوانٍ
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            حدد مسار الشحنة ونوع الخدمة وسنقوم بالرد المباشر عليك مع توفير المندوب الأنسب لموقعك.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm text-right">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                تم تحويل طلبك لتطبيق واتساب بنجاح!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                يقوم فريق التنسيق بمراجعة تفاصيل المسار والرد عليك خلال دقائق معدودة لتأكيد موعد استلام الشحنة وتحديد التكلفة.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  إرسال استفسار آخر
                </button>
                <a
                  href={`tel:${companyConfig.contact.phoneTel}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>اتصال مباشر</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Route Selection: Pickup & Dropoff */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>مدينة / إمارة الاستلام:</span>
                  </label>
                  <select
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    {emirateList.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>مدينة / إمارة التسليم:</span>
                  </label>
                  <select
                    value={deliveryCity}
                    onChange={(e) => setDeliveryCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    {emirateList.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service Type & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    نوع الخدمة المطلوبة:
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    {companyConfig.services.map((svc) => (
                      <option key={svc.id} value={svc.title}>
                        {svc.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>وقت التوصيل المفضل:</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setUrgency('immediate')}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                        urgency === 'immediate'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      فوري عاجل (نفس اليوم)
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('standard')}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                        urgency === 'standard'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      توصيل مجدول / عادي
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Info (Optional for WhatsApp prefill) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    الاسم (اختياري):
                  </label>
                  <input
                    type="text"
                    placeholder="مثال: محمد الشامسي"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    رقم هاتفك للتواصل (اختياري):
                  </label>
                  <input
                    type="tel"
                    placeholder="050xxxxxxx"
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dir-ltr text-right"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  تفاصيل الشحنة أو المنقولات (اختياري):
                </label>
                <textarea
                  rows={2}
                  placeholder="مثال: طرد ملابس، أو أوراق ثبوتية عاجلة، أو 3 ركاب إلى مطار دبي..."
                  value={packageNotes}
                  onChange={(e) => setPackageNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>إرسال تفاصيل الطلب مباشرة عبر واتساب</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
                <span className="block sm:inline-block sm:mr-4 text-xs text-slate-500 mt-2 sm:mt-0">
                  * سيتم فتح محادثة واتساب جاهزة بالإحداثيات المحددة فوراً.
                </span>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
