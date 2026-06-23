"use client";

import { useEffect, useState } from "react";
import { TimeLeft, ZERO_TIME } from "@/data/countdown";

/** Calcule le temps restant jusqu'à une cible (timestamp ms). */
function computeTimeLeft(target: number): TimeLeft {
  const totalMs = Math.max(0, target - Date.now());
  return {
    days: Math.floor(totalMs / 86_400_000),
    hours: Math.floor((totalMs / 3_600_000) % 24),
    minutes: Math.floor((totalMs / 60_000) % 60),
    seconds: Math.floor((totalMs / 1_000) % 60),
    totalMs,
    isComplete: totalMs <= 0,
  };
}

/**
 * Hook de compte à rebours dynamique côté client.
 * - Met à jour le temps restant chaque seconde.
 * - Démarre à ZERO_TIME pour éviter tout écart d'hydratation SSR.
 * - Nettoie proprement l'intervalle au démontage.
 */
export function useCountdown(targetDate: string): TimeLeft {
  const [time, setTime] = useState<TimeLeft>(ZERO_TIME);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    // Calcul immédiat dès le montage, puis rafraîchissement chaque seconde.
    setTime(computeTimeLeft(target));
    const intervalId = window.setInterval(() => {
      setTime(computeTimeLeft(target));
    }, 1_000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  return time;
}
