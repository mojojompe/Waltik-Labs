import React, { useRef, useState, useEffect } from 'react';


interface MobileCarouselProps {
  children: React.ReactNode[];
  className?: string;
}

export function MobileCarousel({ children, className = '' }: MobileCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollPosition = el.scrollLeft;
      const width = el.clientWidth;
      const index = Math.round(scrollPosition / width);
      setActiveIndex(index);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children.map((child, idx) => (
          <div key={idx} className="w-full shrink-0 snap-center px-2">
            {child}
          </div>
        ))}
      </div>
      
      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {children.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === idx 
                ? 'w-6 h-1.5 bg-[#058789]' 
                : 'w-1.5 h-1.5 bg-black/10 hover:bg-black/20'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
