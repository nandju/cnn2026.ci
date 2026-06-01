import { Countdown } from "@/components/Countdown";
import { Hero } from "@/components/Hero";
import { KeyNumbers, PartnersMarquee, Pillars } from "@/components/Cards";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Pillars />
      <PartnersMarquee />
      <KeyNumbers />
      <section className="bg-graphite py-24">
        <div className="container-cnn grid gap-10 rounded-[2.5rem] border border-white/10 bg-panel p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <SectionHeader eyebrow="Appel à candidatures" title="Rejoignez les 30 ambassadeurs qui écriront la feuille de route 2026." text="The Draft sélectionne les profils capables de créer, analyser, fédérer et proposer des solutions utiles pour l’écosystème." />
          <CTAButton />
        </div>
      </section>
    </main>
  );
}
