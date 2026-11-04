"use client";

import { useEffect, useRef, useState } from "react";
import { site, waLink } from "@/content";

const links = [
  ["Sobre", "#sobre"],
  ["Especialidades", "#servicos"],
  ["Como funciona", "#processo"],
  ["Dúvidas", "#faq"],
];

// Pílula flutuante centralizada: ganha corpo ao rolar, esconde ao descer e volta ao subir.
export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const on = () => {
      const y = window.scrollY;
      setSolid(y > 60);
      if (Math.abs(y - lastY.current) > 6) {
        setHidden(y > lastY.current && y > 120);
        lastY.current = y;
      }
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:top-6 ${
        hidden ? "-translate-y-[160%]" : "translate-y-0"
      }`}
    >
      <div
        className={`pointer-events-auto flex w-full max-w-[860px] items-center justify-between gap-6 rounded-full border border-ink/10 py-2 pl-6 pr-2 backdrop-blur-xl transition-all duration-500 ${
          solid ? "bg-cream/85 shadow-[0_10px_40px_-12px_rgba(42,31,26,0.25)]" : "bg-cream/55"
        }`}
      >
        <a href="#" className="display text-xl font-medium">
          {site.short}
          <span className="text-clay">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="opacity-70 transition hover:opacity-100">
              {l}
            </a>
          ))}
        </nav>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          className="rounded-full bg-ink px-5 py-2.5 text-sm text-cream transition hover:bg-clay"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
