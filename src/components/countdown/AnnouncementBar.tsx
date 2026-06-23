"use client";

import { useEffect, useState } from "react";
import { X, Bell } from "lucide-react";
import { useCountdownContext } from "./CountdownProvider";

/**
 * Bannière fine affichée au-dessus de la navbar.
 * - Rappelle le compte à rebours et permet de rouvrir le popup.
 * - Refermable pour la session courante (sessionStorage).
 */
export function AnnouncementBar() {
  const { time, openPopup } = useCountdownContext();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem("cnn_banner_dismissed") === "1");
  }, []);

  if (dismissed) return null;

  const dismiss = () => {
    sessionStorage.setItem("cnn_banner_dismissed", "1");
    setDismissed(true);
  };

  const label = time.isComplete
    ? "CNN 2026 est officiellement lancé"
    : `CNN 2026 — J-${time.days} · ${String(time.hours).padStart(2, "0")}h ${String(time.minutes).padStart(2, "0")}m ${String(time.seconds).padStart(2, "0")}s`;

  return (
    <div className="bg-gradient-to-r from-orange via-orange to-neon text-white">
      <div className="container-cnn flex h-9 items-center justify-between gap-3 text-xs font-semibold sm:text-sm">
        <button
          type="button"
          onClick={() => openPopup()}
          className="flex min-w-0 items-center gap-2 truncate transition hover:opacity-90"
        >
          <Bell size={14} className="shrink-0 animate-soft-ring" />
          <span className="truncate">{label}</span>
          <span className="hidden shrink-0 rounded-full bg-white/20 px-2 py-0.5 font-bold sm:inline">
            En savoir plus
          </span>
        </button>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fermer la bannière"
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition hover:bg-white/20"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
