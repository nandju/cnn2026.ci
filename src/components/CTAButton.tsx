import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const applicationUrl = "https://bit.ly/CandidatureCNN2026";

export function CTAButton({ href, label }: { href?: string; label?: string }) {
  const text = label ?? (siteConfig.isAfterEvent ? "Télécharger le livre blanc" : "Candidater maintenant");
  const target = href ?? (siteConfig.isAfterEvent ? "/white-paper#download" : applicationUrl);
  const isExternal = target.startsWith("http");

  return (
    <Link
      href={target}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange to-neon px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:scale-[1.02] hover:shadow-greenGlow"
    >
      {text}
      <ArrowRight size={16} />
    </Link>
  );
}
