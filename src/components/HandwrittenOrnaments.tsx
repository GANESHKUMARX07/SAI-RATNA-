import React from 'react';

export const StarAniseIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Central core */}
    <circle cx="24" cy="24" r="3.5" strokeWidth="1.2" />
    {/* 8 star petals */}
    <path d="M24 20.5 C23 15 21 8 24 4 C27 8 25 15 24 20.5" />
    <path d="M24 27.5 C25 33 27 40 24 44 C21 40 23 33 24 27.5" />
    <path d="M20.5 24 C15 25 8 27 4 24 C8 21 15 23 20.5 24" />
    <path d="M27.5 24 C33 23 40 21 44 24 C40 27 33 25 27.5 24" />
    {/* diagonals */}
    <path d="M21.5 21.5 C17 17 11 11 10 10 C14 13 20 19 21.5 21.5" />
    <path d="M26.5 26.5 C31 31 37 37 38 38 C34 35 28 29 26.5 26.5" />
    <path d="M26.5 21.5 C31 17 37 11 38 10 C34 13 28 19 26.5 21.5" />
    <path d="M21.5 26.5 C17 31 11 37 10 38 C14 35 20 29 21.5 26.5" />
    {/* small seed seeds */}
    <circle cx="24" cy="11" r="1" fill="currentColor" />
    <circle cx="24" cy="37" r="1" fill="currentColor" />
    <circle cx="11" cy="24" r="1" fill="currentColor" />
    <circle cx="37" cy="24" r="1" fill="currentColor" />
  </svg>
);

export const CardamomIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 4 C11 10 9 20 14 28 C17 32 20 32 23 28 C28 20 26 10 18 4 Z" />
    <path d="M18 5 C15 13 15 22 18 31" strokeDasharray="1 3" />
    <path d="M14 15 C16 16 20 16 22 15" />
    <path d="M13 21 C16 22 20 22 23 21" />
  </svg>
);

export const CinnamonIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 12 L30 6 C32 5.5 34 7 34 9 L32 30 C32 32 30 34 28 34.5 L6 40.5 C4 41 2 39.5 2 37.5 L4 16.5 C4 14.5 6 12.5 8 12 Z" />
    <ellipse cx="6" cy="16" rx="3" ry="4" strokeWidth="1.2" />
    <path d="M6 16 C10 18 18 16 32 10" />
    <path d="M5 24 C11 26 21 23 33 18" />
  </svg>
);

export const HandDrawnDivider: React.FC<{ title?: string; className?: string }> = ({ title, className = 'my-8' }) => (
  <div className={`flex items-center justify-center gap-1.5 sm:gap-3 text-amber-800/60 w-full max-w-full overflow-hidden px-2 ${className}`}>
    <div className="relative flex-1 max-w-[40px] sm:max-w-[100px] md:max-w-[180px] h-[2px] shrink">
      <svg className="w-full h-3 overflow-visible" preserveAspectRatio="none" viewBox="0 0 200 12">
        <path d="M 0,6 Q 50,2 100,6 T 200,6" fill="none" stroke="#b38838" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />
        <circle cx="200" cy="6" r="2" fill="#b38838" opacity="0.7" />
      </svg>
    </div>
    
    <div className="flex items-center gap-1 sm:gap-2 px-1 text-stone-700 shrink-0">
      <span className="text-amber-700 text-[10px] sm:text-xs">✦</span>
      {title && (
        <span className="font-royal text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.25em] uppercase text-stone-800 font-semibold px-1">
          {title}
        </span>
      )}
      <span className="text-amber-700 text-[10px] sm:text-xs">✦</span>
    </div>

    <div className="relative flex-1 max-w-[40px] sm:max-w-[100px] md:max-w-[180px] h-[2px] shrink">
      <svg className="w-full h-3 overflow-visible" preserveAspectRatio="none" viewBox="0 0 200 12">
        <circle cx="0" cy="6" r="2" fill="#b38838" opacity="0.7" />
        <path d="M 0,6 Q 50,10 100,6 T 200,6" fill="none" stroke="#b38838" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />
      </svg>
    </div>
  </div>
);

export const VintageCornerOrnament: React.FC<{ position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({ 
  position = 'top-left',
  className = 'w-10 h-10'
}) => {
  const rotation = {
    'top-left': '',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]',
    'bottom-right': 'rotate-180'
  }[position];

  return (
    <svg viewBox="0 0 60 60" fill="none" stroke="#b38838" strokeWidth="1.2" className={`${className} ${rotation} pointer-events-none opacity-40`}>
      <path d="M 4 4 L 4 36 C 4 38 6 40 8 38 C 10 36 10 20 20 10 C 30 0 46 2 48 4 C 50 6 48 8 46 8 L 14 8 C 8 8 8 14 8 46 L 8 48 C 8 50 6 52 4 52" strokeLinecap="round" />
      <circle cx="6" cy="6" r="2.5" fill="#b38838" />
      <path d="M 12 12 Q 22 22 32 12" strokeLinecap="round" />
      <path d="M 12 12 Q 22 22 12 32" strokeLinecap="round" />
      <circle cx="22" cy="22" r="1.5" fill="#b38838" />
    </svg>
  );
};

export const HandDrawnFlourish: React.FC<{ className?: string }> = ({ className = 'w-32 h-6' }) => (
  <svg viewBox="0 0 200 30" fill="none" stroke="#b38838" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 15 C 45 5, 80 25, 100 15 C 120 5, 155 25, 190 15" opacity="0.6" />
    <circle cx="100" cy="15" r="3" fill="#b38838" opacity="0.8" />
    <path d="M 90 15 C 95 12, 105 12, 110 15" opacity="0.7" />
  </svg>
);

export const HandwrittenBadge: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <span className={`inline-block font-handwriting text-amber-800 text-lg sm:text-xl transform -rotate-2 select-none ${className}`}>
    ~ {text} ~
  </span>
);
