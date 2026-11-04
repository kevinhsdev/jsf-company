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
          end: () => `+=${dist() * 1.8}`,
          pin: true,
          scrub: 2.2,
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

        <div ref={track} className="flex flex-col gap-14 px-6 md:w-max md:flex-row md:gap-24 md:px-10">
          {services.map((s) => (
            <article key={s.n} className="flex shrink-0 flex-col border-t border-cream/20 pt-6 md:w-[min(30vw,400px)]">
              <span className="mb-16 text-xs tracking-[0.25em] opacity-50 md:mb-[8vh]">{s.n}</span>
              <h3 className="display mb-5 text-3xl font-light md:text-4xl">{s.title}</h3>
              <p className="mb-6 max-w-sm leading-relaxed opacity-60">{s.text}</p>
              <p className="text-xs opacity-40">{s.tags.join("  ·  ")}</p>
            </article>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="display flex shrink-0 items-end gap-3 border-t border-clay pt-6 text-3xl font-light text-clay transition-opacity hover:opacity-70 md:w-[min(22vw,300px)] md:text-4xl"
          >
            Conversar agora <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
