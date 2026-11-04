import Split from "./Split";
import { site, waLink } from "@/content";

export default function Footer() {
  return (
    <footer className="bg-deep text-cream">
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-28 md:px-10 md:pt-44">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-clay">Vamos conversar?</p>
        <Split text="Dê o primeiro passo para *falar* sem medo." className="display max-w-[16ch] text-[clamp(3rem,8vw,8rem)] font-light" />
        <a
          href={waLink()}
          target="_blank"
          rel="noopener"
          className="group mt-14 inline-flex items-center gap-4 rounded-full bg-clay px-10 py-5 text-lg transition hover:bg-cream hover:text-ink"
        >
          Chamar no WhatsApp <span className="transition group-hover:translate-x-1">→</span>
        </a>

        <div className="mt-28 grid gap-10 border-t border-cream/15 pt-10 text-sm md:grid-cols-3">
          <div>
            <p className="display text-2xl">
              {site.short}
              <span className="text-clay">.</span> {site.name}
            </p>
            <p className="mt-2 opacity-60">
              {site.tagline} · {site.crfa}
            </p>
          </div>
          <div className="space-y-1 opacity-80">
            <p>{site.city}</p>
            <p>{site.whatsappLabel}</p>
            <p>{site.email}</p>
          </div>
          <div className="space-y-1 md:text-right">
            <a href="#" className="block opacity-80 hover:opacity-100">
              Instagram {site.instagram}
            </a>
            <p className="opacity-40">© 2026 {site.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
