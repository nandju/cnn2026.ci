import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { mentors, images } from "@/data/site";

export default function MentorsProgramPage() {
  return (
    <main className="bg-white pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Programme & Mentors" title="Quatre jours d’immersion pour passer de l’intuition à la méthode." text="Programme, ateliers, mentorat, livrables et sessions stratégiques pour structurer les ambassadeurs." />
        <div id="programme" className="mt-12 grid gap-6 overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[260px]">
            <Image src={images.programme1} alt="Programme CNN 2026" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="p-8">
            <h2 className="font-[var(--font-space)] text-3xl font-bold text-ink">Programme</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Diagnostic", "Production", "IA & outils", "Livre blanc"].map((day, index) => (
                <div key={day} className="rounded-2xl border border-line bg-cloud p-5">
                  <p className="text-orange">Jour {index + 1}</p>
                  <p className="mt-2 font-bold text-ink">{day}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="mentors" className="mt-8 grid gap-5 md:grid-cols-3">
          {mentors.map(([name, role, photo]) => (
            <article key={name} className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
              <div className="relative aspect-square w-full">
                <Image src={photo} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-[var(--font-space)] text-2xl font-bold text-ink">{name}</h3>
                <p className="mt-2 text-muted">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
