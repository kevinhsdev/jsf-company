"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroShader from "./HeroShader";
import type { HeroVariant } from "./shaders";
import Split from "./Split";
import { site, waLink } from "@/content";

export default function Hero({ variant = site.heroVariant }: { variant?: HeroVariant }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", { opacity: 0, y: 24, duration: 1.2, ease: "power3.out", stagger: 0.12, delay: 0.9 });
      gsap.to(".hero-canvas", {
        yPercent: 12,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-content", {
        yPercent: -14,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <div className="hero-canvas absolute inset-0">
        <HeroShader variant={variant} />
      </div>
      {/* véu sobre o fundo para o texto ficar legível: forte no celular, suave à esquerda no desktop */}
      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-sand via-sand/80 to-sand/10 md:bg-gradient-to-r md:from-sand/75 md:via-sand/35 md:to-transparent" />
      <div className="hero-content relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-14 md:px-10 md:pb-20">
        <p className="hero-fade mb-6 text-xs uppercase tracking-[0.25em] opacity-70">
          {site.tagline} · {site.city}
        </p>
        <Split
          as="h1"
          onLoad
          delay={0.2}
          text="Escutar bem para *viver* melhor."
          className="display max-w-[16ch] text-[clamp(3rem,9.5vw,9rem)] font-light"
        />
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="hero-fade max-w-md text-lg leading-relaxed opacity-80">
            Fonoaudiologia com escuta atenta para crianças, jovens e adultos. Audiologia, disfagia e linguagem, no seu tempo.
          </p>
          <div className="hero-fade flex items-center gap-5">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 rounded-full bg-clay px-8 py-4 text-cream transition hover:bg-ink"
            >
              Agendar avaliação
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a href="#servicos" className="hidden text-sm underline underline-offset-8 opacity-70 hover:opacity-100 sm:block">
              Ver especialidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
