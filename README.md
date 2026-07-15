# @jaya-almeida/enter-design-system

Design system em React + Vue, com tokens em CSS (OKLCH + fallback HEX),
utilitários de animação estilo `tailwindcss-animate` (enter/exit + blur) e
Tailwind CSS v4 (config-less via `@theme`).

Inspirado na UI pública do **Enter (Converge AI)**. O código aqui é MIT;
a marca "Enter" pertence aos seus respectivos donos.

## Instalação

```bash
npm i @jaya-almeida/enter-design-system
```

Peer deps: `react`/`react-dom` (>=18) **ou** `vue` (>=3), e `tailwindcss` (>=4).

## Uso — Tailwind v4 (config-less)

```css
/* app.css */
@import "tailwindcss";
@import "@jaya-almeida/enter-design-system/styles";
```

Isso já traz o `@theme`, os 679 tokens (light/dark), os 35 keyframes e os
utilitários `animate-in` / `animate-out` com `blur-in` / `blur-out`.

## Uso — React

```tsx
import { Button, Card, Dialog, PromptInput, BrandSpinner } from '@jaya-almeida/enter-design-system/react';

export default () => <Button variant="brand">Pressione Enter</Button>;
```

## Uso — Vue

```vue
<script setup>
import { Button } from '@jaya-almeida/enter-design-system/vue';
</script>
<template><Button variant="brand">Pressione Enter</Button></template>
```

## Tokens

- **679** variáveis CSS (incluindo níveis intermediários `--tr-*`)
- Tema `:root` = **light**, `.dark` = **dark** (ambos oficiais)
- Cor de marca: `oklch(76.2% .144 .58)` ≈ `#fb88ad`
- Fundo dark: `oklch(14.1% .005 285.82)` ≈ `#09090b`
- Fonte: `Instrument Sans` · Radius base: `0.625rem` (10px)
- Easing: `cubic-bezier(0, 0, 0.2, 1)`

Dump bruto: `tokens/tokens.json`.

## Scripts

```bash
npm run dev          # demo (Vite)
npm run storybook    # docs interativa
npm run build        # tsup (dist ESM + tipos)
npm run build:vue-types
```

## Documentação

Storybook publicado via GitHub Pages a cada push na `main`.

## Licença

MIT © 2026 Shakti Jaya — veja [LICENSE](./LICENSE).
