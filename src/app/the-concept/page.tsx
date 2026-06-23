import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { images } from "@/data/site";

const sections = [
  ["message", "Message du Commissaire Général", "CNN 2026 naît d’une conviction simple : la Creator Economy ne doit plus être perçue comme une tendance périphérique, mais comme une industrie à organiser, financer et représenter."],
  ["pourquoi", "Pourquoi ce camp", "Le camp rassemble des talents et des experts pour produire des réponses concrètes aux enjeux de visibilité, de professionnalisation, d’éthique, d’IA et de monétisation."],
  ["profil", "Le profil recherché", "Créateurs, storytellers, stratèges sociaux, profils IA, responsables de communautés et jeunes leaders capables de porter un regard structuré sur l’économie des créateurs."],
  ["mandat", "Le mandat ambassadeur", "Pendant douze mois, les ambassadeurs contribuent à diffuser les recommandations du livre blanc, à représenter la cohorte et à activer des projets pilotes."],
  ["engagement", "Engagement sur 12 mois", "L’expérience ne s’arrête pas au camp : elle se prolonge par des prises de parole, des rencontres, des contenus et des actions mesurables."],
];

export default function TheConceptPage() {
  return (
    <main className="bg-white pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Le concept" title="Une plateforme de structuration pour la Creator Economy ouest-africaine." text="Une page narrative, institutionnelle et visionnaire pour comprendre le rôle de CNN 2026." />
        <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-line shadow-soft">
          <div className="relative h-[320px] w-full md:h-[420px]">
            <Image src={images.ambassadeur} alt="Ambassadeurs CNN 2026" fill sizes="100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <p className="absolute bottom-8 left-8 max-w-md font-[var(--font-space)] text-2xl font-bold text-white md:text-3xl">Une génération d’ambassadeurs au service d’une industrie.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6">
          {sections.map(([id, title, text], index) => (
            <article id={id} key={id} className="grid gap-8 rounded-[2rem] border border-line bg-white p-7 shadow-soft md:grid-cols-[.35fr_1fr] md:p-10">
              <p className="font-[var(--font-space)] text-5xl font-black text-orange/80">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="font-[var(--font-space)] text-3xl font-bold text-ink">{title}</h2>
                <p className="mt-4 text-lg leading-8 text-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
