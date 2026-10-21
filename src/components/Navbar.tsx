import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Shield, ArrowUpRight } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'من نحن', href: '#about' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'تغطية الإمارات', href: '#coverage' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
      {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav Links) - Zone 3 (Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text wordmark */}
        <a 
          href="#hero" 
          className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 group-hover:bg-slate-800 transition-colors shadow-sm">
            <Shield className="w-5 h-5 text-amber-400" />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
              {companyConfig.name}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              خدمات النقل والتوصيل السريع
            </span>
          </div>
        </a>

        {/* Zone 2: Concise Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-950 transition-colors py-1 relative whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Quick Call */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${companyConfig.contact.phoneTel}`}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            title="اتصال مباشر"
          >
            <Phone className="w-3.5 h-3.5 text-slate-700" />
            <span className="dir-ltr">{companyConfig.contact.phoneDisplay}</span>
          </a>

          <a
            href={`https://wa.me/${companyConfig.contact.whatsappRaw}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن خدمات التوصيل السريع.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>طلب مندوب عبر واتساب</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${companyConfig.contact.phoneTel}`}
            className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-lg"
            aria-label="اتصال هاتفي"
          >
            <Phone className="w-5 h-5 text-slate-900" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-700 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
            aria-label="فتح القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${companyConfig.contact.whatsappRaw}?text=${encodeURIComponent('مرحباً، أود حجز خدمة توصيل.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>طلب مندوب عبر واتساب</span>
            </a>
            <a
              href={`tel:${companyConfig.contact.phoneTel}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>اتصال هاتفي: {companyConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
