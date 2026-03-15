const SCENES = [
  {
    layers: [
      { z: 0,    src: 'ext-sky',    scale: 1.0  },
      { z: 0.15, src: 'ext-build',  scale: 1.08 },
      { z: 0.35, src: 'ext-door',   scale: 1.18 },
      { z: 0.6,  src: 'ext-sign',   scale: 1.3  },
    ],
    fog: 'rgba(14,9,6,0.18)',
    vignette: 0.7,
  },
  {
    layers: [
      { z: 0,    src: 'farm-sky',   scale: 1.0  },
      { z: 0.2,  src: 'farm-hills', scale: 1.1  },
      { z: 0.45, src: 'farm-trees', scale: 1.22 },
      { z: 0.7,  src: 'farm-close', scale: 1.4  },
    ],
    fog: 'rgba(20,12,6,0.12)',
    vignette: 0.55,
  },
  {
    layers: [
      { z: 0,    src: 'roast-bg',    scale: 1.0  },
      { z: 0.25, src: 'roast-drum',  scale: 1.12 },
      { z: 0.55, src: 'roast-smoke', scale: 1.28 },
      { z: 0.8,  src: 'roast-beans', scale: 1.5  },
    ],
    fog: 'rgba(30,15,5,0.22)',
    vignette: 0.65,
  },
  {
    layers: [
      { z: 0,    src: 'bar-bg',      scale: 1.0  },
      { z: 0.2,  src: 'bar-shelf',   scale: 1.1  },
      { z: 0.5,  src: 'bar-machine', scale: 1.25 },
      { z: 0.75, src: 'bar-hands',   scale: 1.45 },
    ],
    fog: 'rgba(14,9,6,0.15)',
    vignette: 0.6,
  },
  {
    layers: [
      { z: 0,    src: 'room-bg',     scale: 1.0  },
      { z: 0.18, src: 'room-walls',  scale: 1.08 },
      { z: 0.4,  src: 'room-tables', scale: 1.2  },
      { z: 0.65, src: 'room-chair',  scale: 1.38 },
    ],
    fog: 'rgba(18,11,6,0.1)',
    vignette: 0.5,
  },
  {
    layers: [
      { z: 0,    src: 'cup-bg',     scale: 1.0  },
      { z: 0.3,  src: 'cup-saucer', scale: 1.15 },
      { z: 0.6,  src: 'cup-body',   scale: 1.35 },
      { z: 0.85, src: 'cup-crema',  scale: 1.6  },
    ],
    fog: 'rgba(14,9,6,0.2)',
    vignette: 0.7,
  },
  {
    layers: [
      { z: 0,    src: 'people-bg',   scale: 1.0  },
      { z: 0.2,  src: 'people-room', scale: 1.1  },
      { z: 0.5,  src: 'people-tbl',  scale: 1.25 },
      { z: 0.8,  src: 'people-fg',   scale: 1.48 },
    ],
    fog: 'rgba(14,9,6,0.12)',
    vignette: 0.55,
  },
  {
    layers: [
      { z: 0,    src: 'end-sky',   scale: 1.0  },
      { z: 0.2,  src: 'end-build', scale: 1.1  },
      { z: 0.45, src: 'end-door',  scale: 1.22 },
      { z: 0.7,  src: 'end-light', scale: 1.4  },
    ],
    fog: 'rgba(14,9,6,0.25)',
    vignette: 0.75,
  },
];

const TOTAL = SCENES.length;

function paintScene(sceneIdx, layerIdx) {
  const key = `${sceneIdx}-${layerIdx}`;

  const paintings = {
    '0-0': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="sky0" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stop-color="#1e110a"/>
          <stop offset="60%" stop-color="#0e0906"/>
          <stop offset="100%" stop-color="#060402"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#sky0)"/>
      <g opacity=".6">
        ${Array.from({length:60},(_,i)=>`<circle cx="${Math.sin(i*2.3)*700+800}" cy="${Math.cos(i*1.7)*300+220}" r="${(i%3)+.5}" fill="#f2e8d6" opacity="${.2+.5*(i%4)/4}"/>`).join('')}
      </g>
      <rect x="0" y="720" width="1600" height="180" fill="#0d0805"/>
      <g opacity=".3">
        ${Array.from({length:12},(_,i)=>`<ellipse cx="${i*140+50}" cy="820" rx="60" ry="8" fill="none" stroke="#2e1c0f" stroke-width="1"/>`).join('')}
      </g>
      <ellipse cx="800" cy="700" rx="400" ry="100" fill="#7a4a28" opacity=".15" filter="url(#blur0)"/>
      <defs><filter id="blur0"><feGaussianBlur stdDeviation="40"/></filter></defs>
    </svg>`,

    '0-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <rect x="300" y="150" width="1000" height="700" fill="#1c120b" rx="4"/>
      <rect x="300" y="150" width="1000" height="700" fill="none" stroke="#2e1c0f" stroke-width="2" rx="4"/>
      <rect x="360" y="220" width="180" height="120" fill="#c87428" opacity=".35" rx="2"/>
      <rect x="360" y="220" width="180" height="120" fill="none" stroke="#c8a45a" stroke-width="1" rx="2" opacity=".5"/>
      <rect x="600" y="220" width="180" height="120" fill="#c87428" opacity=".25" rx="2"/>
      <rect x="600" y="220" width="180" height="120" fill="none" stroke="#c8a45a" stroke-width="1" rx="2" opacity=".4"/>
      <rect x="1060" y="220" width="180" height="120" fill="#c87428" opacity=".3" rx="2"/>
      <path d="M350 400 Q800 370 1250 400 L1250 440 Q800 460 350 440Z" fill="#2e1c0f" stroke="#4a2e18" stroke-width="1"/>
      ${Array.from({length:8},(_,i)=>`<line x1="${350+i*114}" y1="400" x2="${360+i*114}" y2="440" stroke="#3e2415" stroke-width="2"/>`).join('')}
    </svg>`,

    '0-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <rect x="620" y="420" width="360" height="440" fill="#160e08" rx="3"/>
      <rect x="620" y="420" width="360" height="440" fill="none" stroke="#4a2e18" stroke-width="2" rx="3"/>
      <rect x="640" y="440" width="150" height="200" fill="#1c120b" stroke="#2e1c0f" stroke-width="1" rx="1"/>
      <rect x="810" y="440" width="150" height="200" fill="#1c120b" stroke="#2e1c0f" stroke-width="1" rx="1"/>
      <rect x="640" y="660" width="150" height="170" fill="#1c120b" stroke="#2e1c0f" stroke-width="1" rx="1"/>
      <rect x="810" y="660" width="150" height="170" fill="#1c120b" stroke="#2e1c0f" stroke-width="1" rx="1"/>
      <circle cx="795" cy="640" r="12" fill="#c8a45a" opacity=".9"/>
      <circle cx="805" cy="640" r="12" fill="#c8a45a" opacity=".9"/>
      <rect x="620" y="840" width="360" height="20" fill="#c87428" opacity=".5"/>
      <rect x="560" y="850" width="480" height="20" fill="#0f0907"/>
      <rect x="530" y="870" width="540" height="20" fill="#0d0805"/>
    </svg>`,

    '0-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <rect x="550" y="90" width="500" height="130" fill="#1c120b" rx="6" stroke="#4a2e18" stroke-width="2"/>
      <rect x="560" y="100" width="480" height="110" fill="none" stroke="#c8a45a" stroke-width="1" rx="4" opacity=".4"/>
      <text x="800" y="148" font-family="serif" font-size="38" fill="#c8a45a" text-anchor="middle" letter-spacing="8" opacity=".9">GRÃO &amp; ALMA</text>
      <text x="800" y="178" font-family="sans-serif" font-size="13" fill="#c8b090" text-anchor="middle" letter-spacing="5" opacity=".6">CAFETERIA ARTESANAL</text>
      <line x1="600" y1="90" x2="600" y2="50" stroke="#4a2e18" stroke-width="2"/>
      <line x1="1000" y1="90" x2="1000" y2="50" stroke="#4a2e18" stroke-width="2"/>
      <ellipse cx="600" cy="50" rx="15" ry="20" fill="#c87428" opacity=".5"/>
      <ellipse cx="600" cy="50" rx="15" ry="20" fill="none" stroke="#c8a45a" stroke-width="1"/>
      <ellipse cx="1000" cy="50" rx="15" ry="20" fill="#c87428" opacity=".5"/>
      <ellipse cx="1000" cy="50" rx="15" ry="20" fill="none" stroke="#c8a45a" stroke-width="1"/>
    </svg>`,

    '1-0': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="farmSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a2a0a"/>
          <stop offset="40%" stop-color="#4a3010"/>
          <stop offset="70%" stop-color="#8a5820"/>
          <stop offset="100%" stop-color="#c87428"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#farmSky)"/>
      <circle cx="800" cy="500" r="90" fill="#f0b040" opacity=".7"/>
      <circle cx="800" cy="500" r="120" fill="#e88820" opacity=".2"/>
      <circle cx="800" cy="500" r="170" fill="#c86810" opacity=".12"/>
      ${Array.from({length:12},(_,i)=>{const a=i*30*Math.PI/180;return `<line x1="800" y1="500" x2="${800+Math.cos(a)*280}" y2="${500+Math.sin(a)*280}" stroke="#f0b040" stroke-width="1" opacity=".1"/>`;}).join('')}
    </svg>`,

    '1-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <path d="M0 580 Q200 480 400 520 Q600 560 800 500 Q1000 440 1200 490 Q1400 540 1600 510 L1600 900 L0 900Z" fill="#1a3a08" opacity=".9"/>
      <path d="M0 640 Q300 560 600 590 Q900 620 1200 570 Q1400 550 1600 580 L1600 900 L0 900Z" fill="#142e06"/>
      <path d="M0 750 Q400 700 800 720 Q1200 740 1600 710 L1600 900 L0 900Z" fill="#0e2204"/>
      ${Array.from({length:15},(_,i)=>{const x=i*110+20,y=600+Math.sin(i*.8)*20;return `<path d="M${x} ${y} Q${x-20} ${y-40} ${x} ${y-80} Q${x+20} ${y-40} ${x} ${y}" fill="#0e2808" opacity=".8"/>`;}).join('')}
    </svg>`,

    '1-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      ${Array.from({length:6},(_,i)=>{const x=i*280+100;return `
        <line x1="${x}" y1="900" x2="${x}" y2="300" stroke="#1a3808" stroke-width="${8-i}" opacity=".9"/>
        <ellipse cx="${x}" cy="${340+i*10}" rx="${90+i*10}" ry="${50+i*5}" fill="#1e4008" opacity=".8"/>
        <ellipse cx="${x-30}" cy="${400}" rx="60" ry="35" fill="#162e06" opacity=".7"/>
        <ellipse cx="${x+30}" cy="${420}" rx="55" ry="30" fill="#122606" opacity=".6"/>
      `;}).join('')}
      ${Array.from({length:20},(_,i)=>`<circle cx="${100+i*75}" cy="${500+Math.sin(i)*60}" r="6" fill="#8a1a08" opacity=".7"/>`).join('')}
    </svg>`,

    '1-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <path d="M0 500 Q400 480 800 500 Q1200 520 1600 500" stroke="#2a1808" stroke-width="12" fill="none"/>
      ${Array.from({length:10},(_,i)=>{const x=i*160+80,y=500+Math.sin(i)*20;return `<ellipse cx="${x}" cy="${y-50}" rx="40" ry="18" fill="#1e4008" transform="rotate(${-20+i*8} ${x} ${y-50})" opacity=".9"/>`;}).join('')}
      ${Array.from({length:8},(_,i)=>{const x=i*200+100,y=490+Math.cos(i*.9)*25;return `<circle cx="${x}" cy="${y}" r="22" fill="#9a2010"/><circle cx="${x}" cy="${y}" r="22" fill="none" stroke="#c83010" stroke-width="1" opacity=".5"/><circle cx="${x-6}" cy="${y-6}" r="6" fill="#c84020" opacity=".4"/>`;}).join('')}
    </svg>`,

    '2-0': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="roastBg" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stop-color="#3a1e08"/>
          <stop offset="100%" stop-color="#0a0604"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#roastBg)"/>
      ${Array.from({length:8},(_,i)=>`<path d="M${i*200+100} 900 Q${i*200+140} 600 ${i*200+100} 300 Q${i*200+60} 0 ${i*200+100} -100" stroke="#7a3810" stroke-width="1.5" fill="none" opacity=".12"/>`).join('')}
    </svg>`,

    '2-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <rect x="300" y="300" width="1000" height="400" rx="200" fill="#1c0e06" stroke="#3a2010" stroke-width="3"/>
      <rect x="300" y="300" width="1000" height="400" rx="200" fill="none" stroke="#7a4a20" stroke-width="1" opacity=".4"/>
      ${Array.from({length:8},(_,i)=>`<line x1="${320+i*120}" y1="300" x2="${320+i*120}" y2="700" stroke="#2a1808" stroke-width="2" opacity=".4"/>`).join('')}
      <ellipse cx="800" cy="500" rx="420" ry="170" fill="#c86010" opacity=".2"/>
      <ellipse cx="800" cy="500" rx="300" ry="120" fill="#e08020" opacity=".15"/>
      <circle cx="300" cy="500" r="40" fill="#1c0e06" stroke="#4a2a10" stroke-width="2"/>
      <circle cx="1300" cy="500" r="40" fill="#1c0e06" stroke="#4a2a10" stroke-width="2"/>
    </svg>`,

    '2-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      ${Array.from({length:10},(_,i)=>`<path d="M${i*160+80} 900 Q${i*160+60+Math.sin(i)*40} 700 ${i*160+80} 500 Q${i*160+100+Math.cos(i)*50} 300 ${i*160+70} 100" stroke="#c8a45a" stroke-width="${3-i*.15}" fill="none" stroke-linecap="round" opacity="${.06+.04*(i%3)}"/>`).join('')}
      <path d="M0 900 Q400 750 800 780 Q1200 810 1600 780 L1600 900Z" fill="#c86010" opacity=".25"/>
      <path d="M0 900 Q400 820 800 840 Q1200 860 1600 840 L1600 900Z" fill="#e08020" opacity=".2"/>
    </svg>`,

    '2-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      ${Array.from({length:30},(_,i)=>{const x=Math.sin(i*1.3)*600+800,y=Math.cos(i*1.1)*300+450,r=22+i%8,rot=i*23;return `<g transform="translate(${x},${y}) rotate(${rot})"><ellipse rx="${r}" ry="${r*.55}" fill="#2a1408" stroke="#4a2810" stroke-width="1"/><line x1="0" y1="${-r*.5}" x2="0" y2="${r*.5}" stroke="#3a1e10" stroke-width="1.5"/></g>`;}).join('')}
    </svg>`,

    '3-0': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="barBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0e0805"/>
          <stop offset="100%" stop-color="#1a0e07"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#barBg)"/>
      <rect x="0" y="680" width="1600" height="220" fill="#160e06"/>
      <rect x="0" y="678" width="1600" height="6" fill="#4a2e14" opacity=".8"/>
      ${Array.from({length:20},(_,i)=>`<line x1="${i*80}" y1="680" x2="${i*80+400}" y2="900" stroke="#1a1008" stroke-width="1" opacity=".4"/>`).join('')}
      <rect x="0" y="0" width="1600" height="680" fill="#0e0805"/>
      <rect x="0" y="230" width="1600" height="8" fill="#2a1808" opacity=".9"/>
      <rect x="0" y="480" width="1600" height="6" fill="#2a1808" opacity=".7"/>
    </svg>`,

    '3-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      ${Array.from({length:8},(_,i)=>`
        <rect x="${i*190+60}" y="250" width="40" height="180" rx="3" fill="#2a1808" stroke="#3a2010" stroke-width="1"/>
        <rect x="${i*190+60}" y="248" width="40" height="10" rx="1" fill="#4a3018"/>
      `).join('')}
      ${Array.from({length:6},(_,i)=>`
        <ellipse cx="${i*240+200}" cy="500" rx="35" ry="15" fill="#1c100a"/>
        <rect x="${i*240+165}" y="490" width="70" height="80" rx="4" fill="#1c100a" stroke="#2e1808" stroke-width="1"/>
        <ellipse cx="${i*240+200}" cy="570" rx="35" ry="12" fill="#160c06"/>
        <path d="M${i*240+235} 510 Q${i*240+260} 510 ${i*240+260} 530 Q${i*240+260} 550 ${i*240+235} 550" fill="none" stroke="#2e1808" stroke-width="4"/>
      `).join('')}
    </svg>`,

    '3-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <rect x="480" y="300" width="640" height="400" rx="12" fill="#1e1410" stroke="#3a2810" stroke-width="2"/>
      <rect x="490" y="310" width="620" height="380" rx="10" fill="none" stroke="#c8a45a" stroke-width="1" opacity=".25"/>
      <rect x="510" y="330" width="280" height="200" rx="6" fill="#160e08" stroke="#2a1808" stroke-width="1"/>
      <rect x="810" y="330" width="280" height="200" rx="6" fill="#160e08" stroke="#2a1808" stroke-width="1"/>
      <circle cx="650" cy="430" r="50" fill="#0e0806" stroke="#4a2e14" stroke-width="2"/>
      <circle cx="650" cy="430" r="40" fill="#0a0604" stroke="#2a1808" stroke-width="1"/>
      <circle cx="650" cy="430" r="6" fill="#c8a45a"/>
      <line x1="650" y1="430" x2="668" y2="408" stroke="#c8a45a" stroke-width="2"/>
      <rect x="580" y="540" width="80" height="60" rx="4" fill="#2a1808"/>
      <rect x="940" y="540" width="80" height="60" rx="4" fill="#2a1808"/>
      <path d="M580 600 Q620 640 660 600" stroke="#4a2e14" stroke-width="8" fill="none"/>
    </svg>`,

    '3-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <path d="M200 900 Q350 750 500 650 Q580 600 620 580" stroke="#4a2e18" stroke-width="60" fill="none" stroke-linecap="round"/>
      <path d="M200 900 Q350 750 500 650 Q580 600 620 580" stroke="#5a3820" stroke-width="40" fill="none" stroke-linecap="round" opacity=".7"/>
      <path d="M1400 900 Q1250 750 1100 650 Q1020 600 980 580" stroke="#4a2e18" stroke-width="60" fill="none" stroke-linecap="round"/>
      <path d="M1400 900 Q1250 750 1100 650 Q1020 600 980 580" stroke="#5a3820" stroke-width="40" fill="none" stroke-linecap="round" opacity=".7"/>
      <ellipse cx="800" cy="560" rx="200" ry="60" fill="#1c100a" stroke="#3a2010" stroke-width="3"/>
      <ellipse cx="800" cy="540" rx="180" ry="50" fill="#2a1808"/>
      <ellipse cx="800" cy="530" rx="160" ry="42" fill="#1a0e06"/>
      <ellipse cx="800" cy="528" rx="155" ry="38" fill="#1e1208" opacity=".8"/>
    </svg>`,

    '4-0': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="roomBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a1006"/>
          <stop offset="50%" stop-color="#140c05"/>
          <stop offset="100%" stop-color="#0e0803"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#roomBg)"/>
      <path d="M0 900 L800 500 L1600 900Z" fill="#120a04" opacity=".6"/>
      <path d="M0 0 L800 300 L1600 0Z" fill="#0a0602" opacity=".4"/>
      <ellipse cx="800" cy="700" rx="500" ry="150" fill="#c86010" opacity=".08" filter="url(#roomBlur)"/>
      <defs><filter id="roomBlur"><feGaussianBlur stdDeviation="60"/></filter></defs>
    </svg>`,

    '4-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <path d="M0 0 L0 900 L600 700 L600 200Z" fill="#1c110a" stroke="#2e1a0c" stroke-width="1"/>
      <path d="M1600 0 L1600 900 L1000 700 L1000 200Z" fill="#1a0f08" stroke="#2e1a0c" stroke-width="1"/>
      ${Array.from({length:4},(_,i)=>`<path d="M${i*50} ${i*50} L${i*50} ${900-i*50} L${600-i*50} ${700-i*30} L${600-i*50} ${200+i*30}Z" fill="none" stroke="#2a1508" stroke-width="1" opacity=".3"/>`).join('')}
      ${Array.from({length:4},(_,i)=>`
        <line x1="${300+i*280}" y1="0" x2="${300+i*280}" y2="200" stroke="#2a1808" stroke-width="1.5"/>
        <ellipse cx="${300+i*280}" cy="210" rx="25" ry="35" fill="#1c100a" stroke="#3a2010" stroke-width="1"/>
        <ellipse cx="${300+i*280}" cy="220" rx="20" ry="10" fill="#c87428" opacity=".5"/>
        <ellipse cx="${300+i*280}" cy="220" rx="60" ry="60" fill="#c87428" opacity=".06" filter="url(#pBlur)"/>
      `).join('')}
      <defs><filter id="pBlur"><feGaussianBlur stdDeviation="25"/></filter></defs>
    </svg>`,

    '4-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="400" cy="720" rx="140" ry="50" fill="#1e1006" stroke="#3a1e0a" stroke-width="2"/>
      <rect x="390" y="680" width="20" height="150" fill="#1a0e06"/>
      <ellipse cx="800" cy="700" rx="180" ry="60" fill="#1e1006" stroke="#3a1e0a" stroke-width="2"/>
      <rect x="790" y="660" width="20" height="160" fill="#1a0e06"/>
      <ellipse cx="1200" cy="720" rx="140" ry="50" fill="#1e1006" stroke="#3a1e0a" stroke-width="2"/>
      <rect x="1190" y="680" width="20" height="150" fill="#1a0e06"/>
      ${Array.from({length:6},(_,i)=>{const cx=[350,450,750,850,1150,1250][i],cy=630;return `<path d="M${cx-40} ${cy+80} Q${cx-40} ${cy} ${cx} ${cy-20} Q${cx+40} ${cy} ${cx+40} ${cy+80}" fill="none" stroke="#2a1608" stroke-width="6"/>`;}).join('')}
    </svg>`,

    '4-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <path d="M1100 0 L1600 0 L1600 900 L1200 900Z" fill="#c87428" opacity=".07"/>
      <path d="M1200 0 L1600 0 L1600 900 L1400 900Z" fill="#c87428" opacity=".05"/>
      ${Array.from({length:30},(_,i)=>`<circle cx="${1200+Math.sin(i*1.7)*180}" cy="${Math.cos(i*1.3)*400+450}" r="${1+i%2}" fill="#f2e8d6" opacity="${.1+.2*(i%3)/3}"/>`).join('')}
      <path d="M500 900 L500 600 Q500 540 560 540 L1040 540 Q1100 540 1100 600 L1100 900Z" fill="#160e08"/>
      <path d="M460 620 Q460 560 520 560 L520 900 L460 900Z" fill="#160e08"/>
      <path d="M1140 620 Q1140 560 1080 560 L1080 900 L1140 900Z" fill="#160e08"/>
      <path d="M460 620 Q460 540 560 540 L1040 540 Q1140 540 1140 620 L1140 680 Q1140 700 1100 700 L500 700 Q460 700 460 680Z" fill="#1a1008"/>
    </svg>`,

    '5-0': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="cupBg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#2a1808"/>
          <stop offset="100%" stop-color="#080504"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#cupBg)"/>
    </svg>`,

    '5-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="800" cy="700" rx="600" ry="120" fill="#1a0e08" stroke="#3a2010" stroke-width="2"/>
      <ellipse cx="800" cy="695" rx="560" ry="100" fill="#150c06" stroke="#2a1808" stroke-width="1"/>
      <ellipse cx="800" cy="690" rx="200" ry="50" fill="#1c1008"/>
      ${Array.from({length:12},(_,i)=>`<path d="M${i*140-100} 750 Q${i*140+200} 700 ${i*140+400} 750" stroke="#1a0e06" stroke-width="1" fill="none" opacity=".5"/>`).join('')}
    </svg>`,

    '5-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <path d="M400 300 Q380 700 500 780 Q650 850 800 850 Q950 850 1100 780 Q1220 700 1200 300 Z" fill="#1a0e08" stroke="#3a2010" stroke-width="2"/>
      <ellipse cx="800" cy="300" rx="400" ry="70" fill="#1e1208" stroke="#3a1e0c" stroke-width="2"/>
      <path d="M1200 380 Q1380 380 1380 500 Q1380 640 1200 640" stroke="#2a1808" stroke-width="40" fill="none" stroke-linecap="round"/>
      <path d="M1200 390 Q1360 390 1360 500 Q1360 630 1200 630" stroke="#1a0e06" stroke-width="25" fill="none" stroke-linecap="round"/>
      <ellipse cx="800" cy="298" rx="380" ry="62" fill="#0e0805"/>
    </svg>`,

    '5-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="crema" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#8a5020"/>
          <stop offset="30%" stop-color="#6a3a14"/>
          <stop offset="60%" stop-color="#4a2810"/>
          <stop offset="100%" stop-color="#2a1608"/>
        </radialGradient>
        <filter id="cremaBlur"><feGaussianBlur stdDeviation="3"/></filter>
      </defs>
      <ellipse cx="800" cy="450" rx="780" ry="440" fill="url(#crema)"/>
      <path d="M800 450 Q750 380 700 450 Q650 520 700 570 Q750 620 800 570 Q850 520 900 570 Q950 520 900 450 Q850 380 800 450" fill="none" stroke="#c8a45a" stroke-width="3" opacity=".25" filter="url(#cremaBlur)"/>
      <path d="M800 450 Q820 400 840 450 Q860 500 840 530 Q820 560 800 530 Q780 500 760 530 Q740 560 720 530 Q700 500 720 450 Q740 400 760 450" fill="none" stroke="#e0b870" stroke-width="2" opacity=".2" filter="url(#cremaBlur)"/>
      <ellipse cx="760" cy="400" rx="80" ry="40" fill="#c8a45a" opacity=".12" filter="url(#cremaBlur)"/>
      <ellipse cx="800" cy="450" rx="780" ry="440" fill="none" stroke="#2a1608" stroke-width="40"/>
    </svg>`,

    '6-0': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="peopleBg" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#1e1208"/>
          <stop offset="100%" stop-color="#0a0604"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#peopleBg)"/>
      ${Array.from({length:15},(_,i)=>`<circle cx="${Math.sin(i*2.1)*600+800}" cy="${Math.cos(i*1.8)*350+400}" r="${20+i*8}" fill="#c87428" opacity="${.04+.03*(i%4)/4}" filter="url(#bokeh)"/>`).join('')}
      <defs><filter id="bokeh"><feGaussianBlur stdDeviation="30"/></filter></defs>
    </svg>`,

    '6-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="400" cy="400" rx="200" ry="350" fill="#3a2010" opacity=".4"/>
      <ellipse cx="1200" cy="400" rx="200" ry="350" fill="#2e1808" opacity=".35"/>
      <rect x="550" y="100" width="500" height="400" fill="#c87428" opacity=".12" rx="2"/>
      <rect x="560" y="110" width="480" height="380" fill="none" stroke="#c8a45a" stroke-width="1" opacity=".2" rx="2"/>
      ${Array.from({length:8},(_,i)=>`<circle cx="${200+i*180}" cy="${100+Math.sin(i)*60}" r="18" fill="#c8a45a" opacity=".06" filter="url(#b2)"/>`).join('')}
      <defs><filter id="b2"><feGaussianBlur stdDeviation="20"/></filter></defs>
    </svg>`,

    '6-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="800" cy="780" rx="400" ry="80" fill="#160e06" stroke="#2a1608" stroke-width="2"/>
      <ellipse cx="680" cy="720" rx="50" ry="20" fill="#120a04"/>
      <rect x="630" y="680" width="100" height="50" rx="6" fill="#120a04"/>
      <ellipse cx="920" cy="720" rx="50" ry="20" fill="#120a04"/>
      <rect x="870" y="680" width="100" height="50" rx="6" fill="#120a04"/>
      <path d="M680 680 Q670 650 680 620" stroke="#c8a45a" stroke-width="2" fill="none" opacity=".3" stroke-linecap="round"/>
      <path d="M920 680 Q910 650 920 620" stroke="#c8a45a" stroke-width="2" fill="none" opacity=".3" stroke-linecap="round"/>
    </svg>`,

    '6-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <path d="M350 900 Q380 600 440 500 Q480 440 520 420 Q560 400 540 350 Q510 280 520 220 Q535 140 560 120 Q590 95 610 120 Q640 150 620 220 Q600 290 580 340 Q560 390 600 440 Q660 500 700 600 L720 900Z" fill="#160e08"/>
      <path d="M880 900 Q900 600 960 500 Q1000 440 1040 420 Q1080 400 1060 350 Q1030 280 1040 220 Q1055 140 1080 120 Q1110 95 1130 120 Q1160 150 1140 220 Q1120 290 1100 340 Q1080 390 1120 440 Q1180 500 1220 600 L1240 900Z" fill="#160e08"/>
      <path d="M700 750 Q760 720 800 730 Q840 740 880 750" stroke="#3a2010" stroke-width="20" fill="none" stroke-linecap="round"/>
    </svg>`,

    '7-0': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="endSky" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#2a1a0a"/>
          <stop offset="60%" stop-color="#1a0e07"/>
          <stop offset="100%" stop-color="#0a0604"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#endSky)"/>
      <ellipse cx="800" cy="500" rx="700" ry="400" fill="#c87428" opacity=".06" filter="url(#endBlur)"/>
      <defs><filter id="endBlur"><feGaussianBlur stdDeviation="80"/></filter></defs>
    </svg>`,

    '7-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <rect x="250" y="100" width="1100" height="750" fill="#1a100a" rx="4"/>
      ${Array.from({length:12},(_,i)=>{const x=(i%4)*240+340,y=Math.floor(i/4)*180+150;return `<rect x="${x}" y="${y}" width="160" height="100" fill="#c87428" opacity="${.2+.15*(i%3)}" rx="2"/><rect x="${x}" y="${y}" width="160" height="100" fill="none" stroke="#c8a45a" stroke-width="1" rx="2" opacity=".3"/>`;}).join('')}
    </svg>`,

    '7-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <rect x="600" y="380" width="400" height="500" fill="#160e08" rx="2" stroke="#3a2010" stroke-width="2"/>
      <rect x="610" y="390" width="380" height="480" fill="#c87428" opacity=".2" rx="1"/>
      <rect x="580" y="360" width="440" height="530" fill="none" stroke="#4a2e14" stroke-width="6" rx="3"/>
      <path d="M600 880 Q800 860 1000 880 L1100 900 L500 900Z" fill="#c87428" opacity=".18"/>
      <path d="M650 880 Q800 870 950 880 L1000 900 L600 900Z" fill="#e09030" opacity=".12"/>
      <rect x="630" y="260" width="340" height="80" fill="#1a100a" rx="4" stroke="#3a2010" stroke-width="1"/>
      <rect x="648" y="275" width="304" height="50" fill="none" stroke="#4a2e14" stroke-width="1" rx="2" opacity=".5"/>
      <line x1="700" y1="300" x2="900" y2="300" stroke="#4a2e14" stroke-width="1.5" opacity=".4"/>
      <circle cx="800" cy="300" r="4" fill="#c8a45a" opacity=".3"/>
      <circle cx="740" cy="300" r="2" fill="#4a2e14" opacity=".5"/>
      <circle cx="860" cy="300" r="2" fill="#4a2e14" opacity=".5"/>
    </svg>`,

    '7-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      ${Array.from({length:6},(_,i)=>`<rect x="${200+i*200}" y="100" width="3" height="700" fill="#1a0e08" opacity=".5"/>`).join('')}
      <rect x="640" y="380" width="320" height="140" rx="70" fill="#c8a45a" opacity=".85"/>
      <rect x="650" y="390" width="300" height="120" rx="60" fill="#d4b060" opacity=".5"/>
      <ellipse cx="800" cy="450" rx="100" ry="40" fill="#e0c070" opacity=".2"/>
      <rect x="680" y="560" width="240" height="50" fill="#1c1008" rx="3" stroke="#3a2010" stroke-width="1"/>
      <line x1="710" y1="578" x2="890" y2="578" stroke="#4a2e14" stroke-width="1" opacity=".5"/>
      <line x1="720" y1="592" x2="880" y2="592" stroke="#3a2010" stroke-width="1" opacity=".35"/>
      <circle cx="800" cy="585" r="3" fill="#c8a45a" opacity=".25"/>
    </svg>`,
  };

  return paintings[key] || `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><rect width="1600" height="900" fill="#0e0906"/></svg>`;
}

const stage = document.getElementById('stage');
const sceneEls = [];

SCENES.forEach((scene, si) => {
  const sceneEl = document.createElement('div');
  sceneEl.className = 'scene';
  sceneEl.id = `scene${si}`;

  const layerEls = [];
  scene.layers.forEach((layer, li) => {
    const div = document.createElement('div');
    div.className = 'scene-bg';
    div.style.background = 'transparent';
    const svgData = paintScene(si, li);
    div.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(svgData)}")`;
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center';
    div.dataset.baseZ = layer.z;
    div.dataset.baseScale = layer.scale;
    sceneEl.appendChild(div);
    layerEls.push(div);
  });

  stage.appendChild(sceneEl);
  sceneEls.push({ el: sceneEl, layers: layerEls, def: scene });
});

const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
let mx = 0, my = 0, rx2 = 0, ry2 = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});

(function animCur() {
  rx2 += (mx - rx2) * .13;
  ry2 += (my - ry2) * .13;
  curR.style.left = rx2 + 'px';
  curR.style.top  = ry2 + 'px';
  requestAnimationFrame(animCur);
})();

const scrollEl   = document.getElementById('scrollArea');
const SCENE_H    = window.innerHeight * 1.1;
const totalH     = SCENE_H * TOTAL;
document.getElementById('scrollTrack').style.height = totalH + 'px';

let curScroll    = 0;
let targetScroll = 0;
let lastScene    = -1;
const LERP       = 0.07;

scrollEl.addEventListener('scroll', () => {
  targetScroll = scrollEl.scrollTop;
  document.getElementById('scrollHint').classList.toggle('hidden', targetScroll > 80);
}, { passive: true });

const dots       = document.querySelectorAll('.hud-dot');
const sceneNumEl = document.getElementById('sceneNum');
const progBar    = document.getElementById('progress');
const textBlocks = document.querySelectorAll('.txt-block');

function render() {
  curScroll += (targetScroll - curScroll) * LERP;

  const globalP  = Math.max(0, Math.min(1, curScroll / totalH));
  const rawScene = curScroll / SCENE_H;
  const sceneIdx = Math.min(TOTAL - 1, Math.floor(rawScene));
  const sceneP   = rawScene - sceneIdx;

  progBar.style.width = (globalP * 100) + '%';

  if (sceneIdx !== lastScene) {
    lastScene = sceneIdx;
    dots.forEach((d, i) => d.classList.toggle('on', i === sceneIdx));
    sceneNumEl.textContent = String(sceneIdx + 1).padStart(2,'0') + ' / ' + String(TOTAL).padStart(2,'0');
    textBlocks.forEach((t, i) => t.classList.toggle('vis', i === sceneIdx));
  }

  SCENES.forEach((scene, si) => {
    const { el, layers } = sceneEls[si];

    let localP;
    if (si === sceneIdx) {
      localP = sceneP;
    } else if (si === sceneIdx - 1) {
      localP = 1 + sceneP * .3;
    } else if (si === sceneIdx + 1) {
      localP = -(1 - sceneP) * .3;
    } else {
      el.style.opacity = 0;
      el.style.transform = 'none';
      return;
    }

    let opacity;
    if (si === sceneIdx) {
      if (sceneP < .1)       opacity = sceneP / .1;
      else if (sceneP > .85) opacity = (1 - sceneP) / .15;
      else                   opacity = 1;
    } else if (si === sceneIdx - 1) {
      opacity = Math.max(0, 1 - sceneP * 4);
    } else {
      opacity = Math.max(0, sceneP * 2 - 1);
    }

    el.style.opacity   = opacity;
    el.style.transform = `scale(${1 + localP * 0.06})`;

    layers.forEach(layer => {
      const baseZ     = parseFloat(layer.dataset.baseZ);
      const baseScale = parseFloat(layer.dataset.baseScale);
      const parallaxY = localP * baseZ * -60;
      const parallaxS = baseScale + localP * baseZ * 0.04;
      const driftX    = (mx / window.innerWidth  - .5) * baseZ * 30;
      const driftY    = (my / window.innerHeight - .5) * baseZ * 20;
      layer.style.transform = `translateX(${driftX}px) translateY(${parallaxY + driftY}px) scale(${parallaxS})`;
    });
  });

  requestAnimationFrame(render);
}

render();

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const i = parseInt(dot.dataset.i);
    scrollEl.scrollTo({ top: i * SCENE_H, behavior: 'smooth' });
  });
});

document.addEventListener('keydown', e => {
  const si = Math.min(TOTAL - 1, Math.floor(targetScroll / SCENE_H));
  if (e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault();
    scrollEl.scrollTo({ top: Math.min(totalH, (si + 1) * SCENE_H), behavior: 'smooth' });
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    scrollEl.scrollTo({ top: Math.max(0, (si - 1) * SCENE_H), behavior: 'smooth' });
  }
});

document.getElementById('t0').classList.add('vis');
