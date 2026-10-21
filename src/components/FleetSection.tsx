import React from 'react';
import { Truck, Shield, Clock, MapPin } from 'lucide-react';
import fleetImage from '../assets/images/fleet_intercity_uae_1792514605135.jpg';

export const FleetSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-right space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span className="text-amber-600 font-bold">الأسطول والجاهزية</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>تجهيزات لوجستية حديثة</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              أسطول نقل حديث يضمن وصول شحنتك سليمة وفي أسرع وقت
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              تعتمد عملياتنا اليومية على أسطول متنوع من سيارات الشحن الخفيف، الفانات المجهزة، ودراجات التوصيل السريع لتفادي الازدحام داخل المدن وضمان وصول الطرود إلى وجهتها بأمان وسلاسة.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">مواعيد انطلاق يومية منتظمة</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    خطوط سير يومية تربط العاصمة أبوظبي بدبي والشارقة وكافة الإمارات الشمالية والشرقية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">حماية كاملة ومناولة دقيقة</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    تثبيت آمن وحماية من درجات الحرارة لضمان وصول البضائع والمستندات بحالتها الأصلية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">سائقون محترفون ومعتمدون</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    خبرة طويلة بشبكة الطرق السريعة والمداخل الحيوية لجميع إمارات ومناطق الدولة.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[4/3] group bg-slate-100">
              <img
                src={fleetImage}
                alt="أسطول شاحنات وسيارات الشحن السريع في مركز لوجستي بالإمارات"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 text-right">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                  <Truck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>تغطية متكاملة للشركات والأفراد والمتاجر</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  جاهزية للتعاقدات الشهرية وتوزيع شحنات المتاجر الإلكترونية بأسعار مخصصة.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
