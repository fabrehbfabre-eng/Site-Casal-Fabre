import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Livro', href: '#sobre-o-livro' },
    { label: '12 Capítulos', href: '#capitulos' },
    { label: 'O Que Há Dentro', href: '#experiencia' },
    { label: '6 Bônus', href: '#bonus' },
    { label: 'Casal Fabre', href: '#autores' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#081711]/95 backdrop-blur-md py-3.5 border-b border-[#C5A059]/20 shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-[#081711]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A059]/50 rounded-lg p-1"
          aria-label="Casal Fabre Início"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1b3a2c] to-[#0a1b14] border border-[#C5A059]/40 flex items-center justify-center shadow-md group-hover:border-[#C5A059] transition-colors">
            <span className="font-editorial text-lg font-bold text-[#E5C78A] tracking-wider">CF</span>
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-xl font-bold tracking-widest text-[#FAF8F5] uppercase group-hover:text-[#E5C78A] transition-colors">
              Casal Fabre
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-medium">
              Vida a Dois | Amor & Fé
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-[#FAF8F5]/80 hover:text-[#E5C78A] transition-colors tracking-wide cursor-pointer py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Header CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            id="header-cta-button"
            href={PRODUCT_CONFIG.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C5A059] via-[#D8B974] to-[#C5A059] text-[#081711] font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-xl hover:shadow-[#C5A059]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>{PRODUCT_CONFIG.ebookCtaText}</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#FAF8F5] hover:text-[#E5C78A] focus:outline-none focus:ring-2 focus:ring-[#C5A059] rounded-lg"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#081711] border-b border-[#C5A059]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-[#FAF8F5] hover:text-[#E5C78A] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#C5A059] text-xs">→</span>
              </button>
            ))}
          </nav>

          <div className="pt-4">
            <a
              id="mobile-drawer-cta-button"
              href={PRODUCT_CONFIG.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D8B974] to-[#C5A059] text-[#081711] font-bold text-sm uppercase tracking-wider shadow-lg"
            >
              <span>{PRODUCT_CONFIG.primaryCtaText}</span>
            </a>
            <p className="text-center text-[11px] text-white/50 mt-2">
              Acesso digital imediato por {PRODUCT_CONFIG.formattedPrice}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
