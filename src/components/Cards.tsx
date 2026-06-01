import { keyNumbers, partners, pillars } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Pillars() {
  return (
    <section className="bg-graphite py-24">
      <div className="container-cnn">
        <SectionHeader eyebrow="Trois piliers" title="Un camp pensé pour transformer l’influence en infrastructure." text="Chaque pilier relie création, technologie, stratégie et responsabilité pour produire des livrables concrets." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="rounded-[2rem] border border-white/10 bg-panel p-6 transition hover:-translate-y-1 hover:border-orange/50">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange/30 to-neon/20 font-[var(--font-space)] text-2xl font-black text-neon">0{index + 1}</div>
              <h3 className="font-[var(--font-space)] text-2xl font-bold">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{pillar.text}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-charcoal/70 p-4 text-sm leading-6 text-white/80">
                <span className="font-bold text-orange">À accomplir : </span>{pillar.outcome}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnersMarquee() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-charcoal py-8">
      <div className="flex min-w-max animate-[marquee_24s_linear_infinite] gap-6 px-6">
        {[...partners, ...partners].map((partner, index) => (
          <span key={`${partner}-${index}`} className="rounded-full border border-white/10 bg-white/[.03] px-8 py-4 text-sm font-black uppercase tracking-[.22em] text-white/45 grayscale">
            {partner}
          </span>
        ))}
      </div>
    </section>
  );
}

export function KeyNumbers() {
  return (
    <section className="bg-charcoal py-24">
      <div className="container-cnn grid gap-4 md:grid-cols-4">
        {keyNumbers.map(([number, label]) => (
          <div key={label} className="rounded-[2rem] border border-white/10 bg-white/[.035] p-7">
            <p className="font-[var(--font-space)] text-6xl font-black text-neon">{number}</p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[.18em] text-muted">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
