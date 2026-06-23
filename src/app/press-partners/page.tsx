import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { sponsors, images, documents } from "@/data/site";

export default function PressPartnersPage() {
  return (
    <main className="bg-white pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Partenaires & Presse" title="Un hub pour la visibilité institutionnelle, média et sponsor." text="Partenariat, kit presse, médias et ressources PDF sont regroupés dans une page claire et premium." />
        <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-line shadow-soft">
          <div className="relative h-[280px] w-full md:h-[360px]">
            <Image src={images.presse} alt="Espace presse CNN 2026" fill sizes="100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <p className="absolute bottom-8 left-8 max-w-md font-[var(--font-space)] text-2xl font-bold text-white md:text-3xl">Une couverture média au service de l’écosystème.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article id="partenaires" className="rounded-[2rem] border border-line bg-white p-8 shadow-soft">
            <h2 className="font-[var(--font-space)] text-3xl font-bold text-ink">Devenir partenaire</h2>
            <p className="mt-4 leading-7 text-muted">Associez votre marque à un programme qui structure les talents, produit de la connaissance et crée des ponts entre plateformes, institutions et créateurs.</p>
            <a href={documents.candidature} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full border border-ink/15 px-5 py-3 text-sm font-bold text-ink hover:border-orange hover:text-orange">Télécharger la brochure</a>
          </article>
          <article id="presse" className="rounded-[2rem] border border-line bg-white p-8 shadow-soft">
            <h2 className="font-[var(--font-space)] text-3xl font-bold text-ink">Espace presse</h2>
            <p className="mt-4 leading-7 text-muted">Accédez au kit média, aux éléments de langage, aux visuels et aux informations clés pour couvrir CNN 2026.</p>
            <a href={documents.candidature} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full border border-ink/15 px-5 py-3 text-sm font-bold text-ink hover:border-neon hover:text-neon">Télécharger le kit média</a>
          </article>
        </div>
        <div id="officiels" className="mt-8 grid gap-4 md:grid-cols-3">
          {sponsors.map((logo, index) => (
            <div key={logo} className="flex items-center justify-center rounded-2xl border border-line bg-cloud p-6">
              <Image src={logo} alt={`Partenaire officiel ${index + 1}`} width={160} height={64} className="h-14 w-auto object-contain" />
            </div>
          ))}
        </div>
        <div id="medias" className="mt-8 rounded-[2rem] border border-line bg-cloud p-8 text-muted">Les retombées médias et contenus officiels seront ajoutés au fil de la campagne.</div>
      </section>
    </main>
  );
}
