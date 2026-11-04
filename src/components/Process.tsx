"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Split from "./Split";
import { steps } from "@/content";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".step", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: { trigger: ".steps", start: "top 80%", once: true },
      });
      gsap.fromTo(
        ".steps-line",
        { scaleX: 0 },
        { scaleX: 1, ease: "none", scrollTrigger: { trigger: ".steps", start: "top 70%", end: "bottom 60%", scrub: true } },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="processo" ref={root} className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
      <p className="mb-5 text-xs uppercase tracking-[0.25em] text-clay">Como funciona</p>
      <Split text="Do primeiro *oi* à evolução, sem complicação." className="display mb-20 max-w-[18ch] text-[clamp(2.4rem,5.5vw,5rem)] font-light" />
      <div className="steps relative grid gap-12 md:grid-cols-4 md:gap-8">
        <div className="absolute left-0 top-[2.1rem] hidden h-px w-full bg-ink/10 md:block">
          <div className="steps-line h-full origin-left bg-clay" />
        </div>
        {steps.map((s) => (
          <div key={s.n} className="step relative">
            <span className="display relative mb-8 flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full border border-ink/20 bg-sand text-2xl italic">
              {s.n}
            </span>
            <h3 className="display mb-3 text-2xl font-normal">{s.title}</h3>
            <p className="leading-relaxed opacity-70">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
