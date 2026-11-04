"use client";

import { useEffect, useRef, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string; // use *palavra* para destacar em itálico terracota
  as?: ElementType;
  className?: string;
  delay?: number;
  onLoad?: boolean; // anima ao carregar em vez de ao rolar
};

export default function Split({ text, as: Tag = "h2", className = "", delay = 0, onLoad = false }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inners = el.querySelectorAll(".word-inner");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(inners, {
        yPercent: 115,
        rotate: 4,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.06,
        delay,
        scrollTrigger: onLoad ? undefined : { trigger: el, start: "top 85%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [delay, onLoad]);

  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);

  return (
    <Tag ref={ref} className={className} aria-label={text.replaceAll("*", "")}>
      {parts.map((p, i) => {
        const em = p.startsWith("*");
        const words = (em ? p.slice(1, -1) : p).split(" ").filter(Boolean);
        return words.map((w, j) => (
          <span key={`${i}-${j}`} className="word-mask" aria-hidden>
            <span className={`word-inner ${em ? "italic text-clay" : ""}`}>{w}&nbsp;</span>
          </span>
        ));
      })}
    </Tag>
  );
}
