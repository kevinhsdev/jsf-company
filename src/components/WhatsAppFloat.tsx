"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/content";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chamar no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-medium text-white shadow-xl transition-all duration-500 hover:scale-105 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden>
        <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.800 1.500 5.600 1.500 6.900 0 12.600-5.600 12.600-12.500S22.900 3 16 3zm0 22.800c-1.800 0-3.500-.5-5-1.400l-.4-.2-4.400 1.200 1.200-4.300-.3-.4a10 10 0 01-1.500-5.300C5.600 9.900 10.300 5.400 16 5.400s10.400 4.500 10.400 10.100S21.700 25.800 16 25.800zm5.700-7.500c-.3-.2-1.900-.9-2.200-1-.3-.1-.5-.2-.7.200-.2.300-.8 1-1 1.200-.2.200-.4.200-.7.100-.3-.2-1.400-.5-2.600-1.600-1-.9-1.600-1.900-1.800-2.200-.2-.3 0-.5.100-.7l.5-.6c.2-.2.200-.3.300-.5.100-.2.100-.4 0-.6l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.100-.9.400-.3.300-1.200 1.200-1.200 2.800s1.200 3.300 1.400 3.500c.2.200 2.400 3.700 5.800 5.100 3.400 1.400 3.400.9 4 .9.600-.1 1.900-.8 2.200-1.500.3-.8.3-1.400.2-1.500-.1-.2-.3-.3-.6-.4z" />
      </svg>
      <span className="hidden sm:inline">Agendar pelo WhatsApp</span>
    </a>
  );
}
