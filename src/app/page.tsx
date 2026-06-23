import { Countdown } from "@/components/Countdown";
import { Hero } from "@/components/Hero";
import { KeyNumbers, PartnersMarquee, Pillars } from "@/components/Cards";
import { CTAButton } from "@/components/CTAButton";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Pillars />
      <PartnersMarquee />
      <KeyNumbers />
      <section className="bg-white py-24">
        <div className="container-cnn grid gap-10 rounded-[2.5rem] border border-orange/30 bg-gradient-to-br from-orange/10 via-cloud to-neon/10 p-8 text-ink shadow-soft md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[.25em] text-orange">Appel à candidatures</p>
            <h2 className="font-[var(--font-space)] text-3xl font-bold tracking-tight text-ink md:text-5xl">Rejoignez les 30 ambassadeurs qui écriront la feuille de route 2026.</h2>
            <p className="mt-5 text-base leading-7 text-muted md:text-lg">The Draft sélectionne les profils capables de créer, analyser, fédérer et proposer des solutions utiles pour l’écosystème.</p>
          </div>
          <CTAButton />
        </div>
      </section>
    </main>
  );
}
