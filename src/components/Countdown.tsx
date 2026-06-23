"use client";

import { useCountdownContext } from "./countdown/CountdownProvider";

export function Countdown() {
  const { time, openPopup } = useCountdownContext();

  const cells: { label: string; value: number }[] = [
    { label: "jours", value: time.days },
    { label: "heures", value: time.hours },
    { label: "minutes", value: time.minutes },
    { label: "secondes", value: time.seconds },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container-cnn rounded-[2rem] border border-orange/30 bg-gradient-to-r from-orange/10 via-cloud to-neon/10 p-8 text-ink shadow-soft">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.22em] text-orange">Lancement de CNN 2026</p>
            <p className="mt-2 text-muted">
              {time.isComplete
                ? "CNN 2026 est officiellement lancé. Découvrez l’événement."
                : "Compte à rebours jusqu’au 16 juillet 2026. Cliquez pour en savoir plus."}
            </p>
            <button
              type="button"
              onClick={() => openPopup()}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange to-neon px-5 py-2.5 text-sm font-black text-white shadow-glow transition hover:scale-[1.02]"
            >
              {time.isComplete ? "Découvrir l’événement" : "Voir l’annonce"}
            </button>
          </div>
          <button
            type="button"
            onClick={() => openPopup()}
            aria-label="Ouvrir l’annonce du compte à rebours"
            className="grid grid-cols-4 gap-3 text-center"
          >
            {cells.map((cell) => (
              <div key={cell.label} className="rounded-2xl border border-line bg-white px-4 py-4 shadow-soft transition hover:border-orange/50">
                <p className="font-[var(--font-space)] text-3xl font-black tabular-nums text-ink">
                  {String(cell.value).padStart(2, "0")}
                </p>
                <p className="text-[.65rem] uppercase tracking-[.18em] text-muted">{cell.label}</p>
              </div>
            ))}
          </button>
        </div>
      </div>
    </section>
  );
}
