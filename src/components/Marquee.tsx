const words = ["Linguagem", "Voz", "Fala", "Fluência", "Deglutição", "Leitura", "Escuta", "Comunicação"];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-ink/15 bg-deep py-6 text-cream" aria-hidden>
      <div className="marquee-track flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {row.map((w, i) => (
              <span key={i} className="display flex items-center text-4xl font-light italic md:text-6xl">
                <span className="px-8">{w}</span>
                <span className="text-clay">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
