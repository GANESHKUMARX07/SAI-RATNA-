import React, { useState, useEffect } from 'react';
import { HandDrawnDivider, VintageCornerOrnament } from './HandwrittenOrnaments';
import { X, ZoomIn, MapPin, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

import heroDiningImg from '../assets/images/sairatna_hero_dining_1791065165527.jpg';
import exteriorImg from '../assets/images/sairatna_exterior_1791065182366.jpg';
import tandoorCookImg from '../assets/images/sairatna_tandoor_cook_1791065196702.jpg';
import tableFeastImg from '../assets/images/sairatna_table_feast_1791065209976.jpg';

import biryaniImg from '../assets/images/ratna_special_biryani_1791064014554.jpg';
import kajuChickenImg from '../assets/images/ratna_kaju_chicken_1791064027115.jpg';
import kebabImg from '../assets/images/ratna_tandoori_kebab_1791064040161.jpg';
import apricotImg from '../assets/images/ratna_apricot_delight_1791064050303.jpg';
import naanImg from '../assets/images/ratna_butter_naan_1791064061226.jpg';

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'interior' | 'exterior' | 'food' | 'ambience' | 'kitchen';
  categoryLabel: string;
  src: string;
  caption: string;
  details: string;
  isFeatured?: boolean;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'Family Dining Hall & Ambience',
    category: 'interior',
    categoryLabel: 'Interior & Dining',
    src: heroDiningImg,
    caption: 'Air-conditioned main dining hall with warm lighting and comfortable family booths.',
    details: 'Spacious indoor seating designed for family gatherings, lunch buffets, and private celebrations at Chakripuram.',
    isFeatured: true
  },
  {
    id: 'photo-2',
    title: 'Sai Ratna Handi Dum Biryani',
    category: 'food',
    categoryLabel: 'Signature Dish',
    src: biryaniImg,
    caption: 'Long-grain basmati dum biryani sealed with dough over charcoal embers.',
    details: 'Served in traditional brass handi with spicy mirchi ka salan and cooling raita.',
  },
  {
    id: 'photo-3',
    title: 'Chakripuram Cross Roads Facade',
    category: 'exterior',
    categoryLabel: 'Exterior & Entrance',
    src: exteriorImg,
    caption: 'Street-facing entrance on Road No. 3, Bhagawan Colony, Chakripuram Chowrasta.',
    details: 'Dedicated two-wheeler and car parking with quick access to takeout counter and dining stairs.',
  },
  {
    id: 'photo-4',
    title: 'Clay Oven Tandoor Preparations',
    category: 'kitchen',
    categoryLabel: 'Live Kitchen',
    src: tandoorCookImg,
    caption: 'Master tandoor chef roasting marinated chicken tikkas over charcoal.',
    details: 'Live kitchen hearth firing fresh naans, rotis, and kebabs upon order.',
  },
  {
    id: 'photo-5',
    title: 'Royal Kaju Chicken Gravy',
    category: 'food',
    categoryLabel: 'Signature Food',
    src: kajuChickenImg,
    caption: 'Tender chicken simmered in roasted cashew and onion gravy.',
    details: 'One of Sai Ratna’s most celebrated curries, rich with whole cashews and aromatic potli masalas.',
  },
  {
    id: 'photo-6',
    title: 'Grand Family Banquet Spread',
    category: 'ambience',
    categoryLabel: 'Dining Presentation',
    src: tableFeastImg,
    caption: 'Complete feast featuring biryanis, dal makhani, paneer butter masala, and naans.',
    details: 'Authentic dining experience enjoyed by thousands of Secunderabad and ECIL residents weekly.',
    isFeatured: true
  },
  {
    id: 'photo-7',
    title: 'Charred Tandoori Seekh & Tikka',
    category: 'food',
    categoryLabel: 'Tandoor Starters',
    src: kebabImg,
    caption: 'Smoky, tellicherry-peppered tandoori kebabs with mint chutney.',
    details: 'Crisp on the outside, succulent and juicy inside, charred to perfection.',
  },
  {
    id: 'photo-8',
    title: 'Golden Ghee Clay Naan',
    category: 'food',
    categoryLabel: 'Artisanal Breads',
    src: naanImg,
    caption: 'Freshly slapped against the clay tandoor and brushed with country ghee.',
    details: 'Puffy, blistered, and buttery companion to our simmering handi curries.',
  },
  {
    id: 'photo-9',
    title: 'Hyderabadi Apricot Delight',
    category: 'food',
    categoryLabel: 'Desserts',
    src: apricotImg,
    caption: 'Stewed Khubani apricots layered with rich custard and sweet clotted cream.',
    details: 'The classic Hyderabadi celebratory sweet made with authentic Afghan apricots.',
  }
];

export const RestaurantGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'interior', label: 'Interior & Dining' },
    { key: 'food', label: 'Signature Dishes' },
    { key: 'kitchen', label: 'Live Kitchen' },
    { key: 'exterior', label: 'Exterior' }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  const openLightbox = (photoId: string) => {
    const idx = GALLERY_PHOTOS.findIndex(p => p.id === photoId);
    if (idx !== -1) setActivePhotoIndex(idx);
  };

  const closeLightbox = () => setActivePhotoIndex(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_PHOTOS.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((activePhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
      }
      if (e.key === 'ArrowRight') {
        setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_PHOTOS.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  const currentPhoto = activePhotoIndex !== null ? GALLERY_PHOTOS[activePhotoIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-28 bg-[#faf8f5] border-b border-[#e6dfd5] relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-[1px] w-6 sm:w-8 bg-[#b38838]/60"></span>
            <span className="font-royal text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#8c6721] font-semibold">
              Visual Journey
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-[#b38838]/60"></span>
          </div>

          <h2 className="font-royal text-3xl sm:text-5xl md:text-6xl text-stone-900 tracking-[0.12em] sm:tracking-[0.16em] uppercase font-bold break-words">
            Restaurant Gallery
          </h2>

          <p className="font-royal-script text-3xl sm:text-4xl md:text-5xl text-[#8c6721] mt-1 font-normal">
            Inside Sai Ratna Restaurant
          </p>

          <p className="font-serif-luxury text-stone-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-2 sm:mt-3 italic leading-relaxed px-2">
            "Authentic moments, live tandoor artistry, and welcoming family dining captured at our Chakripuram Cross Roads restaurant."
          </p>

          <HandDrawnDivider className="my-5 sm:my-6" />

          {/* Filter Pills - Fluid scroll/wrap */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap py-1 mt-2 sm:mt-4">
            {categories.map(cat => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 sm:px-4 py-1.5 text-xs font-royal uppercase tracking-widest transition-all rounded shrink-0 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 text-[#dfc282] font-semibold shadow-xs'
                      : 'text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-100 border border-[#e6dfd5]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Google Maps Attribution & Photo Slot Note */}
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-1.5 text-[11px] sm:text-xs font-serif-luxury text-stone-600 bg-white border border-[#e6dfd5] px-3.5 py-1.5 rounded-full shadow-xs max-w-full">
            <span className="flex items-center gap-1 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#b38838]" />
              <span>Curated from Sai Ratna Google Maps reference</span>
            </span>
            <a
              href="https://maps.app.goo.gl/p7zK897bUEZMNnWz5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8c6721] font-semibold hover:underline inline-flex items-center gap-1 ml-1 shrink-0"
            >
              View on Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Editorial Masonry Gallery Grid - 1 Col Mobile (320-639px), 2 Col Tablet (640-1023px), 3 Col Desktop (1024px+) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo.id)}
              className="group relative bg-white border border-[#e6dfd5] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col w-full"
            >
              {/* Image Container with subtle hover zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 w-full">
                <img
                  src={photo.src}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Top Category Badge */}
                <div className="absolute top-2.5 left-2.5 bg-stone-950/80 backdrop-blur-xs text-[#dfc282] text-[9px] sm:text-[10px] font-royal uppercase tracking-widest px-2.5 py-0.5 sm:py-1 rounded">
                  {photo.categoryLabel}
                </div>

                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-stone-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-stone-900" />
                  </div>
                </div>
              </div>

              {/* Photo Caption & Info Box */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-t border-[#f0eae1]">
                <div>
                  <h3 className="font-royal text-sm sm:text-base md:text-lg text-stone-900 font-semibold tracking-wide uppercase leading-snug break-words">
                    {photo.title}
                  </h3>
                  <p className="font-serif-luxury text-stone-600 text-xs sm:text-sm mt-1 sm:mt-1.5 leading-relaxed italic line-clamp-2">
                    "{photo.caption}"
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#f0eae1] flex items-center justify-between text-[11px] sm:text-xs text-stone-500 font-royal tracking-wider">
                  <span>Sai Ratna Chakripuram</span>
                  <span className="text-[#8c6721] font-semibold group-hover:underline">View HD</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal - Fully Responsive on Mobile & Tablets */}
      {currentPhoto && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white p-2.5 bg-stone-900/80 rounded-full hover:bg-stone-800 transition-colors z-50 cursor-pointer shadow-lg"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-2.5 sm:p-3 bg-stone-900/80 rounded-full hover:bg-stone-800 transition-colors z-50 cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-2.5 sm:p-3 bg-stone-900/80 rounded-full hover:bg-stone-800 transition-colors z-50 cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-[#b38838]/40 max-h-[92vh] flex flex-col"
          >
            <VintageCornerOrnament position="top-left" className="absolute top-2 left-2 w-6 h-6 sm:w-8 sm:h-8 z-10 text-[#dfc282]" />
            <VintageCornerOrnament position="top-right" className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 z-10 text-[#dfc282]" />

            {/* HD Image */}
            <div className="max-h-[48vh] sm:max-h-[60vh] bg-stone-950 flex items-center justify-center overflow-hidden">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[48vh] sm:max-h-[60vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Details Footer */}
            <div className="p-4 sm:p-6 md:p-8 bg-[#faf8f5] overflow-y-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 border-b border-[#e6dfd5] pb-2 sm:pb-3 mb-2 sm:mb-3">
                <div>
                  <span className="font-royal text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8c6721] font-semibold block mb-0.5 sm:mb-1">
                    {currentPhoto.categoryLabel}
                  </span>
                  <h3 className="font-royal text-lg sm:text-xl md:text-2xl text-stone-900 font-bold uppercase tracking-wider break-words">
                    {currentPhoto.title}
                  </h3>
                </div>
                <div className="text-[11px] sm:text-xs font-royal text-stone-500 whitespace-nowrap">
                  Photo {(activePhotoIndex || 0) + 1} of {GALLERY_PHOTOS.length}
                </div>
              </div>

              <p className="font-serif-luxury text-stone-700 text-sm sm:text-base md:text-lg italic leading-relaxed">
                "{currentPhoto.details}"
              </p>

              <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 font-serif-luxury">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8c6721] shrink-0" />
                  <span>Sai Ratna Restaurant, Chakripuram, Secunderabad</span>
                </span>
                <a
                  href="https://maps.app.goo.gl/p7zK897bUEZMNnWz5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8c6721] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Verify on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
