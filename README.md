# Landing Page Premium | Casal Fabre
## Produto: O Prazer da Vida a Dois (Ebook Digital + 6 Bônus)

Esta é a landing page oficial do produto editorial **"O Prazer da Vida a Dois"**, de **Heberson Fabre** (**Casal Fabre**).

Desenvolvida com **React, TypeScript, Tailwind CSS e Vite**, a aplicação é **100% estática e independente**. Não possui dependências de servidor, banco de dados, Firebase ou APIs externas para funcionamento da página, podendo ser exportada para o GitHub e publicada em qualquer hospedagem estática (como **Hostinger**, Vercel, Netlify, Cloudflare Pages, etc.).

---

## Sumário do Manual

1. [Como Instalar as Dependências](#1-como-instalar-as-dependências)
2. [Como Executar Localmente](#2-como-executar-localmente)
3. [Como Gerar o Build de Produção](#3-como-gerar-o-build-de-produção)
4. [Onde Encontrar a Pasta dist](#4-onde-encontrar-a-pasta-dist)
5. [Como Publicar na Hostinger](#5-como-publicar-na-hostinger)
6. [Como Alterar o Link da Kiwify (Checkout)](#6-como-alterar-o-link-da-kiwify)
7. [Como Substituir Imagens (Fotos dos Autores / Mockup)](#7-como-substituir-imagens)
8. [Como Alterar Textos](#8-como-alterar-textos)
9. [Como Alterar o Preço](#9-como-alterar-o-preço)
10. [Como Rastrear Conversões (Meta Pixel / Google Analytics)](#10-como-rastrear-conversões)
11. [Como Criar Nova Versão no GitHub](#11-como-criar-nova-versão-no-github)

---

### 1. Como Instalar as Dependências

No terminal da sua máquina, dentro da pasta do projeto, execute:

```bash
npm install
```

---

### 2. Como Executar Localmente

Para iniciar o servidor de desenvolvimento local:

```bash
npm run dev
```

Abra o navegador no endereço indicado (por padrão `http://localhost:3000` ou `http://localhost:5173`).

---

### 3. Como Gerar o Build de Produção

Para compilar todo o código TypeScript, CSS e React em arquivos HTML, CSS e JavaScript otimizados:

```bash
npm run build
```

---

### 4. Onde Encontrar a Pasta dist

Após rodar `npm run build`, uma pasta chamada `dist/` será gerada na raiz do projeto contendo:
- `index.html`
- Pasta `assets/` (com os arquivos `.js` e `.css` compilados e minificados)

Esta pasta `dist/` é **tudo o que você precisa** para colocar o site no ar.

---

### 5. Como Publicar na Hostinger

Existem duas formas fáceis de hospedar na Hostinger:

#### Opção A: Pelo Gerenciador de Arquivos (hPanel)
1. Acesse o **hPanel da Hostinger**.
2. Vá em **Sites** > Selecione seu domínio > **Gerenciador de Arquivos**.
3. Abra a pasta `public_html/`.
4. Compacte todo o **conteúdo de dentro da pasta `dist/`** em um arquivo `.zip`.
5. Envie o `.zip` para `public_html/` e extraia os arquivos.
6. Certifique-se de que o arquivo `index.html` e a pasta `assets/` estejam diretamente na raiz de `public_html/`.
7. Pronto! O site estará no ar instantaneamente.

#### Opção B: Por Git / Deploy Automático
1. Suba o repositório para o seu **GitHub**.
2. No painel da Hostinger, conecte o repositório Git ou utilize a ferramenta de Hospedagem Node.js / Estática apontando o diretório de publicação para `dist`.

---

### 6. Como Alterar o Link da Kiwify

O link de checkout está centralizado em um único arquivo:

Abra o arquivo:
📁 `src/config/offer.ts`

Localize a linha:
```ts
export const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/EhbLBi0";
```

Substitua pelo novo link desejado. **Todos os botões da página serão atualizados automaticamente.**

---

### 7. Como Substituir Imagens

Para trocar a foto de Heberson e Kátia Fabre ou a textura do livro:

1. Abra `src/config/offer.ts`.
2. No objeto `PRODUCT_CONFIG.images`:
```ts
images: {
  coupleRealPhoto: "URL_DA_SUA_FOTO_OU_CAMINHO_LOCAL",
}
```
3. Se quiser usar uma foto local, coloque o arquivo na pasta `public/` (por exemplo: `public/casal-fabre.jpg`) e defina:
```ts
coupleRealPhoto: "/casal-fabre.jpg",
```

---

### 8. Como Alterar Textos

- **Configurações Gerais, Títulos e Bio:** `src/config/offer.ts`
- **Os 12 Capítulos (Nomes, Reflexões, Ações):** `src/data/chapters.ts`
- **Os 6 Bônus (Nomes, Foco e Descrições):** `src/data/bonuses.ts`
- **Dúvidas Frequentes (Perguntas e Respostas):** `src/data/faqs.ts`

---

### 9. Como Alterar o Preço

Abra o arquivo `src/config/offer.ts` e altere:

```ts
price: "19,97",
formattedPrice: "R$ 19,97",
```

---

### 10. Como Rastrear Conversões

Para instalar o **Meta Pixel (Facebook/Instagram)** ou **Google Analytics (GA4)**:

Abra o arquivo:
📁 `src/config/analytics.ts`

Preencha com seus identificadores:
```ts
export const ANALYTICS_CONFIG = {
  metaPixelId: '123456789012345', // Seu ID do Pixel
  googleAnalyticsId: 'G-XXXXXXXXXX', // Seu ID do GA4
};
```
Deixe vazio `''` se não for utilizar no momento.

---

### 11. Como Criar Nova Versão no GitHub

```bash
git add .
git commit -m "feat: atualizacao da oferta e textos"
git push origin main
```

---

### Licença & Créditos
© Casal Fabre — Heberson & Kátia Fabre. Todos os direitos reservados.
