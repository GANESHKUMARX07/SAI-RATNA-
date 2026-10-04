import React, { useState } from 'react';
import { MenuItem, CATEGORIES } from '../data/menuData';
import { HandDrawnDivider, VintageCornerOrnament } from './HandwrittenOrnaments';
import { Search } from 'lucide-react';

// Real HD Cutout Images for Category Artworks
import biryaniCutoutImg from '../assets/images/ratna_special_biryani_1791064014554.jpg';
import curryCutoutImg from '../assets/images/ratna_kaju_chicken_1791064027115.jpg';
import kebabCutoutImg from '../assets/images/ratna_tandoori_kebab_1791064040161.jpg';
import dessertCutoutImg from '../assets/images/ratna_apricot_delight_1791064050303.jpg';
import breadCutoutImg from '../assets/images/ratna_butter_naan_1791064061226.jpg';

interface HandcraftedMenuProps {
  items: MenuItem[];
}

export const HandcraftedMenu: React.FC<HandcraftedMenuProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter items based on Category, Diet, and Search query
  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesDiet = 
      dietFilter === 'all' ? true :
      dietFilter === 'veg' ? item.diet === 'veg' :
      item.diet !== 'veg';
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesDiet && matchesSearch;
  });

  // Group items by category to render classic menu pages
  const categoriesToDisplay = selectedCategory === 'All' 
    ? (CATEGORIES.filter(c => c !== 'All') as readonly string[])
    : [selectedCategory];

  const groupedCategories = categoriesToDisplay.map(cat => ({
    category: cat,
    items: filteredItems.filter(item => item.category === cat)
  })).filter(group => group.items.length > 0);

  // Artwork mapping for each category with real HD food photography
  const categoryArtwork: Record<string, { image: string; note: string; position: 'left' | 'right' }> = {
    'Biryani': {
      image: biryaniCutoutImg,
      note: 'Slow charcoal handi dum',
      position: 'right'
    },
    'Main Course': {
      image: curryCutoutImg,
      note: 'Slow simmered copper deg',
      position: 'right'
    },
    'Starters': {
      image: kebabCutoutImg,
      note: 'Charred clay tandoor hearth',
      position: 'right'
    },
    'Tandoor & Breads': {
      image: breadCutoutImg,
      note: 'Fresh slapped butter naan',
      position: 'right'
    },
    'Desserts': {
      image: dessertCutoutImg,
      note: 'Royal Hyderabadi classic',
      position: 'right'
    }
  };

  return (
    <section id="our-menu" className="py-16 sm:py-20 md:py-28 bg-[#faf8f5] relative w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Dedicated Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="h-[1px] w-6 sm:w-8 bg-[#b38838]/60"></span>
            <span className="font-royal text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-stone-700 font-semibold">
              OUR MENU
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-[#b38838]/60"></span>
          </div>

          {/* At the top: A Taste of Sai Ratna */}
          <h2 className="font-royal text-3xl sm:text-5xl md:text-6xl text-stone-900 tracking-[0.12em] sm:tracking-[0.16em] uppercase font-bold break-words">
            A Taste of Sai Ratna
          </h2>

          {/* Small royal subtitle: Made to be remembered. */}
          <p className="font-royal-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#8c6721] mt-1 sm:mt-2 font-normal">
            Made to be remembered.
          </p>

          <p className="font-serif-luxury text-stone-700 text-base sm:text-lg md:text-xl max-w-xl mx-auto mt-2 sm:mt-3 italic leading-relaxed px-2">
            "Carefully prepared dishes rendered with authentic Hyderabadi technique and the freshest local ingredients."
          </p>

          <HandDrawnDivider className="my-5 sm:my-6" />

          {/* Category Navigation Bar (Horizontally scrollable on small mobile, wrapped on tablet/desktop) */}
          <div className="mt-6 sm:mt-8 flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap py-1">
            {CATEGORIES.map(category => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm tracking-wider font-royal uppercase transition-all rounded shrink-0 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 text-[#dfc282] shadow-sm font-semibold'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100 bg-white border border-[#e6dfd5]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Filters - Stacks on mobile */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 max-w-2xl mx-auto pt-4 border-t border-[#e6dfd5]">
            {/* Dietary Filter Buttons */}
            <div className="flex items-center justify-between sm:justify-start gap-1 p-1 bg-white rounded-lg border border-[#e6dfd5] shadow-xs">
              <button
                onClick={() => setDietFilter('all')}
                className={`flex-1 sm:flex-none px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-royal tracking-wider uppercase rounded transition-all whitespace-nowrap cursor-pointer text-center ${
                  dietFilter === 'all' ? 'bg-stone-900 text-white shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All ({items.length})
              </button>
              <button
                onClick={() => setDietFilter('veg')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-royal tracking-wider uppercase rounded transition-all whitespace-nowrap cursor-pointer ${
                  dietFilter === 'veg' ? 'bg-emerald-900 text-white shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span>Veg</span>
              </button>
              <button
                onClick={() => setDietFilter('non-veg')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-royal tracking-wider uppercase rounded transition-all whitespace-nowrap cursor-pointer ${
                  dietFilter === 'non-veg' ? 'bg-amber-950 text-white shadow-xs font-semibold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                <span>Non-Veg</span>
              </button>
            </div>

            {/* Quick search input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search Biryani, Paneer, Kebab..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#e6dfd5] rounded text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#b38838] font-serif-luxury text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* The Master Handcrafted Menu Card Container */}
        {groupedCategories.length === 0 ? (
          <div className="vintage-menu-card p-8 sm:p-12 text-center rounded-2xl max-w-xl mx-auto border border-[#e6dfd5]">
            <p className="font-royal-script text-2xl sm:text-3xl text-stone-700">
              No dishes found matching your selection.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setDietFilter('all'); setSearchQuery(''); }}
              className="mt-4 px-5 py-2 text-xs font-royal uppercase tracking-widest text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10 sm:space-y-16">
            {groupedCategories.map(({ category, items: categoryItems }) => {
              const art = categoryArtwork[category];
              return (
                <div 
                  key={category}
                  className="relative vintage-menu-card rounded-2xl p-5 sm:p-8 md:p-14 border border-[#e6dfd5] shadow-sm overflow-hidden"
                >
                  {/* Four Vintage Corner Ornaments */}
                  <VintageCornerOrnament position="top-left" className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8" />
                  <VintageCornerOrnament position="top-right" className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8" />
                  <VintageCornerOrnament position="bottom-left" className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8" />
                  <VintageCornerOrnament position="bottom-right" className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8" />

                  {/* Section Title Header inside the Card */}
                  <div className="text-center pb-6 sm:pb-8 border-b border-[#ebdcc8]/80">
                    <span className="font-royal text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-stone-500 font-semibold block mb-1">
                      Sai Ratna Specialty
                    </span>
                    <h3 className="font-royal text-2xl sm:text-3xl md:text-4xl text-stone-900 font-bold tracking-[0.14em] sm:tracking-[0.18em] uppercase">
                      {category}
                    </h3>
                  </div>

                  {/* Category Content: Food Items + Optional Cutout Art */}
                  <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* The Menu Items Column */}
                    <div className={art ? "lg:col-span-8 space-y-6 sm:space-y-8" : "lg:col-span-12 space-y-6 sm:space-y-8"}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-8">
                        {categoryItems.map(item => (
                          <div 
                            key={item.id}
                            className="group relative pb-3 border-b border-[#ebdcc8]/60 hover:border-[#b38838]/80 transition-colors"
                          >
                            {/* Top row: Name + Dotted Leader + Price */}
                            <div className="flex items-baseline justify-between gap-2">
                              <div className="flex items-center gap-1.5 min-w-0 flex-1">
                                <span 
                                  className={`w-2 h-2 rounded-full shrink-0 ${item.diet === 'veg' ? 'bg-emerald-600' : 'bg-amber-800'}`}
                                  title={item.diet === 'veg' ? "Pure Vegetarian" : "Non-Vegetarian"}
                                />
                                <span className="font-royal text-sm sm:text-base md:text-lg text-stone-900 font-semibold tracking-wide uppercase truncate">
                                  {item.name}
                                </span>
                              </div>

                              <div className="dotted-leader flex-1 min-w-[12px] sm:min-w-[20px] h-[1px]"></div>

                              <span className="font-royal text-base sm:text-lg text-[#8c6721] font-bold tabular-nums shrink-0 ml-2">
                                ₹{item.price}
                              </span>
                            </div>

                            {/* Second row: Handcrafted Editorial Description */}
                            <p className="font-serif-luxury text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed italic pr-2">
                              {item.description}
                            </p>

                            {/* Handwritten Chef Callout Note if present */}
                            {item.chefNote && (
                              <div className="mt-1">
                                <span className="font-royal-script text-base sm:text-lg text-[#8c6721] font-semibold">
                                  ✦ {item.chefNote}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Accompanying Cutout Illustration on Desktop & Tablet */}
                    {art && (
                      <div className="lg:col-span-4 flex flex-col items-center justify-center pt-4 lg:pt-0">
                        <div className="relative group max-w-[200px] sm:max-w-[240px] text-center">
                          <div className="absolute -bottom-3 inset-x-4 h-4 bg-stone-950/10 rounded-full blur-md"></div>
                          <img 
                            src={art.image} 
                            alt={`${category} specialty`}
                            referrerPolicy="no-referrer"
                            className="w-full h-auto max-h-48 sm:max-h-56 object-contain floating-dish"
                          />
                          <div className="mt-2 bg-[#fffdf9] border border-[#b38838]/40 px-3 py-1 rounded inline-block shadow-xs">
                            <span className="font-royal-script text-base sm:text-lg text-[#8c6721] font-semibold">
                              {art.note}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
