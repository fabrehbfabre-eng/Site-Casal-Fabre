/**
 * Camada Centralizada e Segura de Analytics (Meta Pixel + Google Analytics 4)
 * 
 * Suporta IDs configurados via variáveis de ambiente (VITE_META_PIXEL_ID, VITE_GOOGLE_ANALYTICS_ID)
 * ou definidos diretamente no objeto ANALYTICS_CONFIG.
 * 
 * Se nenhum ID estiver configurado, nenhuma requisição externa ou erro é gerado.
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const ANALYTICS_CONFIG = {
  // Lê primeiramente de variáveis de ambiente do Vite ou fallback local
  metaPixelId: (import.meta.env.VITE_META_PIXEL_ID as string) || '',
  googleAnalyticsId: (import.meta.env.VITE_GOOGLE_ANALYTICS_ID as string) || '',
};

let isInitialized = false;

/**
 * Inicializador seguro dos scripts de rastreamento (executado uma única vez).
 */
export function initAnalytics() {
  if (typeof window === 'undefined' || isInitialized) return;
  isInitialized = true;

  const { metaPixelId, googleAnalyticsId } = ANALYTICS_CONFIG;

  // 1. Inicializar Meta Pixel se configurado
  if (metaPixelId && metaPixelId.trim() !== '') {
    try {
      /* eslint-disable */
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */

      if (window.fbq) {
        window.fbq('init', metaPixelId.trim());
        window.fbq('track', 'PageView');
      }
    } catch (e) {
      console.warn('Analytics Notice: Meta Pixel could not be initialized.', e);
    }
  }

  // 2. Inicializar Google Analytics (GA4) se configurado
  if (googleAnalyticsId && googleAnalyticsId.trim() !== '') {
    try {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId.trim()}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer?.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', googleAnalyticsId.trim(), {
        send_page_view: true,
      });
    } catch (e) {
      console.warn('Analytics Notice: Google Analytics could not be initialized.', e);
    }
  }

  // Dispara ViewContent padronizado na carga da página
  trackViewContent();
}

/**
 * Evento: ViewContent / view_item
 * Disparado para indicar que a oferta do produto foi visualizada pelo usuário.
 */
export function trackViewContent() {
  try {
    const itemData = {
      content_name: 'O Prazer da Vida a Dois',
      content_category: 'Ebook & Relacionamento',
      value: 19.97,
      currency: 'BRL',
    };

    // Meta Pixel
    if (typeof window !== 'undefined' && typeof window.fbq === 'function' && ANALYTICS_CONFIG.metaPixelId) {
      window.fbq('track', 'ViewContent', itemData);
    }

    // Google Analytics 4
    if (typeof window !== 'undefined' && typeof window.gtag === 'function' && ANALYTICS_CONFIG.googleAnalyticsId) {
      window.gtag('event', 'view_item', {
        currency: 'BRL',
        value: 19.97,
        items: [
          {
            item_name: 'O Prazer da Vida a Dois',
            item_category: 'Ebook',
            price: 19.97,
            quantity: 1,
          },
        ],
      });
    }
  } catch (err) {
    // Falha silenciosa para não quebrar a experiência do usuário
  }
}

/**
 * Evento: InitiateCheckout / begin_checkout
 * Disparado quando o usuário clica em qualquer CTA que o direciona para a página de pagamento (Kiwify).
 * 
 * @param ctaLocation Identificador da posição do botão na página (ex: 'header', 'offer', 'bonuses', 'sticky_mobile', 'chapters')
 */
export function trackInitiateCheckout(ctaLocation: string) {
  try {
    const checkoutData = {
      content_name: 'O Prazer da Vida a Dois + 6 Bônus',
      content_category: 'Ebook & Bônus',
      value: 19.97,
      currency: 'BRL',
      cta_location: ctaLocation,
    };

    // Meta Pixel: InitiateCheckout
    if (typeof window !== 'undefined' && typeof window.fbq === 'function' && ANALYTICS_CONFIG.metaPixelId) {
      window.fbq('track', 'InitiateCheckout', checkoutData);
    }

    // GA4: begin_checkout
    if (typeof window !== 'undefined' && typeof window.gtag === 'function' && ANALYTICS_CONFIG.googleAnalyticsId) {
      window.gtag('event', 'begin_checkout', {
        currency: 'BRL',
        value: 19.97,
        cta_location: ctaLocation,
        items: [
          {
            item_name: 'O Prazer da Vida a Dois + 6 Bônus',
            item_category: 'Ebook',
            price: 19.97,
            quantity: 1,
          },
        ],
      });
    }
  } catch (err) {
    // Falha silenciosa para não impactar navegação
  }
}
