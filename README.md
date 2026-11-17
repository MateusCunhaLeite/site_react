# Rafa Manager · Página inicial do PFC

Site em React + Vite com 6 páginas: Início, Projeto, Diário de IA, React × JS, Mercado e Entrega.

## Rodar localmente

Requer Node 20+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera a pasta dist/
npm run preview    # serve o build de produção
```

## Adaptar ao seu PFC

Todo o conteúdo (textos, módulos, stack, prompts, checklist) está em
[src/data/pfc.js](src/data/pfc.js). Os componentes só leem esse arquivo.

## Estrutura

```
src/
├── data/pfc.js          # todo o conteúdo
├── components/          # Navbar, Footer, FluxoStepper, CompareSlider, ModuleExplorer, Reveal
├── pages/               # Home, Projeto, Ia, ReactVsJs, Mercado, Entrega, NotFound
├── App.jsx              # rotas
└── index.css            # tokens de cor em :root e estilos
```

## Publicar

Veja a página **Entrega** do site, ou os passos resumidos:

1. Crie um repositório vazio no GitHub.
2. Envie o código: `git add . && git commit -m "Página inicial do PFC" && git push`.
3. Na Vercel, importe o repositório. O arquivo `vercel.json` já cuida das rotas
   (por exemplo, `/ia` funciona ao recarregar a página).
