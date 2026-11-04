import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SmoothScroll from "@/components/SmoothScroll";
import { shaders, type HeroVariant } from "@/components/shaders";

export function generateStaticParams() {
  return Object.keys(shaders).map((v) => ({ v }));
}

// Pré-visualização de cada fundo do hero, para comparar antes de escolher.
export default async function Preview({ params }: PageProps<"/preview/[v]">) {
  const { v } = await params;
  if (!(v in shaders)) notFound();
  return (
    <>
      <SmoothScroll />
      <Nav />
      <Hero variant={v as HeroVariant} />
    </>
  );
}
