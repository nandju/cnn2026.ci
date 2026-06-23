import Image from "next/image";
import { keyNumbers, pillars, sponsors } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function Pillars() {
  return (
    <section className="bg-white py-24">
      <div className="container-cnn">
        <SectionHeader eyebrow="Trois piliers" title="Un camp pensé pour transformer l’influence en infrastructure." text="Chaque pilier relie création, technologie, stratégie et responsabilité pour produire des livrables concrets." />
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft transition hover:-translate-y-1 hover:border-orange/50">
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={pillar.image} alt={pillar.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink font-[var(--font-space)] text-lg font-black text-white">0{index + 1}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-[var(--font-space)] text-2xl font-bold text-ink">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{pillar.text}</p>
                <div className="mt-auto pt-6">
                  <div className="rounded-2xl border border-line bg-cloud p-4 text-sm leading-6 text-ink/80">
                    <span className="font-bold text-orange">À accomplir : </span>{pillar.outcome}
                  </div>
                </div>
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
    <section className="overflow-hidden border-y border-line bg-cloud py-8">
      <div className="flex min-w-max animate-[marquee_24s_linear_infinite] items-center gap-6 px-6">
        {[...sponsors, ...sponsors].map((logo, index) => (
          <span key={`${logo}-${index}`} className="flex h-20 w-44 items-center justify-center rounded-2xl border border-line bg-white px-8 py-4 shadow-soft">
            <Image src={logo} alt="Partenaire CNN 2026" width={120} height={48} className="h-10 w-auto object-contain" />
          </span>
        ))}
      </div>
    </section>
  );
}

export function KeyNumbers() {
  return (
    <section className="bg-cloud py-24 text-ink">
      <div className="container-cnn grid gap-4 md:grid-cols-4">
        {keyNumbers.map(([number, label]) => (
          <div key={label} className="rounded-[2rem] border border-line bg-white p-7 shadow-soft">
            <p className="font-[var(--font-space)] text-6xl font-black text-orange">{number}</p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[.18em] text-muted">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
