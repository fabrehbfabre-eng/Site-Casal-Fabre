import React from 'react';
import { Heart, MessageCircleHeart, Sparkles } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';

export default function AboutAuthors() {
  return (
    <section
      id="autores"
      aria-labelledby="autores-title"
      className="py-20 md:py-28 bg-[#081711] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Decorative Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#132C21]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          
          {/* Eyebrow Seal */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#132C21] border border-[#C5A059]/40 text-[#E5C78A] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>QUEM SOMOS • CASAL FABRE</span>
          </div>

          {/* Title */}
          <h2
            id="autores-title"
            className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] leading-tight"
          >
            Heberson & Katia Fabre
          </h2>

          {/* Editorial Highlight Phrase */}
          <p className="font-serif italic text-lg sm:text-xl text-[#E5C78A] max-w-2xl mx-auto leading-relaxed">
            &ldquo;Não estamos falando de um relacionamento perfeito. Estamos falando de uma vida a dois real.&rdquo;
          </p>
        </header>

        {/* Main 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Official Couple Photography */}
          <figure className="lg:col-span-5 flex justify-center m-0">
            <div className="relative max-w-xs sm:max-w-sm w-full">
              {/* Photo Frame with subtle gold border, rounded corners, and soft shadow */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/40 bg-[#050E0B] shadow-[0_20px_50px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src={PRODUCT_CONFIG.images.coupleRealPhoto}
                  alt="Heberson e Katia Fabre | Casal Fabre"
                  className="w-full h-auto object-contain select-none"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Floating Monogram CF */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#081711] border border-[#C5A059] flex items-center justify-center text-[#E5C78A] shadow-xl">
                <span className="font-editorial text-sm font-bold tracking-wider">CF</span>
              </div>
            </div>
          </figure>

          {/* Right Column: Narrative, Pillars of Real Relationship & Final Quote */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Narrative Text */}
            <div className="space-y-4 text-base sm:text-lg text-[#E3DCD3] font-light leading-relaxed">
              <p className="font-medium text-[#FAF8F5]">
                Somos Heberson e Katia Fabre, o Casal Fabre.
              </p>
              <p>
                Ao longo da nossa história, aprendemos que relacionamentos sólidos não nascem prontos — eles são construídos na convivência diária, no diálogo paciente e na decisão mútua de continuar escolhendo um ao outro.
              </p>
              <p>
                Sabemos que a rotina, o cansaço e as responsabilidades podem criar um distanciamento silencioso. Muitas vezes não falta amor; falta presença, atenção e pequenos gestos que mantêm o carinho e o desejo vivos.
              </p>
              <p>
                Foi a partir das nossas próprias vivências e reflexões sobre casamento que nasceu o livro <em>O Prazer da Vida a Dois</em>.
              </p>
            </div>

            {/* 3 Real Relationship Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 border-t border-white/10">
              <div className="bg-[#0A1A14]/90 border border-[#C5A059]/20 rounded-xl p-4 text-center space-y-1.5">
                <div className="flex justify-center text-[#C5A059]">
                  <MessageCircleHeart className="w-5 h-5" />
                </div>
                <span className="font-editorial text-xs font-bold uppercase tracking-wider text-[#E5C78A] block">
                  Diálogo & Escuta
                </span>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Conversas francas que aproximam e dissolvem a distância silenciosa.
                </p>
              </div>

              <div className="bg-[#0A1A14]/90 border border-[#C5A059]/20 rounded-xl p-4 text-center space-y-1.5">
                <div className="flex justify-center text-[#C5A059]">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="font-editorial text-xs font-bold uppercase tracking-wider text-[#E5C78A] block">
                  Afeto & Desejo
                </span>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  O toque, a admiração e a cumplicidade cultivados no dia a dia.
                </p>
              </div>

              <div className="bg-[#0A1A14]/90 border border-[#C5A059]/20 rounded-xl p-4 text-center space-y-1.5">
                <div className="flex justify-center text-[#C5A059]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-editorial text-xs font-bold uppercase tracking-wider text-[#E5C78A] block">
                  Escolha Diária
                </span>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  A consciência de que cuidar da relação é um compromisso contínuo.
                </p>
              </div>
            </div>

            {/* Final Connection Quote Block */}
            <div className="bg-[#0D2119]/90 border border-[#C5A059]/35 rounded-2xl p-6 sm:p-7 shadow-lg relative overflow-hidden backdrop-blur-sm">
              <div className="space-y-2.5">
                <p className="text-sm sm:text-base text-[#FAF8F5]/90 font-light leading-relaxed">
                  Este livro não nasceu para ensinar uma fórmula mágica ou um casamento perfeito. Ele nasceu para ajudar casais reais a resgatarem o olhar, o carinho e o prazer de caminhar juntos.
                </p>
                <div className="pt-2 text-right">
                  <span className="font-editorial text-sm sm:text-base font-semibold text-[#E5C78A] tracking-wide">
                    Heberson & Katia Fabre
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
