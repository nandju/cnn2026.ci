import { SectionHeader } from "@/components/SectionHeader";

export default function ContactPage() {
  return (
    <main className="bg-white pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Contact" title="Entrer en relation avec l’équipe CNN 2026." text="Demandes partenaires, presse, candidatures ou informations générales." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-line bg-cloud p-8 text-ink">
            <p className="font-bold text-orange">Email</p>
            <p className="mt-2 text-muted">contact@cnn2026.org</p>
            <p className="mt-8 font-bold text-neon">Objet</p>
            <p className="mt-2 text-muted">CNN 2026 — Creator Economy West Africa</p>
          </div>
          <form className="grid gap-5 rounded-[2rem] border border-line bg-white p-8 shadow-soft">
            <input className="rounded-2xl border border-line bg-cloud px-4 py-4 text-ink outline-none focus:border-orange" placeholder="Nom" />
            <input className="rounded-2xl border border-line bg-cloud px-4 py-4 text-ink outline-none focus:border-orange" placeholder="Email" />
            <textarea className="min-h-40 rounded-2xl border border-line bg-cloud px-4 py-4 text-ink outline-none focus:border-orange" placeholder="Message" />
            <button className="w-fit rounded-full bg-gradient-to-r from-orange to-neon px-6 py-4 text-sm font-black text-white">Envoyer</button>
          </form>
        </div>
      </section>
    </main>
  );
}
