# Changelog

## 1.1.0

### Minor Changes

- [`bb89038`](https://github.com/betinhapotter/enter-design-system/commit/bb890388b23e0d35a2233342bf0d3551ed4ae1d4) Thanks [@betinhapotter](https://github.com/betinhapotter)! - Primeira versão pública: tokens (679 vars, light/dark), 35 keyframes,
  utilitários animate-in/out com blur, @theme Tailwind v4, e componentes
  React + Vue (Button, Card, Dialog, BrandSpinner, PromptInput).

Todas as mudanças notáveis deste projeto são documentadas aqui.
O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased]

## [1.0.0] - 2026-07-15

### Added

- Tokens CSS completos (679 variáveis, light/dark) com fallback HEX/RGB.
- 35 keyframes reproduzidos fielmente.
- Utilitários `animate-in`/`animate-out` com `blur-in`/`blur-out` (Tailwind v4 `@utility`).
- `@theme` config-less para Tailwind v4.
- `tailwind.config.js` alternativo (v3).
- Componentes React: `Button`, `Card`, `Dialog`, `BrandSpinner`, `PromptInput`.
- Componentes Vue equivalentes (paridade de API).
- Página de demo (`EnterDemo`) e Storybook completo.
- Build publicável via `tsup` (ESM + tipos), com tipos Vue via `vue-tsc`.

[Unreleased]: https://github.com/betinhapotter/enter-design-system/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/betinhapotter/enter-design-system/releases/tag/v1.0.0
