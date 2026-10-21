import React from 'react';
import { Phone, MessageSquare, ArrowDown, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

// Import high-fidelity generated hero asset
import heroImage from '../assets/images/hero_logistics_uae_1792514604908.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Split: Editorial & Media */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Primary Text Column (RTL Right) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Clean unboxed category kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              <span className="text-amber-600 font-bold">خدمات لوجستية معتمدة</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>تغطية شاملة للإمارات السبع</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>تسليم فوري من الباب للباب</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.25] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
              توصيل فوري وشحن آمن يربط مدن الإمارات بدقة واحترافية
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              نوفر خدمات المندوب الفوري، شحن البضائع والطرود بين كافة إمارات الدولة، ونقل الركاب والأفراد بين المدن بأسطول حديث وفريق عمل متمرس يضمن وصول شحنتك في موعدها المحدد وبأعلى معايير الأمان.
            </p>

            {/* CTAs Action Cluster */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              {/* WhatsApp Primary */}
              <a
                href={`https://wa.me/${companyConfig.contact.whatsappRaw}?text=${encodeURIComponent('مرحباً، أود حجز مندوب توصيل فوري.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm hover:shadow whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>طلب مندوب عبر واتساب</span>
              </a>

              {/* Direct Phone Call */}
              <a
                href={`tel:${companyConfig.contact.phoneTel}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all shadow-xs whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-slate-700" />
                <span>اتصال مباشر: {companyConfig.contact.phoneDisplay}</span>
              </a>

              {/* Scroll to Inquiry Form */}
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                <span>استفسار تسعيرة سريع</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Trust bullet markers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 pt-6 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>استلام وتسليم في نفس اليوم داخل الدولة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>أسطول وسائقون ذوو دراية بكافة شوارع الإمارات</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>خدمة مخصصة للأفراد والشركات والمتاجر الإلكترونية</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>أمان كامل للمستندات والطرود والمنقولات الثمينة</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100 aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] group">
              <img
                src={heroImage}
                alt="أسطول سيارات ودراجات التوصيل السريع في دبي والإمارات"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              
              {/* Quick Floating Badge */}
              <div className="absolute bottom-4 right-4 left-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">جاهزية فورية على مدار اليوم</p>
                  <p className="text-[11px] text-slate-500">مناديب متواجدون في دبي، أبوظبي، وكافة الإمارات</p>
                </div>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                  توصيل فوري
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width 4-Column KPI Strip below the hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {companyConfig.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col text-right">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
