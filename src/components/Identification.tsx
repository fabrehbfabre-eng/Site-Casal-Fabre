import React from 'react';
import { HeartCrack, Clock, MessageSquareOff, FlameKindling, Sparkles, Compass } from 'lucide-react';

export default function Identification() {
  const painPoints = [
    {
      title: "Conversas superficiais e raras",
      description: "Vocês conversam cada vez menos e, quando conversam, quase sempre o assunto se resume a boletos, tarefas de casa ou logística do dia.",
    },
    {
      title: "O carinho diário que foi diminuindo",
      description: "Aquele abraço demorado, o beijo de despedida e os toques espontâneos deram lugar ao piloto automático e à pressa.",
    },
    {
      title: "A rotina que engoliu o romance",
      description: "O cansaço do trabalho consome as noites e os fins de semana, transformando o casal em meros colegas de quarto e administração da casa.",
    },
    {
      title: "Pequenas coisas virando discussões",
      description: "Qualquer detalhe bobo ou discordância simples se torna motivo de faíscas, silêncios prolongados ou mágoas que não são conversadas.",
    },
    {
      title: "Juntos sob o mesmo teto, mas distantes",
      description: "Vocês dividem a mesma cama e a mesma casa, mas sentem no peito uma saudade silenciosa daquela conexão e cumplicidade do início.",
    },
    {
      title: "Mais obrigação do que encontro",
      description: "O relacionamento começou a parecer uma lista infindável de compromissos a cumprir, e não mais um refúgio de paz e alegria mútua.",
    },
  ];

  return (
    <section
      id="identificacao"
      className="py-20 md:py-28 bg-[#FAF8F5] text-[#1D2B24] relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#081711] to-transparent opacity-5 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11281E]/10 border border-[#11281E]/15 text-[#11281E] text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-[#8C6D2D]" />
            <span>Reflexão Sincera</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D2119] leading-tight">
            Quando a rotina começa a afastar quem antes era tão próximo
          </h2>

          <p className="text-base sm:text-lg text-[#33463E] font-normal leading-relaxed">
            O amor não costuma acabar de um dia para o outro. Na maioria das vezes, ele apenas vai sendo sufocado pelo ritmo acelerado dos dias, pelo silêncio acumulado e pela falta de pequenos rituais de cuidado.
          </p>
        </div>

        {/* Real Situations Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white border border-[#E3DACD] rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="font-editorial text-lg font-bold text-[#8C6D2D]">
                    0{index + 1}.
                  </span>
                  <h3 className="font-semibold text-lg text-[#0D2119]">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#465A51] leading-relaxed pl-7">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Central Reassuring Truth Box */}
        <div className="relative bg-[#0F261E] text-[#FAF8F5] rounded-2xl p-8 sm:p-10 border border-[#C5A059]/40 shadow-xl text-center overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative max-w-2xl mx-auto space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#1A3D2F] border border-[#C5A059]/40 flex items-center justify-center mx-auto text-[#E5C78A]">
              <Sparkles className="w-5 h-5" />
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#FAF8F5] leading-snug">
              Isso não significa que o relacionamento acabou.
            </h3>

            <p className="text-base sm:text-lg text-[#EDE5D8] leading-relaxed font-light">
              Às vezes, significa apenas que o relacionamento precisa <strong className="text-[#E5C78A] font-semibold">voltar a receber atenção</strong>, carinho intencional e pequenos novos hábitos cotidianos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
