import React from 'react';
import { ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';
import courierImage from '../assets/images/courier_parcel_delivery_1792514605379.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span className="text-amber-600 font-bold">من نحن</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span>نبذة عن الشركة ومميزاتنا</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {companyConfig.about.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            {companyConfig.about.subtitle}
          </p>
        </div>

        {/* Main Content Split: Text & Courier Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] group bg-slate-100">
              <img
                src={courierImage}
                alt="مندوب توصيل محترف يقوم بتسليم طرد في دبي"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 text-right">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>معايير أمان ومناولة احترافية</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  فريقنا مدرب على تسليم الشحنات الحساسة والمستندات الثبوتية بأعلى درجات السرية والحرص.
                </p>
              </div>
            </div>
          </div>

          {/* Text and Core Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-right">
            <p className="text-base text-slate-700 leading-relaxed">
              {companyConfig.about.mainParagraph}
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              {companyConfig.about.secondaryParagraph}
            </p>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {companyConfig.about.coreValues.map((val, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
                >
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{val.title}</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Coverage Emirates Spotlight */}
        <div id="coverage" className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 text-right">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                شبكة الربط الجغرافي
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                نغطي كافة إمارات ومدن الدولة يومياً
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              رحلات يومية منتظمة وتوصيل فوري يربط مراكز الأعمال والمناطق السكنية في كافة الإمارات السبع ومدينة العين.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {companyConfig.coverageEmirates.map((emirate, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100/70 transition-colors text-right"
              >
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{emirate.name}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal">
                  {emirate.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
