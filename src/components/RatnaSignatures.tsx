import React from 'react';
import { HandDrawnDivider, StarAniseIcon, CardamomIcon, VintageCornerOrnament } from './HandwrittenOrnaments';
import { MenuItem } from '../data/menuData';

interface RatnaSignaturesProps {
  signatureItems: MenuItem[];
}

export const RatnaSignatures: React.FC<RatnaSignaturesProps> = ({
  signatureItems,
}) => {
  return (
    <section id="signatures" className="py-16 sm:py-20 md:py-28 bg-[#faf8f5] border-b border-[#e6dfd5] relative overflow-hidden w-full">
      {/* Background spice watermarks - Hidden or constrained on small mobile */}
      <div className="absolute -top-10 -right-10 text-[#b38838]/10 pointer-events-none transform rotate-45 hidden sm:block">
        <StarAniseIcon className="w-36 sm:w-44 h-36 sm:h-44" />
      </div>
      <div className="absolute bottom-5 -left-8 text-[#b38838]/10 pointer-events-none transform -rotate-12 hidden sm:block">
        <CardamomIcon className="w-32 sm:w-40 h-32 sm:h-40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-royal text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#8c6721] font-semibold">
              The Master Chef's Legacy
            </span>
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl md:text-6xl text-stone-900 tracking-[0.12em] sm:tracking-[0.16em] uppercase font-bold leading-tight break-words">
            SAI RATNA
            <span className="block font-royal-script lowercase text-stone-800 tracking-normal text-3xl sm:text-5xl md:text-6xl font-normal mt-1">
              Signatures
            </span>
          </h2>

          <div className="mt-2 sm:mt-3 px-2">
            <p className="font-royal-script text-2xl sm:text-3xl md:text-4xl text-[#8c6721]">
              "Dishes perfected over decades, remembered for a lifetime."
            </p>
          </div>

          <HandDrawnDivider className="my-5 sm:my-6" />
        </div>

        {/* Hero Signature Item 1: Special Chicken Biryani (Editorial Featured Layout) */}
        {signatureItems[0] && (
          <div className="mb-12 sm:mb-20">
            <div className="vintage-menu-card rounded-2xl p-5 sm:p-8 md:p-14 relative border border-[#e6dfd5] shadow-lg overflow-hidden">
              <VintageCornerOrnament position="top-left" className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8" />
              <VintageCornerOrnament position="top-right" className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8" />
              <VintageCornerOrnament position="bottom-left" className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8" />
              <VintageCornerOrnament position="bottom-right" className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Food Image Left - Background Removed Cutout floating naturally */}
                <div className="lg:col-span-6 flex justify-center relative py-2 sm:py-0">
                  <div className="relative group w-full max-w-[240px] sm:max-w-sm md:max-w-md">
                    {/* Soft natural drop shadow underneath */}
                    <div className="absolute -bottom-4 sm:-bottom-6 inset-x-8 sm:inset-x-12 h-6 sm:h-8 bg-stone-950/15 rounded-full blur-xl"></div>
                    <img 
                      src={signatureItems[0].image} 
                      alt={signatureItems[0].name}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-contain floating-dish"
                    />
                    {signatureItems[0].chefNote && (
                      <div className="absolute -top-2 sm:-top-3 -left-1 sm:-left-3 bg-[#fffefb] border border-[#b38838]/40 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded shadow-xs transform -rotate-3">
                        <span className="font-royal-script text-base sm:text-xl text-[#8c6721] font-semibold">
                          ✦ {signatureItems[0].chefNote}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Right */}
                <div className="lg:col-span-6 text-center lg:text-left space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] font-royal uppercase text-stone-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-700 shrink-0"></span>
                    <span>Sai Ratna Chakripuram Pride · Secunderabad</span>
                  </div>

                  <h3 className="font-royal text-xl sm:text-3xl md:text-4xl text-stone-900 font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase leading-snug break-words">
                    {signatureItems[0].name}
                  </h3>

                  <p className="font-serif-luxury text-stone-700 text-base sm:text-lg md:text-xl leading-relaxed italic">
                    "{signatureItems[0].description}"
                  </p>

                  <div className="pt-2 sm:pt-3 flex items-center justify-center lg:justify-start gap-4">
                    <span className="font-royal text-2xl sm:text-3xl md:text-4xl text-[#8c6721] font-bold tabular-nums tracking-[0.1em]">
                      ₹{signatureItems[0].price}
                    </span>
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] font-royal uppercase text-stone-500 border-l border-[#d8c7b0] pl-3 sm:pl-4">
                      Signature Serving
                    </span>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-[#f0eae1] flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-stone-600 font-royal-script text-lg sm:text-xl">
                    <span>Aged Nizam Basmati</span>
                    <span>·</span>
                    <span>Saffron Infused Dum</span>
                    <span>·</span>
                    <span>Served with Salan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Signatures 2 & 3 & 4 Grid: High-end Editorial Magazine Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {signatureItems.slice(1).map((item) => {
            return (
              <div 
                key={item.id} 
                className="vintage-menu-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between relative group hover:border-[#b38838]/60 transition-colors shadow-sm overflow-hidden"
              >
                {/* Floating dish photo cutout */}
                <div className="relative mb-4 sm:mb-6 -mt-2 sm:-mt-6 flex justify-center">
                  <div className="relative w-44 sm:w-52 h-36 sm:h-44 flex items-center justify-center">
                    <div className="absolute -bottom-2 inset-x-4 h-4 bg-stone-950/10 rounded-full blur-md"></div>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain floating-dish"
                    />
                  </div>
                  {item.chefNote && (
                    <div className="absolute top-0 right-0 bg-[#fffefb] border border-[#b38838]/30 px-2 sm:px-2.5 py-0.5 rounded shadow-xs transform rotate-2">
                      <span className="font-royal-script text-base sm:text-lg text-[#8c6721]">
                        {item.chefNote}
                      </span>
                    </div>
                  )}
                </div>

                {/* Typography info */}
                <div className="text-center space-y-2.5 sm:space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-stone-500 block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-royal text-lg sm:text-xl md:text-2xl text-stone-900 font-medium tracking-[0.1em] sm:tracking-[0.14em] uppercase leading-snug break-words">
                      {item.name}
                    </h4>
                    <p className="font-serif-luxury text-stone-700 text-sm sm:text-base md:text-lg mt-1.5 sm:mt-2 line-clamp-3 leading-relaxed italic">
                      "{item.description}"
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-[#f0eae1] flex items-center justify-center mt-auto">
                    <span className="font-royal text-xl sm:text-2xl text-[#8c6721] font-bold tabular-nums tracking-[0.1em]">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
