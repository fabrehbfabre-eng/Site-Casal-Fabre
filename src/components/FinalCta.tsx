import { Heart } from 'lucide-react';

export default function FinalCta() {
  return (
    <section
      id="chamada-final"
      className="py-20 md:py-28 bg-gradient-to-b from-[#081711] via-[#0C2118] to-[#081711] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Caixa verde com borda dourada */}
        <div className="bg-[#0F261E]/90 border border-[#C5A059]/40 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-2xl space-y-6 backdrop-blur-xs">
          {/* Heart Icon */}
          <div className="w-12 h-12 rounded-full bg-[#132C21] border border-[#C5A059]/40 flex items-center justify-center mx-auto text-[#E5C78A] shadow-lg">
            <Heart className="w-6 h-6 fill-[#E5C78A]/20" />
          </div>

          {/* Headlines / Mensagem Final */}
          <div className="space-y-4">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF8F5] leading-tight">
              Talvez vocês não precisem de mais uma promessa.
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E5C78A] leading-relaxed">
              “Talvez precisem apenas voltar a cuidar, conversar, tocar, rir e viver juntos.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

