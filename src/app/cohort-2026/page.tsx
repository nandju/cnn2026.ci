import { SectionHeader } from "@/components/SectionHeader";
import { talents } from "@/data/site";

export default function CohortPage() {
  return (
    <main className="bg-charcoal pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Cohorte 2026" title="Les 30 ambassadeurs sélectionnés." text="Des cartes prêtes à recevoir les photos, biographies et liens réseaux des talents après la sélection." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {talents.map((talent) => (
            <article key={talent.name} className="rounded-[2rem] border border-white/10 bg-panel p-5">
              <div className="mb-5 aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-orange/20 to-neon/10" />
              <h2 className="font-[var(--font-space)] text-xl font-bold">{talent.name}</h2>
              <p className="mt-2 text-sm text-muted">{talent.role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
