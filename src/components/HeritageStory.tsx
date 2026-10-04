import React from 'react';
import { HandDrawnDivider, StarAniseIcon, CardamomIcon, CinnamonIcon, VintageCornerOrnament } from './HandwrittenOrnaments';

export const HeritageStory: React.FC = () => {
  return (
    <section id="heritage" className="py-16 sm:py-20 md:py-28 bg-[#faf8f5] border-b border-[#e6dfd5] relative w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="vintage-menu-card rounded-2xl p-5 sm:p-8 md:p-12 lg:p-16 relative border border-[#e6dfd5] shadow-sm overflow-hidden">
          <VintageCornerOrnament position="top-left" className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8" />
          <VintageCornerOrnament position="top-right" className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8" />
          <VintageCornerOrnament position="bottom-left" className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8" />
          <VintageCornerOrnament position="bottom-right" className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8" />

          <div className="text-center max-w-2xl mx-auto">
            <span className="font-royal text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#8c6721] font-semibold">
              OUR CULINARY TRADITION
            </span>
            <h3 className="font-royal text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-900 font-bold mt-1 sm:mt-2 tracking-[0.12em] sm:tracking-[0.16em] uppercase break-words">
              The Art of Slow Cooking
            </h3>
            <p className="font-royal-script text-2xl sm:text-3xl md:text-4xl text-[#8c6721] mt-1 font-normal">
              "Honoring every spice, every ember, every guest."
            </p>
            <HandDrawnDivider className="my-5 sm:my-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
            <div className="text-center p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#b38838] flex items-center justify-center">
                <StarAniseIcon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="font-royal text-sm sm:text-base md:text-lg font-semibold tracking-wider uppercase text-stone-900 mb-1.5 sm:mb-2">
                Hand-Pounded Potli Masalas
              </h4>
              <p className="font-serif-luxury text-stone-700 text-sm sm:text-base leading-relaxed italic">
                Whole cardamom, mace, cinnamon bark, and stone flowers freshly toasted at dawn and ground in stone mortars.
              </p>
            </div>

            <div className="text-center p-3 sm:p-4 border-t md:border-t-0 md:border-x border-[#e6dfd5]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#b38838] flex items-center justify-center">
                <CardamomIcon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="font-royal text-sm sm:text-base md:text-lg font-semibold tracking-wider uppercase text-stone-900 mb-1.5 sm:mb-2">
                Sealed Dough Dum Cooking
              </h4>
              <p className="font-serif-luxury text-stone-700 text-sm sm:text-base leading-relaxed italic">
                Vessels sealed with wheat purdah dough over smoldering coals, capturing rich aromatic vapors inside each grain.
              </p>
            </div>

            <div className="text-center p-3 sm:p-4 border-t md:border-t-0 border-[#e6dfd5]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-[#b38838] flex items-center justify-center">
                <CinnamonIcon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="font-royal text-sm sm:text-base md:text-lg font-semibold tracking-wider uppercase text-stone-900 mb-1.5 sm:mb-2">
                Pure Artisanal Ghee & Dairy
              </h4>
              <p className="font-serif-luxury text-stone-700 text-sm sm:text-base leading-relaxed italic">
                Cottage cheese hand-pressed daily and pure country butter melted fresh for every simmering kadhai and tandoor naan.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#e6dfd5] text-center px-2">
            <span className="font-royal-script text-xl sm:text-2xl md:text-3xl text-stone-800 block">
              "We welcome your family to dine as our honored personal guests."
            </span>
            <div className="font-royal text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-stone-500 mt-2">
              — The Kitchen Masters of Sai Ratna Restaurant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
