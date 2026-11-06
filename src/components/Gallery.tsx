import Image, { type StaticImageData } from "next/image";
import sessao from "@/assets/fotos/sessao.jpg";
import brincar from "@/assets/fotos/brincar.jpg";
import encontro from "@/assets/fotos/encontro-audiologia.jpg";
import curso from "@/assets/fotos/curso-bandagem.jpg";
import disfagia from "@/assets/fotos/palestra-disfagia.jpg";
import hospital from "@/assets/fotos/hospital.jpg";
import mesa from "@/assets/fotos/sessao-mesa.jpg";

const photos: [StaticImageData, string][] = [
  [sessao, "Cada avanço é comemorado"],
  [brincar, "Terapia de linguagem pelo brincar"],
  [encontro, "41º Encontro Internacional de Audiologia"],
  [curso, "Atualização: bandagem elástica"],
  [disfagia, "Estudo de casos de disfagia"],
  [hospital, "Atuação hospitalar"],
  [mesa, "Sessão infantil"],
];

// Colunas CSS nativas: mosaico sem JS que respeita a proporção de cada foto.
export default function Gallery() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-28 md:px-10 md:pb-44">
      <p className="mb-10 text-xs uppercase tracking-[0.25em] text-clay">No dia a dia</p>
      <div className="columns-2 gap-4 md:columns-3 md:gap-6">
        {photos.map(([src, cap]) => (
          <figure key={cap} className="mb-4 break-inside-avoid md:mb-6">
            <Image src={src} alt={cap} sizes="(min-width: 768px) 33vw, 50vw" className="h-auto w-full rounded-[1.25rem]" />
            <figcaption className="mt-2 text-xs opacity-60 md:text-sm">{cap}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
