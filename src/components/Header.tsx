import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { PRODUCT_CONFIG } from '../config/offer';
import { trackInitiateCheckout } from '../config/analytics';

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
          ? 'bg-[#180B0E]/95 backdrop-blur-md py-3.5 border-b border-[#C9A24A]/20 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-[#180B0E]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Oficial */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C9A24A]/50 rounded-lg p-1"
          aria-label="Casal Fabre Início"
        >
          <img
            src={PRODUCT_CONFIG.images.officialLogo}
            alt="Casal Fabre Logo Oficial"
            className="h-10 sm:h-11 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex flex-col">
            <span className="font-editorial text-xl font-bold tracking-widest text-[#F4EFE5] uppercase group-hover:text-[#E0C477] transition-colors">
              Casal Fabre
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#C9A24A] uppercase font-medium">
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
              className="text-sm font-medium text-[#F4EFE5]/80 hover:text-[#E0C477] transition-colors tracking-wide cursor-pointer py-1"
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
            onClick={() => trackInitiateCheckout('header_desktop')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C9A24A] via-[#E0C477] to-[#C9A24A] text-[#180B0E] font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-xl hover:shadow-[#C9A24A]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>{PRODUCT_CONFIG.ebookCtaText}</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F4EFE5] hover:text-[#E0C477] focus:outline-none focus:ring-2 focus:ring-[#C9A24A] rounded-lg"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#180B0E] border-b border-[#C9A24A]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-[#F4EFE5] hover:text-[#E0C477] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#C9A24A] text-xs">→</span>
              </button>
            ))}
          </nav>

          <div className="pt-4">
            <a
              id="mobile-drawer-cta-button"
              href={PRODUCT_CONFIG.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout('header_mobile_drawer')}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C9A24A] via-[#E0C477] to-[#C9A24A] text-[#180B0E] font-bold text-sm uppercase tracking-wider shadow-lg"
            >
              <span>{PRODUCT_CONFIG.primaryCtaText}</span>
            </a>
            <p className="text-center text-[11px] text-[#F4EFE5]/50 mt-2">
              Acesso digital imediato por {PRODUCT_CONFIG.formattedPrice}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
