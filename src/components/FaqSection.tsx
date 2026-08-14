import { useState } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[#FAF8F5] text-[#1D2B24] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11281E]/10 border border-[#11281E]/15 text-[#11281E] text-xs font-semibold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#8C6D2D]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D2119] leading-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-base sm:text-lg text-[#33463E] font-normal leading-relaxed">
            Respostas diretas e transparentes sobre a compra, entrega e acesso ao material.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#C5A059] shadow-md'
                    : 'border-[#E3DACD] hover:border-[#8C6D2D]/40'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-[#FAF8F5]"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-[#0D2119] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#0D2119] text-[#E5C78A] rotate-180'
                        : 'bg-[#FAF8F5] text-[#8C6D2D]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#465A51] leading-relaxed border-t border-[#FAF8F5] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#5C6E65]">
          Ainda ficou com alguma dúvida? Entre em contato conosco pelo e-mail:{' '}
          <a
            href={`mailto:${PRODUCT_CONFIG.supportEmail}`}
            className="text-[#8C6D2D] font-semibold underline"
          >
            {PRODUCT_CONFIG.supportEmail}
          </a>
        </div>

      </div>
    </section>
  );
}
