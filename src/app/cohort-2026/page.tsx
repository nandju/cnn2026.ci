import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { talents, cohortImages } from "@/data/site";

export default function CohortPage() {
  return (
    <main className="bg-white pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Cohorte 2026" title="Les 30 ambassadeurs sélectionnés." text="Des cartes prêtes à recevoir les photos, biographies et liens réseaux des talents après la sélection." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {talents.map((talent, index) => (
            <article key={talent.name} className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
              <div className="relative aspect-[4/3] w-full">
                <Image src={cohortImages[index % cohortImages.length]} alt={talent.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="font-[var(--font-space)] text-xl font-bold text-ink">{talent.name}</h2>
                <p className="mt-2 text-sm text-muted">{talent.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
