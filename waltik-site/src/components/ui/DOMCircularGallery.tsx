import React, { useRef, useEffect } from 'react';

interface DOMCircularGalleryProps {
  children: React.ReactNode;
  bendStrength?: number;
  rotationStrength?: number;
}

export default function DOMCircularGallery({
  children,
  bendStrength = 120,
  rotationStrength = 15
}: DOMCircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let lastScrollLeft = -1;
    let initialPositions: number[] = [];
    let containerCenter = 0;
    let maxDist = 0;

    const calculateLayout = () => {
      const cards = Array.from(container.children) as HTMLElement[];
      // We need to temporarily remove transforms to get accurate offsetLeft
      cards.forEach(card => {
        card.style.transform = 'none';
      });
      
      initialPositions = cards.map(card => card.offsetLeft + card.clientWidth / 2);
      containerCenter = container.clientWidth / 2;
      maxDist = container.clientWidth;
      lastScrollLeft = -1; // force update
    };

    const updateCards = () => {
      if (container.scrollLeft !== lastScrollLeft && initialPositions.length > 0) {
        lastScrollLeft = container.scrollLeft;
        const cards = Array.from(container.children) as HTMLElement[];

        cards.forEach((card, i) => {
          const cardCenter = initialPositions[i] - container.scrollLeft;
          const distanceFromCenter = cardCenter - containerCenter;

          // Bend calculation
          const normalized = Math.max(-1.5, Math.min(1.5, distanceFromCenter / (maxDist * 0.8)));
          const yOffset = Math.pow(normalized, 2) * bendStrength;
          const rotation = normalized * rotationStrength;

          card.style.transform = `translate3d(0, ${yOffset}px, 0) rotateZ(${rotation}deg)`;
        });
      }

      rafId = requestAnimationFrame(updateCards);
    };

    calculateLayout();
    window.addEventListener('resize', calculateLayout);
    updateCards();

    return () => {
      window.removeEventListener('resize', calculateLayout);
      cancelAnimationFrame(rafId);
    };
  }, [bendStrength, rotationStrength]);

  return (
    <div
      ref={containerRef}
      className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar items-center relative"
      style={{
        paddingLeft: 'calc(50vw - 120px)',
        paddingRight: 'calc(50vw - 120px)',
        paddingTop: '40px',
        paddingBottom: '80px',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}
    >
      {React.Children.map(children, (child) => (
        <div className="shrink-0 w-[240px] snap-center transition-transform duration-75 ease-out">
          {child}
        </div>
      ))}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
