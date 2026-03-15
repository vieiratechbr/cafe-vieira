# Grão & Alma — Cinematic 3D Scroll Experience

Uma landing page imersiva de cafeteria artesanal com experiência cinematográfica de scroll em 3D, construída inteiramente com HTML, CSS e JavaScript vanilla — sem frameworks, sem dependências.

---

## Demonstração

🔗 **[vieiratechbr.github.io/cafe-vieira](https://vieiratechbr.github.io/cafe-vieira/)**

> Use o scroll, as setas do teclado ou os dots laterais para navegar entre as cenas.

---

## Sobre o Projeto

O objetivo foi criar uma experiência onde o scroll funciona como uma **câmera cinematográfica** avançando pelo universo da cafeteria — não uma página comum que desce, mas uma narrativa visual de 8 cenas com sensação real de profundidade 3D.

Cada cena é composta por 4 camadas SVG independentes que se movem em velocidades diferentes conforme o scroll, criando ilusão de paralaxe tridimensional. O mouse adiciona uma camada extra de reatividade, inclinando as cenas de forma sutil.

---

## Estrutura de Arquivos

```
├── index.html    — Estrutura HTML semântica
├── style.css     — Estilos, animações e layout
├── script.js     — Motor de scroll, cenas SVG e lógica de animação
└── README.md
```

---

## Narrativa Visual (8 Cenas)

| # | Cena | Descrição |
|---|------|-----------|
| 01 | **Abertura** | Fachada da cafeteria à noite, estrelas, calçamento, letreiro |
| 02 | **A Origem** | Plantação ao nascer do sol, morros, pés de café, cerejas |
| 03 | **O Aroma** | Tambor de torra, fumaça dourada, grãos espalhados |
| 04 | **O Preparo** | Balcão do barista, máquina de espresso, mãos em close |
| 05 | **O Lugar** | Salão, pendentes de luz, mesas de madeira, poltrona |
| 06 | **A Xícara** | Saladeira, corpo da xícara, close extremo na crema |
| 07 | **A Conexão** | Dois silhuetas, bokeh, xícaras sobre a mesa |
| 08 | **Encerramento** | Porta iluminada, convite para o GitHub |

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica e marcação das cenas |
| **CSS3** | Variáveis, `@keyframes`, `will-change`, grain overlay, responsividade |
| **JavaScript ES6+** | Motor de animação com `requestAnimationFrame`, LERP, parallax |
| **SVG** | Todos os cenários gerados programaticamente — zero imagens externas |
| **Google Fonts** | Playfair Display + Mulish |

---

## Como Funciona

### Motor de Scroll (LERP)

O scroll nativo é capturado mas não usado diretamente. Um valor interpolado (`curScroll`) persegue o `targetScroll` a cada frame com fator `0.07`, produzindo o movimento suave e cinematográfico:

```js
curScroll += (targetScroll - curScroll) * LERP;
```

### Sistema de Cenas em Camadas

Cada cena tem 4 camadas SVG com profundidades diferentes (`z: 0` a `z: 0.85`). Camadas mais profundas se movem mais rápido no parallax, criando a ilusão de 3D:

```js
const parallaxY = localP * baseZ * -60;
const parallaxS = baseScale + localP * baseZ * 0.04;
```

### Zoom de Câmera

Conforme o scroll avança dentro de uma cena (`localP` de 0 a 1), a cena inteira é escalada sutilmente, simulando uma câmera se aproximando:

```js
el.style.transform = `scale(${1 + localP * 0.06})`;
```

### Reatividade ao Mouse

A posição do cursor inclina cada camada de forma proporcional à sua profundidade, reforçando a sensação espacial:

```js
const driftX = (mx / window.innerWidth  - .5) * baseZ * 30;
const driftY = (my / window.innerHeight - .5) * baseZ * 20;
```

---

## Navegação

| Ação | Resultado |
|---|---|
| Scroll do mouse / trackpad | Avança entre as cenas suavemente |
| `↓` ou `Espaço` | Pula para a próxima cena |
| `↑` | Volta para a cena anterior |
| Clique nos dots laterais | Navega diretamente para qualquer cena |

---

## Deploy

O projeto está hospedado via **GitHub Pages** e não requer build, bundler ou dependências.

```bash
git clone https://github.com/vieiratechbr/cafe-vieira
```

Qualquer push na branch `main` atualiza o site automaticamente.

---

## Autor

**vieiratechbr** — [github.com/vieiratechbr](https://github.com/vieiratechbr)
