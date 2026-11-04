"use client";

import { useEffect, useState } from "react";
import { site, waLink } from "@/content";

const links = [
  ["Sobre", "#sobre"],
  ["Especialidades", "#servicos"],
  ["Como funciona", "#processo"],
  ["Dúvidas", "#faq"],
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-sand/80 py-3 backdrop-blur-md" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#" className="display text-2xl font-medium">
          {site.short}
          <span className="text-clay">.</span>
          <span className="ml-3 hidden font-sans text-xs uppercase tracking-[0.2em] opacity-60 sm:inline">{site.name}</span>
        </a>
        <nav className="hidden items-center gap-9 text-sm md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="relative opacity-80 transition hover:opacity-100">
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
