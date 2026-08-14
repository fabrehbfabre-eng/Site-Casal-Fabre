import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

// Let's create an ultra-detailed, high fidelity SVG that renders the exact luxury 3D book mockup
const width = 1000;
const height = 1120;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="bgGlow" cx="20%" cy="75%" r="60%">
      <stop offset="0%" stop-color="#ffb84d" stop-opacity="0.18"/>
      <stop offset="40%" stop-color="#4d2e14" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#070908" stop-opacity="0"/>
    </radialGradient>
    
    <radialGradient id="bokehGlow" cx="90%" cy="65%" r="45%">
      <stop offset="0%" stop-color="#d4af37" stop-opacity="0.12"/>
      <stop offset="50%" stop-color="#2d2215" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#070908" stop-opacity="0"/>
    </radialGradient>

    <linearGradient id="tableGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1813"/>
      <stop offset="40%" stop-color="#14110e"/>
      <stop offset="100%" stop-color="#0a0807"/>
    </linearGradient>

    <!-- Gold Gradients -->
    <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F3E5AB"/>
      <stop offset="40%" stop-color="#D4AF37"/>
      <stop offset="70%" stop-color="#AA771C"/>
      <stop offset="100%" stop-color="#E6CA65"/>
    </linearGradient>

    <linearGradient id="goldEmblem" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EEDAA2"/>
      <stop offset="50%" stop-color="#C5A059"/>
      <stop offset="100%" stop-color="#916E28"/>
    </linearGradient>

    <!-- Book Spine Gradient -->
    <linearGradient id="spineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#181818"/>
      <stop offset="30%" stop-color="#2b2b2b"/>
      <stop offset="70%" stop-color="#121212"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>

    <!-- Book Cover Gradient -->
    <linearGradient id="coverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181818"/>
      <stop offset="40%" stop-color="#111111"/>
      <stop offset="80%" stop-color="#0c0c0c"/>
      <stop offset="100%" stop-color="#080808"/>
    </linearGradient>

    <!-- Page Edge Gradient -->
    <linearGradient id="pageEdge" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#55514b"/>
      <stop offset="25%" stop-color="#e3ded6"/>
      <stop offset="60%" stop-color="#faf6ee"/>
      <stop offset="85%" stop-color="#ded8cc"/>
      <stop offset="100%" stop-color="#8a8376"/>
    </linearGradient>

    <!-- Top Page Edge -->
    <linearGradient id="pageTop" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2a2723"/>
      <stop offset="50%" stop-color="#d9d2c5"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <!-- Candle Glow -->
    <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="30%" stop-color="#ffeb99"/>
      <stop offset="60%" stop-color="#ff9933" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#ff6600" stop-opacity="0"/>
    </radialGradient>

    <!-- Drop Shadow Filter -->
    <filter id="bookShadow" x="-20%" y="-20%" width="150%" height="150%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="24"/>
      <feOffset dx="-10" dy="25" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.75"/>
      </feComponentTransfer>
      <feMerge> 
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- BACKGROUND -->
  <rect width="${width}" height="${height}" fill="#0a0c0b"/>
  <!-- Warm ambiance glow -->
  <rect width="${width}" height="${height}" fill="url(#bgGlow)"/>
  <rect width="${width}" height="${height}" fill="url(#bokehGlow)"/>

  <!-- Table Surface -->
  <path d="M 0 850 L 1000 840 L 1000 1120 L 0 1120 Z" fill="url(#tableGrad)" opacity="0.95"/>
  <line x1="0" y1="850" x2="1000" y2="840" stroke="#3d3125" stroke-width="1.5" opacity="0.6"/>

  <!-- Top-Left Branding Header -->
  <g transform="translate(42, 38)">
    <!-- Monogram Circle -->
    <circle cx="36" cy="36" r="34" fill="none" stroke="url(#goldEmblem)" stroke-width="2.5"/>
    <circle cx="36" cy="36" r="29" fill="none" stroke="url(#goldEmblem)" stroke-width="0.7" opacity="0.7"/>
    <!-- Script Monogram JF / CF -->
    <text x="36" y="44" font-family="Liberation Serif, Georgia, serif" font-size="28" font-style="italic" font-weight="bold" fill="url(#goldText)" text-anchor="middle">JF</text>
    
    <!-- Brand Texts -->
    <text x="92" y="32" font-family="Liberation Sans, Arial, sans-serif" font-size="18" font-weight="bold" letter-spacing="3.5" fill="url(#goldText)">CASAL FABRE</text>
    <text x="92" y="52" font-family="Liberation Sans, Arial, sans-serif" font-size="10.5" font-weight="600" letter-spacing="2.5" fill="url(#goldText)">VIDA A DOIS • AMOR &amp; FÉ</text>
  </g>

  <!-- Left Side: Candle in Glass (Atmospheric Decor) -->
  <g transform="translate(30, 670)" opacity="0.9">
    <!-- Candle glass cylinder -->
    <ellipse cx="60" cy="180" rx="35" ry="12" fill="#1b1713" stroke="#4a3f33" stroke-width="1"/>
    <rect x="25" y="80" width="70" height="100" fill="#221c17" opacity="0.85" rx="4"/>
    <ellipse cx="60" cy="80" rx="35" ry="10" fill="#2d241d" stroke="#5a4c3d" stroke-width="1"/>
    <!-- Wax surface -->
    <ellipse cx="60" cy="88" rx="32" ry="8" fill="#eae1d2" opacity="0.9"/>
    <!-- Flame & Glow -->
    <circle cx="60" cy="65" r="45" fill="url(#flameGlow)"/>
    <path d="M 60 50 Q 64 66 60 78 Q 56 66 60 50 Z" fill="#fffbe6"/>
    <path d="M 60 55 Q 63 68 60 76 Q 57 68 60 55 Z" fill="#ffd11a"/>
    <circle cx="60" cy="74" r="3" fill="#332211"/>
  </g>

  <!-- Right Side: Ceramic Cup (Soft Decor) -->
  <g transform="translate(820, 660)" opacity="0.75">
    <ellipse cx="90" cy="190" rx="75" ry="16" fill="#181310" stroke="#332920" stroke-width="1"/>
    <path d="M 30 110 Q 30 180 90 180 Q 150 180 150 110 Z" fill="#26211d" stroke="#44392f" stroke-width="1.5"/>
    <ellipse cx="90" cy="110" rx="60" ry="14" fill="#383029" stroke="#4f4337" stroke-width="1.5"/>
    <ellipse cx="90" cy="113" rx="54" ry="11" fill="#1f1813"/>
  </g>

  <!-- 3D BOOK SHADOW ON TABLE -->
  <ellipse cx="510" cy="985" rx="270" ry="40" fill="#000000" opacity="0.75" filter="url(#bookShadow)"/>

  <!-- MAIN 3D HARDCOVER BOOK -->
  <g filter="url(#bookShadow)">
    
    <!-- 1. Right Page Block (Thickness of the book) -->
    <!-- Side Pages Edge (Vertical block) -->
    <path d="M 740 85 L 762 95 L 762 970 L 740 985 Z" fill="url(#pageEdge)"/>
    <!-- Realistic page lines -->
    <g opacity="0.15">
      <line x1="744" y1="87" x2="744" y2="982" stroke="#000" stroke-width="0.8"/>
      <line x1="748" y1="89" x2="748" y2="979" stroke="#000" stroke-width="0.8"/>
      <line x1="752" y1="91" x2="752" y2="976" stroke="#000" stroke-width="0.8"/>
      <line x1="756" y1="93" x2="756" y2="973" stroke="#000" stroke-width="0.8"/>
    </g>

    <!-- Top Pages Edge (Perspective angle) -->
    <path d="M 275 142 L 740 85 L 762 95 L 295 152 Z" fill="url(#pageTop)" opacity="0.9"/>

    <!-- 2. Spine Left Edge of Hardcover -->
    <path d="M 260 148 L 278 142 L 278 985 L 260 990 Z" fill="url(#spineGrad)"/>
    <!-- Spine highlight crease -->
    <line x1="277" y1="143" x2="277" y2="985" stroke="#444" stroke-width="1.2" opacity="0.6"/>

    <!-- 3. Front Hardcover Board -->
    <path d="M 276 142 L 742 84 L 742 984 L 276 986 Z" fill="url(#coverGrad)"/>
    <!-- Subtle outer rim border -->
    <path d="M 276 142 L 742 84 L 742 984 L 276 986 Z" fill="none" stroke="#2a2a2a" stroke-width="1"/>

    <!-- Hardcover Lighting Sheen -->
    <path d="M 276 142 L 742 84 L 742 420 L 276 560 Z" fill="white" opacity="0.035"/>

    <!-- ================= COVER CONTENT ================= -->
    <g transform="translate(18, 0)">
      
      <!-- Top Cover Logo Monogram -->
      <g transform="translate(490, 150)">
        <circle cx="0" cy="0" r="19" fill="none" stroke="url(#goldEmblem)" stroke-width="1.6"/>
        <circle cx="0" cy="0" r="16" fill="none" stroke="url(#goldEmblem)" stroke-width="0.5" opacity="0.7"/>
        <text x="0" y="5" font-family="Liberation Serif, Georgia, serif" font-size="16" font-style="italic" font-weight="bold" fill="url(#goldText)" text-anchor="middle">JF</text>
        
        <text x="28" y="-3" font-family="Liberation Sans, Arial, sans-serif" font-size="12.5" font-weight="bold" letter-spacing="2.2" fill="url(#goldText)">CASAL FABRE</text>
        <text x="28" y="10" font-family="Liberation Sans, Arial, sans-serif" font-size="7.5" font-weight="600" letter-spacing="1.8" fill="url(#goldText)">VIDA A DOIS • AMOR &amp; FÉ</text>
      </g>

      <!-- COUPLE PORTRAIT ON COVER -->
      <g id="couplePortrait">
        <!-- Frame / Clip Container -->
        <defs>
          <clipPath id="portraitClip">
            <rect x="278" y="195" width="425" height="400" rx="6"/>
          </clipPath>
          <linearGradient id="photoBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1c1c1c"/>
            <stop offset="50%" stop-color="#141414"/>
            <stop offset="100%" stop-color="#0b0b0b"/>
          </linearGradient>
          <radialGradient id="skinHeberson" cx="40%" cy="35%" r="50%">
            <stop offset="0%" stop-color="#f6d3b3"/>
            <stop offset="50%" stop-color="#e8ba92"/>
            <stop offset="100%" stop-color="#c68e64"/>
          </radialGradient>
          <radialGradient id="skinKatia" cx="45%" cy="30%" r="55%">
            <stop offset="0%" stop-color="#fce2cd"/>
            <stop offset="50%" stop-color="#f0c6a5"/>
            <stop offset="100%" stop-color="#cf9b76"/>
          </radialGradient>
        </defs>

        <g clip-path="url(#portraitClip)">
          <!-- Studio Photo Background with gentle lighting behind couple -->
          <rect x="278" y="195" width="425" height="400" fill="url(#photoBg)"/>
          <circle cx="490" cy="330" r="160" fill="#302820" opacity="0.35"/>
          <circle cx="560" cy="320" r="120" fill="#3d3024" opacity="0.25"/>

          <!-- HEBERSON FABRE (Left) -->
          <g id="hebersonFigure">
            <!-- Suit Jacket & Shoulders -->
            <path d="M 285 580 L 320 380 Q 370 365 420 375 L 475 390 L 515 580 Z" fill="#0f0f11"/>
            <!-- Lapels & Shirt -->
            <path d="M 380 375 L 425 470 L 415 580 L 375 580 Z" fill="#141417" stroke="#08080a" stroke-width="1"/>
            <path d="M 430 375 L 420 470 L 440 580 L 470 580 Z" fill="#18181b" stroke="#08080a" stroke-width="1"/>
            <!-- Open collar V -->
            <path d="M 405 378 Q 425 435 425 450 Q 425 435 440 378 Z" fill="#09090b"/>
            <!-- Silver/Gold subtle chain -->
            <path d="M 412 400 Q 425 425 436 400" fill="none" stroke="#d4af37" stroke-width="1.2" opacity="0.8"/>

            <!-- Neck -->
            <path d="M 395 350 L 395 385 Q 425 395 450 385 L 450 350 Z" fill="url(#skinHeberson)"/>
            
            <!-- Head & Face -->
            <!-- Ears -->
            <ellipse cx="378" cy="305" rx="7" ry="12" fill="#dfad83"/>
            <!-- Face shape -->
            <path d="M 382 270 Q 382 355 425 358 Q 468 355 468 270 Q 425 240 382 270 Z" fill="url(#skinHeberson)"/>
            
            <!-- Hair -->
            <path d="M 378 270 Q 385 225 430 225 Q 470 228 472 268 Q 455 245 425 245 Q 395 248 378 270 Z" fill="#241913"/>
            
            <!-- Eyes & Brows -->
            <path d="M 396 280 Q 408 277 418 280" fill="none" stroke="#2b1a11" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M 434 280 Q 444 277 456 280" fill="none" stroke="#2b1a11" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Eyes -->
            <ellipse cx="407" cy="288" rx="4.5" ry="2.8" fill="#ffffff"/>
            <circle cx="407" cy="288" r="2.2" fill="#2d1c13"/>
            <circle cx="406" cy="287" r="0.8" fill="#ffffff"/>
            
            <ellipse cx="445" cy="288" rx="4.5" ry="2.8" fill="#ffffff"/>
            <circle cx="445" cy="288" r="2.2" fill="#2d1c13"/>
            <circle cx="444" cy="287" r="0.8" fill="#ffffff"/>

            <!-- Nose -->
            <path d="M 425 284 L 424 308 Q 428 312 432 308" fill="none" stroke="#b87a4c" stroke-width="1.8" stroke-linecap="round"/>

            <!-- Smile & Teeth -->
            <path d="M 408 322 Q 425 338 444 322 Q 425 330 408 322 Z" fill="#241009"/>
            <path d="M 412 323 Q 425 332 440 323 Q 425 327 412 323 Z" fill="#ffffff"/>

            <!-- Beard & Mustache -->
            <path d="M 410 316 Q 425 322 442 316 Q 436 320 425 320 Q 416 320 410 316 Z" fill="#261a14" opacity="0.9"/>
            <path d="M 388 290 Q 384 345 425 358 Q 466 345 462 290 Q 458 340 425 350 Q 392 340 388 290 Z" fill="#261a14" opacity="0.92"/>
          </g>

          <!-- KÁTIA FABRE (Right) -->
          <g id="katiaFigure">
            <!-- Back Hair Layer -->
            <path d="M 525 250 Q 510 370 515 450 Q 565 470 635 440 Q 640 340 625 260 Z" fill="#1b120c"/>

            <!-- Dress & Shoulders -->
            <path d="M 480 580 L 490 410 Q 545 375 605 390 L 670 415 L 685 580 Z" fill="#0d0d0f"/>
            <!-- Elegant V-Neckline -->
            <path d="M 525 400 L 565 480 L 600 405 Z" fill="url(#skinKatia)"/>
            <!-- V-Dress overlay -->
            <path d="M 495 405 L 565 490 L 495 580 Z" fill="#151518"/>
            <path d="M 625 405 L 565 490 L 635 580 Z" fill="#121215"/>

            <!-- Silver delicate necklace -->
            <path d="M 536 420 Q 565 460 590 420" fill="none" stroke="#e0e0e0" stroke-width="1.2" opacity="0.85"/>
            <circle cx="565" cy="450" r="1.5" fill="#ffffff"/>

            <!-- Neck & Chest -->
            <path d="M 540 345 L 540 405 Q 565 415 588 405 L 588 345 Z" fill="url(#skinKatia)"/>

            <!-- Face & Head -->
            <ellipse cx="612" cy="310" rx="6" ry="10" fill="#dfad83"/>
            <path d="M 538 275 Q 536 350 568 355 Q 604 350 606 275 Q 570 250 538 275 Z" fill="url(#skinKatia)"/>

            <!-- Long wavy Brunette Hair Front -->
            <path d="M 538 275 Q 532 230 575 230 Q 620 232 622 280 Q 618 350 630 420 Q 608 435 600 370 Q 598 290 572 260 Q 548 265 540 310 Q 532 370 522 430 Q 512 410 525 350 Z" fill="#241710"/>

            <!-- Eyes & Brows -->
            <path d="M 546 284 Q 556 280 566 284" fill="none" stroke="#331c12" stroke-width="2" stroke-linecap="round"/>
            <path d="M 580 284 Q 590 280 600 284" fill="none" stroke="#331c12" stroke-width="2" stroke-linecap="round"/>
            <!-- Eyes -->
            <ellipse cx="556" cy="292" rx="4.5" ry="3" fill="#ffffff"/>
            <circle cx="556" cy="292" r="2.3" fill="#382115"/>
            <circle cx="555" cy="291" r="0.9" fill="#ffffff"/>
            <path d="M 550 289 Q 556 286 562 289" fill="none" stroke="#111" stroke-width="1.2"/>

            <ellipse cx="590" cy="292" rx="4.5" ry="3" fill="#ffffff"/>
            <circle cx="590" cy="292" r="2.3" fill="#382115"/>
            <circle cx="589" cy="291" r="0.9" fill="#ffffff"/>
            <path d="M 584 289 Q 590 286 596 289" fill="none" stroke="#111" stroke-width="1.2"/>

            <!-- Soft Blush -->
            <circle cx="548" cy="308" r="8" fill="#e27c68" opacity="0.25"/>
            <circle cx="598" cy="308" r="8" fill="#e27c68" opacity="0.25"/>

            <!-- Nose -->
            <path d="M 572 288 L 571 312 Q 575 316 578 312" fill="none" stroke="#c0845a" stroke-width="1.6" stroke-linecap="round"/>

            <!-- Radiant Warm Smile & Lips -->
            <path d="M 554 326 Q 573 346 594 326 Q 573 333 554 326 Z" fill="#9e3b3b"/>
            <path d="M 558 327 Q 573 339 590 327 Q 573 331 558 327 Z" fill="#ffffff"/>
            <path d="M 556 333 Q 573 345 592 333" fill="none" stroke="#872b2b" stroke-width="1.5"/>

            <!-- Kátia's Hand on Heberson's Arm with Wedding Ring -->
            <g id="handWithRing">
              <path d="M 470 520 Q 485 530 505 540 Q 520 548 535 555 L 530 575 Q 500 560 465 540 Z" fill="url(#skinKatia)"/>
              <path d="M 465 522 Q 480 528 495 532" fill="none" stroke="#d59d74" stroke-width="1.5"/>
              <path d="M 472 532 Q 486 538 500 542" fill="none" stroke="#d59d74" stroke-width="1.5"/>
              <!-- Wedding Ring -->
              <ellipse cx="488" cy="535" rx="3" ry="4.5" fill="none" stroke="#ffd700" stroke-width="1.5"/>
              <circle cx="487" cy="534" r="0.8" fill="#ffffff"/>
              <!-- Silver bracelet -->
              <path d="M 532 555 L 526 575" stroke="#e0e0e0" stroke-width="2" stroke-linecap="round"/>
            </g>
          </g>

          <!-- Bottom Soft Vignette on Photo -->
          <rect x="278" y="520" width="425" height="80" fill="url(#coverGrad)" opacity="0.92"/>
        </g>
      </g>

      <!-- ================= MAIN BOOK TYPOGRAPHY ================= -->
      <!-- TITLE -->
      <g id="bookTitle" text-anchor="middle">
        <text x="495" y="642" font-family="Liberation Serif, Georgia, serif" font-size="44" font-weight="bold" letter-spacing="4" fill="#FAF8F5">O PRAZER</text>
        <text x="495" y="698" font-family="Liberation Serif, Georgia, serif" font-size="44" font-weight="bold" letter-spacing="4" fill="#FAF8F5">DA VIDA</text>
        <text x="495" y="756" font-family="Liberation Serif, Georgia, serif" font-size="48" font-weight="bold" letter-spacing="4.5" fill="url(#goldText)">A DOIS</text>
      </g>

      <!-- GOLD HORIZONTAL DIVIDER -->
      <line x1="365" y1="782" x2="625" y2="782" stroke="url(#goldEmblem)" stroke-width="2"/>

      <!-- SUBTITLE -->
      <g id="bookSubtitle" text-anchor="middle" font-family="Liberation Serif, Georgia, serif" font-size="14.5" fill="#E8E4DD" opacity="0.95">
        <text x="495" y="820">Um guia prático para fortalecer a conexão,</text>
        <text x="495" y="844">a cumplicidade e o amor na vida a dois.</text>
      </g>

      <!-- AUTHOR -->
      <text x="495" y="915" text-anchor="middle" font-family="Liberation Serif, Georgia, serif" font-size="18" font-weight="bold" letter-spacing="3.5" fill="url(#goldText)">HEBERSON FABRE</text>

    </g>

  </g>
</svg>
`;

async function generate() {
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1080,
    },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: 'Liberation Serif',
    },
  });

  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  const outputDir = path.resolve('public/assets/images');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, 'o-prazer-da-vida-a-dois-premium.png');
  fs.writeFileSync(outputPath, pngBuffer);
  console.log(`Successfully written image to: ${outputPath} (${pngBuffer.length} bytes)`);
}

generate().catch(console.error);
