import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { images } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-36 md:pt-44">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,13,16,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(11,13,16,.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
      <div className="container-cnn relative grid min-h-[78vh] items-center gap-10 pb-20 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-ink/10 bg-ink/[.04] px-4 py-2 text-xs font-bold uppercase tracking-[.24em] text-orange">
            Creator Economy West Africa
          </p>
          <h1 className="font-[var(--font-space)] text-5xl font-black leading-[.95] tracking-[-.05em] text-ink md:text-7xl lg:text-8xl">
            30 places. 4 jours. 1 industrie à structurer.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            CNN 2026 réunit les créateurs, stratèges, mentors et partenaires qui veulent bâtir une économie des créateurs plus professionnelle, plus éthique et plus monétisable.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CTAButton />
            <a href="/the-concept" className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3 text-sm font-bold text-ink transition hover:border-orange hover:text-orange">
              Découvrir le concept
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-line bg-white p-3 shadow-soft">
          <div className="relative min-h-[430px] overflow-hidden rounded-[1.5rem]">
            <Image src={images.hero} alt="CNN 2026 — camp immersif" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <span className="w-fit rounded-full bg-ink/70 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-white/90 backdrop-blur">Camp immersif</span>
              <div>
                <p className="text-7xl font-black text-white">2026</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">Une expérience éditoriale, technologique et business pour faire émerger une nouvelle génération d’ambassadeurs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
