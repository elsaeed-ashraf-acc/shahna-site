import React from 'react';
import { Zap, Truck, Users, Store, ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { companyConfig, ServiceItem } from '../data/companyConfig';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (type: ServiceItem['icon']) => {
    switch (type) {
      case 'zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'truck':
        return <Truck className="w-5 h-5 text-emerald-500" />;
      case 'users':
        return <Users className="w-5 h-5 text-blue-500" />;
      case 'store':
        return <Store className="w-5 h-5 text-purple-500" />;
      default:
        return <Truck className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-right">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              <span className="text-amber-600 font-bold">خدماتنا اللوجستية</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>حلول تلبي كافة الاحتياجات</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              خدمات توصيل وشحن متخصصة للأفراد والشركات
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-lg leading-relaxed">
            نقدم باقة شاملة من خدمات النقل السريع والتوصيل المباشر داخل الدولة وفق أعلى معايير الجودة والالتزام بالمواعيد.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {companyConfig.services.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all text-right group"
            >
              <div>
                {/* Service Header: Icon & Editorial Index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-amber-700 mb-4">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                  {service.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${companyConfig.contact.whatsappRaw}?text=${encodeURIComponent(`مرحباً، أود حجز خدمة: ${service.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors py-1"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                  <span>طلب الخدمة عبر واتساب</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#inquiry"
                  onClick={() => onSelectService?.(service.title)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-800 underline underline-offset-4"
                >
                  حساب التكلفة
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
