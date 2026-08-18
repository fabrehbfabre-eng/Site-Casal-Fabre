import { useState, useEffect } from 'react';
import { PRODUCT_CONFIG } from '../config/offer';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { trackInitiateCheckout } from '../config/analytics';

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 400px (past hero)
      const shouldShow = window.scrollY > 450;
      setVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Acesso Rápido de Compra"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#081711]/95 backdrop-blur-md border-t border-[#C5A059]/30 p-3 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">
            Ebook + 6 Bônus
          </span>
          <span className="font-editorial text-xl font-bold text-[#E5C78A] leading-none">
            {PRODUCT_CONFIG.formattedPrice}
          </span>
        </div>

        <a
          id="sticky-mobile-cta"
          href={PRODUCT_CONFIG.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackInitiateCheckout('sticky_mobile_bar')}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#DFBE7A] to-[#C5A059] text-[#081711] font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform"
        >
          <span>{PRODUCT_CONFIG.ebookCtaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
}
