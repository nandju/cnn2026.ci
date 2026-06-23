export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[.25em] text-orange">{eyebrow}</p>
      <h2 className="font-[var(--font-space)] text-3xl font-bold tracking-tight text-ink md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-7 text-muted md:text-lg">{text}</p> : null}
    </div>
  );
}
