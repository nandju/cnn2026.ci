import { SectionHeader } from "@/components/SectionHeader";

const faqs = [
  ["Qui peut candidater ?", "Tout profil créatif, stratégique ou technologique impliqué dans la Creator Economy et capable de contribuer à une réflexion collective."],
  ["Le camp est-il payant ?", "Les conditions de participation seront précisées dans le dossier officiel de candidature."],
  ["Que produit la cohorte ?", "La cohorte contribue aux recommandations du livre blanc, aux restitutions publiques et aux contenus de valorisation."],
  ["Quand le livre blanc sera-t-il disponible ?", "Après l’événement, une fois les travaux consolidés, relus et validés."],
];

export default function FAQPage() {
  return (
    <main className="bg-white pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="FAQ" title="Questions fréquentes." text="Les réponses essentielles pour comprendre l’expérience CNN 2026." />
        <div className="mt-12 grid gap-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              <summary className="cursor-pointer font-[var(--font-space)] text-xl font-bold text-ink">{question}</summary>
              <p className="mt-4 leading-7 text-muted">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
