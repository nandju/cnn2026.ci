import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal py-12">
      <div className="container-cnn grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Link href="/" className="font-[var(--font-space)] text-2xl font-bold tracking-tight">
            CNN <span className="text-orange">2026</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted">
            Plateforme éditoriale premium dédiée à la Creator Economy, à l’intelligence artificielle et à la structuration des talents en Afrique de l’Ouest.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-white/60">Navigation</p>
          <div className="grid gap-2 text-sm text-muted">
            <Link href="/the-concept">Le concept</Link>
            <Link href="/the-draft">The Draft</Link>
            <Link href="/mentors-program">Programme & Mentors</Link>
            <Link href="/white-paper">Livre blanc</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-white/60">Contact</p>
          <div className="grid gap-2 text-sm text-muted">
            <Link href="/press-partners">Partenaires & Presse</Link>
            <Link href="/contact">Contact</Link>
            <span>© 2026 CNN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
