import React from 'react';
import { PRODUCT_CONFIG } from '../config/offer';
import { ShieldCheck, Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#081711] via-[#0C2118] to-[#081711] text-[#FAF8F5]"
    >
      {/* Background Decorative Lighting & Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a4433]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Subtle Pattern Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(197,160,89,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy, Pricing & Immediate Action */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Top Tag / Monogram */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132C21] border border-[#C5A059]/30 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Sparkles className="w-3.5 h-3.5 text-[#E5C78A]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E5C78A]">
                Ebook Oficial • Casal Fabre
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-[#FAF8F5]">
              {PRODUCT_CONFIG.heroHeadline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-[#FAF8F5]/85 font-light leading-relaxed max-w-2xl">
              {PRODUCT_CONFIG.heroSubheadline}
            </p>

            {/* Value Highlights Pill Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-[#FAF8F5]/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>12 Capítulos Práticos</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#FAF8F5]/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>6 Bônus Inclusos</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#FAF8F5]/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Desafios de 7 Dias</span>
              </div>
            </div>

            {/* Pricing Box & Primary CTA */}
            <div className="w-full max-w-lg bg-[#0F261E]/90 border border-[#C5A059]/30 rounded-2xl p-6 shadow-2xl backdrop-blur-sm space-y-4 text-left">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-xs uppercase tracking-wider text-white/60 font-medium block">
                    Oferta de Lançamento
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold font-editorial text-[#E5C78A]">
                      {PRODUCT_CONFIG.formattedPrice}
                    </span>
                    <span className="text-xs text-white/60">pagamento único</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#1C3E2F] border border-[#C5A059]/40 text-[#E5C78A] text-[11px] font-semibold tracking-wide">
                    Livro + 6 Bônus
                  </span>
                </div>
              </div>

              {/* Main Button */}
              <a
                id="hero-primary-cta"
                href={PRODUCT_CONFIG.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#DFBE7A] to-[#C5A059] text-[#081711] font-bold text-base uppercase tracking-wider shadow-lg hover:shadow-2xl hover:shadow-[#C5A059]/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                <span>{PRODUCT_CONFIG.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Microcopy Under Button */}
              <div className="space-y-1.5 pt-1 text-[11px] sm:text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Acesso digital após a confirmação do pagamento</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>Pagamento processado com segurança • Garantia de 7 dias</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Background Ambient Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#C5A059]/15 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] mx-auto flex flex-col items-center">
              {/* Product Image */}
              <div className="w-full flex items-center justify-center">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=708,fit=crop/YZ9j7Zz5nNsVj0vb/capa-nova-u0tAbsFjBdWmpA3R.png"
                  alt="O Prazer da Vida a Dois - Casal Fabre - Heberson Fabre"
                  className="w-full h-auto max-h-[520px] object-contain drop-shadow-2xl select-none"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bonus Bundle Small Indicator Card */}
              <div className="mt-4 flex items-center justify-center gap-3 bg-[#0F261E]/90 border border-[#C5A059]/30 rounded-xl py-2.5 px-4 shadow-lg backdrop-blur-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8B974] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
                </span>
                <p className="text-xs text-[#FAF8F5] font-medium">
                  Inclui <strong className="text-[#E5C78A]">6 Guias Bônus Exclusivos</strong> no mesmo pacote
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
