/**
 * Configuração Opcional de Rastreamento (Analytics)
 * 
 * Para ativar o Meta Pixel ou Google Analytics no seu domínio da Hostinger,
 * basta preencher as variáveis abaixo com seus IDs reais.
 * 
 * Se os campos ficarem vazios (''), nenhum script externo será executado,
 * garantindo 100% de privacidade e máxima velocidade de carregamento.
 */

export const ANALYTICS_CONFIG = {
  // Exemplo: '123456789012345'
  metaPixelId: '',

  // Exemplo: 'G-XXXXXXXXXX'
  googleAnalyticsId: '',
};

/**
 * Inicializador seguro de scripts de terceiros
 */
export function initAnalytics() {
  if (typeof window === 'undefined') return;

  // Iniciar Meta Pixel caso configurado
  if (ANALYTICS_CONFIG.metaPixelId) {
    try {
      /* eslint-disable */
      // @ts-ignore
      (function(f:any,b:any,e:any,v:any,n?:any,t?:any,s?:any){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)})(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      // @ts-ignore
      window.fbq('init', ANALYTICS_CONFIG.metaPixelId);
      // @ts-ignore
      window.fbq('track', 'PageView');
    } catch (e) {
      console.warn('Analytics Notice: Meta Pixel could not be initialized.', e);
    }
  }

  // Iniciar Google Analytics (GA4) caso configurado
  if (ANALYTICS_CONFIG.googleAnalyticsId) {
    try {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalyticsId}`;
      document.head.appendChild(script);

      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        // @ts-ignore
        window.dataLayer.push(args);
      }
      // @ts-ignore
      gtag('js', new Date());
      // @ts-ignore
      gtag('config', ANALYTICS_CONFIG.googleAnalyticsId);
    } catch (e) {
      console.warn('Analytics Notice: Google Analytics could not be initialized.', e);
    }
  }
}
