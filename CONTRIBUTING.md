# Contribuindo

Obrigada pelo interesse! 💗

## Setup

```bash
npm install
npm run storybook
```

## Fluxo

1. Faça um fork e crie uma branch: `git checkout -b feat/minha-feature`
2. Rode `npm run build` e `npm run storybook` para validar.
3. Adicione um changeset: `npx changeset` (escolha o bump semver).
4. Abra o PR usando o template.

## Convenções

- Commits: [Conventional Commits](https://www.conventionalcommits.org/).
- Componentes React e Vue devem manter **paridade de API** (mesmas props/variants).
- Tokens não são editados à mão: eles vêm de `tokens/tokens.json` → `tokens.css`.
- Toda animação usa os utilitários `animate-in`/`animate-out` (não CSS ad-hoc).

## Versionamento

Usamos [Changesets](https://github.com/changesets/changesets). Nada de bumpar
`package.json` manualmente — o release workflow cuida disso.
