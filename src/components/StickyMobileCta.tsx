import { useState, useEffect } from 'react';
import { PRODUCT_CONFIG } from '../config/offer';
import { trackInitiateCheckout } from '../config/analytics';

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 450px (past hero)
      const shouldShow = window.scrollY > 450;
      setVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Barra de Compra Rápida"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#180B0E]/95 backdrop-blur-md border-t border-[#C9A24A]/30 p-3 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">
            15 Capítulos + 12 Bônus
          </span>
          <span className="font-editorial text-sm font-bold text-[#E0C477] leading-tight">
            {PRODUCT_CONFIG.price}
          </span>
        </div>

        {/* Mobile Sticky CTA Button */}
        <a
          id="sticky-mobile-cta-button"
          href={PRODUCT_CONFIG.checkoutUrl}
          onClick={() => trackInitiateCheckout('sticky_mobile')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[210px] inline-flex items-center justify-center py-2.5 px-3 rounded-xl font-bold text-xs text-[#180B0E] bg-gradient-to-r from-[#C9A24A] via-[#E0C477] to-[#C9A24A] hover:brightness-110 shadow-lg uppercase tracking-wider text-center cursor-pointer active:scale-95 transition-all"
        >
          QUERO O LIVRO
        </a>
      </div>
    </aside>
  );
}
