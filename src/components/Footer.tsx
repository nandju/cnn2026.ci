import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-cloud text-ink">
      <div className="container-cnn py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_.8fr_.8fr]">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={siteConfig.logoDark}
                alt="CNN 2026"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
                priority
              />
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              Plateforme éditoriale premium dédiée à la Creator Economy,
              à l’intelligence artificielle et à la structuration des talents
              en Afrique de l’Ouest.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-ink/50">
              Navigation
            </p>

            <div className="flex flex-col gap-3 text-sm text-muted">
              <Link href="/the-concept" className="hover:text-orange transition">
                Le concept
              </Link>

              <Link href="/the-draft" className="hover:text-orange transition">
                The Draft
              </Link>

              <Link
                href="/mentors-program"
                className="hover:text-orange transition"
              >
                Programme & Mentors
              </Link>

              <Link href="/white-paper" className="hover:text-orange transition">
                Livre blanc
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-ink/50">
              Contact
            </p>

            <div className="flex flex-col gap-3 text-sm text-muted">
              <Link
                href="/press-partners"
                className="hover:text-orange transition"
              >
                Partenaires & Presse
              </Link>

              <Link href="/contact" className="hover:text-orange transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-line">
        <div className="container-cnn py-5 text-center text-sm text-muted">
          © 2026 CNN — Tous droits réservés.
          <span className="mx-2">•</span>
          Designed & Developed by{" "}
          <span className="font-semibold text-orange">AfroLink</span>
        </div>
      </div>
    </footer>
  );
}