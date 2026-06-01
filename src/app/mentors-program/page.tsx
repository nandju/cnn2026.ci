import { SectionHeader } from "@/components/SectionHeader";
import { mentors } from "@/data/site";

export default function MentorsProgramPage() {
  return (
    <main className="bg-charcoal pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Programme & Mentors" title="Quatre jours d’immersion pour passer de l’intuition à la méthode." text="Programme, ateliers, mentorat, livrables et sessions stratégiques pour structurer les ambassadeurs." />
        <div id="programme" className="mt-12 rounded-[2rem] border border-white/10 bg-panel p-8">
          <h2 className="font-[var(--font-space)] text-3xl font-bold">Programme</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {["Diagnostic", "Production", "IA & outils", "Livre blanc"].map((day, index) => (
              <div key={day} className="rounded-2xl bg-charcoal p-5">
                <p className="text-orange">Jour {index + 1}</p>
                <p className="mt-2 font-bold">{day}</p>
              </div>
            ))}
          </div>
          <a href="/pdf/programme-cnn-2026.pdf" className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-bold hover:border-neon hover:text-neon">Télécharger le programme PDF</a>
        </div>
        <div id="mentors" className="mt-8 grid gap-5 md:grid-cols-3">
          {mentors.map(([name, role]) => (
            <article key={name} className="rounded-[2rem] border border-white/10 bg-panel p-6">
              <div className="mb-5 aspect-square rounded-[1.5rem] bg-gradient-to-br from-orange/30 to-neon/10" />
              <h3 className="font-[var(--font-space)] text-2xl font-bold">{name}</h3>
              <p className="mt-2 text-muted">{role}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
