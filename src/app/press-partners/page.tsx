import { SectionHeader } from "@/components/SectionHeader";
import { partners } from "@/data/site";

export default function PressPartnersPage() {
  return (
    <main className="bg-charcoal pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Partenaires & Presse" title="Un hub pour la visibilité institutionnelle, média et sponsor." text="Partenariat, kit presse, médias et ressources PDF sont regroupés dans une page claire et premium." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article id="partenaires" className="rounded-[2rem] border border-white/10 bg-panel p-8">
            <h2 className="font-[var(--font-space)] text-3xl font-bold">Devenir partenaire</h2>
            <p className="mt-4 leading-7 text-muted">Associez votre marque à un programme qui structure les talents, produit de la connaissance et crée des ponts entre plateformes, institutions et créateurs.</p>
            <a href="/pdf/brochure-partenariat-cnn-2026.pdf" className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-bold hover:border-orange hover:text-orange">Télécharger la brochure</a>
          </article>
          <article id="presse" className="rounded-[2rem] border border-white/10 bg-panel p-8">
            <h2 className="font-[var(--font-space)] text-3xl font-bold">Espace presse</h2>
            <p className="mt-4 leading-7 text-muted">Accédez au kit média, aux éléments de langage, aux visuels et aux informations clés pour couvrir CNN 2026.</p>
            <a href="/pdf/kit-media-cnn-2026.pdf" className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-bold hover:border-neon hover:text-neon">Télécharger le kit média</a>
          </article>
        </div>
        <div id="officiels" className="mt-8 grid gap-4 md:grid-cols-3">
          {partners.map((partner) => <div key={partner} className="rounded-2xl border border-white/10 bg-white/[.03] p-6 text-center font-black uppercase tracking-[.18em] text-white/50">{partner}</div>)}
        </div>
        <div id="medias" className="mt-8 rounded-[2rem] border border-white/10 bg-panel p-8 text-muted">Les retombées médias et contenus officiels seront ajoutés au fil de la campagne.</div>
      </section>
    </main>
  );
}
