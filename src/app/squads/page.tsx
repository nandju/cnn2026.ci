import { SectionHeader } from "@/components/SectionHeader";
import { squads } from "@/data/site";

export default function SquadsPage() {
  return (
    <main className="bg-white pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Squads" title="Six équipes élites pour couvrir les enjeux clés de l’écosystème." text="Chaque squad produit des analyses, prototypes, recommandations et formats exploitables pour le livre blanc." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {squads.map((squad, index) => (
            <article key={squad} className="rounded-[2rem] border border-line bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-neon/50">
              <p className="font-[var(--font-space)] text-5xl font-black text-neon">0{index + 1}</p>
              <h2 className="mt-6 font-[var(--font-space)] text-2xl font-bold text-ink">{squad}</h2>
              <p className="mt-4 text-sm leading-6 text-muted">Mission, livrables, mentor référent et talents associés pourront être publiés après la sélection.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
