import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Our Menu', href: '#our-menu' },
    { label: 'Signatures', href: '#signatures' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Visit Us', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e6dfd5]/80 transition-all shadow-xs w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand wordmark - Scaled for 320px up to 1920px */}
        <a 
          href="/" 
          className="flex flex-col tracking-[0.18em] sm:tracking-[0.25em] text-stone-900 uppercase transition-opacity hover:opacity-85"
        >
          <span className="font-royal text-xl sm:text-2xl md:text-3xl font-bold truncate">
            SAI RATNA
          </span>
          <span className="font-royal text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-[#8c6721] font-semibold -mt-0.5">
            RESTAURANT
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium tracking-widest text-stone-800 font-royal">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="hover:text-stone-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#b38838] after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Phone Info */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+914027135555"
            className="inline-flex items-center gap-1.5 text-xs font-royal uppercase tracking-[0.2em] text-[#8c6721] hover:text-stone-950 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>040 2713 5555</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+914027135555"
            className="p-2 text-stone-700 hover:text-stone-950 transition-colors"
            aria-label="Call Sai Ratna Restaurant"
          >
            <Phone className="w-4 h-4 text-[#8c6721]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-800 hover:text-stone-950 focus:outline-none transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-stone-900" />
            ) : (
              <Menu className="w-6 h-6 text-stone-900" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e6dfd5] bg-[#faf8f5] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 font-royal text-sm font-semibold tracking-wider text-stone-800">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-2 px-3 rounded hover:bg-[#f0eae1] transition-colors flex items-center justify-between border-b border-[#f0eae1]/60"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#8c6721]">✦</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#e6dfd5] space-y-2 text-xs font-royal text-stone-600">
              <a
                href="tel:+914027135555"
                className="flex items-center gap-2 py-1 text-stone-800 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#8c6721]" />
                <span>040 2713 5555 / +91 91339 99985</span>
              </a>
              <div className="flex items-center gap-2 text-stone-500 text-[11px] font-serif-luxury">
                <MapPin className="w-3.5 h-3.5 text-[#8c6721] shrink-0" />
                <span>Chakripuram Cross Roads, Secunderabad</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
