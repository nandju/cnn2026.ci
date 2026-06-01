import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-36 md:pt-44">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25" />
      <div className="container-cnn relative grid min-h-[78vh] items-center gap-10 pb-20 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[.24em] text-neon">
            Creator Economy West Africa
          </p>
          <h1 className="font-[var(--font-space)] text-5xl font-black leading-[.95] tracking-[-.05em] md:text-7xl lg:text-8xl">
            30 places. 4 jours. 1 industrie à structurer.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            CNN 2026 réunit les créateurs, stratèges, mentors et partenaires qui veulent bâtir une économie des créateurs plus professionnelle, plus éthique et plus monétisable.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CTAButton />
            <a href="/the-concept" className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-mist transition hover:border-neon hover:text-neon">
              Découvrir le concept
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-4 shadow-2xl backdrop-blur">
          <div className="min-h-[430px] rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,106,0,.65),transparent_24%),radial-gradient(circle_at_70%_35%,rgba(53,255,122,.4),transparent_18%),linear-gradient(145deg,#1b2028,#090b0e)] p-8">
            <div className="flex h-full flex-col justify-between gap-24">
              <span className="w-fit rounded-full bg-charcoal/70 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-white/80">Camp immersif</span>
              <div>
                <p className="text-7xl font-black text-white/95">2026</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">Une expérience éditoriale, technologique et business pour faire émerger une nouvelle génération d’ambassadeurs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
