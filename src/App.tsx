import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { QuickInquirySection } from './components/QuickInquirySection';
import { FleetSection } from './components/FleetSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('مندوب توصيل فوري');

  const handleSelectService = (title: string) => {
    setSelectedService(title);
    const inquiryElement = document.getElementById('inquiry');
    if (inquiryElement) {
      inquiryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* 1. الرئيسية: تسويق، وصف موجز، صورة مناسبة، أزرار واتساب ومكالمات، وشريط مؤشرات الثقة */}
        <HeroSection />

        {/* 2. من نحن: نبذة الشركة، معايير الأمان، وشبكة تغطية كافة إمارات الدولة */}
        <AboutSection />

        {/* 3. الخدمات: بطاقات الخدمات المستخرجة من المرجع بصياغة جديدة راقية */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* أسطول النقل والجاهزية اليومية */}
        <FleetSection />

        {/* حاسبة / استفسار تسعيرة التوصيل السريع مع إرسال واتساب مباشر */}
        <QuickInquirySection selectedServicePreload={selectedService} />

        {/* الأسئلة الشائعة حول خدمات التوصيل في الإمارات */}
        <FaqSection />

        {/* 4. اتصل بنا: بطاقات التواصل المباشر، زر نسخ الرقم، ونموذج إرسال الاستفسار */}
        <ContactSection />
      </main>

      {/* التذييل */}
      <Footer />

      {/* أزرار الاتصال والواتساب العائمة */}
      <FloatingCta />
    </div>
  );
}
