import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Dialog } from "../components/Dialog";
import { BrandSpinner } from "../components/BrandSpinner";
import { PromptInput } from "../components/PromptInput";
import { cn } from "../lib/cn";

const CHIPS = ["GitHub", "AI App", "SaaS", "Landing Page", "Dashboard", "Portfolio"];
const TEMPLATES = [
  { title: "Industrial Automotive", forks: 2, hue: "from-zinc-fg/20 to-slate-fg/10" },
  { title: "Editorial Photography", forks: 3, hue: "from-amber-fg/20 to-orange-fg/10" },
  { title: "Maldives Resort SaaS", forks: 27, hue: "from-cyan-fg/20 to-teal-fg/10" },
  { title: "Premium AI Fintech", forks: 0, hue: "from-blue-fg/20 to-indigo-fg/10" },
  { title: "Common Ground Archive", forks: 20, hue: "from-stone-fg/20 to-neutral-fg/10" },
  { title: "Cinematic Designer", forks: 184, hue: "from-green-fg/20 to-emerald-fg/10" },
  { title: "Organic Pet Store", forks: 16, hue: "from-lime-fg/20 to-yellow-fg/10" },
  { title: "Renewable Energy", forks: 23, hue: "from-sky-fg/20 to-cyan-fg/10" },
];

export default function EnterDemo() {
  const [dark, setDark] = useState(true);
  const [dialog, setDialog] = useState(false);
  const [banner, setBanner] = useState(true);
  return (
    <div className={cn(dark && "dark")}>
      <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        {banner && (
          <div className="relative overflow-hidden h-10 flex items-center justify-center text-sm
                          bg-gradient-to-r from-rose-fg/30 via-purple-fg/20 to-indigo-fg/30
                          animate-in fade-in slide-in-from-top-2 duration-300">
            <span className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-white/20 blur-md animate-banner-shine" />
            <span className="relative z-10">Bem-vindo ao Enter — 40% off no Pro nas primeiras 24h</span>
            <button onClick={() => setBanner(false)} className="absolute right-4 opacity-70 hover:opacity-100">✕</button>
          </div>
        )}
        <div className="flex flex-1">
          <aside className="w-56 shrink-0 border-r border-border p-3 hidden md:flex flex-col gap-1">
            <div className="flex items-center gap-2 px-2 py-3 font-medium">⌁ Enter</div>
            {["Início","Projetos","Agentes","Infraestrutura"].map((n,i)=>(
              <a key={n} href="#" className={cn("rounded-full px-3 py-2 text-sm transition-colors",
                i===0?"bg-brand-active text-brand":"text-muted-foreground hover:bg-fill-tr-10")}>{n}</a>
            ))}
            <button onClick={()=>setDark(d=>!d)} className="mt-auto rounded-full p-2 hover:bg-fill-tr-10 w-fit" aria-label="Tema">
              {dark ? "☀️" : "🌙"}
            </button>
          </aside>
          <main className="flex-1 px-6 py-10 overflow-y-auto">
            <div className="mx-auto max-w-2xl text-center animate-in fade-in slide-in-from-bottom-4 blur-in-sm duration-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-sm mb-6">
                <span className="text-brand">Novo</span> GPT-5.6 Now in Enter »
              </span>
              <h1 className="text-5xl font-medium leading-tight mb-8">Pressione Enter<br/>Crie sites ou aplicativos</h1>
              <PromptInput className="text-left" />
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {CHIPS.map(c=><Button key={c} size="sm" variant="secondary">{c}</Button>)}
              </div>
            </div>
            <section className="mx-auto max-w-4xl mt-16">
              <h2 className="font-medium mb-4">Comece a partir de um template</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {TEMPLATES.map((t,i)=>(
                  <button key={t.title} className="text-left group animate-in fade-in zoom-in-95 duration-500"
                          style={{animationDelay:`${i*60}ms`,animationFillMode:"both"}}>
                    <div className="overflow-hidden rounded-lg border border-border aspect-video mb-2">
                      <div className={cn("size-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-105", t.hue)} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="truncate">{t.title}</span>
                      <span className="text-muted-foreground shrink-0 ml-2">⑂ {t.forks}</span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
            <section className="mx-auto max-w-4xl mt-16 grid gap-4 sm:grid-cols-2">
              <Card>
                <h3 className="font-medium mb-2">Botões</h3>
                <div className="flex flex-wrap gap-2">
                  <Button>Primary</Button><Button variant="brand">Brand</Button>
                  <Button variant="secondary">Secondary</Button><Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Delete</Button>
                </div>
              </Card>
              <Card>
                <h3 className="font-medium mb-2">Estados & Dialog</h3>
                <div className="flex items-center gap-4">
                  <BrandSpinner /><Button onClick={()=>setDialog(true)}>Abrir Dialog</Button>
                </div>
              </Card>
            </section>
          </main>
        </div>
        <Dialog open={dialog} onClose={()=>setDialog(false)}>
          <h3 className="text-lg font-medium mb-2">Enter Dialog</h3>
          <p className="text-muted-foreground mb-4">Entrada com fade + zoom + blur + slide.</p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={()=>setDialog(false)}>Cancelar</Button>
            <Button variant="brand" onClick={()=>setDialog(false)}>Confirmar</Button>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
