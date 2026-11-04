const words = ["Linguagem", "Voz", "Fala", "Fluência", "Deglutição", "Leitura", "Escuta", "Comunicação"];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink/10 py-8 md:py-10" aria-hidden>
      <div className="marquee-track flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {words.map((w) => (
              <span key={w} className="display flex items-center text-2xl font-light text-ink/70 md:text-4xl">
                <span className="px-10 md:px-16">{w}</span>
                <span className="h-px w-8 bg-ink/25" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
