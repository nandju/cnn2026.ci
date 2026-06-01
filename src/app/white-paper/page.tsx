import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

export default function WhitePaperPage() {
  return (
    <main className="bg-charcoal pt-32">
      <section className="container-cnn py-20">
        <SectionHeader eyebrow="Livre blanc" title="Le document de référence pour prolonger l’impact du camp." text="Le livre blanc consolide les constats, recommandations et priorités issues de CNN 2026." />
        <div id="presentation" className="mt-12 rounded-[2rem] border border-white/10 bg-panel p-8">
          <h2 className="font-[var(--font-space)] text-3xl font-bold">Présentation</h2>
          <p className="mt-4 max-w-3xl leading-8 text-muted">Le document servira de trace stratégique pour les institutions, marques, médias, plateformes et talents qui souhaitent mieux comprendre et soutenir la Creator Economy.</p>
        </div>
        <div id="download" className="mt-8 rounded-[2rem] border border-orange/30 bg-gradient-to-br from-orange/15 to-neon/10 p-8">
          <h2 className="font-[var(--font-space)] text-3xl font-bold">Téléchargement</h2>
          <p className="mt-4 text-muted">{siteConfig.isAfterEvent ? "Le livre blanc final est disponible." : "Livre blanc bientôt disponible après l’événement."}</p>
          <div className="mt-7">
            <CTAButton href={siteConfig.isAfterEvent ? "/pdf/livre-blanc-cnn-2026.pdf" : "/the-draft"} label={siteConfig.isAfterEvent ? "Télécharger le PDF" : "Suivre The Draft"} />
          </div>
        </div>
      </section>
    </main>
  );
}
