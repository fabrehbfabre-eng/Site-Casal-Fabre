# Landing Page Premium | Casal Fabre
## Produto: O Prazer da Vida a Dois (Ebook Digital + 12 Bônus)

Esta é a landing page oficial do produto editorial **"O Prazer da Vida a Dois"**, de **Heberson Fabre** (**Casal Fabre**).

Desenvolvida com **React, TypeScript, Tailwind CSS e Vite**, a aplicação é **100% estática e independente**. Não possui dependências de servidor, banco de dados, Firebase ou APIs externas para funcionamento da página, podendo ser exportada para o GitHub e publicada em qualquer hospedagem estática (como **Hostinger**, Vercel, Netlify, Cloudflare Pages, etc.).

---

## Estrutura do Pacote Completo

- **Livro Principal**: *O Prazer da Vida a Dois* (15 Capítulos Oficiais incluindo o Compromisso dos 40 Dias e a História Oficial do Casal Fabre)
- **6 Bônus Principais**:
  1. Como Reacender a Paixão
  2. 12 Mensagens Poderosas para o Casal
  3. Como Lidar com Ciúmes e Insegurança
  4. Filhos de Outro Relacionamento | Como Lidar
  5. 3 Passos para Manter a Chama Acesa
  6. 12 Maneiras de Transformar o Cotidiano em Momentos Inesquecíveis
- **3 Bônus | Vida Financeira**:
  7. Finanças do Casal | Como Organizar a Vida Financeira a Dois
  8. Método Canal IA | Como Criar um Canal com Inteligência Artificial
  9. Dinheiro a Dois | Como Construir uma Vida Financeira Mais Leve e Próspera
- **3 Bônus | Vida Espiritual**:
  10. Fé a Dois | Como Construir um Relacionamento Mais Forte com Deus
  11. Um Propósito a Dois | Como Construir uma Vida com Deus, Amor e Propósito
  12. Juntos na Tempestade | Como Permanecer Unidos Quando a Vida Aperta

**Total: 15 Capítulos + 12 Bônus Inclusos**

---

## Sumário do Manual

1. [Como Instalar as Dependências](#1-como-instalar-as-dependências)
2. [Como Executar Localmente](#2-como-executar-localmente)
3. [Como Gerar o Build de Produção](#3-como-gerar-o-build-de-produção)
4. [Onde Encontrar a Pasta dist](#4-onde-encontrar-a-pasta-dist)
5. [Como Publicar na Hostinger](#5-como-publicar-na-hostinger)
6. [Como Alterar o Link da Kiwify (Checkout)](#6-como-alterar-o-link-da-kiwify)
7. [Como Substituir Imagens](#7-como-substituir-imagens)
8. [Como Alterar Textos](#8-como-alterar-textos)
9. [Como Rastrear Conversões (Meta Pixel / Google Analytics)](#9-como-rastrear-conversões)
10. [Como Criar Nova Versão no GitHub](#10-como-criar-nova-versão-no-github)

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

As imagens e mockups do produto e dos 12 bônus podem ser ajustadas em:
- `src/config/offer.ts` (Logo, Foto dos Autores e Capa Principal)
- `src/data/bonuses.ts` (Capas dos 12 Bônus digitais)

---

### 8. Como Rastrear Conversões (Meta Pixel / Google Analytics)

Configure os IDs no arquivo `.env` ou em `src/config/analytics.ts`:
- `VITE_META_PIXEL_ID`
- `VITE_GOOGLE_ANALYTICS_ID`

Eventos suportados nativamente: `PageView`, `ViewContent` e `InitiateCheckout`.

---

### 9. Como Criar Nova Versão no GitHub

```bash
git add .
git commit -m "feat: release de correcao com 12 bonus inclusos"
git push origin main
```
