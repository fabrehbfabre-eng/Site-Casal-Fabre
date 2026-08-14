import React from 'react';
import { Sparkles } from 'lucide-react';

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
            <span>QUEM ESTÁ POR TRÁS DO LIVRO</span>
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
            &ldquo;Não acreditamos em relacionamentos perfeitos. Acreditamos em casais que escolhem cuidar um do outro todos os dias.&rdquo;
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
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=525,fit=crop/YZ9j7Zz5nNsVj0vb/casal-fabre-1-photoroom-f1cKR1RJdl44WCEn.png"
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

          {/* Right Column: Narrative, Identity Indicators & Final Quote */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Narrative Text */}
            <div className="space-y-4 text-base sm:text-lg text-[#E3DCD3] font-light leading-relaxed">
              <p className="font-medium text-[#FAF8F5]">
                Somos Heberson e Katia Fabre, o Casal Fabre.
              </p>
              <p>
                Ao longo da nossa caminhada, percebemos que muitos relacionamentos não terminam por falta de amor. Muitas vezes, eles simplesmente deixam de receber a atenção, o diálogo, o carinho e a presença que fizeram parte do início da história.
              </p>
              <p>
                Foi dessa experiência e desse desejo de ajudar outros casais que nasceu <em>O Prazer da Vida a Dois</em>.
              </p>
              <p>
                Este livro reúne princípios, reflexões e práticas simples para casais que desejam fortalecer a conexão, recuperar a cumplicidade e voltar a cuidar conscientemente da relação.
              </p>
            </div>

            {/* 3 Identity Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 border-t border-white/10">
              <div className="bg-[#0A1A14]/90 border border-[#C5A059]/20 rounded-xl p-3.5 text-center">
                <span className="font-editorial text-xs font-bold uppercase tracking-wider text-[#E5C78A] block mb-0.5">
                  CASAL FABRE
                </span>
                <span className="text-xs text-white/70 block leading-tight">
                  Vida a Dois | Amor & Fé
                </span>
              </div>

              <div className="bg-[#0A1A14]/90 border border-[#C5A059]/20 rounded-xl p-3.5 text-center">
                <span className="font-editorial text-sm font-bold uppercase tracking-wider text-[#E5C78A] block mb-0.5">
                  +22 LIVROS
                </span>
                <span className="text-xs text-white/70 block leading-tight">
                  Experiência editorial de Heberson Fabre
                </span>
              </div>

              <div className="bg-[#0A1A14]/90 border border-[#C5A059]/20 rounded-xl p-3.5 text-center">
                <span className="font-editorial text-sm font-bold uppercase tracking-wider text-[#E5C78A] block mb-0.5">
                  +4 MILHÕES
                </span>
                <span className="text-xs text-white/70 block leading-tight">
                  Pessoas alcançadas nas redes sociais
                </span>
              </div>
            </div>

            {/* Final Highlight Quote Block */}
            <div className="bg-[#0D2119]/90 border border-[#C5A059]/35 rounded-2xl p-6 sm:p-7 shadow-lg relative overflow-hidden backdrop-blur-sm">
              <div className="space-y-2.5">
                <p className="text-sm sm:text-base text-[#FAF8F5]/90 font-light leading-relaxed">
                  Este livro nasceu da experiência de quem acredita que o amor não precisa ser perfeito para ser profundo.
                </p>
                <p className="font-editorial text-lg sm:text-xl font-bold text-[#FAF8F5] leading-snug">
                  Precisa ser cuidado.
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
