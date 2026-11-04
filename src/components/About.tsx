"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Split from "./Split";
import atendimento from "@/assets/atendimento.jpg";
import { site } from "@/content";

const stats = [
  ["+500", "atendimentos realizados"], // TODO: números reais
  ["0–99", "anos, todas as idades"],
  ["100%", "plano individualizado"],
];

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(".about-img", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(".about-fade", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-copy", start: "top 75%", once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" ref={root} className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-sage/30">
            <div className="about-img absolute inset-x-0 -top-[10%] h-[120%]">
              <Image src={atendimento} alt="Fonoaudióloga em atendimento com uma criança" fill sizes="(min-width: 768px) 50vw, 100vw" placeholder="blur" className="object-cover object-[60%_50%]" />
            </div>
          </div>
        </div>
        <div className="about-copy flex flex-col justify-center md:col-span-6 md:pl-10">
          <p className="about-fade mb-6 text-xs uppercase tracking-[0.25em] text-clay">Quem cuida</p>
          <Split
            text="Fonoaudiologia que começa *ouvindo* de verdade."
            className="display text-[clamp(2.4rem,5.5vw,5rem)] font-light"
          />
          <p className="about-fade mt-8 max-w-xl text-lg leading-relaxed opacity-80">
            Sou Joia Silva, fonoaudióloga. Acredito que comunicar é muito mais que falar: é se sentir parte do mundo. Cada
            paciente chega com uma história, e é a partir dela que construo o plano de cuidado, sempre junto da família.
          </p>
          <p className="about-fade mt-4 text-sm opacity-60">{site.crfa}</p>
          <dl className="about-fade mt-14 grid grid-cols-3 gap-6 border-t border-ink/15 pt-8">
            {stats.map(([n, l]) => (
              <div key={l}>
                <dt className="display text-4xl font-light md:text-6xl">{n}</dt>
                <dd className="mt-2 text-xs opacity-60 md:text-sm">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
