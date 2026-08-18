import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { HelpCircle, Plus, Minus, ShieldCheck } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';

export default function FaqSection() {
  // All closed initially
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-20 md:py-28 bg-[#081711] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Decorative Subtle Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#132C21]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-4">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132C21] border border-[#C5A059]/40 text-[#E5C78A] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>AINDA TEM DÚVIDAS?</span>
          </div>

          {/* Main Title */}
          <h2
            id="faq-title"
            className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] leading-tight"
          >
            PERGUNTAS FREQUENTES
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#E3DCD3] font-light leading-relaxed">
            Reunimos as principais perguntas para você comprar com tranquilidade.
          </p>
        </header>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5" role="region" aria-label="Lista de Perguntas Frequentes">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openFaqId === faq.id;
            const contentId = `faq-content-${faq.id}`;
            const buttonId = `faq-btn-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`bg-[#0A1A14]/90 border rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-sm ${
                  isOpen
                    ? 'border-[#C5A059] shadow-[0_8px_24px_rgba(0,0,0,0.4)] bg-[#0D2119]/95'
                    : 'border-[#C5A059]/20 hover:border-[#C5A059]/50'
                }`}
              >
                <button
                  id={buttonId}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full px-5 sm:px-6 py-4.5 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] transition-colors"
                >
                  <span className="font-editorial font-medium text-base sm:text-lg text-[#FAF8F5] leading-snug">
                    <span className="text-[#E5C78A]/60 mr-2 text-sm font-sans font-semibold">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    {faq.question}
                  </span>

                  {/* + / − Indicator */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#C5A059] border-[#C5A059] text-[#081711] rotate-180'
                        : 'bg-[#132C21] border-[#C5A059]/30 text-[#E5C78A] hover:border-[#C5A059]'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'max-h-96 opacity-100 px-5 sm:px-6 pb-5 sm:pb-6 pt-1 border-t border-white/10'
                      : 'max-h-0 opacity-0 overflow-hidden px-5 sm:px-6 py-0'
                  }`}
                >
                  <p className="text-sm sm:text-base text-[#FAF8F5]/85 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Block After FAQ */}
        <div className="mt-14 sm:mt-16 bg-[#0A1A14]/95 border border-[#C5A059]/40 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Subtle Corner Glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-2">
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF8F5]">
              Pronto para começar a cuidar mais da vida a dois?
            </h3>
          </div>

          <div className="flex items-center justify-center gap-4 text-[11px] text-white/60 pt-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Garantia de 7 dias</span>
            </div>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-1.5">
              <span>Acesso imediato e seguro</span>
            </div>
          </div>
        </div>

        {/* Support Note */}
        <div className="mt-8 text-center text-xs sm:text-sm text-white/50 font-light">
          Ainda ficou com alguma dúvida? Entre em contato pelo e-mail:{' '}
          <a
            href={`mailto:${PRODUCT_CONFIG.supportEmail}`}
            className="text-[#E5C78A] font-medium underline hover:text-[#FAF8F5] transition-colors"
          >
            {PRODUCT_CONFIG.supportEmail}
          </a>
        </div>

      </div>
    </section>
  );
}
