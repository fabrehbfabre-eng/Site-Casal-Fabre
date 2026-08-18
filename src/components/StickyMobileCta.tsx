import { useState, useEffect } from 'react';

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA slot after scrolling 450px (past hero)
      const shouldShow = window.scrollY > 450;
      setVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Espaço Reservado de Compra"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#180B0E]/95 backdrop-blur-md border-t border-[#C9A24A]/30 p-3 shadow-2xl animate-in slide-in-from-bottom duration-300 pointer-events-none select-none"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">
            15 Capítulos + 6 Bônus
          </span>
          <span className="font-editorial text-sm font-bold text-[#E0C477] leading-tight">
            O Prazer da Vida a Dois
          </span>
        </div>

        {/* Reserved Mobile Slot (Transparent layout space) */}
        <div
          id="sticky-mobile-cta-slot"
          className="flex-1 h-[42px] bg-transparent"
          aria-hidden="true"
        />
      </div>
    </aside>
  );
}
