# JSF - Joia Silva Fono: notas de continuação

Site de portfólio da fonoaudióloga Joia Silva (empresa recém-aberta, CNPJ próprio). Objetivo: atrair pacientes, com visual editorial acolhedor nível Awwards. Conversão principal: WhatsApp.

## Estado atual
- Repositório: https://github.com/kevinhsdev/jsf-company (branch `main`)
- Site publicado: https://kevinhsdev.github.io/jsf-company/ (GitHub Pages via Actions; precisa de Settings → Pages → Source = GitHub Actions)
- Publicar = `git push` na `main` (o workflow `.github/workflows/deploy.yml` gera o export estático com `NEXT_PUBLIC_BASE_PATH=/<nome-do-repo>`)
- Stack: Next.js 16 (export estático), Tailwind v4, GSAP + ScrollTrigger, Lenis, hero em WebGL (shaders). Antes de mexer no Next, ler `node_modules/next/dist/docs/` (AGENTS.md avisa que a versão tem mudanças).
- Rodar local: `npm install && npm run dev`

## Onde mexer
- Todo o texto e dados: `src/content.ts` (itens com `TODO` são exemplos)
- Hero: `src/components/Hero.tsx` e `shaders.ts`. Variantes `waves`, `aurora`, `ripples`; escolhida em `site.heroVariant` (hoje `ripples`). Prévia em `/preview/<variante>`.
- Faixa de palavras com divisórias: `Marquee.tsx`
- Fotos reais: `src/assets/fotos/` (Sobre = consultorio.jpg). Logo e variantes: `src/assets/logo*.png`, `assinatura.png`
- Seções novas: `Audiology.tsx` (exames em `hearing`), `Certificates.tsx` (mural; imagens em `src/assets/certificados/`, CPF do CBFONO tarjado), `Gallery.tsx`
- Cabeçalho: pílula flutuante em `Nav.tsx`, esconde ao rolar para baixo

## Preferências dadas pelo usuário
- Estilo editorial acolhedor (areia, terracota, verde-sálvia), serifada Fraunces
- Slides de especialidades e depoimentos: manter como estão (o pedido de "slide mais lento e clean" era só da faixa de palavras)
- A faixa deve ser grande o bastante para ler, mas não enorme
- Divisória de baixo da faixa sem rótulo (para não repetir o título "Quem cuida")

## Pendências
- Confirmar com a cliente a lista de exames de audiologia (`hearing` em content.ts)
- Autorização dos pais para fotos com rosto de criança
- Ano dos certificados Hospitalar e CBFONO; e-mail real
- Trocar números e depoimentos de exemplo ("+500 atendimentos", 3 depoimentos) por reais
- Material bruto da cliente (fotos originais, PDFs com CPF) fica na raiz e está no .gitignore: não commitar
