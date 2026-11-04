"use client";

import { useEffect, useState } from "react";
import { site, waLink } from "@/content";

const links = [
  ["Sobre", "#sobre"],
  ["Especialidades", "#servicos"],
  ["Como funciona", "#processo"],
  ["Dúvidas", "#faq"],
];

// Pílula flutuante centralizada; ganha mais corpo depois que a página rola.
export default function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6">
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
