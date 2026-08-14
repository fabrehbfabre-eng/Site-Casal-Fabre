import React from 'react';
import { Heart, MessageSquare, Sparkles } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';

export default function SocialProofPlaceholder() {
  return (
    <section
      id="depoimentos"
      className="py-16 md:py-20 bg-[#FAF8F5] text-[#1D2B24] border-y border-[#E3DACD]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="w-12 h-12 rounded-full bg-[#11281E]/10 border border-[#8C6D2D]/30 flex items-center justify-center mx-auto text-[#8C6D2D]">
          <Heart className="w-5 h-5 fill-[#8C6D2D]/20" />
        </div>

        <div className="space-y-2">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0D2119]">
            Compromisso com a Verdade e a Transparência
          </h2>
          <p className="text-sm sm:text-base text-[#465A51] max-w-2xl mx-auto leading-relaxed">
            Aqui no <strong>Casal Fabre</strong>, prezamos pelo respeito aos nossos leitores. Não utilizamos depoimentos fabricados ou números artificiais. Cada mensagem que compartilhamos nasce de vidas e casais reais.
          </p>
        </div>

        <div className="bg-white border border-[#E3DACD] rounded-2xl p-6 sm:p-8 max-w-xl mx-auto shadow-sm text-center space-y-3">
          <MessageSquare className="w-6 h-6 text-[#8C6D2D] mx-auto opacity-70" />
          <p className="text-xs sm:text-sm text-[#2D3E35] italic">
            "Leu o livro e colocou em prática os desafios de 7 dias com seu amor? Queremos ouvir sua história!"
          </p>
          <a
            href={`mailto:${PRODUCT_CONFIG.supportEmail}?subject=Relato%20sobre%20O%20Prazer%20da%20Vida%20a%20Dois`}
            className="inline-block text-xs font-semibold text-[#8C6D2D] hover:underline"
          >
            Envie seu relato para {PRODUCT_CONFIG.supportEmail}
          </a>
        </div>

      </div>
    </section>
  );
}
