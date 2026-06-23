"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useCountdown } from "@/hooks/useCountdown";
import {
  celebrationPopup,
  countdownMilestones,
  eventDate,
  infoPopup,
  PopupContent,
  storageKeys,
  TimeLeft,
} from "@/data/countdown";
import { CountdownPopup } from "./CountdownPopup";

interface CountdownContextValue {
  /** Temps restant, mis à jour chaque seconde. */
  time: TimeLeft;
  /** Indique si le popup est ouvert. */
  isPopupOpen: boolean;
  /** Contenu courant du popup. */
  popup: PopupContent | null;
  /** Ouvre le popup. Sans argument, affiche le contenu pertinent du moment. */
  openPopup: (content?: PopupContent) => void;
  /** Ferme le popup. */
  closePopup: () => void;
}

const CountdownContext = createContext<CountdownContextValue | null>(null);

/** Construit le contenu d'un palier en y ajoutant le call-to-action. */
function milestoneToPopup(title: string, message: string): PopupContent {
  return {
    variant: "milestone",
    title,
    message,
    primaryLabel: "Candidater maintenant",
    primaryHref: "/apply",
  };
}

/** Retourne le contenu à afficher lors d'une ouverture manuelle (banner / countdown). */
function defaultPopupFor(isComplete: boolean): PopupContent {
  return isComplete ? celebrationPopup : infoPopup;
}

export function CountdownProvider({ children }: { children: React.ReactNode }) {
  const time = useCountdown(eventDate);
  const [popup, setPopup] = useState<PopupContent | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = useCallback(
    (content?: PopupContent) => {
      setPopup(content ?? defaultPopupFor(time.isComplete));
      setIsPopupOpen(true);
    },
    [time.isComplete],
  );

  const closePopup = useCallback(() => setIsPopupOpen(false), []);

  // Décision d'affichage automatique, une seule fois au montage.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const target = new Date(eventDate).getTime();
    const remainingMs = target - Date.now();

    // Jour J : popup de célébration (une seule fois par utilisateur).
    if (remainingMs <= 0) {
      if (!localStorage.getItem(storageKeys.celebration)) {
        setPopup(celebrationPopup);
        setIsPopupOpen(true);
        localStorage.setItem(storageKeys.celebration, "1");
      }
      return;
    }

    // Paliers : on choisit le seuil atteint le plus proche du jour J, non encore vu.
    const remainingHours = remainingMs / 3_600_000;
    const reached = countdownMilestones
      .filter((m) => remainingHours <= m.thresholdHours)
      .sort((a, b) => a.thresholdHours - b.thresholdHours);
    const chosen = reached.find(
      (m) => !localStorage.getItem(storageKeys.milestone(m.id)),
    );

    if (chosen) {
      setPopup(milestoneToPopup(chosen.title, chosen.message));
      setIsPopupOpen(true);
      // On marque le palier choisi ET tous les paliers plus anciens comme vus,
      // afin de ne jamais réafficher une annonce dépassée.
      countdownMilestones
        .filter((m) => m.thresholdHours >= chosen.thresholdHours)
        .forEach((m) => localStorage.setItem(storageKeys.milestone(m.id), "1"));
      return;
    }

    // Sinon : popup d'information générique, une fois par session de navigation.
    if (!sessionStorage.getItem(storageKeys.infoSession)) {
      setPopup(infoPopup);
      setIsPopupOpen(true);
      sessionStorage.setItem(storageKeys.infoSession, "1");
    }
  }, []);

  const value = useMemo<CountdownContextValue>(
    () => ({ time, isPopupOpen, popup, openPopup, closePopup }),
    [time, isPopupOpen, popup, openPopup, closePopup],
  );

  return (
    <CountdownContext.Provider value={value}>
      {children}
      <CountdownPopup
        open={isPopupOpen}
        content={popup}
        onClose={closePopup}
      />
    </CountdownContext.Provider>
  );
}

/** Accès au contexte du compte à rebours. */
export function useCountdownContext(): CountdownContextValue {
  const ctx = useContext(CountdownContext);
  if (!ctx) {
    throw new Error("useCountdownContext doit être utilisé dans un CountdownProvider");
  }
  return ctx;
}
