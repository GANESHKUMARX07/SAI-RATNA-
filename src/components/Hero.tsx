import React from 'react';
import { VintageCornerOrnament } from './HandwrittenOrnaments';
import heroDiningImg from '../assets/images/sairatna_hero_dining_1791065165527.jpg';
import specialBiryaniImg from '../assets/images/ratna_special_biryani_1791064014554.jpg';
import { MapPin, Clock } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onExploreGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onExploreGallery }) => {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] w-full">
      {/* Cinematic Hero Container with Fluid Responsive Height */}
      <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6">
        {/* Real Authentic Restaurant Photograph Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroDiningImg}
            alt="Sai Ratna Restaurant Dining Hall Interior, Chakripuram Secunderabad"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
          />
          {/* Subtle natural vignette overlay for text readability without heavy darkening */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/45 to-stone-950/35"></div>
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-stone-950/30 to-stone-950/75"></div>
        </div>

        {/* Content Box Over Cinematic Image */}
        <div className="max-w-4xl mx-auto relative z-10 text-center text-white w-full">
          {/* Primary Name: SAI RATNA RESTAURANT */}
          <h1 className="font-royal text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-[0.1em] sm:tracking-[0.16em] uppercase font-bold drop-shadow-md my-2 break-words">
            SAI RATNA
            <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-stone-200 mt-1 sm:mt-2">
              RESTAURANT
            </span>
          </h1>

          {/* Subtitle: A Taste Worth Remembering */}
          <div className="my-2 sm:my-3">
            <p className="font-royal-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#dfc282] font-normal tracking-wide drop-shadow-sm px-2">
              A Taste Worth Remembering
            </p>
          </div>

          {/* Editorial lead */}
          <p className="max-w-2xl mx-auto text-stone-200 text-base sm:text-lg md:text-xl leading-relaxed font-serif-luxury italic mt-3 sm:mt-4 drop-shadow-sm px-2">
            "A cherished culinary landmark in Hyderabad known for fragrant charcoal dum biryanis, authentic clay-tandoor flatbreads, and time-honored hospitality."
          </p>

          {/* CTAs - Stack on mobile, inline on tablet/desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 w-full max-w-md mx-auto sm:max-w-none">
            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-royal font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-stone-950 bg-[#dfc282] hover:bg-[#edd8a4] border border-[#dfc282] rounded shadow-lg transition-all active:scale-[0.98] sm:hover:scale-[1.02] cursor-pointer"
            >
              Browse The Menu
            </button>
            <button
              onClick={onExploreGallery}
              className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-royal font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white bg-stone-900/80 hover:bg-stone-900 border border-stone-400/50 backdrop-blur-xs rounded shadow-lg transition-all active:scale-[0.98] sm:hover:scale-[1.02] cursor-pointer"
            >
              Restaurant Gallery
            </button>
          </div>

          {/* Info pill strip - Responsive wrap without horizontal overflow */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-stone-300 font-royal tracking-wider sm:tracking-widest uppercase">
            <span className="flex items-center gap-1.5 text-center">
              <MapPin className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
              Chakripuram Chowrasta, ECIL
            </span>
            <span className="hidden sm:inline text-stone-500">·</span>
            <span className="flex items-center gap-1.5 text-center">
              <Clock className="w-3.5 h-3.5 text-[#dfc282] shrink-0" />
              11:00 AM – 11:30 PM Everyday
            </span>
            <span className="hidden sm:inline text-stone-500">·</span>
            <span className="text-[#dfc282] text-center">Dine-In · Takeaway · Family Dining</span>
          </div>
        </div>
      </div>

      {/* Intro White Parchment Card with Background-Removed Signature Biryani */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-10 relative z-20 pb-12 sm:pb-16 w-full">
        <div className="vintage-menu-card p-5 sm:p-8 md:p-10 rounded-2xl relative border border-[#e6dfd5] shadow-xl overflow-hidden">
          <VintageCornerOrnament position="top-left" className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8" />
          <VintageCornerOrnament position="top-right" className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8" />
          <VintageCornerOrnament position="bottom-left" className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8" />
          <VintageCornerOrnament position="bottom-right" className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Cutout Dish */}
            <div className="md:col-span-5 flex justify-center relative py-2 sm:py-0">
              <div className="relative group w-full max-w-[240px] sm:max-w-xs flex justify-center">
                <div className="absolute -bottom-3 inset-x-6 h-5 bg-stone-900/15 rounded-full blur-md"></div>
                <img
                  src={specialBiryaniImg}
                  alt="Sai Ratna Authentic Dum Biryani"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-52 sm:max-h-64 object-contain floating-dish"
                />
                <div className="absolute -bottom-2 right-0 sm:right-2 bg-[#fffdf9] border border-[#b38838]/40 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded shadow-xs">
                  <span className="font-royal-script text-[#8c6721] text-lg sm:text-xl font-bold">
                    Special Dum Biryani
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 space-y-2.5 sm:space-y-3 text-center md:text-left">
              <span className="font-royal text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8c6721] font-semibold block">
                Authentic Heritage & Flavor
              </span>
              <h2 className="font-royal text-xl sm:text-2xl md:text-3xl text-stone-900 font-semibold tracking-wide uppercase">
                Tradition Meets Culinary Mastery
              </h2>
              <p className="font-serif-luxury text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed italic">
                "At Sai Ratna Restaurant, we prepare each feast with stone-ground spices, fragrant long-grain basmati rice, tender meats, and artisanal cottage cheese. Every plate served carries the pride of our kitchen team."
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 text-[11px] sm:text-xs font-royal uppercase tracking-wider sm:tracking-widest text-stone-500">
                <span>Hand-Toasted Spices</span>
                <span>·</span>
                <span>Authentic Dum Handis</span>
                <span>·</span>
                <span>Pure Ghee Preparations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
