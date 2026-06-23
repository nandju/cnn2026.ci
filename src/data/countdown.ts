// Configuration centrale du compte à rebours CNN 2026.
// Tout est statique / côté client : aucune dépendance serveur requise.

/** Date cible du lancement officiel de CNN 2026 (heure locale du visiteur). */
export const eventDate = "2026-07-16T09:00:00";

/** Représente le temps restant décomposé. */
export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isComplete: boolean;
}

/** Valeur neutre utilisée avant le premier calcul (évite les écarts d'hydratation SSR). */
export const ZERO_TIME: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  totalMs: 0,
  isComplete: false,
};

/** Variantes visuelles du popup. */
export type PopupVariant = "info" | "milestone" | "celebration";

/** Contenu affiché dans le popup. */
export interface PopupContent {
  variant: PopupVariant;
  title: string;
  message: string;
  primaryLabel?: string;
  primaryHref?: string;
}

/** Palier d'annonce déclenché avant le jour J. */
export interface Milestone {
  id: string;
  /** Seuil en heures : le palier est "atteint" dès que le temps restant passe en dessous. */
  thresholdHours: number;
  title: string;
  message: string;
}

/**
 * Paliers ordonnés du plus lointain au plus proche.
 * Chaque palier n'est affiché qu'une seule fois par utilisateur (localStorage).
 */
export const countdownMilestones: Milestone[] = [
  {
    id: "m30",
    thresholdHours: 30 * 24,
    title: "Plus qu'un mois avant CNN 2026",
    message:
      "La prochaine génération de créateurs, bâtisseurs et innovateurs se prépare. Le rendez-vous approche.",
  },
  {
    id: "m15",
    thresholdHours: 15 * 24,
    title: "J-15",
    message:
      "Les préparatifs entrent dans leur phase finale. Préparez-vous à vivre une expérience exceptionnelle.",
  },
  {
    id: "m7",
    thresholdHours: 7 * 24,
    title: "J-7",
    message: "Une semaine nous sépare du lancement officiel de CNN 2026.",
  },
  {
    id: "m3",
    thresholdHours: 3 * 24,
    title: "J-3",
    message: "L'événement approche à grands pas.",
  },
  {
    id: "m1",
    thresholdHours: 24,
    title: "Demain, c'est le grand jour",
    message: "CNN 2026 ouvre officiellement ses portes demain.",
  },
  {
    id: "mh",
    thresholdHours: 6,
    title: "Plus que quelques heures",
    message: "Le lancement est imminent.",
  },
];

/** Popup générique affiché une fois par session (à chaque ouverture de la plateforme). */
export const infoPopup: PopupContent = {
  variant: "info",
  title: "CNN 2026 arrive",
  message:
    "Le compte à rebours est lancé pour le lancement officiel de CNN 2026, le 16 juillet 2026. Rejoignez la prochaine génération de créateurs, bâtisseurs et innovateurs.",
  primaryLabel: "Candidater maintenant",
  primaryHref: "/apply",
};

/** Popup de célébration affiché le jour J (une seule fois). */
export const celebrationPopup: PopupContent = {
  variant: "celebration",
  title: "🎉 Félicitations !",
  message:
    "CNN 2026 est officiellement lancé. Merci à toutes les personnes qui ont contribué à cette aventure. Ensemble, construisons l'avenir de la Creator Economy africaine.",
  primaryLabel: "Découvrir l'événement",
  primaryHref: "/the-concept",
};

/** Clés de stockage centralisées. */
export const storageKeys = {
  celebration: "cnn_celebrated",
  infoSession: "cnn_info_session",
  milestone: (id: string) => `cnn_ms_${id}`,
};
