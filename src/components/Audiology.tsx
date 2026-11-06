import Image from "next/image";
import Split from "./Split";
import audiometria from "@/assets/fotos/audiometria.jpg";
import audiometro from "@/assets/fotos/audiometro.jpg";
import { hearing, waLink } from "@/content";

// Especialidade principal: exames de audição + formação que sustenta.
export default function Audiology() {
  return (
    <section id="audiologia" className="mx-auto max-w-[1400px] px-6 pt-28 pb-20 md:px-10 md:pt-44 md:pb-28">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="mb-5 text-xs uppercase tracking-[0.25em] text-clay">Especialidade</p>
          <Split text="Audiologia: cuidar da *escuta* em todas as idades." className="display max-w-[16ch] text-[clamp(2.4rem,5vw,4.6rem)] font-light" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-80">
            Ouvir bem muda a forma de aprender, conversar e se relacionar. Faço a avaliação completa da audição e, quando
            preciso, a reabilitação, com atenção especial a crianças, autismo e TDAH.
          </p>
          <ul className="mt-12 border-t border-ink/15">
            {hearing.map((h, i) => (
              <li key={h.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/15 py-5">
                <span className="display text-lg italic text-clay">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="display text-xl font-normal md:text-2xl">{h.title}</h3>
                  <p className="mt-1 opacity-70">{h.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={waLink("Olá! Gostaria de agendar um exame de audição.")}
            target="_blank"
            rel="noopener"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-cream transition hover:bg-clay"
          >
            Agendar exame de audição <span>→</span>
          </a>
        </div>

        <div className="relative md:col-span-6 md:pl-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src={audiometria} alt="Joia Silva realizando audiometria com uma criança em cabine acústica" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="relative -mt-24 ml-auto w-3/5 overflow-hidden rounded-[1.5rem] border-[6px] border-sand md:-mt-40">
            <Image src={audiometro} alt="Joia Silva ao lado de um audiômetro no consultório" sizes="(min-width: 768px) 25vw, 60vw" className="h-auto w-full" />
          </div>
        </div>
      </div>

    </section>
  );
}
