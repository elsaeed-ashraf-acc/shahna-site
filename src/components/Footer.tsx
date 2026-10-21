import React from 'react';
import { Shield, Phone, MessageSquare, Mail, MapPin } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-right">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold">
                <Shield className="w-5 h-5 text-slate-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">
                  {companyConfig.name}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {companyConfig.englishName}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {companyConfig.slogan}. نوفر حلول شحن وتوصيل فوري ونقل أفراد بين كافة إمارات الدولة بأعلى معايير الأمان والسرعة.
            </p>

            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{companyConfig.contact.fullAddress}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              أقسام الموقع
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">من نحن والأسطول</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">خدماتنا اللوجستية</a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-white transition-colors">تغطية إمارات الدولة</a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-white transition-colors">استفسار تسعيرة فوري</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">الأسئلة الشائعة</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">اتصل بنا</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              التواصل السريع
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={`tel:${companyConfig.contact.phoneTel}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="dir-ltr">{companyConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${companyConfig.contact.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>محادثة واتساب مباشرة</span>
              </a>

              <a
                href={`mailto:${companyConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="dir-ltr">{companyConfig.contact.email}</span>
              </a>
            </div>

            <div className="pt-3">
              <span className="inline-block text-[11px] text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded">
                أوقات العمل: {companyConfig.contact.workingHours}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Editable note for client */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-right">
          <p>
            © {currentYear} {companyConfig.name}. جميع الحقوق محفوظة في دولة الإمارات العربية المتحدة.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>موقع تعريفي مهيأ بالكامل للنشر والربط مع الدومين الجديد</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
