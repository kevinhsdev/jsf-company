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
              className={`display px-6 text-[clamp(3.5rem,11vw,9rem)] font-light leading-[1.05] md:px-10 ${
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

export default function Marquee() {
  return (
    <div className="overflow-hidden py-10 md:py-16" aria-hidden>
      <Row outline />
      <Row reverse />
    </div>
  );
}
