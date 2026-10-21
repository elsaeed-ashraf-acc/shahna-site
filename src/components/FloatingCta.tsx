import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export const FloatingCta: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-center gap-2.5">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all hover:-translate-y-0.5 cursor-pointer"
          aria-label="الرجوع للأعلى"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Phone Call Button */}
      <a
        href={`tel:${companyConfig.contact.phoneTel}`}
        className="w-11 h-11 rounded-full bg-slate-900 text-white shadow-lg flex items-center justify-center hover:bg-slate-800 transition-all hover:scale-105"
        title="اتصال هاتفي مباشر"
        aria-label="اتصال مباشر"
      >
        <Phone className="w-5 h-5 text-white" />
      </a>

      {/* Floating WhatsApp Action Button with subtle pulse */}
      <a
        href={`https://wa.me/${companyConfig.contact.whatsappRaw}?text=${encodeURIComponent('مرحباً، أود حجز خدمة توصيل فوري.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl transition-all hover:scale-105 cursor-pointer"
        aria-label="طلب مندوب عبر واتساب"
      >
        <MessageSquare className="w-5 h-5 text-white fill-white/20" />
        <span className="hidden sm:inline-block text-xs font-bold whitespace-nowrap pl-1">
          طلب مندوب عبر واتساب
        </span>
      </a>
    </div>
  );
};
