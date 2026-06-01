export const siteConfig = {
  name: "CNN 2026",
  title: "CNN 2026 — Creator Economy West Africa",
  description: "Un camp immersif pour structurer la Creator Economy en Afrique de l’Ouest.",
  draftDeadline: "2026-09-30T23:59:00+00:00",
  isAfterEvent: false,
};

export const pillars = [
  {
    title: "Création de contenu & plaidoyer",
    text: "Transformer des créateurs en voix stratégiques capables de porter des récits utiles, responsables et influents.",
    outcome: "Production de campagnes, messages de plaidoyer et formats éditoriaux à fort impact.",
  },
  {
    title: "Intelligence artificielle",
    text: "Accélérer les workflows créatifs grâce aux outils d’IA, sans sacrifier l’éthique, l’originalité et la qualité.",
    outcome: "Méthodes, prompts, prototypes et cas d’usage applicables aux réalités locales.",
  },
  {
    title: "Réseaux sociaux & monétisation",
    text: "Structurer la croissance, l’audience, la distribution et les modèles économiques des talents sélectionnés.",
    outcome: "Stratégies de plateforme, offres commerciales et feuille de route de monétisation.",
  },
];

export const keyNumbers = [
  ["30", "Ambassadeurs"],
  ["4", "Jours d’immersion"],
  ["1", "Livre blanc national"],
  ["6", "Squads élites"],
];

export const partners = ["Meta", "Agence Digitale", "Studio IA", "Media Lab", "Brand Council", "Creator Fund"];

export const mentors = [
  ["Aïcha Koné", "Représentante Meta"],
  ["Moussa Traoré", "Directeur d’agence"],
  ["Nadia Bamba", "Experte IA créative"],
  ["Jean Kouamé", "Stratège monétisation"],
  ["Fatou Diallo", "Productrice éditoriale"],
  ["Chris Mensah", "Analyste social media"],
];

export const talents = Array.from({ length: 30 }, (_, index) => ({
  name: `Talent ${String(index + 1).padStart(2, "0")}`,
  role: index % 3 === 0 ? "Création" : index % 3 === 1 ? "IA" : "Monétisation",
}));

export const squads = ["Advocacy Lab", "AI Studio", "Monetization Room", "Social Growth", "Brand Content", "Impact Media"];
