import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Star, MessageSquareHeart, Quote } from 'lucide-react';

export default function SocialProof() {
  // Duplicamos a lista para criar o loop contínuo perfeitamente fluido e infinito
  const infiniteTestimonials = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section
      id="depoimentos"
      aria-labelledby="social-proof-title"
      className="py-20 md:py-28 bg-[#180B0E] text-[#F4EFE5] relative overflow-hidden"
    >
      {/* Decorative Subtle Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C9A24A]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#4A1722]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12 sm:mb-16">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A1722]/60 border border-[#C9A24A]/40 text-[#E0C477] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>PROVA SOCIAL</span>
          </div>

          {/* Main Title */}
          <h2
            id="social-proof-title"
            className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4EFE5] leading-tight"
          >
            O que leitores estão dizendo sobre os livros do Casal Fabre
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#F4EFE5]/80 font-light leading-relaxed">
            Relatos espontâneos de leitores que vivenciaram novas perspectivas e reflexões na vida a dois.
          </p>
        </header>
      </div>

      {/* Infinite Horizontal Carousel Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Gradient Shadows for Seamless Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#180B0E] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#180B0E] to-transparent z-10" />

        {/* Marquee Track (Left to Right Animation) */}
        <div
          className="animate-marquee-right flex gap-5 sm:gap-6 pl-4 cursor-grab active:cursor-grabbing"
          role="region"
          aria-label="Carrossel contínuo de depoimentos de leitores"
        >
          {infiniteTestimonials.map((item, index) => {
            return (
              <article
                key={`${item.id}-${index}`}
                className="w-[300px] sm:w-[340px] md:w-[360px] shrink-0 bg-[#241115]/95 border border-[#C9A24A]/25 hover:border-[#C9A24A] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_35px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-sm group select-none"
              >
                {/* Card Top: Author Info & Rating */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3.5">
                      {/* Avatar */}
                      <img
                        src={item.avatarUrl}
                        alt={`Foto de ${item.name}`}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C9A24A]/40 group-hover:ring-[#C9A24A] transition-all duration-300 shadow-md shrink-0"
                      />
                      
                      {/* Name & Book */}
                      <div>
                        <h3 className="font-editorial font-bold text-base sm:text-lg text-[#F4EFE5] leading-snug group-hover:text-[#E0C477] transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#E0C477]/85 font-medium tracking-wide">
                          {item.book}
                        </p>
                      </div>
                    </div>

                    {/* Subtle Quote Icon */}
                    <Quote className="w-5 h-5 text-[#C9A24A]/30 shrink-0" />
                  </div>

                  {/* Stars Rating */}
                  <div
                    className="flex items-center gap-1 mb-4"
                    aria-label={`Avaliação: ${item.rating} de 5 estrelas`}
                  >
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFilled = star <= item.rating;
                      return (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            isFilled
                              ? 'text-[#C9A24A] fill-[#C9A24A]'
                              : 'text-white/20 fill-transparent'
                          }`}
                        />
                      );
                    })}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm text-[#F4EFE5]/85 font-light leading-relaxed italic">
                    {item.comment}
                  </p>
                </div>

                {/* Card Bottom: Verified Reader Indicator */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#E0C477]/70 font-medium">
                  <span>Leitor verificado</span>
                  <span className="text-white/30">|</span>
                  <span>Avaliação real</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
