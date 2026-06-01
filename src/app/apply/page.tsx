import { SectionHeader } from "@/components/SectionHeader";

export default function ApplyPage() {
  return (
    <main className="bg-charcoal pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Candidature" title="Soumettre une candidature à The Draft." text="Ce formulaire statique est prêt à être connecté à votre outil de collecte : Typeform, Google Forms, Airtable ou endpoint interne." />
        <form className="mt-12 grid gap-5 rounded-[2rem] border border-white/10 bg-panel p-8">
          {["Nom complet", "Email", "Pays", "Lien vers vos réseaux", "Spécialité principale"].map((label) => (
            <label key={label} className="grid gap-2 text-sm font-bold text-white/80">
              {label}
              <input className="rounded-2xl border border-white/10 bg-charcoal px-4 py-4 text-mist outline-none focus:border-orange" placeholder={label} />
            </label>
          ))}
          <label className="grid gap-2 text-sm font-bold text-white/80">
            Motivation
            <textarea className="min-h-36 rounded-2xl border border-white/10 bg-charcoal px-4 py-4 text-mist outline-none focus:border-orange" placeholder="Expliquez votre vision pour la Creator Economy." />
          </label>
          <button className="w-fit rounded-full bg-gradient-to-r from-orange to-neon px-6 py-4 text-sm font-black text-charcoal">Envoyer la candidature</button>
        </form>
      </section>
    </main>
  );
}
