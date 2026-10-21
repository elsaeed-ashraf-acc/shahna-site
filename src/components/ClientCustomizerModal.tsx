import React, { useState } from 'react';
import { Settings, X, Check, Copy, FileText, Phone, MessageSquare, Palette } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export const ClientCustomizerModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const sampleSnippet = `// في ملف src/data/companyConfig.ts
export const companyConfig = {
  name: "اسم شركتك الجديد",
  englishName: "Your Company Express UAE",
  slogan: "شعارك التسويقي هنا",
  contact: {
    whatsappRaw: "971501234567", // رقم الواتساب بدون +
    phoneDisplay: "+971 50 123 4567", // الرقم المعروض
    phoneTel: "+971501234567",
    email: "info@yourdomain.ae",
    workingHours: "يومياً من 8:00 ص حتى 11:00 م",
  },
  ...
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <>
      {/* Floating customizer button in bottom-right */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/90 hover:bg-slate-900 text-white text-[11px] font-semibold rounded-lg shadow-md border border-slate-700 backdrop-blur-sm transition-all hover:scale-105 cursor-pointer"
        >
          <Settings className="w-3.5 h-3.5 text-amber-400" />
          <span>تخصيص الهوية والأرقام</span>
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 text-right">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <Palette className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    دليل تخصيص الهوية وبيانات التواصل للعميل
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    الموقع مصمم بهيكلية مركزية لسهولة التعديل السريع
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5 text-xs text-slate-700 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950">
                <p className="font-bold mb-1">بيانات الهوية الحالية المعتمدة:</p>
                <p>
                  اسم البراند الحالي: <span className="font-bold text-slate-900">{companyConfig.name}</span> | رقم الهاتف والواتساب: <span className="font-mono dir-ltr inline-block font-bold text-slate-900">{companyConfig.contact.phoneDisplay}</span>. يمكنك في أي وقت تعديل أو إضافة أي بيانات جديدة من ملف الإعدادات المركزي بكل سلاسة.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>الملف المركزي لتعديل البيانات:</span>
                </h4>
                <div className="p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-[11px] dir-ltr text-left relative overflow-x-auto">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-800 text-slate-400">
                    <span>src/data/companyConfig.ts</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="flex items-center gap-1 text-[10px] text-amber-400 hover:text-amber-300"
                    >
                      {copiedSnippet ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedSnippet ? 'تم النسخ' : 'نسخ الكود'}</span>
                    </button>
                  </div>
                  <pre className="text-emerald-300">{sampleSnippet}</pre>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                  <span className="font-bold text-slate-900 block mb-1 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>تغيير رقم الواتساب:</span>
                  </span>
                  <span>عدّل الحقل <code className="font-mono text-slate-800 bg-white px-1 py-0.5 rounded border border-slate-200">whatsappRaw</code> بالرقم الدولي الجديد مباشرة (مثال: 971501234567).</span>
                </div>

                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                  <span className="font-bold text-slate-900 block mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-900" />
                    <span>تغيير رقم الاتصال المباشر:</span>
                  </span>
                  <span>عدّل الحقلين <code className="font-mono text-slate-800 bg-white px-1 py-0.5 rounded border border-slate-200">phoneDisplay</code> و <code className="font-mono text-slate-800 bg-white px-1 py-0.5 rounded border border-slate-200">phoneTel</code> لتحديث كافة أزرار الاتصال بالموقع.</span>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                <span className="font-bold text-slate-900 block mb-1">
                  الرفع على GitHub و Vercel:
                </span>
                <span>المشروع مجهز كـ Vite SPA قياسي ونظيف بدون خوادم معقدة، جاهز للرفع على GitHub وتوصيله بـ Vercel بضغطة زر وتفعيل SSL والدومين الخاص بك في دقائق.</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 text-xs font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
              >
                إغلاق
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
