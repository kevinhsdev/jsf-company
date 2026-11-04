"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/content";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 12000);
    return () => clearInterval(t);
  }, [i, n]);

  return (
    <section className="bg-clay py-28 text-cream md:py-40">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <p className="mb-10 text-xs uppercase tracking-[0.25em] opacity-80">Quem já passou por aqui</p>
        <div className="relative min-h-[17rem] md:min-h-[20rem]" aria-live="polite">
          {testimonials.map((t, k) => (
            <figure
              key={k}
              className={`absolute inset-0 transition-all duration-[1800ms] ease-out ${
                k === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
              }`}
              aria-hidden={k !== i}
            >
              <blockquote className="display text-[clamp(1.9rem,4.4vw,4rem)] font-light italic">“{t.quote}”</blockquote>
              <figcaption className="mt-8 text-sm opacity-80">{t.who}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-4">
          <button onClick={() => go(-1)} aria-label="Anterior" className="h-12 w-12 rounded-full border border-cream/40 transition hover:bg-cream hover:text-clay">
            ←
          </button>
          <button onClick={() => go(1)} aria-label="Próximo" className="h-12 w-12 rounded-full border border-cream/40 transition hover:bg-cream hover:text-clay">
            →
          </button>
          <span className="ml-4 text-sm opacity-70">
            {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
