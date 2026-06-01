import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

export default function TheDraftPage() {
  return (
    <main className="bg-charcoal pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="The Draft" title="Le mécanisme de sélection des 30 ambassadeurs CNN 2026." text="Une page évolutive : avant l’événement, elle convertit les candidatures ; après la sélection, elle révèle la cohorte." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article id="phase-1" className="rounded-[2rem] border border-orange/30 bg-panel p-8">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-orange">Phase 1</p>
            <h2 className="mt-4 font-[var(--font-space)] text-3xl font-bold">Candidater</h2>
            <p className="mt-4 leading-7 text-muted">Les candidats soumettent leur profil, leurs réalisations, leurs motivations et leur vision de la Creator Economy.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton href="/apply" label="Remplir le formulaire" />
              <a href="/pdf/formulaire-cnn-2026.pdf" className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-mist hover:border-neon hover:text-neon">Télécharger le PDF</a>
            </div>
          </article>
          <article id="phase-2" className="rounded-[2rem] border border-white/10 bg-panel p-8">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-neon">Phase 2</p>
            <h2 className="mt-4 font-[var(--font-space)] text-3xl font-bold">Révéler la cohorte</h2>
            <p className="mt-4 leading-7 text-muted">Après sélection, cette section oriente vers les 30 talents, les 6 squads et leurs profils publics.</p>
            <p className="mt-7 rounded-2xl bg-charcoal/70 p-4 text-sm text-white/70">Statut actuel : {siteConfig.isAfterEvent ? "cohorte publiée" : "candidatures ouvertes"}.</p>
          </article>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {["Candidature", "Évaluation", "Sélection", "Immersion"].map((step, index) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
              <p className="text-orange">0{index + 1}</p>
              <p className="mt-2 font-bold">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
