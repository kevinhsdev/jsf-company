"use client";

import { useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import audiologiaTea from "@/assets/certificados/audiologia-tea.jpg";
import treinamento from "@/assets/certificados/treinamento-auditivo.jpg";
import habilidades from "@/assets/certificados/habilidades-auditivas.jpg";
import fala from "@/assets/certificados/fala-linguagem.jpg";
import hospitalar from "@/assets/certificados/hospitalar.jpg";
import cbfono from "@/assets/certificados/cbfono.jpg";
import { credentials } from "@/content";

const imgs: Record<string, StaticImageData> = {
  "audiologia-tea": audiologiaTea,
  "treinamento-auditivo": treinamento,
  "habilidades-auditivas": habilidades,
  "fala-linguagem": fala,
  hospitalar,
  cbfono,
};
const tilt = [-4, 3, -2, 2.5, -3, 1.5];

// Mural: certificados "presos" com fita, tortos como papel de verdade.
// Hover endireita e levanta; clique abre em tamanho real num <dialog> nativo (Esc fecha).
export default function Certificates() {
  const dlg = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<(typeof credentials)[number] | null>(null);

  const show = (c: (typeof credentials)[number]) => {
    setOpen(c);
    dlg.current?.showModal();
  };

  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-44">
      <div className="rounded-[2.5rem] bg-[#ebe1d3] px-6 py-16 md:px-16 md:py-24">
        <div className="mb-14 flex flex-col justify-between gap-4 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-clay">Formação contínua</p>
            <h2 className="display max-w-[18ch] text-[clamp(2.2rem,4.5vw,4rem)] font-light leading-[1.05]">
              Estudar sempre, para <em className="text-clay">cuidar</em> melhor.
            </h2>
          </div>
          <p className="max-w-xs text-sm opacity-60">Toque em um certificado para ver de perto.</p>
        </div>

        <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-12 md:gap-y-20">
          {credentials.map((c, i) => (
            <li key={c.img}>
              <button
                type="button"
                onClick={() => show(c)}
                style={{ "--r": `${tilt[i % tilt.length]}deg` } as React.CSSProperties}
                className="group relative block w-full rotate-[var(--r)] text-left transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:scale-[1.04] focus-visible:rotate-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
              >
                <span className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-3deg] bg-cream/70 shadow-sm backdrop-blur-sm" aria-hidden />
                <Image
                  src={imgs[c.img]}
                  alt={`Certificado: ${c.title}`}
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className="h-auto w-full rounded-sm shadow-[0_18px_40px_-18px_rgba(42,31,26,0.45)] transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(42,31,26,0.55)]"
                />
              </button>
              <p className="mt-5 text-sm leading-snug md:text-base">{c.title}</p>
              <p className="mt-1 text-xs opacity-55 md:text-sm">
                {[c.year, c.where].filter(Boolean).join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dlg}
        onClick={(e) => e.target === e.currentTarget && dlg.current?.close()}
        onClose={() => setOpen(null)}
        className="m-auto w-[min(92vw,1100px)] bg-transparent p-0 backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
      >
        {open && (
          <figure className="relative">
            <Image src={imgs[open.img]} alt={`Certificado: ${open.title}`} sizes="92vw" className="h-auto max-h-[80vh] w-full rounded-md object-contain" />
            <figcaption className="mt-4 flex items-start justify-between gap-6 text-cream">
              <span>
                {open.title}
                <span className="block text-sm opacity-60">{[open.year, open.where].filter(Boolean).join(" · ")}</span>
              </span>
              <button type="button" onClick={() => dlg.current?.close()} className="shrink-0 rounded-full border border-cream/40 px-4 py-1.5 text-sm hover:bg-cream hover:text-ink">
                Fechar
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}
