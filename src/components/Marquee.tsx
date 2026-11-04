const words = ["Linguagem", "Voz", "Fala", "Fluência", "Deglutição", "Leitura", "Escuta", "Comunicação"];

// Duas linhas gigantes em sentidos opostos: contorno vazado em cima, itálico sólido embaixo.
function Row({ reverse = false, outline = false }: { reverse?: boolean; outline?: boolean }) {
  return (
    <div className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}>
      {[0, 1].map((k) => (
        <div key={k} className="flex shrink-0">
          {words.map((w) => (
            <span
              key={w}
              className={`display px-6 text-[clamp(2rem,6vw,4.75rem)] font-light leading-[1.05] md:px-10 ${
                outline ? "text-transparent [-webkit-text-stroke:1px_var(--ink)]" : "italic text-clay"
              }`}
            >
              {w}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

// Linha fina com losango central e rótulo, para separar a faixa do hero e da seção seguinte.
function Divider({ label }: { label?: string }) {
  return (
    <div className="mx-auto flex max-w-[1400px] items-center gap-5 px-6 md:px-10">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-ink/25" />
      <span className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-ink/55">
        <span className="h-1.5 w-1.5 rotate-45 bg-clay" />
        {label}
        {label && <span className="h-1.5 w-1.5 rotate-45 bg-clay" />}
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-ink/25" />
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="pt-10 md:pt-14">
      <Divider label="Áreas de atuação" />
      <div className="overflow-hidden py-8 md:py-10" aria-hidden>
        <Row outline />
        <Row reverse />
      </div>
      <Divider />
    </div>
  );
}
