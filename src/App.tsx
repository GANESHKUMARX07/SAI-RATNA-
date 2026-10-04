import React from 'react';
import { MENU_ITEMS } from './data/menuData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RatnaSignatures } from './components/RatnaSignatures';
import { HandcraftedMenu } from './components/HandcraftedMenu';
import { RestaurantGallery } from './components/RestaurantGallery';
import { HeritageStory } from './components/HeritageStory';
import { Footer } from './components/Footer';

export default function App() {
  // Signatures filtered from menu data
  const signatureItems = MENU_ITEMS.filter(item => item.isSignature && item.image);

  const scrollToMenu = () => {
    const el = document.getElementById('our-menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden relative menu-paper-texture selection:bg-[#ebdcc8] selection:text-stone-900 text-stone-900 font-serif-luxury">
      {/* Top Navigation Header with Sai Ratna Restaurant */}
      <Header />

      <main>
        {/* Cinematic Hero Section with Authentic Restaurant Photo & A Taste Worth Remembering */}
        <Hero
          onExploreMenu={scrollToMenu}
          onExploreGallery={scrollToGallery}
        />

        {/* Sai Ratna Signatures Section with HD Cutouts & Soft Natural Shadows */}
        <RatnaSignatures
          signatureItems={signatureItems}
        />

        {/* Complete Handcrafted Menu in Classic White / Ivory Editorial Layout */}
        <HandcraftedMenu
          items={MENU_ITEMS}
        />

        {/* Editorial Restaurant Gallery (Interior, Exterior, Ambience, Tandoor, Food) with Lightbox */}
        <RestaurantGallery />

        {/* Culinary Heritage & Craftsmanship */}
        <HeritageStory />
      </main>

      {/* Luxury Restaurant Footer with Google Maps Reference & Timings */}
      <Footer />
    </div>
  );
}
