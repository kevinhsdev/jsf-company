"use client";

import { useState } from "react";
import Split from "./Split";
import { faqs } from "@/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto grid max-w-[1400px] gap-14 px-6 py-28 md:grid-cols-12 md:px-10 md:py-44">
      <div className="md:col-span-5">
        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-clay">Dúvidas</p>
        <Split text="O que *todo mundo* pergunta." className="display text-[clamp(2.4rem,5vw,4.6rem)] font-light" />
      </div>
      <ul className="md:col-span-7">
        {faqs.map((f, k) => (
          <li key={f.q} className="border-t border-ink/15 last:border-b">
            <button
              onClick={() => setOpen(open === k ? null : k)}
              aria-expanded={open === k}
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className="display text-xl font-normal md:text-2xl">{f.q}</span>
              <span className={`text-2xl text-clay transition-transform duration-500 ${open === k ? "rotate-45" : ""}`}>+</span>
            </button>
            <div className={`grid transition-all duration-500 ease-out ${open === k ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <p className="overflow-hidden pr-10 leading-relaxed opacity-75">
                <span className="block pb-7">{f.a}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
