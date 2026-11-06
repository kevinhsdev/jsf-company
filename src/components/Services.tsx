"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Split from "./Split";
import { services, waLink } from "@/content";

gsap.registerPlugin(ScrollTrigger);

// Desktop: seção fixa com trilho horizontal controlado pelo scroll.
// Mobile: cartões empilhados, sem pin.
export default function Services() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const el = track.current!;
      const dist = () => el.scrollWidth - window.innerWidth;
      gsap.to(el, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${dist()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (s) => bar.current && (bar.current.style.transform = `scaleX(${s.progress})`),
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="servicos" ref={root} className="relative bg-deep text-cream md:h-screen md:overflow-hidden">
      <div className="flex flex-col py-24 md:h-full md:justify-center md:py-0">
        <div className="mx-auto mb-12 flex w-full max-w-[1400px] flex-col justify-between gap-6 px-6 md:mb-14 md:flex-row md:items-end md:px-10">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-clay">Especialidades</p>
            <Split text="Cuidado para *cada* fase da comunicação." className="display max-w-[18ch] text-[clamp(2.2rem,min(4.6vw,8.5vh),4.6rem)] font-light" />
          </div>
          <div className="hidden h-px w-48 bg-cream/20 md:block">
            <div ref={bar} className="h-full origin-left scale-x-0 bg-clay" />
          </div>
        </div>

        <div ref={track} className="flex flex-col gap-5 px-6 md:w-max md:flex-row md:gap-8 md:px-10">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative flex shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-cream/10 p-8 md:min-h-[max(46vh,340px)] md:w-[min(34vw,480px)] md:p-10"
              style={{ background: `linear-gradient(160deg, ${s.color}33, transparent 70%)` }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
                style={{ background: s.color }}
              />
              <span className="display relative text-6xl font-light italic opacity-50">{s.n}</span>
              <div className="relative mt-10">
                <h3 className="display mb-4 text-3xl font-light md:text-4xl">{s.title}</h3>
                <p className="mb-6 max-w-sm leading-relaxed opacity-75">{s.text}</p>
                <ul className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full border border-cream/25 px-3 py-1 text-xs">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="display flex shrink-0 items-center justify-center gap-3 rounded-[2rem] bg-clay p-10 text-3xl font-light transition hover:bg-cream hover:text-ink md:min-h-[max(46vh,340px)] md:w-[min(28vw,380px)] md:text-4xl"
          >
            Conversar agora <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
