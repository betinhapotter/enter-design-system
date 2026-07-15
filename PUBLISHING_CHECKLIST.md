# Checklist de Pré-Publicação

## Antes do primeiro publish
- [ ] `npm login` (ou `NPM_TOKEN` configurado no repositório)
- [ ] Confirmar escopo `@jaya-almeida` disponível no npm
- [ ] `"publishConfig": { "access": "public" }` no package.json (escopo público)
- [ ] `files` no package.json inclui apenas `dist`, `styles`, `tokens`, `LICENSE`, `README.md`
- [ ] `npm run build` gera `dist/` sem erros
- [ ] `npm run build:vue-types` gera os `.d.ts` do Vue
- [ ] `npm pack --dry-run` — revisar o conteúdo do tarball

## Qualidade
- [ ] Storybook sobe sem warnings (`npm run storybook`)
- [ ] Demo funciona (`npm run dev`)
- [ ] Light e dark theme verificados
- [ ] README com exemplos de import corretos (`/react`, `/vue`, `/styles`)

## GitHub
- [ ] Secret `NPM_TOKEN` cadastrado (Settings → Secrets → Actions)
- [ ] Pages habilitado (Source: GitHub Actions)
- [ ] Workflows `ci.yml` e `release.yml` verdes

## Release
- [ ] Existe ao menos um changeset em `.changeset/`
- [ ] Merge na `main` → o workflow abre o "Version Packages" PR
- [ ] Merge do PR de versão → publica no npm automaticamente
