// Regenera tokens/tokens.json a partir da página do Enter (enter.converge.ai).
// Como usar: abra a página, cole este arquivo inteiro no console do DevTools e
// pressione Enter — o browser baixa um tokens.json com a estrutura:
//
//   {
//     "$meta":  { source, generatedAt, uniqueNames, resolvedPerTheme },
//     "light":  { "--var": "valor declarado em :root", ... },
//     "dark":   { "--var": "valor com overrides de .dark aplicados", ... }
//   }
//
// "light" = tudo declarado em :root/html/:host. "dark" = light + overrides
// declarados em regras .dark. Níveis -tr-*, escalas --color-*-50..950,
// sombras, gradientes etc. entram sem filtro — dump bruto.
(() => {
  const base = {};
  const darkOverrides = {};

  const collect = (style, target) => {
    for (let i = 0; i < style.length; i++) {
      const prop = style[i];
      if (prop.startsWith("--")) target[prop] = style.getPropertyValue(prop).trim();
    }
  };

  const walk = (rules) => {
    for (const rule of rules) {
      if (rule.cssRules) { walk(rule.cssRules); continue; } // @media, @supports, @layer
      if (!rule.style || !rule.selectorText) continue;
      const sel = rule.selectorText;
      if (/(^|,)\s*(:root|html|:host)\s*($|,)/.test(sel)) collect(rule.style, base);
      if (/\.dark\b/.test(sel)) collect(rule.style, darkOverrides);
    }
  };

  for (const sheet of document.styleSheets) {
    let rules;
    try { rules = sheet.cssRules; } catch { continue; } // cross-origin
    if (rules) walk(rules);
  }

  // Fallback: vars visíveis só no computed style (injetadas via JS)
  const cs = getComputedStyle(document.documentElement);
  for (let i = 0; i < cs.length; i++) {
    const prop = cs[i];
    if (prop.startsWith("--") && !(prop in base) && !(prop in darkOverrides)) {
      base[prop] = cs.getPropertyValue(prop).trim();
    }
  }

  const sortObj = (o) =>
    Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));

  const light = sortObj(base);
  const dark = sortObj({ ...base, ...darkOverrides });
  const uniqueNames = new Set([...Object.keys(light), ...Object.keys(dark)]).size;
  const resolvedPerTheme = Object.keys(light).filter((k) => light[k] !== "").length;

  const out = {
    $meta: {
      source: location.hostname,
      generatedAt: new Date().toISOString(),
      uniqueNames,
      resolvedPerTheme,
    },
    light,
    dark,
  };

  const blob = new Blob([JSON.stringify(out, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "tokens.json";
  a.click();
  console.log(`tokens.json gerado: ${uniqueNames} nomes únicos, ${resolvedPerTheme} resolvidos por tema`);
})();
