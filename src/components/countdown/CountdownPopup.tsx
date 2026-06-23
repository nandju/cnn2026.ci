"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { X } from "lucide-react";
import { PopupContent } from "@/data/countdown";

interface CountdownPopupProps {
  open: boolean;
  content: PopupContent | null;
  onClose: () => void;
}

/** Petite couche de confettis CSS (uniquement pour la célébration). */
function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => {
        const colors = ["#FF6A00", "#16B364", "#0B0D10", "#FFB088"];
        return {
          left: Math.random() * 100,
          delay: Math.random() * 0.8,
          duration: 2.6 + Math.random() * 1.8,
          color: colors[i % colors.length],
          size: 6 + Math.random() * 6,
          rotate: Math.random() * 360,
        };
      }),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute top-[-12px] block animate-confetti rounded-[2px]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.6}px`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export function CountdownPopup({ open, content, onClose }: CountdownPopupProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Fermeture au clavier (Échap) + focus initial + verrouillage du scroll.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open || !content) return null;

  const isCelebration = content.variant === "celebration";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cnn-popup-title"
      aria-describedby="cnn-popup-message"
    >
      {/* Fond assombri cliquable pour fermer */}
      <button
        type="button"
        aria-label="Fermer la fenêtre"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/50 backdrop-blur-sm animate-fade-in"
      />

      {/* Carte du popup */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft animate-pop-in">
        {isCelebration && <Confetti />}

        {/* Liseré de marque en haut */}
        <div className="h-1.5 w-full bg-gradient-to-r from-orange via-orange/70 to-neon" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white/80 text-ink transition hover:border-orange hover:text-orange"
        >
          <X size={18} />
        </button>

        <div className="relative px-7 py-8 sm:px-9 sm:py-10">
          <p className="mb-3 inline-flex rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-[.22em] text-orange">
            {isCelebration ? "Lancement officiel" : "Compte à rebours"}
          </p>

          <h2
            id="cnn-popup-title"
            className="font-[var(--font-space)] text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {content.title}
          </h2>

          <p
            id="cnn-popup-message"
            className="mt-4 text-base leading-7 text-muted"
          >
            {content.message}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {content.primaryHref && content.primaryLabel ? (
              <Link
                href={content.primaryHref}
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange to-neon px-6 py-3 text-sm font-black text-white shadow-glow transition hover:scale-[1.02]"
              >
                {content.primaryLabel}
              </Link>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-bold text-ink transition hover:border-orange hover:text-orange"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
