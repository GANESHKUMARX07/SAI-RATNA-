import React from 'react';
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';
import { VintageCornerOrnament, StarAniseIcon } from './HandwrittenOrnaments';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1c1917] text-[#fbf7f0] pt-14 sm:pt-16 pb-10 sm:pb-12 border-t border-[#b38838]/40 relative overflow-hidden w-full">
      {/* Decorative filigree accents - Hidden on small mobile */}
      <VintageCornerOrnament position="top-left" className="absolute top-2 left-2 w-8 sm:w-10 h-8 sm:h-10 opacity-30 text-[#b38838] hidden sm:block" />
      <VintageCornerOrnament position="top-right" className="absolute top-2 right-2 w-8 sm:w-10 h-8 sm:h-10 opacity-30 text-[#b38838] hidden sm:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <StarAniseIcon className="w-5 sm:w-6 h-5 sm:h-6 text-[#dfc282]" />
              <span className="font-royal text-xl sm:text-2xl tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white font-bold">
                SAI RATNA
              </span>
            </div>
            
            <p className="font-serif-luxury text-stone-300 text-base sm:text-lg leading-relaxed italic">
              "A cherished culinary haven at Chakripuram Cross Roads, Secunderabad, celebrating authentic Hyderabadi dum biryani, live tandoor specialties, and warm family dining."
            </p>

            <p className="font-royal-script text-2xl sm:text-3xl text-[#dfc282]">
              A Taste Worth Remembering
            </p>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-royal text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#dfc282] font-semibold block mb-1 sm:mb-2">
              Visit & Timings
            </span>
            <div className="flex items-start gap-2.5 text-sm sm:text-base text-stone-300 font-serif-luxury">
              <MapPin className="w-4 h-4 text-[#dfc282] shrink-0 mt-1" />
              <div className="space-y-1">
                <span className="break-words">Road Number 3, Bhagawan Colony, Chakripuram Cross Roads, Nagarjuna Nagar, Secunderabad, Telangana 500062</span>
                <div>
                  <a
                    href="https://maps.app.goo.gl/p7zK897bUEZMNnWz5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#dfc282] text-xs font-royal uppercase tracking-wider hover:underline inline-flex items-center gap-1"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2.5 text-sm sm:text-base text-stone-300 font-serif-luxury pt-1">
              <Clock className="w-4 h-4 text-[#dfc282] shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">11:00 AM – 11:30 PM</p>
                <p className="text-xs text-stone-400 font-serif-luxury">Open 7 days a week for Lunch & Dinner</p>
              </div>
            </div>
          </div>

          {/* Contact & Inquiries */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-royal text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#dfc282] font-semibold block mb-1 sm:mb-2">
              Contact & Inquiries
            </span>
            <div className="flex items-center gap-2.5 text-sm sm:text-base text-stone-300 font-serif-luxury">
              <Phone className="w-4 h-4 text-[#dfc282] shrink-0" />
              <a href="tel:+914027135555" className="hover:text-white transition-colors">
                040 2713 5555
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-sm sm:text-base text-stone-300 font-serif-luxury">
              <Phone className="w-4 h-4 text-[#dfc282] shrink-0" />
              <a href="tel:+919133999985" className="hover:text-white transition-colors">
                +91 91339 99985
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-300 font-serif-luxury">
              <Mail className="w-4 h-4 text-[#dfc282] shrink-0" />
              <span className="truncate">contact@sairatnarestaurant.com</span>
            </div>
            <div className="pt-2">
              <span className="inline-block text-[11px] sm:text-xs font-royal tracking-[0.15em] sm:tracking-[0.2em] uppercase text-stone-300 bg-stone-900 border border-stone-800 px-3 py-1 rounded">
                Dine-in · Takeaway · Family Dining
              </span>
            </div>
          </div>

        </div>

        {/* Quiet copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-serif-luxury gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Sai Ratna Restaurant. Authentic Chakripuram Cross Roads, Secunderabad, Telangana.</p>
          <div className="flex items-center gap-3 sm:gap-4 text-stone-400">
            <span>Dine-In</span>
            <span>·</span>
            <span>Takeaway Counter</span>
            <span>·</span>
            <a href="https://maps.app.goo.gl/p7zK897bUEZMNnWz5" target="_blank" rel="noopener noreferrer" className="hover:text-stone-200">
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
